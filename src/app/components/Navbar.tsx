'use client';

// src/app/components/Navbar.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/',          label: 'Home'      },
  { href: '/our-works', label: 'Our Works' },
  { href: '/blogs',     label: 'Blogs'     },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    // ── <header> is semantic — screen readers & crawlers use it
    <header
      role="banner"
      aria-label="Site header"
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${scrolled
          ? 'bg-bg-primary/95 backdrop-blur-md border-b border-[rgba(201,169,110,0.08)] py-4'
          : 'bg-transparent py-6'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* ── Logo — wrapped in <Link> for SEO anchor text ── */}
        <Link
          href="/"
          aria-label="Luminary Studio — Home"
          className="flex items-center gap-3 group"
        >
          {/* SVG Logo mark */}
          <span aria-hidden="true" className="w-8 h-8 relative">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="16,2 30,28 2,28" stroke="#C9A96E" strokeWidth="1.5" fill="none" className="transition-all duration-300 group-hover:fill-[rgba(201,169,110,0.1)]"/>
              <polygon points="16,8 26,26 6,26" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.4" fill="none"/>
              <circle cx="16" cy="16" r="2" fill="#C9A96E"/>
            </svg>
          </span>
          <span className="font-display text-xl font-semibold tracking-wide text-ivory">
            Luminary
            <span className="text-gold"> Studio</span>
          </span>
        </Link>

        {/* ── Desktop Navigation — <nav> is semantic ── */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-10"
        >
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`
                  font-body text-sm font-medium tracking-wider uppercase
                  link-underline transition-colors duration-300
                  ${isActive ? 'text-gold' : 'text-muted hover:text-ivory'}
                `}
              >
                {label}
              </Link>
            );
          })}

          {/* CTA */}
          <Link href="/#contact" className="btn-gold text-xs">
            Let's Talk
          </Link>
        </nav>

        {/* ── Mobile Menu Toggle ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden text-gold p-2"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`
          md:hidden overflow-hidden transition-all duration-500
          ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <nav
          role="navigation"
          aria-label="Mobile navigation"
          className="px-6 pb-8 pt-4 flex flex-col gap-6 bg-bg-surface/95 backdrop-blur-md border-t border-[rgba(201,169,110,0.08)]"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-body text-sm font-medium tracking-widest uppercase
                ${pathname === href ? 'text-gold' : 'text-muted'}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-gold text-xs self-start">
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
