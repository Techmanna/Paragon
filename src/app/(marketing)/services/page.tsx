import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    title: "Enterprise Support",
    desc: "Business advisory, market readiness, and acceleration support for MSMEs.",
    activities: ["Business Diagnostics", "MSME Support", "Entrepreneurship Development", "Business Advisory", "Market Readiness", "Investment Readiness", "Growth Support"],
    filter: "enterprise-support"
  },
  {
    title: "Capacity & Skills",
    desc: "Digital skills and training programmes for youth and emerging talent.",
    activities: ["Technical Training", "Soft Skills Development", "Curriculum Design", "Mentorship Programmes", "Job Placement Support"],
    filter: "capacity-skills"
  },
  {
    title: "Innovation Support",
    desc: "Challenges and technical support for startups and innovators.",
    activities: ["Hackathons", "Innovation Challenges", "Prototyping Support", "Incubation", "Tech Policy Advocacy"],
    filter: "innovation-support"
  },
  {
    title: "Research, Data & Intelligence",
    desc: "Intelligence and insights to drive evidence-based policy making.",
    activities: ["Market Research", "Impact Assessment", "Ecosystem Mapping", "Data Publishing", "Policy Briefs"],
    filter: "research-data"
  },
  {
    title: "Programme Design & Implementation",
    desc: "End-to-end design and implementation of development initiatives.",
    activities: ["Needs Assessment", "Stakeholder Engagement", "Logistics & Delivery", "Monitoring & Evaluation", "Reporting"],
    filter: "programme-design"
  },
  {
    title: "Ecosystem & Hub Development",
    desc: "Development and management of physical and digital innovation hubs.",
    activities: ["Space Management", "Community Building", "Events Hosting", "Resource Sharing", "Hub Networking"],
    filter: "ecosystem-hubs"
  }
];

export default function Services() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-surface py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h1>
          <p className="text-xl text-muted-foreground">Our six service pillars designed to support enterprise growth and ecosystem transformation.</p>
        </div>
      </section>

      {/* Pillar Blocks */}
      <div className="py-10">
        {pillars.map((pillar, index) => (
          <section key={pillar.title} className={`py-20 ${index % 2 !== 0 ? 'bg-surface' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <h2 className="text-3xl font-bold mb-4">{pillar.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{pillar.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {pillar.activities.map((activity) => (
                      <li key={activity} className="flex items-center text-foreground font-medium">
                        <span className="w-2 h-2 rounded-full bg-accent-blue mr-3" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/programmes?pillar=${pillar.filter}`} className="inline-flex items-center text-accent-blue font-semibold hover:underline">
                    View related programmes <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                {/* <div className={`bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <span className="text-muted-foreground">[Image Placeholder]</span>
                </div> */}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
