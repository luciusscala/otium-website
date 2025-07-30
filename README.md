# Otium Website

The official website for Otium - The Cursor for DevOps Engineers. A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme optimized for tech companies
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Engaging demo page with interactive terminal simulation
- **Form Handling**: Functional contact form with validation and feedback
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Performance**: Fast loading with Next.js 15 and optimized assets
- **Accessibility**: Built with accessibility best practices

## 📋 Pages

- **Home** (`/`): Landing page with hero section, features, and call-to-action
- **About** (`/about`): Detailed information about Otium's capabilities
- **Demo** (`/demo`): Interactive demo with terminal simulation and feature showcase
- **Contact** (`/contact`): Contact form with validation and success/error states
- **FAQ** (`/faq`): Frequently asked questions with expandable accordion

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI (Accordion, Dialog, Button)
- **Icons**: Lucide React
- **Animations**: React Simple Typewriter
- **Development**: ESLint, PostCSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd otium-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
otium-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── demo/              # Demo page
│   ├── faq/               # FAQ page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── loading.tsx        # Loading component
│   └── page.tsx           # Home page
├── components/             # Reusable components
│   ├── ui/                # UI components (Radix UI)
│   ├── footer.tsx         # Footer component
│   └── header.tsx         # Header component
├── lib/                   # Utility functions
└── public/                # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: Black (`#000000`)
- **Secondary**: Gray-300 (`#d1d5db`)
- **Background**: Black with gray accents
- **Text**: White and gray variations

### Typography
- **Font**: System fonts with light weights for headings
- **Sizes**: Responsive text sizing with Tailwind classes

### Components
- **Buttons**: Consistent styling with hover states
- **Forms**: Dark theme with proper focus states
- **Cards**: Glassmorphism effect with backdrop blur

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS v4 with custom configuration in `tailwind.config.js`.

### ESLint
ESLint is configured for Next.js with TypeScript support.

### TypeScript
Strict TypeScript configuration with proper type checking.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🔄 Development Workflow

1. Create feature branch from main
2. Make changes and test locally
3. Push changes and create pull request
4. Review and merge to main
5. Automatic deployment to production

## 📈 Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Security

- **Content Security Policy**: Configured for production
- **HTTPS**: Required for all deployments
- **Form Validation**: Client and server-side validation

## 📞 Support

For questions or issues:
- Email: hello@otium.tech
- GitHub Issues: [Repository Issues](https://github.com/otium/website/issues)

## 📄 License

© 2024 Otium Technology. All rights reserved.
