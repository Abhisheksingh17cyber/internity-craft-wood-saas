import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0f0f0f] border-t border-white/5 pt-20 pb-10 px-6 mt-20 relative z-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-2 space-y-6">
                    <h2 className="text-3xl font-serif tracking-tighter text-[#EAE7E1]">INTERNITY-WOODS</h2>
                    <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                        Crafting timeless furniture from sustainable sources. Where nature meets precision engineering to reveal the soul of the wood.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Link href="#" className="p-2 rounded-full border border-white/10 hover:border-primary hover:text-primary transition-colors duration-300"><Instagram className="w-4 h-4" /></Link>
                        <Link href="#" className="p-2 rounded-full border border-white/10 hover:border-primary hover:text-primary transition-colors duration-300"><Twitter className="w-4 h-4" /></Link>
                        <Link href="#" className="p-2 rounded-full border border-white/10 hover:border-primary hover:text-primary transition-colors duration-300"><Facebook className="w-4 h-4" /></Link>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="font-serif text-lg tracking-wide text-[#EAE7E1]">Collection</h3>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                        <li><Link href="/shop/living" className="hover:text-primary transition-colors block w-fit">Living Room</Link></li>
                        <li><Link href="/shop/bedroom" className="hover:text-primary transition-colors block w-fit">Bedroom</Link></li>
                        <li><Link href="/shop/dining" className="hover:text-primary transition-colors block w-fit">Dining</Link></li>
                        <li><Link href="/shop/workspace" className="hover:text-primary transition-colors block w-fit">Workspace</Link></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h3 className="font-serif text-lg tracking-wide text-[#EAE7E1]">Company</h3>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                        <li><Link href="/about" className="hover:text-primary transition-colors block w-fit">Our Story</Link></li>
                        <li><Link href="/sustainability" className="hover:text-primary transition-colors block w-fit">Sustainability</Link></li>
                        <li><Link href="/careers" className="hover:text-primary transition-colors block w-fit">Careers</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors block w-fit">Contact Us</Link></li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
                <p>© {new Date().getFullYear()} INTERNITY-WOODS. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
