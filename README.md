# ExpressAid Website

A modern, responsive website for ExpressAid - On-Demand Nursing Care services.

## Features

- **Patient Booking**: Easy-to-use interface for booking certified nurses
- **Nurse Applications**: Professional application form for nurses to join the network
- **Responsive Design**: Mobile-friendly interface
- **Beautiful Animations**: Smooth scroll animations and visual effects
- **Real Nurse Images**: Authentic healthcare imagery throughout the site

## Email Setup for Nurse Applications

To receive nurse application details via email, follow these steps:

### 1. Set up EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

### 2. Configure Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Add a new service (Gmail, Outlook, or other email provider)
3. Follow the setup instructions for your chosen service
4. Note down your **Service ID**

### 3. Create Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Create a new template with this content:

**Subject**: New Nurse Application - ExpressAid

**Body**:
```
New Nurse Application Received

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
License Number: {{license}}
Years of Experience: {{experience}}
Specialization: {{specialization}}
Certifications: {{certifications}}

Application submitted on: {{submitted_date}}
```

3. Note down your **Template ID**

### 4. Update the Website Code

In `index.html`, replace the placeholder values:

```javascript
// Replace YOUR_PUBLIC_KEY with your EmailJS public key
emailjs.init("YOUR_PUBLIC_KEY");

// Replace YOUR_SERVICE_ID with your EmailJS service ID
// Replace YOUR_TEMPLATE_ID with your EmailJS template ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)

// Replace your-email@example.com with your actual email
to_email: 'your-email@example.com'
```

### 5. Test the Form

1. Fill out the nurse application form
2. Submit the form
3. Check your email for the application details

## File Structure

```
ExpressAid_Website/
├── index.html          # Main website file
├── styles.css          # CSS styles and animations
├── assets/             # Images and media files
│   ├── nurse-hero.jpg
│   ├── nurses-standing.jpg
│   ├── test.jpg
│   └── ... (other images)
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript**: Form handling and interactions
- **EmailJS**: Email functionality
- **Font Awesome**: Icons
- **Tailwind CSS**: Utility-first CSS framework

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Setup Instructions

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Configure EmailJS as described above
4. Test the nurse application form

## Customization

- **Colors**: Modify the blue color scheme in `styles.css`
- **Images**: Replace images in the `assets/` folder
- **Content**: Update text content in `index.html`
- **Email Template**: Customize the email template in EmailJS dashboard

## Support

For technical support or questions about the EmailJS setup, refer to the [EmailJS documentation](https://www.emailjs.com/docs/).

# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/expressaid-website.git
   cd expressaid-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start local development server**
   ```bash
   npm start
   ```
   The website will be available at `http://localhost:8080`

4. **Run validation tests**
   ```bash
   npm test
   ```

## 🏗️ Build & Deploy

### Prerequisites

- Azure subscription
- Azure CLI installed
- Node.js 18+ installed

### Azure Static Web Apps Deployment

#### Option 1: Azure DevOps Pipeline

1. **Set up Azure DevOps**
   - Create a new Azure DevOps project
   - Import this repository
   - Set up the pipeline using `azure-pipelines.yml`

2. **Configure Azure Service Connection**
   - Go to Project Settings > Service Connections
   - Create a new Azure Resource Manager service connection
   - Name it "Azure Subscription"

3. **Set up Pipeline Variables**
   - Go to Pipelines > Edit pipeline
   - Add the following variables:
     - `StaticWebAppApiToken`: Your Azure Static Web Apps deployment token

4. **Create Azure Resources**
   ```bash
   # Login to Azure
   az login
   
   # Create resource group
   az group create --name ExpressAid-RG --location East US
   
   # Create Static Web App
   az staticwebapp create \
     --name expressaid-website \
     --resource-group ExpressAid-RG \
     --location East US \
     --source . \
     --branch main
   ```

#### Option 2: GitHub Actions

1. **Set up GitHub Secrets**
   - Go to your repository Settings > Secrets and variables > Actions
   - Add the following secrets:
     - `AZURE_STATIC_WEB_APPS_API_TOKEN`: Your deployment token
     - `AZURE_STATIC_WEB_APPS_URL`: Your app URL

2. **Push to trigger deployment**
   ```bash
   git push origin main
   ```

