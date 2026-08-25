import React from 'react';
import { PatternSlot } from '../types';
import { ArrowLeft, Layers } from 'lucide-react';

interface PatternBlueprintProps {
  patterns: PatternSlot[];
  levelIndex?: number;
  totalLevels?: number;
  isMonochrome?: boolean;
}

// Helper to determine precise color scheme per grammar pattern slot:
// Fi'il -> Merah (Red/Rose)
// Isim -> Hijau (Green/Emerald)
// Harf -> Oren (Orange/Amber)
const getPatternSlotStyling = (pattern: PatternSlot, isMonochrome: boolean = false) => {
  if (isMonochrome) {
    return {
      type: 'neutral',
      typeLabel: 'Nahu',
      boxBorder: 'border-2 border-slate-500/80 hover:border-slate-300',
      boxBg: 'bg-gradient-to-b from-slate-800/90 via-[#1e293b]/90 to-slate-950/95',
      boxGlow: 'shadow-[0_0_14px_rgba(148,163,184,0.15)] hover:shadow-[0_0_20px_rgba(226,232,240,0.25)]',
      arabicText: 'text-slate-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]',
      msBadge: 'border border-slate-600/70 bg-slate-900/90 text-slate-300 shadow-[0_0_8px_rgba(148,163,184,0.2)]',
      slotNumBadge: 'border border-slate-600 bg-slate-900 text-slate-300',
      indicatorDot: 'bg-slate-400',
      labelColor: 'text-slate-300'
    };
  }

  const ar = (pattern.ar || '').toLowerCase();
  const ms = (pattern.ms || '').toLowerCase();

  // 1. Fi'il / Kata Kerja -> Merah (Red/Rose)
  if (ar.includes('فعل') || ms.includes('fi') || ms.includes('kerja')) {
    return {
      type: 'fiil',
      typeLabel: 'Fi\'il (Kata Kerja)',
      boxBorder: 'border-2 border-rose-500 hover:border-rose-400',
      boxBg: 'bg-gradient-to-b from-rose-950/85 via-[#360814]/90 to-slate-950/95',
      boxGlow: 'shadow-[0_0_14px_rgba(244,63,94,0.25)] hover:shadow-[0_0_20px_rgba(244,63,94,0.45)]',
      arabicText: 'text-rose-100 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]',
      msBadge: 'border border-rose-400/50 bg-rose-950/80 text-rose-300 shadow-[0_0_8px_rgba(244,63,94,0.3)]',
      slotNumBadge: 'border border-rose-500/50 bg-rose-950/90 text-rose-300',
      indicatorDot: 'bg-rose-400 shadow-[0_0_6px_#fb7185]',
      labelColor: 'text-rose-300'
    };
  }

  // 2. Harf / Sendi -> Oren (Orange/Amber)
  if (
    ar.includes('حرف') ||
    ar.includes('جار') ||
    ar.includes('ظرف') ||
    ms.includes('harf') ||
    ms.includes('jar') ||
    ms.includes('sendi') ||
    ms.includes('hubung')
  ) {
    return {
      type: 'harf',
      typeLabel: 'Harf (Kata Sendi)',
      boxBorder: 'border-2 border-orange-500 hover:border-orange-400',
      boxBg: 'bg-gradient-to-b from-orange-950/85 via-[#3a1804]/90 to-slate-950/95',
      boxGlow: 'shadow-[0_0_14px_rgba(249,115,22,0.25)] hover:shadow-[0_0_20px_rgba(249,115,22,0.45)]',
      arabicText: 'text-orange-100 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]',
      msBadge: 'border border-orange-400/50 bg-orange-950/80 text-orange-300 shadow-[0_0_8px_rgba(249,115,22,0.3)]',
      slotNumBadge: 'border border-orange-500/50 bg-orange-950/90 text-orange-300',
      indicatorDot: 'bg-orange-400 shadow-[0_0_6px_#fb923c]',
      labelColor: 'text-orange-300'
    };
  }

  // 3. Isim / Kata Nama -> Hijau (Green/Emerald)
  return {
    type: 'isim',
    typeLabel: 'Isim (Kata Nama)',
    boxBorder: 'border-2 border-emerald-500 hover:border-emerald-400',
    boxBg: 'bg-gradient-to-b from-emerald-950/85 via-[#07301c]/90 to-slate-950/95',
    boxGlow: 'shadow-[0_0_14px_rgba(16,185,129,0.25)] hover:shadow-[0_0_20px_rgba(16,185,129,0.45)]',
    arabicText: 'text-emerald-100 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]',
    msBadge: 'border border-emerald-400/50 bg-emerald-950/80 text-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.3)]',
    slotNumBadge: 'border border-emerald-500/50 bg-emerald-950/90 text-emerald-300',
    indicatorDot: 'bg-emerald-400 shadow-[0_0_6px_#34d399]',
    labelColor: 'text-emerald-300'
  };
};

