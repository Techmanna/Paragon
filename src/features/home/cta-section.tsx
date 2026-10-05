import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";

export function CTASection() {
  return (
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
  );
}
