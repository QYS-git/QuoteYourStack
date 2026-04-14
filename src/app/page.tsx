// src/app/page.tsx
// ── Home Page ────────────────────────────────────────────────
// SEO: Uses default metadata from layout.tsx (no override needed)
// If you want to override: export const metadata = generatePageMetadata({...})

import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';
import ScrollReveal from '@/app/components/ScrollReveal';
import {
  ArrowRight, Sparkles, Globe, Layers, Zap,
  BarChart3, Star, ChevronRight, Mail, MapPin, Phone
} from 'lucide-react';

// ── Page-specific metadata override ─────────────────────────
export const metadata: Metadata = generatePageMetadata({
  title:       'Premium Creative Agency',
  description: 'Luminary Studio crafts brands, digital experiences, and web products that illuminate. Award-winning creative agency trusted by ambitious companies worldwide.',
  path:        '/',
});

// ── Data ─────────────────────────────────────────────────────
const services = [
  {
    icon:        <Globe size={28} />,
    title:       'Industrial IoT',
    description: 'We decode your market position and build identities that command premium perception across every touchpoint.',
  },
  {
    icon:        <Layers size={28} />,
    title:       'Custom Tools and Workflows',
    description: 'Interfaces that feel inevitable — where every interaction is deliberate, delightful, and conversion-optimised.',
  },
  {
    icon:        <Zap size={28} />,
    title:       'SEO & GEO Powered Visibilility ',
    description: 'Next.js-powered sites built for speed, SEO, and scale. Lighthouse scores that consistently hit 95+.',
  },
  {
    icon:        <Sparkles size={28} />,
    title:       'Branding and Marketing',
    description: 'Animation and motion that breathes life into your brand — from micro-interactions to full brand films.',
  },
];

const stats = [
  { value: '120+', label: 'Brands Elevated' },
  { value: '8',    label: 'Years of Craft'  },
  { value: '34',   label: 'Industry Awards' },
  { value: '98%',  label: 'Client Retention' },
];

const featuredWorks = [
  {
    slug:       'archetype-rebrand',
    title:      'Fleet Management',
    category:   'Industrial IoT',
    year:       '2026',
    color:      'from-amber-900/30',
  },
  {
    slug:       'nova-digital-platform',
    title:      'Fan Search Tool',
    category:   'Web and Mobile Apps',
    year:       '2026',
    color:      'from-slate-800/50',
  },
  {
    slug:       'meridian-identity',
    title:      'Data Collection Tool',
    category:   'Web and Mobile Apps',
    year:       '2025',
    color:      'from-zinc-800/50',
  },
];

const testimonials = [
  {
    quote:  'Luminary transformed how our brand is perceived globally. The work they delivered was beyond anything we imagined.',
    author: 'Sarah Chen',
    role:   'CEO, Archetype Inc.',
    stars:  5,
  },
  {
    quote:  'The attention to craft, strategy, and detail was unmatched. Our conversion rate improved by 340% after the redesign.',
    author: 'Marcus Reid',
    role:   'Founder, Nova Platform',
    stars:  5,
  },
];

