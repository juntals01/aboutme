'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const badges = [
  { emoji: '🚀', label: 'MVP in 3–7 Days' },
  { emoji: '🤖', label: 'AI-Accelerated Development' },
  { emoji: '🏥', label: 'HIPAA-Ready Systems' },
  { emoji: '☁️', label: 'AWS & Docker Deployments' },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative py-24 md:py-32 px-4 md:px-8 container max-w-6xl mx-auto"
    >
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          SaaS MVP Maker — I Build Production-Ready Startups in Days
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl">
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
        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="bg-portfolio-accent hover:bg-portfolio-accent-light text-white border-0"
          >
            <Link href="#contact">Build My MVP</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-slate-500 text-slate-200 hover:bg-slate-800"
          >
            <Link href="#products">View My Work</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
