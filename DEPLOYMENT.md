# Deploy ExpressAid to Azure Static Web Apps

This guide will help you deploy your ExpressAid webpage to Azure Static Web Apps.

## Prerequisites

1. **Azure Account**: You need an Azure subscription
2. **GitHub Account**: Your code should be in a GitHub repository
3. **Azure CLI** (optional but recommended)

## Method 1: Deploy via Azure Portal (Easiest)

### Step 1: Prepare Your Repository
1. Push your code to a GitHub repository
2. Make sure your repository contains:
   - `index.html` (main page)
   - `styles.css` (styling)
   - `assets/` folder (images)
   - `staticwebapp.config.json` (routing configuration)

### Step 2: Create Static Web App in Azure Portal
1. Go to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource"
3. Search for "Static Web App"
4. Click "Create"
5. Fill in the details:
   - **Subscription**: Choose your subscription
   - **Resource Group**: Create new or use existing
   - **Name**: `expressaid-webapp` (or your preferred name)
   - **Region**: Choose closest to your users
   - **Source**: GitHub
   - **Repository**: Select your repository
   - **Branch**: `main`
   - **Build Preset**: Custom
   - **App location**: `/` (root directory)
   - **API location**: Leave empty
   - **Output location**: Leave empty

### Step 3: Configure Build Settings
In the build configuration:
- **App location**: `/`
- **API location**: (leave empty)
- **Output location**: (leave empty)
- **Skip app build**: Yes (since it's already built)

### Step 4: Deploy
1. Click "Review + Create"
2. Review settings and click "Create"
3. Wait for deployment to complete (usually 2-5 minutes)

## Method 2: Deploy via Azure CLI

### Step 1: Install Azure CLI
```bash
# Windows (using winget)
winget install Microsoft.AzureCLI

# Or download from: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli
```

### Step 2: Login to Azure
```bash
az login
```

### Step 3: Create Static Web App
```bash
# Create resource group (if needed)
az group create --name expressaid-rg --location eastus

# Create static web app
az staticwebapp create \
  --name expressaid-webapp \
  --resource-group expressaid-rg \
  --source https://github.com/YOUR_USERNAME/YOUR_REPO \
  --branch main \
  --app-location "/" \
  --skip-app-build true
```

## Method 3: Deploy via GitHub Actions

### Step 1: Create GitHub Repository
1. Create a new repository on GitHub
2. Push your code to the repository

### Step 2: Create Static Web App
1. Follow Method 1 or 2 to create the Static Web App
2. During creation, connect it to your GitHub repository

### Step 3: Configure GitHub Actions
The workflow file `.github/workflows/azure-static-web-apps.yml` will be automatically created by Azure.

## Post-Deployment

### Access Your App
Once deployed, you'll get a URL like:
`https://expressaid-webapp.azurestaticapps.net`

### Custom Domain (Optional)
1. Go to your Static Web App in Azure Portal
2. Click "Custom domains"
3. Add your domain and configure DNS

### Environment Variables
If you need environment variables:
1. Go to your Static Web App in Azure Portal
2. Click "Configuration"
3. Add your environment variables

## Troubleshooting

### Common Issues:
1. **404 Errors**: Make sure `staticwebapp.config.json` is configured correctly
2. **Build Failures**: Check that all files are in the correct location
3. **Image Not Loading**: Verify image paths are relative to the root

### Useful Commands:
```bash
# Check deployment status
az staticwebapp show --name expressaid-webapp --resource-group expressaid-rg

# View deployment logs
az staticwebapp deployment list --name expressaid-webapp --resource-group expressaid-rg
```

## Cost
- Azure Static Web Apps have a generous free tier
- Free tier includes: 2 GB storage, 15 GB bandwidth per month
- Additional usage is very affordable

## Security
- HTTPS is automatically enabled
- Built-in DDoS protection
- Global CDN for fast loading worldwide

Your ExpressAid website will be live and accessible worldwide once deployed! 