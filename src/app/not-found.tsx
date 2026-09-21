import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] pt-20 px-6 text-center">
      <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 text-muted-foreground text-3xl font-bold">
        404
      </div>
      <h2 className="text-3xl font-bold mb-4 font-heading">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 text-lg max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/programmes" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-accent-blue text-white hover:bg-accent-blue/90">
          Browse programmes
        </Link>
        <Link href="/" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border border-border hover:bg-muted text-foreground transition-colors">
          Go home
        </Link>
      </div>
    </div>
  );
}
