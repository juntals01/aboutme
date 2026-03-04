'use client';

const bullets = [
  'Simple SaaS MVP: 3–7 days',
  'Complex SaaS: 1–3 weeks',
  'Auth + Dashboard + Payments included',
  'Multi-tenant architecture ready',
  'Clean scalable codebase',
];

export default function MVPSpeedSection() {
  return (
    <section
      id="speed"
      className="py-20 md:py-28 px-4 md:px-8 bg-white/[0.02] border-y border-white/5"
    >
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ship Fast. Validate Faster.
        </h2>
        <ul className="mt-8 space-y-3">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-slate-300 text-lg"
            >
              <span className="h-2 w-2 rounded-full bg-portfolio-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-slate-400 leading-relaxed">
          Uses AI-assisted development (Cursor, Claude, ChatGPT) to accelerate
          delivery without sacrificing architecture quality.
        </p>
      </div>
    </section>
  );
}
