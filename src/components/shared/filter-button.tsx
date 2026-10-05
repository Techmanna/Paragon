import React from 'react';

interface FilterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isActive: boolean;
}

export function FilterButton({ label, isActive, className, ...props }: FilterButtonProps) {
  return (
    <button
      disabled={isActive}
      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 ${
        isActive
          ? "bg-accent-blue text-white cursor-not-allowed opacity-90 pointer-events-none"
          : "bg-white text-muted-foreground border border-border hover:border-accent-blue"
      } ${className || ''}`}
      {...props}
    >
      {label}
    </button>
  );
}
