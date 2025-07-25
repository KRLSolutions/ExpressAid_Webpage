# Set environment variables
$env:MONGODB_URI = "${{ secrets.MONGODB_URI }}"
$env:DB_NAME = "${{ secrets.DB_NAME }}"
$env:COLLECTION_NAME = "${{ secrets.COLLECTION_NAME }}"
$env:PORT = "${{ secrets.PORT }}"

# Set paths
$deployPath = "C:\www\expressaid"
$zipPath = Join-Path $deployPath "deployment.zip"

# Ensure target directory exists
if (!(Test-Path $deployPath)) {
    New-Item -ItemType Directory -Path $deployPath -Force
}

# Navigate to deployment path
cd $deployPath

# Stop and remove previous PM2 process
pm2 stop expressaid 2>$null
pm2 delete expressaid 2>$null

# Clean up old files except .env and deployment.zip
Get-ChildItem -Path $deployPath -Exclude '.env', 'deployment.zip' | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

# Unzip deployment
if (Test-Path $zipPath) {
    Expand-Archive -Path $zipPath -DestinationPath "$deployPath\temp" -Force
    Move-Item "$deployPath\temp\deployment\*" $deployPath -Force
    Remove-Item "$deployPath\temp" -Recurse -Force
    Remove-Item $zipPath -Force
} else {
    Write-Host "❌ deployment.zip not found"
    exit 1
}

# Create .env if missing
if (!(Test-Path ".env")) {
    Write-Output "MONGODB_URI=$env:MONGODB_URI" | Out-File -Append -Encoding UTF8 ".env"
    Write-Output "DB_NAME=$env:DB_NAME" | Out-File -Append -Encoding UTF8 ".env"
    Write-Output "COLLECTION_NAME=$env:COLLECTION_NAME" | Out-File -Append -Encoding UTF8 ".env"
    Write-Output "PORT=3000" | Out-File -Append -Encoding UTF8 ".env"
}

# Install production dependencies
npm ci --production

# Start server with PM2
pm2 start server.js --name expressaid
pm2 save

Write-Host "✅ Deployment completed successfully!"
