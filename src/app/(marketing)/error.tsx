"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] pt-20 px-6 text-center">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
        <span className="text-2xl text-red-600 font-bold">!</span>
      </div>
      <h2 className="text-2xl font-bold mb-4 font-heading">Something went wrong</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        We encountered an unexpected error while loading this section.
      </p>
      <Button onClick={() => reset()} className="rounded-full px-6 py-6 font-semibold bg-accent-blue text-white hover:bg-accent-blue/90">
        Try again
      </Button>
    </div>
  );
}
