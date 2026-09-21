import dynamic from "next/dynamic";

const MapEmbed = dynamic(() => import("@/components/layout/map-embed").then((mod) => mod.MapEmbed), {
  loading: () => <div className="w-full max-w-3xl mx-auto aspect-video bg-muted rounded-2xl flex items-center justify-center border border-border animate-pulse"><span className="text-muted-foreground font-medium">Loading Map...</span></div>
});

export default function Footprint() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-20">
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-10">Our Footprint</h1>
          <MapEmbed type="interactive" className="max-w-3xl mx-auto" />
        </div>
      </section>

      {/* Locations */}
      {[
        { city: "Kaduna", role: "Northern HQ", focus: ["Digital Skills", "Inclusion", "Youth Development"], address: "22b Kanta Road, along Passion Trust, Kaduna", bg: "bg-white" },
        { city: "Abuja", role: "Policy & Strategy Hub", focus: ["Government Relations", "Ecosystem Design", "Research"], address: "Address pending...", bg: "bg-surface" },
        { city: "Port Harcourt", role: "Southern Hub", focus: ["Energy Innovation", "Enterprise Support", "Climate Tech"], address: "Address pending...", bg: "bg-white" }
      ].map(loc => (
        <section key={loc.city} className={`py-20 ${loc.bg}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-4xl font-bold text-foreground mb-2">{loc.city}</h2>
                <p className="text-xl text-accent-blue font-semibold">{loc.role}</p>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Priority Focus</h3>
                  <div className="flex flex-wrap gap-2">
                    {loc.focus.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-accent-blue/10 text-accent-blue text-sm rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Contact Details</h3>
                  <p className="text-muted-foreground">{loc.address}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
