import type { Metadata } from 'next';
import './globals.css';
import MainLayout from '@/components/layout/MainLayout';
import { AppWrapper } from '@/components/utils/context';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Resume of Norberto Q. Libago Jr',
  description: 'Professional skills and Work Experiences of Jun',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </Head>
      <body className='bg-gray text-white'>
        <AppWrapper>
          <MainLayout>{children}</MainLayout>
          {/* </Suspense> */}
        </AppWrapper>
      </body>
    </html>
  );
}
