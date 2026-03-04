'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FinalCTASection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-4 md:px-8 bg-white/[0.02] border-t border-white/5"
    >
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Have an Idea? Let&apos;s Build It in Days.
        </h2>
        <p className="mt-6 text-slate-400 text-lg">
          I specialize in secure, AI-powered SaaS MVPs built for fast validation
          and long-term scalability.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-portfolio-accent hover:bg-portfolio-accent-light text-white border-0"
          >
            <Link href="#contact">Book a Call</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-slate-500 text-slate-200 hover:bg-slate-800"
          >
            <a href="mailto:norbertoqjr@gmail.com">Email Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
