"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

const reviews = [
    { text: "Normally I don't write reviews, but this bed frame is simply art. The joinery is invisible.", author: "Sarah Mitchell" },
    { text: "The wood feels alive. It's transformed our entire bedroom atmosphere.", author: "David Chen" }
];

export default function Testimonials() {
    const container = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (!container.current) return;

        // Use a slight delay to ensure hydration
        const cards = container.current.querySelectorAll('.review-card');
        gsap.from(cards, {
            y: 40,
            opacity: 0,
            stagger: 0.3,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%"
            }
        });
    }, []);

    return (
        <section ref={container} className="py-32 px-6 bg-[#0f0f0f] relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {reviews.map((r, i) => (
                        <div key={i} className="review-card flex flex-col gap-6 p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative">
                            <Quote className="w-12 h-12 text-primary opacity-50 absolute -top-4 -left-4 bg-[#0f0f0f] p-2 rounded-full" />
                            <p className="text-2xl md:text-3xl font-serif text-[#EAE7E1] leading-relaxed italic">"{r.text}"</p>
                            <div className="mt-auto pt-6 border-t border-white/10">
                                <span className="text-sm tracking-widest uppercase text-muted-foreground">— {r.author}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
