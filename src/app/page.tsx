import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ArmadaSection from '@/components/ArmadaSection';
import LayananSection from '@/components/LayananSection';
import KeunggulanSection from '@/components/KeunggulanSection';
import KontakSection from '@/components/KontakSection';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#F5F3EE', color: '#0F1923' }}>
      <Header />
      <HeroSection />
      <ArmadaSection />
      <LayananSection />
      <KeunggulanSection />
      <FAQSection />
      <KontakSection />
      <Footer />
    </main>
  );
}
