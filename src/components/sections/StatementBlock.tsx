"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StatementBlock() {
    const container = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (!textRef.current) return;

        gsap.from(textRef.current, {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });
    }, []);

    return (
        <section ref={container} className="py-40 px-6 bg-[#0f0f0f] text-center flex flex-col items-center justify-center border-t border-white/5 relative overflow-hidden">
            {/* Subtle texture or grain */}
            <div className="absolute inset-0 bg-[url('/textures/wood-grain.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

            <h2 ref={textRef} className="text-5xl md:text-7xl lg:text-9xl font-serif text-[#EAE7E1] leading-none tracking-tighter max-w-6xl mix-blend-difference selection:bg-primary/30 z-10">
                Wood is not built. <br />
                <span className="text-primary italic font-light opacity-90">It is revealed.</span>
            </h2>
        </section>
    )
}
