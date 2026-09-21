import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Handshake, Heart, Lightbulb, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Partner With Us | Paragon",
  description: "Work hand-in-hand with us to achieve our goal of reaching more young people to get access to decent jobs and economic growth opportunities in technology across Africa.",
};

export default function PartnerPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-bg-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display tracking-tight">Partner with Us</h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
              Work hand-in-hand with us to achieve our goal of reaching more young people to get access to decent jobs and economic growth opportunities in technology across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="w-full sm:w-auto rounded-full px-8 py-6 text-lg bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold border-0">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Support our Initiatives */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Support our Initiatives</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Help sponsor our courses, programs, events and initiatives to empower more African youth via a donation or strategic funding. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you are a Development Finance Institution (DFI), a corporate sponsor, or a philanthropic organization, your support translates directly into tangible skills, enterprise growth, and economic resilience for communities that need it most.
              </p>
              <Link href="/contact" className="inline-flex items-center text-accent-blue font-semibold hover:text-accent-blue/80 transition-colors">
                Discuss Sponsorship Opportunities <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2} className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center text-accent-blue mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Philanthropic Funding</h3>
                <p className="text-sm text-muted-foreground">Directly subsidize training programs for underserved youth.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center mt-8">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center text-accent-blue mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Corporate Sponsorship</h3>
                <p className="text-sm text-muted-foreground">Align your brand with high-impact economic growth across Africa.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Partner With Paragon */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ways to Collaborate</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer highly flexible, outcome-driven partnership models designed to align with your strategic objectives and ESG goals.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Co-Creation & Design",
                icon: <Lightbulb className="w-6 h-6" />,
                desc: "Work with our experts to design bespoke capacity-building and enterprise support programs tailored to specific demographics or industries."
              },
              {
                title: "Implementation Partners",
                icon: <Handshake className="w-6 h-6" />,
                desc: "Leverage our extensive grassroots network and operational excellence to implement your existing programs flawlessly across Nigeria and beyond."
              },
              {
                title: "Ecosystem Building",
                icon: <TrendingUp className="w-6 h-6" />,
                desc: "Join us in shaping policy, generating critical market insights, and building the infrastructure that future generations of African innovators will rely on."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-2xl bg-surface border border-border">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-blue shadow-sm mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-accent-blue text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Ready to Create Impact?</h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Whether you want to sponsor an initiative, co-design a program, or explore other synergies, we are ready to build with you.
            </p>
            <Link href="/contact">
              <Button className="rounded-full px-8 py-6 text-lg bg-white text-accent-blue hover:bg-white/90 font-semibold border-0">
                Contact Our Partnerships Team
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
