import { Briefcase, Users, Lightbulb, BarChart3, Settings, Network } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { PillarCard } from "@/components/shared/pillar-card";

export function PillarsSection() {
  return (
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
  );
}
