"use client";
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { isUmkmOpen, JamOperasional } from "@/utils/umkmUtils";

interface OpenStatusBadgeProps {
  jamOperasional: JamOperasional;
}

export default function OpenStatusBadge({ jamOperasional }: OpenStatusBadgeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    // Jalankan di Client Side
    setIsOpen(isUmkmOpen(jamOperasional));
    const days = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];
    setCurrentDay(days[new Date().getDay()]);
  }, [jamOperasional]);

  return (
    <div className="flex gap-4 items-start flex-col w-full">
      <div className="flex items-center gap-3">
        <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Jam Operasional</h4>
          <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full mt-1.5 border ${
            isOpen 
              ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
              : "bg-rose-50 text-rose-700 border-rose-200"
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}`}></span>
            {isOpen ? "Buka Sekarang" : "Tutup Sekarang"}
          </span>
        </div>
      </div>
      
      {/* Weekly Schedule */}
      <div className="w-full bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs md:text-sm text-slate-600 space-y-2.5">
        {Object.entries(jamOperasional).map(([day, schedule]) => {
          const isToday = currentDay === day;
          return (
            <div 
              key={day} 
              className={`flex justify-between items-center py-1 px-2 rounded-lg transition-all ${
                isToday 
                  ? "font-bold text-emerald-700 bg-emerald-50 border border-emerald-100" 
                  : "border border-transparent"
              }`}
            >
              <span className="capitalize">{day}</span>
              <span>{schedule.libur ? "Tutup (Libur)" : `${schedule.buka} - ${schedule.tutup}`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
