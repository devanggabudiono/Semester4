import Link from "next/link";
import { Store, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-slate-300 border-t border-emerald-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="bg-emerald-600 text-white p-2 rounded-xl">
                <Store className="h-5.5 w-5.5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                UMKM <span className="text-emerald-400 font-semibold">Ngadirejo</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-emerald-100/60 max-w-sm">
              Platform direktori digital satu pintu untuk mempromosikan produk lokal, kuliner, pertanian, kerajinan, dan jasa terbaik masyarakat Desa Ngadirejo, Kecamatan Kromengan, Kabupaten Malang.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-base relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-emerald-500">
              Tautan Navigasi
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/" className="text-emerald-100/70 hover:text-white hover:underline transition-all">Beranda</Link>
              </li>
              <li>
                <Link href="/#daftar-umkm" className="text-emerald-100/70 hover:text-white hover:underline transition-all">Daftar UMKM</Link>
              </li>
              <li>
                <Link href="/#peta-sebaran" className="text-emerald-100/70 hover:text-white hover:underline transition-all">Peta Sebaran</Link>
              </li>
              <li>
                <Link href="/tentang" className="text-emerald-100/70 hover:text-white hover:underline transition-all">Tentang Program</Link>
              </li>
              <li>
                <Link href="/kontak" className="text-emerald-100/70 hover:text-white hover:underline transition-all">Hubungi Kami</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold mb-5 text-base relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-emerald-500">
              Hubungi Pengelola
            </h3>
            <ul className="space-y-4 text-sm text-emerald-100/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Balai Desa Ngadirejo, Kec. Kromengan, Kab. Malang, Jawa Timur</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>+62 812-3456-7890 (Kantor Desa)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>admin@ngadirejo-kromengan.desa.id</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-emerald-100/40">
          <p>&copy; {new Date().getFullYear()} Tim KKN Digitalisasi UMKM Desa Ngadirejo. Hak Cipta Dilindungi.</p>
          <p className="bg-emerald-900/30 px-3.5 py-1.5 rounded-full border border-emerald-800/40 text-emerald-300 font-medium">
            Dibuat untuk mendukung digitalisasi UMKM Desa Ngadirejo.
          </p>
        </div>
      </div>
    </footer>
  );
}
