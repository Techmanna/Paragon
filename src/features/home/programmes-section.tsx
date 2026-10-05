import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProgrammeCard } from "@/features/programmes/programme-card";

export function ProgrammesSection() {
  return (
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
            { name: "3MTT", tag: "Capacity & Skills", desc: "Developing technical talent across Nigeria.", slug: "3mtt" },
            { name: "3MTT DeepTech", tag: "Innovation Support", desc: "Advanced technical training in emerging technologies.", slug: "3mtt-deeptech" },
            { name: "Airtel + 3MTT", tag: "Enterprise Support", desc: "Empowering digital innovators with connectivity.", slug: "airtel-3mtt" },
            { name: "Gateway", tag: "Innovation Support", desc: "Market pathways for early-stage innovators.", slug: "gateway" }
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
  );
}
