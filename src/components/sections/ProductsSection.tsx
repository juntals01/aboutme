'use client';

const products = [
  {
    name: 'ExpirationReminderAI',
    description: 'AI-powered contract & deadline tracking SaaS.',
    tech: 'Next.js, OpenAI, PostgreSQL',
  },
  {
    name: 'PriceAlertly',
    description: 'Competitor price monitoring SaaS.',
    tech: 'Next.js, NestJS, Redis',
  },
  {
    name: 'CaseDigestMaker',
    description: 'Legal AI research platform.',
    tech: 'Next.js, Claude API, TypeORM',
  },
  {
    name: 'Klicky MVP',
    description: 'Multi-tenant SaaS built with NestJS + Next.js.',
    tech: 'Next.js, NestJS, PostgreSQL, multi-tenant',
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="py-20 md:py-28 px-4 md:px-8 container max-w-6xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        SaaS Products Built
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {products.map(({ name, description, tech }) => (
          <div
            key={name}
            className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:border-white/20"
          >
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="mt-2 text-slate-400">{description}</p>
            <p className="mt-3 text-sm text-portfolio-accent-light">{tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
