'use client';
import React, { useState, useEffect } from 'react';


const WA_ICON = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'nav-glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0">
            <img
              alt="Logo"
              width={56}
              height={56}
              src="https://harapanjayarentcar-xe3024.public.builtwithrocket.new/_next/image?url=%2Fassets%2Fimages%2FGemini_Generated_Image_n95pnxn95pnxn95p-1788926777567.jpg&w=96&q=85"
              className="flex-shrink-0 rounded-full"
            />
          </div>
          <span className="font-bold text-xl text-white leading-tight tracking-tight">
            HARAPAN JAYA<br />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Rent Car</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#armada" className="text-white/80 hover:text-accent transition-colors text-sm font-medium tracking-wide">Armada</a>
          <a href="/#layanan" className="text-white/80 hover:text-accent transition-colors text-sm font-medium tracking-wide">Layanan</a>
          <a href="/#keunggulan" className="text-white/80 hover:text-accent transition-colors text-sm font-medium tracking-wide">Keunggulan</a>
          <a href="/#kontak" className="text-white/80 hover:text-accent transition-colors text-sm font-medium tracking-wide">Kontak</a>
          <a href="/reservasi" className="text-white/80 hover:text-accent transition-colors text-sm font-medium tracking-wide">Reservasi</a>
        </nav>

        {/* CTA Button */}
        <a
          href="/reservasi"
          className="hidden md:flex items-center gap-2 whatsapp-btn text-white px-5 py-2.5 rounded-full text-sm font-semibold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="text-white">
            <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
          </svg>
          Reservasi
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Buka menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={24} height={24}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden nav-glass border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col gap-4">
            <a href="/#armada" className="text-white/80 hover:text-accent transition-colors text-sm font-medium" onClick={() => setMobileOpen(false)}>Armada</a>
            <a href="/#layanan" className="text-white/80 hover:text-accent transition-colors text-sm font-medium" onClick={() => setMobileOpen(false)}>Layanan</a>
            <a href="/#keunggulan" className="text-white/80 hover:text-accent transition-colors text-sm font-medium" onClick={() => setMobileOpen(false)}>Keunggulan</a>
            <a href="/#kontak" className="text-white/80 hover:text-accent transition-colors text-sm font-medium" onClick={() => setMobileOpen(false)}>Kontak</a>
            <a href="/reservasi" className="text-white/80 hover:text-accent transition-colors text-sm font-medium" onClick={() => setMobileOpen(false)}>Reservasi</a>
            <a href="/reservasi" className="whatsapp-btn inline-flex items-center justify-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold w-fit">Reservasi</a>
          </nav>
        </div>
      )}
    </header>
  );
}
