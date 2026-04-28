// src/app/our-works/page.tsx

import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';
import ScrollReveal from '@/app/components/ScrollReveal';
import FaqAccordion from '@/app/components/FaqAccordion';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title:       'Our Works',
  description: 'Real problems, engineered solutions. Browse QuoteYourStack\'s portfolio of IoT platforms, custom tools, and digital growth projects built for industrial SMEs.',
  path:        '/our-works',
});

const works = [
  {
    slug:        'fleet-telematics-platform',
    title:       'End-to-end fleet telematics platform',
    category:    'Industrial IoT',
    description: 'IoT devices deployed across the fleet feeding real-time data like GPS tracking, engine diagnostics, and predictive maintenance alerts. All wired into a cloud platform with role-based web and mobile apps for managers, dispatchers, and drivers.',
    tags:        ['IoT', 'Real-time Visualisation', 'Predictive Maintenance', 'Mobile App'],
    visual:      'fleet',
  },
  {
    slug:        'fan-selection-datasheet-tool',
    title:       'Fan selection & datasheet tool',
    category:    'Web & Mobile Apps',
    description: 'A self-serve selection tool where customers input airflow, pressure, and application requirements and instantly receive matched fan models with complete technical datasheets. You get performance curves, acoustic data, mechanical specs, and GA drawings.',
    tags:        ['Automation', 'Web App', 'Data Engineering'],
    visual:      'fan',
  },
  {
    slug:        'smart-farm-data-platform',
    title:       'Smart farm data collection & AI analysis platform',
    category:    'Data & AI',
    description: 'A field data platform with mobile capture for images, audio, and structured observations. Backed by an AI pipeline that automatically counts leaves from photos, flags diseases, and surfaces dashboards for admins to monitor and act in real time.',
    tags:        ['AI / ML', 'Mobile App', 'Data Collection', 'Dashboard'],
    visual:      'farm',
  },
  {
    slug:        'branding',
    title:       'Branding',
    category:    'Branding & Marketing',
    description: 'Our branding services craft unique identities, build trust, and create lasting impressions that connect emotionally with audiences and elevate business growth.',
    tags:        ['Brand Identity', 'Strategy', 'Visual Design'],
    visual:      'brand',
  },
];

