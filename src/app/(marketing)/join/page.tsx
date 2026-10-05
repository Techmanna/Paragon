"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ComingSoon } from "@/components/shared/coming-soon";

const SHOW_COMING_SOON = true;

export default function JoinParagonPage() {
  const [step, setStep] = useState<1 | 2>(1);

  if (SHOW_COMING_SOON) {
    return <ComingSoon title="Join Paragon" />;
  }

  return (
    <div className="flex flex-col min-h-screen w-full bg-surface pt-20">
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl border border-border">
          
          {/* Left Side: Information & Value Prop */}
          <div className="bg-bg-dark p-10 lg:p-14 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20L20 0Z\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'1\' stroke-opacity=\'0.2\'/%3E%3C/svg%3E")', backgroundSize: '40px 40px' }} />
            
            <div className="relative z-10">
              <Link href="/" className="inline-block mb-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded p-1">
                <Image src="/logo.png" alt="Paragon Nigeria" width={120} height={43} className="brightness-0 invert" />
              </Link>
              
              <FadeIn>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  Welcome to Paragon Nigeria
                </h1>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Discover programmes, opportunities, learning resources and ways to participate in our ecosystem.
                </p>
                
                <div className="space-y-4 mb-12">
                  {[
                    "Access premium resources and templates",
                    "Enroll in Paragon Academy courses",
                    "Apply to exclusive opportunities",
                    "Connect with innovators and entrepreneurs"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent-blue/30 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue" />
                      </div>
                      <span className="text-white/90 text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            
            <div className="relative z-10 mt-auto pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm">
                Join a growing community of entrepreneurs, learners, innovators, and partners building Africa's future.
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            {step === 1 ? (
              <FadeIn>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Create your profile</h2>
                  <p className="text-muted-foreground">Enter your email to access Paragon opportunities and resources.</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-accent-blue focus:ring-accent-blue"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground leading-snug">
                      I agree to receive Paragon opportunities and updates, and accept the <Link href="#" className="text-accent-blue hover:underline">Privacy Policy</Link>.
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold py-6 rounded-full group">
                    Continue <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <p className="text-center text-sm text-muted-foreground mt-6">
                    Already have an account? <Link href="#" className="text-accent-blue font-medium hover:underline">Sign in</Link>
                  </p>
                </form>
              </FadeIn>
            ) : (
              <FadeIn>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Complete your profile</h2>
                  <p className="text-muted-foreground">Tell us a bit more so we can personalise your experience.</p>
                </div>

                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">First Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent-blue outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Last Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent-blue outline-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Participant Type</label>
                    <select required className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent-blue outline-none bg-white">
                      <option value="">Select your profile...</option>
                      <option value="learner">Learner</option>
                      <option value="entrepreneur">Entrepreneur</option>
                      <option value="innovator">Innovator</option>
                      <option value="partner">Partner / Funder</option>
                      <option value="alumni">Alumni</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Organisation / Startup (Optional)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent-blue outline-none" placeholder="Where do you work?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">State / Location</label>
                    <select required className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent-blue outline-none bg-white">
                      <option value="">Select location...</option>
                      <option value="Abuja">Abuja</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Kaduna">Kaduna</option>
                      <option value="Kano">Kano</option>
                      <option value="Port Harcourt">Port Harcourt</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <Button type="button" variant="outline" onClick={() => setStep(1)} className="px-6 py-6 rounded-full font-medium">
                      Back
                    </Button>
                    <Button type="submit" className="flex-1 bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold py-6 rounded-full">
                      Complete Registration
                    </Button>
                  </div>
                </form>
              </FadeIn>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
