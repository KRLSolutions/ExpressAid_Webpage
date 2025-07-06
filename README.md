# ExpressAid Website

A modern healthcare platform connecting patients with qualified nurses for in-home care services.

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