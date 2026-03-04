'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Work', href: '#products' },
  { label: 'Process', href: '#ai-workflow' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-portfolio-bg/95 backdrop-blur supports-[backdrop-filter]:bg-portfolio-bg/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="font-semibold text-white hover:text-portfolio-accent-light transition-colors"
        >
          Norberto Libago
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'text-sm text-slate-300 hover:text-white transition-colors'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white"
          >
            <Link href="#products">View My Work</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-portfolio-accent hover:bg-portfolio-accent-light text-white border-0"
          >
            <Link href="#contact">Build My MVP</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
