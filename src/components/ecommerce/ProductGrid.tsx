"use client";
import React, { useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import { useCart } from "./CartProvider";
import { products } from "@/lib/products";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProductGrid() {
    const { addToCart } = useCart();
    const container = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (!container.current) return;

        const cards = container.current.querySelectorAll('.product-card');
        gsap.from(cards, {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%"
            }
        });
    }, []);

    return (
        <section ref={container} className="py-24 px-6 bg-[#0f0f0f] border-t border-white/5">
            <div className="container mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-[#EAE7E1] mb-4">Curated Collection</h2>
                    <p className="text-muted-foreground">Pieces designed to anchor your space.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {products.map((product) => (
                        <div key={product.id} className="product-card group cursor-pointer">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-[#161616]">
                                {/* Using img tag to bypass next/image config for demo URLs */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Quick Add Overlay */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(product);
                                        }}
                                        className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100 shadow-lg"
                                        aria-label="Add to cart"
                                    >
                                        <Plus className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-medium text-[#EAE7E1] mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                                    <p className="text-sm text-muted-foreground">{product.category}</p>
                                </div>
                                <span className="text-[#EAE7E1] font-serif text-lg">${product.price.toLocaleString()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
