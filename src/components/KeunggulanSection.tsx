'use client';
import React, { useEffect, useRef } from 'react';

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

interface WhyItem {
  title: string;
  stat: string;
  statLabel: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const whyItems: WhyItem[] = [
{
  title: 'Armada Terawat',
  stat: '100%',
  statLabel: 'Servis Rutin',
  description: 'Setiap kendaraan menjalani pemeriksaan rutin sebelum dan sesudah penyewaan. Servis berkala terjadwal untuk keselamatan Anda.',
  delay: 0,
  icon:
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={24} height={24} className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>

},
{
  title: 'Driver Profesional',
  stat: 'Profesional',
  statLabel: 'Semua Driver',
  description: 'Pengemudi kami berpengalaman, hafal rute Sumatera Utara, dan memiliki SIM aktif. Ramah, disiplin, dan terpercaya.',
  delay: 80,
  icon:
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={24} height={24} className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>

},
{
  title: 'Harga Terjangkau',
  stat: 'Rp300rb',
  statLabel: 'Mulai Dari',
  description: 'Tarif transparan tanpa biaya tersembunyi. Mulai Rp300.000/hari dengan armada berkualitas untuk semua kebutuhan.',
  delay: 160,
  icon:
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={24} height={24} className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
      </svg>

},
{
  title: 'Pelayanan 24 Jam',
  stat: '24/7',
  statLabel: 'Siap Membantu',
  description: 'Tim kami siap melayani pemesanan dan pertanyaan kapan saja, termasuk penanganan darurat di jalan.',
  delay: 240,
  icon:
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={24} height={24} className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>

},
{
  title: 'Booking via WhatsApp',
  stat: 'Instan',
  statLabel: 'Konfirmasi',
  description: 'Pesan langsung melalui WhatsApp. Cepat, mudah, dan konfirmasi instan tanpa perlu aplikasi tambahan.',
  delay: 320,
  icon:
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={24} height={24} className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>

}];


function WhyItem({ item }: {item: WhyItem;}) {
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
      className="why-item opacity-0 flex gap-5 bg-card rounded-2xl p-5 border border-border shadow-sm card-hover group"
      style={{ transitionDelay: `${item.delay}ms`, transition: 'opacity 0.7s, transform 0.7s', transform: 'translateY(2rem)' }}>
      
      <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
        {item.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-bold text-base text-foreground">{item.title}</h3>
          <div className="flex-shrink-0 text-right">
            <div className="text-primary font-extrabold text-sm leading-tight">{item.stat}</div>
            <div className="text-muted-foreground text-[10px] uppercase tracking-wider">{item.statLabel}</div>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>);

}

export default function KeunggulanSection() {
  return (
    <section id="keunggulan" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 blob-navy pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 blob-gold pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-widest uppercase mb-3 block">Keunggulan Kami</span>
          <h2 className="text-section-title font-extrabold text-foreground mb-4">
            Mengapa Memilih <span className="text-primary">Harapan Jaya?</span>
          </h2>
          <div className="section-divider mx-auto mb-5"></div>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Kepercayaan pelanggan adalah prioritas kami. Setiap detail layanan dirancang untuk kenyamanan dan keamanan perjalanan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Why Items */}
          <div className="lg:col-span-3 space-y-5">
            {whyItems.map((item) =>
            <WhyItem key={item.title} item={item} />
            )}
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-52">
                <img
                  alt="Driver profesional Harapan Jaya Rent Car berseragam rapi berdiri di samping mobil bersih, suasana siang cerah"
                  src="https://harapanjayarentcar-xe3024.public.builtwithrocket.new/_next/image?url=%2Fassets%2Fimages%2FGemini_Generated_Image_amc5qaamc5qaamc5-1788927434630.jpg&w=828&q=85"
                  loading="lazy"
                  className="object-cover bg-gray-200"
                  style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, objectFit: 'cover' }} />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Siap Melayani</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2">Siap Pesan Sekarang?</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Hubungi kami via WhatsApp untuk mendapatkan informasi harga terbaru, ketersediaan armada, dan konfirmasi pemesanan instan.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-accent font-extrabold text-lg">15+</div>
                    <div className="text-white/60 text-[10px] uppercase tracking-wide">Armada</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-accent font-extrabold text-lg">24/7</div>
                    <div className="text-white/60 text-[10px] uppercase tracking-wide">Layanan</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-accent font-extrabold text-lg">Free</div>
                    <div className="text-white/60 text-[10px] uppercase tracking-wide">Konsultasi</div>
                  </div>
                </div>
                <a
                  href="https://wa.me/62"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn flex items-center justify-center gap-2 w-full text-white py-3.5 px-5 rounded-xl text-sm font-semibold">
                  
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={WA_PATH} />
                  </svg>
                  Chat WhatsApp Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}