// ── Page Component ───────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="hero-heading"
        className="relative min-h-screen flex items-center justify-center overflow-hidden hero-glow"
      >
        {/* Background decorative elements */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
          <div className="absolute top-1/3 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
          <div className="absolute bottom-1/3 left-1/6 w-24 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
          {/* Large decorative circle */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-[rgba(201,169,110,0.04)]" />
          <div className="absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full border border-[rgba(201,169,110,0.06)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 text-center">
          {/* ── Eyebrow ── */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,169,110,0.2)] bg-[rgba(201,169,110,0.05)] mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" aria-hidden />
            <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">
              Tech & Growth Partner
            </span>
          </div>

          {/* ── H1: most important SEO element on the page ── */}
          <h1
            id="hero-heading"
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8 animate-fade-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
           Turn Industrial Business Into
            <br />
            <em className="text-gradient-gold not-italic">
              Tech First Companies
            </em>
          </h1>

          <p
            className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.25s', animationFillMode: 'both' }}
          >
            From IoT platforms to SEO, we help automotive, HVAC, and industrial SMEs adopt the technology that actually moves the needle.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            <Link href="/our-works" className="btn-gold">
              View Our Work <ArrowRight size={14} />
            </Link>
            <Link href="/#contact" className="btn-ghost">
              Start a Project <ChevronRight size={14} />
            </Link>
          </div>

          {/* ── Stats bar ── */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-24 pt-12 border-t border-[rgba(201,169,110,0.08)] animate-fade-up"
            style={{ animationDelay: '0.55s', animationFillMode: 'both' }}
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">
                  {value}
                </p>
                <p className="text-muted text-xs tracking-wider uppercase mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SERVICES
          SEO: <section> with aria-labelledby + H2
      ════════════════════════════════════════════════════ */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="py-32 px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-4">
              What We Do
            </p>
            <h2
              id="services-heading"
              className="font-display text-4xl md:text-5xl font-bold text-ivory max-w-xl leading-tight"
            >
              Craft Meets Strategy,{' '}
              <em className="text-gradient-gold not-italic">Every Time</em>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.title} delay={i * 0.1}>
              <article
                className="card-hover bg-bg-card rounded-sm p-10 group"
                aria-label={`Service: ${svc.title}`}
              >
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {svc.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-ivory mb-3">
                  {svc.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {svc.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FEATURED WORKS
      ════════════════════════════════════════════════════ */}
      <section
        id="works"
        aria-labelledby="works-heading"
        className="py-24 px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-4">
                Selected Works
              </p>
              <h2
                id="works-heading"
                className="font-display text-4xl md:text-5xl font-bold text-ivory"
              >
                Recent Projects
              </h2>
            </div>
            <Link href="/our-works" className="btn-ghost self-start md:self-auto">
              View All Works <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredWorks.map((work, i) => (
            <ScrollReveal key={work.slug} delay={i * 0.12}>
              <Link href={`/our-works/${work.slug}`} className="block group">
                {/* ── next/image would go here in production ── */}
                <div
                  className={`
                    relative aspect-[3/4] bg-gradient-to-b ${work.color} to-bg-card
                    rounded-sm overflow-hidden border border-[rgba(255,255,255,0.04)]
                    transition-all duration-500 group-hover:border-[rgba(201,169,110,0.2)]
                  `}
                >
                  {/* Decorative inner content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border border-[rgba(201,169,110,0.2)] rounded-full flex items-center justify-center group-hover:border-gold/40 transition-colors duration-500">
                      <div className="w-2 h-2 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-500" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-bg-primary/80 to-transparent">
                    <p className="text-gold text-xs tracking-[0.2em] uppercase mb-1">{work.category}</p>
                    <h3 className="font-display text-xl font-semibold text-ivory">{work.title}</h3>
                  </div>
                  <span className="absolute top-4 right-4 text-faint text-xs">{work.year}</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="testimonials-heading"
        className="py-24 bg-bg-surface/40 border-y border-[rgba(201,169,110,0.06)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 id="testimonials-heading" className="sr-only">Client Testimonials</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.author} delay={i * 0.15}>
                <figure
                  aria-label={`Testimonial from ${t.author}`}
                  className="bg-bg-card rounded-sm p-10 border border-[rgba(255,255,255,0.04)]"
                >
                  <div className="flex gap-1 mb-6" aria-label={`${t.stars} stars`}>
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <blockquote>
                    <p className="font-display text-lg text-ivory leading-relaxed italic mb-8">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption>
                    <p className="text-ivory text-sm font-semibold">{t.author}</p>
                    <p className="text-muted text-xs mt-1">{t.role}</p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CONTACT / CTA
      ════════════════════════════════════════════════════ */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-32 px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-4">
              Ready to Begin?
            </p>
            <h2
              id="contact-heading"
              className="font-display text-4xl md:text-6xl font-bold text-ivory leading-tight mb-6"
            >
              Let's Build Something
              <br />
              <em className="text-gradient-gold not-italic">Extraordinary</em>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Tell us about your project. We'll come back to you within 24 hours with a clear plan.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Mail size={18} />,    label: 'Email Us',       value: 'info@quoteyourstack.com' },
              { icon: <Phone size={18} />,   label: 'Call Us',        value: '+91 75-360-630-11' },
              { icon: <MapPin size={18} />,  label: 'Our Space',     value: 'Delhi, India' },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="bg-bg-card border border-[rgba(255,255,255,0.04)] rounded-sm p-6 text-center card-hover"
              >
                <div className="text-gold mx-auto mb-3 flex justify-center">{icon}</div>
                <p className="text-muted text-xs uppercase tracking-wider mb-1">{label}</p>
                <p className="text-ivory text-sm">{value}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="flex justify-center mt-12">
            <a
              href="mailto:hello@luminarystudio.com"
              className="btn-gold text-sm"
              aria-label="Send an email to Luminary Studio"
            >
              Start a Project <ArrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
