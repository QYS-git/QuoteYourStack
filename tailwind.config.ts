import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Formal Brand Palette ──────────────────────────
        'bg-primary':  '#0A0A0F',   // Deep Obsidian
        'bg-surface':  '#12121A',   // Rich Charcoal
        'bg-card':     '#1A1A26',   // Elevated Card
        'gold':        '#C9A96E',   // Warm Champagne Gold
        'gold-light':  '#E8C98A',   // Light Gold Accent
        'ivory':       '#F5F0E8',   // Warm Ivory White
        'muted':       '#8A8A9A',   // Steel Grey (body text)
        'faint':       '#4A4A5A',   // Disabled / decorative
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':      'fadeUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        'fade-in':      'fadeIn 1s ease forwards',
        'float':        'float 6s ease-in-out infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
        'spin-slow':    'spin 20s linear infinite',
        'pulse-gold':   'pulseGold 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,169,110,0)' },
          '50%':      { boxShadow: '0 0 40px 10px rgba(201,169,110,0.15)' },
        },
      },
      backgroundImage: {
        'gradient-radial':  'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer':     'linear-gradient(90deg, transparent 0%, rgba(201,169,110,0.4) 50%, transparent 100%)',
        'hero-glow':        'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,169,110,0.12) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};

export default config;
