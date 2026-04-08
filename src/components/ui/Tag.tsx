import React from 'react';
import { cn } from '@/src/lib/utils';

interface TagProps {
  children: string;
  className?: string;
  key?: React.Key;
}

export const Tag = ({ children, className }: TagProps) => {
  return (
    <span className={cn(
      "px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-accent/10 text-accent border border-accent/20",
      className
    )}>
      {children}
    </span>
  );
};
