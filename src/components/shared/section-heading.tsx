"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "./fade-in";

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  inverted?: boolean;
}

export function SectionHeading({
  title,
  eyebrow,
  description,
  centered = false,
  className,
  inverted = false
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <FadeIn delay={0.1}>
          <span 
            className={cn(
              "inline-block font-semibold uppercase tracking-wider text-sm mb-3 block",
              inverted ? "text-accent-blue" : "text-accent-blue"
            )}>
            {eyebrow}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.2}>
        <h2 
          className={cn(
            "text-3xl md:text-4xl font-bold mb-6 font-heading",
            inverted ? "text-white" : "text-foreground"
          )}>
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.3}>
          <p 
            className={cn(
              "text-lg leading-relaxed",
              inverted ? "text-white/80" : "text-muted-foreground"
            )}>
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
