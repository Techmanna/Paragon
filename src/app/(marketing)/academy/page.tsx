"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { BookOpen, PlayCircle, Award, Users, Search, ArrowRight, Play } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";
import Image from "next/image";
import { FilterButton } from "@/components/shared/filter-button";
import { useState } from "react";
import { ComingSoon } from "@/components/shared/coming-soon";

const SHOW_COMING_SOON = true;

const categories = [
  "Entrepreneurship", "Digital Skills", "Technology & DeepTech",
  "Financial Literacy", "Innovation", "Marketing & Sales",
  "Leadership", "Creative Economy", "Career Development"
];

const featuredCourses = [
  {
    id: 1,
    title: "Foundations of DeepTech Innovation",
    category: "Technology & DeepTech",
    modules: 12,
    students: "2.4k",
    level: "Intermediate",
    image: "/course-1-placeholder.jpg" // we will assume we have these or standard placeholders
  },
  {
    id: 2,
    title: "Digital Marketing for MSMEs",
    category: "Marketing & Sales",
    modules: 8,
    students: "5.1k",
    level: "Beginner",
    image: "/course-2-placeholder.jpg"
  },
  {
    id: 3,
    title: "Financial Modeling for Startups",
    category: "Financial Literacy",
    modules: 15,
    students: "1.2k",
    level: "Advanced",
    image: "/course-3-placeholder.jpg"
  }
];

export default function AcademyPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  if (SHOW_COMING_SOON) {
    return <ComingSoon title="Paragon Academy" />;
  }

  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative bg-bg-dark py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill=\'none\' stroke=\'%23ffffff\' stroke-opacity=\'0.2\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '60px 60px' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent-blue font-semibold uppercase tracking-wider text-sm mb-4 block">Paragon Academy</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Learn, Grow, and <br />Scale Your Impact
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Access world-class courses, video lessons, and materials. Track your progress, complete assignments, and earn certificates to advance your career or enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="px-8 py-6 rounded-full text-base font-semibold bg-accent-blue hover:bg-accent-blue/90 text-white border-0">
                Create Free Account
              </Button>
              <Button variant="outline" className="px-8 py-6 rounded-full text-base font-semibold">
                Sign In
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md w-full max-w-md">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Earn Certificates</h3>
                  <p className="text-white/60 text-sm">Verified digital credentials</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Video Lessons</h3>
                  <p className="text-white/60 text-sm">Learn at your own pace</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Assignments & Quizzes</h3>
                  <p className="text-white/60 text-sm">Test your knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            centered
            title="Explore by Category"
            description="Find the right learning path for your goals."
            className="mb-12"
          />

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <FilterButton
                key={cat}
                label={cat}
                isActive={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading
              title="Featured Courses"
              description="Start learning today with our most popular programmes."
              className="mb-0"
            />
            <Button variant="ghost" className="text-accent-blue font-semibold hover:text-accent-blue/80 hover:bg-blue-50 group">
              View All Courses <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, i) => (
              <FadeIn key={course.id} delay={i * 0.1}>
                <div className="bg-surface rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow group flex flex-col h-full">
                  <div className="relative h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                    <Play className="w-12 h-12 text-white opacity-80 z-20 group-hover:scale-110 transition-transform" fill="currentColor" />
                    {/* Placeholder for actual image: */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-black/40 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-blue mb-3 block">
                      {course.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-4 line-clamp-2">
                      {course.title}
                    </h3>

                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.modules} Modules</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Teaser */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-bg-dark rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'2\' fill=\'%23ffffff\' fill-opacity=\'0.2\'/%3E%3C/svg%3E")', backgroundSize: '20px 20px' }} />

            <div className="grid lg:grid-cols-2 items-center relative z-10">
              <div className="p-10 lg:p-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Your Personal Learner Dashboard
                </h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Track your progress across multiple courses",
                    "Download supplementary materials and templates",
                    "Submit assignments and take quizzes",
                    "Access verifiable digital certificates"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-accent-blue" />
                      </div>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="px-8 py-6 rounded-full bg-accent-blue text-white hover:bg-accent-blue/90 font-semibold border-0">
                  Join the Academy
                </Button>
              </div>
              <div className="hidden lg:block bg-gradient-to-l from-transparent to-bg-dark h-full relative">
                {/* Visual representation of a dashboard goes here */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-white/5 rounded-l-3xl border-y border-l border-white/10 shadow-2xl backdrop-blur-sm p-6 overflow-hidden">
                  <div className="w-full h-8 bg-white/10 rounded-md mb-6 flex items-center px-4">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-xl h-24 p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded bg-accent-blue/20"></div>
                      <div className="w-2/3 h-3 bg-white/20 rounded"></div>
                    </div>
                    <div className="bg-white/10 rounded-xl h-24 p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded bg-green-400/20"></div>
                      <div className="w-3/4 h-3 bg-white/20 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl h-32 p-4">
                    <div className="w-1/3 h-4 bg-white/20 rounded mb-4"></div>
                    <div className="space-y-3">
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden"><div className="w-3/4 h-full bg-accent-blue"></div></div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden"><div className="w-1/2 h-full bg-accent-blue"></div></div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden"><div className="w-1/4 h-full bg-accent-blue"></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Temporary CheckCircle2 component to avoid missing import if not exported from lucide-react above
function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
