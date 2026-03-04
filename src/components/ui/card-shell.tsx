import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function CardShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative rounded-[var(--radiusCard)] border border-[var(--border)] bg-[var(--card)]',
        'shadow-[var(--shadowCard)] p-[var(--cardPadding)]',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:shadow-[var(--glowPrimary)]',
        className
      )}
    >
      {children}
    </div>
  );
}
