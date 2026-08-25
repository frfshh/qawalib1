import React, { useState } from 'react';
import { X, Volume2, Music, Check, Sparkles, Waves, Flame, Compass, Coffee, Zap, Radio, Sliders } from 'lucide-react';
import { MusicTheme, AtmosphereMode } from '../types';
import { soundEngine } from '../audio/audioEngine';

interface AudioSettingsModalProps {
  isOpen: boolean;
  currentTheme: MusicTheme;
  atmosphereMode: AtmosphereMode;
  volume: number;
  isMuted: boolean;
  onClose: () => void;
  onSelectTheme: (theme: MusicTheme) => void;
  onSelectAtmosphere: (mode: AtmosphereMode) => void;
  onVolumeChange: (vol: number) => void;
  onToggleMute: () => void;
}

type TabKey = 'audio' | 'graphics';

export const AudioSettingsModal: React.FC<AudioSettingsModalProps> = ({
  isOpen,
  currentTheme,
  atmosphereMode,
  volume,
  isMuted,
  onClose,
  onSelectTheme,
  onSelectAtmosphere,
  onVolumeChange,
  onToggleMute,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('audio');

  if (!isOpen) return null;

  const tracks: { id: MusicTheme; title: string; desc: string; bpm: number; tag: string; icon: React.ReactNode }[] = [
    {
      id: 'ocean_breeze',
      title: 'Symphony Ocean Flute',
      desc: 'Alunan orkestral ombak laut yang damai bersama seruling & petikan harp menenangkan.',
      bpm: 94,
      tag: '🌊 Panorama Laut',
      icon: <Waves className="w-4 h-4 text-cyan-400" />
    },
    {
      id: 'sunset_chaghaf',
      title: 'Sunset Acoustic Chill',
      desc: 'Petikan gitar akustik senja & beat santai bernuansa hangat keemasan.',
      bpm: 90,
      tag: '🌅 Panorama Petang',
      icon: <Flame className="w-4 h-4 text-orange-400" />
    },
    {
      id: 'teacher_anthem',
      title: 'Mars Guru & Kasih Ibu',
      desc: 'Alunan piano orkestral agung & loceng inspirasi penuh kesyukuran jiwa.',
      bpm: 120,
      tag: '🎓 Hari Guru & Ibu',
      icon: <Sparkles className="w-4 h-4 text-amber-400" />
    },
    {
      id: 'pixel_minecraft',
      title: 'Minecraft Pixel 8-Bit',
      desc: 'Rentak retro chiptune santai & riang ala sandbox pengembaraan blok piksel.',
      bpm: 128,
      tag: '⛏️ Minecraft Retro',
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />
    },
    {
      id: 'merdeka_march',
      title: 'Merdeka Heroic March',
      desc: 'Paluan dram perbarisan patriotik & tiupan sintesis brass bersemangat waja.',
      bpm: 124,
      tag: '🇲🇾 Kemerdekaan',
      icon: <Flame className="w-4 h-4 text-yellow-400" />
    },
    {
      id: 'zombie_darkwave',
      title: 'Zombie Darkwave Haunt',
      desc: 'Rentak ghaib mendebarkan dengan bassline berat & synthesizer misteri.',
      bpm: 110,
      tag: '🧟 Zombie Spooky',
      icon: <Zap className="w-4 h-4 text-emerald-500" />
    },
    {
      id: 'sakura_breeze',
      title: 'Sakura Garden Acoustic',
      desc: 'Petikan koto & seruling zen menenangkan di taman bunga mekar.',
      bpm: 96,
      tag: '🌸 Bunga Sakura',
      icon: <Sparkles className="w-4 h-4 text-pink-400" />
    },
    {
      id: 'lofi_nasheed',
      title: 'Lofi Nasyeed Chill',
      desc: 'Alunan nasyid lofi yang santai, damai & menenangkan jiwa untuk mendalami qawaid nahu.',
      bpm: 86,
      tag: '☕ Lofi Nasyid',
      icon: <Coffee className="w-4 h-4 text-teal-400" />
    },
    {
      id: 'cyber_hijaz',
      title: 'Cyber Hijaz Synthwave',
      desc: 'Melodi Maqam Hijaz bertenaga dengan bassline synthwave & arpeggio moden.',
      bpm: 114,
      tag: '🔥 Pilihan Utama',
      icon: <Flame className="w-4 h-4 text-amber-400" />
    },
    {
      id: 'sahara_drift',
      title: 'Sahara Drift Phonk',
      desc: 'Rentak mendebarkan 808 Phonk Arab dengan cowbell tajam & bassline melayang.',
      bpm: 138,
      tag: '🏎️ Phonk Debar',
      icon: <Zap className="w-4 h-4 text-amber-400" />
    },
    {
      id: 'mamluk_tension',
      title: 'Mamluk Suspense Boss',
      desc: 'Rentak pertempuran tegang epik dengan paluan dram mendebarkan & arpeggio Maqam Kurd.',
      bpm: 132,
      tag: '⚔️ Boss Battle',
      icon: <Flame className="w-4 h-4 text-rose-400" />
    },
    {
      id: 'andalusia_rush',
      title: 'Andalusia Cyber Rush',
      desc: 'Alunan Euro-Arab riang bertenaga dengan synth rancak dan ketukan ceria.',
      bpm: 136,
      tag: '⚡ Euro-Arabic',
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />
    },
    {
      id: 'desert_trap',
      title: 'Desert Matrix Trap EDM',
      desc: 'Rentak 808 trap moden dengan paluan hi-hat laju & petikan kanun Bayati.',
      bpm: 130,
      tag: '⚡ EDM Trap',
      icon: <Zap className="w-4 h-4 text-cyan-400" />
    },
    {
      id: 'bonus_turbo',
      title: 'Hyperspeed Turbo Matrix',
      desc: 'Rentak pantas berdebar untuk cabaran bonus & kelajuan nahu maksimum!',
      bpm: 140,
      tag: '🚀 Speedrun',
      icon: <Zap className="w-4 h-4 text-rose-400" />
    },
    {
      id: 'synth_arcade',
      title: 'Arcade Nahu Rush',
      desc: 'Rentak retro 8-bit chiptune yang bertenaga ala konsol permainan arked.',
      bpm: 126,
      tag: '🕹️ Retro 8-Bit',
      icon: <Waves className="w-4 h-4 text-yellow-400" />
    },
    {
      id: 'nasheed_electro',
      title: 'Futuristic Qasidah Electro',
      desc: 'Alunan harmoni kasidah bersemangat dengan tepukan berentak & synth ceria.',
      bpm: 118,
      tag: '✨ Qasidah Moden',
      icon: <Sparkles className="w-4 h-4 text-teal-400" />
    },
    {
      id: 'neon_oud',
      title: 'Neon Oud Journey',
      desc: 'Petikan gambus Arab (Oud) futuristik dengan lenggok maqam Rast santai.',
      bpm: 104,
      tag: '🪕 Gambus Arab',
      icon: <Radio className="w-4 h-4 text-violet-400" />
    },
    {
      id: 'ambient_arabic',
      title: 'Chill Lofi Madrasah',
      desc: 'Alunan lembut dan tenang untuk fokus membaca dan meneliti nahu.',
      bpm: 92,
      tag: '☕ Tenang & Santai',
      icon: <Coffee className="w-4 h-4 text-teal-300" />
    }
  ];

  const atmospheres: { id: AtmosphereMode; title: string; desc: string; colorDot: string; emoji: string }[] = [
    {
      id: 'tema_buku',
      title: 'Tema Buku & Kitab Turath',
      desc: 'Lembaran kitab klasik keemasan, helaian ilmu terapung & aroma perpustakaan purba.',
      colorDot: 'bg-amber-500 shadow-[0_0_10px_#f59e0b]',
      emoji: '📖'
    },
    {
      id: 'panorama_laut',
      title: 'Panorama Lautan Biru',
      desc: 'Alunan ombak pesisir laut nilam, buih berkilau & kesegaran marin aquamarine.',
      colorDot: 'bg-sky-400 shadow-[0_0_10px_#38bdf8]',
      emoji: '🌊'
    },
    {
      id: 'panorama_petang',
      title: 'Panorama Petang & Senja',
      desc: 'Langit sunset jingga kemerahan, matahari terbenam hangat & lembayung senja.',
      colorDot: 'bg-orange-500 shadow-[0_0_10px_#f97316]',
      emoji: '🌅'
    },
    {
      id: 'hari_guru',
      title: 'Hari Guru Mulia',
      desc: 'Bintang kejayaan emas, lilin penerang ilmu & kalungan penghargaan pendidik.',
      colorDot: 'bg-yellow-400 shadow-[0_0_10px_#facc15]',
      emoji: '🎓'
    },
    {
      id: 'hari_ibu',
      title: 'Hari Ibu Kasih Abadi',
      desc: 'Kuntuman kelopak mawar merah jambu, sinaran kasih sayang tulus & kehangatan ibu.',
      colorDot: 'bg-rose-400 shadow-[0_0_10px_#fb7185]',
      emoji: '🌹'
    },
    {
      id: 'gelombang_muzik',
      title: 'Irama & Gelombang Muzik',
      desc: 'Gelombang audio equalizer bercahaya neon, notasi muzik 🎵 terapung berentak.',
      colorDot: 'bg-purple-400 shadow-[0_0_10px_#c084fc]',
      emoji: '🎵'
    },
    {
      id: 'bunga_sakura',
      title: 'Taman Bunga Sakura',
      desc: 'Kelopak merah jambu terapung lembut & aroma ketenangan zen.',
      colorDot: 'bg-pink-400 shadow-[0_0_10px_#f472b6]',
      emoji: '🌸'
    },
    {
      id: 'kemerdekaan',
      title: 'Kemerdekaan Patriotik',
      desc: 'Jalur Gemilang, bintang emas perayaan & semangat patriotisme.',
      colorDot: 'bg-red-500 shadow-[0_0_10px_#ef4444]',
      emoji: '🇲🇾'
    },
    {
      id: 'zombie_apocalypse',
      title: 'Zombie Biohazard',
      desc: 'Kabus hijau toksik, zarah spora misteri & aura cabaran nahu.',
      colorDot: 'bg-lime-400 shadow-[0_0_10px_#84cc16]',
      emoji: '🧟'
    },
    {
      id: 'minecraft_voxel',
      title: 'Minecraft Voxel Pixel',
      desc: 'Blok kubus piksel terapung & rumput zamrud estetik 8-bit.',
      colorDot: 'bg-emerald-500 shadow-[0_0_10px_#10b981]',
      emoji: '⛏️'
    },
    {
      id: 'astro_oasis',
      title: 'Astro Oasis Ceria',
      desc: 'Zamrud & Sian Gemilang bersama percikan bintang langit malam.',
      colorDot: 'bg-emerald-400 shadow-[0_0_10px_#34d399]',
      emoji: '✨'
    },
    {
      id: 'cosmic_hijaz',
      title: 'Cosmic Hijaz Magik',
      desc: 'Nebula ungu magik, fuchsia bercahaya & aura angkasa.',
      colorDot: 'bg-fuchsia-400 shadow-[0_0_10px_#e879f9]',
      emoji: '🌌'
    },
    {
      id: 'suria_sahara',
      title: 'Suria Sahara Emas',
      desc: 'Hamparan emas padang pasir & pancaran suria padang pasir.',
      colorDot: 'bg-amber-400 shadow-[0_0_10px_#fbbf24]',
      emoji: '☀️'
    },
    {
      id: 'arcade_cyberpunk',
      title: 'Arcade Cyber Pelangi',
      desc: 'Neon sian elektrik, merah jambu arked & zarah riang.',
      colorDot: 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]',
      emoji: '🕹️'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-gradient-to-b from-slate-900 via-[#0a1628] to-[#040a14] border-2 border-teal-500/80 rounded-3xl p-4 sm:p-5 shadow-2xl shadow-teal-950 flex flex-col gap-3.5 relative max-h-[92vh]">
        <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-teal-500/20 border border-teal-400/50 flex items-center justify-center text-teal-300 shadow">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-100 font-sans">Tetapan Muzik & Tema Grafik</h3>
              <p className="text-xs text-slate-400">Pilih rentak BGM sintesis & suasana grafik animasi latar</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs to prevent modal clutter and clipping */}
        <div className="grid grid-cols-2 gap-2 bg-slate-950/90 p-1 rounded-2xl border border-slate-800 shrink-0">
          <button
            onClick={() => setActiveTab('audio')}
            className={`py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer ${
              activeTab === 'audio'
                ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Music className="w-4 h-4" />
            <span>Rentak Muzik ({tracks.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('graphics')}
            className={`py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer ${
              activeTab === 'graphics'
                ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Tema Grafik Latar ({atmospheres.length})</span>
          </button>
        </div>

        {/* Tab 1: Audio Volume & Track Selection */}
        {activeTab === 'audio' && (
          <div className="flex flex-col gap-3 flex-1 min-h-0 overflow-hidden">
            {/* Volume & Mute Controls */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3 flex flex-col gap-2 shadow-inner shrink-0">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-300 flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-teal-400" />
                  Kelantangan Bunyi & Muzik
                </span>
                <span className="font-mono text-teal-400 font-black">{Math.round(volume * 100)}%</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                  className="w-full accent-teal-400 cursor-pointer h-2.5 bg-slate-800 rounded-lg"
                />
                <button
                  onClick={onToggleMute}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition border cursor-pointer shrink-0 ${
                    isMuted
                      ? 'bg-rose-950 border-rose-500 text-rose-300'
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {isMuted ? 'Nyahbisu' : 'Bisu'}
                </button>
              </div>
            </div>

            {/* Track Selector List */}
            <div className="flex flex-col gap-1.5 flex-1 min-h-0">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-300 flex items-center gap-1.5 shrink-0">
                <Radio className="w-3.5 h-3.5 text-teal-400" />
                Pilih Lagu Latar Kegemaran:
              </span>

              <div className="flex flex-col gap-1.5 overflow-y-auto pr-1 flex-1 max-h-[42vh] sm:max-h-[48vh]">
                {tracks.map((t) => {
                  const isSelected = currentTheme === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        onSelectTheme(t.id);
                        soundEngine.playTileClick(true);
                      }}
                      className={`p-2.5 rounded-2xl border text-left transition flex items-center justify-between gap-2 cursor-pointer ${
                        isSelected
                          ? 'bg-teal-950/80 border-teal-400 shadow-md shadow-teal-950/60 ring-1 ring-teal-400/60'
                          : 'bg-slate-950/50 border-slate-800 hover:bg-slate-850'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                          {t.icon}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-xs font-bold text-slate-100">{t.title}</span>
                            <span className="text-[9px] px-1.5 py-0.2 rounded-md font-black bg-teal-500/20 text-teal-300 border border-teal-500/40">
                              {t.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 truncate">{t.desc}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">{t.bpm} BPM</span>
                        <div className="flex items-center justify-center w-5 h-5 rounded-full border border-slate-700 bg-slate-900">
                          {isSelected && <Check className="w-3 h-3 text-teal-400" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Atmosphere Visual Graphics Selection */}
        {activeTab === 'graphics' && (
          <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-hidden">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-300 flex items-center gap-1.5 shrink-0">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              Pilih Tema Grafik Animasi Latar Belakang:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-y-auto pr-1 flex-1 max-h-[50vh]">
              {atmospheres.map(atm => {
                const isSelected = atmosphereMode === atm.id;
                return (
                  <button
                    key={atm.id}
                    onClick={() => {
                      onSelectAtmosphere(atm.id);
                      soundEngine.playTileClick(true);
                    }}
                    className={`p-3 rounded-2xl border text-left transition flex items-start gap-2.5 cursor-pointer ${
                      isSelected
                        ? 'bg-teal-950/90 border-teal-400 shadow-md ring-2 ring-teal-400/60'
                        : 'bg-slate-950/60 border-slate-800 hover:bg-slate-900'
                    }`}
                  >
                    <span className="text-xl shrink-0 mt-0.5">{atm.emoji}</span>
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center justify-between gap-1">
                        <p className="text-xs font-black text-slate-100 truncate">{atm.title}</p>
                        <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${atm.colorDot}`} />
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5 leading-snug">{atm.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-teal-950 transition active:scale-98 cursor-pointer shrink-0"
        >
          Selesai & Sambung Permainan
        </button>
      </div>
    </div>
  );
};
