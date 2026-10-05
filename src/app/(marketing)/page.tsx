"use client";

import { HeroSection } from "@/features/home/hero-section";
import { RoleSection } from "@/features/home/role-section";
import { PillarsSection } from "@/features/home/pillars-section";
import { LifecycleSection } from "@/features/home/lifecycle-section";
import { ProgrammesSection } from "@/features/home/programmes-section";
import { FootprintSection } from "@/features/home/footprint-section";
import { PartnersSection } from "@/features/home/partners-section";
import { CTASection } from "@/features/home/cta-section";
// import { GalleryTile } from "@/features/gallery/gallery-tile";
// import { SectionHeading } from "@/components/shared/section-heading";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 6.1 Hero */}
      <HeroSection />

      {/* 6.2 Positioning / "Our Role" Statement */}
      <RoleSection />

      {/* 6.3 The Six Pillars (What We Do) */}
      <PillarsSection />

      {/* 6.4 Lifecycle (Diagnose → Scale) */}
      <LifecycleSection />

      {/* 6.5 Featured Programmes */}
      <ProgrammesSection />

      {/* 6.6 National Footprint Teaser */}
      <FootprintSection />

      {/* 6.7 Partner Logo Wall */}
      <PartnersSection />

      {/* 6.8 Paragon in Action */}
      {/* <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <SectionHeading title="Paragon in Action" className="mb-0" />
            <Link href="/impact" className="hidden sm:flex text-accent-blue font-medium items-center hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded pb-1">
              View more <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <GalleryTile alt="Paragon event photo large" className="col-span-2 row-span-2" />
            <GalleryTile alt="Paragon participant photo" className="col-span-1 row-span-1" />
            <GalleryTile alt="Paragon workshop photo" className="col-span-1 row-span-1" />
            <GalleryTile alt="Paragon group photo" className="col-span-2 row-span-1 aspect-[2/1]" />
          </div>

          <Link href="/impact" className="flex sm:hidden mt-6 text-accent-blue font-medium items-center justify-center hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded">
            View more <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section> */}

      {/* 6.9 Closing CTA */}
      <CTASection />
    </div>
  );
}
