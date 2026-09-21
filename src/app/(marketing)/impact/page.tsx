export default function Impact() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-20">
      <section className="bg-bg-dark py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Paragon in Action</h1>
          <p className="text-xl text-white/80">Real outcomes across communities and ecosystems.</p>
        </div>
      </section>

      {/* Stats Band Shell */}
      <section className="py-16 bg-accent-blue text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-white/20 py-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold mb-2">[Metric]</div>
                <div className="text-white/80 font-medium uppercase tracking-wide text-sm">[Label]</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 aspect-square bg-muted rounded-xl flex items-center justify-center border border-border group overflow-hidden">
              <span className="text-muted-foreground group-hover:scale-105 transition-transform duration-300">[Photo]</span>
            </div>
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center border border-border group overflow-hidden">
              <span className="text-muted-foreground group-hover:scale-105 transition-transform duration-300">[Photo]</span>
            </div>
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center border border-border group overflow-hidden">
              <span className="text-muted-foreground group-hover:scale-105 transition-transform duration-300">[Photo]</span>
            </div>
            <div className="col-span-2 aspect-[2/1] bg-muted rounded-xl flex items-center justify-center border border-border group overflow-hidden">
              <span className="text-muted-foreground group-hover:scale-105 transition-transform duration-300">[Photo]</span>
            </div>
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center border border-border group overflow-hidden">
              <span className="text-muted-foreground group-hover:scale-105 transition-transform duration-300">[Photo]</span>
            </div>
            <div className="col-span-3 aspect-[3/1] bg-muted rounded-xl flex items-center justify-center border border-border group overflow-hidden">
              <span className="text-muted-foreground group-hover:scale-105 transition-transform duration-300">[Photo]</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
