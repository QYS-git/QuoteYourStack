// src/app/not-found.tsx
// ── 404 Page ─────────────────────────────────────────────────
// Next.js App Router uses this file for all 404 responses.
// SEO: Returns proper 404 HTTP status automatically.

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  robots: { index: false },  // Don't index 404 pages
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <p className="font-display text-[12rem] font-bold leading-none text-gradient-gold opacity-20 select-none" aria-hidden>
          404
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-ivory -mt-8 mb-4">
          Page Not Found
        </h1>
        <p className="text-muted text-base mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-gold">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
