// src/app/our-works/[slug]/page.tsx
// ── Dynamic Work/Case Study Page ────────────────────────────
// SEO: generateMetadata + generateStaticParams + JSON-LD

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, generateArticleJsonLd, SITE_CONFIG } from '@/lib/seo';
import Link from 'next/link';
import ScrollReveal from '@/app/components/ScrollReveal';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const works: Record<string, {
  slug: string; title: string; category: string; year: string;
  client: string; description: string; challenge: string; solution: string;
  outcome: string; tags: string[]; color: string;
}> = {
  'archetype-rebrand': {
    slug:        'archetype-rebrand',
    title:       'Archetype — Brand Transformation',
    category:    'Brand Identity',
    year:        '2025',
    client:      'Archetype Inc.',
    description: 'Complete brand overhaul for a Fortune 500 technology company — identity, system, and global rollout across 40+ markets.',
    challenge:   'Archetype had grown through acquisitions and its brand was fractured across twelve sub-brands with no coherent visual language. Employees couldn\'t describe the company. Customers couldn\'t distinguish it from competitors.',
    solution:    'We conducted a 6-week brand audit, interviewed 80 stakeholders, and built a unified identity system from the ground up. A single mark. A clear voice. A design system scalable to every context the brand would appear in.',
    outcome:     'Brand recognition up 67% in post-launch surveys. Employee NPS improved from 34 to 71. Earned media coverage in Fast Company, Wired, and Design Week.',
    tags:        ['Brand Strategy', 'Identity Design', 'Design System', 'Brand Guidelines'],
    color:       'from-amber-900/20',
  },
  'nova-digital-platform': {
    slug:        'nova-digital-platform',
    title:       'Nova — Analytics Platform',
    category:    'UI/UX + Development',
    year:        '2024',
    client:      'Nova Technologies',
    description: 'End-to-end design and development of a SaaS analytics dashboard used by 2M+ users across enterprise clients.',
    challenge:   'Nova\'s existing dashboard was built by engineers without a designer. Users reported high confusion, poor task completion rates, and were churning at 40% annually — almost entirely due to UX friction.',
    solution:    'We ran 3 rounds of user research, rebuilt the information architecture from zero, designed a comprehensive component library, and delivered the production-ready Next.js codebase with 98 Lighthouse scores.',
    outcome:     'Churn dropped from 40% to 11% in the first quarter post-launch. NPS went from 22 to 68. The product was acquired 18 months later as part of a $240M deal.',
    tags:        ['UI/UX Design', 'Next.js', 'Design System', 'User Research'],
    color:       'from-blue-900/20',
  },
  'meridian-identity': {
    slug:        'meridian-identity',
    title:       'Meridian — Luxury Real Estate Brand',
    category:    'Brand + Motion',
    year:        '2024',
    client:      'Meridian Property Group',
    description: 'Brand identity and motion language for an emerging luxury real-estate developer launching in three major cities.',
    challenge:   'Entering a crowded luxury property market against established players with decades of brand equity. Needed to signal premium positioning immediately, without the history.',
    solution:    'We developed a visual language rooted in architectural geometry, paired with a motion system that felt like physical spaces — considered, expansive, and unhurried. Every asset from business cards to 3D renders followed the same grammar.',
    outcome:     'All three launch properties sold off-plan before completion. The brand was cited by buyers as a primary purchase driver in post-sale surveys.',
    tags:        ['Brand Identity', 'Motion Design', 'Print', 'Luxury'],
    color:       'from-zinc-800/30',
  },
  'solace-wellness': {
    slug:        'solace-wellness',
    title:       'Solace — Wellness Retreats',
    category:    'Web Design',
    year:        '2024',
    client:      'Solace Wellness Group',
    description: 'Bespoke website design and development for a premium wellness retreat group operating across 6 global locations.',
    challenge:   'The existing website was converting at 0.8% despite strong organic traffic. The design felt disconnected from the premium, healing experience Solace offered in person.',
    solution:    'A complete redesign focused on sensory experience — slow animations, generous whitespace, photography that communicated stillness and intention. Conversion-optimised booking flows built with Framer Motion.',
    outcome:     'Conversion rate improved from 0.8% to 3.4% — a 325% increase. Direct bookings increased by $1.2M in the first year.',
    tags:        ['Web Design', 'Framer', 'Conversion Optimisation', 'Photography Direction'],
    color:       'from-green-900/20',
  },
  'phantom-apparel': {
    slug:        'phantom-apparel',
    title:       'Phantom — Streetwear Brand',
    category:    'E-commerce + Brand',
    year:        '2023',
    client:      'Phantom Apparel',
    description: 'Full brand identity and Shopify-powered e-commerce experience for an emerging streetwear label with a cult following.',
    challenge:   'Growing from a DTC Instagram brand to a full retail operation without losing the underground credibility that made the brand desirable in the first place.',
    solution:    'We built the brand system around tension — premium craft meets raw street energy. Custom Shopify theme, editorial photography direction, and a brand voice that felt like it came from the culture, not a marketing agency.',
    outcome:     'Launch day revenue: $340K in 6 hours. Sold out of first collection within 48 hours. Featured in Hypebeast and Highsnobiety.',
    tags:        ['Shopify', 'Brand Identity', 'E-commerce', 'Art Direction'],
    color:       'from-purple-900/20',
  },
  'crest-finance': {
    slug:        'crest-finance',
    title:       'Crest — FinTech Rebrand',
    category:    'Brand Strategy',
    year:        '2023',
    client:      'Crest Financial',
    description: 'Strategic repositioning and brand identity for a FinTech startup preparing for Series B fundraising.',
    challenge:   'Crest was raising a Series B but their brand looked like a Series A afterthought. Investors and potential enterprise clients weren\'t taking the product seriously because the presentation didn\'t match the technology.',
    solution:    'Full brand strategy, identity system, and investor materials — all built around the core positioning: institutional-grade technology made accessible. The visual language borrowed from legacy finance while feeling unmistakably modern.',
    outcome:     'Series B closed at $45M — 2x their target. Three enterprise clients signed LOIs during the fundraise, directly citing brand credibility.',
    tags:        ['Brand Strategy', 'FinTech', 'Investor Materials', 'Identity'],
    color:       'from-teal-900/20',
  },
};

