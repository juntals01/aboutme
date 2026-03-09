import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/layout/SiteHeader';
import JsonLd from '@/components/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://norbertolibago.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Norberto Libago — SaaS MVP Maker | AI-Accelerated & HIPAA-Ready',
    template: '%s | Norberto Libago',
  },
  description:
    'SaaS MVP developer building secure, AI-powered startups in 3–7 days using Next.js, NestJS, AWS, and scalable cloud architecture.',
  keywords: [
    'SaaS MVP developer',
    'MVP builder',
    'build SaaS fast',
    'AI-accelerated development',
    'HIPAA SaaS',
    'Next.js developer',
    'NestJS developer',
    'freelance full-stack developer',
    'rapid MVP development',
  ],
  authors: [{ name: 'Norberto Libago', url: siteUrl }],
  creator: 'Norberto Libago',
  icons: { icon: '/favicon.ico' },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Norberto Libago — SaaS MVP Maker',
    title: 'Norberto Libago — SaaS MVP Maker | AI-Accelerated & HIPAA-Ready',
    description:
      'SaaS MVP developer building secure, AI-powered startups in 3–7 days using Next.js, NestJS, AWS, and scalable cloud architecture.',
    images: [{ url: '/profile.jpg', width: 400, height: 400, alt: 'Norberto Libago' }],
  },
  twitter: {
    card: 'summary',
    title: 'Norberto Libago — SaaS MVP Maker',
    description:
      'I build secure, AI-powered SaaS MVPs in 3–7 days. Next.js, NestJS, AWS.',
    images: ['/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
        <JsonLd
          data={[
            {
              '@type': 'Person',
              name: 'Norberto Libago',
              url: siteUrl,
              jobTitle: 'SaaS MVP Developer',
              description:
                'Full-stack developer building secure, AI-powered SaaS MVPs in 3–7 days.',
              image: `${siteUrl}/profile.jpg`,
              email: 'norbertoqjr@gmail.com',
              knowsAbout: [
                'SaaS Development',
                'Next.js',
                'NestJS',
                'TypeScript',
                'AI Integration',
                'HIPAA Compliance',
                'AWS',
                'PostgreSQL',
              ],
            },
            {
              '@type': 'WebSite',
              name: 'Norberto Libago — SaaS MVP Maker',
              url: siteUrl,
              description:
                'Portfolio and services of Norberto Libago, a SaaS MVP developer specializing in AI-accelerated, HIPAA-ready full-stack products.',
            },
            {
              '@type': 'ProfessionalService',
              name: 'SaaS MVP Development',
              provider: { '@type': 'Person', name: 'Norberto Libago' },
              description:
                'Rapid SaaS MVP development with auth, dashboards, payments, and AI integrations. Delivered in 3–7 days.',
              areaServed: 'Worldwide',
              serviceType: 'Software Development',
            },
          ]}
        />
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
