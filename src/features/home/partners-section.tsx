import { PartnerLogo } from "@/components/shared/partner-logo";
import { partners } from "@/data/partners";

export function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h3 className="text-center text-sm font-semibold tracking-wide uppercase text-muted-foreground mb-10">
          Trusted by & Working Alongside
        </h3>
        
        <style>{`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 45s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 45s linear infinite;
          }
          .pause-on-hover:hover .animate-scroll-left,
          .pause-on-hover:hover .animate-scroll-right {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="relative flex flex-col gap-6 overflow-hidden w-full max-w-[100vw] pause-on-hover py-4 -mx-6 lg:-mx-8 px-6 lg:px-8">
          {/* Top Row - Moving Left */}
          <div className="flex w-max animate-scroll-left gap-6">
            {[...partners.slice(0, Math.ceil(partners.length / 2)), ...partners.slice(0, Math.ceil(partners.length / 2))].map((partner, i) => (
              <PartnerLogo key={`top-${partner.name}-${i}`} name={partner.name} logoUrl={partner.logo} className="w-[180px] h-[90px] flex-shrink-0" />
            ))}
          </div>
          
          {/* Bottom Row - Moving Right */}
          <div className="flex w-max animate-scroll-right gap-6">
            {[...partners.slice(Math.ceil(partners.length / 2)), ...partners.slice(Math.ceil(partners.length / 2))].map((partner, i) => (
              <PartnerLogo key={`bottom-${partner.name}-${i}`} name={partner.name} logoUrl={partner.logo} className="w-[180px] h-[90px] flex-shrink-0" />
            ))}
          </div>
          
          {/* Gradient overlays for smooth fading edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
