// src/app/layout.tsx
// ── Root layout — wraps every page ──────────────────────────
// SEO: This is where global metadata, JSON-LD, and fonts live.

import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { rootMetadata, generateOrganizationJsonLd, generateWebsiteJsonLd } from '@/lib/seo';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CustomCursor from '@/app/components/CustomCursor';

// ── Fonts: next/font self-hosts them — no external request,
//    zero layout shift, and they count toward Core Web Vitals ──
const playfair = Playfair_Display({
  subsets:  ['latin'],
  variable: '--font-playfair',
  display:  'swap',   // 'swap' ensures text is visible while font loads
  weight:   ['400', '600', '700', '900'],
});

const dmSans = DM_Sans({
  subsets:  ['latin'],
  variable: '--font-dm-sans',
  display:  'swap',
  weight:   ['300', '400', '500', '600'],
});

// ── Export root metadata (all pages inherit this) ─────────────
export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd     = generateOrganizationJsonLd();
  const websiteJsonLd = generateWebsiteJsonLd();

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* ── JSON-LD Structured Data ────────────────────────
            These scripts tell Google who you are.
            FUTURE: Add more schemas here (LocalBusiness, FAQPage, etc.)
        ─────────────────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>

      <body className="bg-bg-primary text-ivory font-body antialiased overflow-x-hidden">
        <CustomCursor />

        {/* Skip to main content — accessibility & SEO best practice */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold focus:text-bg-primary focus:rounded"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" role="main">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
