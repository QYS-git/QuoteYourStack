# 🔍 Luminary Studio — SEO Guide
### Your complete reference for managing SEO now and in the future

---

## ✅ What's Already Built (Day 1 SEO)

Everything below is live the moment you deploy:

| Feature | Where | Status |
|---|---|---|
| Unique `<title>` per page | `src/lib/seo.ts` + each `page.tsx` | ✅ |
| Unique meta `description` per page | `src/lib/seo.ts` | ✅ |
| Open Graph tags (Facebook, LinkedIn) | `src/lib/seo.ts` rootMetadata | ✅ |
| Twitter Card tags | `src/lib/seo.ts` rootMetadata | ✅ |
| Canonical URLs | Every `generatePageMetadata()` call | ✅ |
| JSON-LD Organization schema | `src/app/layout.tsx` | ✅ |
| JSON-LD Article schema | `src/app/blogs/[slug]/page.tsx` | ✅ |
| XML Sitemap at `/sitemap.xml` | `src/app/sitemap.ts` | ✅ |
| `robots.txt` at `/robots.txt` | `src/app/robots.ts` | ✅ |
| Semantic HTML (`<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`) | All components | ✅ |
| Proper H1 → H2 → H3 hierarchy | All pages | ✅ |
| `<time dateTime>` on dates | Blog pages | ✅ |
| `lang="en"` on `<html>` | `layout.tsx` | ✅ |
| Skip-to-content link | `layout.tsx` | ✅ |
| `rel="noopener noreferrer"` on external links | Footer | ✅ |
| `aria-label` on all interactive elements | All components | ✅ |
| `next/font` (zero layout shift) | `layout.tsx` | ✅ |
| `next/image` ready (WebP/AVIF) | `next.config.ts` | ✅ |
| Security headers | `next.config.ts` | ✅ |
| 404 page with `robots: noindex` | `not-found.tsx` | ✅ |
| `generateStaticParams` (SSG blog posts) | Blog + Works `[slug]` pages | ✅ |

---

## 🚀 Step-by-Step: What You Must Do After Deploying

### 1. Update Your Real Domain
In `src/lib/seo.ts`, change this line:
```ts
url: 'https://www.luminarystudio.com',   // ← your real domain
```

