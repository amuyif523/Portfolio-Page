# Amanuel | Creative Technologist Portfolio

A high-performance, accessible, and interactive portfolio website built to showcase technical systems and creative engineering.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8)

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Alpha/Beta)
- **Animation**: [GSAP](https://gsap.com/) (ScrollTrigger, Flip)
- **Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **Typography**: Syne (Display) & Geist (Sans/Mono)

## ✨ Key Features

- **Performance First**: Optimized images, `will-change` compositing hints, and minimal bundle size.
- **Accessibility (a11y)**:
  - Full keyboard navigation support.
  - "Skip to Content" link.
  - Respects `prefers-reduced-motion` system settings.
  - High-contrast focus indicators.
- **Interactive**:
  - Smooth scroll (Lenis).
  - Mouse-following project previews.
  - Parallax image effects.
  - Magnetic buttons.

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/port.git
   cd port
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This generates a static/hybrid output in the `.next` folder.

## 📂 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/
│   ├── layout/          # Header, Footer, Container, SkipLink
│   ├── sections/        # Hero, About, Projects, Contact
│   ├── ui/              # Reusable UI (Magnetic, Grain)
│   └── work/            # Project Detail components
├── hooks/               # Custom hooks (useScroll, usePrefersReducedMotion)
├── lib/
│   ├── content/         # Data files (projects.ts, socials.ts)
│   └── motion/          # GSAP setup and presets
└── styles/              # Design tokens and global styles
```

## 🎨 Customization

- **Design Tokens**: Edit `src/styles/tokens.ts` to adjust animation speeds and easings.
- **Colors & Fonts**: Edit `src/app/globals.css` for CSS variables.
- **Content**: See `docs/MAINTENANCE.md` for detailed content updates.

## 📄 License

This project is licensed under the MIT License.