#### Option 3: Manual Deployment

1. **Install Azure Static Web Apps CLI**
   ```bash
   npm install -g @azure/static-web-apps-cli
   ```

2. **Deploy to staging**
   ```bash
   npm run deploy:staging
   ```

3. **Deploy to production**
   ```bash
   npm run deploy:production
   ```

## 📁 Project Structure

```
expressaid-website/
├── index.html              # Main website file
├── styles.css              # Custom styles
├── assets/                 # Images and media files
├── azure-pipelines.yml     # Azure DevOps pipeline
├── staticwebapp.config.json # Static Web Apps configuration
├── package.json            # Node.js dependencies
├── scripts/
│   └── validate.js         # Website validation script
└── .github/
    └── workflows/
        └── azure-deploy.yml # GitHub Actions workflow
```

## 🔧 Configuration

### Static Web Apps Configuration

The `staticwebapp.config.json` file configures:
- **Routing**: SPA routing for single-page application
- **Caching**: Optimized caching for assets and HTML
- **Security**: Security headers and CSP policies
- **MIME Types**: Support for modern image formats

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `AZURE_STATIC_WEB_APPS_API_TOKEN` | Deployment token | Yes |
| `AZURE_STATIC_WEB_APPS_URL` | App URL | Yes (for testing) |

## 🧪 Testing

### Validation Tests
```bash
npm run validate
```

This runs checks for:
- Required files existence
- HTML structure validation
- CSS file validation
- Assets directory validation
- Performance checks

### Manual Testing
1. **Accessibility**: Test with screen readers
2. **Performance**: Use Lighthouse in Chrome DevTools
3. **Cross-browser**: Test in Chrome, Firefox, Safari, Edge
4. **Mobile**: Test responsive design on various devices

## 📊 Monitoring

### Azure Application Insights
1. Create Application Insights resource
2. Add monitoring code to your website
3. Set up alerts for performance issues

### Custom Domain Setup
1. **Add custom domain in Azure Portal**
   - Go to Static Web App > Custom domains
   - Add your domain (e.g., `expressaid.com`)

2. **Configure DNS**
   - Add CNAME record pointing to your Static Web App
   - Wait for DNS propagation

3. **SSL Certificate**
   - Azure automatically provisions SSL certificates
   - No additional configuration needed

## 🔒 Security

The website includes:
- **Content Security Policy**: Restricts resource loading
- **Security Headers**: XSS protection, frame options
- **HTTPS Enforcement**: Automatic SSL/TLS
- **Input Validation**: Client-side and server-side validation

## 🚀 Performance Optimization

### Current Optimizations
- **CDN**: Azure CDN for global distribution
- **Caching**: Optimized cache headers
- **Image Optimization**: Modern formats (WebP, AVIF)
- **Minification**: CSS and JS minification

### Future Optimizations
- **Image Compression**: Implement automated image optimization
- **Lazy Loading**: Add lazy loading for images
- **Service Worker**: Implement PWA capabilities
- **Critical CSS**: Inline critical CSS

## 📝 Deployment Checklist

Before deploying to production:

- [ ] All tests pass (`npm test`)
- [ ] Website validates successfully (`npm run validate`)
- [ ] Performance audit completed
- [ ] Accessibility audit completed
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness verified
- [ ] SSL certificate configured
- [ ] Custom domain configured (if applicable)
- [ ] Monitoring and alerts set up
- [ ] Backup strategy implemented

## 🆘 Troubleshooting

### Common Issues

1. **Deployment Fails**
   - Check Azure Static Web Apps API token
   - Verify resource group exists
   - Ensure proper permissions

2. **Website Not Loading**
   - Check DNS configuration
   - Verify SSL certificate
   - Check Azure Static Web Apps status

3. **Assets Not Loading**
   - Verify `staticwebapp.config.json` routing
   - Check file paths in HTML
   - Ensure assets are in correct directory

### Getting Help

- **Azure Documentation**: [Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- **GitHub Issues**: Create an issue in this repository
- **Azure Support**: Contact Azure support for platform issues

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Website**: [ExpressAid](https://expressaid.azurestaticapps.net)
- **Email**: support@expressaid.com
- **GitHub**: [ExpressAid Repository](https://github.com/your-org/expressaid-website)