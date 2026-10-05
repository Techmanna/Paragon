import { SectionHeading } from "@/components/shared/section-heading";

export function RoleSection() {
  return (
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
  );
}
