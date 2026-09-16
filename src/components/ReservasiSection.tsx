'use client';
import React, { useState, useMemo, useEffect, useRef } from 'react';

const WA_ICON =
<svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>;


interface Vehicle {
  id: string;
  name: string;
  category: string;
  passengers: number;
  priceNoDriver: number;
  priceWithDriver: number;
  image: string;
  imageAlt: string;
  badge?: string;
}

const vehicles: Vehicle[] = [
{
  id: 'new-avanza',
  name: 'New Toyota Avanza',
  category: 'MPV Keluarga',
  passengers: 7,
  priceNoDriver: 450000,
  priceWithDriver: 600000,
  image: '/assets/images/Gemini_Generated_Image_9odjka9odjka9odj-1789451934041.jpg',
  imageAlt: 'New Toyota Avanza silver modern di jalan kota, MPV keluarga terbaru dengan desain segar',
  badge: 'Terlaris'
},
{
  id: 'innova-reborn',
  name: 'Toyota Innova Reborn',
  category: 'MPV Premium',
  passengers: 7,
  priceNoDriver: 600000,
  priceWithDriver: 750000,
  image: '/assets/images/Gemini_Generated_Image_uhq2j3uhq2j3uhq2-1789448910235.jpg',
  imageAlt: 'Toyota Innova Reborn hitam elegan di jalan tol, MPV premium diesel bertenaga untuk perjalanan jauh',
  badge: 'Populer'
},
{
  id: 'pajero-sport',
  name: 'Mitsubishi Pajero Sport',
  category: 'SUV Premium',
  passengers: 7,
  priceNoDriver: 1200000,
  priceWithDriver: 1400000,
  image: '/assets/images/Gemini_Generated_Image_ntb3iyntb3iyntb3-1789448895890.jpg',
  imageAlt: 'Mitsubishi Pajero Sport hitam gagah di jalan, SUV premium tangguh untuk perjalanan jauh',
  badge: 'Premium'
},
{
  id: 'brv',
  name: 'Honda BRV',
  category: 'SUV Kompak',
  passengers: 7,
  priceNoDriver: 450000,
  priceWithDriver: 600000,
  image: '/assets/images/Gemini_Generated_Image_5r7l3k5r7l3k5r7l-1789449057666.jpg',
  imageAlt: 'Honda BRV putih modern di jalan kota, SUV kompak nyaman untuk keluarga',
  badge: 'Populer'
},
{
  id: 'agya',
  name: 'Toyota Agya',
  category: 'City Car',
  passengers: 4,
  priceNoDriver: 300000,
  priceWithDriver: 450000,
  image: '/assets/images/Gemini_Generated_Image_55frzf55frzf55fr-1789449247155.jpg',
  imageAlt: 'Toyota Agya merah compact di jalanan kota, city car lincah dan hemat bahan bakar',
  badge: 'Termurah'
},
{
  id: 'xenia',
  name: 'New Daihatsu Xenia',
  category: 'MPV Keluarga',
  passengers: 7,
  priceNoDriver: 450000,
  priceWithDriver: 600000,
  image: '/assets/images/Gemini_Generated_Image_9833va9833va9833-1789449325566.jpg',
  imageAlt: 'Daihatsu New Xenia silver parkir di jalanan kota cerah, MPV keluarga modern dan nyaman'
},
{
  id: 'terios',
  name: 'Daihatsu Terios',
  category: 'SUV Kompak',
  passengers: 7,
  priceNoDriver: 450000,
  priceWithDriver: 600000,
  image: '/assets/images/Gemini_Generated_Image_2yuc9d2yuc9d2yuc-1789449405163.jpg',
  imageAlt: 'Daihatsu Terios abu-abu di jalan pegunungan, SUV tangguh untuk medan berbukit Sumatera Utara'
},
{
  id: 'rocky',
  name: 'Daihatsu Rocky',
  category: 'SUV Compact',
  passengers: 5,
  priceNoDriver: 450000,
  priceWithDriver: 600000,
  image: '/assets/images/Gemini_Generated_Image_evb43tevb43tevb4-1789449917096.jpg',
  imageAlt: 'Daihatsu Rocky putih modern di jalan kota, SUV compact stylish dengan teknologi terkini',
  badge: 'Terbaru'
},
{
  id: 'xl7',
  name: 'Suzuki XL7',
  category: 'MPV Premium',
  passengers: 7,
  priceNoDriver: 450000,
  priceWithDriver: 600000,
  image: '/assets/images/Gemini_Generated_Image_voee1hvoee1hvoee-1789450150038.jpg',
  imageAlt: 'Suzuki XL7 hitam elegan di jalan tol, MPV premium 7 penumpang untuk perjalanan jauh'
},
{
  id: 'avanza-facelift',
  name: 'Toyota Avanza Facelift',
  category: 'MPV Keluarga',
  passengers: 7,
  priceNoDriver: 350000,
  priceWithDriver: 500000,
  image: '/assets/images/Gemini_Generated_Image_nrucfunrucfunruc-1789450239478.jpg',
  imageAlt: 'Toyota Avanza Facelift silver parkir di jalanan kota cerah siang hari, MPV populer untuk keluarga'
},
{
  id: 'mobilio',
  name: 'Honda Mobilio',
  category: 'MPV Keluarga',
  passengers: 7,
  priceNoDriver: 350000,
  priceWithDriver: 500000,
  image: '/assets/images/Gemini_Generated_Image_79i47879i47879i4-1789450317368.jpg',
  imageAlt: 'Honda Mobilio putih di jalan kota, MPV 7 penumpang nyaman dan hemat bahan bakar'
},
{
  id: 'brio',
  name: 'Honda Brio',
  category: 'City Car',
  passengers: 4,
  priceNoDriver: 350000,
  priceWithDriver: 500000,
  image: '/assets/images/Gemini_Generated_Image_n90krun90krun90k-1789450358226.jpg',
  imageAlt: 'Honda Brio merah compact di jalanan kota, city car lincah dan hemat bahan bakar untuk dalam kota',
  badge: 'Termurah'
},
{
  id: 'rush',
  name: 'Toyota Rush',
  category: 'SUV Kompak',
  passengers: 7,
  priceNoDriver: 450000,
  priceWithDriver: 600000,
  image: '/assets/images/Gemini_Generated_Image_1qksu31qksu31qks-1789450377657.jpg',
  imageAlt: 'Toyota Rush putih sporty di jalan kota, SUV kompak tangguh untuk keluarga aktif'
},
{
  id: 'xpander',
  name: 'Mitsubishi Xpander',
  category: 'MPV Stylish',
  passengers: 7,
  priceNoDriver: 450000,
  priceWithDriver: 600000,
  image: '/assets/images/Gemini_Generated_Image_ih7txnih7txnih7t-1789450397365.jpg',
  imageAlt: 'Mitsubishi Xpander hitam modern di jalan kota, MPV stylish dengan kabin luas dan fitur lengkap'
},
{
  id: 'zenix',
  name: 'Toyota Innova Zenix',
  category: 'MPV Hybrid',
  passengers: 7,
  priceNoDriver: 800000,
  priceWithDriver: 1000000,
  image: '/assets/images/Gemini_Generated_Image_zdkpywzdkpywzdkp-1789450414701.jpg',
  imageAlt: 'Toyota Innova Zenix silver premium di jalan tol, MPV hybrid mewah generasi terbaru',
  badge: 'Terbaru'
},
{
  id: 'fortuner',
  name: 'Toyota Fortuner',
  category: 'SUV Premium',
  passengers: 7,
  priceNoDriver: 1200000,
  priceWithDriver: 1400000,
  image: '/assets/images/Gemini_Generated_Image_f5zoqof5zoqof5zo-1789450804932.jpg',
  imageAlt: 'Toyota Fortuner hitam gagah di jalan, SUV premium tangguh untuk perjalanan jauh dan medan berat',
  badge: 'Premium'
},
{
  id: 'alphard',
  name: 'Toyota Alphard Facelift',
  category: 'MPV Mewah',
  passengers: 7,
  priceNoDriver: 2300000,
  priceWithDriver: 2600000,
  image: '/assets/images/Gemini_Generated_Image_amc5qaamc5qaamc5-1789448926200.jpg',
  imageAlt: 'Toyota Alphard Facelift putih mewah, MPV premium untuk perjalanan VIP dan wisata',
  badge: 'VIP'
},
{
  id: 'hiace-commuter',
  name: 'Toyota Hiace Commuter',
  category: 'Minibus',
  passengers: 15,
  priceNoDriver: 1300000,
  priceWithDriver: 1500000,
  image: '/assets/images/ChatGPT_Image_15_Sep_2026__12.55.11-1789451740095.png',
  imageAlt: 'Toyota Hiace Commuter putih, minibus kapasitas besar untuk rombongan dan wisata grup',
  badge: 'Rombongan'
},
{
  id: 'hiace-premio',
  name: 'Toyota Hiace Premio',
  category: 'Minibus Premium',
  passengers: 10,
  priceNoDriver: 1500000,
  priceWithDriver: 1700000,
  image: '/assets/images/ChatGPT_Image_15_Sep_2026__12.56.10-1789451788495.png',
  imageAlt: 'Toyota Hiace Premio silver premium, minibus mewah untuk perjalanan nyaman rombongan',
  badge: 'Premium'
}];