export const PatternBlueprint: React.FC<PatternBlueprintProps> = ({ patterns, isMonochrome = false }) => {
  return (
    <div className="w-full flex flex-col gap-2 sm:gap-2.5 bg-gradient-to-r from-[#060f1c]/95 via-[#0b1b30]/95 to-[#060f1c]/95 border-2 border-slate-700/80 rounded-2xl p-2.5 sm:p-4 shadow-xl relative overflow-hidden backdrop-blur-xl">
      {/* Background blueprint subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />

      {/* Header with Title & Color Legend Keys */}
      <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-black uppercase tracking-wider px-1 relative z-10">
        <div className="flex items-center gap-1.5 sm:gap-2 text-slate-200">
          <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
          <span className="font-arabic font-black text-sm sm:text-base text-amber-300">القَوَالِب</span>
        </div>

        {/* Quick Color Indicators / Set E Badge */}
        {isMonochrome ? (
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-slate-300 bg-slate-900/90 border border-slate-600 px-2 sm:px-2.5 py-0.5 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" />
            <span>Set E: Ujian Kemahiran Tulen (Tanpa Tona Warna)</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-bold flex-wrap">
            <span className="flex items-center gap-1 text-rose-300 bg-rose-950/60 border border-rose-500/40 px-1.5 sm:px-2 py-0.5 rounded-lg">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-400 shadow-[0_0_6px_#fb7185]" />
              Fi&apos;il (Merah)
            </span>
            <span className="flex items-center gap-1 text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 px-1.5 sm:px-2 py-0.5 rounded-lg">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              Isim (Hijau)
            </span>
            <span className="flex items-center gap-1 text-orange-300 bg-orange-950/60 border border-orange-500/40 px-1.5 sm:px-2 py-0.5 rounded-lg">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400 shadow-[0_0_6px_#fb923c]" />
              Harf (Oren)
            </span>
            <span className="hidden xs:flex items-center gap-1 text-slate-400 bg-slate-900 border border-slate-700 px-1.5 sm:px-2 py-0.5 rounded-lg">
              Kanan ke Kiri
              <ArrowLeft className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 ml-0.5" />
            </span>
          </div>
        )}
      </div>

      {/* Pattern Slot Blueprint in RTL layout */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-1.5 sm:gap-2.5 md:gap-3 py-0.5 sm:py-1 relative z-10" dir="rtl">
        {patterns.map((p, idx) => {
          const style = getPatternSlotStyling(p, isMonochrome);

          return (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center min-w-[72px] xs:min-w-[85px] sm:min-w-[110px] md:min-w-[135px] px-2 sm:px-3.5 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl ${style.boxBorder} ${style.boxBg} ${style.boxGlow} relative overflow-hidden transition-all duration-200 group flex-1 max-w-[140px] sm:max-w-[160px]`}
            >
              {/* Slot Number Tag */}
              <div className={`absolute top-1 left-1 sm:top-1.5 sm:left-1.5 text-[8px] sm:text-[9px] font-mono font-black ${style.slotNumBadge} px-1 sm:px-1.5 py-0.2 rounded`}>
                #{idx + 1}
              </div>

              {/* Arabic Term */}
              <span className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black font-arabic ${style.arabicText} py-0.5 leading-tight`}>
                {p.ar}
              </span>

              {/* Malay Grammatical Category Badge */}
              <span className={`text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-wider mt-0.5 sm:mt-1 ${style.msBadge} px-1.5 sm:px-2.5 py-0.5 rounded-md sm:rounded-lg truncate max-w-full`}>
                {p.ms}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
