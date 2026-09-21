"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { FadeIn } from "./fade-in";

interface StatBlockProps {
  value: string;
  label: string;
  className?: string;
  inverted?: boolean;
}

export function StatBlock({ value, label, className, inverted = false }: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);
  
  useEffect(() => {
    if (!isInView) return;
    
    // Check if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const numMatch = value.match(/(\d+)/);
    if (!numMatch || prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }
    
    const target = parseInt(numMatch[1], 10);
    const duration = 1200; // 1.2s
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += Math.ceil(target / steps);
      if (current >= target) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(value.replace(numMatch[1], current.toString()));
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <FadeIn>
        <div 
          className={cn(
            "text-4xl md:text-5xl font-bold mb-2",
            inverted ? "text-white" : "text-foreground"
          )}
        >
          {displayValue}
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div 
          className={cn(
            "font-medium uppercase tracking-wide text-sm",
            inverted ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {label}
        </div>
      </FadeIn>
    </div>
  );
}
