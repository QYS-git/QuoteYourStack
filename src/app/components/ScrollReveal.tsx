'use client';

// src/app/components/ScrollReveal.tsx
// ── Wraps children in an Intersection Observer reveal ──────
// Usage: <ScrollReveal delay={0.2}><YourComponent /></ScrollReveal>

import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  delay?:   number;   // seconds, e.g. 0.2
  className?: string;
}

export default function ScrollReveal({ children, delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
