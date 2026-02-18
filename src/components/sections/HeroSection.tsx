"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMagnetic } from "@/hooks/useMagnetic";

export default function HeroSection() {
    const container = useRef<HTMLElement>(null);
    const title = useRef<HTMLHeadingElement>(null);
    const subtitle = useRef<HTMLParagraphElement>(null);
    const ctaWrapper = useRef<HTMLDivElement>(null);
    const magneticRef = useMagnetic(0.3) as React.MutableRefObject<HTMLAnchorElement>;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let split: SplitType;
        if (title.current) {
            split = new SplitType(title.current, { types: 'chars,words', tagName: 'span' });

            const tl = gsap.timeline();

            tl.from(split.chars, {
                yPercent: 100,
                opacity: 0,
                rotateX: 45,
                stagger: 0.02,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.2
            })
                .from(subtitle.current, {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.8")
                .from(ctaWrapper.current, {
                    y: 20,
                    opacity: 0,
                    scale: 0.9,
                    duration: 1,
                    ease: "elastic.out(1, 0.5)"
                }, "-=0.8");
        }

        if (container.current) {
            gsap.to(container.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }

        return () => {
            if (split) split.revert();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section ref={container} className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent z-0 pointer-events-none opacity-80" />

            <h1 ref={title} className="text-[#EAE7E1] font-serif text-[12vw] leading-[0.85] tracking-tighter z-10 selection:bg-primary/30 mix-blend-difference">
                Crafted for <br />
                <span className="text-primary italic font-light">Timeless</span> Living
            </h1>

            <p ref={subtitle} className="mt-8 text-lg md:text-xl text-muted-foreground max-w-lg z-10 font-light tracking-wide">
                Precision engineering meets organic beauty. <br className="hidden md:block" />
                Experience the art of woodworking revealed.
            </p>

            <div ref={ctaWrapper} className="mt-12 z-10">
                <Link href="/shop" ref={magneticRef} className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#EAE7E1] text-[#0f0f0f] rounded-full text-lg font-medium tracking-wide hover:bg-white transition-all overflow-hidden">
                    <span className="relative z-10">Explore Collection</span>
                    <span className="relative z-10 w-8 h-8 rounded-full bg-[#0f0f0f] text-[#EAE7E1] flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                        <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </span>
                </Link>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground text-[10px] uppercase tracking-[0.2em] animate-pulse z-10">
                Scroll to Reveal
            </div>
        </section>
    );
}
