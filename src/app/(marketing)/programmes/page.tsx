"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, SearchX } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";
import { ProgrammeCard } from "@/features/programmes/programme-card";

import { programmes } from "@/data/programmes";
import { pillars } from "@/data/pillars";
import { FilterButton } from "@/components/shared/filter-button";

// Extract categories dynamically from pillars or programmes if needed, 
// but since pillars defines the categories, we can use that.
const CATEGORIES = ["All", ...pillars.map(p => p.name)];

export default function Programmes() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" 
    ? programmes 
    : programmes.filter(prog => {
        const pillar = pillars.find(p => p.slug === prog.pillar);
        return pillar?.name === activeCategory;
      });

  return (
    <div className="flex flex-col w-full min-h-screen pt-20">
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Programmes</h1>
          
          <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar">
            {CATEGORIES.map(cat => (
              <FilterButton
                key={cat}
                label={cat}
                isActive={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((prog, i) => {
                const pillar = pillars.find(p => p.slug === prog.pillar);
                return (
                  <FadeIn key={prog.slug} delay={i * 0.1} className="h-full">
                    <ProgrammeCard
                      slug={prog.slug}
                      name={prog.name}
                      category={pillar?.name || prog.pillar}
                      description={prog.summary}
                      className="h-full"
                    />
                  </FadeIn>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mb-4 text-accent-blue">
                <SearchX className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No programmes found</h3>
              <p className="text-muted-foreground mb-6">There are currently no programmes matching this category.</p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="px-6 py-2 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
