'use client';
import React, { useEffect, useRef } from 'react';

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative" style={{ width: '100%', height: '100%' }}>
          <img
            alt="Jalan raya Sumatera Utara malam hari dengan lampu kendaraan, suasana gelap dramatis cocok untuk layanan rental mobil premium"
            src="https://harapanjayarentcar-xe3024.public.builtwithrocket.new/_next/image?url=%2Fassets%2Fimages%2FGemini_Generated_Image_4ua1jy4ua1jy4ua1-1788931220751.jpg&w=1920&q=85"
            className="object-cover object-center"
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: 'cover' }} />
          
        </div>
        <div className="absolute inset-0 hero-scrim"></div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 blob-gold opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/6 w-80 h-80 blob-navy opacity-40 pointer-events-none"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-12 pt-32 pb-16 max-w-7xl mx-auto w-full">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-8 w-fit animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.1s' }}>
          
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Medan · Deli Serdang · Sumatera Utara
        </div>

        {/* Heading */}
        <h1
          className="text-hero-xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up opacity-0 max-w-4xl"
          style={{ animationDelay: '0.2s' }}>
          
          Rental Mobil{' '}
          <span className="gold-gradient">Terpercaya</span>
          <br />di Medan &amp;{' '}
          <span className="gold-gradient">Deli Serdang</span>
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-white/85 font-light leading-relaxed mb-10 max-w-2xl animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.3s' }}>
          
          Armada lengkap dan terawat untuk perjalanan bisnis, wisata Danau Toba, antar-jemput Bandara Kualanamu, hingga acara pernikahan. Mulai dari{' '}
          <span className="text-accent font-semibold">Rp300.000/hari.</span>
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.4s' }}>
          
          <a
            href="https://wa.me/6208218076998"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn inline-flex items-center justify-center gap-3 text-white px-8 py-4 rounded-full text-base font-bold shadow-xl">
            
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d={WA_PATH} />
            </svg>
            Pesan Sekarang
          </a>
          <a
            href="/reservasi"
            className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-navy-900 px-8 py-4 rounded-full text-base font-bold shadow-xl transition-all"
            style={{ color: '#0D2B55' }}>
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={20} height={20}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            Reservasi
          </a>
          <a
            href="#armada"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all">
            
            Lihat Armada
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={18} height={18}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-0 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.55s' }}>
          
          <div className="flex flex-col items-start px-6 py-5 border-r border-white/15">
            <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">15+</div>
            <div className="text-white/60 text-xs font-medium uppercase tracking-wider">Tipe Armada</div>
          </div>
          <div className="flex flex-col items-start px-6 py-5 border-r border-white/15">
            <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">24/7</div>
            <div className="text-white/60 text-xs font-medium uppercase tracking-wider">Siap Melayani</div>
          </div>
          <div className="flex flex-col items-start px-6 py-5 border-r border-white/15 mt-0">
            <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">Rp300rb</div>
            <div className="text-white/60 text-xs font-medium uppercase tracking-wider">Mulai Dari</div>
          </div>
          <div className="flex flex-col items-start px-6 py-5 mt-0">
            <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">Kualanamu</div>
            <div className="text-white/60 text-xs font-medium uppercase tracking-wider">Antar-Jemput</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-8 flex justify-center">
        <div className="flex flex-col items-center gap-2 animate-float">
          <span className="text-white/40 text-xs tracking-widest uppercase">Gulir</span>
          <div className="w-px h-10 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>);

}