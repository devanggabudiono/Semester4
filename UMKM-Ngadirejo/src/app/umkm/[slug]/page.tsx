import { umkmList } from "@/data/umkm";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, MessageCircle, User, Tag, ShoppingBag, Info, ExternalLink } from "lucide-react";
import MapWrapper from "@/components/MapWrapper";
import OpenStatusBadge from "@/components/OpenStatusBadge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return umkmList.map((umkm) => ({
    slug: umkm.slug,
  }));
}

export default async function UmkmDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const umkm = umkmList.find((u) => u.slug === resolvedParams.slug);

  if (!umkm) {
    notFound();
  }

  // Format WhatsApp number
  const formatWhatsApp = (wa: string) => {
    let formatted = wa.replace(/\D/g, "");
    if (formatted.startsWith("0")) {
      formatted = "62" + formatted.substring(1);
    }
    return formatted;
  };

  const waNumber = formatWhatsApp(umkm.whatsapp);
  const waUrl = `https://wa.me/${waNumber}?text=Halo%20${encodeURIComponent(umkm.nama)},%20saya%20melihat%20usaha%20Anda%20di%20Website%20UMKM%20Desa%20Ngadirejo.`;

  const defaultImage = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80";
  const imageSrc = umkm.fotoUtama || defaultImage;

  return (
    <div className="bg-slate-50/50 min-h-screen pb-24">
      {/* Header with Background Image */}
      <div className="relative h-72 md:h-[400px] w-full">
        <Image
          src={imageSrc}
          alt={umkm.nama}
          fill
          className="object-cover brightness-[0.45]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10">
          
          {/* Back link */}
          <Link href="/" className="inline-flex items-center text-emerald-300 hover:text-white transition-all text-sm font-semibold mb-6 w-fit bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 hover:bg-white/20">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Daftar UMKM
          </Link>

          {/* Category Pill */}
          <span className="bg-emerald-600 border border-emerald-500/20 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full w-fit mb-4 uppercase tracking-wider">
            {umkm.kategori}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 tracking-tight">{umkm.nama}</h1>
          
          {/* Owner Details */}
          <p className="text-slate-300 text-sm sm:text-base flex items-center gap-2 font-medium">
            <User className="w-4.5 h-4.5 text-emerald-400" />
            <span>Pemilik: <span className="text-white font-semibold">{umkm.pemilik}</span></span>
          </p>

        </div>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About Section */}
            <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-100/80">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                <Info className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">Tentang Usaha Ini</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                {umkm.deskripsiLengkap || umkm.deskripsiSingkat}
              </p>
              
              {/* Products Grid */}
              <div className="mb-8">
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-emerald-600" />
                  Produk & Layanan
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {umkm.produk.map((prod, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 bg-slate-50 border border-slate-100 p-3.5 rounded-xl text-sm font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                      <span>{prod}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tags Section */}
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-emerald-600" />
                  Tagar Usaha
                </h3>
                <div className="flex flex-wrap gap-2">
                  {umkm.tags.map((tag, idx) => (
                    <span key={idx} className="bg-emerald-50 border border-emerald-100/60 text-emerald-700 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            {umkm.galeri && umkm.galeri.length > 0 && (
              <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-100/80">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 border-b border-slate-100 pb-3">Galeri Foto</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {umkm.galeri.map((foto, idx) => (
                    <div key={idx} className="relative h-52 sm:h-64 rounded-2xl overflow-hidden shadow-inner border border-slate-100 bg-slate-100 group">
                      <Image
                        src={foto}
                        alt={`Galeri ${umkm.nama} ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar (Right Column) */}
          <div className="space-y-6 lg:-mt-16">
            
            {/* Contact Information & Operational Status */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-md border border-emerald-100/30 relative z-10">
              <h3 className="text-lg sm:text-xl font-black text-slate-950 mb-6 border-b border-slate-100 pb-4">
                Informasi Kontak
              </h3>
              
              <div className="space-y-5 mb-8">
                {/* Address */}
                <div className="flex gap-3.5 items-start">
                  <div className="bg-emerald-50 p-2.5 rounded-xl text-emerald-600 mt-0.5 border border-emerald-100/50">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Alamat Lengkap</h4>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">{umkm.alamat}</p>
                  </div>
                </div>

                {/* Weekly Operational Hours */}
                <div className="pt-4 border-t border-slate-100">
                  <OpenStatusBadge jamOperasional={umkm.jamOperasional as any} />
                </div>
              </div>
              
              {/* Large WhatsApp CTA Button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white w-full py-4 px-5 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-md shadow-emerald-200/50 hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5.5 h-5.5 shrink-0" />
                Hubungi via WhatsApp
              </a>
            </div>

            {/* Map Mini-Widget */}
            <div className="bg-white p-3 rounded-3xl shadow-sm border border-slate-100/80 overflow-hidden relative z-0">
              <div className="p-3">
                <h3 className="text-sm sm:text-base font-black text-slate-900">Peta Lokasi Usaha</h3>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-100">
                <MapWrapper 
                  markers={[umkm]} 
                  center={[umkm.latitude, umkm.longitude]} 
                  zoom={16} 
                  singleMode={true} 
                  height="220px" 
                />
              </div>
              <div className="p-3">
                <a
                  href={umkm.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 text-slate-700 w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