function formatRupiah(n: number): string {
  return 'Rp' + n.toLocaleString('id-ID');
}

function diffDays(a: string, b: string): number | null {
  if (!a || !b) return null;
  const da = new Date(a).getTime();
  const db = new Date(b).getTime();
  const diff = Math.round((db - da) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : null;
}

function formatDate(d: string): string {
  if (!d) return '—';
  const [y, m, day] = d.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  return `${parseInt(day)} ${months[parseInt(m) - 1]} ${y}`;
}

export default function ReservasiSection() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [withDriver, setWithDriver] = useState(false);
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const step2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const carId = params.get('car');
    if (carId) {
      const matched = vehicles.find((v) => v.id === carId);
      if (matched) {
        setSelectedVehicle(matched.id);
        setTimeout(() => {
          step2Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, []);

  const today = new Date().toISOString().split('T')[0];

  const vehicle = vehicles.find((v) => v.id === selectedVehicle) || null;
  const duration = diffDays(pickupDate, returnDate);

  const isFormComplete = useMemo(() => {
    return !!selectedVehicle && !!pickupDate && !!returnDate && !!location && !!name && duration !== null;
  }, [selectedVehicle, pickupDate, returnDate, location, name, duration]);

  const totalPrice = useMemo(() => {
    if (!vehicle || !duration) return null;
    const pricePerDay = withDriver ? vehicle.priceWithDriver : vehicle.priceNoDriver;
    return pricePerDay * duration;
  }, [vehicle, withDriver, duration]);

  function buildWhatsAppMessage() {
    if (!vehicle) return '';
    const driverText = withDriver ? 'Dengan Driver' : 'Tanpa Driver';
    const pricePerDay = withDriver ? vehicle.priceWithDriver : vehicle.priceNoDriver;
    const msg = [
    `Halo, saya ingin melakukan reservasi kendaraan:`,
    ``,
    `*Kendaraan:* ${vehicle.name} (${vehicle.category})`,
    `*Driver:* ${driverText}`,
    `*Tanggal Ambil:* ${formatDate(pickupDate)}`,
    `*Tanggal Kembali:* ${formatDate(returnDate)}`,
    `*Durasi:* ${duration} hari`,
    `*Lokasi Penjemputan:* ${location}`,
    `*Harga/hari:* ${formatRupiah(pricePerDay)}`,
    totalPrice ? `*Total Estimasi:* ${formatRupiah(totalPrice)}` : '',
    ``,
    `*Nama:* ${name}`,
    notes ? `*Catatan:* ${notes}` : '',
    ``,
    `Mohon konfirmasi ketersediaan. Terima kasih!`].
    filter((l) => l !== undefined).join('\n');
    return encodeURIComponent(msg);
  }

  /* ── Confirmation Screen ── */
  if (confirmed && vehicle) {
    const pricePerDay = withDriver ? vehicle.priceWithDriver : vehicle.priceNoDriver;
    const waUrl = `https://wa.me/6208218076998?text=${buildWhatsAppMessage()}`;

    return (
      <>
        {/* Hero */}
        <section className="relative pt-32 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] blob-gold opacity-40 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-navy opacity-30 pointer-events-none"></div>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            {/* Success badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: 'rgba(13,43,85,0.08)', border: '2px solid rgba(13,43,85,0.15)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" style={{ color: '#0D2B55' }}>
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="inline-flex items-center gap-2 border px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: 'rgba(13,43,85,0.08)', borderColor: 'rgba(13,43,85,0.15)', color: '#0D2B55' }}>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Reservasi Siap Dikirim
            </div>
            <h1 className="text-section-title font-extrabold text-foreground mb-3">
              Konfirmasi <span className="gold-gradient">Reservasi</span>
            </h1>
            <div className="section-divider mx-auto mb-4"></div>
            <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
              Periksa ringkasan reservasi Anda di bawah ini. Jika sudah sesuai, klik tombol WhatsApp untuk mengirim permintaan ke tim kami.
            </p>
          </div>
        </section>

        {/* Confirmation Content */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">

            {/* Reservation Summary Card */}
            <div className="reservation-card overflow-hidden">
              {/* Vehicle Banner */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                  <div>
                    <div className="font-extrabold text-white text-xl">{vehicle.name}</div>
                    <div className="text-white/80 text-sm">{vehicle.category} · {vehicle.passengers} Penumpang</div>
                  </div>
                  {vehicle.badge && (
                    <span className="bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                      {vehicle.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Details Grid */}
              <div className="p-6 sm:p-8">
                <h2 className="font-bold text-foreground text-base mb-5 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="18" height="18" className="text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                  </svg>
                  Ringkasan Reservasi
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    { label: 'Nama Pemesan', value: name },
                    { label: 'Preferensi Driver', value: withDriver ? 'Dengan Driver' : 'Tanpa Driver' },
                    { label: 'Tanggal Ambil', value: formatDate(pickupDate) },
                    { label: 'Tanggal Kembali', value: formatDate(returnDate) },
                    { label: 'Durasi Sewa', value: duration ? `${duration} hari` : '—' },
                    { label: 'Lokasi Penjemputan', value: location },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col gap-0.5">
                      <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">{item.label}</span>
                      <span className="text-sm font-bold text-foreground">{item.value}</span>
                    </div>
                  ))}
                  {notes && (
                    <div className="sm:col-span-2 flex flex-col gap-0.5">
                      <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Catatan</span>
                      <span className="text-sm font-bold text-foreground">{notes}</span>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="mt-6 rounded-2xl p-5" style={{ backgroundColor: 'rgba(13,43,85,0.04)', border: '1px solid rgba(13,43,85,0.1)' }}>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-muted-foreground">Harga per hari</span>
                    <span className="font-semibold text-foreground">{formatRupiah(pricePerDay)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-3">
                    <span className="text-muted-foreground">Durasi</span>
                    <span className="font-semibold text-foreground">{duration} hari</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <span className="font-bold text-foreground">Total Estimasi</span>
                    <span className="font-extrabold text-primary text-xl">{totalPrice ? formatRupiah(totalPrice) : '—'}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">* Harga estimasi, konfirmasi final dari tim kami via WhatsApp.</p>
                </div>
              </div>
            </div>

            {/* Next Steps Card */}
            <div className="reservation-card p-6 sm:p-8">
              <h2 className="font-bold text-foreground text-base mb-5 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="18" height="18" className="text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
                Langkah Selanjutnya
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: '01',
                    title: 'Kirim via WhatsApp',
                    desc: 'Klik tombol di bawah untuk mengirim detail reservasi langsung ke tim Harapan Jaya Rent Car.',
                  },
                  {
                    step: '02',
                    title: 'Tunggu Konfirmasi',
                    desc: 'Tim kami akan membalas dalam waktu singkat untuk mengkonfirmasi ketersediaan kendaraan.',
                  },
                  {
                    step: '03',
                    title: 'Selesaikan Pembayaran',
                    desc: 'Setelah dikonfirmasi, lakukan pembayaran DP sesuai instruksi tim kami untuk mengamankan reservasi.',
                  },
                  {
                    step: '04',
                    title: 'Kendaraan Siap',
                    desc: 'Pada tanggal yang ditentukan, kendaraan akan disiapkan di lokasi penjemputan pilihan Anda.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-extrabold">{item.step}</span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm">{item.title}</div>
                      <div className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl text-white font-bold text-base transition-all duration-300 whatsapp-btn"
              >
                {WA_ICON}
                Kirim via WhatsApp Sekarang
              </a>
              <button
                type="button"
                onClick={() => setConfirmed(false)}
                className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-300 border-2 border-border hover:border-primary/40 text-muted-foreground hover:text-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Edit Reservasi
              </button>
            </div>

          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] blob-gold opacity-40 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-navy opacity-30 pointer-events-none"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style={{ backgroundColor: 'rgba(13,43,85,0.08)', borderColor: 'rgba(13,43,85,0.15)', color: '#0D2B55' }}>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Reservasi Online
          </div>
          <h1 className="text-section-title font-extrabold text-foreground mb-4">
            Pesan Kendaraan <span className="gold-gradient">Sekarang</span>
          </h1>
          <div className="section-divider mx-auto mb-5"></div>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Pilih kendaraan, tentukan tanggal dan lokasi penjemputan, lalu kirim permintaan reservasi langsung via WhatsApp. Kami akan segera mengkonfirmasi ketersediaan.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Left: Form Steps */}
            <div className="lg:col-span-2 space-y-6">

              {/* Step 1: Pilih Kendaraan */}
              <div className="reservation-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
                  <h2 className="text-lg font-bold text-foreground">Pilih Kendaraan</h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {vehicles.map((v) =>
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => {
                      setSelectedVehicle(v.id);
                      setTimeout(() => {
                        step2Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 150);
                    }}
                    className={`relative rounded-2xl border-2 overflow-hidden text-left transition-all duration-300 focus:outline-none ${
                    selectedVehicle === v.id ?
                    'border-primary shadow-md' :
                    'border-border hover:border-primary/40 hover:shadow-md'}`
                    }
                    style={selectedVehicle === v.id ? { backgroundColor: 'rgba(13,43,85,0.02)' } : {}}>
                    
                      {/* Image */}
                      <div className="relative h-24 sm:h-36 overflow-hidden">
                        <img
                        src={v.image}
                        alt={v.imageAlt}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        style={{ objectFit: 'cover' }}
                        loading="lazy" />
                      
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent"></div>
                        {v.badge &&
                      <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full hidden sm:inline-block">
                            {v.badge}
                          </span>
                      }
                        {selectedVehicle === v.id &&
                      <div className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="12" height="12" className="text-white">
                              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                          </div>
                      }
                      </div>
                      {/* Info */}
                      <div className="p-2 sm:p-4 bg-card">
                        <div className="font-bold text-foreground text-xs sm:text-sm leading-tight">{v.name}</div>
                        <div className="text-muted-foreground text-[10px] sm:text-xs mt-0.5">{v.category} · {v.passengers} Pax</div>
                        <div className="mt-1 sm:mt-2 flex flex-col gap-0.5">
                          <span className="text-primary font-bold text-[10px] sm:text-xs">
                            🔑 {formatRupiah(v.priceNoDriver)}<span className="font-normal text-muted-foreground">/hr</span>
                          </span>
                          <span className="text-accent font-bold text-[10px] sm:text-xs">
                            👤 {formatRupiah(v.priceWithDriver)}<span className="font-normal text-muted-foreground">/hr</span>
                          </span>
                        </div>
                      </div>
                    </button>
                  )}
                </div>
              </div>

              {/* Step 2: Preferensi Driver */}
              <div className="reservation-card p-6 sm:p-8" ref={step2Ref}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
                  <h2 className="text-lg font-bold text-foreground">Preferensi Driver</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Tanpa Driver */}
                  <button
                    type="button"
                    onClick={() => setWithDriver(false)}
                    className={`rounded-2xl border-2 p-5 text-left transition-all duration-300 focus:outline-none ${
                    !withDriver ?
                    'border-primary shadow-md' :
                    'border-border hover:border-accent/40'}`
                    }
                    style={!withDriver ? { backgroundColor: 'rgba(13,43,85,0.05)' } : {}}>
                    
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        !withDriver ? 'bg-primary' : 'bg-secondary'}`
                        }>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className={!withDriver ? 'text-white' : 'text-accent'}>
                          <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-sm">Tanpa Driver</div>
                        <div className="text-muted-foreground text-xs mt-1 leading-relaxed">Anda mengemudi sendiri. Cocok untuk yang sudah familiar dengan rute Medan.</div>
                      </div>
                    </div>
                  </button>

                  {/* Dengan Driver */}
                  <button
                    type="button"
                    onClick={() => setWithDriver(true)}
                    className={`rounded-2xl border-2 p-5 text-left transition-all duration-300 focus:outline-none ${
                    withDriver ?
                    'border-primary shadow-md' :
                    'border-border hover:border-accent/40'}`
                    }
                    style={withDriver ? { backgroundColor: 'rgba(13,43,85,0.05)' } : {}}>
                    
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        withDriver ? 'bg-primary' : 'bg-secondary'}`
                        }>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className={withDriver ? 'text-white' : 'text-accent'}>
                          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-sm">Dengan Driver</div>
                        <div className="text-muted-foreground text-xs mt-1 leading-relaxed">Driver berpengalaman siap mengantar Anda ke tujuan dengan aman dan nyaman.</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 3: Tanggal & Lokasi */}
              <div className="reservation-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
                  <h2 className="text-lg font-bold text-foreground">Tanggal &amp; Lokasi</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Tanggal Ambil</label>
                    <input
                      type="date"
                      className="form-input"
                      min={today}
                      value={pickupDate}
                      onChange={(e) => {
                        setPickupDate(e.target.value);
                        if (returnDate && e.target.value >= returnDate) setReturnDate('');
                      }} />
                    
                  </div>
                  <div>
                    <label className="form-label">Tanggal Kembali</label>
                    <input
                      type="date"
                      className="form-input"
                      min={pickupDate || today}
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)} />
                    
                  </div>
                  <div className="sm:col-span-2">
                    <label className="form-label">Lokasi Penjemputan</label>
                    <select
                      className="form-input"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}>
                      
                      <option value="">-- Pilih lokasi penjemputan --</option>
                      <option value="Alamat Anda (Antar-Jemput)">Alamat Anda (Antar-Jemput)</option>
                      <option value="Bandara Kualanamu (KNO)">Bandara Kualanamu (KNO)</option>
                      <option value="Stasiun Medan">Stasiun Medan</option>
                      <option value="Pelabuhan Belawan">Pelabuhan Belawan</option>
                      <option value="Hotel / Penginapan">Hotel / Penginapan</option>
                      <option value="Pusat Kota Medan">Pusat Kota Medan</option>
                      <option value="Lainnya (Sebutkan di catatan)">Lainnya (Sebutkan di catatan)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Data Pemesan */}
              <div className="reservation-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0">4</div>
                  <h2 className="text-lg font-bold text-foreground">Data Pemesan</h2>
                </div>
                <div className="space-y-5">
                  <div>
                    <label className="form-label">Nama Lengkap</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Masukkan nama lengkap Anda"
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
                    
                  </div>
                  <div>
                    <label className="form-label">Catatan Tambahan (Opsional)</label>
                    <textarea
                      className="form-input resize-none"
                      rows={3}
                      placeholder="Contoh: Tujuan ke Danau Toba, butuh kursi bayi, dll."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)} />
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="reservation-card p-6 sticky top-28">
                <h3 className="font-bold text-foreground text-base mb-5 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="18" height="18" className="text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                  </svg>
                  Ringkasan Reservasi
                </h3>

                {/* Vehicle Preview */}
                <div
                  className="rounded-2xl border-2 border-dashed overflow-hidden mb-5"
                  style={{
                    borderColor: vehicle ? 'var(--primary)' : 'var(--border)',
                    height: vehicle ? 'auto' : '7rem',
                    display: 'flex',
                    alignItems: vehicle ? 'stretch' : 'center',
                    justifyContent: vehicle ? 'stretch' : 'center'
                  }}>
                  
                  {vehicle ?
                  <div className="w-full">
                      <div className="relative h-28 overflow-hidden">
                        <img
                        src={vehicle.image}
                        alt={vehicle.imageAlt}
                        className="w-full h-full object-cover" />
                      
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-2 left-3">
                          <div className="font-bold text-white text-sm">{vehicle.name}</div>
                          <div className="text-white/80 text-xs">{vehicle.category}</div>
                        </div>
                      </div>
                    </div> :

                  <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="28" height="28" className="text-muted-foreground mx-auto mb-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                      <p className="text-muted-foreground text-xs">Belum ada kendaraan dipilih</p>
                    </div>
                  }
                </div>

                {/* Summary Details */}
                <div className="space-y-3 mb-5">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Driver</span>
                    <span className="font-semibold text-foreground">{withDriver ? 'Dengan Driver' : 'Tanpa Driver'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Tanggal Ambil</span>
                    <span className="font-semibold text-foreground">{pickupDate ? formatDate(pickupDate) : '—'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Tanggal Kembali</span>
                    <span className="font-semibold text-foreground">{returnDate ? formatDate(returnDate) : '—'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Durasi</span>
                    <span className="font-semibold text-foreground">{duration ? `${duration} hari` : '—'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Lokasi</span>
                    <span className="font-semibold text-foreground text-right max-w-[140px] leading-tight">{location || '—'}</span>
                  </div>
                  {totalPrice &&
                  <div className="flex justify-between items-center text-sm pt-3 border-t border-border">
                      <span className="text-muted-foreground font-semibold">Total Estimasi</span>
                      <span className="font-bold text-primary text-base">{formatRupiah(totalPrice)}</span>
                    </div>
                  }
                </div>

                {/* Submit Button */}
                {isFormComplete ?
                <button
                  type="button"
                  onClick={() => setConfirmed(true)}
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl text-white font-bold text-base transition-all duration-300 whatsapp-btn">
                    {WA_ICON}
                    Kirim via WhatsApp
                  </button> :

                <button
                  type="button"
                  disabled
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold text-base cursor-not-allowed"
                  style={{ backgroundColor: 'var(--muted)', color: 'var(--muted-foreground)' }}>
                  
                    {WA_ICON}
                    Lengkapi Form Terlebih Dahulu
                  </button>
                }

                <p className="text-muted-foreground text-xs text-center mt-3">
                  Pastikan semua field wajib sudah diisi
                </p>

                <a
                  href="/"
                  className="mt-4 flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="14" height="14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                  Kembali ke Beranda
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}