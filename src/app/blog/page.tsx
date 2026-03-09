import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles on building SaaS MVPs, AI-accelerated development, HIPAA-ready architecture, and full-stack engineering.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto w-full max-w-[var(--container)] px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Blog</h1>
        <p className="text-[var(--textSecondary)] mb-10 max-w-lg">
          Lessons from building SaaS MVPs, shipping fast with AI, and engineering secure products.
        </p>

        {posts.length === 0 && (
          <p className="text-[var(--textMuted)]">No posts yet. Check back soon.</p>
        )}

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-[var(--radiusCard)] border border-[var(--border)] bg-[var(--card)] p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--glowPrimary)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <h2 className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--primarySoft)] transition-colors">
                  {post.title}
                </h2>
                <time className="text-xs text-[var(--textMuted)] shrink-0">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <p className="text-sm text-[var(--textSecondary)] mb-3">{post.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[var(--radiusBadge)] bg-[var(--border)] px-2.5 py-0.5 text-[0.7rem] text-[var(--textMuted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
