import { Button } from "@/components/ui/button";

const PARTNERS = {
  "Multilateral & Development": ["UNDP", "USAID", "GIZ"],
  "Government": ["NITDA", "Federal Ministry of Communication & Digital Economy"],
  "Corporate": ["Mastercard", "Intel", "Airtel", "Glo"],
  "Ecosystem & Innovation": ["AfriLabs", "Data Science Nigeria", "NIINE", "Co-Creation Hub", "Nigeria Climate Innovation Centre", "Luminate", "TEN", "Zipline", "NEXTGEN", "3MTT", "Digital Transformation Center Nigeria", "Coursera"]
};

export default function Partners() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-20">
      <section className="bg-bg-dark py-14 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Partners & Network</h1>
          <p className="text-xl text-white/80">Working alongside the best to deliver transformation.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {Object.entries(PARTNERS).map(([category, partners]) => (
            <div key={category} className="mb-20 last:mb-0">
              <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">{category}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {partners.map(partner => (
                  <div key={partner} className="aspect-video bg-surface rounded-xl flex p-4 text-center items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer border border-border hover:shadow-sm">
                    <span className="text-sm font-bold text-muted-foreground">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-20 bg-surface text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Join our network</h2>
          <Button className="px-8 py-6 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white border-0 font-semibold text-lg">
            Become a partner
          </Button>
        </div>
      </section>
    </div>
  );
}
