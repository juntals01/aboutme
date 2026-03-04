'use client';

const tools = ['Cursor', 'Claude', 'ChatGPT', 'Pencil.dev', 'Antigravity'];

const benefits = [
  'Faster iteration cycles',
  'Rapid architecture prototyping',
  'Automated boilerplate generation',
  'AI integrations (OpenAI / Claude APIs)',
  'RAG pipelines',
  'Structured extraction systems',
];

export default function AIWorkflowSection() {
  return (
    <section
      id="ai-workflow"
      className="py-20 md:py-28 px-4 md:px-8 bg-white/[0.02] border-y border-white/5"
    >
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          AI-Powered Development Workflow
        </h2>
        <p className="mt-4 text-slate-400">Tools used:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md bg-portfolio-accent/20 text-portfolio-accent-light px-3 py-1.5 text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
        <p className="mt-8 text-slate-400 mb-4">Benefits:</p>
        <ul className="space-y-2">
          {benefits.map((item) => (
            <li key={item} className="text-slate-300 flex items-center gap-2">
              <span className="text-portfolio-accent">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
