// src/app/components/Footer.tsx
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/seo';

const footerLinks = {
  Agency: [
    { href: '/',           label: 'Home'      },
    { href: '/our-works',  label: 'Our Works' },
    { href: '/blogs',      label: 'Blogs'     },
    { href: '/#contact',   label: 'Contact'   },
  ],
  Services: [
    { href: '/#services',  label: 'Brand Strategy'  },
    { href: '/#services',  label: 'UI/UX Design'     },
    { href: '/#services',  label: 'Web Development'  },
    { href: '/#services',  label: 'Motion Design'    },
  ],
};

export default function Footer() {
  return (
    // ── <footer> is semantic — crawler-friendly ──
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="bg-bg-surface border-t border-[rgba(201,169,110,0.08)] mt-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* ── Brand ── */}
          <div className="md:col-span-2">
            <Link href="/" aria-label="Luminary Studio home" className="inline-flex items-center gap-3 mb-6">
              <span aria-hidden className="w-7 h-7">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="16,2 30,28 2,28" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
                  <circle cx="16" cy="16" r="2" fill="#C9A96E"/>
                </svg>
              </span>
              <span className="font-display text-lg font-semibold text-ivory">
                QuoteYour<span className="text-gold">Stack</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              QuoteYourIdea is a tech & digital growth partner for industrial SMEs in India. We build tools that make your operations smarter and your brand easier to find.
            </p>
            {/* ── Socials — anchor text is SEO signal ── */}
            <div className="flex items-center gap-4 mt-8">
              {Object.entries(SITE_CONFIG.socials).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Luminary Studio on ${platform}`}
                  className="text-faint hover:text-gold transition-colors duration-300 capitalize text-xs font-medium tracking-wider"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* ── Footer link columns ── */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6">
                {heading}
              </h3>
              <ul className="space-y-4" role="list">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-muted hover:text-ivory transition-colors duration-300 link-underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gold-rule mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-faint text-xs tracking-wide">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-faint text-xs hover:text-muted transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-faint text-xs hover:text-muted transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
