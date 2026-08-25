import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, Trophy, Sparkles, Clock, Flame, BookOpen, Target } from 'lucide-react';
import { LevelQuestion } from '../types';
import { getSentenceIrabAnalysis, getMaknaMufidah } from '../utils/irabHelper';

interface LevelTransitionModalProps {
  isOpen: boolean;
  isBonusMode: boolean;
  levelData: LevelQuestion;
  levelIndex: number;
  totalLevels: number;
  score: number;
  timeBonus: number;
  combo: number;
  onProceedNext: () => void;
  onOpenBonusQuiz?: () => void;
}

export const LevelTransitionModal: React.FC<LevelTransitionModalProps> = ({
  isOpen,
  isBonusMode,
  levelData,
  levelIndex,
  totalLevels,
  score,
  timeBonus,
  combo,
  onProceedNext,
  onOpenBonusQuiz,
}) => {
  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const irabList = getSentenceIrabAnalysis(levelData);
  const maknaMufidah = getMaknaMufidah(levelData);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      <div className="w-full max-w-lg bg-gradient-to-b from-slate-900 via-[#0a1828] to-[#040a14] border-2 border-teal-400/90 rounded-3xl p-4 sm:p-5 text-center shadow-2xl shadow-teal-950 flex flex-col gap-3 relative overflow-hidden my-auto max-h-[92vh] overflow-y-auto">
        <div className="absolute top-0 right-0 w-44 h-44 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Compact Portal Animation */}
        <div className="relative w-full h-14 rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-900 to-cyan-950 border border-teal-400/60 flex items-center justify-center overflow-hidden shadow-inner shrink-0">
          <div className="flex items-center justify-center gap-2 text-center animate-pulse z-0 px-2">
            <span className="text-xl">✨🕌✨</span>
            <div className="text-left">
              <div className="text-xs font-black uppercase tracking-wider text-amber-300">
                Laluan Terbuka! Tahniah Jawapan Tepat
              </div>
              <div className="text-[10px] text-teal-300 font-mono font-bold">PORTAL NAHU BERJAYA DITEMBUSI</div>
            </div>
          </div>
        </div>

        {/* Level & Question Info */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/50 shadow">
              <Trophy className="w-3 h-3" />
              {isBonusMode ? 'Tahap Bonus!' : 'Susunan Tepat & Sempurna'}
            </span>
            <span className="text-xs font-bold text-slate-300">
              Soalan {levelIndex + 1} dari {totalLevels}
            </span>
          </div>

          {/* Large Arabic Correct Sentence with Makna Mufidah */}
          <div className="mt-1 py-2 px-3 bg-slate-950/90 border border-teal-500/50 rounded-2xl flex flex-col gap-1 text-center">
            <p className="text-2xl sm:text-3xl font-arabic font-black text-teal-300 leading-snug drop-shadow" dir="rtl">
              {levelData.correctAns.join(' ')}
            </p>
            <div className="text-xs text-amber-200/90 font-medium italic border-t border-slate-800 pt-1">
              📖 <strong className="text-amber-300 not-italic">Makna Mufidah:</strong> &ldquo;{maknaMufidah}&rdquo;
            </div>
          </div>

          {/* Full Detailed Concept of I'rab & Baris breakdown */}
          <div className="mt-2 p-2.5 bg-slate-950/70 border border-slate-800 rounded-2xl text-left flex flex-col gap-1.5">
            <span className="text-[10px] uppercase font-black tracking-wider text-teal-400 flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              Analisis Terperinci I&apos;rab &amp; Baris Akhir:
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-0.5">
              {irabList.map((item, idx) => (
                <div
                  key={idx}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 flex flex-col gap-0.5 text-left"
                >
                  <div className="flex items-center justify-between gap-1" dir="rtl">
                    <span className="font-arabic font-bold text-teal-300 text-base">{item.word}</span>
                    <span className="text-[10px] font-bold text-amber-400 px-1.5 py-0.2 rounded bg-amber-400/10 border border-amber-400/30" dir="ltr">
                      {item.role}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-300">
                    <strong className="text-slate-100">Baris:</strong> {item.irabStatus} ({item.harakat})
                  </div>
                  <div className="text-[9px] text-slate-400">
                    {item.reason}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Breakdown Stats */}
        <div className="grid grid-cols-2 gap-2 bg-slate-950/80 border border-slate-800 rounded-xl p-2 text-left">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <div>
              <div className="text-[9px] uppercase font-black text-slate-400">Bonus Masa</div>
              <div className="text-xs sm:text-sm font-black text-teal-400 font-mono">+{timeBonus} PTS</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <div>
              <div className="text-[9px] uppercase font-black text-slate-400">Combo Streak</div>
              <div className="text-xs sm:text-sm font-black text-amber-400 font-mono">{combo}X MULTI</div>
            </div>
          </div>
        </div>

        {/* Current Total Score */}
        <div className="flex items-center justify-between px-2 bg-slate-950/40 rounded-lg py-1 border border-slate-800/50">
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Markah Terkumpul</span>
          <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono tracking-wider drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]">
            {score.toLocaleString()}
          </span>
        </div>

        {/* Action Buttons: Next Question & Optional Bonus Harakat Quiz */}
        <div className="flex flex-col gap-2 shrink-0">
          {onOpenBonusQuiz && (
            <button
              onClick={onOpenBonusQuiz}
              className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-teal-500/20 active:scale-98 transition cursor-pointer border-2 border-emerald-200"
            >
              <Target className="w-4 h-4 text-slate-950" />
              <span>🎯 Cabaran Bonus Baris &amp; I&apos;rab (+150 PTS / Kalimah)</span>
            </button>
          )}

          <button
            onClick={onProceedNext}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-teal-950 flex items-center justify-center gap-2 transition active:scale-98 cursor-pointer"
          >
            <span>Masuk Soalan Seterusnya</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
