import { SectionHeading } from "@/components/shared/section-heading";
import { LifecycleStep } from "@/components/shared/lifecycle-step";

export function LifecycleSection() {
  return (
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
  );
}
