"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Only show on devices with fine pointer (mouse)
        if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        // Center initial position off-screen or center?
        // Often better to start hidden until first mouse move
        gsap.set([cursor, follower], { xPercent: -50, yPercent: -50, opacity: 0 });

        const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power2.out" });
        const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power2.out" });

        const xToFollower = gsap.quickTo(follower, "x", { duration: 0.3, ease: "power2.out" });
        const yToFollower = gsap.quickTo(follower, "y", { duration: 0.3, ease: "power2.out" });

        const handleMouseMove = (e: MouseEvent) => {
            // Reveal on first move
            gsap.to([cursor, follower], { opacity: 1, duration: 0.2, overwrite: "auto" });

            xToCursor(e.clientX);
            yToCursor(e.clientY);
            xToFollower(e.clientX);
            yToFollower(e.clientY);

            const target = e.target as HTMLElement;
            const isInteractive = target.closest('a, button, input, textarea, [data-cursor="hover"], [role="button"]');
            setIsHovering(!!isInteractive);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const follower = followerRef.current;
        if (follower) {
            gsap.to(follower, {
                scale: isHovering ? 2.5 : 1,
                opacity: isHovering ? 0.7 : 1,
                borderWidth: isHovering ? "1px" : "1px",
                duration: 0.3,
                ease: "power2.out"
            });
        }
    }, [isHovering]);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-10 h-10 border border-primary/60 rounded-full pointer-events-none z-[9998] mix-blend-difference hidden md:block will-change-transform"
            />
        </>
    );
}
