import { cn } from "@/lib/utils";

interface PartnerLogoProps {
  name: string;
  logoUrl?: string;
  className?: string;
}

export function PartnerLogo({ name, logoUrl, className }: PartnerLogoProps) {
  return (
    <div 
      className={cn("aspect-video bg-surface rounded-xl flex p-4 text-center items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:-translate-y-1 transition-all duration-200 ease-out motion-reduce:transform-none cursor-pointer border border-border hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue", className)} 
      tabIndex={0}
      role="listitem"
    >
      {logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logoUrl} alt={`${name} logo`} className="max-w-full max-h-full object-contain" />
      ) : (
        <span className="text-sm font-bold text-muted-foreground">{name}</span>
      )}
    </div>
  );
}
