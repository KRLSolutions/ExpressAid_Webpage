# ExpressAid - Next.js Version

This is the Next.js conversion of the ExpressAid healthcare services website. The original Express.js application has been completely converted to use Next.js 14 with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern React Architecture**: Built with Next.js 14 and React 18
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Modern, utility-first CSS framework
- **Responsive Design**: Mobile-first responsive design
- **Component-Based**: Modular, reusable components
- **API Routes**: Server-side API endpoints for backend functionality
- **SEO Optimized**: Built-in SEO features with Next.js
- **Performance**: Optimized for speed and user experience

## 📁 Project Structure

```
ExpressAid_Webpage/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── about-us/
│   │   └── page.tsx            # About Us page
│   ├── terms-and-conditions/
│   │   └── page.tsx            # Terms & Conditions page
│   ├── privacy-policy/
│   │   └── page.tsx            # Privacy Policy page
│   └── api/                     # API routes
│       └── users/
│           └── delete/
│               └── route.ts     # Delete user API
├── components/                   # React components
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── StatsSection.tsx
│   ├── FeaturesSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ApplicationSection.tsx
│   ├── FAQSection.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   └── ScrollToTop.tsx
├── assets/                       # Static assets (images, icons)
├── package.json                  # Dependencies and scripts
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## 🛠️ Technologies Used

- **Next.js 14**: React framework with app router
- **React 18**: Latest React with hooks and modern features
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **MongoDB**: Database for user management
- **Font Awesome**: Icons
- **EmailJS**: Email functionality

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB database (for backend functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ExpressAid_Webpage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   DB_NAME=your_database_name
   COLLECTION_NAME=your_collection_name
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔄 Conversion Summary

### What Was Converted

1. **Express.js Server → Next.js API Routes**
   - Server-side logic moved to `/app/api/` routes
   - MongoDB integration maintained
   - User deletion functionality preserved

2. **Static HTML → React Components**
   - All HTML pages converted to React components
   - Modular component architecture
   - Reusable components for better maintainability

3. **CSS → Tailwind CSS**
   - Custom CSS converted to Tailwind utility classes
   - Responsive design maintained
   - Animations and hover effects preserved

4. **Routing → Next.js App Router**
   - Express routes converted to Next.js pages
   - Dynamic routing capabilities
   - SEO optimization built-in

### Key Improvements

- **Performance**: Next.js provides automatic code splitting and optimization
- **SEO**: Built-in SEO features with metadata API
- **Type Safety**: Full TypeScript support
- **Developer Experience**: Hot reloading, better debugging
- **Scalability**: Component-based architecture for easier maintenance

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean, professional healthcare design
- **Animations**: Smooth scroll animations and hover effects
- **Accessibility**: WCAG compliant components
- **Performance**: Optimized images and lazy loading

## 🔧 Configuration

### Next.js Configuration
The `next.config.js` file includes:
- Image optimization settings
- Environment variable configuration
- Experimental features for app router

### Tailwind Configuration
The `tailwind.config.js` includes:
- Custom color palette
- Custom animations
- Responsive breakpoints
- Font configuration

## 📱 Pages

1. **Home Page** (`/`) - Main landing page with all sections
2. **About Us** (`/about-us`) - Company information and mission
3. **Terms & Conditions** (`/terms-and-conditions`) - Legal terms
4. **Privacy Policy** (`/privacy-policy`) - Privacy information

## 🔌 API Endpoints

- `DELETE /api/users/delete` - Delete user by name and phone number

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Compatible with Next.js
- **AWS Amplify**: Full support for Next.js
- **Docker**: Containerized deployment

## 🔒 Environment Variables

Required environment variables:
- `MONGODB_URI`: MongoDB connection string
- `DB_NAME`: Database name
- `COLLECTION_NAME`: Collection name for users

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@expressaid.com or create an issue in the repository.

---

**Note**: This is a complete conversion from Express.js to Next.js. All functionality from the original application has been preserved while modernizing the technology stack and improving performance, maintainability, and developer experience.