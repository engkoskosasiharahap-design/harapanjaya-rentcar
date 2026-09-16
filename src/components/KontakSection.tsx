'use client';
import React, { useEffect, useRef } from 'react';

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

function ContactItem({ children, delay }: { children: React.ReactNode; delay: number }) {
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
      className="contact-item opacity-0"
      style={{ transitionDelay: `${delay}ms`, transition: 'opacity 0.7s, transform 0.7s', transform: 'translateY(2rem)' }}
    >
      {children}
    </div>
  );
}

export default function KontakSection() {
  return (
    <section id="kontak" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 blob-navy opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-widest uppercase mb-3 block">Hubungi Kami</span>
          <h2 className="text-section-title font-extrabold text-foreground mb-4">
            Kami Siap <span className="text-primary">Membantu Anda</span>
          </h2>
          <div className="section-divider mx-auto mb-5"></div>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Hubungi kami melalui WhatsApp untuk pemesanan, pertanyaan harga, atau informasi ketersediaan armada. Respon cepat dijamin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Address */}
            <ContactItem delay={0}>
              <div className="bg-card rounded-3xl p-7 border border-border shadow-sm">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22} className="text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground mb-1">Alamat Kami</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Jl. Tengku Heran (Rahayu) Gg. Family No.2<br />
                      Pasar V Kebun Kelapa, Kec. Beringin<br />
                      Kabupaten Deli Serdang<br />
                      Sumatera Utara 20552
                    </p>
                  </div>
                </div>
              </div>
            </ContactItem>

            {/* WhatsApp */}
            <ContactItem delay={80}>
              <div className="bg-card rounded-3xl p-7 border border-border shadow-sm">
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={WA_PATH} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm mb-4">Pesan langsung via WhatsApp untuk respon tercepat. Kami siap membantu 24 jam.</p>
                    <a
                      href="https://wa.me/6208218076998"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-btn inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-xl text-sm font-semibold"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d={WA_PATH} />
                      </svg>
                      Hubungi via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </ContactItem>

            {/* Hours */}
            <ContactItem delay={160}>
              <div className="bg-card rounded-3xl p-7 border border-border shadow-sm">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22} className="text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground">Jam Operasional</h3>
                    <p className="text-muted-foreground text-xs">Kami siap melayani Anda</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-sm text-foreground font-medium">Senin – Jumat</span>
                    <span className="text-sm text-primary font-semibold">07.00 – 21.00 WIB</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-sm text-foreground font-medium">Sabtu</span>
                    <span className="text-sm text-primary font-semibold">07.00 – 20.00 WIB</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-foreground font-medium">Minggu &amp; Hari Libur</span>
                    <span className="text-sm text-primary font-semibold">08.00 – 18.00 WIB</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-xl px-4 py-3" style={{ backgroundColor: 'rgba(13, 43, 85, 0.08)' }}>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
                  <span className="text-primary text-xs font-semibold">WhatsApp tersedia 24 jam untuk pemesanan darurat</span>
                </div>
              </div>
            </ContactItem>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Map */}
            <ContactItem delay={0}>
              <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm">
                <div className="relative h-64">
                  <iframe
                    src="https://www.google.com/maps?q=3.594148,98.865154&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Harapan Jaya Rent Car"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-5 border-t border-border" style={{ backgroundColor: 'rgba(13, 43, 85, 0.05)' }}>
                  <p className="text-sm text-foreground font-semibold mb-1">Jl. Tengku Heran (Rahayu) Gg. Family No.2</p>
                  <p className="text-xs text-muted-foreground">Pasar V Kebun Kelapa, Kec. Beringin, Kabupaten Deli Serdang, Sumatera Utara 20552</p>
                </div>
              </div>
            </ContactItem>

            {/* CTA Card */}
            <ContactItem delay={120}>
              <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/5 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full" style={{ backgroundColor: 'rgba(200, 146, 10, 0.2)' }}></div>
                <div className="relative z-10">
                  <div className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Pesan Sekarang</div>
                  <h3 className="font-bold text-2xl text-white mb-3 leading-tight">
                    Siap Antar Anda ke<br />
                    <span className="text-accent">Tujuan Mana Pun</span>
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Dari Medan ke Danau Toba, Berastagi, Kualanamu, atau kota lainnya di Sumatera Utara. Armada siap berangkat kapan pun Anda butuhkan.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={14} height={14} className="text-accent">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                      </svg>
                      <span className="text-white text-xs font-medium">Danau Toba</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={14} height={14} className="text-accent">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                      </svg>
                      <span className="text-white text-xs font-medium">Berastagi</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={14} height={14} className="text-accent">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                      </svg>
                      <span className="text-white text-xs font-medium">Kualanamu</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={14} height={14} className="text-accent">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                      </svg>
                      <span className="text-white text-xs font-medium">Medan Kota</span>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/6208218076998"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn flex items-center justify-center gap-2 w-full text-white py-4 px-6 rounded-2xl font-bold text-base"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={WA_PATH} />
                    </svg>
                    Pesan via WhatsApp
                  </a>
                </div>
              </div>
            </ContactItem>
          </div>
        </div>
      </div>
    </section>
  );
}
