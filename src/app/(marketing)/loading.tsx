export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] pt-20">
      <div className="w-12 h-12 border-4 border-accent-blue/20 border-t-accent-blue rounded-full animate-spin"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
