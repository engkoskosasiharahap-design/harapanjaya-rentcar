'use client';
import React, { useEffect, useRef } from 'react';

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

interface CarData {
  name: string;
  image: string;
  alt: string;
  badge?: string;
  category: string;
  passengers: number;
  features: string[];
  priceWithout: string;
  priceWith: string;
  waText: string;
  vehicleId: string;
  colSpan?: boolean;
  imageHeight?: number;
  pricingType?: 'lepas-kunci' | 'dalam-luar-kota';
}

const cars: CarData[] = [
{
  name: 'New Toyota Avanza',
  image: "/assets/images/Gemini_Generated_Image_9odjka9odjka9odj-1789451934041.jpg",
  alt: 'New Toyota Avanza silver modern di jalan kota, MPV keluarga terbaru dengan desain segar',
  badge: 'Terlaris',
  category: 'MPV Keluarga',
  passengers: 7,
  features: ['Desain Terbaru', 'AC Double Blower', 'Kabin Luas'],
  priceWithout: 'Rp450.000',
  priceWith: 'Rp600.000',
  waText: 'New%20Toyota%20Avanza',
  vehicleId: 'new-avanza'
},
{
  name: 'Toyota Innova Reborn',
  image: "/assets/images/Gemini_Generated_Image_uhq2j3uhq2j3uhq2-1789448910235.jpg",
  alt: 'Toyota Innova Reborn hitam elegan di jalan tol, MPV premium diesel bertenaga untuk perjalanan jauh',
  badge: 'Populer',
  category: 'MPV Premium',
  passengers: 7,
  features: ['Mesin Diesel', 'Kabin Mewah', 'Perjalanan Jauh'],
  priceWithout: 'Rp600.000',
  priceWith: 'Rp750.000',
  waText: 'Toyota%20Innova%20Reborn',
  vehicleId: 'innova-reborn'
},
{
  name: 'Toyota Agya',
  image: "/assets/images/Gemini_Generated_Image_55frzf55frzf55fr-1789449247155.jpg",
  alt: 'Toyota Agya merah compact di jalanan kota, city car lincah dan hemat bahan bakar',
  badge: 'Termurah',
  category: 'City Car',
  passengers: 4,
  features: ['Irit BBM', 'Mudah Parkir', 'AC Dingin'],
  priceWithout: 'Rp300.000',
  priceWith: 'Rp450.000',
  waText: 'Toyota%20Agya',
  vehicleId: 'agya'
},
{
  name: 'Honda Brio',
  image: "/assets/images/Gemini_Generated_Image_n90krun90krun90k-1789450358226.jpg",
  alt: 'Honda Brio merah compact di jalanan kota, city car lincah dan hemat bahan bakar untuk dalam kota',
  badge: 'Termurah',
  category: 'City Car',
  passengers: 4,
  features: ['Irit BBM', 'Mudah Parkir', 'AC Dingin'],
  priceWithout: 'Rp350.000',
  priceWith: 'Rp500.000',
  waText: 'Honda%20Brio',
  vehicleId: 'brio'
},
{
  name: 'Toyota Avanza Facelift',
  image: "/assets/images/Gemini_Generated_Image_nrucfunrucfunruc-1789450239478.jpg",
  alt: 'Toyota Avanza Facelift silver parkir di jalanan kota cerah siang hari, MPV populer untuk keluarga',
  category: 'MPV Keluarga',
  passengers: 7,
  features: ['AC Double Blower', 'Audio System', 'Power Steering'],
  priceWithout: 'Rp350.000',
  priceWith: 'Rp500.000',
  waText: 'Toyota%20Avanza%20Facelift',
  vehicleId: 'avanza-facelift'
},
{
  name: 'Honda Mobilio',
  image: "/assets/images/Gemini_Generated_Image_79i47879i47879i4-1789450317368.jpg",
  alt: 'Honda Mobilio putih di jalan kota, MPV 7 penumpang nyaman dan hemat bahan bakar',
  category: 'MPV Keluarga',
  passengers: 7,
  features: ['7 Penumpang', 'Irit BBM', 'Kabin Lega'],
  priceWithout: 'Rp350.000',
  priceWith: 'Rp500.000',
  waText: 'Honda%20Mobilio',
  vehicleId: 'mobilio'
},
{
  name: 'Honda BRV',
  image: "/assets/images/Gemini_Generated_Image_5r7l3k5r7l3k5r7l-1789449057666.jpg",
  alt: 'Honda BRV putih modern di jalan kota, SUV kompak nyaman untuk keluarga',
  badge: 'Populer',
  category: 'SUV Kompak',
  passengers: 7,
  features: ['Kabin Lega', 'AC Double Blower', 'Sporty Design'],
  priceWithout: 'Rp450.000',
  priceWith: 'Rp600.000',
  waText: 'Honda%20BRV',
  vehicleId: 'brv'
},
{
  name: 'New Daihatsu Xenia',
  image: "/assets/images/Gemini_Generated_Image_9833va9833va9833-1789449325566.jpg",
  alt: 'Daihatsu New Xenia silver parkir di jalanan kota cerah, MPV keluarga modern dan nyaman',
  category: 'MPV Keluarga',
  passengers: 7,
  features: ['Desain Modern', 'Kabin Luas', 'Irit BBM'],
  priceWithout: 'Rp450.000',
  priceWith: 'Rp600.000',
  waText: 'New%20Daihatsu%20Xenia',
  vehicleId: 'xenia'
},
{
  name: 'Daihatsu Terios',
  image: "/assets/images/Gemini_Generated_Image_2yuc9d2yuc9d2yuc-1789449405163.jpg",
  alt: 'Daihatsu Terios abu-abu di jalan pegunungan, SUV tangguh untuk medan berbukit Sumatera Utara',
  category: 'SUV Kompak',
  passengers: 7,
  features: ['Ground Clearance Tinggi', 'Tangguh Segala Medan', 'AC Dingin'],
  priceWithout: 'Rp450.000',
  priceWith: 'Rp600.000',
  waText: 'Daihatsu%20Terios',
  vehicleId: 'terios'
},
{
  name: 'Daihatsu Rocky',
  image: "/assets/images/Gemini_Generated_Image_evb43tevb43tevb4-1789449917096.jpg",
  alt: 'Daihatsu Rocky putih modern di jalan kota, SUV compact stylish dengan teknologi terkini',
  badge: 'Terbaru',
  category: 'SUV Compact',
  passengers: 5,
  features: ['Teknologi Modern', 'Desain Sporty', 'Kabin Nyaman'],
  priceWithout: 'Rp450.000',
  priceWith: 'Rp600.000',
  waText: 'Daihatsu%20Rocky',
  vehicleId: 'rocky'
},
{
  name: 'Suzuki XL7',
  image: "/assets/images/Gemini_Generated_Image_voee1hvoee1hvoee-1789450150038.jpg",
  alt: 'Suzuki XL7 hitam elegan di jalan tol, MPV premium 7 penumpang untuk perjalanan jauh',
  category: 'MPV Premium',
  passengers: 7,
  features: ['Kabin Luas', 'Entertainment System', 'Mesin Bertenaga'],
  priceWithout: 'Rp450.000',
  priceWith: 'Rp600.000',
  waText: 'Suzuki%20XL7',
  vehicleId: 'xl7'
},
{
  name: 'Toyota Rush',
  image: "/assets/images/Gemini_Generated_Image_1qksu31qksu31qks-1789450377657.jpg",
  alt: 'Toyota Rush putih sporty di jalan kota, SUV kompak tangguh untuk keluarga aktif',
  category: 'SUV Kompak',
  passengers: 7,
  features: ['Ground Clearance Tinggi', 'Sporty Design', 'Kabin Luas'],
  priceWithout: 'Rp450.000',
  priceWith: 'Rp600.000',
  waText: 'Toyota%20Rush',
  vehicleId: 'rush'
},
{
  name: 'Mitsubishi Xpander',
  image: "/assets/images/Gemini_Generated_Image_ih7txnih7txnih7t-1789450397365.jpg",
  alt: 'Mitsubishi Xpander hitam modern di jalan kota, MPV stylish dengan kabin luas dan fitur lengkap',
  category: 'MPV Stylish',
  passengers: 7,
  features: ['Desain Stylish', 'Kabin Lega', 'Fitur Lengkap'],
  priceWithout: 'Rp450.000',
  priceWith: 'Rp600.000',
  waText: 'Mitsubishi%20Xpander',
  vehicleId: 'xpander'
},
{
  name: 'Toyota Innova Zenix',
  image: "/assets/images/Gemini_Generated_Image_zdkpywzdkpywzdkp-1789450414701.jpg",
  alt: 'Toyota Innova Zenix silver premium di jalan tol, MPV hybrid mewah generasi terbaru',
  badge: 'Terbaru',
  category: 'MPV Hybrid',
  passengers: 7,
  features: ['Hybrid Technology', 'Kabin Premium', 'Teknologi Terkini'],
  priceWithout: 'Rp800.000',
  priceWith: 'Rp1.000.000',
  waText: 'Toyota%20Innova%20Zenix',
  vehicleId: 'zenix'
},
{
  name: 'Mitsubishi Pajero Sport',
  image: "/assets/images/Gemini_Generated_Image_ntb3iyntb3iyntb3-1789448895890.jpg",
  alt: 'Mitsubishi Pajero Sport hitam gagah di jalan, SUV premium tangguh untuk perjalanan jauh',
  badge: 'Premium',
  category: 'SUV Premium',
  passengers: 7,
  features: ['Mesin Diesel Bertenaga', 'Kabin Luas & Mewah', 'Cocok Segala Medan'],
  priceWithout: 'Rp1.200.000',
  priceWith: 'Rp1.400.000',
  waText: 'Mitsubishi%20Pajero%20Sport',
  vehicleId: 'pajero-sport'
},
{
  name: 'Toyota Fortuner',
  image: "/assets/images/Gemini_Generated_Image_f5zoqof5zoqof5zo-1789450804932.jpg",
  alt: 'Toyota Fortuner hitam gagah di jalan, SUV premium tangguh untuk perjalanan jauh dan medan berat',
  badge: 'Premium',
  category: 'SUV Premium',
  passengers: 7,
  features: ['Mesin Diesel Bertenaga', 'Kabin Mewah', 'Segala Medan'],
  priceWithout: 'Rp1.200.000',
  priceWith: 'Rp1.400.000',
  waText: 'Toyota%20Fortuner',
  vehicleId: 'fortuner'
},
{
  name: 'Toyota Hiace Commuter',
  image: "/assets/images/ChatGPT_Image_15_Sep_2026__12.55.11-1789451740095.png",
  alt: 'Toyota Hiace Commuter putih, minibus kapasitas besar untuk rombongan dan wisata grup',
  badge: 'Rombongan',
  category: 'Minibus',
  passengers: 15,
  features: ['Kapasitas Besar', 'AC Powerful', 'Cocok Rombongan'],
  priceWithout: 'Rp1.300.000',
  priceWith: 'Rp1.500.000',
  waText: 'Toyota%20Hiace%20Commuter',
  vehicleId: 'hiace-commuter',
  pricingType: 'dalam-luar-kota'
},
{
  name: 'Toyota Hiace Premio',
  image: "/assets/images/ChatGPT_Image_15_Sep_2026__12.56.10-1789451788495.png",
  alt: 'Toyota Hiace Premio silver premium, minibus mewah untuk perjalanan nyaman rombongan',
  badge: 'Premium',
  category: 'Minibus Premium',
  passengers: 10,
  features: ['Interior Premium', 'Kursi Nyaman', 'AC Double'],
  priceWithout: 'Rp1.500.000',
  priceWith: 'Rp1.700.000',
  waText: 'Toyota%20Hiace%20Premio',
  vehicleId: 'hiace-premio',
  pricingType: 'dalam-luar-kota'
},
{
  name: 'Toyota Alphard Facelift',
  image: "/assets/images/Gemini_Generated_Image_amc5qaamc5qaamc5-1789448926200.jpg",
  alt: 'Toyota Alphard Facelift putih mewah, MPV premium untuk perjalanan VIP dan wisata',
  badge: 'VIP',
  category: 'MPV Mewah',
  passengers: 7,
  features: ['Kabin Super Mewah', 'Captain Seat', 'Entertainment System'],
  priceWithout: 'Rp2.300.000',
  priceWith: 'Rp2.600.000',
  waText: 'Toyota%20Alphard%20Facelift',
  vehicleId: 'alphard',
  pricingType: 'dalam-luar-kota'
}];


