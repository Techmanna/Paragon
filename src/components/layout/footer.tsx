import Link from "next/link";
import Image from "next/image";
import { SocialIcons } from "@/components/shared/social-icons";

export function Footer() {
  return (
    <footer className="bg-bg-dark text-white/70 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1 (span 4) */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link href="/" className="flex items-center space-x-2 tex-white mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded">
              <Image src="/logo.png" alt="Paragon Nigeria" width={100} height={36} className="" />
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              We connect enterprise development, innovation and ecosystem building across Nigeria.
            </p>
            <div className="mt-2 justify-center sm:justify-start w-full">
              <SocialIcons
                className="flex gap-4"
                iconClassName="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
              />
            </div>
          </div>

          {/* Col 2 (span 2) */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">About</Link></li>
              <li><Link href="/what-we-do" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">What We Do</Link></li>
              <li><Link href="/opportunities" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Opportunities</Link></li>
            </ul>
          </div>

          {/* Col 3 (span 2) */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Programmes</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/programmes/3mtt" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">3MTT</Link></li>
              <li><Link href="/programmes/3mtt-deeptech" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">3MTT DeepTech</Link></li>
              <li><Link href="/programmes/airtel-3mtt" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Airtel + 3MTT</Link></li>
              <li><Link href="/programmes/gateway" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Gateway</Link></li>
              <li className="pt-2"><Link href="/programmes" className="text-accent-blue hover:text-white transition-colors font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">View all &rarr;</Link></li>
            </ul>
          </div>

          {/* Col 4 (span 2) */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/academy" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Academy</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Resources</Link></li>
              <li><Link href="/impact" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Impact</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Community</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Contact</Link></li>
            </ul>
          </div>

          {/* Col 5 (span 2) */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Contact</h4>
            <address className="not-italic text-sm space-y-4">
              <p>22b Kanta Road,<br />along Passion Trust,<br />Kaduna, Nigeria</p>
              <p>
                <a href="mailto:paragonresearchers@gmail.com" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded block">paragonresearchers@gmail.com</a>
              </p>
              <p>
                <a href="tel:+2348000000000" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded block">+234 906 791 8054</a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Paragon Nigeria. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
