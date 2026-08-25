import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, RotateCcw, Zap, Award, CheckCircle2, XCircle, Clock, Sparkles, Shuffle } from 'lucide-react';
import { GameStats } from '../types';
import { allQuestionSets, QuestionSetMeta } from '../data/questionSets';

interface VictoryModalProps {
  isOpen: boolean;
  isBonusOffer: boolean;
  isBonusModeCompleted: boolean;
  stats: GameStats;
  currentSetId: number;
  onStartBonusGame: () => void;
  onRestartGame: (newSetId?: number) => void;
  onFinishGame: () => void;
  onOpenLeaderboard: () => void;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({
  isOpen,
  isBonusOffer,
  isBonusModeCompleted,
  stats,
  currentSetId,
  onStartBonusGame,
  onRestartGame,
  onFinishGame,
  onOpenLeaderboard,
}) => {
  useEffect(() => {
    if (isOpen) {
      // Fire celebratory confetti bursts
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        confetti({
          particleCount: 90,
          angle: 60,
          spread: 60,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 90,
          angle: 120,
          spread: 60,
          origin: { x: 1 }
        });
      }, 400);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const totalQuestions = stats.correctAnswers + stats.wrongAnswers + stats.timeouts;
  const accuracy = totalQuestions > 0 ? Math.round((stats.correctAnswers / totalQuestions) * 100) : 100;

  let rankTitle = 'MUMTAZ (Cemerlang Tertinggi)';
  let rankAr = 'مُمْتَازٌ مُرْتَفِعٌ';
  let rankDesc = 'Penguasaan nahu, fi\'il, isim, dan harf yang sungguh mantap dan jitu!';

  if (accuracy < 70) {
    rankTitle = 'MAQBUL (Lulus & Usaha Lagi)';
    rankAr = 'مَقْبُولٌ';
    rankDesc = 'Teruskan latihan susunan qawalib untuk memantapkan pemahaman nahu.';
  } else if (accuracy < 85) {
    rankTitle = 'JAYYID JIDDAN (Sangat Baik)';
    rankAr = 'جَيِّدٌ جِدّاً';
    rankDesc = 'Tahap kefahaman qawalib ayat yang sangat baik dan lancar!';
  }

  // Calculate next different set
  const nextSetId = (currentSetId % allQuestionSets.length) + 1;
  const currentSetInfo = allQuestionSets.find(s => s.id === currentSetId) || allQuestionSets[0];
  const nextSetInfo = allQuestionSets.find(s => s.id === nextSetId) || allQuestionSets[1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto">
      <div className="w-full max-w-lg bg-gradient-to-b from-slate-900 via-[#0c182a] to-[#040a14] border-2 border-amber-400 rounded-3xl p-5 sm:p-7 text-center shadow-2xl shadow-amber-950 flex flex-col gap-3.5 relative overflow-hidden my-auto max-h-[92vh] overflow-y-auto">
        <div className="absolute top-0 right-0 w-52 h-52 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Trophy icon with 3D glow */}
        <div className="mx-auto w-16 h-16 rounded-3xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-[0_0_30px_rgba(251,191,36,0.6)] shrink-0">
          <Trophy className="w-9 h-9" />
        </div>

        {/* Title */}
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-amber-400/20 text-amber-300 border border-amber-400/50 mb-1.5 shadow">
            {isBonusOffer ? '🏆 SEMUA 24 UNIT SELESAI!' : isBonusModeCompleted ? '👑 JUARA KESELURUHAN & BONUS!' : 'MISI SELESAI'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-100 font-sans tracking-tight">
            {isBonusOffer ? 'Tahniah & Syabas!' : 'Keputusan Keseluruhan'}
          </h2>
          <p className="text-2xl sm:text-3xl font-arabic font-black text-amber-300 text-center mt-1 drop-shadow" dir="rtl">
            {rankAr}
          </p>
        </div>

        {/* Score Display */}
        <div className="bg-slate-950/90 border-2 border-amber-400/40 rounded-2xl p-3.5 flex flex-col items-center shadow-inner">
          <span className="text-[11px] uppercase font-black tracking-widest text-amber-300/80">
            Jumlah Markah Keseluruhan ({currentSetInfo.badge})
          </span>
          <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono tracking-wider drop-shadow-[0_0_20px_rgba(251,191,36,0.6)] my-0.5">
            {stats.score.toLocaleString()}
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 px-3 py-0.5 rounded-full mt-1">
            <Award className="w-3.5 h-3.5" />
            <span>Ketepatan: {accuracy}%</span>
          </div>
        </div>

        {/* Detailed Stats Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-2.5 flex flex-col items-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-0.5" />
            <span className="text-base sm:text-lg font-black text-emerald-400 font-mono">{stats.correctAnswers}</span>
            <span className="text-[9px] uppercase font-bold text-slate-400">Betul</span>
          </div>
          
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-2.5 flex flex-col items-center">
            <XCircle className="w-4 h-4 text-rose-400 mb-0.5" />
            <span className="text-base sm:text-lg font-black text-rose-400 font-mono">{stats.wrongAnswers}</span>
            <span className="text-[9px] uppercase font-bold text-slate-400">Salah</span>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-2.5 flex flex-col items-center">
            <Clock className="w-4 h-4 text-amber-400 mb-0.5" />
            <span className="text-base sm:text-lg font-black text-amber-400 font-mono">{stats.timeouts}</span>
            <span className="text-[9px] uppercase font-bold text-slate-400">Masa Tamat</span>
          </div>
        </div>

        {/* Rank Description */}
        <div className="bg-teal-950/40 border border-teal-500/40 rounded-2xl p-3 text-xs text-slate-200 text-left">
          <div className="font-black text-teal-300 mb-0.5">{rankTitle}</div>
          <p className="text-slate-300 text-[11px] leading-relaxed">{rankDesc}</p>
        </div>

        {/* Primary Leaderboard Action Button */}
        <button
          onClick={onOpenLeaderboard}
          className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 transition active:scale-98 cursor-pointer shrink-0"
        >
          <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950" />
          <span>Rekod & Lihat di Papan Juara</span>
        </button>

        {/* Dynamic Replay & Question Set Selection */}
        <div className="bg-slate-950/80 border border-teal-500/40 rounded-2xl p-3 flex flex-col gap-2">
          <div className="flex items-center justify-between text-left">
            <span className="text-xs font-black text-teal-300 flex items-center gap-1.5">
              <Shuffle className="w-3.5 h-3.5 text-teal-400" />
              Main Semula Dengan Set Kosa Kata Berbeza:
            </span>
            <span className="text-[10px] text-slate-400">{allQuestionSets.length} Set Tersedia</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {allQuestionSets.map((s: QuestionSetMeta) => {
              const isCurrent = s.id === currentSetId;
              return (
                <button
                  key={s.id}
                  onClick={() => onRestartGame(s.id)}
                  className={`p-2 rounded-xl text-left border transition flex flex-col cursor-pointer ${
                    isCurrent
                      ? 'bg-teal-950 border-teal-400 text-teal-200 ring-1 ring-teal-400'
                      : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="text-[10px] font-black truncate">{s.badge}</span>
                  <span className="text-[9px] text-slate-400 truncate">{s.title.split(':')[1] || s.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        {isBonusOffer ? (
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={onFinishGame}
              className="flex-1 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition cursor-pointer"
            >
              Tutup & Tamat
            </button>
            <button
              onClick={onStartBonusGame}
              className="flex-1 py-2.5 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-teal-950 transition active:scale-98 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Mula Round Bonus!</span>
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => onRestartGame(nextSetId)}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition active:scale-98 cursor-pointer shadow-lg shadow-teal-950"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Tukar & Main {nextSetInfo.badge} (Kosa Kata Baharu)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
