"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Hexagon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "/about" },
  // { name: "What We Do", href: "/what-we-do" },
  { name: "Programmes", href: "/programmes" },
  { name: "Opportunities", href: "/opportunities" },
  { name: "Academy", href: "/academy" },
  { name: "Resources", href: "/resources" },
  {
    name: "More",
    href: "#",
    hasDropdown: true,
    subLinks: [
      { name: "Community", href: "/community" },
      { name: "Impact", href: "/impact" },
      { name: "Shop", href: "/shop" },
    ]
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<Record<string, boolean>>({});
  const pathname = usePathname();
  const isHome = pathname === "/";
  const router = useRouter();

  const toggleMobileMenu = (name: string) => {
    setExpandedMobileMenus(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled
          ? "h-16 bg-white/90 backdrop-blur-md shadow-sm text-foreground"
          : `h-20 ${isHome ? "bg-transparent text-white" : "bg-white text-foreground"}`
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded p-1">
            <Image src="/logo.png" alt="Paragon Nigeria" width={100} height={36} className="" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group py-2">
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    aria-expanded={link.hasDropdown ? false : undefined}
                    className={`text-sm font-medium transition-colors hover:text-accent-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded p-1 flex items-center gap-1 relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-accent-blue after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${pathname === link.href ? "text-accent-blue font-semibold after:scale-x-100" : ""
                      }`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4 ml-0.5" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && link.subLinks && (
                    <div className="absolute top-full left-0 w-48 bg-white text-foreground shadow-lg rounded-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 border border-border p-2 focus-within:opacity-100 focus-within:translate-y-0 focus-within:pointer-events-auto">
                      <div className="flex flex-col gap-1">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="px-3 py-2 text-sm text-foreground hover:text-accent-blue hover:bg-surface rounded-lg transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="text-sm font-medium hover:text-accent-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded p-1">
              Contact
            </Link>
            <Button onClick={() => {
              router.push('/join')
            }} className="rounded-full px-6 py-5 bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-blue transition-transform duration-150 ease-in-out hover:scale-105 motion-reduce:transform-none">
              Join Paragon
            </Button>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="lg:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-white text-foreground flex flex-col transform transition-transform translate-x-0"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex justify-between items-center p-6 h-16 border-b border-border">
            <span className="font-bold text-lg">PARAGON</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-border pb-4">
                {link.hasDropdown ? (
                  <div className="flex flex-col">
                    <button
                      onClick={() => toggleMobileMenu(link.name)}
                      className="flex items-center justify-between text-xl font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded p-1 w-full text-left"
                      aria-expanded={expandedMobileMenus[link.name]}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${expandedMobileMenus[link.name] ? "rotate-180" : ""}`} />
                    </button>
                    {expandedMobileMenus[link.name] && (
                      <div className="flex flex-col gap-3 pt-4 pl-4">
                        {link.subLinks?.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="text-lg text-muted-foreground hover:text-accent-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded p-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className="flex text-xl font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded p-1 w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="text-xl font-medium border-b border-border pb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded p-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="p-6 border-t border-border mt-auto">
            <Button onClick={() => router.push('/join')} className="w-full rounded-full py-6 text-lg bg-accent-blue text-white font-semibold hover:bg-accent-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-blue">
              Join Paragon
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
