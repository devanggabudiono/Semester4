export interface JamHarian {
  buka: string;
  tutup: string;
  libur: boolean;
}

export interface JamOperasional {
  senin: JamHarian;
  selasa: JamHarian;
  rabu: JamHarian;
  kamis: JamHarian;
  jumat: JamHarian;
  sabtu: JamHarian;
  minggu: JamHarian;
}

/**
 * Menghitung jarak antara dua titik koordinat menggunakan rumus Haversine
 */
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius bumi dalam kilometer
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Jarak dalam kilometer
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

/**
 * Mengecek apakah UMKM sedang buka berdasarkan waktu saat ini
 */
export function isUmkmOpen(jamOperasional?: JamOperasional): boolean {
  if (!jamOperasional) return false;

  const now = new Date();
  const days = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];
  const currentDay = days[now.getDay()] as keyof JamOperasional;
  
  const schedule = jamOperasional[currentDay];
  if (!schedule || schedule.libur) {
    return false;
  }

  const currentHour = now.getHours().toString().padStart(2, "0");
  const currentMinute = now.getMinutes().toString().padStart(2, "0");
  const currentTime = `${currentHour}:${currentMinute}`;

  return currentTime >= schedule.buka && currentTime <= schedule.tutup;
}

/**
 * Memformat jam operasional hari tertentu menjadi string yang ramah dibaca
 */
export function formatJamHarian(harian: JamHarian): string {
  if (harian.libur) return "Tutup/Libur";
  return `${harian.buka} - ${harian.tutup}`;
}
