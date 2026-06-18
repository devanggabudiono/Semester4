import { Info, Target, Users, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Tentang Program | UMKM Desa Ngadirejo",
  description: "Informasi mengenai program digitalisasi UMKM Desa Ngadirejo oleh tim KKN.",
};

export default function TentangPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Introduction */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-100/70 text-emerald-800 border border-emerald-200/50 mb-4 uppercase tracking-wider">
            Ekonomi Mandiri
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Tentang Program Digitalisasi
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Membangun ekosistem ekonomi digital yang mandiri, berdaya saing, dan berkelanjutan untuk seluruh masyarakat Desa Ngadirejo.
          </p>
        </div>

        {/* Latar Belakang Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 mb-16 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-emerald-50 p-3.5 rounded-2xl text-emerald-600 border border-emerald-100/50">
              <Info className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Latar Belakang</h2>
          </div>
          <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            <p>
              Website <strong>"UMKM Desa Ngadirejo"</strong> merupakan salah satu langkah awal digitalisasi daerah yang dikembangkan untuk memperluas jangkauan promosi dan mempermudah pemasaran produk-produk lokal kuliner, sandang, sembako, pertanian, kerajinan, hingga jasa yang dikelola oleh masyarakat Desa Ngadirejo, Kecamatan Kromengan, Kabupaten Malang.
            </p>
            <p>
              Melalui platform satu pintu ini, diharapkan terjadi percepatan adaptasi teknologi informasi oleh pelaku usaha mikro. Kami percaya bahwa setiap usaha lokal memiliki keunggulan tersendiri yang mampu berkembang pesat jika diberikan wadah promosi digital yang representatif, modern, dan mudah diakses siapa saja.
            </p>
          </div>
        </div>

        {/* Manfaat Program */}
        <h2 className="text-2xl sm:text-3xl font-black text-center text-slate-900 mb-10">Manfaat Program</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-7 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all group">
            <div className="bg-emerald-50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Untuk Warga</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Memudahkan warga desa dalam mencari kebutuhan konsumsi harian, jasa terdekat, maupun kuliner lezat khas daerah secara langsung.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-7 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all group">
            <div className="bg-emerald-50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Untuk Pengunjung</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Menjadi panduan wisata belanja produk lokal bagi para pendatang atau wisatawan luar daerah yang singgah di Desa Ngadirejo.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-7 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all group">
            <div className="bg-emerald-50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Untuk Pelaku UMKM</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Memperluas area promosi produk secara tak terbatas, membangun brand usaha yang kredibel, serta mendorong naiknya omset penjualan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
