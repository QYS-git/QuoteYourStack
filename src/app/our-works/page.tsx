// src/app/our-works/page.tsx
// ── Our Works Page ───────────────────────────────────────────
// SEO: Own metadata, own canonical URL, structured content

import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';
import ScrollReveal from '@/app/components/ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

// ── SEO Metadata ─────────────────────────────────────────────
export const metadata: Metadata = generatePageMetadata({
  title:       'Our Works',
  description: 'Browse Luminary Studio\'s award-winning portfolio of brand identities, digital experiences, and web products crafted for ambitious companies worldwide.',
  path:        '/our-works',
});

// ── Data (replace with CMS/database in production) ──────────
const works = [
  {
    slug:        'archetype-rebrand',
    title:       'Archetype Rebrand',
    category:    'Brand Identity',
    year:        '2025',
    description: 'Complete brand overhaul for a Fortune 500 technology company — identity, system, and rollout.',
    tags:        ['Brand Strategy', 'Identity', 'Guidelines'],
    featured:    true,
    color:       'from-amber-900/20',
  },
  {
    slug:        'nova-digital-platform',
    title:       'Nova Platform',
    category:    'UI/UX + Development',
    year:        '2024',
    description: 'End-to-end design and development of a SaaS analytics dashboard handling 2M+ users.',
    tags:        ['UI/UX', 'Next.js', 'Design System'],
    featured:    true,
    color:       'from-blue-900/20',
  },
  {
    slug:        'meridian-identity',
    title:       'Meridian Identity',
    category:    'Brand + Motion',
    year:        '2024',
    description: 'Brand identity and motion language for an emerging luxury real-estate developer.',
    tags:        ['Branding', 'Motion', 'Print'],
    featured:    false,
    color:       'from-zinc-800/30',
  },
  {
    slug:        'solace-wellness',
    title:       'Solace Wellness',
    category:    'Web Design',
    year:        '2024',
    description: 'Bespoke website design for a premium wellness retreat chain across 6 global locations.',
    tags:        ['Web Design', 'Copywriting', 'Photography'],
    featured:    false,
    color:       'from-green-900/20',
  },
  {
    slug:        'phantom-apparel',
    title:       'Phantom Apparel',
    category:    'E-commerce + Brand',
    year:        '2023',
    description: 'Full brand and Shopify-powered e-commerce experience for a streetwear label.',
    tags:        ['Shopify', 'Branding', 'E-commerce'],
    featured:    false,
    color:       'from-purple-900/20',
  },
  {
    slug:        'crest-finance',
    title:       'Crest Finance',
    category:    'Brand Strategy',
    year:        '2023',
    description: 'Strategic repositioning and brand identity for a FinTech startup raising Series B.',
    tags:        ['Strategy', 'Identity', 'Pitch Deck'],
    featured:    false,
    color:       'from-teal-900/20',
  },
];

export default function OurWorksPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section
        aria-labelledby="works-page-heading"
        className="pt-40 pb-16 px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <ScrollReveal>
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-6">
            Selected Work
          </p>
          {/* H1: SEO-critical, describes the page clearly */}
          <h1
            id="works-page-heading"
            className="font-display text-5xl md:text-7xl font-bold text-ivory leading-tight max-w-2xl"
          >
            Work That{' '}
            <em className="text-gradient-gold not-italic">Speaks</em>
          </h1>
          <p className="text-muted text-lg mt-6 max-w-xl leading-relaxed">
            A curated selection of brand, design, and digital projects — each one a story of ambition, craft, and measurable impact.
          </p>
        </ScrollReveal>
      </section>

      <div className="gold-rule max-w-7xl mx-auto px-6 lg:px-12" />

      {/* ── Works Grid ── */}
      <section
        aria-label="Portfolio projects"
        className="py-20 px-6 lg:px-12 max-w-7xl mx-auto"
      >
        {/* Featured works (large) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {works.filter(w => w.featured).map((work, i) => (
            <ScrollReveal key={work.slug} delay={i * 0.1}>
              <article aria-label={work.title}>
                <Link href={`/our-works/${work.slug}`} className="block group">
                  <div
                    className={`
                      relative aspect-[4/3] bg-gradient-to-br ${work.color} to-bg-card
                      rounded-sm overflow-hidden border border-[rgba(255,255,255,0.04)]
                      transition-all duration-500
                      group-hover:border-[rgba(201,169,110,0.2)]
                    `}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 border border-[rgba(201,169,110,0.15)] rounded-full flex items-center justify-center group-hover:border-gold/30 transition-all duration-500 group-hover:scale-110">
                        <div className="w-3 h-3 rounded-full bg-gold/30 group-hover:bg-gold transition-all duration-500" />
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="flex items-center gap-2 text-ivory text-sm font-medium">
                        View Project <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <p className="text-gold text-xs tracking-[0.2em] uppercase mb-1">{work.category}</p>
                      <h2 className="font-display text-2xl font-semibold text-ivory group-hover:text-gold transition-colors duration-300">
                        {work.title}
                      </h2>
                      <p className="text-muted text-sm mt-2 max-w-xs">{work.description}</p>
                    </div>
                    <span className="text-faint text-xs mt-1 shrink-0">{work.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {work.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs text-muted border border-[rgba(255,255,255,0.06)] rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Regular works (smaller grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.filter(w => !w.featured).map((work, i) => (
            <ScrollReveal key={work.slug} delay={i * 0.08}>
              <article aria-label={work.title}>
                <Link href={`/our-works/${work.slug}`} className="block group">
                  <div
                    className={`
                      relative aspect-[5/4] bg-gradient-to-br ${work.color} to-bg-card
                      rounded-sm overflow-hidden border border-[rgba(255,255,255,0.04)]
                      transition-all duration-500 group-hover:border-[rgba(201,169,110,0.2)]
                    `}
                  >
                    <div className="absolute inset-0 bg-bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="flex items-center gap-2 text-ivory text-sm font-medium">
                        View <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gold text-xs tracking-wider uppercase mb-1">{work.category}</p>
                    <h2 className="font-display text-lg font-semibold text-ivory group-hover:text-gold/80 transition-colors duration-300">
                      {work.title}
                    </h2>
                  </div>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto text-center border-t border-[rgba(201,169,110,0.08)]">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory mb-4">
            Your Project Could Be Next
          </h2>
          <p className="text-muted mb-8 max-w-md mx-auto">
            Every great brand starts with a single conversation.
          </p>
          <Link href="/#contact" className="btn-gold">
            Start Your Project
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
