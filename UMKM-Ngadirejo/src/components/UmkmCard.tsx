"use client";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin } from "lucide-react";
import { isUmkmOpen, JamOperasional } from "@/utils/umkmUtils";

interface UmkmCardProps {
  slug: string;
  nama: string;
  kategori: string;
  deskripsiSingkat: string;
  tags: string[];
  fotoUtama: string;
  whatsapp: string;
  distance?: number;
  jamOperasional?: JamOperasional;
}

export default function UmkmCard({
  slug,
  nama,
  kategori,
  deskripsiSingkat,
  tags,
  fotoUtama,
  whatsapp,
  distance,
  jamOperasional,
}: UmkmCardProps) {
  // Format WhatsApp number to ensure it starts with 62 instead of 0
  const formatWhatsApp = (wa: string) => {
    let formatted = wa.replace(/\D/g, "");
    if (formatted.startsWith("0")) {
      formatted = "62" + formatted.substring(1);
    }
    return formatted;
  };

  const waNumber = formatWhatsApp(whatsapp);
  const waUrl = `https://wa.me/${waNumber}?text=Halo%20${encodeURIComponent(nama)},%20saya%20melihat%20usaha%20Anda%20di%20Website%20UMKM%20Desa%20Ngadirejo.`;

  const isOpen = jamOperasional ? isUmkmOpen(jamOperasional) : false;

  // Fallback image if fotoUtama is empty/placeholder
  const defaultImage = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"; // Warm market display
  const imageSrc = fotoUtama || defaultImage;

  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full group">
      {/* Thumbnail Area */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <Image
          src={imageSrc}
          alt={nama}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm text-emerald-800 text-[10px] sm:text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm tracking-wide uppercase border border-slate-100/30">
            {kategori}
          </span>
        </div>

        {/* Status Buka/Tutup Badge */}
        {jamOperasional && (
          <div className="absolute top-4 right-4">
            {isOpen ? (
              <span className="bg-emerald-500/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-emerald-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                Buka
              </span>
            ) : (
              <span className="bg-rose-500/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-rose-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
                Tutup
              </span>
            )}
          </div>
        )}
      </div>
      
      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-emerald-700 transition-colors">
          {nama}
        </h3>
        
        {/* Description */}
        <p className="text-slate-500 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed flex-grow">
          {deskripsiSingkat}
        </p>

        {/* Distance Info */}
        {distance !== undefined && (
          <div className="flex items-center gap-1.5 text-slate-600 text-xs mb-4 font-semibold bg-emerald-50/50 border border-emerald-100/60 p-2.5 rounded-xl w-fit">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 animate-bounce" />
            <span>{distance.toFixed(1)} km dari Anda</span>
          </div>
        )}
        
        {/* Tag List */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="bg-slate-50 text-slate-500 text-[10px] px-2.5 py-1 rounded-lg font-semibold border border-slate-100">
              #{tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="bg-slate-50 text-slate-400 text-[10px] px-2 py-0.5 rounded-lg font-semibold">
              +{tags.length - 3}
            </span>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <Link
            href={`/umkm/${slug}`}
            className="text-center bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all shadow-sm hover:shadow-md"
          >
            Lihat Detail
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold py-3 px-4 rounded-xl transition-all border border-emerald-100"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
