'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const badges = [
  { emoji: '🚀', label: 'MVP in 3–7 Days' },
  { emoji: '🤖', label: 'AI-Accelerated Development' },
  { emoji: '🏥', label: 'HIPAA-Ready Systems' },
  { emoji: '☁️', label: 'AWS & Docker Deployments' },
];

export default function HeroSection() {
  const router = useRouter();
  const [idea, setIdea] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = idea.trim();
    if (value) {
      router.push(`/build-mvp?idea=${encodeURIComponent(value)}`);
    } else {
      router.push('/build-mvp');
    }
  };

  return (
    <section
      id="hero"
      className="relative py-24 md:py-32 px-4 md:px-8 container max-w-6xl mx-auto"
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left half: headline + subheadline + badges */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            SaaS MVP Maker — I Build Production-Ready Startups in Days
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-xl">
            I help founders turn ideas into scalable SaaS products using Next.js,
            NestJS, AI-accelerated workflows, and secure cloud architecture.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map(({ emoji, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                <span>{emoji}</span>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right half: form */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-slate-400 mb-4">
            What do you want to build? Describe your idea and we’ll get you on the board.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <Input
              type="text"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="e.g. A simple CRM for freelancers, AI meeting notes..."
              className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus-visible:ring-portfolio-accent"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-portfolio-accent hover:bg-portfolio-accent-light text-white border-0 w-full sm:w-auto"
            >
              Get on the board
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
