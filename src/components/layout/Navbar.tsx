"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLenis } from "@/hooks/useLenis";
import { useCart } from "@/components/ecommerce/CartProvider";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { lenis } = useLenis();
    const { cartCount, toggleCart } = useCart();

    useEffect(() => {
        if (!lenis) return;
        const handleScroll = () => {
            setIsScrolled(lenis.scroll > 50);
        };
        lenis.on('scroll', handleScroll);
        return () => {
            lenis.off('scroll', handleScroll);
        };
    }, [lenis]);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-[50] flex items-center justify-between px-6 py-6 transition-all duration-500",
            isScrolled ? "bg-[#0f0f0f]/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent"
        )}>
            <Link href="/" className="text-2xl md:text-3xl font-serif font-bold tracking-tighter text-[#EAE7E1] hover:text-primary transition-colors z-50">
                INTERNITY
                <span className="text-primary font-light italic ml-1 text-xl md:text-2xl">WOODS</span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-muted-foreground">
                <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
                <Link href="/sustainability" className="hover:text-primary transition-colors">Sustainability</Link>
                <Link href="/processes" className="hover:text-primary transition-colors">Our Process</Link>
                <Link href="/about" className="hover:text-primary transition-colors">Story</Link>
            </div>

            <div className="flex items-center gap-6 z-50">
                <button className="hover:text-primary transition-colors">
                    <Search className="w-5 h-5" />
                </button>
                <button onClick={toggleCart} className="relative group hover:text-primary transition-colors">
                    <span className="sr-only">Cart</span>
                    <ShoppingBag className="w-5 h-5" />
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-primary text-[10px] text-black font-bold">
                            {cartCount}
                        </span>
                    )}
                </button>
                <button className="md:hidden hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-[#0f0f0f] z-40 flex flex-col items-center justify-center gap-8 text-3xl font-serif transition-transform duration-500 ease-in-out md:hidden",
                mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
                <Link href="/sustainability" onClick={() => setMobileMenuOpen(false)}>Sustainability</Link>
                <Link href="/processes" onClick={() => setMobileMenuOpen(false)}>Our Process</Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)}>Story</Link>
            </div>
        </nav>
    );
}
