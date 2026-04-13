# Luminary Studio — Next.js Agency Website

Premium creative agency portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. SEO-ready from day one.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:3000

# Build for production/
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              ← Root layout: fonts, JSON-LD, Navbar, Footer
│   ├── page.tsx                ← Home page
│   ├── not-found.tsx           ← 404 page
│   ├── sitemap.ts              ← Auto-generated /sitemap.xml
│   ├── robots.ts               ← Auto-generated /robots.txt
│   ├── globals.css             ← Design tokens, animations, base styles
│   ├── our-works/
│   │   ├── page.tsx            ← Portfolio listing page
│   │   └── [slug]/page.tsx     ← Individual case study pages
│   ├── blogs/
│   │   ├── page.tsx            ← Blog listing page
│   │   └── [slug]/page.tsx     ← Individual blog post pages
│   └── components/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── CustomCursor.tsx
│       └── ScrollReveal.tsx
└── lib/
    └── seo.ts                  ← All SEO helpers (EDIT THIS FIRST)
```

## 🔍 SEO — Read This First

Before deploying, open `src/lib/seo.ts` and update:
- `url` → your real domain
- `name`, `tagline`, `description` → your real agency info
- `email`, `socials` → your real contacts

Then read **SEO_GUIDE.md** for the complete playbook.

## 🎨 Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `bg-primary` | `#0A0A0F` | Page background |
| `bg-surface` | `#12121A` | Elevated sections |
| `bg-card` | `#1A1A26` | Cards |
| `gold` | `#C9A96E` | Primary accent |
| `gold-light` | `#E8C98A` | Hover/highlight |
| `ivory` | `#F5F0E8` | Primary text |
| `muted` | `#8A8A9A` | Body text |

## 🛠️ Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS custom properties
- **Fonts**: Playfair Display + DM Sans (via `next/font`)
- **Icons**: Lucide React
- **SEO**: Next.js Metadata API + JSON-LD + sitemap.ts + robots.ts
