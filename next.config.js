/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables React strict mode for highlighting potential problems
  reactStrictMode: true,

  // Compress responses for faster page loads (Core Web Vitals)
  compress: true,

  images: {
    // Add external domains here if you load images from a CMS/CDN
    // e.g. remotePatterns: [{ protocol: 'https', hostname: 'images.sanity.io' }]
    formats: ['image/avif', 'image/webp'], // Serve modern image formats for speed
  },

  // Security & SEO-friendly headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