function WorkVisual({ type }: { type: string }) {
  if (type === 'fleet') {
    return (
      <svg width="100%" height="100%" viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="480" height="340" fill="#0D0C0A"/>
        {/* Grid lines */}
        {[0,1,2,3,4,5,6,7].map(i => (
          <line key={`h${i}`} x1="0" y1={i*48} x2="480" y2={i*48} stroke="rgba(201,169,110,0.05)" strokeWidth="1"/>
        ))}
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <line key={`v${i}`} x1={i*60} y1="0" x2={i*60} y2="340" stroke="rgba(201,169,110,0.05)" strokeWidth="1"/>
        ))}
        {/* Route line */}
        <polyline points="60,280 140,220 200,240 290,160 360,180 420,100" stroke="rgba(201,169,110,0.25)" strokeWidth="1.5" fill="none" strokeDasharray="6 4"/>
        {/* Node: truck 1 */}
        <circle cx="140" cy="220" r="14" fill="rgba(201,169,110,0.1)" stroke="rgba(201,169,110,0.35)" strokeWidth="1.5"/>
        <circle cx="140" cy="220" r="5"  fill="#C9A96E"/>
        {/* Node: truck 2 */}
        <circle cx="290" cy="160" r="18" fill="rgba(201,169,110,0.15)" stroke="#C9A96E" strokeWidth="1.5"/>
        <circle cx="290" cy="160" r="6"  fill="#C9A96E"/>
        {/* Active glow on truck 2 */}
        <circle cx="290" cy="160" r="28" fill="none" stroke="rgba(201,169,110,0.12)" strokeWidth="2"/>
        {/* Node: truck 3 */}
        <circle cx="420" cy="100" r="12" fill="rgba(201,169,110,0.08)" stroke="rgba(201,169,110,0.3)" strokeWidth="1.5"/>
        <circle cx="420" cy="100" r="4"  fill="#C9A96E" fillOpacity="0.7"/>
        {/* Status pill */}
        <rect x="300" y="118" width="90" height="24" rx="12" fill="rgba(26,26,20,0.95)" stroke="rgba(201,169,110,0.3)" strokeWidth="1"/>
        <circle cx="314" cy="130" r="4" fill="#4ade80"/>
        <text x="326" y="134" fill="#8A8A9A" fontSize="10" fontFamily="DM Sans,sans-serif">Live tracking</text>
        {/* Small nodes */}
        <circle cx="60"  cy="280" r="7" fill="rgba(201,169,110,0.06)" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
        <circle cx="200" cy="240" r="8" fill="rgba(201,169,110,0.06)" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
        <circle cx="360" cy="180" r="8" fill="rgba(201,169,110,0.06)" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
        {/* Horizon glow */}
        <ellipse cx="240" cy="340" rx="200" ry="60" fill="rgba(201,169,110,0.04)"/>
      </svg>
    );
  }

  if (type === 'fan') {
    return (
      <svg width="100%" height="100%" viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="480" height="340" fill="#080C12"/>
        {/* Concentric circles */}
        {[120,90,60,36,18].map((r, i) => (
          <circle key={r} cx="200" cy="170" r={r} fill="none" stroke="rgba(201,169,110,0.1)" strokeWidth="1" strokeDasharray={i % 2 === 0 ? "6 4" : "none"}/>
        ))}
        <circle cx="200" cy="170" r="8" fill="rgba(201,169,110,0.2)" stroke="#C9A96E" strokeWidth="1.5"/>
        <circle cx="200" cy="170" r="3" fill="#C9A96E"/>
        {/* Fan blade lines */}
        {[0,45,90,135,180,225,270,315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = 200 + 115 * Math.cos(rad);
          const y2 = 170 + 115 * Math.sin(rad);
          return <line key={angle} x1="200" y1="170" x2={x2} y2={y2} stroke="rgba(201,169,110,0.08)" strokeWidth="1"/>;
        })}
        {/* Datasheet table */}
        <rect x="340" y="60" width="120" height="220" rx="4" fill="rgba(12,18,28,0.9)" stroke="rgba(201,169,110,0.15)" strokeWidth="1"/>
        <rect x="340" y="60" width="120" height="24" rx="4" fill="rgba(201,169,110,0.08)"/>
        <text x="400" y="76" textAnchor="middle" fill="#C9A96E" fontSize="9" fontFamily="DM Sans,sans-serif">DATASHEET</text>
        {[0,1,2,3,4,5,6].map(i => (
          <g key={i}>
            <line x1="340" y1={84+i*26} x2="460" y2={84+i*26} stroke="rgba(201,169,110,0.08)" strokeWidth="1"/>
            <rect x="348" y={88+i*26} width={30+Math.sin(i)*15} height="8" rx="2" fill="rgba(201,169,110,0.15)"/>
            <rect x="400" y={88+i*26} width={20+Math.cos(i)*10} height="8" rx="2" fill="rgba(201,169,110,0.1)"/>
          </g>
        ))}
        {/* Curve line */}
        <path d="M 60 280 Q 100 200 140 210 Q 160 215 180 200 Q 200 185 220 160 Q 240 130 260 100" stroke="rgba(201,169,110,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="260" cy="100" r="4" fill="#C9A96E"/>
        <ellipse cx="200" cy="340" rx="180" ry="50" fill="rgba(30,60,120,0.08)"/>
      </svg>
    );
  }

  if (type === 'farm') {
    return (
      <svg width="100%" height="100%" viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="480" height="340" fill="#080E0A"/>
        {/* Ground grid */}
        {[0,1,2,3,4].map(i => (
          <line key={`h${i}`} x1="0" y1={60+i*56} x2="480" y2={60+i*56} stroke="rgba(74,222,128,0.05)" strokeWidth="1"/>
        ))}
        {[0,1,2,3,4,5,6,7].map(i => (
          <line key={`v${i}`} x1={i*70} y1="60" x2={i*70} y2="340" stroke="rgba(74,222,128,0.05)" strokeWidth="1"/>
        ))}
        {/* Leaf silhouette */}
        <path d="M 240 300 C 240 300 120 240 100 160 C 80 80 200 40 240 40 C 280 40 400 80 380 160 C 360 240 240 300 240 300Z" fill="rgba(74,222,128,0.04)" stroke="rgba(74,222,128,0.12)" strokeWidth="1.5"/>
        {/* Leaf vein */}
        <path d="M 240 300 L 240 40" stroke="rgba(74,222,128,0.15)" strokeWidth="1" strokeDasharray="6 4"/>
        <path d="M 240 160 Q 180 140 140 160" stroke="rgba(74,222,128,0.12)" strokeWidth="1" strokeDasharray="4 3"/>
        <path d="M 240 200 Q 300 180 340 200" stroke="rgba(74,222,128,0.12)" strokeWidth="1" strokeDasharray="4 3"/>
        <path d="M 240 120 Q 300 100 350 120" stroke="rgba(74,222,128,0.12)" strokeWidth="1" strokeDasharray="4 3"/>
        {/* Data collection nodes */}
        <circle cx="160" cy="155" r="8"  fill="rgba(74,222,128,0.15)" stroke="rgba(74,222,128,0.4)" strokeWidth="1.5"/>
        <circle cx="320" cy="130" r="10" fill="rgba(74,222,128,0.2)"  stroke="rgba(74,222,128,0.5)" strokeWidth="1.5"/>
        <circle cx="310" cy="195" r="7"  fill="rgba(74,222,128,0.12)" stroke="rgba(74,222,128,0.3)" strokeWidth="1"/>
        {/* AI badge */}
        <rect x="330" y="40" width="110" height="30" rx="6" fill="rgba(10,20,12,0.95)" stroke="rgba(74,222,128,0.25)" strokeWidth="1"/>
        <circle cx="346" cy="55" r="5" fill="rgba(74,222,128,0.3)"/>
        <text x="358" y="59" fill="#8A8A9A" fontSize="10" fontFamily="DM Sans,sans-serif">AI analysing…</text>
        {/* Glow */}
        <ellipse cx="240" cy="340" rx="200" ry="55" fill="rgba(74,222,128,0.04)"/>
      </svg>
    );
  }

  // brand
  return (
    <svg width="100%" height="100%" viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="480" height="340" fill="#0D0A12"/>
      {/* Color swatch blocks */}
      <rect x="40"  y="60"  width="80" height="80" rx="4" fill="#C9A96E" fillOpacity="0.9"/>
      <rect x="130" y="60"  width="80" height="80" rx="4" fill="#1A1A26"/>
      <rect x="220" y="60"  width="80" height="80" rx="4" fill="#F5F0E8" fillOpacity="0.08"/>
      <rect x="310" y="60"  width="80" height="80" rx="4" fill="#8A8A9A" fillOpacity="0.2"/>
      {/* Swatch labels */}
      <text x="80"  y="158" textAnchor="middle" fill="#C9A96E"  fontSize="8" fontFamily="DM Sans,sans-serif">#C9A96E</text>
      <text x="170" y="158" textAnchor="middle" fill="#8A8A9A"  fontSize="8" fontFamily="DM Sans,sans-serif">#1A1A26</text>
      <text x="260" y="158" textAnchor="middle" fill="#8A8A9A"  fontSize="8" fontFamily="DM Sans,sans-serif">#F5F0E8</text>
      <text x="350" y="158" textAnchor="middle" fill="#8A8A9A"  fontSize="8" fontFamily="DM Sans,sans-serif">#8A8A9A</text>
      {/* Typography specimen */}
      <text x="40" y="210" fill="rgba(245,240,232,0.7)" fontSize="32" fontFamily="Georgia,serif" fontWeight="700">Aa</text>
      <text x="40" y="235" fill="rgba(201,169,110,0.5)" fontSize="11" fontFamily="DM Sans,sans-serif" letterSpacing="3">BRAND TYPEFACE</text>
      {/* Logo mark */}
      <circle cx="360" cy="230" r="44" fill="none" stroke="rgba(201,169,110,0.15)" strokeWidth="1"/>
      <circle cx="360" cy="230" r="28" fill="rgba(201,169,110,0.06)" stroke="rgba(201,169,110,0.25)" strokeWidth="1.5"/>
      <polygon points="360,210 374,238 346,238" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
      <circle cx="360" cy="228" r="3" fill="#C9A96E"/>
      {/* Grid */}
      <rect x="40" y="260" width="260" height="1" fill="rgba(201,169,110,0.1)"/>
      <text x="40" y="278" fill="rgba(201,169,110,0.3)" fontSize="8" fontFamily="DM Sans,sans-serif" letterSpacing="2">IDENTITY SYSTEM · 2026</text>
      <ellipse cx="240" cy="340" rx="200" ry="50" fill="rgba(100,60,180,0.05)"/>
    </svg>
  );
}

