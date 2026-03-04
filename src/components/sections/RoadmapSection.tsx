'use client';

import Link from 'next/link';

const MOCK_ROADMAP = [
  { id: '1', title: 'Simple CRM for Freelancers', status: 'In Progress' },
  { id: '2', title: 'Automated Invoice Generator', status: 'In Progress' },
  { id: '3', title: 'Booking System for Coaches', status: 'Done' },
  { id: '4', title: 'Expense Tracker with Receipt OCR', status: 'Done' },
  { id: '5', title: 'Multi-tenant Dashboard Template', status: 'Done' },
];

const inProgressCount = MOCK_ROADMAP.filter((r) => r.status === 'In Progress').length;
const doneCount = MOCK_ROADMAP.filter((r) => r.status === 'Done').length;
const total = inProgressCount + doneCount;
const inProgressPct = total ? (inProgressCount / total) * 100 : 0;
const donePct = total ? (doneCount / total) * 100 : 0;

export default function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="py-20 md:py-28 px-4 md:px-8 bg-white/[0.02] border-y border-white/5"
    >
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Roadmap</h2>
            <p className="mt-1 text-slate-400">In progress and shipped MVPs.</p>
          </div>
          <Link
            href="/build-mvp"
            className="text-portfolio-accent-light hover:text-white font-medium text-sm shrink-0"
          >
            View full board →
          </Link>
        </div>

        {/* Graph: In Progress vs Done */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 mb-8">
          <h3 className="text-sm font-medium text-slate-400 mb-4">Status overview</h3>
          <div className="flex gap-2 h-10 rounded-lg overflow-hidden bg-slate-800/50">
            <div
              className="bg-amber-500/80 transition-all"
              style={{ width: `${inProgressPct}%` }}
              title={`In Progress: ${inProgressCount}`}
            />
            <div
              className="bg-emerald-500/80 transition-all"
              style={{ width: `${donePct}%` }}
              title={`Done: ${doneCount}`}
            />
          </div>
          <div className="flex gap-6 mt-3 text-sm">
            <span className="flex items-center gap-2 text-slate-400">
              <span className="h-3 w-3 rounded bg-amber-500/80" />
              In Progress ({inProgressCount})
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <span className="h-3 w-3 rounded bg-emerald-500/80" />
              Done ({doneCount})
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-sm">
                  <th className="px-4 py-3 font-medium">Request</th>
                  <th className="px-4 py-3 font-medium w-28">Status</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_ROADMAP.map((row) => (
                  <tr key={row.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="px-4 py-3 text-white font-medium">{row.title}</td>
                    <td className="px-4 py-3">
                      <span
                        className={
                          row.status === 'In Progress'
                            ? 'inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium bg-amber-500/80 text-white'
                            : 'inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium bg-emerald-500/80 text-white'
                        }
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
