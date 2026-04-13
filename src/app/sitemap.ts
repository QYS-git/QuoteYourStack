// src/app/sitemap.ts
// ── Auto-generated XML Sitemap ───────────────────────────────
//
// Next.js will serve this at /sitemap.xml
// Submit this URL to Google Search Console and Bing Webmaster.
//
// FUTURE: If you add a CMS (Sanity, Contentful, etc.), fetch
// all blog post slugs here and include them dynamically.
// ──────────────────────────────────────────────────────────────

import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

// Static blog posts — replace with CMS fetch in production
const blogPosts = [
  { slug: 'why-brand-identity-matters', lastModified: '2025-03-10' },
  { slug: 'designing-for-premium-audiences', lastModified: '2025-04-01' },
  { slug: 'seo-for-creative-agencies', lastModified: '2025-04-08' },
];

const works = [
  { slug: 'archetype-rebrand', lastModified: '2025-02-20' },
  { slug: 'nova-digital-platform', lastModified: '2025-03-15' },
  { slug: 'meridian-identity', lastModified: '2025-04-05' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;

  // ── Static pages ──────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url:             base,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        1.0,         // Highest priority = homepage
    },
    {
      url:             `${base}/our-works`,
      lastModified:    new Date(),
      changeFrequency: 'weekly',
      priority:        0.9,
    },
    {
      url:             `${base}/blogs`,
      lastModified:    new Date(),
      changeFrequency: 'daily',     // Blog index changes often
      priority:        0.8,
    },
  ];

  // ── Blog post pages (dynamic) ─────────────────────────────
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url:             `${base}/blogs/${post.slug}`,
    lastModified:    new Date(post.lastModified),
    changeFrequency: 'monthly',
    priority:        0.7,
  }));

  // ── Work/portfolio pages (dynamic) ───────────────────────
  const workPages: MetadataRoute.Sitemap = works.map((work) => ({
    url:             `${base}/our-works/${work.slug}`,
    lastModified:    new Date(work.lastModified),
    changeFrequency: 'monthly',
    priority:        0.6,
  }));

  return [...staticPages, ...blogPages, ...workPages];
}