function CarCard({ car, idx }: {car: CarData;idx: number;}) {
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

  const delay = idx % 3 * 80;
  const imgHeight = 140;

  return (
    <div
      ref={ref}
      className="card-hover bg-card rounded-3xl overflow-hidden border border-border shadow-sm transition-all duration-700 opacity-0 translate-y-8"
      style={{ transitionDelay: `${delay}ms` }}>
      <div className="relative overflow-hidden sm:h-[220px]" style={{ height: imgHeight }}>
        <img
          alt={car.alt}
          src={car.image}
          loading="lazy"
          className="object-cover transition-transform duration-700 hover:scale-105 bg-gray-200"
          style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, objectFit: 'cover' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent"></div>
        {car.badge &&
        <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow">
            {car.badge}
          </span>
        }
        <span className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
          {car.category}
        </span>
      </div>
      <div className="p-3 sm:p-6">
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <div>
            <h3 className="font-bold text-sm sm:text-lg text-foreground leading-tight">{car.name}</h3>
            <div className="flex items-center gap-1 text-muted-foreground text-[10px] sm:text-xs mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={12} height={12}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
              {car.passengers} Penumpang
            </div>
          </div>
        </div>
        <div className="hidden sm:flex flex-wrap gap-2 mb-5">
          {car.features.map((f) =>
          <span key={f} className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full font-medium">{f}</span>
          )}
        </div>
        <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-border mb-3 sm:mb-0">
          <div className="grid grid-cols-2">
            <div className="bg-secondary px-2 sm:px-4 py-2 sm:py-3 text-center border-r border-border">
              <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5 sm:mb-1">{car.pricingType === 'dalam-luar-kota' ? 'Dalam Kota' : 'Lepas Kunci'}</div>
              <div className="text-primary font-extrabold text-xs sm:text-base leading-tight">{car.priceWithout}</div>
              <div className="text-muted-foreground text-[8px] sm:text-[10px] mt-0.5">/hari</div>
            </div>
            <div className="price-badge px-2 sm:px-4 py-2 sm:py-3 text-center">
              <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-white/70 mb-0.5 sm:mb-1">{car.pricingType === 'dalam-luar-kota' ? 'Luar Kota' : '+ Driver'}</div>
              <div className="text-accent font-extrabold text-xs sm:text-base leading-tight">{car.priceWith}</div>
              <div className="text-white/50 text-[8px] sm:text-[10px] mt-0.5">/hari</div>
            </div>
          </div>
        </div>
        <a
          href={`/reservasi?car=${car.vehicleId}`}
          className="mt-2 sm:mt-4 flex items-center justify-center gap-1 sm:gap-2 w-full whatsapp-btn text-white py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold">
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="truncate">Pesan</span>
        </a>
      </div>
    </div>);

}

export default function ArmadaSection() {
  return (
    <section id="armada" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-widest uppercase mb-3 block">Pilihan Armada</span>
          <h2 className="text-section-title font-extrabold text-foreground mb-4">
            Armada Lengkap &amp; <span className="text-primary">Terawat</span>
          </h2>
          <div className="section-divider mx-auto mb-5"></div>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Semua kendaraan dalam kondisi prima, rutin diservis, dan siap mengantar Anda ke tujuan dengan nyaman dan aman.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mb-10 flex-wrap">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>Lepas Kunci
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-accent inline-block"></span>Dengan Driver
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={16} height={16}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            Harga per hari
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {cars.map((car, idx) =>
          <CarCard key={car.name} car={car} idx={idx} />
          )}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          * Harga belum termasuk bahan bakar. Hubungi kami untuk info lebih lanjut.
        </p>
      </div>
    </section>);

}