# ExpressAid - On-Demand Nursing Care

A modern, responsive website for ExpressAid, an on-demand nursing care service. Built with HTML, CSS, and JavaScript, featuring a beautiful UI with smooth animations and professional design.

## 🚀 Quick Deploy to Azure Static Web Apps

### Option 1: One-Click Deploy (Recommended)
1. **Push your code to GitHub**
2. **Click the button below to deploy directly to Azure:**

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticWebApp)

3. **Fill in the details:**
   - Resource Group: Create new or use existing
   - Name: `expressaid-webapp`
   - Region: Choose closest to your users
   - Source: GitHub
   - Repository: Select your repository
   - Branch: `main`
   - Build Preset: Custom
   - App location: `/`
   - Skip app build: Yes

### Option 2: Automated Script
Run the deployment script:
```powershell
# PowerShell
.\deploy.ps1

# Or Command Prompt
deploy.bat
```

### Option 3: Manual Azure CLI
```bash
# Login to Azure
az login

# Create resource group
az group create --name expressaid-rg --location eastus

# Deploy to Static Web App
az staticwebapp create \
  --name expressaid-webapp \
  --resource-group expressaid-rg \
  --source https://github.com/YOUR_USERNAME/YOUR_REPO \
  --branch main \
  --app-location "/" \
  --skip-app-build true
```

## 📁 Project Structure

```
ExpressAid_Webpage/
├── index.html          # Main webpage
├── styles.css          # Custom styles
├── assets/             # Images and media files
│   ├── nurse-hero.jpg
│   ├── nurse.webp
│   └── ...
├── staticwebapp.config.json  # Azure routing config
├── deploy.ps1          # PowerShell deployment script
├── deploy.bat          # Batch deployment script
└── DEPLOYMENT.md       # Detailed deployment guide
```

## 🎨 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean, professional medical theme
- **Smooth Animations**: CSS animations and transitions
- **Contact Form**: EmailJS integration for contact functionality
- **SEO Optimized**: Proper meta tags and structure
- **Fast Loading**: Optimized images and code

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript**: Interactive functionality
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icons
- **EmailJS**: Contact form functionality

## 🌐 Deployment Options

### Azure Static Web Apps (Recommended)
- **Free tier available**
- **Global CDN**
- **Automatic HTTPS**
- **Built-in security**

### Other Options
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repos
- **Firebase Hosting**: Google's hosting solution

## 📱 Features

- **Hero Section**: Eye-catching landing area
- **Features**: Service highlights
- **How It Works**: Process explanation
- **Testimonials**: Customer reviews
- **Nurse Application**: Recruitment section
- **Contact Form**: Lead generation
- **Mobile Responsive**: Perfect on all devices

## 🔧 Customization

### Colors
The primary color scheme uses blue tones. To change:
1. Edit `styles.css`
2. Update CSS custom properties
3. Modify Tailwind classes in `index.html`

### Content
- Update text in `index.html`
- Replace images in `assets/` folder
- Modify contact form settings

### Styling
- Custom CSS in `styles.css`
- Tailwind utilities in HTML
- Responsive breakpoints included

## 🚀 Performance

- **Optimized Images**: WebP and compressed formats
- **Minified CSS**: Production-ready styles
- **Lazy Loading**: Images load on demand
- **CDN**: Global content delivery

## 📞 Support

For deployment issues:
1. Check the `DEPLOYMENT.md` file
2. Verify Azure CLI installation
3. Ensure GitHub repository is public
4. Check Azure subscription status

## 📄 License

This project is for ExpressAid. All rights reserved.

---

**Deploy your ExpressAid website in minutes with Azure Static Web Apps!** 🚀