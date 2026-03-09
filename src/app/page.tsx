'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Zap,
  Shield,
  Code2,
  Layers,
  CheckCircle2,
  ArrowRight,
  Mail,
  Calendar,
  Star,
} from 'lucide-react';
import { CardShell } from '@/components/ui/card-shell';

/* ──────────────────────────── animation helper ──────────────────────────── */
function Reveal({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.35 }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────── data ──────────────────────────────── */
const techPills = [
  'Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Docker',
  'AWS', 'Tailwind', 'shadcn/ui', 'OpenAI', 'Claude', 'Cursor',
];

const deliveryBullets = [
  'Simple MVP: 3–7 days',
  'Complex MVP: 1–3 weeks',
  'Auth + Dashboard + Payments',
  'Clean scalable foundation',
];

const securityBullets = [
  'Validation (Zod / DTOs)',
  'RBAC',
  'Rate limiting',
  'Secure queues + email jobs',
  'Audit-friendly architecture',
];

const projects = [
  { name: 'ExpirationReminderAI', desc: 'AI-powered contract & deadline tracking SaaS.', tags: ['Next.js', 'OpenAI', 'PostgreSQL'] },
  { name: 'PriceAlertly', desc: 'Competitor price monitoring SaaS.', tags: ['Next.js', 'NestJS', 'Redis'] },
  { name: 'CaseDigestMaker', desc: 'Legal AI research platform.', tags: ['Next.js', 'Claude API', 'TypeORM'] },
  { name: 'Klicky MVP', desc: 'Multi-tenant SaaS built with NestJS + Next.js.', tags: ['Next.js', 'NestJS', 'Multi-tenant'] },
];

const services = [
  { icon: Rocket, title: 'SaaS MVP Build', desc: 'Full-stack MVP: auth, dashboard, payments, deployment. Ship in days, not months.' },
  { icon: Zap, title: 'AI Integrations', desc: 'OpenAI, Claude, RAG pipelines, structured extraction. Production-grade AI features.' },
  { icon: Shield, title: 'Secure Architecture', desc: 'HIPAA-aligned systems with RBAC, validation, audit trails, and encrypted workflows.' },
];

const processSteps = [
  'Goals & Scope',
  'Architecture',
  'Rapid Build',
  'QA + Hardening',
  'Launch + Iterate',
];

const outcomes = [
  { quote: 'Shipped MVP in 5 days — ready for beta users.', label: 'Sample outcome' },
  { quote: 'Reduced manual work by 80% with AI automation.', label: 'Sample outcome' },
];

/* ──────────────────────────────── page ──────────────────────────────── */
export default function HomePage() {
  const router = useRouter();
  const [idea, setIdea] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = idea.trim();
    router.push(v ? `/build-mvp?idea=${encodeURIComponent(v)}` : '/build-mvp');
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto w-full max-w-[var(--container)] px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--gap)]">

          {/* ═══ HERO BANNER — full width ═══ */}
          <Reveal className="col-span-1 md:col-span-12">
            <div className="relative overflow-hidden rounded-[var(--radiusCard)] border border-[var(--border)]">
              {/* glow accents */}
              <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-[var(--primary)] opacity-[0.08] blur-[100px]" />
              <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[var(--primarySoft)] opacity-[0.06] blur-[80px]" />

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* ── LEFT: copy + CTAs ── */}
                <div className="flex flex-col justify-center gap-6 p-5 sm:p-8 lg:p-12 bg-[var(--card)]">
                  <span className="inline-flex w-fit items-center gap-2 rounded-[var(--radiusBadge)] border border-[var(--success)]/30 bg-[var(--success)]/10 px-3 py-1 text-xs font-medium text-[var(--success)]">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--success)] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
                    </span>
                    Available for MVP Builds
                  </span>

                  <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] text-[var(--text)]">
                      I build SaaS MVPs
                      <br />
                      <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primarySoft)] bg-clip-text text-transparent">
                        in days, not months.
                      </span>
                    </h1>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--textSecondary)] max-w-md">
                      Full-stack products with auth, dashboards, payments and AI — using
                      Next.js, NestJS, and HIPAA-ready cloud architecture.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/build-mvp"
                      className="inline-flex items-center gap-2 rounded-[var(--radiusButton)] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.45)] transition hover:shadow-[0_0_32px_rgba(139,92,246,0.6)] hover:-translate-y-0.5"
                      style={{ background: 'linear-gradient(135deg, var(--primary), var(--primarySoft))' }}
                    >
                      <Rocket size={16} /> Start My MVP
                    </Link>
                    <Link
                      href="#products"
                      className="inline-flex items-center gap-2 rounded-[var(--radiusButton)] border border-[var(--border)] bg-[var(--bg)] px-6 py-3 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--border)]"
                    >
                      View Work <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {['3–7 day MVP', 'AI-assisted', 'HIPAA-ready', 'Cursor-first'].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-[var(--radiusBadge)] border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs text-[var(--textMuted)]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── RIGHT: form + metrics ── */}
                <div className="flex flex-col gap-6 p-5 sm:p-8 lg:p-12 bg-gradient-to-br from-[var(--card)] to-[var(--bg)] border-t lg:border-t-0 lg:border-l border-[var(--border)]">
                  {/* idea form — ChatGPT-style */}
                  <div className="flex-1 flex flex-col">
                    <p className="text-lg font-semibold text-[var(--text)] mb-1">
                      What will you build?
                    </p>
                    <p className="text-sm text-[var(--textMuted)] mb-4">
                      Describe your idea — I&apos;ll reply with a plan.
                    </p>
                    <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                      <div
                        className="group relative flex-1 rounded-2xl bg-[var(--bg)] ring-1 ring-[var(--border)] focus-within:ring-2 focus-within:ring-[var(--primary)]/50 transition-all duration-200"
                        style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)' }}
                      >
                        <textarea
                          value={idea}
                          onChange={(e) => setIdea(e.target.value)}
                          placeholder="A CRM for freelancers with invoicing, Stripe billing, and a client portal..."
                          rows={4}
                          className="w-full flex-1 resize-none rounded-2xl bg-transparent px-5 pt-5 pb-16 text-[0.95rem] leading-relaxed text-[var(--text)] placeholder:text-[var(--textMuted)]/60 outline-none"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleSubmit(e);
                            }
                          }}
                        />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                          <span className="text-[0.7rem] text-[var(--textMuted)]/50">
                            Press Enter to submit
                          </span>
                          <button
                            type="submit"
                            className="flex items-center gap-1.5 rounded-xl px-5 py-2 text-sm font-semibold text-white transition-all hover:scale-[1.03] active:scale-[0.97]"
                            style={{
                              background: 'linear-gradient(135deg, var(--primary), var(--primarySoft))',
                              boxShadow: '0 0 20px rgba(139,92,246,0.35)',
                            }}
                          >
                            <ArrowRight size={15} /> Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* metric tiles */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { number: '20+', label: 'Projects' },
                      { number: '8+', label: 'Years' },
                      { number: '5', label: 'Day MVP' },
                    ].map(({ number, label }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center justify-center rounded-[var(--radiusCard)] border border-[var(--border)] bg-[var(--card)] py-5 text-center transition hover:-translate-y-0.5"
                      >
                        <span className="text-2xl font-bold text-[var(--primary)]">{number}</span>
                        <span className="text-[0.7rem] text-[var(--textMuted)] mt-0.5 uppercase tracking-wider">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* trust line */}
                  <div className="flex items-center gap-2 text-xs text-[var(--textMuted)]">
                    <Shield size={13} className="text-[var(--success)]" />
                    Secure, production-grade code. No templates.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ═══ 5.3 TECH STACK ═══ */}
          <Reveal className="col-span-1 md:col-span-6 lg:col-span-4">
            <CardShell className="h-full">
              <div className="flex items-center gap-2 mb-4">
                <Code2 size={18} className="text-[var(--primary)]" />
                <h2 className="text-[1.125rem] font-semibold text-[var(--text)]">Tech Arsenal</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {techPills.map((t) => (
                  <span
                    key={t}
                    className="rounded-[var(--radiusBadge)] bg-[var(--border)] px-3 py-1 text-xs text-[var(--textSecondary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardShell>
          </Reveal>

          {/* ═══ 5.4 MVP DELIVERY ═══ */}
          <Reveal className="col-span-1 md:col-span-6 lg:col-span-4">
            <CardShell className="h-full">
              <div className="flex items-center gap-2 mb-4">
                <Rocket size={18} className="text-[var(--primary)]" />
                <h2 className="text-[1.125rem] font-semibold text-[var(--text)]">Fast Delivery</h2>
              </div>
              <ul className="space-y-2">
                {deliveryBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[var(--textSecondary)]">
                    <CheckCircle2 size={14} className="text-[var(--success)] mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </CardShell>
          </Reveal>

          {/* ═══ 5.5 HIPAA / SECURITY ═══ */}
          <Reveal className="col-span-1 md:col-span-6 lg:col-span-4">
            <CardShell className="h-full">
              <div className="flex items-center gap-2 mb-4">
                <Shield size={18} className="text-[var(--primary)]" />
                <h2 className="text-[1.125rem] font-semibold text-[var(--text)]">HIPAA-Ready Security</h2>
              </div>
              <ul className="space-y-2">
                {securityBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[var(--textSecondary)]">
                    <CheckCircle2 size={14} className="text-[var(--success)] mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </CardShell>
          </Reveal>

          {/* ═══ 5.6 PROJECTS ═══ */}
          <Reveal className="col-span-1 md:col-span-12" id="products">
            <CardShell>
              <div className="flex items-center gap-2 mb-6">
                <Layers size={18} className="text-[var(--primary)]" />
                <h2 className="text-[1.125rem] font-semibold text-[var(--text)]">Products & MVPs</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--gap)]">
                {projects.map(({ name, desc, tags }) => (
                  <div
                    key={name}
                    className="rounded-[var(--radiusCard)] border border-[var(--border)] bg-[var(--bg)] p-4 transition hover:-translate-y-0.5"
                  >
                    <h3 className="font-semibold text-[var(--text)] mb-1">{name}</h3>
                    <p className="text-xs text-[var(--textMuted)] mb-3">{desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-[var(--radiusBadge)] bg-[var(--border)] px-2 py-0.5 text-[0.65rem] text-[var(--textMuted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardShell>
          </Reveal>

          {/* ═══ 5.7 SERVICES ═══ */}
          {services.map(({ icon: Icon, title, desc }) => (
            <Reveal key={title} className="col-span-1 md:col-span-4">
              <CardShell className="h-full">
                <Icon size={24} className="text-[var(--primary)] mb-3" />
                <h2 className="text-[1.125rem] font-semibold text-[var(--text)] mb-2">{title}</h2>
                <p className="text-sm text-[var(--textSecondary)]">{desc}</p>
              </CardShell>
            </Reveal>
          ))}

          {/* ═══ 5.8 PROCESS ═══ */}
          <Reveal className="col-span-1 md:col-span-6">
            <CardShell className="h-full">
              <h2 className="text-[1.125rem] font-semibold text-[var(--text)] mb-4">Workflow Highlights</h2>
              <div className="flex flex-col gap-3">
                {processSteps.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)]/20 text-xs font-bold text-[var(--primary)]">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[var(--textSecondary)]">{step}</span>
                  </div>
                ))}
              </div>
            </CardShell>
          </Reveal>

          {/* ═══ 5.9 OUTCOMES ═══ */}
          <Reveal className="col-span-1 md:col-span-6">
            <CardShell className="h-full">
              <h2 className="text-[1.125rem] font-semibold text-[var(--text)] mb-4">Case Outcomes</h2>
              <div className="flex flex-col gap-4">
                {outcomes.map(({ quote, label }) => (
                  <div key={quote} className="rounded-[var(--radiusCard)] border border-[var(--border)] bg-[var(--bg)] p-4">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={12} className="fill-[var(--warning)] text-[var(--warning)]" />
                      ))}
                    </div>
                    <p className="text-sm text-[var(--textSecondary)] italic">&ldquo;{quote}&rdquo;</p>
                    <span className="text-xs text-[var(--textMuted)] mt-2 block">{label}</span>
                  </div>
                ))}
              </div>
            </CardShell>
          </Reveal>

          {/* ═══ 5.10 FINAL CTA ═══ */}
          <Reveal className="col-span-1 md:col-span-12">
            <CardShell className="text-center py-14">
              <h2 className="text-3xl font-bold text-[var(--text)] mb-3">
                Let&apos;s Build Your MVP
              </h2>
              <p className="text-[var(--textSecondary)] max-w-lg mx-auto mb-8">
                Tell me what you&apos;re building. I&apos;ll respond with a plan + timeline.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:norbertoqjr@gmail.com"
                  className="inline-flex items-center gap-2 rounded-[var(--radiusButton)] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--primarySoft))' }}
                >
                  <Mail size={16} /> Email Me
                </a>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-[var(--radiusButton)] border border-[var(--border)] bg-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text)] hover:bg-[var(--border)]/80 transition"
                >
                  <Calendar size={16} /> Schedule a Call
                </Link>
              </div>
            </CardShell>
          </Reveal>

        </div>
      </div>
    </div>
  );
}
