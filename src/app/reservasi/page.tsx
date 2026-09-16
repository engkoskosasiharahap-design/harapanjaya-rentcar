import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservasiSection from '@/components/ReservasiSection';

export const metadata = {
  title: 'Harapan Jaya Rent Car — Rental Mobil Medan & Deli Serdang',
  description: 'Rental mobil terpercaya di Medan dan Deli Serdang. Armada lengkap Toyota Avanza, Innova, Fortuner, Honda Brio mulai Rp350.000/hari. Antar-jemput Bandara Kualanamu.',
};

export default function ReservasiPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#F5F3EE', color: '#0F1923' }}>
      <Header />
      <ReservasiSection />
      <Footer />
    </main>
  );
}
