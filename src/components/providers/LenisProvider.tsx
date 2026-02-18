"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { initSmoothScroll } from "@/lib/smooth-scroll";

type LenisContextType = {
    lenis: Lenis | null;
};

const LenisContext = createContext<LenisContextType>({
    lenis: null,
});

export const useLenisContext = () => useContext(LenisContext);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        const lenisInstance = initSmoothScroll();
        setLenis(lenisInstance);

        return () => {
            lenisInstance.destroy();
            setLenis(null);
        };
    }, []);

    return (
        <LenisContext.Provider value={{ lenis }}>
            {children}
        </LenisContext.Provider>
    );
};
