"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { _3MTTVideoUrl, galleryData } from "@/data/gallery";
import { FilterButton } from "@/components/shared/filter-button";
import { LightboxGallery } from "@/components/shared/lightbox-gallery";


export default function ImpactPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGallery = galleryData.filter(item =>
    activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="flex flex-col w-full min-h-screen pt-20 overflow-hidden">
      {/* Hero */}
      <section className="bg-bg-dark py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill=\'none\' stroke=\'%23ffffff\' stroke-opacity=\'0.2\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '60px 60px' }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <SectionHeading
            centered
            inverted
            title="Impact & Stories"
            description="Our verified outcomes and the people behind the numbers. We measure success by the lives transformed and the enterprises we help scale."
          />
        </div>
      </section>

      {/* Verified Impact Dashboard */}
      <section className="py-16 bg-accent-blue text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-6">
            <FadeIn delay={0.1}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">1.2M+</div>
              <div className="text-white/80 font-medium uppercase tracking-wide text-xs md:text-sm">People Reached</div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">5,000+</div>
              <div className="text-white/80 font-medium uppercase tracking-wide text-xs md:text-sm">Entrepreneurs Supported</div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">120k+</div>
              <div className="text-white/80 font-medium uppercase tracking-wide text-xs md:text-sm">Learners Trained</div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">36</div>
              <div className="text-white/80 font-medium uppercase tracking-wide text-xs md:text-sm">States Reached</div>
            </FadeIn>
          </div>
          <div className="text-center mt-6 text-white/60 text-xs uppercase tracking-wider">
            Verified data as of Q3 2026
          </div>
        </div>
      </section>

      {/* People Behind the Numbers */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="People Behind the Numbers"
            description="Real stories from our programmes and community."
            className="mb-12"
          />
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm w-full aspect-video relative">
                <iframe
                  src={_3MTTVideoUrl}
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Paragon in Action - Gallery with Filters */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            centered
            title="Paragon in Action"
            description="A glimpse into our training, community activities, and innovation challenges."
            className="mb-10"
          />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Training", "Community", "Innovation", "Programmes", "Events", "Partnerships"].map((filter) => (
              <FilterButton
                key={filter}
                label={filter}
                isActive={activeCategory === filter}
                onClick={() => setActiveCategory(filter)}
              />
            ))}
          </div>

          <LightboxGallery 
            items={filteredGallery
              .filter(item => item.type !== 'video') // Filter out video iframes for the standard image lightbox
              .map(item => ({
                id: item.id,
                url: item.url,
                alt: item.title || item.category,
                className: item.className
              }))}
            gridClassName="grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px] grid-flow-dense"
          />

          {/* <div className="mt-12 text-center">
            <Button variant="outline" className="rounded-full px-8 py-6 text-accent-blue border-accent-blue/30 hover:bg-blue-50 font-semibold group">
              Load More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div> */}
        </div>
      </section>
    </div>
  );
}
