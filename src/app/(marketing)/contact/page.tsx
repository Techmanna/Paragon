import { Button } from "@/components/ui/button";
import { SocialIcons } from "@/components/shared/social-icons";
import { ContactForm } from "@/features/contact/contact-form";

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
              <ContactForm />
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
                    paragonresearchers@gmail.com<br />
                    +234 906 791 8054
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Social</h3>
                  <SocialIcons 
                    iconClassName="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2"
                  />
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-10 w-full aspect-video rounded-xl border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.654575140963!2d7.436166375038374!3d10.527848989606227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d4b54c407298b%3A0xdbee36e9e1ccdd47!2sPassion%20trust!5e0!3m2!1sen!2sng!4v1791038529794!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
