"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LightboxItem {
  id: string | number;
  url: string;
  alt?: string;
  className?: string;
}

interface LightboxGalleryProps {
  items: LightboxItem[];
  gridClassName?: string;
}

export function LightboxGallery({ items, gridClassName }: LightboxGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const showNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % items.length));
  }, [items.length]);
  
  const showPrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + items.length) % items.length));
  }, [items.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent scrolling when lightbox is open
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, showNext, showPrev]);

  if (!items || items.length === 0) return null;

  return (
    <>
      <div className={cn("grid", gridClassName)}>
        {items.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className={cn(
              "bg-muted rounded-xl flex items-center justify-center border border-border relative overflow-hidden group cursor-pointer",
              item.className
            )}
          >
            <Image
              src={item.url}
              alt={item.alt || ""}
              fill
              className="object-cover z-0 transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-md transition-all duration-300" 
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/50 hover:text-white z-50 p-2 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-50 p-3 bg-black/20 hover:bg-black/60 rounded-full transition-all"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button 
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-50 p-3 bg-black/20 hover:bg-black/60 rounded-full transition-all"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div 
            className="relative w-full max-w-6xl h-[85vh] mx-12 flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[selectedIndex].url}
              alt={items[selectedIndex].alt || ""}
              fill
              className="object-contain"
              priority
            />
            {/* Optional overlay caption inside lightbox */}
            {items[selectedIndex].alt && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-black/60 backdrop-blur-md rounded-full text-white/90 text-sm font-medium tracking-wide">
                {items[selectedIndex].alt}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
