'use client';

import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'Work', href: '#products' },
  { label: 'Build MVP', href: '/build-mvp' },
  { label: 'Blog', href: '/blog' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg)]/80">
      <div className="mx-auto flex h-14 max-w-[var(--container)] items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-[var(--text)] hover:text-[var(--primarySoft)] transition-colors"
        >
          <Image
            src="/profile.jpg"
            alt="Norberto Libago"
            width={32}
            height={32}
            className="rounded-full object-cover ring-2 ring-[var(--border)]"
          />
          <span className="hidden sm:inline text-sm">Norberto Libago</span>
        </Link>

        <nav className="flex items-center gap-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-[var(--textMuted)] hover:text-[var(--text)] transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:norbertoqjr@gmail.com"
            className="rounded-[var(--radiusButton)] px-4 py-1.5 text-sm font-medium text-white"
            style={{ background: 'linear-gradient(135deg, var(--primary), var(--primarySoft))' }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
