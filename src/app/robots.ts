// src/app/robots.ts
// ── Auto-generated robots.txt ────────────────────────────────
// Served at /robots.txt — tells crawlers what to index.
//
// FUTURE: Add `disallow` paths if you add auth pages:
//   disallow: ['/dashboard', '/admin'],
// ──────────────────────────────────────────────────────────────

import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow:     '/',
        // Disallow any URL params that create duplicate content
        disallow:  ['/api/', '/_next/'],
      },
    ],
    sitemap:  `${SITE_CONFIG.url}/sitemap.xml`,
    host:     SITE_CONFIG.url,
  };
}
