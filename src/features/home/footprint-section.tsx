import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

export function FootprintSection() {
  return (
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
  );
}
