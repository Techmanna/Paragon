import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";

export function HeroSection() {
  return (
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
  );
}
