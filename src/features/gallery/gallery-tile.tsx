import { cn } from "@/lib/utils";

interface GalleryTileProps {
  alt: string;
  imageUrl?: string;
  className?: string;
}

export function GalleryTile({ alt, imageUrl, className }: GalleryTileProps) {
  return (
    <div 
      className={cn("bg-muted rounded-xl flex items-center justify-center border border-border group overflow-hidden relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue", className)} 
      tabIndex={0} 
      role="button" 
      aria-label={`View full image: ${alt}`}
    >
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageUrl} alt={alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out motion-reduce:transform-none" />
      ) : (
        <span className="text-muted-foreground font-medium group-hover:scale-105 transition-transform duration-300 ease-out motion-reduce:transform-none">[Photo: {alt}]</span>
      )}
    </div>
  );
}
