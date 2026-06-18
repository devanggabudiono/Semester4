import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";

export const metadata = {
  title: "Hubungi Kami | UMKM Desa Ngadirejo",
  description: "Hubungi tim pengelola website UMKM Desa Ngadirejo untuk pendaftaran usaha atau pertanyaan lainnya.",
};

export default function KontakPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-100/70 text-emerald-800 border border-emerald-200/50 mb-4 uppercase tracking-wider">
            Hubungi Kami
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">Hubungi Pengelola</h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Punya pertanyaan atau ingin mendaftarkan usaha Anda ke dalam direktori website? Tim KKN dan admin desa siap melayani Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Contact Details Column */}
          <div className="flex flex-col">
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100/80 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-950 mb-8 border-b border-slate-100 pb-3">Informasi Kontak</h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600 shrink-0 border border-emerald-100/50">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">Alamat Balai Desa</h3>
                      <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                        Desa Ngadirejo, Kecamatan Kromengan,<br />Kabupaten Malang, Jawa Timur, Indonesia
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600 shrink-0 border border-emerald-100/50">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">Telepon / WhatsApp</h3>
                      <p className="text-slate-500 text-xs sm:text-sm mt-1">+62 812-3456-7890 (Admin Desa)</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600 shrink-0 border border-emerald-100/50">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">Surel (Email)</h3>
                      <p className="text-slate-500 text-xs sm:text-sm mt-1">admin@ngadirejo-kromengan.desa.id</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WA Register Link */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Ingin Mendaftarkan UMKM Anda?</h3>
                <p className="text-slate-500 text-xs sm:text-sm mb-5 leading-relaxed">
                  Pendaftaran direktori UMKM ini 100% gratis untuk pelaku usaha di wilayah Desa Ngadirejo. Siapkan foto profil, jam operasional, dan detail produk Anda.
                </p>
                <a 
                  href="https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20mendaftarkan%20usaha%20UMKM%20saya%20di%20Website%20Ngadirejo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-6 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-100 hover:shadow-lg w-full sm:w-auto"
                >
                  <MessageSquare className="w-4.5 h-4.5" />
                  Hubungi Admin via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Message Form Column */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100/80">
            <h2 className="text-2xl font-black text-slate-950 mb-8 border-b border-slate-100 pb-3">Kirim Pesan</h2>
            <form className="space-y-6" action="javascript:void(0);">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all bg-slate-50/50"
                  placeholder="Masukkan nama lengkap Anda"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">No. WhatsApp / Email</label>
                <input 
                  type="text" 
                  id="email" 
                  className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all bg-slate-50/50"
                  placeholder="Contoh: 081234xxxx atau email@domain.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">Isi Pesan</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none bg-slate-50/50"
                  placeholder="Tuliskan pertanyaan atau pengajuan pendaftaran Anda di sini..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-900 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-sm hover:shadow"
              >
                <span>Kirim Pesan</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
