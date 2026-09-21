import { cn } from "@/lib/utils";
import Image from "next/image";

interface MapEmbedProps {
  type: "static" | "interactive";
  src?: string; // URL for iframe if interactive, or image path if static
  className?: string;
}

export function MapEmbed({ type, src, className }: MapEmbedProps) {
  if (type === "static") {
    return (
      <div className={cn("w-full aspect-video bg-muted rounded-xl border border-border flex items-center justify-center overflow-hidden relative", className)}>
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt="Location map" className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <span className="text-muted-foreground font-medium">Static Map Embed Placeholder</span>
        )}
      </div>
    );
  }

  // Interactive
  return (
    <div className={cn("w-full aspect-video bg-muted rounded-xl border border-border flex items-center justify-center overflowhidden relative", className)}>
      {src ? (
        <iframe 
          src={src} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Interactive Map"
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <Image src="/paragon-map.png" alt="Paragon Nigeria" width={995} height={941} className="" />
      )}
    </div>
  );
}
