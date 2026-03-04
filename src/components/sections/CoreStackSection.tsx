'use client';

const columns = [
  {
    title: 'Frontend',
    items: [
      'Next.js (App Router)',
      'TypeScript',
      'TailwindCSS',
      'Shadcn UI',
    ],
  },
  {
    title: 'Backend',
    items: [
      'NestJS',
      'TypeORM',
      'PostgreSQL / MySQL',
      'REST & GraphQL',
    ],
  },
  {
    title: 'DevOps',
    items: ['AWS', 'Docker', 'CI/CD'],
  },
];

export default function CoreStackSection() {
  return (
    <section
      id="stack"
      className="py-20 md:py-28 px-4 md:px-8 bg-white/[0.02] border-y border-white/5"
    >
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Core Stack
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {columns.map(({ title, items }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-portfolio-accent-light mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-slate-400 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
