'use client';
import React, { useEffect, useRef } from 'react';

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
  delay: number;
}

const services: ServiceItem[] = [
{
  title: 'Rental Harian',
  description: 'Sewa mobil per hari untuk berbagai keperluan. Fleksibel, mudah, dan bisa disesuaikan dengan jadwal Anda.',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_4c24717d7-1788925908658.png',
  alt: 'Mobil rental parkir di depan hotel bintang di Medan, suasana siang terang dan cerah',
  delay: 0,
  icon:
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={20} height={20} className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
      </svg>

},
{
  title: 'Antar-Jemput Bandara Kualanamu',
  description: 'Layanan penjemputan dan pengantaran ke Bandara Internasional Kualanamu. Tepat waktu, nyaman, dan terpercaya.',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_428159a1b-1788925908258.png',
  alt: 'Bandara Kualanamu Medan tampak dari luar siang hari dengan langit cerah biru',
  delay: 80,
  icon:
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={20} height={20} className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>

},
{
  title: 'Wisata Sumatera Utara',
  description: 'Jelajahi keindahan Danau Toba, Berastagi, Sibolangit, dan destinasi wisata Sumatera Utara lainnya bersama kami.',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_4afabf914-1788925907961.png',
  alt: 'Danau Toba Sumatera Utara dengan pemandangan hijau dan air biru jernih di siang hari cerah',
  delay: 160,
  icon:
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={20} height={20} className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>

},
{
  title: 'Perjalanan Bisnis',
  description: 'Profesional dan tepat waktu untuk meeting, kunjungan klien, atau perjalanan dinas ke seluruh wilayah Sumatera.',
  image: 'https://harapanjayarentcar-xe3024.public.builtwithrocket.new/_next/image?url=%2Fassets%2Fimages%2FGemini_Generated_Image_btrq2obtrq2obtrq-1788927473233.jpg&w=828&q=85',
  alt: 'Pria berjas hitam masuk ke mobil sedan premium di parkiran gedung perkantoran modern Medan',
  delay: 240,
  icon:
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={20} height={20} className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>

},
{
  title: 'Acara Pernikahan',
  description: 'Armada premium untuk hari istimewa Anda. Dari Innova Zenix hingga Toyota Fortuner, semua tersedia untuk momen tak terlupakan.',
  image: 'https://harapanjayarentcar-xe3024.public.builtwithrocket.new/_next/image?url=%2Fassets%2Fimages%2FGemini_Generated_Image_dol9bvdol9bvdol9-1788927995850.jpg&w=828&q=85',
  alt: 'Mobil pengantin dihias bunga putih di depan gedung pernikahan mewah, suasana cerah romantis',
  delay: 320,
  icon:
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={20} height={20} className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>

}];


function ServiceCard({ item }: {item: ServiceItem;}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="service-item opacity-0 bg-card rounded-3xl overflow-hidden border border-border shadow-sm card-hover group"
      style={{ transitionDelay: `${item.delay}ms`, transition: 'opacity 0.7s, transform 0.7s', transform: 'translateY(2rem)' }}>
      
      <div className="relative h-48 overflow-hidden">
        <img
          alt={item.alt}
          src={item.image}
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105 bg-gray-200"
          style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, objectFit: 'cover' }} />
        
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4 w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
          {item.icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>);

}

export default function LayananSection() {
  return (
    <section id="layanan" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-widest uppercase mb-3 block">Layanan Kami</span>
          <h2 className="text-section-title font-extrabold text-foreground mb-4">
            Solusi Transportasi <span className="text-primary">Lengkap</span>
          </h2>
          <div className="section-divider mx-auto mb-5"></div>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Dari perjalanan harian hingga wisata panjang, kami siap melayani setiap kebutuhan transportasi Anda di Sumatera Utara.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((item) =>
          <ServiceCard key={item.title} item={item} />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2 lg:mx-0">
          {services.slice(3).map((item) =>
          <ServiceCard key={item.title} item={item} />
          )}
        </div>
      </div>
    </section>);

}