'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What services does QuoteYourStack offer?',
    a: 'We provide Industrial IoT platforms, custom web and mobile tools, SEO & GEO-powered visibility, and full-stack branding — all tailored for industrial SMEs in automotive, HVAC, manufacturing, and agriculture sectors.',
  },
  {
    q: 'How do you measure success for industrial projects?',
    a: 'We define measurable KPIs upfront — uptime improvements, reduction in manual data entry hours, organic traffic growth, or lead volume. Every engagement ends with a report against those targets.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'For digital products (IoT platforms, custom tools), expect a working MVP in 8–12 weeks. For SEO and GEO, meaningful traction typically shows in 90–120 days.',
  },
  {
    q: 'Will I get regular updates during the project?',
    a: 'Yes — weekly progress check-ins are standard. You\'ll always know what was built, what\'s next, and what\'s blocking us. No black-box development.',
  },
  {
    q: 'How do I know which service is right for my business?',
    a: 'Book a discovery call. We\'ll audit your current operations, identify the highest-leverage problem to solve first, and recommend a scoped engagement — not a full retainer pitch.',
  },
  {
    q: 'How do I get started?',
    a: 'Reach us at info@quoteyourstack.com or hit "Let\'s Talk" in the nav. We respond within 24 hours and typically schedule a discovery call within the week.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[rgba(255,255,255,0.05)]">
      {faqs.map((faq, i) => (
        <div key={i} className="py-5">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center gap-4 text-left group"
            aria-expanded={openIndex === i}
          >
            <span className="font-display text-xs font-bold text-gold/40 w-6 shrink-0 tabular-nums">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className={`flex-1 font-body text-sm font-medium transition-colors duration-200 ${
              openIndex === i ? 'text-ivory' : 'text-muted group-hover:text-ivory'
            }`}>
              {faq.q}
            </span>
            <span className="text-gold shrink-0 transition-transform duration-200">
              {openIndex === i ? <Minus size={15} /> : <Plus size={15} />}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="ml-10 pt-3 pb-1 text-muted text-sm leading-relaxed">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
