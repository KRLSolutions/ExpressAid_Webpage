# Create deployment directory
if (!(Test-Path 'C:\www\expressaid')) {
    New-Item -ItemType Directory -Path 'C:\www\expressaid' -Force
}

# Stop current application
pm2 stop expressaid 2>$null
pm2 delete expressaid 2>$null

# Navigate to deployment directory
Set-Location 'C:\www\expressaid'

# Remove old files (keep .env)
Get-ChildItem -Path '.' -Exclude '.env' | Remove-Item -Recurse -Force

# Extract new deployment
if (Test-Path 'deployment.zip') {
    New-Item -ItemType Directory -Path 'C:\temp\extract' -Force
    Expand-Archive -Path 'deployment.zip' -DestinationPath 'C:\temp\extract' -Force
    Get-ChildItem -Path 'C:\temp\extract\deployment' | Move-Item -Destination '.' -Force
    Remove-Item -Path 'C:\temp\extract' -Recurse -Force
    Remove-Item -Path 'deployment.zip' -Force
} else {
    Write-Host 'Deployment package not found'
    exit 1
}

# Install dependencies
npm ci --production

# Create .env file if it doesn't exist
if (!(Test-Path '.env')) {
    Write-Host 'Creating .env file...'
    Add-Content -Path '.env' -Value "MONGODB_URI=$env:MONGODB_URI"
    Add-Content -Path '.env' -Value "DB_NAME=$env:DB_NAME"
    Add-Content -Path '.env' -Value "COLLECTION_NAME=$env:COLLECTION_NAME"
    Add-Content -Path '.env' -Value "PORT=3000"
}

# Start application with PM2
pm2 start server.js --name expressaid
pm2 save
pm2 startup

Write-Host 'Deployment completed successfully!' 