import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProgrammeCardProps {
  slug: string;
  name: string;
  category: string;
  description: string;
  imagePlaceholder?: string;
  className?: string;
}

export function ProgrammeCard({ slug, name, category, description, imagePlaceholder = "[Image Placeholder]", className }: ProgrammeCardProps) {
  return (
    <Link href={`/programmes/${slug}`} className={cn("block rounded-2xl overflow-hidden border border-border group cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all duration-200 ease-out motion-reduce:transform-none bg-white", className)}>
      <div className="aspect-[4/3] bg-muted overflow-hidden relative">
        <div className="absolute inset-0 bg-accent-blue/5 flex items-center justify-center text-muted-foreground/50 group-hover:scale-105 transition-transform duration-300 ease-out motion-reduce:transform-none font-medium">
          {imagePlaceholder}
        </div>
      </div>
      <div className="p-6">
        <Badge variant="pillar" className="mb-3">
          {category}
        </Badge>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent-blue transition-colors">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center text-accent-blue text-sm font-medium">
          View details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform motion-reduce:transform-none" />
        </div>
      </div>
    </Link>
  );
}
