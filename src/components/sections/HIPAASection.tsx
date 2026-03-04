'use client';

const subsections = [
  {
    title: 'Frontend',
    items: [
      'Zod validation',
      'Rate limiting',
      'Secure form handling',
      'Shadcn components',
    ],
  },
  {
    title: 'Backend (NestJS + TypeORM)',
    items: [
      'DTO validation',
      'ValidationPipe',
      'class-validator',
      'API input validation',
      'RBAC',
      'Server-Sent Events (SSE)',
      'Custom database validators',
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      'Dockerized services',
      'AWS deployment',
      'Queue workers',
      'Email jobs',
      'Notification systems',
    ],
  },
];

export default function HIPAASection() {
  return (
    <section
      id="hipaa"
      className="py-20 md:py-28 px-4 md:px-8 container max-w-6xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Secure & HIPAA-Ready Architecture
      </h2>
      <p className="text-slate-400 mb-10 max-w-2xl">
        Built following modern security standards and HIPAA-aligned practices.
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {subsections.map(({ title, items }) => (
          <div
            key={title}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="text-slate-400 text-sm flex gap-2">
                  <span className="text-portfolio-accent shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
