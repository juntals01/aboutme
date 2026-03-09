import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build MVP — Request a SaaS Idea',
  description:
    'Submit your SaaS idea and get it built in days. Vote on what to build next. Powered by Norberto Libago.',
  alternates: { canonical: '/build-mvp' },
  openGraph: {
    title: 'Build MVP — Request a SaaS Idea | Norberto Libago',
    description:
      'Submit your SaaS idea and get it built in days. Vote on what to build next.',
  },
};

export default function BuildMvpLayout({ children }: { children: React.ReactNode }) {
  return children;
}
