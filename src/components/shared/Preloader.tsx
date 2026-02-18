"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLenis } from "@/hooks/useLenis";

export default function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const [complete, setComplete] = useState(false);
    const { lenis } = useLenis();

    useEffect(() => {
        if (lenis) lenis.stop();
    }, [lenis]);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setComplete(true);
                if (lenis) lenis.start();
            }
        });

        const text = textRef.current;
        const container = containerRef.current;

        if (text && container) {
            tl.to(text, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.2
            })
                .to(text, {
                    scale: 1.1,
                    duration: 1.5, // slightly longer for subtle zoom
                    ease: "power2.inOut"
                }, "<")
                .to(container, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power4.inOut",
                    delay: 0.5 // hold for a moment
                });
        }

        return () => {
            tl.kill();
        };
    }, [lenis]);

    if (complete) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0f0f0f] text-[#EAE7E1]"
        >
            <h1
                ref={textRef}
                className="text-4xl md:text-6xl lg:text-8xl font-serif font-light tracking-tighter opacity-0 translate-y-10"
            >
                INTERNITY-WOODS
            </h1>
        </div>
    );
}
