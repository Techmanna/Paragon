import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";

const PROGRAMMES = [
  { slug: "dbn-acceleration", name: "DBN Acceleration Program", category: "Enterprise", desc: "Supporting MSME growth and access to finance.", overview: "The DBN Acceleration Program demonstrates how capacity development can be connected to business strategy, market readiness, investment preparation and sustainable growth.", location: "Abuja", steps: ["Application", "Screening", "Training", "Pitching"] },
  { slug: "gateway", name: "Gateway Program", category: "Innovation", desc: "Market pathways for early-stage innovators.", overview: "Gateway supports early-stage startups in refining their product-market fit and accessing their first institutional investors.", location: "Lagos", steps: ["Incubation", "Mentorship", "Demo Day"] },
  { slug: "learn2earn", name: "Learn2Earn", category: "Skills", desc: "Digital skills for youth.", overview: "Learn2Earn is a digital skills training programme...", location: "Kaduna", steps: ["Enrollment", "Training", "Certification"] },
  { slug: "nesi", name: "NESI Innovation Challenge", category: "Innovation", desc: "Solving energy sector challenges through tech.", overview: "NESI challenge seeks innovative solutions to the energy sector.", location: "Port Harcourt", steps: ["Application", "Pitching", "Grant Award"] },
  { slug: "3mtt", name: "3MTT Engagement", category: "Skills", desc: "Technical talent training.", overview: "3MTT is focused on training 3 million technical talents.", location: "Nationwide", steps: ["Application", "Training", "Placement"] },
  { slug: "tech4pwd", name: "Tech4PWD", category: "Inclusion", desc: "Digital skills for persons with disabilities.", overview: "Tech4PWD empowers persons with disabilities with in-demand tech skills.", location: "Abuja", steps: ["Screening", "Accessible Training", "Graduation"] },
  { slug: "stem4kids", name: "STEM4Kids", category: "Skills", desc: "STEM education for children.", overview: "STEM4Kids introduces young minds to Science, Technology, Engineering, and Math.", location: "Kaduna", steps: ["Registration", "Workshops", "Exhibition"] }
];

export async function generateStaticParams() {
  return PROGRAMMES.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProgrammeDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const prog = PROGRAMMES.find(p => p.slug === resolvedParams.slug);

  if (!prog) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full min-h-screen pt-20">
      <section className="bg-bg-dark py-16 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-accent-blue/20 text-accent-blue font-medium mb-4">
            {prog.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{prog.name}</h1>
          <p className="text-xl text-white/80 mb-8">{prog.desc}</p>
          <Button className="px-8 py-6 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold text-lg border-0">
            Express Interest
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-12">
            {prog.overview}
          </p>

          <h2 className="text-2xl font-bold mb-4">Who it's for</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-12">
            Details on target audience, eligibility, and profile of ideal participants. (Content pending)
          </p>

          <h2 className="text-2xl font-bold mb-6">What to expect</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {prog.steps?.map((step, i) => (
              <div key={i} className="p-6 bg-surface rounded-xl border border-border">
                <div className="text-accent-blue font-bold text-lg mb-2">0{i+1}</div>
                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Location</h2>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-5 h-5 mr-2 text-accent-blue" />
            <span className="text-lg">{prog.location}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Related Programmes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PROGRAMMES.filter(p => p.category === prog.category && p.slug !== prog.slug).slice(0, 3).map(related => (
              <Link href={`/programmes/${related.slug}`} key={related.slug} className="bg-white rounded-xl p-6 border border-border hover:shadow-md transition">
                <span className="text-accent-blue text-xs font-medium bg-accent-blue/10 px-2 py-1 rounded-full">{related.category}</span>
                <h3 className="font-bold mt-3 text-lg">{related.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{related.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-bg-dark text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to join?</h2>
          <Button className="px-8 py-6 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white border-0 font-semibold text-lg">
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
}
