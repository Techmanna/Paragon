"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, Lightbulb, BarChart3, Settings, Network } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { PillarCard } from "@/components/shared/pillar-card";
import { LifecycleStep } from "@/components/shared/lifecycle-step";
import { ProgrammeCard } from "@/features/programmes/programme-card";
import { PartnerLogo } from "@/components/shared/partner-logo";
import { GalleryTile } from "@/features/gallery/gallery-tile";
import { FadeIn } from "@/components/shared/fade-in";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 6.1 Hero */}
      <section className="relative w-full bg-bg-dark py-28 md:py-36 min-h-[85vh] flex items-center overflow-hidden">
        {/* Subtle geometric hex line-pattern background placeholder */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill=\'none\' stroke=\'%23ffffff\' stroke-opacity=\'0.2\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '60px 60px' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (7/12) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <FadeIn delay={0.1}>
                <span className="text-sm font-semibold tracking-wide uppercase text-accent-blue mb-4 block">
                  Enterprise & Innovation Support Organisation
                </span>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] text-white max-w-xl">
                  Building Enterprises. Strengthening Ecosystems. Advancing African Prosperity.
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-lg mt-6 block">
                  PARAGON connects intent to outcomes. We bridge the gap between policy priorities and on-the-ground delivery for startups, MSMEs, and innovators across Africa.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <Button className="px-7 py-6 rounded-full text-base font-semibold bg-accent-blue hover:bg-accent-blue/90 text-white border-0 w-full sm:w-auto transition-all duration-150 ease-in-out hover:scale-[1.02] motion-reduce:transform-none">
                    Partner With Us
                  </Button>
                  <Button variant="outline" className="px-7 py-6 rounded-full text-base font-semibold border-white text-white hover:bg-white/10 hover:text-white bg-transparent w-full sm:w-auto transition-all duration-150 ease-in-out hover:scale-[1.02] motion-reduce:transform-none">
                    Explore Our Work
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Column (5/12) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0">
              <FadeIn delay={0.3} className="w-full max-w-xs lg:max-w-md aspect-square relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-accent-blue opacity-20 blur-3xl rounded-full" />
                {/* Hexagon Frame */}
                <div
                  className="relative w-full aspect-square border-4 border-white overflow-hidden flex items-center justify-center"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <Image
                    src="/paragon-hero-image.jpg"
                    alt="Paragon team at a community training session"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 6.2 Positioning / "Our Role" Statement */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="w-16 h-1 bg-accent-blue mx-auto mb-6" />
          <SectionHeading
            centered
            title="Operating at the intersection of policy and practice."
            description="We are the delivery and coordination layer that connects government intent, DFI funding, and corporate CSR to real outcomes for communities, enterprises, and innovators."
          />
        </div>
      </section>

      {/* 6.3 The Six Pillars (What We Do) */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="What We Do"
            description="Our six service pillars designed to support enterprise growth and ecosystem transformation."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Enterprise Support", icon: Briefcase, desc: "Business advisory, market readiness, and acceleration support for MSMEs." },
              { title: "Capacity & Skills", icon: Users, desc: "Digital skills and training programmes for youth and emerging talent." },
              { title: "Innovation Support", icon: Lightbulb, desc: "Challenges and technical support for startups and innovators." },
              { title: "Research & Data", icon: BarChart3, desc: "Intelligence and insights to drive evidence-based policy making." },
              { title: "Programme Design", icon: Settings, desc: "End-to-end design and implementation of development initiatives." },
              { title: "Ecosystem Hubs", icon: Network, desc: "Development and management of physical and digital innovation hubs." }
            ].map((pillar, i) => (
              <PillarCard
                key={i}
                title={pillar.title}
                description={pillar.desc}
                icon={pillar.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6.4 Lifecycle (Diagnose → Scale) */}
      <section className="py-20 md:py-28 bg-bg-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            centered
            inverted
            title="How Paragon Creates Outcomes"
            description="Our six-stage delivery methodology ensures initiatives move from concept to scalable impact."
            className="mb-16 mx-auto"
          />

          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 relative z-10">
              {["Diagnose", "Design", "Build", "Connect", "Measure", "Scale"].map((step, i) => (
                <LifecycleStep
                  key={step}
                  step={step}
                  description="Phase description goes here detailing the step."
                  index={i}
                  className="flex-1"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 Featured Programmes */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <SectionHeading
              title="Featured Programmes"
              description="Driving impact across Nigeria through strategic initiatives."
              className="mb-0"
            />
            <Link href="/programmes" className="text-accent-blue font-medium flex items-center hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded pb-1">
              View all programmes <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:pb-0 lg:grid lg:grid-cols-3 gap-6 snap-x no-scrollbar">
            {[
              { name: "DBN Acceleration", tag: "Enterprise Support", desc: "Supporting MSME growth and access to finance.", slug: "dbn-acceleration" },
              { name: "Gateway Program", tag: "Innovation Support", desc: "Market pathways for early-stage innovators.", slug: "gateway" },
              { name: "NESI Innovation Challenge", tag: "Capacity & Skills", desc: "Solving energy sector challenges through tech.", slug: "nesi" }
            ].map((prog, i) => (
              <div key={i} className="min-w-[280px] w-full max-w-sm lg:max-w-none snap-start">
                <ProgrammeCard
                  slug={prog.slug}
                  name={prog.name}
                  category={prog.tag}
                  description={prog.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.6 National Footprint Teaser */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-sm aspect-square rounded-2xl flex items-center justify-center">
                <Image src="/paragon-map.png" alt="Paragon Nigeria" width={995} height={941} className="" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                title="Our Footprint"
                className="mb-8"
              />
              <div className="flex flex-col">
                {[
                  { city: "Kaduna", role: "Northern HQ", focus: "Digital Skills & Inclusion" },
                  { city: "Abuja", role: "Policy & Strategy Hub", focus: "Government Relations & Ecosystem Design" },
                  { city: "Port Harcourt", role: "Southern Hub", focus: "Energy Innovation & Enterprise Support" }
                ].map((loc, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-start py-5 border-b border-border last:border-0">
                    <div className="min-w-[120px]">
                      <h4 className="font-semibold text-base text-foreground">{loc.city}</h4>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{loc.role}</p>
                      <p className="text-sm text-muted-foreground mt-1">{loc.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/footprint" className="inline-flex mt-6 text-accent-blue font-medium items-center hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded">
                See our full footprint <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6.7 Partner Logo Wall */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-center text-sm font-semibold tracking-wide uppercase text-muted-foreground mb-10">
            Trusted by & Working Alongside
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8 items-center justify-items-center">
            {["Mastercard", "Intel", "UNDP", "USAID", "Airtel", "NITDA", "AfriLabs", "CcHub", "DBN", "Glo", "FMCDE", "DSN"].map((partner) => (
              <PartnerLogo key={partner} name={partner} className="w-full max-w-[140px]" />
            ))}
          </div>
        </div>
      </section>

      {/* 6.8 Paragon in Action */}
      <section className="py-20 md:py-28 bg-surface">
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
      </section>

      {/* 6.9 Closing CTA */}
      <section className="py-24 bg-bg-dark relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill=\'none\' stroke=\'%23ffffff\' stroke-opacity=\'0.2\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '60px 60px' }} />

        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <SectionHeading
            centered
            inverted
            title="Ready to drive impact?"
            description="Whether you're looking to fund a programme or participate in one, we're here to help."
            className="mx-auto"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button className="px-8 py-6 rounded-full text-base font-semibold bg-accent-blue hover:bg-accent-blue/90 text-white border-0 w-full sm:w-auto transition-all duration-150 ease-in-out hover:scale-[1.02] motion-reduce:transform-none">
              Become a Partner
            </Button>
            <Button variant="outline" className="px-8 py-6 rounded-full text-base font-semibold border-white text-white hover:bg-white/10 hover:text-white bg-transparent w-full sm:w-auto transition-all duration-150 ease-in-out hover:scale-[1.02] motion-reduce:transform-none">
              Explore Programmes
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
