# Deploy ExpressAid to Azure Windows VM with PM2

## Step 1: Create Azure Windows VM

1. Go to Azure Portal → Create VM
2. Choose Windows Server 2022
3. Select size (B2s or DS2v2 recommended)
4. Enable RDP access
5. Note down the public IP

## Step 2: Connect to VM and Install Software

### Connect via RDP
- Use Remote Desktop to connect to your VM
- Use the credentials you set during VM creation

### Install Node.js
```cmd
# Download and install Node.js 18.x LTS
# Go to https://nodejs.org and download Windows installer
# Run the installer and follow the setup

# Verify installation
node --version
npm --version
```

### Install PM2
```cmd
npm install -g pm2
```

## Step 3: Deploy Your Website

### Upload Files
1. Copy all your website files to the VM
2. You can use:
   - Azure Storage Account + AzCopy
   - Git clone from your repository
   - Direct file copy via RDP

### Install Dependencies
```cmd
cd C:\path\to\your\website
npm install
```

### Create Logs Directory
```cmd
mkdir logs
```

## Step 4: Start with PM2

### Start the Application
```cmd
pm2 start ecosystem.config.js
```

### Save PM2 Configuration
```cmd
pm2 save
pm2 startup
```

### Check Status
```cmd
pm2 status
pm2 logs expressaid
```

## Step 5: Configure Firewall

### Open Port 3000
```cmd
netsh advfirewall firewall add rule name="ExpressAid Web" dir=in action=allow protocol=TCP localport=3000
```

### Or use Windows Firewall GUI
1. Open Windows Defender Firewall
2. Click "Advanced settings"
3. Add new Inbound Rule for port 3000

## Step 6: Access Your Website

Your website will be available at:
`http://YOUR_VM_PUBLIC_IP:3000`

## Useful PM2 Commands

```cmd
# View logs
pm2 logs expressaid

# Restart app
pm2 restart expressaid

# Stop app
pm2 stop expressaid

# Delete app
pm2 delete expressaid

# Monitor
pm2 monit
```

## Optional: Setup IIS Reverse Proxy

If you want to use port 80 instead of 3000:

1. Install IIS with URL Rewrite module
2. Create web.config file in your app directory
3. Configure reverse proxy to forward requests to localhost:3000

## Cost Comparison

- **Azure App Service**: ~$13-75/month
- **Azure VM**: ~$30-100/month (but more control)
- **Static Web Apps**: Free tier available

## Security Notes

1. Change default RDP port
2. Use strong passwords
3. Enable Windows Firewall
4. Consider Azure Application Gateway for SSL
5. Regular Windows updates 