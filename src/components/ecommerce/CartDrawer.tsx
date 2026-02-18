"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "./CartProvider";
// import { cn } from "@/lib/utils"; // Not used in this snippet but good practice
import { useLenis } from "@/hooks/useLenis";

export default function CartDrawer() {
    const { cart, removeFromCart, updateQuantity, isCartOpen, toggleCart, cartTotal } = useCart();
    const drawerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const { lenis } = useLenis();

    useEffect(() => {
        if (!drawerRef.current || !overlayRef.current) return;

        if (isCartOpen) {
            lenis?.stop();
            gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, pointerEvents: "auto" });
            gsap.to(drawerRef.current, { x: "0%", duration: 0.6, ease: "power4.out" });
        } else {
            lenis?.start();
            gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, pointerEvents: "none" });
            gsap.to(drawerRef.current, { x: "100%", duration: 0.5, ease: "power4.in" });
        }
    }, [isCartOpen, lenis]);

    return (
        <>
            <div
                ref={overlayRef}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9990] opacity-0 pointer-events-none transition-opacity"
                onClick={toggleCart}
            />
            <div
                ref={drawerRef}
                className="fixed top-0 right-0 h-full w-full max-w-md bg-[#161616] z-[9991] translate-x-full shadow-2xl flex flex-col border-l border-white/5"
            >
                <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#161616]">
                    <h2 className="text-xl font-serif text-[#EAE7E1]">Your Cart ({cart.length})</h2>
                    <button onClick={toggleCart} className="p-2 hover:bg-white/5 rounded-full transition-colors group">
                        <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-50 space-y-4">
                            <span className="text-lg font-light">Your cart is empty.</span>
                            <button onClick={toggleCart} className="text-primary hover:underline underline-offset-4 text-sm">Continue Shopping</button>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="flex gap-4">
                                <div className="w-20 h-20 bg-white/5 rounded-lg overflow-hidden shrink-0 border border-white/5">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-medium text-[#EAE7E1] line-clamp-1">{item.name}</h3>
                                        <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-3">${item.price.toLocaleString()}</p>
                                    <div className="flex items-center gap-3 bg-black/20 w-fit rounded-lg p-1">
                                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-white/10 rounded transition-colors"><Minus className="w-3 h-3" /></button>
                                        <span className="text-sm font-mono w-6 text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-white/10 rounded transition-colors"><Plus className="w-3 h-3" /></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-6 border-t border-white/5 bg-[#111111]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="text-2xl font-serif text-[#EAE7E1]">${cartTotal.toLocaleString()}</span>
                    </div>
                    <button className="w-full py-4 bg-[#EAE7E1] text-[#0f0f0f] font-medium rounded-full hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
}
