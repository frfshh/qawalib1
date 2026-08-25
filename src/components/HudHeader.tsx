import React from 'react';
import { Volume2, VolumeX, Pause, Play, Flame, Sparkles, SlidersHorizontal, Trophy, Clock } from 'lucide-react';
import { LevelQuestion, MusicTheme } from '../types';

interface HudHeaderProps {
  currentLevelData: LevelQuestion;
  currentLevelIndex: number;
  totalLevels: number;
  isBonusMode: boolean;
  score: number;
  combo: number;
  timeLeft: number;
  maxTime: number;
  isPaused: boolean;
  isMuted: boolean;
  currentTheme: MusicTheme;
  onTogglePause: () => void;
  onToggleMute: () => void;
  onOpenNavMenu: () => void;
}

export const HudHeader: React.FC<HudHeaderProps> = ({
  currentLevelData,
  currentLevelIndex,
  totalLevels,
  isBonusMode,
  score,
  combo,
  timeLeft,
  maxTime,
  isPaused,
  isMuted,
  currentTheme,
  onTogglePause,
  onToggleMute,
  onOpenNavMenu,
}) => {
  const isTimeCritical = timeLeft <= 8;
  const progressPercent = Math.min(100, Math.max(0, (timeLeft / maxTime) * 100));

  return (
    <header className="w-full flex flex-col gap-2.5">
      {/* Top Cockpit Bar with Modern Chamfered Cards */}
      <div className="grid grid-cols-12 gap-2.5 items-stretch">
        
        {/* Mission & Unit Info HUD (Col 1-5) */}
        <div className="col-span-12 sm:col-span-5 bg-gradient-to-br from-[#0c1e38]/95 via-[#081528]/95 to-[#040c18]/95 border-2 border-teal-500/50 rounded-2xl p-3 sm:p-3.5 shadow-xl shadow-black/70 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-28 h-28 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between gap-2 relative z-10">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-black tracking-wider ${
                isBonusMode
                  ? 'bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 shadow-[0_0_12px_rgba(251,191,36,0.6)] animate-pulse'
                  : 'bg-teal-500/20 text-teal-300 border border-teal-400/50'
              }`}>
                {isBonusMode ? '⭐ ROUND BONUS' : `UNIT ${currentLevelData.unitNum}`}
              </span>
              <span className="text-[11px] text-slate-300 font-semibold bg-slate-900/60 px-2 py-0.5 rounded-md border border-slate-700/60">
                {isBonusMode ? `Bonus ${currentLevelIndex + 1}/${totalLevels}` : `Tahap ${currentLevelIndex + 1}/${totalLevels}`}
              </span>
            </div>
            
            {combo > 1 && (
              <div className="flex items-center gap-1 text-xs font-black text-amber-300 bg-amber-950/80 border border-amber-400/60 px-2.5 py-0.5 rounded-lg animate-bounce shadow-[0_0_10px_rgba(251,191,36,0.4)]">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>{combo}X</span>
              </div>
            )}
          </div>

          <div className="mt-2 relative z-10">
            <h2 className="text-base sm:text-lg font-black text-slate-100 truncate tracking-tight">
              {currentLevelData.unitName}
            </h2>
            {currentLevelData.unitArName && (
              <p className="text-lg sm:text-xl font-arabic font-black text-teal-300 text-right leading-snug mt-1 drop-shadow" dir="rtl">
                {currentLevelData.unitArName}
              </p>
            )}
          </div>
        </div>

        {/* Score Display HUD (Col 6-8) - Minimalist (Trophy Symbol & Value Only) */}
        <div className="col-span-6 sm:col-span-4 bg-gradient-to-br from-[#1a1405]/95 via-[#120d02]/95 to-[#080601]/95 border-2 border-amber-400/60 rounded-2xl p-2.5 sm:p-3 shadow-xl shadow-black/70 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-400/10 to-transparent pointer-events-none" />
          <div className="flex items-center gap-2 sm:gap-3">
            <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.7)] shrink-0 animate-pulse" />
            <div className="text-2xl sm:text-3xl font-black text-amber-400 tracking-wider font-mono drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]">
              {score.toLocaleString('en-US', { minimumIntegerDigits: 6, useGrouping: false })}
            </div>
          </div>
        </div>

        {/* Countdown Timer HUD (Col 9-12) - Minimalist (Clock Symbol, Value & Bar Only) */}
        <div className={`col-span-6 sm:col-span-3 rounded-2xl p-2.5 sm:p-3 shadow-xl backdrop-blur-xl flex flex-col justify-center items-center text-center relative transition-all duration-300 ${
          isTimeCritical
            ? 'bg-gradient-to-br from-rose-950/95 to-red-950/95 border-2 border-rose-500 shadow-rose-950/80 animate-pulse'
            : 'bg-gradient-to-br from-[#0c182a]/95 to-[#060e1a]/95 border-2 border-indigo-500/50 shadow-black/70'
        }`}>
          <div className="flex items-center gap-2">
            <Clock className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 ${isTimeCritical ? 'text-rose-400 animate-spin' : 'text-cyan-400'}`} style={isTimeCritical ? { animationDuration: '4s' } : undefined} />
            <div className={`text-2xl sm:text-3xl font-black tracking-widest font-mono ${
              isTimeCritical ? 'text-rose-400 drop-shadow-[0_0_12px_rgba(244,63,94,0.9)]' : 'text-slate-100'
            }`}>
              0:{timeLeft.toString().padStart(2, '0')}
            </div>
          </div>
          
          {/* Glowing Animated Progress Bar */}
          <div className="w-full h-1.5 bg-slate-950/80 rounded-full mt-2 overflow-hidden p-0.5 border border-slate-700/60">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                isTimeCritical
                  ? 'bg-rose-500 shadow-[0_0_8px_#f43f5e]'
                  : 'bg-gradient-to-r from-teal-400 via-cyan-400 to-amber-400 shadow-[0_0_8px_#2dd4bf]'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

      </div>

      {/* Action Strip: Compact Pause/Audio on Left & Sleek Hidden Menu Button on Right */}
      <div className="flex items-center justify-between gap-2 px-0.5">
        <div className="flex items-center gap-1.5">
          <button
            onClick={onTogglePause}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 transition-all active:scale-95 shadow-md cursor-pointer"
            title={isPaused ? "Sambung" : "Jeda"}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5 text-amber-400" />}
            <span>{isPaused ? 'Sambung' : 'Jeda'}</span>
          </button>

          <button
            onClick={onToggleMute}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all active:scale-95 shadow-md cursor-pointer ${
              isMuted
                ? 'bg-rose-950/80 border-rose-500 text-rose-300'
                : 'bg-slate-900/90 border-slate-700 hover:bg-slate-800 text-slate-200'
            }`}
            title="Bisu / Audio"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
            <span>{isMuted ? 'Bisu' : 'Audio'}</span>
          </button>
        </div>

        {/* Unified Hidden Navigation Menu Trigger Button */}
        <div>
          <button
            onClick={onOpenNavMenu}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-950/90 via-slate-900/90 to-teal-950/90 hover:from-cyan-900 hover:to-teal-900 border-2 border-cyan-400/60 text-xs font-black text-cyan-200 transition-all active:scale-95 shadow-lg shadow-cyan-950/50 hover:shadow-cyan-500/20 cursor-pointer"
            title="Menu"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Menu</span>
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shadow-[0_0_6px_#fbbf24]" />
          </button>
        </div>
      </div>
    </header>
  );
};
