"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";

export default function CTASection() {
    const magneticRef = useMagnetic(0.5) as React.MutableRefObject<HTMLAnchorElement>;

    return (
        <section className="py-32 px-6 bg-[#0f0f0f] flex flex-col items-center justify-center border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

            <h2 className="text-4xl md:text-6xl font-serif text-[#EAE7E1] mb-12 text-center max-w-3xl leading-tight">
                Ready to transform your sanctuary?
            </h2>

            <Link href="/shop" ref={magneticRef} className="group relative inline-flex items-center gap-4 px-12 py-6 bg-[#EAE7E1] text-[#0f0f0f] rounded-full text-xl font-medium tracking-wide hover:bg-white transition-all overflow-hidden z-10">
                <span className="relative z-10">Begin Your Journey</span>
                <span className="relative z-10 w-10 h-10 rounded-full bg-[#0f0f0f] text-[#EAE7E1] flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </span>
            </Link>
        </section>
    );
}
