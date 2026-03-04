'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const STATUSES = ['Planned', 'In Progress', 'Done'] as const;
type Status = (typeof STATUSES)[number];

const MOCK_REQUESTS: {
  id: string;
  title: string;
  description: string;
  status: Status;
  votes: number;
  comments: number;
  budget: string;
}[] = [
  { id: '1', title: 'AI-Powered Meeting Summarizer', description: 'Auto-summarize meetings and export to Notion.', status: 'Planned', votes: 12, comments: 4, budget: '$999' },
  { id: '2', title: 'Simple CRM for Freelancers', description: 'Lightweight CRM with pipeline and invoicing.', status: 'In Progress', votes: 8, comments: 6, budget: '$499' },
  { id: '3', title: 'Automated Invoice Generator', description: 'Generate PDF invoices from time entries.', status: 'In Progress', votes: 5, comments: 2, budget: '$499' },
  { id: '4', title: 'Booking System for Coaches', description: 'Calendar, payments, and reminders.', status: 'Done', votes: 15, comments: 10, budget: '$999' },
  { id: '5', title: 'Expense Tracker with Receipt OCR', description: 'Snap receipts and categorize expenses.', status: 'Done', votes: 9, comments: 3, budget: '$999' },
  { id: '6', title: 'Multi-tenant Dashboard Template', description: 'Next.js + NestJS starter with RBAC.', status: 'Planned', votes: 6, comments: 1, budget: 'Custom' },
];

const statusColors: Record<Status, string> = {
  Planned: 'bg-slate-500/80 text-slate-200',
  'In Progress': 'bg-amber-500/80 text-white',
  Done: 'bg-emerald-500/80 text-white',
};

export default function BuildMVPPage() {
  const searchParams = useSearchParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');

  useEffect(() => {
    const idea = searchParams.get('idea');
    if (idea) setTitle(idea);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-portfolio-bg text-slate-200">
      <div className="container max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Build MVP</h1>
            <p className="mt-1 text-slate-400">Request a SaaS idea. Vote on what to build next.</p>
          </div>
          <Button asChild size="sm" className="bg-portfolio-accent hover:bg-portfolio-accent-light text-white shrink-0 w-fit">
            <Link href="/">← Back home</Link>
          </Button>
        </div>

        {/* Submit idea + budget */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 mb-10">
          <h2 className="text-lg font-semibold text-white mb-3">Submit your idea</h2>
          <p className="text-slate-400 text-sm mb-4">Describe the SaaS you’d like built and your budget. I’ll review and approve requests.</p>
          <Input
            placeholder="Title (e.g. AI Meeting Summarizer)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-3 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
          />
          <Textarea
            placeholder="Describe your idea..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="mb-3 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 resize-none"
          />
          <Input
            placeholder="Budget / price (e.g. $499, $999, or Custom)"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="mb-4 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 max-w-xs"
          />
          <Button className="bg-portfolio-accent hover:bg-portfolio-accent-light text-white">Submit request</Button>
        </div>

        {/* Board: table with budget */}
        <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Request board</h2>
            <div className="flex gap-2 text-xs text-slate-500">
              <span>Planned · In Progress · Done</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-sm">
                  <th className="px-4 py-3 font-medium">Request</th>
                  <th className="px-4 py-3 font-medium w-24">Budget</th>
                  <th className="px-4 py-3 font-medium w-24 text-center">Votes</th>
                  <th className="px-4 py-3 font-medium w-24 text-center">Comments</th>
                  <th className="px-4 py-3 font-medium w-32">Status</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_REQUESTS.map((req) => (
                  <tr key={req.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-medium text-white">{req.title}</div>
                      <div className="text-sm text-slate-500 truncate max-w-md">{req.description}</div>
                    </td>
                    <td className="px-4 py-3 text-slate-400">{req.budget}</td>
                    <td className="px-4 py-3 text-center text-slate-400">{req.votes}</td>
                    <td className="px-4 py-3 text-center text-slate-400">{req.comments}</td>
                    <td className="px-4 py-3">
                      <span className={['inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium', statusColors[req.status]].join(' ')}>
                        {req.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
