import React from 'react';
import { WordOption } from '../types';
import { Plus, Sparkles } from 'lucide-react';

interface WordBankProps {
  options: WordOption[];
  selectedOriginalIndices: number[];
  onSelectWord: (word: WordOption, originalIndex: number) => void;
  disabled?: boolean;
  isMonochrome?: boolean;
}

export const WordBank: React.FC<WordBankProps> = ({
  options,
  selectedOriginalIndices,
  onSelectWord,
  disabled = false,
  isMonochrome = false,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 sm:gap-3 bg-gradient-to-br from-[#0c182a]/95 via-[#081220]/95 to-[#040912]/95 border-2 border-slate-700/80 rounded-2xl p-2.5 sm:p-4 md:p-5 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header - Pure Arabic with Crisp Typography */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 px-1 relative z-10">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
          <span className="font-arabic font-black text-sm sm:text-base md:text-lg text-amber-300">
            بَنْكُ المُفْرَدَاتِ
          </span>
        </div>
        <span className="font-arabic text-xs sm:text-sm text-emerald-300 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 sm:px-2.5 py-0.5 rounded-lg" dir="rtl">
          اخْتَرِ الكَلِمَاتِ لِبِنَاءِ الجُمْلَةِ
        </span>
      </div>

      {/* Interactive Word Tiles in RTL orientation for intuitive Arabic layout */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-3.5 py-1 relative z-10" dir="rtl">
        {options.map((item, originalIndex) => {
          const isSelected = selectedOriginalIndices.includes(originalIndex);
          const isIsim = item.type === 'isim';
          const isFiil = item.type === 'fiil';

          let borderBgClasses = '';
          if (isMonochrome) {
            // Set E: Neutral sleek titanium / slate styling without any color clues!
            borderBgClasses = 'border-slate-400/80 bg-gradient-to-b from-slate-800 via-slate-850 to-slate-900 text-slate-100 shadow-[0_3px_0_#334155,0_0_12px_rgba(148,163,184,0.15)] sm:shadow-[0_6px_0_#334155,0_0_18px_rgba(148,163,184,0.2)] hover:border-slate-200 hover:shadow-[0_8px_0_#475569,0_0_24px_rgba(226,232,240,0.3)]';
          } else if (isFiil) {
            borderBgClasses = 'border-rose-400 bg-gradient-to-b from-rose-950 via-[#4c0519] to-[#330310] text-rose-100 shadow-[0_3px_0_#9f1239,0_0_12px_rgba(244,63,94,0.25)] sm:shadow-[0_6px_0_#9f1239,0_0_18px_rgba(244,63,94,0.25)] hover:shadow-[0_8px_0_#9f1239,0_0_24px_rgba(244,63,94,0.45)]';
          } else if (isIsim) {
            borderBgClasses = 'border-emerald-400 bg-gradient-to-b from-emerald-950 via-[#064e3b] to-[#022c22] text-emerald-100 shadow-[0_3px_0_#065f46,0_0_12px_rgba(16,185,129,0.25)] sm:shadow-[0_6px_0_#065f46,0_0_18px_rgba(16,185,129,0.25)] hover:shadow-[0_8px_0_#065f46,0_0_24px_rgba(16,185,129,0.45)]';
          } else {
            borderBgClasses = 'border-orange-400 bg-gradient-to-b from-orange-950 via-[#5c2406] to-[#381402] text-orange-100 shadow-[0_3px_0_#c2410c,0_0_12px_rgba(249,115,22,0.25)] sm:shadow-[0_6px_0_#c2410c,0_0_18px_rgba(249,115,22,0.25)] hover:shadow-[0_8px_0_#c2410c,0_0_24px_rgba(249,115,22,0.45)]';
          }

          if (isSelected) {
            return (
              <div
                key={originalIndex}
                className="opacity-25 pointer-events-none scale-95 transition-all flex flex-col items-center justify-center min-w-[76px] xs:min-w-[88px] sm:min-w-[120px] md:min-w-[145px] px-2 sm:px-4 py-1.5 sm:py-3 md:px-5 md:py-3.5 rounded-xl sm:rounded-2xl border-2 border-slate-700 bg-slate-900/60 text-slate-500 flex-1 max-w-[160px] sm:max-w-none"
              >
                <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-arabic line-through py-0.5 sm:py-1 leading-tight">{item.w}</span>
                {item.msMeaning && (
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-tight mt-0.5 sm:mt-1 truncate max-w-full text-slate-400">
                    {item.msMeaning}
                  </span>
                )}
              </div>
            );
          }

          return (
            <button
              key={originalIndex}
              disabled={disabled}
              onClick={() => onSelectWord(item, originalIndex)}
              className={`group flex flex-col items-center justify-center min-w-[76px] xs:min-w-[88px] sm:min-w-[120px] md:min-w-[145px] px-2 sm:px-4 py-1.5 sm:py-3 md:px-5 md:py-3.5 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-200 active:translate-y-1 sm:active:translate-y-1.5 active:shadow-none hover:-translate-y-0.5 flex-1 max-w-[160px] sm:max-w-none ${borderBgClasses}`}
            >
              {/* Arabic Word - Scaled for Phone & Laptop */}
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-arabic leading-relaxed drop-shadow py-0.5 sm:py-1">
                  {item.w}
                </span>
                <Plus className="w-3.5 h-3.5 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 transition-opacity text-slate-200 hidden xs:block" />
              </div>

              {/* Malay Meaning (for Set A & B) without any fiil/isim/harf label text */}
              {item.msMeaning ? (
                <div className="flex items-center justify-center mt-0.5 sm:mt-1 max-w-full overflow-hidden" dir="ltr">
                  <span className="text-[9px] xs:text-[10px] sm:text-xs text-amber-200 font-bold tracking-tight truncate max-w-full text-center bg-black/40 border border-white/10 px-1.5 sm:px-2 py-0.5 rounded-md">
                    {item.msMeaning}
                  </span>
                </div>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
};
