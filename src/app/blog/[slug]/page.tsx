import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost, getBlogPosts } from '@/lib/blog';
import JsonLd from '@/components/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://norbertolibago.com';

export function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Norberto Libago'],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <JsonLd
        data={{
          '@type': 'Article',
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: { '@type': 'Person', name: 'Norberto Libago', url: siteUrl },
          publisher: { '@type': 'Person', name: 'Norberto Libago' },
          mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
        }}
      />

      <article className="mx-auto w-full max-w-[720px] px-4 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-[var(--textMuted)] hover:text-[var(--text)] transition-colors mb-8"
        >
          ← Back to Blog
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[var(--radiusBadge)] bg-[var(--primary)]/15 px-2.5 py-0.5 text-[0.7rem] font-medium text-[var(--primarySoft)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
            {post.title}
          </h1>
          <p className="text-[var(--textSecondary)]">{post.description}</p>
          <div className="flex items-center gap-3 mt-6">
            <Image
              src="/profile.jpg"
              alt="Norberto Libago"
              width={36}
              height={36}
              className="rounded-full object-cover ring-2 ring-[var(--border)]"
            />
            <div>
              <span className="text-sm font-medium text-[var(--text)]">Norberto Libago</span>
              <time className="block text-xs text-[var(--textMuted)]">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-sm max-w-none prose-headings:text-[var(--text)] prose-p:text-[var(--textSecondary)] prose-a:text-[var(--primarySoft)] prose-a:no-underline hover:prose-a:underline prose-strong:text-[var(--text)] prose-code:text-[var(--primarySoft)] prose-code:bg-[var(--border)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[var(--card)] prose-pre:border prose-pre:border-[var(--border)] prose-li:text-[var(--textSecondary)] prose-blockquote:border-[var(--primary)] prose-blockquote:text-[var(--textMuted)]">
          <MDXRemote source={post.content} />
        </div>

        <footer className="mt-16 pt-8 border-t border-[var(--border)]">
          <div className="flex items-center gap-4">
            <Image
              src="/profile.jpg"
              alt="Norberto Libago"
              width={48}
              height={48}
              className="rounded-full object-cover ring-2 ring-[var(--border)]"
            />
            <div>
              <p className="font-semibold text-[var(--text)]">Norberto Libago</p>
              <p className="text-sm text-[var(--textMuted)]">
                SaaS MVP Maker. I build production-ready startups in days using AI-accelerated development.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/build-mvp"
              className="inline-flex items-center rounded-[var(--radiusButton)] px-5 py-2.5 text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, var(--primary), var(--primarySoft))' }}
            >
              Build Your MVP →
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-[var(--radiusButton)] border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] hover:bg-[var(--border)] transition"
            >
              More Articles
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
