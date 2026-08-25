import React from 'react';
import { X, Target, Trophy, Music, HelpCircle, Volume2, VolumeX, Pause, Play, Compass, Sparkles, ChevronRight, Sliders } from 'lucide-react';
import { MusicTheme, AtmosphereMode } from '../types';

interface HiddenNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBonusQuiz: () => void;
  onOpenLeaderboard: () => void;
  onOpenAudioSettings: () => void;
  onOpenHelp: () => void;
  onTogglePause: () => void;
  onToggleMute: () => void;
  isPaused: boolean;
  isMuted: boolean;
  currentTheme: MusicTheme;
  atmosphereMode: AtmosphereMode;
}

export const HiddenNavMenu: React.FC<HiddenNavMenuProps> = ({
  isOpen,
  onClose,
  onOpenBonusQuiz,
  onOpenLeaderboard,
  onOpenAudioSettings,
  onOpenHelp,
  onTogglePause,
  onToggleMute,
  isPaused,
  isMuted,
  currentTheme,
  atmosphereMode,
}) => {
  if (!isOpen) return null;

  const getThemeShortLabel = (theme: MusicTheme) => {
    switch (theme) {
      case 'pixel_minecraft': return 'Minecraft 8-Bit';
      case 'merdeka_march': return 'Merdeka March';
      case 'zombie_darkwave': return 'Zombie Darkwave';
      case 'sakura_breeze': return 'Sakura Garden';
      case 'lofi_nasheed': return 'Lofi Nasyeed';
      case 'sahara_drift': return 'Sahara Phonk';
      case 'mamluk_tension': return 'Mamluk Boss';
      case 'andalusia_rush': return 'Andalusia Rush';
      case 'desert_trap': return 'Desert Trap';
      case 'nasheed_electro': return 'Qasidah Electro';
      case 'neon_oud': return 'Neon Oud';
      case 'synth_arcade': return 'Arcade Nahu';
      case 'bonus_turbo': return 'Turbo Matrix';
      case 'ambient_arabic': return 'Chill Lofi';
      case 'ocean_breeze': return 'Ocean Symphony';
      case 'sunset_chaghaf': return 'Sunset Acoustic';
      case 'teacher_anthem': return 'Mars Guru & Ibu';
      case 'cyber_hijaz':
      default:
        return 'Cyber Hijaz';
    }
  };

  const getAtmosphereLabel = (mode: AtmosphereMode) => {
    switch (mode) {
      case 'panorama_laut': return '🌊 Lautan Tenang';
      case 'panorama_petang': return '🌅 Senja Emas';
      case 'hari_guru': return '🎓 Hari Guru';
      case 'hari_ibu': return '💐 Kasih Ibu';
      case 'minecraft_voxel': return '⛏️ Minecraft 3D';
      case 'kemerdekaan': return '🇲🇾 Kemerdekaan';
      case 'zombie_apocalypse': return '🧟 Zombie Haunt';
      case 'bunga_sakura': return '🌸 Bunga Sakura';
      case 'tema_buku': return '📖 Buku Teks';
      case 'gelombang_muzik': return '📻 Visualizer';
      case 'suria_sahara': return '🏜️ Suria Sahara';
      case 'arcade_cyberpunk': return '🕹️ Arcade Neo';
      case 'cosmic_hijaz': return '🌌 Kosmik Hijaz';
      case 'astro_oasis':
      default:
        return '✨ Astro Oasis';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-gradient-to-b from-[#0e1c31] via-[#091424] to-[#040b15] border-2 border-cyan-500/40 rounded-3xl shadow-2xl shadow-cyan-950/80 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Drawer */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-[#07101d]/90">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.3)]">
              <Sliders className="w-4 h-4 text-cyan-300" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-100 tracking-tight flex items-center gap-2">
                Menu & Pilihan Ekstra
              </h3>
              <p className="text-[11px] text-slate-400">Navigasi pintas bonus, pencapaian & penyesuaian</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-400 hover:text-slate-100 flex items-center justify-center transition cursor-pointer"
            aria-label="Tutup Menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 flex flex-col gap-3 overflow-y-auto custom-scrollbar">
          
          {/* Quick Toggle Controls Strip */}
          <div className="grid grid-cols-2 gap-2 bg-slate-950/70 p-2 rounded-2xl border border-slate-800/80">
            <button
              onClick={onTogglePause}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-bold transition cursor-pointer ${
                isPaused
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                  : 'bg-slate-900 border-slate-700 hover:bg-slate-850 text-slate-300'
              }`}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5 text-amber-400" />}
              <span>{isPaused ? 'Sambung Main' : 'Jeda Masa'}</span>
            </button>

            <button
              onClick={onToggleMute}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-bold transition cursor-pointer ${
                isMuted
                  ? 'bg-rose-950/80 border-rose-500 text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.3)]'
                  : 'bg-slate-900 border-slate-700 hover:bg-slate-850 text-slate-300'
              }`}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{isMuted ? 'Bisu (Muted)' : 'Audio Hidup'}</span>
            </button>
          </div>

          {/* Nav Item 1: Cabaran Bonus Baris & I'rab */}
          <button
            onClick={() => {
              onClose();
              onOpenBonusQuiz();
            }}
            className="group flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-teal-950/60 to-slate-900/80 hover:from-emerald-900/80 hover:to-teal-900/80 border-2 border-emerald-500/50 hover:border-emerald-400 transition-all duration-200 text-left cursor-pointer shadow-lg shadow-emerald-950/30 active:scale-[0.99]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                <Target className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-emerald-200">Bonus Baris (Makmal I&apos;rab)</span>
                  <span className="text-[10px] font-black bg-emerald-500/30 text-emerald-300 border border-emerald-400/50 px-1.5 py-0.2 rounded-md">
                    +150 PTS
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Uji kemahiran menentukan baris akhir (dhammah, fathah, kasrah)
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </button>

          {/* Nav Item 2: Papan Juara / Leaderboard */}
          <button
            onClick={() => {
              onClose();
              onOpenLeaderboard();
            }}
            className="group flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/70 via-yellow-950/60 to-slate-900/80 hover:from-amber-900/80 hover:to-yellow-900/80 border-2 border-amber-500/50 hover:border-amber-400 transition-all duration-200 text-left cursor-pointer shadow-lg shadow-amber-950/30 active:scale-[0.99]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/60 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                <Trophy className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-amber-200">Papan Juara (Peringkat Markah)</span>
                  <span className="text-[10px] font-black bg-amber-500/30 text-amber-300 border border-amber-400/50 px-1.5 py-0.2 rounded-md">
                    REKOD
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Lihat dewan kemasyhuran rekod markah tertinggi & kombo
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </button>

          {/* Nav Item 3: Muzik & Tema Grafik */}
          <button
            onClick={() => {
              onClose();
              onOpenAudioSettings();
            }}
            className="group flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-cyan-950/70 via-sky-950/60 to-slate-900/80 hover:from-cyan-900/80 hover:to-sky-900/80 border-2 border-cyan-500/50 hover:border-cyan-400 transition-all duration-200 text-left cursor-pointer shadow-lg shadow-cyan-950/30 active:scale-[0.99]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/60 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                <Music className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-cyan-200">Muzik & Tema Grafik</span>
                  <span className="text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 px-1.5 py-0.2 rounded-md">
                    {getThemeShortLabel(currentTheme)}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5 flex items-center gap-1.5">
                  <span>Tema visual:</span>
                  <span className="text-cyan-300 font-bold">{getAtmosphereLabel(atmosphereMode)}</span>
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </button>

          {/* Nav Item 4: Panduan & Rujukan Nahu */}
          <button
            onClick={() => {
              onClose();
              onOpenHelp();
            }}
            className="group flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900/80 to-slate-900/80 hover:from-indigo-900/80 hover:to-slate-800 border-2 border-indigo-500/40 hover:border-indigo-400 transition-all duration-200 text-left cursor-pointer shadow-lg active:scale-[0.99]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/60 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(99,102,241,0.3)]">
                <HelpCircle className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-sm font-black text-indigo-200">Panduan Nahu & Qawalib</span>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Formula susunan ayat Ismiyyah, Fi&apos;liyyah & Jar Majrur
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </button>

        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-800/80 bg-[#07101d] text-center">
          <span className="text-[10px] text-slate-400">
            ArabQuest Qawalib • Penguasaan Nahu Interaktif KSSM
          </span>
        </div>
      </div>
    </div>
  );
};
