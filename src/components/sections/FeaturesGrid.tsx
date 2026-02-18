"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
    { title: "Bespoke Design", desc: "Tailored to your exact space requirements." },
    { title: "Virtual Studio", desc: "3D configure your piece in real-time." },
    { title: "White Glove", desc: "Delivery and assembly by our experts." },
    { title: "Restoration", desc: "Lifecycle care for your investment." }
];

export default function FeaturesGrid() {
    const container = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (!container.current) return;

        // Select all cards using class selector within container scope is safer if multiple grids
        const cards = container.current.querySelectorAll('.feature-card');

        gsap.from(cards, {
            y: 60,
            opacity: 0,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
            }
        });
    }, []);

    return (
        <section ref={container} className="py-24 px-6 bg-[#0f0f0f] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <h2 className="text-3xl md:text-5xl font-serif text-[#EAE7E1]">Services & Experience</h2>
                    <Link href="/features" className="text-primary flex items-center gap-2 hover:underline underline-offset-4 text-sm tracking-widest uppercase mb-2 md:mb-0">
                        View All Services <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((s, i) => (
                        <div key={i} className="feature-card group relative p-8 md:p-12 bg-[#161616] rounded-3xl overflow-hidden hover:bg-[#1a1a1a] transition-colors border border-transparent hover:border-primary/20">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors text-[#EAE7E1]">{s.title}</h3>
                                <p className="text-muted-foreground max-w-sm ml-auto md:ml-0">{s.desc}</p>
                            </div>

                            <div className="absolute bottom-6 right-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                <div className="w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
