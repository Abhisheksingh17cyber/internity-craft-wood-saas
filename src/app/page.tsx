"use client";
import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SaaSBlock from '@/components/sections/SaaSBlock';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import ProcessSection from '@/components/sections/ProcessSection';
import Testimonials from '@/components/sections/Testimonials';
import StatementBlock from '@/components/sections/StatementBlock';
import CTASection from '@/components/sections/CTASection';
import ProductGrid from '@/components/ecommerce/ProductGrid';

const WoodScene = dynamic(() => import('@/components/three/WoodScene'), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0f0f0f] text-[#EAE7E1] selection:bg-primary/30 flex flex-col">
      <Navbar />
      <WoodScene />

      <HeroSection />

      <SaaSBlock />
      <FeaturesGrid />
      <ProcessSection />

      <ProductGrid />

      <Testimonials />
      <StatementBlock />
      <CTASection />

      <Footer />
    </main>
  );
}
