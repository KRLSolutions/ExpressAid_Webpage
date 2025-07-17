# Custom Domain Setup for ExpressAid VM

## Option 1: Azure Application Gateway (Recommended)

### Step 1: Create Application Gateway
1. Go to Azure Portal → Create Application Gateway
2. Choose "Standard v2" SKU
3. Configure:
   - **Name**: `expressaid-gateway`
   - **Region**: Same as your VM
   - **Virtual Network**: Create new or use existing
   - **Subnet**: Create new subnet for gateway
   - **Frontend IP**: Public IP
   - **Backend Pool**: Add your VM's private IP
   - **HTTP Settings**: Port 3000

### Step 2: Configure Custom Domain
1. In Application Gateway → Listeners
2. Add new listener:
   - **Name**: `expressaid-listener`
   - **Frontend IP**: Your public IP
   - **Protocol**: HTTP (or HTTPS with SSL certificate)
   - **Port**: 80 (or 443 for HTTPS)
   - **Host name**: `yourdomain.com`

### Step 3: Add SSL Certificate (Optional)
1. Upload your SSL certificate to Application Gateway
2. Configure HTTPS listener on port 443
3. Set up HTTP to HTTPS redirect

## Option 2: Azure Front Door

### Step 1: Create Front Door
1. Azure Portal → Create Front Door
2. Configure:
   - **Name**: `expressaid-frontdoor`
   - **Backend**: Your VM's public IP:3000
   - **Custom domain**: Add your domain

### Step 2: Configure DNS
1. Add CNAME record:
   ```
   yourdomain.com → expressaid-frontdoor.azurefd.net
   ```

## Option 3: Direct DNS (Simplest)

### Step 1: Point DNS to VM
1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Add A record:
   ```
   yourdomain.com → YOUR_VM_PUBLIC_IP
   ```

### Step 2: Configure IIS Reverse Proxy (Optional)
If you want to use port 80 instead of 3000:

1. Install IIS on your VM
2. Install URL Rewrite module
3. Create `web.config` in your app directory:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="ReverseProxyToNodeJS" stopProcessing="true">
                    <match url="(.*)" />
                    <action type="Rewrite" url="http://localhost:3000/{R:1}" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
```

## Option 4: Cloudflare (Free & Easy)

### Step 1: Add Domain to Cloudflare
1. Sign up at cloudflare.com
2. Add your domain
3. Update nameservers at your registrar

### Step 2: Configure DNS
1. Add A record:
   ```
   yourdomain.com → YOUR_VM_PUBLIC_IP
   ```

### Step 3: Configure Proxy
1. Enable the orange cloud (proxy) for your A record
2. This gives you:
   - Free SSL certificate
   - DDoS protection
   - CDN
   - Automatic HTTPS redirect

## Cost Comparison

- **Application Gateway**: ~$20-50/month
- **Front Door**: ~$15-30/month  
- **Direct DNS**: Free (just domain cost)
- **Cloudflare**: Free tier available

## Recommended Setup

For a simple website like ExpressAid, I recommend:

1. **Cloudflare** (free tier) for SSL and protection
2. **Direct DNS** pointing to your VM
3. **IIS reverse proxy** to use port 80

This gives you:
- ✅ Custom domain
- ✅ Free SSL certificate
- ✅ DDoS protection
- ✅ Low cost
- ✅ Simple setup

## Final Access URLs

After setup, your site will be available at:
- `https://yourdomain.com` (with Cloudflare)
- `http://yourdomain.com` (direct DNS)
- `https://yourdomain.com` (Application Gateway) 