export async function generateStaticParams() {
  return Object.keys(works).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const work = works[params.slug];
  if (!work) return { title: 'Project Not Found' };

  return generatePageMetadata({
    title:       work.title,
    description: work.description,
    path:        `/our-works/${work.slug}`,
  });
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const work = works[params.slug];
  if (!work) notFound();

  const workEntries = Object.values(works);
  const currentIdx  = workEntries.findIndex(w => w.slug === work.slug);
  const nextWork    = workEntries[(currentIdx + 1) % workEntries.length];

  return (
    <>
      {/* ── Back ── */}
      <div className="max-w-5xl mx-auto px-6 pt-36 pb-4">
        <Link href="/our-works" className="inline-flex items-center gap-2 text-muted hover:text-gold text-sm transition-colors duration-300">
          <ArrowLeft size={14} /> All Works
        </Link>
      </div>

      <article aria-labelledby="work-heading" className="max-w-5xl mx-auto px-6 pb-24">

        {/* ── Header ── */}
        <header className="mb-16 pt-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-[rgba(201,169,110,0.08)] border border-[rgba(201,169,110,0.15)] text-gold text-xs font-medium tracking-wider rounded-sm">
                {work.category}
              </span>
              <span className="text-faint text-xs">{work.year}</span>
            </div>
            <h1 id="work-heading" className="font-display text-5xl md:text-6xl font-bold text-ivory leading-tight mb-6">
              {work.title}
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-2xl">{work.description}</p>
          </ScrollReveal>
        </header>

        {/* ── Hero visual ── */}
        <ScrollReveal>
          <div className={`aspect-video bg-gradient-to-br ${work.color} to-bg-card rounded-sm border border-[rgba(255,255,255,0.04)] mb-20 flex items-center justify-center`}>
            <div className="text-center">
              <div className="w-20 h-20 border border-[rgba(201,169,110,0.2)] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-4 h-4 rounded-full bg-gold/40" />
              </div>
              <p className="text-faint text-xs tracking-widest uppercase">Project Visual</p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Case Study ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-14">
            {[
              { label: 'The Challenge', text: work.challenge },
              { label: 'Our Approach', text: work.solution  },
              { label: 'The Outcome',  text: work.outcome   },
            ].map(({ label, text }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <section aria-labelledby={`section-${label}`}>
                  <h2 id={`section-${label}`} className="font-display text-2xl font-semibold text-ivory mb-4">{label}</h2>
                  <p className="text-muted leading-[1.9] text-base">{text}</p>
                </section>
              </ScrollReveal>
            ))}
          </div>

          {/* ── Sidebar ── */}
          <aside aria-label="Project details">
            <ScrollReveal delay={0.2}>
              <div className="bg-bg-card border border-[rgba(255,255,255,0.04)] rounded-sm p-8 sticky top-32">
                <h3 className="text-gold text-xs font-medium tracking-[0.2em] uppercase mb-6">Project Details</h3>
                <dl className="space-y-5">
                  {[
                    { dt: 'Client',   dd: work.client   },
                    { dt: 'Category', dd: work.category },
                    { dt: 'Year',     dd: work.year     },
                  ].map(({ dt, dd }) => (
                    <div key={dt}>
                      <dt className="text-faint text-xs uppercase tracking-wider mb-1">{dt}</dt>
                      <dd className="text-ivory text-sm">{dd}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.04)]">
                  <p className="text-faint text-xs uppercase tracking-wider mb-3">Services</p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-xs text-muted border border-[rgba(255,255,255,0.06)] rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </aside>
        </div>

        {/* ── Next project ── */}
        <ScrollReveal>
          <div className="mt-24 pt-12 border-t border-[rgba(255,255,255,0.06)]">
            <p className="text-faint text-xs uppercase tracking-widest mb-4">Next Project</p>
            <Link href={`/our-works/${nextWork.slug}`} className="group flex items-center justify-between">
              <div>
                <p className="text-muted text-sm mb-1">{nextWork.category}</p>
                <h3 className="font-display text-3xl font-bold text-ivory group-hover:text-gold transition-colors duration-300">
                  {nextWork.title}
                </h3>
              </div>
              <ArrowRight size={24} className="text-gold group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </ScrollReveal>
      </article>
    </>
  );
}
