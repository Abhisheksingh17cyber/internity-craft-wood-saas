import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import CustomCursor from "@/components/shared/CustomCursor";
import Preloader from "@/components/shared/Preloader";
import { CartProvider } from "@/components/ecommerce/CartProvider";
import CartDrawer from "@/components/ecommerce/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "INTERNITY-WOODS",
  description: "Cinematic SaaS + E-Commerce Furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30 assignment-scroll-container`}
      >
        <LenisProvider>
          <CartProvider>
            <Preloader />
            <CustomCursor />
            <CartDrawer />
            {children}
          </CartProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
