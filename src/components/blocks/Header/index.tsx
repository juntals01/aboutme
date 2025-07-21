'use client';
import { useAppContext } from '@/components/utils/context';
import React from 'react';

const PageHeader = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { theme } = useAppContext();
  return (
    <div
      className={`flex justify-between text-4xl font-semibold ${theme.color.text} border-b border-dashed border-gray-700 pb-6 border-opacity-90 px-4 md:px-8`}
    >
      {children}
    </div>
  );
};

export default PageHeader;
