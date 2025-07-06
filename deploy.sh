#!/bin/bash

# ExpressAid Website Deployment Script
# This script automates the deployment process to Azure Static Web Apps

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
RESOURCE_GROUP="ExpressAid-RG"
LOCATION="East US"
STAGING_APP_NAME="expressaid-website-staging"
PRODUCTION_APP_NAME="expressaid-website"

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if Azure CLI is installed
check_azure_cli() {
    if ! command -v az &> /dev/null; then
        print_error "Azure CLI is not installed. Please install it first."
        echo "Visit: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
        exit 1
    fi
    print_success "Azure CLI is installed"
}

# Function to check if logged in to Azure
check_azure_login() {
    if ! az account show &> /dev/null; then
        print_warning "Not logged in to Azure. Please log in."
        az login
    fi
    print_success "Logged in to Azure"
}

# Function to create resource group
create_resource_group() {
    print_status "Creating resource group: $RESOURCE_GROUP"
    if az group show --name $RESOURCE_GROUP &> /dev/null; then
        print_warning "Resource group $RESOURCE_GROUP already exists"
    else
        az group create --name $RESOURCE_GROUP --location $LOCATION
        print_success "Resource group created"
    fi
}

# Function to validate website files
validate_website() {
    print_status "Validating website files..."
    
    # Check required files
    required_files=("index.html" "styles.css" "assets")
    for file in "${required_files[@]}"; do
        if [ ! -e "$file" ]; then
            print_error "Required file/directory not found: $file"
            exit 1
        fi
    done
    
    # Run validation script if it exists
    if [ -f "scripts/validate.js" ]; then
        print_status "Running validation script..."
        node scripts/validate.js
    fi
    
    print_success "Website validation completed"
}

# Function to build website
build_website() {
    print_status "Building website..."
    
    # Create dist directory
    rm -rf dist
    mkdir -p dist
    
    # Copy website files
    cp -r *.html *.css assets/ dist/
    
    # Copy configuration files
    if [ -f "staticwebapp.config.json" ]; then
        cp staticwebapp.config.json dist/
    fi
    
    print_success "Website built successfully"
}

# Function to deploy to staging
deploy_staging() {
    print_status "Deploying to staging environment..."
    
    # Check if staging app exists
    if az staticwebapp show --name $STAGING_APP_NAME --resource-group $RESOURCE_GROUP &> /dev/null; then
        print_warning "Staging app already exists, updating..."
        az staticwebapp update \
            --name $STAGING_APP_NAME \
            --resource-group $RESOURCE_GROUP \
            --source . \
            --branch develop
    else
        print_status "Creating staging app..."
        az staticwebapp create \
            --name $STAGING_APP_NAME \
            --resource-group $RESOURCE_GROUP \
            --location $LOCATION \
            --source . \
            --branch develop \
            --app-location "/" \
            --output-location "/" \
            --api-location ""
    fi
    
    # Get staging URL
    STAGING_URL=$(az staticwebapp show \
        --name $STAGING_APP_NAME \
        --resource-group $RESOURCE_GROUP \
        --query "defaultHostname" \
        --output tsv)
    
    print_success "Staging deployment completed!"
    echo "Staging URL: https://$STAGING_URL"
}

# Function to deploy to production
deploy_production() {
    print_status "Deploying to production environment..."
    
    # Check if production app exists
    if az staticwebapp show --name $PRODUCTION_APP_NAME --resource-group $RESOURCE_GROUP &> /dev/null; then
        print_warning "Production app already exists, updating..."
        az staticwebapp update \
            --name $PRODUCTION_APP_NAME \
            --resource-group $RESOURCE_GROUP \
            --source . \
            --branch main
    else
        print_status "Creating production app..."
        az staticwebapp create \
            --name $PRODUCTION_APP_NAME \
            --resource-group $RESOURCE_GROUP \
            --location $LOCATION \
            --source . \
            --branch main \
            --app-location "/" \
            --output-location "/" \
            --api-location ""
    fi
    
    # Get production URL
    PRODUCTION_URL=$(az staticwebapp show \
        --name $PRODUCTION_APP_NAME \
        --resource-group $RESOURCE_GROUP \
        --query "defaultHostname" \
        --output tsv)
    
    print_success "Production deployment completed!"
    echo "Production URL: https://$PRODUCTION_URL"
}

# Function to show deployment status
show_status() {
    print_status "Checking deployment status..."
    
    # Check staging
    if az staticwebapp show --name $STAGING_APP_NAME --resource-group $RESOURCE_GROUP &> /dev/null; then
        STAGING_URL=$(az staticwebapp show \
            --name $STAGING_APP_NAME \
            --resource-group $RESOURCE_GROUP \
            --query "defaultHostname" \
            --output tsv)
        print_success "Staging: https://$STAGING_URL"
    else
        print_warning "Staging app not found"
    fi
    
    # Check production
    if az staticwebapp show --name $PRODUCTION_APP_NAME --resource-group $RESOURCE_GROUP &> /dev/null; then
        PRODUCTION_URL=$(az staticwebapp show \
            --name $PRODUCTION_APP_NAME \
            --resource-group $RESOURCE_GROUP \
            --query "defaultHostname" \
            --output tsv)
        print_success "Production: https://$PRODUCTION_URL"
    else
        print_warning "Production app not found"
    fi
}

# Function to show help
show_help() {
    echo "ExpressAid Website Deployment Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  setup      - Set up Azure resources and initial configuration"
    echo "  validate   - Validate website files"
    echo "  build      - Build website for deployment"
    echo "  staging    - Deploy to staging environment"
    echo "  production - Deploy to production environment"
    echo "  deploy     - Deploy to both staging and production"
    echo "  status     - Show deployment status"
    echo "  help       - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 setup"
    echo "  $0 deploy"
    echo "  $0 status"
}

# Main script logic
case "${1:-help}" in
    "setup")
        print_status "Setting up Azure resources..."
        check_azure_cli
        check_azure_login
        create_resource_group
        print_success "Setup completed!"
        ;;
    "validate")
        validate_website
        ;;
    "build")
        validate_website
        build_website
        ;;
    "staging")
        check_azure_cli
        check_azure_login
        validate_website
        build_website
        deploy_staging
        ;;
    "production")
        check_azure_cli
        check_azure_login
        validate_website
        build_website
        deploy_production
        ;;
    "deploy")
        check_azure_cli
        check_azure_login
        validate_website
        build_website
        deploy_staging
        deploy_production
        ;;
    "status")
        check_azure_cli
        check_azure_login
        show_status
        ;;
    "help"|*)
        show_help
        ;;
esac 