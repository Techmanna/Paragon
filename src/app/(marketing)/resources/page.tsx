"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Download, Search, FileText, Video, BookOpen, Lock } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";
import Link from "next/link";
import { ComingSoon } from "@/components/shared/coming-soon";

const SHOW_COMING_SOON = true;

const resources = [
  {
    id: 1,
    title: "Nigerian MSME Digital Readiness Report 2026",
    category: "Reports",
    type: "PDF",
    icon: FileText,
    isGated: true,
    size: "4.2 MB",
  },
  {
    id: 2,
    title: "Startup Financial Modeling Template",
    category: "Templates",
    type: "XLSX",
    icon: FileText,
    isGated: true,
    size: "1.1 MB",
  },
  {
    id: 3,
    title: "Mastering the Art of Pitching (Webinar Recording)",
    category: "Webinars / Recordings",
    type: "Video",
    icon: Video,
    isGated: false,
    size: "45 mins",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Ecosystem Building",
    category: "Books / eBooks",
    type: "ePub",
    icon: BookOpen,
    isGated: true,
    size: "8.5 MB",
  },
  {
    id: 5,
    title: "3MTT Program Case Study: Transforming Technical Talent",
    category: "Case Studies",
    type: "PDF",
    icon: FileText,
    isGated: false,
    size: "3.4 MB",
  },
  {
    id: 6,
    title: "Business Registration Toolkit for Nigerian Founders",
    category: "Toolkits",
    type: "ZIP",
    icon: FileText,
    isGated: false,
    size: "12 MB",
  }
];

export default function ResourceCentrePage() {
  if (SHOW_COMING_SOON) {
    return <ComingSoon title="Resource Centre" />;
  }
  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      <section className="bg-bg-dark py-20 relative overflow-hidden">
         {/* Subtle background texture */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill=\'none\' stroke=\'%23ffffff\' stroke-opacity=\'0.2\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '60px 60px' }} />
         
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <SectionHeading
            centered
            inverted
            title="Resource Centre"
            description="Discover and download actionable materials, insights, templates, and reports to build and scale your enterprise."
          />
          
          <div className="mt-8 relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/50" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:bg-white/20 backdrop-blur-md transition-all"
              placeholder="Search reports, templates, webinars..."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {["All", "Books / eBooks", "Business guides", "Technology resources", "Reports", "Templates", "Case studies", "Webinars", "Toolkits"].map((filter) => (
              <button key={filter} className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-border hover:border-accent-blue hover:text-accent-blue transition-colors text-foreground">
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <FadeIn key={resource.id} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent-blue flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                      {resource.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-4 line-clamp-2">
                      {resource.title}
                    </h3>
                    
                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-border">
                      <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <span className="font-medium text-foreground bg-surface px-2 py-1 rounded text-xs">{resource.type}</span>
                        {resource.size}
                      </span>
                      
                      {resource.isGated ? (
                        <Link href="/join?redirect=/resources">
                          <Button variant="outline" className="gap-2 border-accent-blue/30 text-accent-blue hover:bg-accent-blue hover:text-white group-hover:border-accent-blue rounded-full">
                            <Lock className="w-4 h-4" /> Unlock
                          </Button>
                        </Link>
                      ) : (
                        <Button variant="ghost" className="gap-2 text-accent-blue hover:bg-blue-50 hover:text-accent-blue rounded-full">
                          <Download className="w-4 h-4" /> Download
                        </Button>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