export default function OurWorksPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        aria-labelledby="works-page-heading"
        className="pt-40 pb-16 px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <ScrollReveal>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,169,110,0.2)] bg-[rgba(201,169,110,0.05)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden />
            <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">
              Real problems. Engineered solutions.
            </span>
          </div>
          <h1
            id="works-page-heading"
            className="font-display text-5xl md:text-7xl font-bold text-ivory leading-tight max-w-2xl"
          >
            Built for industries that run on{' '}
            <em className="text-gradient-gold not-italic">legacy and instinct</em>
          </h1>
        </ScrollReveal>
      </section>

      <div className="gold-rule max-w-7xl mx-auto px-6 lg:px-12" />

      {/* ── Works List ── */}
      <section
        aria-label="Portfolio projects"
        className="px-6 lg:px-12 max-w-7xl mx-auto pb-12"
      >
        {works.map((work, i) => (
          <ScrollReveal key={work.slug} delay={i * 0.05}>
            <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-10 md:gap-16 items-start py-16 border-b border-[rgba(255,255,255,0.04)] last:border-b-0">

              {/* Visual */}
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[rgba(255,255,255,0.04)] group-hover:border-[rgba(201,169,110,0.15)] transition-colors duration-500">
                <WorkVisual type={work.visual} />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center py-2">
                <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase mb-3">
                  {work.category}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory leading-tight mb-5">
                  {work.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-6 max-w-lg">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {work.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-muted border border-[rgba(255,255,255,0.06)] rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/our-works/${work.slug}`} className="btn-gold text-xs self-start">
                  View Project <ArrowRight size={13} />
                </Link>
              </div>

            </div>
          </ScrollReveal>
        ))}

        {/* Load More */}
        <div className="flex justify-center pt-12">
          <button className="btn-gold text-xs">
            Load More
          </button>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        aria-labelledby="faq-heading"
        className="py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[rgba(201,169,110,0.08)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <ScrollReveal>
            <div className="md:sticky md:top-32">
              <h2
                id="faq-heading"
                className="font-display text-4xl md:text-5xl font-bold text-ivory leading-tight mb-5"
              >
                Frequently Asked{' '}
                <em className="text-gradient-gold not-italic">Questions!</em>
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-8 max-w-xs">
                Explore answers to frequently asked questions about our services, pricing, and process, helping you make informed decisions.
              </p>
              <Link href="/#contact" className="btn-gold text-xs self-start">
                Contact Us <ArrowRight size={13} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right — accordion */}
          <ScrollReveal delay={0.1}>
            <FaqAccordion />
          </ScrollReveal>

        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        aria-labelledby="works-cta-heading"
        className="py-28 px-6 lg:px-12 bg-bg-surface/40 border-t border-[rgba(201,169,110,0.08)]"
      >
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="works-cta-heading"
              className="font-display text-4xl md:text-5xl font-bold text-ivory leading-tight mb-5"
            >
              Your idea deserves the right{' '}
              <em className="text-gradient-gold not-italic">technology behind it.</em>
            </h2>
            <p className="text-muted text-base mb-10">
              Got a clear brief or just a problem worth solving? Let&apos;s have a conversation.
            </p>
            <a href="mailto:info@quoteyourstack.com" className="btn-gold">
              Reach out anytime <ArrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
