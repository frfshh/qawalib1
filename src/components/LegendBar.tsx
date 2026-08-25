import React from 'react';
import { Tag } from 'lucide-react';

interface LegendBarProps {
  isMonochrome?: boolean;
}

export const LegendBar: React.FC<LegendBarProps> = ({ isMonochrome = false }) => {
  if (isMonochrome) {
    return (
      <div className="w-full bg-gradient-to-r from-[#0a1628]/90 via-[#06101e]/90 to-[#0a1628]/90 border border-slate-700/80 rounded-2xl px-2.5 sm:px-4 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-1.5 text-amber-400 font-bold uppercase text-[10px] sm:text-[11px] tracking-wider">
          <Tag className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Cabaran Set E (Ujian Tulen):</span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-700 px-2.5 py-1 rounded-xl text-slate-300 font-medium text-[10px] sm:text-xs">
          <span>🎯 Tona warna dinyahaktifkan untuk menguji kemahiran menyusun nahu berpandukan pola acuan Qawalib semata-mata.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-r from-[#0a1628]/90 via-[#06101e]/90 to-[#0a1628]/90 border border-slate-700/80 rounded-2xl px-2.5 sm:px-4 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs shadow-lg backdrop-blur-md">
      <div className="flex items-center gap-1 sm:gap-1.5 text-slate-300 font-bold uppercase text-[10px] sm:text-[11px] tracking-wider">
        <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0" />
        <span>Petunjuk Kategori:</span>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 sm:gap-3">
        {/* Fi'il Indicator (Merah) */}
        <div className="flex items-center gap-1 sm:gap-1.5 bg-rose-950/60 border border-rose-500/50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl shadow-sm">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-400 shadow-[0_0_6px_#fb7185]" />
          <span className="font-black text-rose-300">Fi&apos;il (Merah)</span>
          <span className="text-rose-200 font-arabic text-sm sm:text-base font-black" dir="rtl">(فعل)</span>
          <span className="hidden xs:inline text-[9px] sm:text-[10px] text-slate-300 font-medium">Kata Kerja</span>
        </div>

        {/* Isim Indicator (Hijau) */}
        <div className="flex items-center gap-1 sm:gap-1.5 bg-emerald-950/60 border border-emerald-500/50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl shadow-sm">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
          <span className="font-black text-emerald-300">Isim (Hijau)</span>
          <span className="text-emerald-200 font-arabic text-sm sm:text-base font-black" dir="rtl">(اسم)</span>
          <span className="hidden xs:inline text-[9px] sm:text-[10px] text-slate-300 font-medium">Kata Nama</span>
        </div>

        {/* Harf Indicator (Oren) */}
        <div className="flex items-center gap-1 sm:gap-1.5 bg-orange-950/60 border border-orange-500/50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl shadow-sm">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-400 shadow-[0_0_6px_#fb923c]" />
          <span className="font-black text-orange-300">Harf (Oren)</span>
          <span className="text-orange-200 font-arabic text-sm sm:text-base font-black" dir="rtl">(حرف)</span>
          <span className="hidden xs:inline text-[9px] sm:text-[10px] text-slate-300 font-medium">Kata Sendi</span>
        </div>
      </div>
    </div>
  );
};
