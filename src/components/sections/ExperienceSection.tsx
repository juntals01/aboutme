'use client';

const experiences = [
  {
    company: 'Freelance',
    period: '2024–Present',
    role: 'SaaS MVP Maker',
    highlights: [],
  },
  {
    company: 'Arcanys',
    period: null,
    role: null,
    highlights: [
      'Steam-like platform',
      'NestJS + PostgreSQL',
      'SSE notifications',
      'RBAC',
      'SSR with Next.js',
    ],
  },
  {
    company: 'Currinda',
    period: null,
    role: null,
    highlights: [
      'Multi-tenant event management SaaS',
      'AWS CI/CD',
      'Payment ledger',
      'Subdomain architecture',
      'Email automation',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-4 md:px-8 container max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map(({ company, period, role, highlights }) => (
          <div
            key={company}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-white">{company}</h3>
              {period && (
                <span className="text-sm text-slate-500">{period}</span>
              )}
            </div>
            {role && (
              <p className="mt-1 text-portfolio-accent-light font-medium">
                {role}
              </p>
            )}
            {highlights.length > 0 && (
              <ul className="mt-4 space-y-1">
                {highlights.map((h) => (
                  <li key={h} className="text-slate-400 text-sm flex gap-2">
                    <span className="text-portfolio-accent shrink-0">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
