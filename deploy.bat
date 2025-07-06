@echo off
echo 🚀 ExpressAid Azure Static Web App Deployment
echo ================================================

REM Check if Azure CLI is installed
az version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Azure CLI not found. Please install it first:
    echo    Download from: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli
    pause
    exit /b 1
)

REM Check if logged in to Azure
az account show >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Not logged in to Azure. Please run 'az login' first.
    pause
    exit /b 1
)

echo ✅ Azure CLI found and logged in
echo.

set /p resourceGroup="Enter resource group name (or press Enter for 'expressaid-rg'): "
if "%resourceGroup%"=="" set resourceGroup=expressaid-rg

set /p webAppName="Enter web app name (or press Enter for 'expressaid-webapp'): "
if "%webAppName%"=="" set webAppName=expressaid-webapp

set /p location="Enter Azure region (or press Enter for 'eastus'): "
if "%location%"=="" set location=eastus

set /p repoUrl="Enter your GitHub repository URL: "

echo.
echo 📋 Deployment Summary:
echo    Resource Group: %resourceGroup%
echo    Web App Name: %webAppName%
echo    Location: %location%
echo    Repository: %repoUrl%
echo.

set /p confirm="Proceed with deployment? (y/N): "
if /i not "%confirm%"=="y" (
    echo Deployment cancelled.
    pause
    exit /b 0
)

echo.
echo 🔄 Creating resource group...
az group create --name %resourceGroup% --location %location%

echo 🔄 Creating Static Web App...
az staticwebapp create --name %webAppName% --resource-group %resourceGroup% --source %repoUrl% --branch main --app-location "/" --skip-app-build true

echo.
echo ✅ Deployment completed!
echo Your app will be available at: https://%webAppName%.azurestaticapps.net
echo.
echo 📝 Next steps:
echo    1. Wait 2-5 minutes for the initial deployment to complete
echo    2. Visit the URL above to see your live site
echo    3. Configure custom domain if needed
echo    4. Set up environment variables if required
echo.
pause 