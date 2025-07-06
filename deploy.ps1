# ExpressAid Azure Static Web App Deployment Script
# This script helps you deploy your ExpressAid website to Azure Static Web Apps

Write-Host "🚀 ExpressAid Deployment Script" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

# Check if Azure CLI is installed
try {
    $azVersion = az version --output json | ConvertFrom-Json
    Write-Host "✅ Azure CLI found (version: $($azVersion.'azure-cli'))" -ForegroundColor Green
} catch {
    Write-Host "❌ Azure CLI not found. Please install it first:" -ForegroundColor Red
    Write-Host "   Download from: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli" -ForegroundColor Yellow
    exit 1
}

# Check if logged in to Azure
try {
    $account = az account show --output json | ConvertFrom-Json
    Write-Host "✅ Logged in to Azure as: $($account.user.name)" -ForegroundColor Green
} catch {
    Write-Host "❌ Not logged in to Azure. Please run 'az login' first." -ForegroundColor Red
    exit 1
}

# Get deployment parameters
$resourceGroup = Read-Host "Enter resource group name (or press Enter for 'expressaid-rg')"
if ([string]::IsNullOrWhiteSpace($resourceGroup)) {
    $resourceGroup = "expressaid-rg"
}

$webAppName = Read-Host "Enter web app name (or press Enter for 'expressaid-webapp')"
if ([string]::IsNullOrWhiteSpace($webAppName)) {
    $webAppName = "expressaid-webapp"
}

$location = Read-Host "Enter Azure region (or press Enter for 'eastus')"
if ([string]::IsNullOrWhiteSpace($location)) {
    $location = "eastus"
}

$repoUrl = Read-Host "Enter your GitHub repository URL (e.g., https://github.com/username/repo)"

Write-Host "`n📋 Deployment Summary:" -ForegroundColor Cyan
Write-Host "   Resource Group: $resourceGroup" -ForegroundColor White
Write-Host "   Web App Name: $webAppName" -ForegroundColor White
Write-Host "   Location: $location" -ForegroundColor White
Write-Host "   Repository: $repoUrl" -ForegroundColor White

$confirm = Read-Host "`nProceed with deployment? (y/N)"
if ($confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host "Deployment cancelled." -ForegroundColor Yellow
    exit 0
}

Write-Host "`n🔄 Creating resource group..." -ForegroundColor Yellow
az group create --name $resourceGroup --location $location

Write-Host "🔄 Creating Static Web App..." -ForegroundColor Yellow
az staticwebapp create `
    --name $webAppName `
    --resource-group $resourceGroup `
    --source $repoUrl `
    --branch main `
    --app-location "/" `
    --skip-app-build true

Write-Host "`n✅ Deployment completed!" -ForegroundColor Green
Write-Host "Your app will be available at: https://$webAppName.azurestaticapps.net" -ForegroundColor Cyan
Write-Host "`n📝 Next steps:" -ForegroundColor Yellow
Write-Host "   1. Wait 2-5 minutes for the initial deployment to complete" -ForegroundColor White
Write-Host "   2. Visit the URL above to see your live site" -ForegroundColor White
Write-Host "   3. Configure custom domain if needed" -ForegroundColor White
Write-Host "   4. Set up environment variables if required" -ForegroundColor White 