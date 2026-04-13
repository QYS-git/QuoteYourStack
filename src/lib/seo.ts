// ============================================================
// src/lib/seo.ts
// ── Central SEO configuration file ──────────────────────────
//
// HOW TO ADD SEO IN THE FUTURE:
// 1. Update SITE_CONFIG below with your real domain & info
// 2. Use generatePageMetadata() in every page's metadata export
// 3. Use generateArticleMetadata() for blog posts
// 4. Add JSON-LD via generateOrganizationJsonLd() in layout
//
// This file is the SINGLE SOURCE OF TRUTH for all SEO data.
// ============================================================

import type { Metadata } from 'next';

// ── 1. SITE-WIDE CONFIGURATION ────────────────────────────────
// Update these values when you deploy your real site
export const SITE_CONFIG = {
  name:        'Luminary Studio',
  tagline:     'Premium Creative Agency',
  description: 'Luminary Studio is a premium creative agency specializing in brand strategy, digital design, and immersive web experiences. Trusted by leading brands worldwide.',
  url:         'https://www.luminarystudio.com',  // ← Change to your real domain
  ogImage:     '/og-image.jpg',                   // ← Place 1200×630px image in /public
  twitter:     '@luminarystudio',
  locale:      'en_US',
  founded:     '2018',
  email:       'hello@luminarystudio.com',
  socials: {
    twitter:   'https://twitter.com/luminarystudio',
    linkedin:  'https://www.linkedin.com/company/luminarystudio',
    instagram: 'https://www.instagram.com/luminarystudio',
    dribbble:  'https://www.dribbble.com/luminarystudio',
  },
};

// ── 2. ROOT METADATA (used in layout.tsx) ────────────────────
// This is the base — every page INHERITS and OVERRIDES this
export const rootMetadata: Metadata = {
  // metadataBase tells Next.js what domain to prepend to relative URLs
  // FUTURE: Change this to your real domain when deploying
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    // %s is replaced by each page's own title
    template: `%s | ${SITE_CONFIG.name}`,
    default:  `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  },

  description: SITE_CONFIG.description,

  keywords: [
    'creative agency', 'branding agency', 'web design',
    'digital strategy', 'UI UX design', 'brand identity',
    'premium design studio', 'logo design', 'web development',
  ],

  authors:  [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator:   SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,

  // Tells Google not to show site links search box (optional)
  robots: {
    index:          true,
    follow:         true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },

  openGraph: {
    type:        'website',
    locale:      SITE_CONFIG.locale,
    url:         SITE_CONFIG.url,
    siteName:    SITE_CONFIG.name,
    title:       `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [{
      url:    SITE_CONFIG.ogImage,
      width:  1200,
      height: 630,
      alt:    `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    }],
  },

  twitter: {
    card:        'summary_large_image',
    site:        SITE_CONFIG.twitter,
    creator:     SITE_CONFIG.twitter,
    title:       `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images:      [SITE_CONFIG.ogImage],
  },

  // Verification codes — add these when you verify in Google/Bing
  // FUTURE: Uncomment and add your real verification codes
  verification: {
    // google: 'your-google-search-console-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing:   'your-bing-webmaster-verification-code',
  },

  alternates: {
    canonical: SITE_CONFIG.url,
    // FUTURE: Add language alternates if you go multilingual
    // languages: {
    //   'en-US': `${SITE_CONFIG.url}/en-US`,
    //   'fr-FR': `${SITE_CONFIG.url}/fr-FR`,
    // },
  },
};

// ── 3. HELPER: Generate metadata for any static page ─────────
// Usage in a page.tsx:
//   export const metadata = generatePageMetadata({
//     title: 'Our Works',
//     description: 'Browse our portfolio...',
//     path: '/our-works',
//   });
export function generatePageMetadata({
  title,
  description,
  path = '',
  image,
}: {
  title:        string;
  description:  string;
  path?:        string;
  image?:       string;
}): Metadata {
  const url      = `${SITE_CONFIG.url}${path}`;
  const ogImage  = image ?? SITE_CONFIG.ogImage;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
  };
}

// ── 4. HELPER: Generate metadata for blog articles ───────────
// Usage in a dynamic blog page (app/blogs/[slug]/page.tsx):
//   export async function generateMetadata({ params }) {
//     const post = await getPost(params.slug);
//     return generateArticleMetadata({ post });
//   }
export function generateArticleMetadata({
  title,
  description,
  slug,
  image,
  publishedAt,
  author,
  tags,
}: {
  title:        string;
  description:  string;
  slug:         string;
  image?:       string;
  publishedAt?: string;
  author?:      string;
  tags?:        string[];
}): Metadata {
  const url     = `${SITE_CONFIG.url}/blogs/${slug}`;
  const ogImage = image ?? SITE_CONFIG.ogImage;

  return {
    title,
    description,
    keywords:   tags,
    authors:    author ? [{ name: author }] : undefined,
    alternates: { canonical: url },
    openGraph: {
      type:            'article',
      url,
      title,
      description,
      publishedTime:   publishedAt,
      authors:         author ? [author] : undefined,
      tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card:   'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

// ── 5. JSON-LD STRUCTURED DATA ────────────────────────────────
// Drop this into your <head> via layout.tsx for rich results in Google

export function generateOrganizationJsonLd() {
  return {
    '@context':    'https://schema.org',
    '@type':       'Organization',
    name:          SITE_CONFIG.name,
    url:           SITE_CONFIG.url,
    logo:          `${SITE_CONFIG.url}/logo.png`,
    description:   SITE_CONFIG.description,
    foundingDate:  SITE_CONFIG.founded,
    email:         SITE_CONFIG.email,
    sameAs:        Object.values(SITE_CONFIG.socials),
    contactPoint: {
      '@type':      'ContactPoint',
      contactType:  'customer service',
      email:        SITE_CONFIG.email,
    },
  };
}

// FUTURE: Add WebSite JSON-LD for sitelinks search box
export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type':    'WebSite',
    name:       SITE_CONFIG.name,
    url:        SITE_CONFIG.url,
    // Uncomment to enable Google sitelinks search box
    // potentialAction: {
    //   '@type':       'SearchAction',
    //   target:        `${SITE_CONFIG.url}/search?q={search_term_string}`,
    //   'query-input': 'required name=search_term_string',
    // },
  };
}

// FUTURE: Use this for individual blog posts (Article schema)
export function generateArticleJsonLd({
  title, description, slug, image, publishedAt, author,
}: {
  title: string; description: string; slug: string;
  image?: string; publishedAt?: string; author?: string;
}) {
  return {
    '@context':       'https://schema.org',
    '@type':          'Article',
    headline:         title,
    description,
    url:              `${SITE_CONFIG.url}/blogs/${slug}`,
    image:            image ?? `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    datePublished:    publishedAt,
    author: {
      '@type': 'Person',
      name:    author ?? SITE_CONFIG.name,
    },
    publisher: {
      '@type': 'Organization',
      name:    SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url:     `${SITE_CONFIG.url}/logo.png`,
      },
    },
  };
}
