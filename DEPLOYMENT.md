# Deployment Guide - ExpressAid Website to Azure Windows VM

This guide explains how to deploy the ExpressAid website to an Azure Windows VM using GitHub Actions.

## Prerequisites

1. **Azure VM** with Windows Server
2. **GitHub Repository** with your code
3. **RDP/SSH Access** to your Azure VM
4. **Node.js and PM2** installed on the VM

## Azure VM Setup

### 1. Create Azure VM
- Create a new VM in Azure Portal
- Choose Windows Server 2019/2022
- Configure networking (allow RDP port 3389 and SSH port 22)
- Note down the public IP address

### 2. Install Required Software on VM

RDP into your VM and run these commands in PowerShell as Administrator:

```powershell
# Enable Windows Subsystem for Linux (WSL) for better development experience
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

# Install Node.js
# Download and install from https://nodejs.org/en/download/
# Or use Chocolatey package manager:
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
choco install nodejs -y

# Install PM2 globally
npm install -g pm2

# Install IIS (optional, for reverse proxy)
Enable-WindowsOptionalFeature -Online -FeatureName IIS-WebServerRole, IIS-WebServer, IIS-CommonHttpFeatures, IIS-HttpErrors, IIS-HttpLogging, IIS-RequestFiltering, IIS-StaticContent, IIS-DefaultDocument, IIS-DirectoryBrowsing, IIS-WebSockets

# Create deployment directory
New-Item -ItemType Directory -Path "C:\www\expressaid" -Force
```

### 3. Enable SSH on Windows (if not already enabled)

```powershell
# Install OpenSSH Server
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0

# Start and configure SSH service
Start-Service sshd
Set-Service -Name sshd -StartupType 'Automatic'

# Configure firewall
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22

# Set password for your user account (if not already set)
# You can do this through Windows Settings or use:
# net user yourusername yourpassword
```

## GitHub Repository Setup

### 1. Add GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions, and add these secrets:

- **AZURE_VM_HOST**: Your Azure VM's public IP address
- **AZURE_VM_USERNAME**: Your VM username (usually 'Administrator' or your custom username)
- **AZURE_VM_PASSWORD**: Your VM password
- **AZURE_VM_PORT**: SSH port (usually 22)
- **MONGODB_URI**: Your MongoDB connection string
- **DB_NAME**: Your database name
- **COLLECTION_NAME**: Your collection name

### 2. Example Secret Values

```
AZURE_VM_HOST: 20.xxx.xxx.xxx
AZURE_VM_USERNAME: Administrator
AZURE_VM_PASSWORD: YourSecurePassword123!
AZURE_VM_PORT: 22
MONGODB_URI: mongodb://username:password@host:port/database
DB_NAME: expressaid
COLLECTION_NAME: users
```

## Deployment Process

### 1. Automatic Deployment
- Push code to `main` or `master` branch
- GitHub Actions will automatically trigger deployment
- Check Actions tab in GitHub to monitor deployment progress

### 2. Manual Deployment
- Go to Actions tab in GitHub
- Select "Deploy to Azure VM" workflow
- Click "Run workflow"
- Select branch and click "Run workflow"

## Post-Deployment Setup

### 1. Configure IIS (Optional but Recommended)

Create IIS configuration using PowerShell:

```powershell
# Import WebAdministration module
Import-Module WebAdministration

# Create new website
New-Website -Name "ExpressAid" -Port 80 -PhysicalPath "C:\www\expressaid" -ApplicationPool "DefaultAppPool"

# Configure URL Rewrite for reverse proxy
# First, install URL Rewrite module from Microsoft
# Download from: https://www.iis.net/downloads/microsoft/url-rewrite

# Create web.config file
$webConfig = @"
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="ReverseProxyInboundRule1" stopProcessing="true">
                    <match url="(.*)" />
                    <action type="Rewrite" url="http://localhost:3000/{R:1}" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
"@

$webConfig | Out-File -FilePath "C:\www\expressaid\web.config" -Encoding UTF8
```

### 2. Configure Windows Firewall

