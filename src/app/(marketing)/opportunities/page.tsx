"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";
import { ComingSoon } from "@/components/shared/coming-soon";

const SHOW_COMING_SOON = true;

const opportunities = [
  {
    id: 1,
    title: "3MTT DeepTech Cohort 2",
    category: "Training",
    status: "Open",
    deadline: "November 15, 2026",
    location: "Hybrid (Online & In-person)",
    eligibility: "Nigerian youths aged 18-35 with foundational tech skills",
    benefits: ["Advanced Technical Training", "Certifications", "Mentorship", "Job Placement Support"],
    applyLink: "#"
  },
  {
    id: 2,
    title: "Gateway Innovation Challenge",
    category: "Competitions",
    status: "Open",
    deadline: "October 30, 2026",
    location: "Abuja, Nigeria",
    eligibility: "Early-stage startups with an MVP in CleanTech or EdTech",
    benefits: ["₦5,000,000 Equity-free Grant", "Access to Investors", "Co-working space access"],
    applyLink: "#"
  },
  {
    id: 3,
    title: "Airtel + 3MTT Connectivity Grant",
    category: "Grants",
    status: "Closing Soon",
    deadline: "October 10, 2026",
    location: "Nationwide",
    eligibility: "Active participants of the 3MTT programme",
    benefits: ["Free internet access for 6 months", "Devices for top 100 applicants"],
    applyLink: "#"
  },
  {
    id: 4,
    title: "Paragon Research Fellowship",
    category: "Fellowships",
    status: "Upcoming",
    deadline: "January 5, 2027",
    location: "Remote",
    eligibility: "Researchers and policy analysts",
    benefits: ["Monthly stipend", "Publication opportunities", "Access to Paragon data repository"],
    applyLink: "#"
  }
];

export default function OpportunitiesPage() {
  if (SHOW_COMING_SOON) {
    return <ComingSoon title="Opportunities Hub" />;
  }

  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      <section className="bg-bg-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionHeading
            centered
            inverted
            title="Opportunities Hub"
            description="Discover current Paragon programmes and selected ecosystem opportunities. Find training, fellowships, grants, and more to accelerate your journey."
          />
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters could go here */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["All", "Programmes", "Training", "Competitions", "Fellowships", "Jobs", "Internships", "Grants", "Events"].map((filter) => (
              <button key={filter} className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-border hover:border-accent-blue hover:text-accent-blue transition-colors">
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opp, index) => (
              <FadeIn key={opp.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-blue-50 text-accent-blue hover:bg-blue-100 px-3 py-1 text-xs uppercase tracking-wider">
                      {opp.category}
                    </Badge>
                    <Badge variant="outline" className={`px-3 py-1 text-xs ${opp.status === 'Open' ? 'text-green-600 border-green-200 bg-green-50' : opp.status === 'Closing Soon' ? 'text-orange-600 border-orange-200 bg-orange-50' : 'text-gray-600 border-gray-200 bg-gray-50'}`}>
                      {opp.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">{opp.title}</h3>
                  
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mt-0.5 text-accent-blue shrink-0" />
                      <span><strong>Deadline:</strong> {opp.deadline}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mt-0.5 text-accent-blue shrink-0" />
                      <span><strong>Location:</strong> {opp.location}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-accent-blue shrink-0" />
                      <span><strong>Eligibility:</strong> {opp.eligibility}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Benefits:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {opp.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold rounded-full py-6 mt-auto flex items-center justify-center gap-2 group">
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
