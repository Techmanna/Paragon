import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-20">
      <section className="bg-surface py-14">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">We're here to answer your questions and explore partnerships.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="purpose" className="block text-sm font-medium">I am a...</label>
                  <select id="purpose" className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50">
                    <option>Prospective Partner / Funder</option>
                    <option>Programme Applicant</option>
                    <option>Media / Press</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent-blue/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent-blue/50" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent-blue/50" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent-blue/50"></textarea>
                </div>

                <Button type="button" className="w-full px-8 py-6 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white border-0 font-semibold text-lg">
                  Submit Enquiry
                </Button>
              </form>
            </div>

            {/* Office Details */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Our Office</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Kaduna Headquarters</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    22b Kanta Road,<br />
                    along Passion Trust,<br />
                    Kaduna, Nigeria
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Contact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    hello@paragon.ng<br />
                    +234 (0) XXX XXX XXXX
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Social</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    LinkedIn / Twitter / Instagram
                  </p>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="mt-10 w-full aspect-video bg-muted rounded-xl border border-border flex items-center justify-center">
                <span className="text-muted-foreground font-medium">Static Map Embed</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
