# Secretspirit - Web Development & UI/UX Design Services

A modern, high-performance Next.js website for Secretspirit, a UI/UX design and web development agency

## 🎯 Project Overview

Secretspirit is a digital agency offering:
- UI/UX Design Services
- Web Development (React, Angular, NodeJS)
- Custom Website Development
- Design Thinking & Strategy
- Branding & Digital Design Services

---

## 🚀 Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Motion, Framer Motion
- **UI Components:** Shadcn/ui, PrimeReact
- **Icons:** Lucide React, React Icons
- **Carousel:** Embla Carousel
- **Forms:** React Phone Input 2
- **State Management:** React Hooks
- **Build Tool:** Turbopack (development)

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── hire-us/           # Hire us page
│   ├── services/          # Services pages (design, development, research)
│   ├── work/              # Work/portfolio pages
│   ├── works/             # Works listing
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── common/            # Reusable components (buttons, headers, etc.)
│   ├── layout/            # Layout components (header, footer)
│   └── ui/                # UI primitives (cards, modals, etc.)
├── features/              # Feature-specific components
│   ├── About/
│   ├── Blog/
│   ├── Contact/
│   ├── Hire-Us/
│   ├── Home/
│   ├── Services/
│   └── Works/
├── data/                  # Static data (blogs.json, projects.json)
├── services/              # API services
├── lib/                   # Utilities and helpers
└── styles/                # Global styles
```

---

## 📋 Features

- ✅ Responsive design
- ✅ SEO optimized (metadata, sitemap, robots.txt)
- ✅ Blog system with dynamic routing
- ✅ Portfolio/Works showcase
- ✅ Contact form with validation
- ✅ Team careers page
- ✅ Awards & testimonials sections
- ✅ Service pages (Design, Development, Research)
- ✅ Smooth animations and transitions
- ✅ Mobile-first approach

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install
```

### Development

```bash
# Run development server with Turbopack
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Normal Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Other Commands

```bash
# Lint the project
npm run lint

# Analyze bundle size
npm run analyze
```

---

## 🔧 Configuration

### Next.js Config

The project uses optimized Next.js configuration (see `next.config.ts`):

```typescript
// Production-ready configuration enabled:
output: "export"           // Static export (optional)
images.unoptimized: true   // For static hosting
trailingSlash: true        // SEO optimization
```

### Tailwind CSS

- Config: `postcss.config.js`
- Styles: `src/styles/globals.css`
- Base Color: Neutral
- CSS Variables: Enabled

### TypeScript

- Target: ES2017
- Strict mode enabled
- Path alias: `@/*` → `./src/*`

---

## 📦 Dependencies

### Core
- next (^16.0.10)
- react (^19.1.0)
- react-dom (^19.1.0)

### UI & Styling
- tailwindcss (^4.1.11)
- clsx (^2.1.1)
- tailwind-merge (^3.3.1)

### Components
- @radix-ui/react-select
- @radix-ui/react-slot
- primereact (^10.9.7)
- primeicons (^7.0.0)

### Animation
- motion (^12.23.24)
- typewriter-effect (^2.22.0)
- embla-carousel-react (^8.6.0)

### Forms & Input
- react-phone-input-2 (^2.15.1)
- react-tooltip (^5.29.1)

### Icons
- lucide-react (^0.545.0)
- react-icons (^5.5.0)

---

## 🚀 Production Build

### For Static Build (Static Hosting)

If you need to deploy to static hosting:

1. **Uncomment configuration in `next.config.ts`:**
```typescript
const nextConfig: NextConfig = {
  output: "export",           // Static export mode
  images: {
    unoptimized: true,        // Required for static hosting
  },
  trailingSlash: true,        // SEO optimization
};
```

2. **Build the project:**
```bash
npm run build
```

3. **Deploy the `out/` folder** to your static hosting provider (S3, GitHub Pages, Netlify, Cloudflare Pages, etc.)

### For Standard Production (Node.js Server)

Keep the `next.config.ts` configuration commented out and use:

```bash
npm run build
npm start
```

---

## 📝 Environment Variables

Create `.env.local` for environment-specific settings:

```bash
# Example
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 🔍 SEO

- Metadata configured in page components
- Dynamic sitemap generation (`src/app/sitemap.ts`)
- Robots.txt for search engines (`src/app/robots.ts`)
- Semantic HTML structure
- Open Graph tags support

---

## 📄 License

This project is proprietary. All rights reserved © Secretspirit.

