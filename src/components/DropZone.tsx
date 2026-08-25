import React from 'react';
import { SelectedWordSlot, PatternSlot } from '../types';
import { X, CornerRightDown } from 'lucide-react';

interface DropZoneProps {
  selectedWords: SelectedWordSlot[];
  expectedCount?: number;
  patterns: PatternSlot[];
  onRemoveWord: (index: number) => void;
  feedbackType?: 'idle' | 'correct' | 'wrong' | 'timeout';
  disabled?: boolean;
  isMonochrome?: boolean;
}

export const DropZone: React.FC<DropZoneProps> = ({
  selectedWords,
  expectedCount,
  patterns,
  onRemoveWord,
  disabled = false,
  isMonochrome = false,
}) => {
  const targetCount = expectedCount !== undefined ? expectedCount : patterns.length;
  const emptySlotsCount = Math.max(0, targetCount - selectedWords.length);

  return (
    <div className="w-full flex flex-col gap-2 sm:gap-2.5 bg-gradient-to-br from-[#060f1c]/95 to-[#02070e]/95 border-2 border-slate-700/80 rounded-2xl p-2.5 sm:p-4 shadow-inner backdrop-blur-xl relative">
      {/* Header Info */}
      <div className="flex items-center justify-between text-[11px] sm:text-xs font-black text-slate-300 uppercase tracking-wider px-1">
        <span className="flex items-center gap-1 sm:gap-1.5 text-amber-400">
          <CornerRightDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
          <span className="font-arabic font-black text-sm sm:text-base text-amber-300">الجَوَاب</span>
        </span>
        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-amber-300 bg-amber-950/60 border border-amber-500/40 px-2 sm:px-2.5 py-0.5 rounded-lg shrink-0">
          {selectedWords.length} / {targetCount}
        </span>
      </div>

      {/* Drop Zone Area in RTL layout */}
      <div
        className={`min-h-[75px] sm:min-h-[105px] p-2 sm:p-3.5 rounded-xl border-2 flex flex-row flex-wrap items-center justify-start gap-1.5 sm:gap-3 transition-all duration-300 ${
          selectedWords.length > 0
            ? 'bg-[#091526]/90 border-slate-700/80 shadow-[inset_0_0_20px_rgba(0,0,0,0.7)]'
            : 'bg-slate-900/40 border-dashed border-slate-700/80'
        }`}
        dir="rtl"
      >
        {/* Filled Selected Words */}
        {selectedWords.map((slot, index) => {
          const isIsim = slot.word.type === 'isim';
          const isFiil = slot.word.type === 'fiil';

          // Color & 3D bevel classes: Isim = Green, Fi'il = Red, Harf = Orange, or Neutral Slate for Set E
          let colorClasses = '';

          if (isMonochrome) {
            colorClasses = 'border-slate-400/80 bg-gradient-to-b from-slate-800 to-slate-900 text-slate-100 shadow-[0_3px_0_#334155,0_0_12px_rgba(148,163,184,0.2)] sm:shadow-[0_5px_0_#334155,0_0_18px_rgba(148,163,184,0.25)] hover:border-slate-200';
          } else if (isFiil) {
            colorClasses = 'border-rose-400 bg-gradient-to-b from-rose-900 to-rose-950 text-rose-100 shadow-[0_3px_0_#9f1239,0_0_12px_rgba(244,63,94,0.3)] sm:shadow-[0_5px_0_#9f1239,0_0_18px_rgba(244,63,94,0.4)] hover:brightness-110';
          } else if (isIsim) {
            colorClasses = 'border-emerald-400 bg-gradient-to-b from-emerald-900 to-emerald-950 text-emerald-100 shadow-[0_3px_0_#065f46,0_0_12px_rgba(16,185,129,0.3)] sm:shadow-[0_5px_0_#065f46,0_0_18px_rgba(16,185,129,0.4)] hover:brightness-110';
          } else {
            colorClasses = 'border-orange-400 bg-gradient-to-b from-orange-900 to-orange-950 text-orange-100 shadow-[0_3px_0_#c2410c,0_0_12px_rgba(249,115,22,0.3)] sm:shadow-[0_5px_0_#c2410c,0_0_18px_rgba(249,115,22,0.4)] hover:brightness-110';
          }

          return (
            <button
              key={slot.id}
              disabled={disabled}
              onClick={() => onRemoveWord(index)}
              className={`group relative flex flex-col items-center justify-center px-2 sm:px-4 py-1.5 sm:py-3 md:px-5 md:py-3.5 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all active:translate-y-1 active:shadow-none min-w-[76px] xs:min-w-[88px] sm:min-w-[120px] md:min-w-[145px] flex-1 max-w-[160px] sm:max-w-none ${colorClasses}`}
              title="Klik untuk batalkan pilihan"
            >
              {/* Remove cross indicator badge */}
              <div className="absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-slate-950 border-2 border-rose-400 text-rose-300 flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity shadow-lg z-20">
                <X className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
              </div>

              {/* Arabic Word with Calligraphic Clarity */}
              <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-arabic leading-relaxed drop-shadow-md py-0.5 sm:py-1">
                {slot.word.w}
              </span>

              {/* Optional Malay Meaning if present */}
              {slot.word.msMeaning && (
                <div className="flex items-center justify-center mt-0.5 sm:mt-1 max-w-full overflow-hidden" dir="ltr">
                  <span className="text-[9px] xs:text-[10px] sm:text-xs text-amber-200 font-bold tracking-tight truncate max-w-full text-center">
                    {slot.word.msMeaning}
                  </span>
                </div>
              )}
            </button>
          );
        })}

        {/* Empty Clean Placeholder Docking Slots */}
        {Array.from({ length: emptySlotsCount }).map((_, i) => {
          const slotIndex = selectedWords.length + i;

          return (
            <div
              key={`empty-${i}`}
              className="flex flex-col items-center justify-center min-w-[76px] xs:min-w-[88px] sm:min-w-[120px] md:min-w-[145px] h-[65px] sm:h-[95px] rounded-xl sm:rounded-2xl border-2 border-dashed border-slate-700/80 bg-slate-900/30 text-slate-500 transition-all relative overflow-hidden flex-1 max-w-[160px] sm:max-w-none"
            >
              <span className="text-[11px] sm:text-xs font-mono font-bold opacity-70">
                #{slotIndex + 1}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
