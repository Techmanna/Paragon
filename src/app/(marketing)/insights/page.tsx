import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Insights() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-20">
      <section className="bg-surface py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights & Research</h1>
          <p className="text-xl text-muted-foreground">Data-driven perspectives on enterprise and innovation.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="#" className="block rounded-2xl overflow-hidden border border-border group cursor-pointer hover:shadow-md transition">
              <div className="aspect-[4/3] bg-muted overflow-hidden relative">
                <div className="absolute inset-0 bg-accent-blue/5 flex items-center justify-center text-muted-foreground/50 group-hover:scale-105 transition-transform duration-300">
                  [Report Cover Image]
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-sm text-muted-foreground mb-2">[Date Pending]</p>
                <h3 className="text-lg font-semibold text-foreground mb-3">AI Bias Data Report</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  An in-depth analysis of AI bias within the African innovation ecosystem and its impact on emerging technologies.
                </p>
                <div className="flex items-center text-accent-blue text-sm font-medium">
                  Read Report <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
