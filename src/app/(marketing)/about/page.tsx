

import { Button } from "@/components/ui/button";
import { Briefcase, Target, Lightbulb, Users } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { LifecycleStep } from "@/components/shared/lifecycle-step";
import { PillarCard } from "@/components/shared/pillar-card";
import { FadeIn } from "@/components/shared/fade-in";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Paragon Nigeria — Who We Are & How We Work",
  description: "Learn how Paragon Nigeria's Diagnose-to-Scale methodology connects enterprise development, innovation and ecosystem building across Nigeria.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-bg-dark py-20 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn className="mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">
              About Paragon Nigeria
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/80">
              Advancing African Prosperity through Enterprise and Innovation.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* 1. Who We Are + Our Role */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <SectionHeading 
            title="Who We Are"
            description="Paragon Nigeria is an Enterprise Support Organisation (ESO) and Innovation Support Organisation (ISO). We connect governments, development finance institutions (DFIs), corporates, startups, MSMEs, innovators, and communities."
          />
          <SectionHeading 
            title="Our Role"
            description="We turn transformation priorities into delivered programmes. Good policy needs field execution; good ideas need a structured pathway to market, funding, and mentorship. We are the delivery and coordination layer that connects intent to outcomes."
          />
        </div>
      </section>

      {/* 2. Value Proposition Intro */}
      <section className="py-20 bg-surface text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col items-center">
          <SectionHeading 
            centered
            title="Our Value Proposition"
            description="We provide a unique combination of strategic insight, delivery capability, innovation support, and ecosystem leadership to ensure the success of our partners and programmes."
            className="mb-0 mx-auto"
          />
        </div>
      </section>

      {/* 3. Lifecycle Methodology */}
      <section className="py-20 bg-bg-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading 
            centered
            inverted
            title="Lifecycle Methodology"
            className="mb-16 mx-auto"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
            {[
              { step: "Diagnose", desc: "Understanding the core challenges and opportunities within the ecosystem before taking action." },
              { step: "Design", desc: "Crafting evidence-based, tailored programmes that align with strategic objectives." },
              { step: "Build", desc: "Developing the necessary infrastructure, curriculum, and partnerships." },
              { step: "Connect", desc: "Linking participants with mentors, markets, and funding." },
              { step: "Measure", desc: "Tracking outcomes rigorously to ensure impact is real and quantifiable." },
              { step: "Scale", desc: "Expanding successful models across regions to maximize national impact." },
            ].map((item, i) => (
              <LifecycleStep 
                key={i}
                index={i}
                step={item.step}
                description={item.desc}
                className="overflow-hidden" // Prevents lines from crossing grid boundaries
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Paragon Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading 
            centered
            title="Why Paragon"
            className="mb-16 mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Strategic Insight", icon: Target, desc: "Deep understanding of policy and market dynamics." },
              { title: "ESO Delivery Capability", icon: Briefcase, desc: "Proven track record of executing complex programmes." },
              { title: "Innovation Capability", icon: Lightbulb, desc: "Fostering cutting-edge solutions to systemic challenges." },
              { title: "Ecosystem Leadership", icon: Users, desc: "A robust network of partners across all sectors." },
            ].map((item, i) => (
              <PillarCard 
                key={i}
                title={item.title}
                description={item.desc}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Leadership Shell */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionHeading 
            centered
            title="Our Leadership"
            className="mb-12 mx-auto"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-32 h-32 bg-muted rounded-full mb-4 border border-border group-hover:border-accent-blue transition-colors duration-300" />
                <h3 className="font-bold text-lg text-foreground">[Name Placeholder]</h3>
                <p className="text-accent-blue font-medium text-sm mb-2">[Title Placeholder]</p>
                <p className="text-sm text-muted-foreground">[Bio Placeholder]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Closing CTA */}
      <section className="py-24 bg-bg-dark text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill=\'none\' stroke=\'%23ffffff\' stroke-opacity=\'0.2\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '60px 60px' }} />
        <div className="max-w-2xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <SectionHeading 
            centered
            inverted
            title="Partner With Us"
            className="mb-8 mx-auto"
          />
          <Button className="px-8 py-6 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white border-0 font-semibold text-lg transition-transform duration-150 ease-in-out hover:scale-105 motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-blue">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
