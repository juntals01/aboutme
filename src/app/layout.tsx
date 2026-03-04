import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/layout/SiteHeader';

export const metadata: Metadata = {
  title: 'Norberto Libago — SaaS MVP Maker | AI-Accelerated & HIPAA-Ready',
  description:
    'SaaS MVP developer building secure, AI-powered startups in 3–7 days using Next.js, NestJS, AWS, and scalable cloud architecture.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Norberto Libago — SaaS MVP Maker | AI-Accelerated & HIPAA-Ready',
    description:
      'SaaS MVP developer building secure, AI-powered startups in 3–7 days using Next.js, NestJS, AWS, and scalable cloud architecture.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-portfolio-bg text-slate-200 antialiased">
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
