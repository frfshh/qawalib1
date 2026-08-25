import React from 'react';
import { Play, Sparkles } from 'lucide-react';

interface PauseGraphicsOverlayProps {
  isPaused: boolean;
  onResume: () => void;
}

export const PauseGraphicsOverlay: React.FC<PauseGraphicsOverlayProps> = ({ isPaused, onResume }) => {
  if (!isPaused) return null;

  // Luminous Arabic letters and geometric elements drifting across the screen
  const movingElements = [
    { text: 'فِعْل', top: '12%', left: '8%', delay: '0s', size: 'text-3xl sm:text-4xl', color: 'text-rose-400/40', anim: 'animate-float-a' },
    { text: 'اِسْم', top: '18%', left: '85%', delay: '1s', size: 'text-3xl sm:text-4xl', color: 'text-emerald-400/40', anim: 'animate-float-b' },
    { text: 'حَرْف', top: '75%', left: '12%', delay: '2s', size: 'text-3xl sm:text-4xl', color: 'text-amber-400/40', anim: 'animate-float-a' },
    { text: 'ضَمَّة', top: '80%', left: '82%', delay: '1.5s', size: 'text-2xl sm:text-3xl', color: 'text-cyan-400/40', anim: 'animate-float-b' },
    { text: 'فَتْحَة', top: '35%', left: '6%', delay: '2.5s', size: 'text-2xl sm:text-3xl', color: 'text-indigo-400/40', anim: 'animate-float-b' },
    { text: 'كَسْرَة', top: '60%', left: '88%', delay: '0.5s', size: 'text-2xl sm:text-3xl', color: 'text-teal-400/40', anim: 'animate-float-a' },
    { text: 'مَرْفُوع', top: '25%', left: '70%', delay: '3s', size: 'text-xl sm:text-2xl', color: 'text-sky-400/35', anim: 'animate-float-a' },
    { text: 'مَنْصُوب', top: '68%', left: '25%', delay: '1.8s', size: 'text-xl sm:text-2xl', color: 'text-fuchsia-400/35', anim: 'animate-float-b' },
    { text: 'مَجْرُور', top: '48%', left: '78%', delay: '0.8s', size: 'text-xl sm:text-2xl', color: 'text-yellow-400/35', anim: 'animate-float-a' },
    { text: 'قَالَب', top: '10%', left: '45%', delay: '2.2s', size: 'text-2xl sm:text-3xl', color: 'text-teal-300/40', anim: 'animate-float-b' },
  ];

  // Floating ambient geometric shapes/rings
  const geometricOrbs = [
    { top: '15%', left: '20%', size: 'w-48 h-48 sm:w-64 sm:h-64', color: 'border-cyan-500/20 bg-cyan-500/5', anim: 'animate-pulse-halo', delay: '0s' },
    { top: '65%', left: '65%', size: 'w-56 h-56 sm:w-80 sm:h-80', color: 'border-amber-500/20 bg-amber-500/5', anim: 'animate-pulse-halo', delay: '2s' },
    { top: '45%', left: '10%', size: 'w-32 h-32 sm:w-44 sm:h-44', color: 'border-emerald-500/20 bg-emerald-500/5', anim: 'animate-float-b', delay: '1s' },
    { top: '20%', left: '80%', size: 'w-40 h-40 sm:w-52 sm:h-52', color: 'border-rose-500/20 bg-rose-500/5', anim: 'animate-float-a', delay: '3s' },
  ];

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 animate-in fade-in duration-200 pointer-events-auto">
      
      {/* Moving Graphic Layer Across Whole Screen (pointer-events-none so it doesn't block underlying text) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Subtle moving scan-mesh background */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] animate-pulse-halo" />

        {/* Ambient Geometric Glowing Orbs */}
        {geometricOrbs.map((orb, i) => (
          <div
            key={`orb-${i}`}
            className={`absolute rounded-full border border-dashed ${orb.size} ${orb.color} ${orb.anim}`}
            style={{
              top: orb.top,
              left: orb.left,
              animationDelay: orb.delay,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}

        {/* Drifting Arabic Grammatical Terms */}
        {movingElements.map((el, i) => (
          <div
            key={`el-${i}`}
            className={`absolute font-arabic font-black select-none drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] ${el.size} ${el.color} ${el.anim}`}
            style={{
              top: el.top,
              left: el.left,
              animationDelay: el.delay,
            }}
          >
            {el.text}
          </div>
        ))}
      </div>

      {/* Center Compact Resume Card - Pure Minimalist (No distracting long sentences) */}
      <div className="relative z-10 max-w-xs w-full mx-4 p-5 rounded-3xl bg-[#091322]/95 border-2 border-amber-400/60 shadow-2xl shadow-amber-950/80 text-center flex flex-col items-center gap-3.5 animate-in zoom-in-95 duration-200">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border-2 border-amber-400/60 flex items-center justify-center shadow-[0_0_16px_rgba(245,158,11,0.4)]">
          <Sparkles className="w-6 h-6 text-amber-300 animate-pulse" />
        </div>

        <div className="flex flex-col items-center">
          <span className="font-arabic text-2xl font-black text-amber-300">مَوْقُوف</span>
          <span className="text-xs font-black uppercase tracking-widest text-slate-200 mt-0.5">JEDA</span>
        </div>

        <button
          onClick={onResume}
          className="w-full py-2.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-emerald-500/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-emerald-200"
        >
          <Play className="w-4 h-4 fill-slate-950" />
          <span>Sambung</span>
        </button>
      </div>

    </div>
  );
};
