import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";

interface ComingSoonProps {
  title: string;
  description?: string;
}

export function ComingSoon({ title, description = "We are currently building this experience. Check back soon!" }: ComingSoonProps) {
  return (
    <div className="flex flex-col w-full min-h-[80vh] pt-20 items-center justify-center bg-surface">
      <FadeIn className="text-center px-6 max-w-2xl">
        <div className="w-20 h-20 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <Clock className="w-10 h-10 text-accent-blue" />
        </div>
        <SectionHeading
          centered
          title={`${title} is Coming Soon`}
          description={description}
          className="mb-8"
        />
        <Link href="/">
          <Button className="rounded-full px-8 py-6 bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold">
            <ArrowLeft className="w-4 h-4 mr-2" /> Return to Homepage
          </Button>
        </Link>
      </FadeIn>
    </div>
  );
}