```powershell
# Allow HTTP and HTTPS
New-NetFirewallRule -DisplayName "HTTP" -Direction Inbound -Protocol TCP -LocalPort 80 -Action Allow
New-NetFirewallRule -DisplayName "HTTPS" -Direction Inbound -Protocol TCP -LocalPort 443 -Action Allow
New-NetFirewallRule -DisplayName "Node.js App" -Direction Inbound -Protocol TCP -LocalPort 3000 -Action Allow

# Allow RDP (if not already allowed)
Enable-NetFirewallRule -DisplayGroup "Remote Desktop"
```

### 3. Set Up SSL (Optional)

```powershell
# Install Certbot for Windows
# Download from: https://certbot.eff.org/instructions?ws=other&os=windows

# Or use Let's Encrypt with IIS
# Install ACMESharp PowerShell module
Install-Module -Name ACMESharp -Force

# Initialize ACME vault
Initialize-ACMEVault

# Create new registration
New-ACMERegistration -Contacts mailto:your-email@domain.com -AcceptTos

# Create new certificate
New-ACMECertificate -DomainName your-domain.com -Generate

# Install certificate in IIS
Install-ACMECertificate -CertificateRef your-domain.com -Installer IIS -InstallerParameters @{SiteName="ExpressAid"}
```

## Monitoring and Management

### PM2 Commands

```bash
# Check application status
pm2 status

# View logs
pm2 logs expressaid

# Restart application
pm2 restart expressaid

# Stop application
pm2 stop expressaid

# Delete application
pm2 delete expressaid
```

### Application Logs

```powershell
# View PM2 logs
pm2 logs expressaid

# View IIS logs
Get-Content "C:\inetpub\logs\LogFiles\W3SVC1\*.log" -Tail 50

# View Windows Event logs
Get-EventLog -LogName Application -Source "IIS*" -Newest 20
```

## Troubleshooting

### Common Issues

1. **SSH Connection Failed**
   - Verify Azure VM IP address
   - Check username and password in GitHub secrets
   - Ensure port 22 is open in Azure NSG
   - Verify OpenSSH Server is running on Windows

2. **Application Not Starting**
   - Check PM2 logs: `pm2 logs expressaid`
   - Verify environment variables in `.env` file
   - Check MongoDB connection
   - Ensure Node.js is properly installed

3. **Port Already in Use**
   - Check if another process is using port 3000
   - Kill existing process: `netstat -ano | findstr :3000` then `taskkill /PID <PID> /F`

4. **Permission Issues**
   - Ensure proper permissions on `C:\www\expressaid`
   - Run PowerShell as Administrator
   - Check Windows Defender exclusions if needed

### Useful Commands

```powershell
# Check Node.js version
node --version

# Check PM2 version
pm2 --version

# Check disk space
Get-WmiObject -Class Win32_LogicalDisk | Select-Object DeviceID, @{Name="Size(GB)";Expression={[math]::Round($_.Size/1GB,2)}}, @{Name="FreeSpace(GB)";Expression={[math]::Round($_.FreeSpace/1GB,2)}}

# Check memory usage
Get-WmiObject -Class Win32_OperatingSystem | Select-Object @{Name="TotalMemory(GB)";Expression={[math]::Round($_.TotalVisibleMemorySize/1MB,2)}}, @{Name="FreeMemory(GB)";Expression={[math]::Round($_.FreePhysicalMemory/1MB,2)}}

# Check running processes
Get-Process | Where-Object {$_.ProcessName -like "*node*"}

# Check network connections
netstat -ano | findstr :3000
```

## Security Considerations

1. **Firewall**: Configure Azure NSG to only allow necessary ports
2. **SSH Keys**: Use SSH keys instead of passwords
3. **Environment Variables**: Never commit sensitive data to repository
4. **Regular Updates**: Keep system and dependencies updated
5. **Backups**: Set up regular backups of your application and database

## Support

If you encounter issues:
1. Check GitHub Actions logs
2. Review PM2 logs on the VM
3. Verify all secrets are correctly set
4. Ensure VM has sufficient resources (CPU, RAM, disk space) 