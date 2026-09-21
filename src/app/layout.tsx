import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.paragon.ng'),
  title: {
    template: "%s | Paragon Nigeria",
    default: "Paragon Nigeria — Enterprise & Innovation Support Organisation",
  },
  description: "Paragon Nigeria helps governments, DFIs, corporates and MSMEs turn enterprise and innovation priorities into delivered programmes across Kaduna, Abuja and Port Harcourt.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.paragon.ng/",
    title: "Paragon Nigeria — Enterprise & Innovation Support Organisation",
    description: "Paragon Nigeria helps governments, DFIs, corporates and MSMEs turn enterprise and innovation priorities into delivered programmes.",
    siteName: "Paragon Nigeria",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paragon Nigeria",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Paragon Nigeria",
    description: "Advancing African Prosperity through Enterprise and Innovation.",
    images: ["/og-image.jpg"],
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Paragon Nigeria",
    url: "https://www.paragon.ng",
    logo: "https://www.paragon.ng/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kaduna",
      addressCountry: "NG"
    },
    sameAs: [
      "https://www.linkedin.com/company/paragon-nigeria",
      "https://www.instagram.com/paragon_nigeria",
      "https://www.facebook.com/paragonnigeria"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@paragon.ng"
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-accent-blue text-white px-4 py-2 font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-blue rounded shadow-lg">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
