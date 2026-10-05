"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import { ComingSoon } from "@/components/shared/coming-soon";

const SHOW_COMING_SOON = true;

const products = [
  {
    id: 1,
    name: "Paragon Signature T-Shirt",
    price: "₦12,500",
    category: "Apparel",
    image: "/product-1-placeholder.jpg"
  },
  {
    id: 2,
    name: "Ecosystem Builder Hoodie",
    price: "₦25,000",
    category: "Apparel",
    image: "/product-2-placeholder.jpg"
  },
  {
    id: 3,
    name: "Paragon Classic Polo",
    price: "₦15,000",
    category: "Apparel",
    image: "/product-3-placeholder.jpg"
  },
  {
    id: 4,
    name: "Innovator's Tote Bag",
    price: "₦5,000",
    category: "Accessories",
    image: "/product-4-placeholder.jpg"
  },
  {
    id: 5,
    name: "Premium Hardcover Notebook",
    price: "₦4,500",
    category: "Stationery",
    image: "/product-5-placeholder.jpg"
  },
  {
    id: 6,
    name: "Insulated Water Bottle",
    price: "₦8,500",
    category: "Accessories",
    image: "/product-6-placeholder.jpg"
  }
];

export default function ShopPage() {
  if (SHOW_COMING_SOON) {
    return <ComingSoon title="Paragon Shop" />;
  }

  return (
    <div className="flex flex-col w-full min-h-screen pt-20 overflow-hidden">
      {/* Hero */}
      <section className="bg-bg-dark py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill=\'none\' stroke=\'%23ffffff\' stroke-opacity=\'0.2\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '60px 60px' }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          <SectionHeading
            centered
            inverted
            title="Paragon Official Shop"
            description="Wear the brand. Support the ecosystem. Get high-quality merchandise designed for innovators, learners, and enterprise builders."
          />
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-surface flex-grow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="flex justify-between items-end mb-12">
            <div className="flex flex-wrap gap-3">
              {["All Items", "Apparel", "Accessories", "Stationery"].map((filter) => (
                <button key={filter} className="px-5 py-2 rounded-full text-sm font-medium bg-white border border-border hover:border-accent-blue hover:text-accent-blue transition-colors text-foreground">
                  {filter}
                </button>
              ))}
            </div>
            <div className="hidden sm:block text-sm text-muted-foreground font-medium">
              Showing {products.length} products
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all group flex flex-col h-full">
                  <div className="relative h-64 bg-gray-100 flex items-center justify-center p-8">
                    {/* Placeholder for product image */}
                    <div className="w-32 h-32 border-4 border-dashed border-gray-300 rounded-full flex items-center justify-center text-gray-400 font-bold group-hover:scale-105 transition-transform duration-300">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {product.category}
                      </span>
                      <span className="font-bold text-accent-blue text-lg">{product.price}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-6">
                      {product.name}
                    </h3>
                    
                    <Button className="w-full mt-auto bg-foreground hover:bg-foreground/90 text-white font-semibold rounded-full py-6 group-hover:bg-accent-blue transition-colors">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-16 bg-bg-dark rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-8 text-white">
             <div>
               <h3 className="text-2xl font-bold mb-2">Bulk Orders for Partners</h3>
               <p className="text-white/70 max-w-md">Looking to order merchandise for your entire cohort, event, or team? We offer partner discounts on bulk orders.</p>
             </div>
             <Button className="bg-white text-bg-dark hover:bg-gray-100 font-semibold rounded-full px-8 py-6 shrink-0">
               Contact Sales
             </Button>
          </div>

        </div>
      </section>
    </div>
  );
}
