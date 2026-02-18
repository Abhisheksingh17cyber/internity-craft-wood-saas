"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const features = [
    { title: "Sustainable Sourcing", desc: "Ethically harvested timber from certified forests." },
    { title: "Precision CNC", desc: "Computer-controlled milling for micron-level accuracy." },
    { title: "AI Optimization", desc: "Generative design minimizes waste and maximizes strength." },
    { title: "Lifetime Guarantee", desc: "Built to last generations, backed by our promise." }
];

export default function SaaSBlock() {
    const container = useRef<HTMLElement>(null);
    const title = useRef<HTMLHeadingElement>(null);
    const grid = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Title Reveal
        if (title.current) {
            // Need to wait for fonts or use layout effect? Usually fine in effect.
            const split = new SplitType(title.current, { types: 'words,chars', tagName: 'span' });
            gsap.from(split.words, {
                opacity: 0,
                y: 50,
                stagger: 0.05,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: title.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }

        // Grid Items Reveal
        if (grid.current) {
            // Use Array.from for HTMLCollection to avoid TS issues if needed, but gsap handles nodelist/collection
            const items = grid.current.children;
            gsap.from(items, {
                opacity: 0,
                y: 30,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: grid.current,
                    start: "top 75%",
                }
            });
        }
    }, []);

    return (
        <section ref={container} className="py-24 px-6 md:px-12 bg-[#0f0f0f] border-t border-white/5">
            <div className="container mx-auto">
                <div className="mb-16 max-w-2xl">
                    <h2 ref={title} className="text-4xl md:text-6xl font-serif leading-tight text-[#EAE7E1]">
                        Redefining Furniture <br />
                        <span className="text-muted-foreground italic font-light">Through Technology.</span>
                    </h2>
                </div>

                <div ref={grid} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, i) => (
                        <div key={i} className="p-6 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors group">
                            <div className="text-primary mb-4 text-xs font-mono uppercase tracking-widest opacity-80 group-hover:opacity-100">0{i + 1}</div>
                            <h3 className="text-xl font-medium mb-2 text-[#EAE7E1]">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
