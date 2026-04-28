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
  ChevronRight, Mail, MapPin, Phone
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
          {/* <div
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
          </div> */}
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
          PROCESS — HOW WE WORK
      ════════════════════════════════════════════════════ */}
      <section
        id="process"
        aria-labelledby="process-heading"
        className="py-32 px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-4">
              How We Work
            </p>
            <h2
              id="process-heading"
              className="font-display text-4xl md:text-5xl font-bold text-ivory leading-tight"
            >
              How We Go From{' '}
              <em className="text-gradient-gold not-italic">Problem to Product</em>
            </h2>
            <p className="text-muted text-lg mt-4 max-w-xl mx-auto">
              We work closely with your team, understanding your workflow before writing a single line of code.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ── Card 1: Discovery & Problem Mapping ── */}
          <ScrollReveal delay={0}>
            <div className="bg-bg-card rounded-sm border border-[rgba(255,255,255,0.04)] overflow-hidden group card-hover">
              <div className="h-52 bg-[#0D0D18] flex items-center justify-center overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 420 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                  <line x1="110" y1="60"  x2="200" y2="90"  stroke="rgba(201,169,110,0.2)" strokeWidth="1" strokeDasharray="5 4"/>
                  <line x1="110" y1="120" x2="200" y2="90"  stroke="rgba(201,169,110,0.2)" strokeWidth="1" strokeDasharray="5 4"/>
                  <line x1="200" y1="90"  x2="310" y2="60"  stroke="rgba(201,169,110,0.2)" strokeWidth="1" strokeDasharray="5 4"/>
                  <line x1="200" y1="90"  x2="310" y2="120" stroke="rgba(201,169,110,0.2)" strokeWidth="1" strokeDasharray="5 4"/>
                  <circle cx="200" cy="90" r="10" fill="rgba(201,169,110,0.1)" stroke="rgba(201,169,110,0.4)" strokeWidth="1.5"/>
                  <circle cx="200" cy="90" r="4"  fill="#C9A96E"/>
                  <rect x="40"  y="46"  width="100" height="28" rx="14" fill="rgba(26,26,38,0.95)" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
                  <circle cx="56"  cy="60"  r="5" fill="rgba(201,169,110,0.3)"/>
                  <text x="80"  y="65"  fill="#8A8A9A" fontSize="11" fontFamily="DM Sans,sans-serif">Research</text>
                  <rect x="40"  y="106" width="100" height="28" rx="14" fill="rgba(26,26,38,0.95)" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
                  <circle cx="56"  cy="120" r="5" fill="rgba(201,169,110,0.3)"/>
                  <text x="80"  y="125" fill="#8A8A9A" fontSize="11" fontFamily="DM Sans,sans-serif">Kickoff</text>
                  <rect x="280" y="46"  width="100" height="28" rx="14" fill="rgba(26,26,38,0.95)" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
                  <circle cx="296" cy="60"  r="5" fill="rgba(201,169,110,0.3)"/>
                  <text x="320" y="65"  fill="#8A8A9A" fontSize="11" fontFamily="DM Sans,sans-serif">Brief</text>
                  <rect x="280" y="106" width="100" height="28" rx="14" fill="rgba(26,26,38,0.95)" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
                  <circle cx="296" cy="120" r="5" fill="rgba(201,169,110,0.3)"/>
                  <text x="320" y="125" fill="#8A8A9A" fontSize="11" fontFamily="DM Sans,sans-serif">Goals</text>
                </svg>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-ivory mb-3">
                  Discovery &amp; Problem Mapping
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  We sit with your team, understand the workflow, identify the manual bottlenecks, and define what success looks like for your business.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Card 2: Solution Design ── */}
          <ScrollReveal delay={0.1}>
            <div className="bg-bg-card rounded-sm border border-[rgba(255,255,255,0.04)] overflow-hidden group card-hover">
              <div className="h-52 bg-[#0D0D18] flex items-center justify-center overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 420 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                  <line x1="210" y1="90" x2="100" y2="44"  stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
                  <line x1="210" y1="90" x2="320" y2="44"  stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
                  <line x1="210" y1="90" x2="100" y2="136" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
                  <line x1="210" y1="90" x2="320" y2="136" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
                  <circle cx="210" cy="90" r="32" fill="rgba(201,169,110,0.04)" stroke="rgba(201,169,110,0.12)" strokeWidth="1"/>
                  <circle cx="210" cy="90" r="18" fill="rgba(201,169,110,0.08)" stroke="rgba(201,169,110,0.3)"  strokeWidth="1.5"/>
                  <circle cx="210" cy="90" r="7"  fill="#C9A96E" fillOpacity="0.9"/>
                  <rect x="42"  y="30"  width="76" height="28" rx="14" fill="rgba(26,26,38,0.95)" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
                  <text x="80"  y="49"  textAnchor="middle" fill="#8A8A9A" fontSize="11" fontFamily="DM Sans,sans-serif">Vision</text>
                  <rect x="302" y="30"  width="76" height="28" rx="14" fill="rgba(26,26,38,0.95)" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
                  <text x="340" y="49"  textAnchor="middle" fill="#8A8A9A" fontSize="11" fontFamily="DM Sans,sans-serif">Strategy</text>
                  <rect x="42"  y="122" width="76" height="28" rx="14" fill="rgba(26,26,38,0.95)" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
                  <text x="80"  y="141" textAnchor="middle" fill="#8A8A9A" fontSize="11" fontFamily="DM Sans,sans-serif">Execute</text>
                  <rect x="302" y="122" width="76" height="28" rx="14" fill="rgba(26,26,38,0.95)" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
                  <text x="340" y="141" textAnchor="middle" fill="#8A8A9A" fontSize="11" fontFamily="DM Sans,sans-serif">Success</text>
                </svg>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-ivory mb-3">
                  Solution Design
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  We map the right technology to your problem. No over-engineering, no unnecessary complexity. A clear scope, timeline, and architecture.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Card 3: Build & Iterate ── */}
          <ScrollReveal delay={0.15}>
            <div className="bg-bg-card rounded-sm border border-[rgba(255,255,255,0.04)] overflow-hidden group card-hover">
              <div className="h-52 bg-[#0D0D18] flex items-center justify-center overflow-hidden">
                <div className="flex items-center gap-5">
                  <div className="w-[72px] h-[72px] rounded-sm border border-[rgba(201,169,110,0.25)] bg-[rgba(201,169,110,0.04)] flex flex-col items-start justify-center gap-[7px] px-3">
                    <div className="w-full  h-[3px] rounded-full bg-gold/50" />
                    <div className="w-3/4   h-[3px] rounded-full bg-gold/30" />
                    <div className="w-5/6   h-[3px] rounded-full bg-gold/30" />
                  </div>
                  <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                    <path d="M0 6h24M20 2l4 4-4 4" stroke="rgba(201,169,110,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="w-[72px] h-[72px] rounded-sm border border-[rgba(201,169,110,0.55)] bg-[rgba(201,169,110,0.08)] flex items-center justify-center shadow-[0_0_24px_rgba(201,169,110,0.1)]">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="10" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
                      <path d="M11 16l4 4 6-6" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                    <path d="M0 6h24M20 2l4 4-4 4" stroke="rgba(201,169,110,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="w-[72px] h-[72px] rounded-sm border border-[rgba(201,169,110,0.25)] bg-[rgba(201,169,110,0.04)] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M7 23l3-9 6 5 4-10" stroke="rgba(201,169,110,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="25" cy="9" r="2.5" fill="#C9A96E"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-ivory mb-3">
                  Build &amp; Iterate
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Agile development with regular check-ins. You see progress every week — not just at the end. Feedback shapes the product in real time.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Card 4: Launch & Growth ── */}
          <ScrollReveal delay={0.25}>
            <div className="bg-bg-card rounded-sm border border-[rgba(255,255,255,0.04)] overflow-hidden group card-hover">
              <div className="h-52 bg-[#0D0D18] flex items-center justify-center overflow-hidden">
                <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Row 0 */}
                  <circle cx="20"  cy="20"  r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="48"  cy="20"  r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="76"  cy="20"  r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="104" cy="20"  r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="132" cy="20"  r="2.5" fill="rgba(201,169,110,0.55)"/>
                  <circle cx="160" cy="20"  r="2.5" fill="rgba(201,169,110,0.65)"/>
                  <circle cx="188" cy="20"  r="2.5" fill="rgba(201,169,110,0.75)"/>
                  <circle cx="216" cy="20"  r="2.5" fill="rgba(201,169,110,0.90)"/>
                  {/* Row 1 */}
                  <circle cx="20"  cy="48"  r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="48"  cy="48"  r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="76"  cy="48"  r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="104" cy="48"  r="2.5" fill="rgba(201,169,110,0.45)"/>
                  <circle cx="132" cy="48"  r="2.5" fill="rgba(201,169,110,0.55)"/>
                  <circle cx="160" cy="48"  r="2.5" fill="rgba(201,169,110,0.65)"/>
                  <circle cx="188" cy="48"  r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="216" cy="48"  r="2.5" fill="rgba(201,169,110,0.10)"/>
                  {/* Row 2 */}
                  <circle cx="20"  cy="76"  r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="48"  cy="76"  r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="76"  cy="76"  r="2.5" fill="rgba(201,169,110,0.35)"/>
                  <circle cx="104" cy="76"  r="2.5" fill="rgba(201,169,110,0.45)"/>
                  <circle cx="132" cy="76"  r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="160" cy="76"  r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="188" cy="76"  r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="216" cy="76"  r="2.5" fill="rgba(201,169,110,0.10)"/>
                  {/* Row 3 */}
                  <circle cx="20"  cy="104" r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="48"  cy="104" r="2.5" fill="rgba(201,169,110,0.25)"/>
                  <circle cx="76"  cy="104" r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="104" cy="104" r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="132" cy="104" r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="160" cy="104" r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="188" cy="104" r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="216" cy="104" r="2.5" fill="rgba(201,169,110,0.10)"/>
                  {/* Row 4 */}
                  <circle cx="20"  cy="132" r="2.5" fill="rgba(201,169,110,0.15)"/>
                  <circle cx="48"  cy="132" r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="76"  cy="132" r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="104" cy="132" r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="132" cy="132" r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="160" cy="132" r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="188" cy="132" r="2.5" fill="rgba(201,169,110,0.10)"/>
                  <circle cx="216" cy="132" r="2.5" fill="rgba(201,169,110,0.10)"/>
                  {/* Ascending staircase */}
                  <polyline points="20,132 48,104 76,76 104,48 132,20" stroke="rgba(201,169,110,0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="132" cy="20" r="4.5" fill="#C9A96E" fillOpacity="0.9"/>
                </svg>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-ivory mb-3">
                  Launch &amp; Growth
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  We deploy, train your team, and stay on board. Post-launch support, monitoring, and optimisation included.
                </p>
              </div>
            </div>
          </ScrollReveal>

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
              Get a Customized
              <br />
              <em className="text-gradient-gold not-italic">Quote For Your Project</em>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Got any budget or any unique vision in mind? Schedule an introductory call to discuss a custom solution.
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
