"use client";

import { Inter, Source_Serif_4 } from "next/font/google";
import { Button } from "@/components/ui/button";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-white text-foreground">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl text-red-600 font-bold">!</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 font-heading text-red-600">Critical Application Error</h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            Something went critically wrong. We apologize for the inconvenience.
          </p>
          <Button onClick={() => reset()} className="rounded-full px-8 py-6 font-semibold bg-accent-blue text-white hover:bg-accent-blue/90">
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
}
