import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PillarCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
}

export function PillarCard({ title, description, icon: Icon, className }: PillarCardProps) {
  return (
    <div className={cn("p-8 border border-border rounded-2xl bg-surface transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md motion-reduce:transform-none group cursor-pointer", className)}>
      {Icon && <Icon className="w-10 h-10 text-accent-blue mb-4 group-hover:scale-110 transition-transform duration-300 motion-reduce:transform-none" />}
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
