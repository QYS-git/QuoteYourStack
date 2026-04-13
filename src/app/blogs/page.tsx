// src/app/blogs/page.tsx
// ── Blogs Listing Page ───────────────────────────────────────
// SEO: Unique metadata, H1, article list with semantic HTML

import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import Link from 'next/link';
import ScrollReveal from '@/app/components/ScrollReveal';
import { ArrowRight, Clock } from 'lucide-react';

// ── SEO Metadata ─────────────────────────────────────────────
export const metadata: Metadata = generatePageMetadata({
  title:       'Blog — Insights on Brand & Design',
  description: 'Thoughts on brand strategy, design craft, and digital innovation from the team at Luminary Studio. Read our latest insights.',
  path:        '/blogs',
});

// ── Blog data (replace with CMS in production) ───────────────
const posts = [
  {
    slug:        'why-brand-identity-matters',
    title:       'Why Brand Identity Is Your Most Valuable Business Asset',
    excerpt:     'Most companies treat brand as a cost centre. The best ones understand it\'s a compounding investment that reduces acquisition costs and increases lifetime value over time.',
    category:    'Brand Strategy',
    author:      'Elena Vasquez',
    publishedAt: '2025-04-08',
    readTime:    '7 min read',
    featured:    true,
  },
  {
    slug:        'designing-for-premium-audiences',
    title:       'How to Design for Premium Audiences Without Alienating Everyone Else',
    excerpt:     'Premium positioning isn\'t about being exclusive — it\'s about communicating quality with such confidence that the right people self-select.',
    category:    'Design',
    author:      'James Holt',
    publishedAt: '2025-04-01',
    readTime:    '5 min read',
    featured:    true,
  },
  {
    slug:        'seo-for-creative-agencies',
    title:       'SEO for Creative Agencies: A Practical Field Guide',
    excerpt:     'Most agencies build beautiful websites for clients but ignore their own SEO. Here\'s the playbook we use — and give away freely.',
    category:    'Growth',
    author:      'Priya Nair',
    publishedAt: '2025-03-20',
    readTime:    '9 min read',
    featured:    false,
  },
  {
    slug:        'the-case-for-slower-design',
    title:       'The Case for Slower Design in a World That Demands Speed',
    excerpt:     'Velocity is celebrated. But the most enduring work — identities that last decades, interfaces that age gracefully — comes from deliberate slowness.',
    category:    'Philosophy',
    author:      'Elena Vasquez',
    publishedAt: '2025-03-10',
    readTime:    '6 min read',
    featured:    false,
  },
  {
    slug:        'typography-as-brand-voice',
    title:       'Typography Is Not Decoration — It\'s Brand Voice',
    excerpt:     'The typeface you choose speaks before a word is read. Here\'s how to choose type that means something — and sounds like you.',
    category:    'Design',
    author:      'James Holt',
    publishedAt: '2025-02-28',
    readTime:    '4 min read',
    featured:    false,
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

export default function BlogsPage() {
  const featured = posts.filter(p => p.featured);
  const regular  = posts.filter(p => !p.featured);

  return (
    <>
      {/* ── Page Header ── */}
      <section
        aria-labelledby="blog-page-heading"
        className="pt-40 pb-16 px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <ScrollReveal>
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-6">
            Thinking Out Loud
          </p>
          <h1
            id="blog-page-heading"
            className="font-display text-5xl md:text-7xl font-bold text-ivory leading-tight max-w-2xl"
          >
            Ideas Worth
            <br />
            <em className="text-gradient-gold not-italic">Considering</em>
          </h1>
          <p className="text-muted text-lg mt-6 max-w-xl leading-relaxed">
            Essays and insights on brand strategy, design craft, and building digital products that endure.
          </p>
        </ScrollReveal>
      </section>

      <div className="gold-rule max-w-7xl mx-auto px-6 lg:px-12" />

      {/* ── Featured Posts ── */}
      <section
        aria-label="Featured articles"
        className="py-20 px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {featured.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              {/*
                ── <article> is semantic HTML for blog posts.
                   Google gives extra weight to <article> content.
              */}
              <article aria-labelledby={`post-${post.slug}`}>
                <Link href={`/blogs/${post.slug}`} className="group block">
                  {/* Decorative image placeholder — replace with <Image> from next/image */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-bg-card to-bg-surface rounded-sm border border-[rgba(255,255,255,0.04)] group-hover:border-[rgba(201,169,110,0.15)] transition-all duration-500 mb-6 flex items-center justify-center overflow-hidden">
                    <div className="w-12 h-12 border border-[rgba(201,169,110,0.15)] rounded-full group-hover:border-gold/30 transition-all duration-500" />
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[rgba(201,169,110,0.08)] border border-[rgba(201,169,110,0.15)] text-gold text-xs font-medium tracking-wider rounded-sm">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-faint text-xs">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>

                  <h2
                    id={`post-${post.slug}`}
                    className="font-display text-2xl font-semibold text-ivory leading-snug mb-3 group-hover:text-gold/80 transition-colors duration-300"
                  >
                    {post.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-ivory text-xs font-medium">{post.author}</p>
                      {/* ── <time> is semantic — helps Google understand publish date ── */}
                      <time
                        dateTime={post.publishedAt}
                        className="text-faint text-xs"
                      >
                        {formatDate(post.publishedAt)}
                      </time>
                    </div>
                    <span className="flex items-center gap-1 text-gold text-xs font-medium group-hover:gap-2 transition-all duration-300">
                      Read More <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* ── All Posts ── */}
        <ScrollReveal>
          <h2 className="font-display text-2xl font-semibold text-ivory mb-10 pb-4 border-b border-[rgba(201,169,110,0.08)]">
            All Articles
          </h2>
        </ScrollReveal>

        <div className="space-y-0 divide-y divide-[rgba(255,255,255,0.04)]">
          {regular.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.08}>
              <article aria-labelledby={`post-list-${post.slug}`} className="py-8">
                <Link href={`/blogs/${post.slug}`} className="group flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-gold text-xs tracking-wider uppercase">{post.category}</span>
                      <span className="text-faint text-xs">·</span>
                      <span className="flex items-center gap-1 text-faint text-xs">
                        <Clock size={10} /> {post.readTime}
                      </span>
                    </div>
                    <h2
                      id={`post-list-${post.slug}`}
                      className="font-display text-xl font-semibold text-ivory group-hover:text-gold/80 transition-colors duration-300"
                    >
                      {post.title}
                    </h2>
                    <p className="text-muted text-sm mt-2 max-w-xl line-clamp-1">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-6 md:text-right shrink-0">
                    <div>
                      <p className="text-ivory text-xs font-medium">{post.author}</p>
                      <time dateTime={post.publishedAt} className="text-faint text-xs">
                        {formatDate(post.publishedAt)}
                      </time>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                    />
                  </div>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
