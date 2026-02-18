"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
    { id: "01", title: "Forest Selection", desc: "Sourcing premium timber from sustainable reserves." },
    { id: "02", title: "Precision Cutting", desc: "CNC milling meets artisan hand-sawing." },
    { id: "03", title: "Sanding & Polish", desc: "Smoothing the grain to reveal natural patterns." },
    { id: "04", title: "Master Assembly", desc: "Joinery that requires no nails, just gravity and friction." },
    { id: "05", title: "Final Reveal", desc: "The finished piece, ready for your home." },
];

export default function ProcessSection() {
    const container = useRef<HTMLElement>(null);
    const track = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            if (container.current && track.current) {
                const panels = steps.length;

                // Horizontal scrolling animation
                gsap.to(track.current, {
                    xPercent: -100 * (panels - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: container.current,
                        pin: true,
                        scrub: 1,
                        snap: 1 / (panels - 1),
                        start: "top top",
                        // Extend scroll duration: width of all panels combined minus one screen
                        end: () => "+=" + (container.current!.offsetWidth * (panels - 1)),
                        anticipatePin: 1,
                        invalidateOnRefresh: true, // Recalculate on resize
                    }
                });
            }
        }, container); // Scope to container

        return () => ctx.revert(); // Cleanup on unmount
    }, []);

    return (
        <section ref={container} className="relative h-screen bg-[#0f0f0f] overflow-hidden border-t border-white/5">
            <div ref={track} className="flex h-full w-[500%] will-change-transform">
                {steps.map((step, i) => (
                    <div key={i} className="w-screen h-full flex flex-col justify-center px-8 md:px-24 border-r border-white/5 relative shrink-0">
                        {/* Huge Number BG */}
                        <div className="absolute top-24 right-8 md:right-32 text-[25vw] leading-none font-bold text-white/[0.03] select-none pointer-events-none font-serif">
                            {step.id}
                        </div>

                        <div className="relative z-10 max-w-xl p-8 backdrop-blur-sm rounded-xl">
                            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-6 block">Phase {step.id}</span>
                            <h2 className="text-5xl md:text-7xl font-serif text-[#EAE7E1] mb-8 leading-tight">{step.title}</h2>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-12 left-12 flex gap-4 text-sm text-muted-foreground z-20 font-mono">
                <span>SCROLL TO EXPLORE {steps.length} STEPS</span>
                <span className="animate-bounce">↓</span>
            </div>
        </section>
    );
}
