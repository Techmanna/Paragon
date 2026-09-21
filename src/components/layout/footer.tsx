import Link from "next/link";
import Image from "next/image";

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
            <div className="flex gap-4 mt-2 justify-center sm:justify-start w-full">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Col 2 (span 2) */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">What We Do</Link></li>
              <li><Link href="/partners" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Partners</Link></li>
            </ul>
          </div>
          
          {/* Col 3 (span 2) */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Programmes</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/programmes/dbn-acceleration" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">DBN Acceleration</Link></li>
              <li><Link href="/programmes/gateway" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Gateway Program</Link></li>
              <li><Link href="/programmes/learn2earn" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Learn2Earn</Link></li>
              <li><Link href="/programmes/nesi" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">NESI Challenge</Link></li>
              <li className="pt-2"><Link href="/programmes" className="text-accent-blue hover:text-white transition-colors font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">View all &rarr;</Link></li>
            </ul>
          </div>
          
          {/* Col 4 (span 2) */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/insights" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Insights</Link></li>
              <li><Link href="/impact" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Impact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded">Contact</Link></li>
            </ul>
          </div>

          {/* Col 5 (span 2) */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Contact</h4>
            <address className="not-italic text-sm space-y-4">
              <p>22b Kanta Road,<br />along Passion Trust,<br />Kaduna, Nigeria</p>
              <p>
                <a href="mailto:hello@paragonnigeria.org" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded block">hello@paragonnigeria.org</a>
              </p>
              <p>
                <a href="tel:+2348000000000" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue rounded block">+234 800 000 0000</a>
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
