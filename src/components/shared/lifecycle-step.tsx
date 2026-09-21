"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "./fade-in";

interface LifecycleStepProps {
  step: string;
  description: string;
  index: number;
  className?: string;
}

export function LifecycleStep({ step, description, index, className }: LifecycleStepProps) {
  return (
    <FadeIn delay={index * 0.1} className={cn("flex flex-col relative", className)}>
      <div className="flex items-center mb-4 relative z-10 bg-bg-dark">
        <div className="w-8 h-8 rounded-full bg-accent-blue/20 text-accent-blue font-bold flex items-center justify-center mr-4 shrink-0 border border-accent-blue/30">
          {index + 1}
        </div>
        <h3 className="text-xl font-bold text-accent-blue">{step}</h3>
      </div>
      <p className="text-white/80 md:pl-12 pl-12">{description}</p>
      
      {/* Decorative connecting line (desktop) */}
      <div 
        className="hidden lg:block absolute top-4 left-8 right-[-2rem] h-px bg-white/10 -z-0 origin-left transition-transform duration-500 ease-out" 
        aria-hidden="true" 
      />
      {/* Decorative connecting line (mobile) */}
      <div 
        className="lg:hidden absolute top-8 left-4 bottom-[-2rem] w-px bg-white/10 -z-0 origin-top transition-transform duration-500 ease-out" 
        aria-hidden="true" 
      />
    </FadeIn>
  );
}
