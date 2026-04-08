import { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export const GradientText = ({ children, className }: GradientTextProps) => {
  return (
    <span className={cn("text-gradient", className)}>
      {children}
    </span>
  );
};
