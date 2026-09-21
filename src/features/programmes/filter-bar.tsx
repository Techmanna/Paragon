"use client";

import { cn } from "@/lib/utils";

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
  className?: string;
}

export function FilterBar({ categories, activeCategory, onSelect, className }: FilterBarProps) {
  return (
    <div 
      className={cn("flex overflow-x-auto pb-4 gap-2 no-scrollbar", className)}
      role="tablist"
      aria-label="Filter by category"
    >
      {categories.map(cat => {
        const isActive = activeCategory === cat;
        return (
          <button 
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors min-h-[44px]",
              isActive 
                ? "bg-accent-blue text-white" 
                : "bg-white text-muted-foreground border border-border hover:border-accent-blue"
            )}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