### 2. Create Your OG Image
- Size: **1200 × 630 px**
- Place it at: `public/og-image.jpg`
- This is the image that appears when you share a link on LinkedIn, Twitter, etc.
- Use a tool like [og-image.vercel.app](https://og-image.vercel.app) or Figma

### 3. Submit to Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your domain as a property
3. Verify ownership (you'll get a verification code)
4. Paste the code into `src/lib/seo.ts`:
   ```ts
   verification: {
     google: 'your-verification-code-here',
   }
   ```
5. After verifying, submit your sitemap: `https://yourdomain.com/sitemap.xml`

### 4. Submit to Bing Webmaster Tools
1. Go to [bing.com/webmasters](https://bing.com/webmasters)
2. Import from Google Search Console (1-click if you did step 3 first)

---

## 📝 How to Add SEO to a New Page

### Adding a new static page (e.g., `/about`):

```tsx
// src/app/about/page.tsx
import { generatePageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
  title:       'About Us',                    // ← becomes "About Us | Luminary Studio"
  description: 'Learn about our team...',     // ← 150-160 characters ideal
  path:        '/about',                      // ← used for canonical URL
});

export default function AboutPage() {
  return (
    <main>
      <h1>About Luminary Studio</h1>   {/* ← Always one H1 per page */}
      {/* ... */}
    </main>
  );
}
```

### Adding a new blog post (via CMS later):

```tsx
// src/app/blogs/[slug]/page.tsx — generateMetadata function
export async function generateMetadata({ params }) {
  const post = await fetchPostFromCMS(params.slug);

  return generateArticleMetadata({
    title:       post.title,
    description: post.excerpt,       // 150-160 chars
    slug:        post.slug,
    publishedAt: post.publishedAt,   // ISO date: '2025-04-13'
    author:      post.author,
    tags:        post.tags,          // Used as meta keywords
    image:       post.coverImage,    // Optional custom OG image
  });
}
```

---

## 🗺️ How to Update the Sitemap

The sitemap at `/sitemap.xml` is **auto-generated** from `src/app/sitemap.ts`.

**When you add a new static page:**
```ts
// Add to staticPages array in sitemap.ts
{
  url:             `${base}/about`,
  lastModified:    new Date(),
  changeFrequency: 'monthly',
  priority:        0.8,
},
```

**When you connect a CMS (Sanity, Contentful, etc.):**
```ts
// Replace the static blogPosts array with a real fetch:
const posts = await sanityClient.fetch(groq`
  *[_type == "post"]{ "slug": slug.current, _updatedAt }
`);

// Then map them the same way:
const blogPages = posts.map((post) => ({
  url:             `${base}/blogs/${post.slug}`,
  lastModified:    new Date(post._updatedAt),
  changeFrequency: 'monthly',
  priority:        0.7,
}));
```

After any changes, ping Google:
```
https://www.google.com/ping?sitemap=https://yourdomain.com/sitemap.xml
```

---

## 🏷️ JSON-LD Schemas — When to Add More

JSON-LD structured data helps Google show **rich results** (stars, FAQs, breadcrumbs) in search.

All helper functions are in `src/lib/seo.ts`.

| Schema Type | When to Add | Helper Available |
|---|---|---|
| `Organization` | ✅ Already live | `generateOrganizationJsonLd()` |
| `WebSite` | ✅ Already live | `generateWebsiteJsonLd()` |
| `Article` | ✅ On all blog posts | `generateArticleJsonLd()` |
| `FAQPage` | Add to your homepage FAQ section | Add to `seo.ts` |
| `BreadcrumbList` | Add to inner pages for Google breadcrumbs | Add to `seo.ts` |
| `LocalBusiness` | If you have a physical studio | Add to `seo.ts` |
| `Service` | Add to your services page | Add to `seo.ts` |

**Example — adding a FAQ schema to the homepage:**
```ts
// In src/lib/seo.ts
export function generateFAQJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type':          'Question',
      name:             question,
      acceptedAnswer: {
        '@type': 'Answer',
        text:    answer,
      },
    })),
  };
}
```

Then in `page.tsx`:
```tsx
const faqJsonLd = generateFAQJsonLd([
  { question: 'How long does a brand project take?', answer: 'Typically 6–10 weeks...' },
]);

// In JSX:
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
```

---

## 🖼️ Image SEO Rules

Every image **must** follow these rules to be SEO-compliant:

```tsx
import Image from 'next/image';

// ✅ Correct — always provide descriptive alt text
<Image
  src="/projects/archetype-hero.jpg"
  alt="Archetype brand identity — logo redesign and visual system"
  width={1200}
  height={800}
  priority    // ← add this for above-the-fold images (improves LCP)
/>

// ❌ Wrong — empty or meaningless alt
<Image src="..." alt="" />
<Image src="..." alt="image" />
```

**Alt text formula:** `[What it shows] — [Context/purpose]`

---

## 📊 Core Web Vitals Checklist

Google uses these 3 scores as ranking signals. Check yours at [pagespeed.web.dev](https://pagespeed.web.dev):

| Metric | What It Measures | How to Keep It Green |
|---|---|---|
| **LCP** (Largest Contentful Paint) | Loading speed | Add `priority` to hero images; use `next/image` |
| **CLS** (Cumulative Layout Shift) | Visual stability | Always set `width` + `height` on images; use `next/font` |
| **INP** (Interaction to Next Paint) | Responsiveness | Minimize JS in render path; use `'use client'` only when needed |

---

## 🔗 Link Building — How to Build Authority

Technical SEO gets you indexed. Links get you ranked.

**Quick wins:**
1. **Submit to design directories** — Awwwards, CSS Design Awards, Behance, Dribbble
2. **Guest write** for design/marketing publications — Smashing Magazine, UX Collective
3. **Case study PR** — when a client has great results, pitch it to industry press
4. **Claim your Google Business Profile** at [business.google.com](https://business.google.com)
5. **HARO / Connectively** — respond to journalist queries for expert quotes (= backlinks)

---

## 📅 Monthly SEO Maintenance Checklist

Run through this once a month:

- [ ] Check Google Search Console for crawl errors and fix them
- [ ] Review which keywords are bringing traffic (Search Console → Performance)
- [ ] Publish at least 2 blog posts (fresh content signals to Google)
- [ ] Check and update `lastModified` in `sitemap.ts` for updated pages
- [ ] Run a Lighthouse audit — keep scores above 90
- [ ] Check for broken internal links
- [ ] Review page titles and descriptions for any pages ranking on page 2 (improve them)

---

## 🌍 Future: Going Multilingual

When you're ready to serve multiple languages, add `hreflang` alternates:

```ts
// In generatePageMetadata():
alternates: {
  canonical: url,
  languages: {
    'en-US': `${SITE_CONFIG.url}/en${path}`,
    'fr-FR': `${SITE_CONFIG.url}/fr${path}`,
    'de-DE': `${SITE_CONFIG.url}/de${path}`,
  },
},
```

---

## 🛠️ Recommended Tools

| Tool | Purpose | Free? |
|---|---|---|
| [Google Search Console](https://search.google.com/search-console) | Monitor rankings, crawl errors, indexing | ✅ Free |
| [PageSpeed Insights](https://pagespeed.web.dev) | Core Web Vitals testing | ✅ Free |
| [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) | Backlink monitoring | ✅ Free tier |
| [Schema Markup Validator](https://validator.schema.org) | Test your JSON-LD | ✅ Free |
| [Rich Results Test](https://search.google.com/test/rich-results) | Check structured data eligibility | ✅ Free |
| [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) | Full site crawl & audit | Free up to 500 URLs |

---

*This file lives at the root of your project. Keep it updated as your site grows.*
