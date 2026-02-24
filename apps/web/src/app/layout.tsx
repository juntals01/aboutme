import type { Metadata } from 'next';
import './globals.css';
import MainLayout from '@/components/layout/MainLayout';
import { AppWrapper } from '@/components/utils/context';

export const metadata: Metadata = {
  title: 'Resume of Norberto Q. Libago Jr',
  description: 'Professional skills and Work Experiences of Jun',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-gray text-white'>
        <AppWrapper>
          <MainLayout>{children}</MainLayout>
          {/* </Suspense> */}
        </AppWrapper>
      </body>
    </html>
  );
}
