# Monopolis - Real Estate Platform

## Overview

Monopolis is a modern real estate platform for browsing and discovering properties in Belgium. Built with Next.js 15 (App Router) and TypeScript, the application provides property listings, multi-language support, and an intuitive user interface. The platform is currently in active development with core features being implemented.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**December 2, 2025 - Language Switcher: Dropdown Menu**:
- Converted inline EN/FR/NL buttons to dropdown menu
- Shows globe icon + chevron in navbar (chevron rotates when menu opens)
- Dropdown displays 🇬🇧 English, 🇫🇷 French, 🇳🇱 Dutch with names
- Click handlers work properly - calls i18n.changeLanguage() directly
- LocalStorage persistence saves language preference to i18nextLng
- Clicking outside dropdown closes menu
- Active language highlighted with gray background
- Navigation labels translate instantly when language selected
- Components using useTranslation() re-render immediately on language change
- Clean, functional dropdown implementation in navbar

**December 2, 2025 - Company Info Updated**:
- Updated footer with boutique agency description: "A boutique real estate agency with 4-5 dedicated agents"
- Changed address to: Brusselsesteenweg 10, 1652 Alsemberg
- Updated About Us page mission to reflect boutique agency model with 4-5 agents and personalized service
- Updated About Us stats: 4-5 Dedicated agents, 98% Client satisfaction, 15+ Years in market, 1 Office in Alsemberg
- Updated About Us CTA description to mention "4-5 dedicated agents"
- Updated Contact page with boutique team description and new address
- Updated Google Maps embed to show Alsemberg location
- Property data remains unchanged

**December 2, 2025 - Clean Hover Animations**:
- Added simple underline animation to navigation links (Properties, About Us, Our Services, Contact)
- Property card links have NO hover effects (clean, minimal design)
- Added simple underline animation to all footer links (Company, Services, Contact sections)
- Implemented smooth opacity transition (0.8) to logo links on hover
- All animations use consistent 200ms transitions with ease-in-out timing
- Removed complex CSS animations, replaced with clean, simple, and performant styles
- CSS animations added to globals.css matching premium real estate aesthetic

**December 2, 2025 - Dynamic Property Detail Pages**:
- Created dynamic route `src/app/property/[id]/page.tsx` for individual property details
- Implemented image gallery with thumbnail navigation for properties
- Updated PropertyCard component to link to detail pages using Next.js Link
- Enhanced API response to include all property pictures (urlLarge, urlSmall, urlXXL)
- Added comprehensive property detail layout with specifications, pricing, and contact section
- Property cards now clickable and navigate to `/property/[id]` on click

**December 2, 2025 - Image Domain Configuration**:
- Added `r2.storagewhise.eu` to next.config.ts remotePatterns for Whise image loading
- Fixed image loading errors for all Whise-hosted property images

**November 19, 2025 - Migrated from Vercel to Replit**:
- Updated package.json scripts to bind to 0.0.0.0:5000 for Replit networking
- Modernized next.config.ts to use remotePatterns instead of deprecated domains configuration
- Configured workflow for Next.js development server
- Set up deployment configuration for Replit autoscale mode
- Updated .gitignore to exclude Replit environment files
- Removed unused yarn.lock file (using npm as package manager)
- Dependencies installed successfully; app running on Replit without errors

**Known Warnings** (non-blocking):
- Legacy @next/font package should be replaced with built-in next/font
- Some Image components use legacy layout/objectFit props
- 12 npm vulnerabilities from legacy dependencies (google, tree packages)

## System Architecture

### Frontend Architecture

**Framework**: Next.js 15 with App Router and TypeScript
- Server-side rendering (SSR) and static site generation (SSG) for optimal performance
- TypeScript for type safety across the codebase
- React 19 for component composition

**Styling Strategy**: Hybrid CSS approach
- Tailwind CSS 4 (PostCSS plugin) for utility-first styling
- CSS Modules for component-scoped styles
- Custom CSS variables in `globals.css` for design system tokens (Apple-inspired design language)
- Material-UI components for specific UI elements (dropdowns, sliders)
- Emotion for CSS-in-JS where needed with MUI

**Animation & Interactions**:
- Framer Motion for page transitions and component animations
- Custom PageRevealer component provides route transition effects
- Embla Carousel for image carousels

**Component Architecture**:
- Modular component structure in `src/components/`
- Reusable PropertyCard component for listings
- Shared layout components (Navbar, Footer)
- Client-side components marked with 'use client' directive

**Internationalization**:
- i18next with react-i18next for translation management
- Support for English (en), French (fr), and Dutch (nl)
- Client-side language detection with localStorage persistence
- Translation files in `src/locales/` directory
- SSR-safe configuration with suspense disabled

**Routing Structure**:
- File-based routing with Next.js App Router
- Main pages: home, properties, about, services, contact
- Dynamic route: `property/[id]` for individual property detail pages
- Placeholder pages: buy, rent, sell, valuation, team, careers
- Each route has dedicated page.tsx file
- Property cards link to detail pages using Next.js Link component

**State Management**:
- React hooks (useState, useEffect) for local component state
- No global state management library currently implemented
- Client-side state for filters, forms, and UI interactions

**Data Visualization**:
- Recharts for market reports and analytics
- MarketReport component displays historical price trends (1944-2024)
- Pie charts and line charts for real estate market data

**Image Handling**:
- Next.js Image component for optimized image loading
- Remote image support configured for randomuser.me
- Local images stored in `/public` directory

### External Dependencies

**UI Libraries**:
- Material-UI (MUI) v7 - Select, Slider, and form controls
- Emotion (required by MUI) - CSS-in-JS styling
- Lucide React & React Icons - Icon libraries
- Framer Motion - Animation library
- Embla Carousel - Carousel/slider functionality

**Utilities**:
- date-fns - Date formatting and manipulation
- react-router-dom - Additional routing utilities (may be redundant with Next.js)

**Development Tools**:
- ESLint with Next.js config for code quality
- TypeScript 5.8 for static typing

**Third-Party Services**:
- None currently integrated (no backend, database, or external APIs)
- Mock data used for property listings
- No authentication system implemented

**Deployment**:
- Configured for Replit deployment with autoscale mode
- Development server runs on port 5000 with 0.0.0.0 binding
- Production builds use Next.js build system
- Package manager: npm (uses package-lock.json)

**Integration Points**:
- ✅ **Whise API Integration**: Fetches real property data with images and specifications
- **Image Hosting**: Properties hosted on whisestorageprod.blob.core.windows.net and r2.storagewhise.eu
- **Data Transformation**: Backend transforms Whise API responses to consistent PropertyCard format

**Future Integration Points** (based on roadmap):
- User authentication system needed
- Map integration for property locations
- Search and filtering backend
- Favorites/bookmarks persistence

**Design System**:
- Apple-inspired aesthetic with SF Pro-style typography
- Custom CSS variables for consistent theming
- Monochrome color scheme with green accent (#048542)
- Responsive breakpoints following Tailwind conventions