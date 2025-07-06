# ExpressAid Website Deployment Script (PowerShell)
# This script automates the deployment process to Azure Static Web Apps

param(
    [Parameter(Position=0)]
    [string]$Command = "help"
)

# Configuration
$ResourceGroup = "ExpressAid-RG"
$Location = "East US"
$StagingAppName = "expressaid-website-staging"
$ProductionAppName = "expressaid-website"

# Function to write colored output
function Write-Status {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Blue
}

function Write-Success {
    param([string]$Message)
    Write-Host "[SUCCESS] $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

# Function to check if Azure CLI is installed
function Test-AzureCLI {
    try {
        $null = Get-Command az -ErrorAction Stop
        Write-Success "Azure CLI is installed"
        return $true
    }
    catch {
        Write-Error "Azure CLI is not installed. Please install it first."
        Write-Host "Visit: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli" -ForegroundColor Cyan
        return $false
    }
}

# Function to check if logged in to Azure
function Test-AzureLogin {
    try {
        $null = az account show 2>$null
        Write-Success "Logged in to Azure"
        return $true
    }
    catch {
        Write-Warning "Not logged in to Azure. Please log in."
        az login
        return $true
    }
}

# Function to create resource group
function New-ResourceGroup {
    Write-Status "Creating resource group: $ResourceGroup"
    
    try {
        $existingGroup = az group show --name $ResourceGroup 2>$null
        if ($existingGroup) {
            Write-Warning "Resource group $ResourceGroup already exists"
        } else {
            az group create --name $ResourceGroup --location $Location
            Write-Success "Resource group created"
        }
    }
    catch {
        Write-Error "Failed to create resource group"
        throw
    }
}

# Function to validate website files
function Test-WebsiteFiles {
    Write-Status "Validating website files..."
    
    $requiredFiles = @("index.html", "styles.css", "assets")
    
    foreach ($file in $requiredFiles) {
        if (-not (Test-Path $file)) {
            Write-Error "Required file/directory not found: $file"
            exit 1
        }
    }
    
    # Run validation script if it exists
    if (Test-Path "scripts/validate.js") {
        Write-Status "Running validation script..."
        node scripts/validate.js
    }
    
    Write-Success "Website validation completed"
}

# Function to build website
function Build-Website {
    Write-Status "Building website..."
    
    # Create dist directory
    if (Test-Path "dist") {
        Remove-Item -Recurse -Force "dist"
    }
    New-Item -ItemType Directory -Name "dist" | Out-Null
    
    # Copy website files
    Copy-Item "*.html" "dist/"
    Copy-Item "*.css" "dist/"
    Copy-Item -Recurse "assets" "dist/"
    
    # Copy configuration files
    if (Test-Path "staticwebapp.config.json") {
        Copy-Item "staticwebapp.config.json" "dist/"
    }
    
    Write-Success "Website built successfully"
}

# Function to deploy to staging
function Deploy-Staging {
    Write-Status "Deploying to staging environment..."
    
    try {
        # Check if staging app exists
        $existingApp = az staticwebapp show --name $StagingAppName --resource-group $ResourceGroup 2>$null
        
        if ($existingApp) {
            Write-Warning "Staging app already exists, updating..."
            az staticwebapp update `
                --name $StagingAppName `
                --resource-group $ResourceGroup `
                --source . `
                --branch develop
        } else {
            Write-Status "Creating staging app..."
            az staticwebapp create `
                --name $StagingAppName `
                --resource-group $ResourceGroup `
                --location $Location `
                --source . `
                --branch develop `
                --app-location "/" `
                --output-location "/" `
                --api-location ""
        }
        
        # Get staging URL
        $stagingUrl = az staticwebapp show `
            --name $StagingAppName `
            --resource-group $ResourceGroup `
            --query "defaultHostname" `
            --output tsv
        
        Write-Success "Staging deployment completed!"
        Write-Host "Staging URL: https://$stagingUrl" -ForegroundColor Cyan
    }
    catch {
        Write-Error "Failed to deploy to staging"
        throw
    }
}

# Function to deploy to production
function Deploy-Production {
    Write-Status "Deploying to production environment..."
    
    try {
        # Check if production app exists
        $existingApp = az staticwebapp show --name $ProductionAppName --resource-group $ResourceGroup 2>$null
        
        if ($existingApp) {
            Write-Warning "Production app already exists, updating..."
            az staticwebapp update `
                --name $ProductionAppName `
                --resource-group $ResourceGroup `
                --source . `
                --branch main
        } else {
            Write-Status "Creating production app..."
            az staticwebapp create `
                --name $ProductionAppName `
                --resource-group $ResourceGroup `
                --location $Location `
                --source . `
                --branch main `
                --app-location "/" `
                --output-location "/" `
                --api-location ""
        }
        
        # Get production URL
        $productionUrl = az staticwebapp show `
            --name $ProductionAppName `
            --resource-group $ResourceGroup `
            --query "defaultHostname" `
            --output tsv
        
        Write-Success "Production deployment completed!"
        Write-Host "Production URL: https://$productionUrl" -ForegroundColor Cyan
    }
    catch {
        Write-Error "Failed to deploy to production"
        throw
    }
}

# Function to show deployment status
function Show-DeploymentStatus {
    Write-Status "Checking deployment status..."
    
    # Check staging
    try {
        $stagingUrl = az staticwebapp show `
            --name $StagingAppName `
            --resource-group $ResourceGroup `
            --query "defaultHostname" `
            --output tsv 2>$null
        
        if ($stagingUrl) {
            Write-Success "Staging: https://$stagingUrl"
        } else {
            Write-Warning "Staging app not found"
        }
    }
    catch {
        Write-Warning "Staging app not found"
    }
    
    # Check production
    try {
        $productionUrl = az staticwebapp show `
            --name $ProductionAppName `
            --resource-group $ResourceGroup `
            --query "defaultHostname" `
            --output tsv 2>$null
        
        if ($productionUrl) {
            Write-Success "Production: https://$productionUrl"
        } else {
            Write-Warning "Production app not found"
        }
    }
    catch {
        Write-Warning "Production app not found"
    }
}

# Function to show help
function Show-Help {
    Write-Host "ExpressAid Website Deployment Script (PowerShell)" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Usage: .\deploy.ps1 [COMMAND]" -ForegroundColor White
    Write-Host ""
    Write-Host "Commands:" -ForegroundColor White
    Write-Host "  setup      - Set up Azure resources and initial configuration" -ForegroundColor Yellow
    Write-Host "  validate   - Validate website files" -ForegroundColor Yellow
    Write-Host "  build      - Build website for deployment" -ForegroundColor Yellow
    Write-Host "  staging    - Deploy to staging environment" -ForegroundColor Yellow
    Write-Host "  production - Deploy to production environment" -ForegroundColor Yellow
    Write-Host "  deploy     - Deploy to both staging and production" -ForegroundColor Yellow
    Write-Host "  status     - Show deployment status" -ForegroundColor Yellow
    Write-Host "  help       - Show this help message" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Examples:" -ForegroundColor White
    Write-Host "  .\deploy.ps1 setup" -ForegroundColor Gray
    Write-Host "  .\deploy.ps1 deploy" -ForegroundColor Gray
    Write-Host "  .\deploy.ps1 status" -ForegroundColor Gray
}

# Main script logic
try {
    switch ($Command.ToLower()) {
        "setup" {
            Write-Status "Setting up Azure resources..."
            if (-not (Test-AzureCLI)) { exit 1 }
            if (-not (Test-AzureLogin)) { exit 1 }
            New-ResourceGroup
            Write-Success "Setup completed!"
        }
        "validate" {
            Test-WebsiteFiles
        }
        "build" {
            Test-WebsiteFiles
            Build-Website
        }
        "staging" {
            if (-not (Test-AzureCLI)) { exit 1 }
            if (-not (Test-AzureLogin)) { exit 1 }
            Test-WebsiteFiles
            Build-Website
            Deploy-Staging
        }
        "production" {
            if (-not (Test-AzureCLI)) { exit 1 }
            if (-not (Test-AzureLogin)) { exit 1 }
            Test-WebsiteFiles
            Build-Website
            Deploy-Production
        }
        "deploy" {
            if (-not (Test-AzureCLI)) { exit 1 }
            if (-not (Test-AzureLogin)) { exit 1 }
            Test-WebsiteFiles
            Build-Website
            Deploy-Staging
            Deploy-Production
        }
        "status" {
            if (-not (Test-AzureCLI)) { exit 1 }
            if (-not (Test-AzureLogin)) { exit 1 }
            Show-DeploymentStatus
        }
        "help" {
            Show-Help
        }
        default {
            Write-Error "Unknown command: $Command"
            Show-Help
            exit 1
        }
    }
}
catch {
    Write-Error "Deployment failed: $($_.Exception.Message)"
    exit 1
} 