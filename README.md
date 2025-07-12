# Modern Streaming Platform

A modern, responsive streaming platform built with React, TypeScript, and Framer Motion. This project provides a customizable foundation for creating Netflix-like streaming services with beautiful animations and motion effects.

## ✨ Features

- **🎬 Modern UI/UX**: Clean, responsive design with smooth animations
- **🎭 Motion Effects**: Framer Motion animations throughout the interface
- **⚙️ Highly Configurable**: Easy customization for different brands and themes
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🎨 Theme Support**: Dynamic color schemes and branding
- **🌍 Multi-language**: Built-in language selector support
- **🚀 Performance Optimized**: Fast loading with Vite and optimized animations

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Shadcn/ui** - Beautiful, accessible components
- **Lucide React** - Beautiful icons

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd modern-streaming-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Customization

### Brand Configuration

The app is highly configurable through the `src/config/app.ts` file. You can easily switch between different brand configurations:

```typescript
// Switch to Netflix branding
export const currentConfig: AppConfig = netflixConfig;

// Switch to Disney+ branding  
export const currentConfig: AppConfig = disneyConfig;

// Use custom configuration
export const currentConfig: AppConfig = {
  name: "NETFLIX",
  logo: "NETFLIX",
  primaryColor: "#FF6B35",
  // ... other custom settings
};
```

### Available Configurations

- **NETFLIX** (default) - Generic streaming platform
- **Netflix** - Netflix-inspired design
- **Disney+** - Disney+ inspired design

### Customizing Sections

Each section can be customized independently:

```typescript
sections: {
  trending: {
    title: "Trending Now",
    showViewAll: true
  },
  popular: {
    title: "Popular on NETFLIX", 
    showViewAll: false
  }
}
```

### Feature Toggles

Control which features are displayed:

```typescript
features: {
  showLanguageSelector: true,
  showSignIn: true,
  showEmailSignup: true
}
```

## 🎭 Motion Effects

The app includes several pre-built animation variants:

- **fadeInUp** - Elements fade in from bottom
- **fadeInLeft/Right** - Elements slide in from sides
- **scaleIn** - Elements scale up from 0
- **cardHover** - Card hover effects
- **staggerContainer** - Staggered child animations

### Adding New Animations

Create new animations in `src/lib/motion.ts`:

```typescript
export const customAnimation: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/            # Shadcn/ui components
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section
│   ├── TrendingNow.tsx # Movie carousel
│   └── ...
├── config/
│   └── app.ts         # App configuration
├── data/
│   └── movieData.ts   # Sample movie data
├── lib/
│   ├── motion.ts      # Animation variants
│   └── utils.ts       # Utility functions
└── pages/
    ├── Index.tsx      # Main page
    └── NotFound.tsx   # 404 page
```

## 🎬 Adding Content

### Movies and Shows

Add your content to `src/data/movieData.ts`:

```typescript
export const movieData = {
  trending: [
    {
      id: 1,
      title: "Your Movie Title",
      image: "https://your-image-url.com/image.jpg",
      rating: "95",
      year: "2024",
      genre: "Action"
    }
  ]
};
```

### Hero Section

Customize the hero section in the config:

```typescript
hero: {
  title: "Your Hero Title",
  subtitle: "Your subtitle text",
  description: "Your description text",
  backgroundImage: "https://your-background.jpg",
  ctaText: "Get Started",
  emailPlaceholder: "Email address"
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Or connect your GitHub repository

## 🎯 Performance Tips

- **Lazy Loading**: Components load animations only when in viewport
- **Optimized Images**: Use WebP format for better performance
- **Motion Reduction**: Respect user's motion preferences
- **Bundle Splitting**: Vite automatically optimizes bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for amazing animations
- [Shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons

---

Made with ❤️ and lots of ☕
