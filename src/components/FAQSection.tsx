'use client';
import React, { useState, useEffect, useRef } from 'react';

interface FAQItem {
  question: string;
  content: React.ReactNode;
}

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
      style={{ opacity: 0, transform: 'translateY(2rem)', transition: `opacity 0.7s ${delay}ms, transform 0.7s ${delay}ms` }}>
      {children}
    </div>
  );
}

function AccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <AnimatedSection delay={index * 80}>
      <div className="border border-border rounded-2xl overflow-hidden mb-4 bg-card shadow-sm">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-secondary/50 transition-colors"
          aria-expanded={open}>
          <span className="font-bold text-foreground text-base leading-snug">{item.question}</span>
          <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={16} height={16} className="text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
        {open && (
          <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
            {item.content}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

const faqItems: FAQItem[] = [
  {
    question: 'Bagaimana dengan layanan kami?',
    content: (
      <div>
        <p className="mb-3">Harapan Jaya Rent Car Medan menyediakan layanan rental kendaraan yang aman, nyaman, transparan, dan terpercaya.</p>
        <p className="font-semibold text-foreground mb-2">Kami menyediakan:</p>
        <ul className="space-y-2">
          {[
            'Kendaraan terawat dan bersih',
            'Driver profesional (opsional)',
            'Layanan antar-jemput bandara, hotel, dan lokasi yang disepakati',
            'Harga transparan tanpa biaya tersembunyi',
            'Pelayanan cepat, ramah, dan responsif',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" width={11} height={11} className="text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-medium text-primary">Kepuasan dan kenyamanan pelanggan adalah prioritas kami.</p>
      </div>
    ),
  },
  {
    question: 'Bagaimana dengan proses penyewaannya?',
    content: (
      <div>
        <ol className="space-y-4">
          {[
            {
              step: '1',
              title: 'Pilih kendaraan & tanggal sewa',
              desc: 'Tentukan jenis mobil sesuai kebutuhan dan jadwal perjalanan Anda.',
            },
            {
              step: '2',
              title: 'Lakukan DP Booking',
              desc: null,
              list: ['Tamu luar kota: Rp100.000', 'Tamu lokal/dalam kota: 50% dari total biaya sewa'],
            },
            {
              step: '3',
              title: 'Lengkapi persyaratan penyewa',
              desc: 'Persyaratan disesuaikan dengan ketentuan yang berlaku.',
            },
            {
              step: '4',
              title: 'Pelunasan',
              desc: 'Pelunasan dilakukan saat serah terima kendaraan melalui tunai/transfer.',
            },
            {
              step: '5',
              title: 'Kendaraan diantar',
              desc: 'Kendaraan diantar sesuai jadwal dan lokasi yang telah disepakati.',
            },
          ].map((item) => (
            <li key={item.step} className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                {item.step}
              </span>
              <div>
                <p className="font-semibold text-foreground">{item.title}</p>
                {item.desc && <p className="mt-0.5">{item.desc}</p>}
                {item.list && (
                  <ul className="mt-1 space-y-1">
                    {item.list.map((l) => (
                      <li key={l} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-shrink-0"></span>
                        {l}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-4 bg-accent/10 border border-accent/30 rounded-xl px-4 py-3 flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={18} height={18} className="text-accent flex-shrink-0 mt-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
          <p className="text-sm font-medium text-foreground">Saran: lakukan booking minimal <strong>H-3</strong> agar kendaraan yang diinginkan dapat kami persiapkan.</p>
        </div>
      </div>
    ),
  },
  {
    question: 'Bagaimana persyaratan lepas kunci mobil?',
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-secondary rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={14} height={14} className="text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
            </span>
            <p className="font-bold text-foreground text-sm">Tamu Luar Kota / Wisatawan</p>
          </div>
          <ul className="space-y-2">
            {['Foto KTP & KK', 'SIM A yang masih aktif', 'Tiket pesawat PP', 'Akun media sosial aktif'].map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" width={9} height={9} className="text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                {req}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-secondary rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={14} height={14} className="text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </span>
            <p className="font-bold text-foreground text-sm">Tamu Lokal / Dalam Kota</p>
          </div>
          <ul className="space-y-2">
            {['Foto KTP & KK', 'SIM A yang masih aktif', 'Titip motor + STNK asli sebagai jaminan', 'Share location rumah', 'Akun media sosial aktif'].map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" width={9} height={9} className="text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                {req}
              </li>
            ))}
          </ul>
        </div>
        <p className="sm:col-span-2 text-xs text-muted-foreground italic">Seluruh persyaratan digunakan untuk proses verifikasi dan keamanan transaksi sewa.</p>
      </div>
    ),
  },
  {
    question: 'Apakah ada biaya overtime?',
    content: (
      <div>
        <p className="mb-4">Ya, berlaku ketentuan overtime:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-secondary rounded-xl p-4 border border-border">
            <p className="font-bold text-foreground mb-1">Terlambat 1–5 jam</p>
            <p className="text-accent font-semibold text-lg">+10% per jam</p>
            <p className="text-xs text-muted-foreground mt-1">Dikenakan tambahan 10% per jam dari harga sewa harian.</p>
          </div>
          <div className="bg-secondary rounded-xl p-4 border border-border">
            <p className="font-bold text-foreground mb-1">Terlambat lebih dari 5 jam</p>
            <p className="text-accent font-semibold text-lg">1 Hari Penuh</p>
            <p className="text-xs text-muted-foreground mt-1">Dihitung sebagai sewa 1 hari penuh.</p>
          </div>
        </div>
        <div className="bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={18} height={18} className="text-primary flex-shrink-0 mt-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <p className="text-sm text-foreground">Durasi normal 1 hari sewa = <strong>24 jam</strong> sejak kendaraan diantarkan kepada penyewa.</p>
        </div>
      </div>
    ),
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-bold tracking-widest uppercase mb-3 block">Informasi Penting</span>
            <h2 className="text-section-title font-extrabold text-foreground mb-4">
              Pertanyaan yang Sering <span className="text-primary">Ditanyakan</span>
            </h2>
            <div className="section-divider mx-auto mb-5"></div>
            <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
              Temukan jawaban atas pertanyaan umum seputar layanan, proses sewa, persyaratan, dan ketentuan kami.
            </p>
          </div>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <div>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} item={item} index={index} />
          ))}
        </div>

        {/* Closing Promo Banner */}
        <AnimatedSection delay={400}>
          <div className="mt-12 rounded-3xl overflow-hidden bg-primary relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white transform -translate-x-12 translate-y-12"></div>
            </div>
            <div className="relative px-8 py-10 text-center">
              <span className="text-accent text-xs font-bold tracking-widest uppercase mb-3 block">Liburan di Medan?</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                Anda Ingin Liburan di Medan?
              </h3>
              <p className="text-white/80 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
                Harapan Jaya Rent Car Medan siap menemani perjalanan Anda! Nikmati perjalanan di Medan dan sekitarnya dengan pilihan:
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  'Rental mobil lepas kunci',
                  'Rental mobil dengan driver',
                  'Antar-jemput bandara / hotel / rumah',
                  'Wisata dalam & luar kota',
                ].map((item) => (
                  <span key={item} className="bg-white/10 border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" width={12} height={12} className="text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-white/60 text-xs mb-6 italic">Booking lebih awal agar kendaraan pilihan Anda tetap tersedia.</p>
              <a
                href="https://wa.me/6208218076998?text=Halo,%20saya%20ingin%20booking%20rental%20mobil%20di%20Harapan%20Jaya%20Rent%20Car%20Medan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-sm shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Booking Sekarang via WhatsApp
              </a>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white font-bold text-base">HARAPAN JAYA RENT CAR MEDAN</p>
                <p className="text-accent text-sm italic mt-1">"Solusi Rental Mobil Terbaik untuk Perjalanan Anda di Medan."</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
