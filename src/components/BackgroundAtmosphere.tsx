import React, { useEffect, useRef } from 'react';
import { AtmosphereMode } from '../types';

interface BackgroundAtmosphereProps {
  mode?: AtmosphereMode;
  combo?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  pulseSpeed: number;
  pulseOffset: number;
  color: string;
}

interface ArabicGlyph {
  x: number;
  y: number;
  vx: number;
  vy: number;
  char: string;
  size: number;
  alpha: number;
  rotation: number;
  vRot: number;
  color: string;
  glowColor: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  color: string;
  active: boolean;
}

interface GeometricStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  vRot: number;
  alpha: number;
  color: string;
  points: number;
}

const ARABIC_CHARS = [
  'ض', 'ص', 'ق', 'ك', 'ف', 'ع', 'ن', 'م', 'ح', 'س', 'و', 'ر', 'ط', 'ي', 'ل', 'ج',
  '۞', '❊', '✧', '✦', 'فِعْل', 'اِسْم', 'حَرْف', 'نَحْو', 'قَوَالِب'
];

export const BackgroundAtmosphere: React.FC<BackgroundAtmosphereProps> = ({
  mode = 'astro_oasis',
  combo = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Color palettes for cheerful, vibrant themes
    const getPalette = () => {
      switch (mode) {
        case 'tema_buku':
          return {
            bgColors: ['#1c1005', '#0a0601'],
            aurora1: 'rgba(217, 119, 6, 0.28)',
            aurora2: 'rgba(180, 83, 9, 0.22)',
            starColors: ['#f59e0b', '#fbbf24', '#d97706', '#fef3c7', '#b45309'],
            glyphColors: ['#fbbf24', '#f59e0b', '#fde68a', '#d97706', '#fef08a'],
            gridColor: 'rgba(245, 158, 11, 0.05)',
            shootingColor: '#f59e0b',
            specialType: 'buku'
          };
        case 'panorama_laut':
          return {
            bgColors: ['#021e38', '#010a14'],
            aurora1: 'rgba(14, 165, 233, 0.32)',
            aurora2: 'rgba(20, 184, 166, 0.26)',
            starColors: ['#38bdf8', '#2dd4bf', '#7dd3fc', '#99f6e4', '#0284c7'],
            glyphColors: ['#38bdf8', '#2dd4bf', '#0ea5e9', '#67e8f9', '#a5f3fc'],
            gridColor: 'rgba(14, 165, 233, 0.06)',
            shootingColor: '#38bdf8',
            specialType: 'laut'
          };
        case 'panorama_petang':
          return {
            bgColors: ['#2e1005', '#0f040b'],
            aurora1: 'rgba(249, 115, 22, 0.34)',
            aurora2: 'rgba(217, 70, 239, 0.24)',
            starColors: ['#fb923c', '#f43f5e', '#fbbf24', '#e879f9', '#fdba74'],
            glyphColors: ['#fb923c', '#f43f5e', '#fde047', '#f472b6', '#ea580c'],
            gridColor: 'rgba(249, 115, 22, 0.05)',
            shootingColor: '#fb923c',
            specialType: 'petang'
          };
        case 'hari_guru':
          return {
            bgColors: ['#051838', '#020814'],
            aurora1: 'rgba(250, 204, 21, 0.30)',
            aurora2: 'rgba(96, 165, 250, 0.25)',
            starColors: ['#facc15', '#60a5fa', '#fef08a', '#93c5fd', '#3b82f6'],
            glyphColors: ['#fde047', '#60a5fa', '#facc15', '#bfdbfe', '#eab308'],
            gridColor: 'rgba(250, 204, 21, 0.06)',
            shootingColor: '#facc15',
            specialType: 'guru'
          };
        case 'hari_ibu':
          return {
            bgColors: ['#29081a', '#0d0208'],
            aurora1: 'rgba(244, 63, 94, 0.32)',
            aurora2: 'rgba(236, 72, 153, 0.26)',
            starColors: ['#fb7185', '#f472b6', '#fda4af', '#fecdd3', '#e11d48'],
            glyphColors: ['#fb7185', '#f472b6', '#fda4af', '#f43f5e', '#be123c'],
            gridColor: 'rgba(244, 63, 94, 0.05)',
            shootingColor: '#fb7185',
            specialType: 'ibu'
          };
        case 'gelombang_muzik':
          return {
            bgColors: ['#090624', '#02010d'],
            aurora1: 'rgba(168, 85, 247, 0.32)',
            aurora2: 'rgba(6, 182, 212, 0.28)',
            starColors: ['#c084fc', '#22d3ee', '#e879f9', '#67e8f9', '#a855f7'],
            glyphColors: ['#c084fc', '#22d3ee', '#f472b6', '#38bdf8', '#e879f9'],
            gridColor: 'rgba(168, 85, 247, 0.06)',
            shootingColor: '#c084fc',
            specialType: 'muzik'
          };
        case 'bunga_sakura':
          return {
            bgColors: ['#230b1c', '#0d030b'],
            aurora1: 'rgba(244, 114, 182, 0.32)',
            aurora2: 'rgba(251, 113, 133, 0.25)',
            starColors: ['#f472b6', '#fda4af', '#fb7185', '#fbcfe8', '#f43f5e'],
            glyphColors: ['#f472b6', '#fb7185', '#ec4899', '#fda4af', '#f9a8d4'],
            gridColor: 'rgba(244, 114, 182, 0.05)',
            shootingColor: '#f472b6',
            specialType: 'sakura'
          };
        case 'kemerdekaan':
          return {
            bgColors: ['#041226', '#1a0408'],
            aurora1: 'rgba(239, 68, 68, 0.28)',
            aurora2: 'rgba(59, 130, 246, 0.28)',
            starColors: ['#fbbf24', '#f87171', '#60a5fa', '#fef08a', '#ffffff'],
            glyphColors: ['#facc15', '#ef4444', '#3b82f6', '#fde047', '#f87171'],
            gridColor: 'rgba(251, 191, 36, 0.06)',
            shootingColor: '#fbbf24'
          };
        case 'zombie_apocalypse':
          return {
            bgColors: ['#05180a', '#020b04'],
            aurora1: 'rgba(74, 222, 128, 0.32)',
            aurora2: 'rgba(168, 85, 247, 0.22)',
            starColors: ['#4ade80', '#22c55e', '#a855f7', '#86efac', '#10b981'],
            glyphColors: ['#22c55e', '#4ade80', '#c084fc', '#86efac', '#a855f7'],
            gridColor: 'rgba(74, 222, 128, 0.05)',
            shootingColor: '#4ade80'
          };
        case 'minecraft_voxel':
          return {
            bgColors: ['#0a1a0f', '#040d07'],
            aurora1: 'rgba(34, 197, 94, 0.30)',
            aurora2: 'rgba(56, 189, 248, 0.25)',
            starColors: ['#22c55e', '#38bdf8', '#fbbf24', '#a3e635', '#4ade80'],
            glyphColors: ['#4ade80', '#38bdf8', '#facc15', '#84cc16', '#67e8f9'],
            gridColor: 'rgba(34, 197, 94, 0.08)',
            shootingColor: '#38bdf8'
          };
        case 'cosmic_hijaz':
          return {
            bgColors: ['#170b2e', '#090417'],
            aurora1: 'rgba(168, 85, 247, 0.28)',
            aurora2: 'rgba(236, 72, 153, 0.22)',
            starColors: ['#f472b6', '#c084fc', '#67e8f9', '#fde047', '#a78bfa'],
            glyphColors: ['#e879f9', '#38bdf8', '#fbbf24', '#f43f5e', '#a855f7'],
            gridColor: 'rgba(192, 132, 252, 0.04)',
            shootingColor: '#f472b6'
          };
        case 'suria_sahara':
          return {
            bgColors: ['#281504', '#0d0601'],
            aurora1: 'rgba(245, 158, 11, 0.28)',
            aurora2: 'rgba(239, 68, 68, 0.20)',
            starColors: ['#fbbf24', '#f59e0b', '#f87171', '#34d399', '#fef08a'],
            glyphColors: ['#fde047', '#fb923c', '#4ade80', '#fb7185', '#f59e0b'],
            gridColor: 'rgba(251, 191, 36, 0.04)',
            shootingColor: '#fbbf24'
          };
        case 'arcade_cyberpunk':
          return {
            bgColors: ['#051528', '#020712'],
            aurora1: 'rgba(6, 182, 212, 0.30)',
            aurora2: 'rgba(244, 63, 94, 0.22)',
            starColors: ['#22d3ee', '#f43f5e', '#a3e635', '#e879f9', '#38bdf8'],
            glyphColors: ['#06b6d4', '#ec4899', '#84cc16', '#38bdf8', '#e11d48'],
            gridColor: 'rgba(56, 189, 248, 0.04)',
            shootingColor: '#22d3ee'
          };
        case 'astro_oasis':
        default:
          return {
            bgColors: ['#05251e', '#010d0a'],
            aurora1: 'rgba(16, 185, 129, 0.28)',
            aurora2: 'rgba(14, 165, 233, 0.24)',
            starColors: ['#34d399', '#38bdf8', '#fbbf24', '#a7f3d0', '#67e8f9'],
            glyphColors: ['#2dd4bf', '#38bdf8', '#facc15', '#4ade80', '#60a5fa'],
            gridColor: 'rgba(52, 211, 153, 0.04)',
            shootingColor: '#34d399'
          };
      }
    };

    const palette = getPalette();

    // Create cheerful particle fireflies
    const particleCount = Math.min(65, Math.floor((width * height) / 18000));
    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const col = palette.starColors[Math.floor(Math.random() * palette.starColors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2.8 + 1.2,
        alpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulseOffset: Math.random() * Math.PI * 2,
        color: col
      };
    });

    // Create rotating geometric 8-pointed Islamic Stars
    const starCount = Math.min(10, Math.floor((width * height) / 75000));
    const geoStars: GeometricStar[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() * -0.2) - 0.1,
      size: Math.random() * 16 + 10,
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.015,
      alpha: Math.random() * 0.4 + 0.2,
      color: palette.starColors[Math.floor(Math.random() * palette.starColors.length)],
      points: 8
    }));

    // Create cheerful Arabic floating glyphs
    const glyphCount = Math.min(28, Math.floor((width * height) / 36000));
    const getThemeChars = () => {
      switch (mode) {
        case 'tema_buku':
          return ['📖', '📜', '✨', '🖋️', 'كِتَاب', 'عِلْم', 'قِرَاءَة', 'دَرْس', 'صَفْحَة', 'قَلَم', 'بَاب'];
        case 'panorama_laut':
          return ['🌊', '🐬', '🫧', '🐚', 'بَحْر', 'مَاء', 'سَفِينَة', 'شَاطِئ', 'أَمْوَاج', 'لُؤْلُؤ'];
        case 'panorama_petang':
          return ['🌅', '🌇', '✨', '🌙', 'شَمْس', 'غُرُوب', 'مَسَاء', 'نُور', 'أُفُق', 'ضِيَاء'];
        case 'hari_guru':
          return ['🎓', '🕯️', '⭐', '🏅', 'مُعَلِّم', 'أُسْتَاذ', 'شُكْرًا', 'فَخْر', 'نَجَاح', 'هِمَّة'];
        case 'hari_ibu':
          return ['🌹', '🌸', '💖', '🌷', 'أُمِّي', 'جَنَّة', 'حُبّ', 'رَحْمَة', 'عَطَاء', 'قَلْب'];
        case 'gelombang_muzik':
          return ['🎵', '🎶', '🎼', '🎧', 'نَغَم', 'صَوْت', 'إِيقَاع', 'أَلْحَان', 'وَزْن', 'سَمَاع'];
        case 'bunga_sakura':
          return ['🌸', '🌺', '🍃', 'زَهْرَة', 'رَبِيع', 'بُسْتَان', 'وَرْد'];
        case 'kemerdekaan':
          return ['🇲🇾', '⭐', '🌙', 'مَرْدِيكَا', 'وَطَن', 'فَخْر', 'عِزَّة'];
        default:
          return ARABIC_CHARS;
      }
    };

    const themeCharList = getThemeChars();
    const glyphs: ArabicGlyph[] = Array.from({ length: glyphCount }, () => {
      const col = palette.glyphColors[Math.floor(Math.random() * palette.glyphColors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() * -0.35) - 0.2,
        char: themeCharList[Math.floor(Math.random() * themeCharList.length)],
        size: Math.random() * 20 + 16,
        alpha: Math.random() * 0.45 + 0.25,
        rotation: (Math.random() - 0.5) * 0.3,
        vRot: (Math.random() - 0.5) * 0.003,
        color: col,
        glowColor: col
      };
    });

    // Shooting stars pool
    const shootingStars: ShootingStar[] = Array.from({ length: 4 }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.5),
      length: Math.random() * 80 + 50,
      speed: Math.random() * 8 + 6,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
      alpha: 0,
      color: palette.shootingColor,
      active: false
    }));

    let time = 0;
    let shootingTimer = 0;

    // Helper to draw geometric 8-pointed star
    const drawEightPointStar = (ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, angle: number, color: string, alpha: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.4;
      ctx.globalAlpha = alpha;

      // Draw two intersecting squares
      const half = r * 0.8;
      ctx.strokeRect(-half, -half, half * 2, half * 2);
      ctx.rotate(Math.PI / 4);
      ctx.strokeRect(-half, -half, half * 2, half * 2);

      // Inner jewel circle
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.25, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const p = getPalette();

      // Cheerful multi-gradient cosmic background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, p.bgColors[0]);
      bgGrad.addColorStop(1, p.bgColors[1]);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Cheerful moving Aurora Waves in background
      const comboBoost = Math.min(2.0, 1 + (combo - 1) * 0.1);
      
      // Wave 1
      ctx.save();
      ctx.beginPath();
      const waveY1 = height * 0.35 + Math.sin(time * 0.8) * 40;
      ctx.moveTo(0, waveY1);
      for (let x = 0; x <= width; x += 40) {
        const y = waveY1 + Math.sin(x * 0.003 + time) * 60 + Math.cos(x * 0.002 - time * 0.6) * 30;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      const gradAurora1 = ctx.createRadialGradient(width * 0.3, waveY1, 20, width * 0.5, waveY1 + 100, width * 0.6);
      gradAurora1.addColorStop(0, p.aurora1);
      gradAurora1.addColorStop(1, 'transparent');
      ctx.fillStyle = gradAurora1;
      ctx.fill();
      ctx.restore();

      // Wave 2
      ctx.save();
      ctx.beginPath();
      const waveY2 = height * 0.65 + Math.cos(time * 0.7) * 45;
      ctx.moveTo(0, waveY2);
      for (let x = 0; x <= width; x += 40) {
        const y = waveY2 + Math.cos(x * 0.003 - time * 0.8) * 50;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      const gradAurora2 = ctx.createRadialGradient(width * 0.7, waveY2, 30, width * 0.5, waveY2, width * 0.5);
      gradAurora2.addColorStop(0, p.aurora2);
      gradAurora2.addColorStop(1, 'transparent');
      ctx.fillStyle = gradAurora2;
      ctx.fill();
      ctx.restore();

      // Draw subtle cheerful grid
      ctx.strokeStyle = p.gridColor;
      ctx.lineWidth = 1;
      const grid = 52;
      const offY = (time * 15) % grid;
      ctx.beginPath();
      for (let x = 0; x < width; x += grid) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = offY; y < height; y += grid) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Render Rotating 8-Pointed Islamic Geometric Stars
      for (let i = 0; i < geoStars.length; i++) {
        const star = geoStars[i];
        star.x += star.vx;
        star.y += star.vy;
        star.rotation += star.vRot;

        if (star.y < -40) {
          star.y = height + 40;
          star.x = Math.random() * width;
        }
        if (star.x < -40) star.x = width + 40;
        if (star.x > width + 40) star.x = -40;

        const pulse = star.alpha * (0.8 + 0.3 * Math.sin(time * 2 + i));
        drawEightPointStar(ctx, star.x, star.y, star.size, star.rotation, star.color, pulse);
      }

      // Render Firefly Constellation particles
      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];
        pt.x += pt.vx * comboBoost;
        pt.y += pt.vy * comboBoost;

        if (pt.x < 0) pt.x = width;
        if (pt.x > width) pt.x = 0;
        if (pt.y < 0) pt.y = height;
        if (pt.y > height) pt.y = 0;

        const pAlpha = pt.alpha * (0.6 + 0.4 * Math.sin(time * 3 + pt.pulseOffset));

        ctx.save();
        ctx.shadowColor = pt.color;
        ctx.shadowBlur = 8;
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = pAlpha;
        
        if (mode === 'minecraft_voxel') {
          // Pixel block square
          const bSize = pt.size * 2.2;
          ctx.fillRect(pt.x - bSize / 2, pt.y - bSize / 2, bSize, bSize);
          ctx.strokeStyle = 'rgba(0,0,0,0.4)';
          ctx.lineWidth = 1;
          ctx.strokeRect(pt.x - bSize / 2, pt.y - bSize / 2, bSize, bSize);
        } else if (mode === 'bunga_sakura' || mode === 'hari_ibu') {
          // Floating flower petal
          ctx.beginPath();
          ctx.ellipse(pt.x, pt.y, pt.size * 2, pt.size * 1.1, pt.pulseOffset + time * 0.8, 0, Math.PI * 2);
          ctx.fill();
        } else if (mode === 'panorama_laut') {
          // Sea bubble with specular shine
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.size * 1.4, 0, Math.PI * 2);
          ctx.strokeStyle = pt.color;
          ctx.lineWidth = 1.2;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(pt.x - pt.size * 0.4, pt.y - pt.size * 0.4, pt.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        } else if (mode === 'tema_buku') {
          // Diamond / Rhombus parchment spark
          ctx.save();
          ctx.translate(pt.x, pt.y);
          ctx.rotate(time * 0.5 + pt.pulseOffset);
          ctx.fillRect(-pt.size, -pt.size, pt.size * 2, pt.size * 2);
          ctx.restore();
        } else if (mode === 'gelombang_muzik') {
          // Audio waveform bar pulse
          const barH = pt.size * 3 * (1 + 0.6 * Math.sin(time * 6 + pt.x * 0.05));
          ctx.fillRect(pt.x - 1.5, pt.y - barH / 2, 3, barH);
        } else {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        // Connect nearby cheerful nodes with glowing lines
        for (let j = i + 1; j < particles.length; j++) {
          const pt2 = particles[j];
          const dx = pt.x - pt2.x;
          const dy = pt.y - pt2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxD = 110;

          if (dist < maxD) {
            const lineAlpha = (1 - dist / maxD) * 0.18 * pAlpha;
            ctx.save();
            ctx.strokeStyle = pt.color;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(pt.x, pt.y);
            ctx.lineTo(pt2.x, pt2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Render Cheerful Floating Arabic Glyphs
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < glyphs.length; i++) {
        const g = glyphs[i];
        g.x += g.vx;
        g.y += g.vy;
        g.rotation += g.vRot;

        if (g.y < -40) {
          g.y = height + 40;
          g.x = Math.random() * width;
        }
        if (g.x < -40) g.x = width + 40;
        if (g.x > width + 40) g.x = -40;

        ctx.save();
        ctx.translate(g.x, g.y);
        ctx.rotate(g.rotation);

        const glyphPulse = g.alpha * (0.8 + 0.2 * Math.sin(time * 2 + i));
        ctx.font = `${g.char.length > 2 ? 'bold 15px' : 'bold ' + g.size + 'px'} "Traditional Arabic", "Amiri", "Noto Sans Arabic", serif`;
        
        ctx.shadowColor = g.glowColor;
        ctx.shadowBlur = 14;
        ctx.fillStyle = g.color;
        ctx.globalAlpha = glyphPulse;
        ctx.fillText(g.char, 0, 0);

        ctx.restore();
      }

      // Handle Shooting Stars
      shootingTimer += 1;
      if (shootingTimer > 90 && Math.random() < 0.08) {
        shootingTimer = 0;
        const available = shootingStars.find(s => !s.active);
        if (available) {
          available.active = true;
          available.x = Math.random() * width * 0.8;
          available.y = Math.random() * height * 0.4;
          available.alpha = 1;
          available.length = Math.random() * 90 + 60;
          available.color = p.starColors[Math.floor(Math.random() * p.starColors.length)];
        }
      }

      // Render active shooting stars
      for (const star of shootingStars) {
        if (!star.active) continue;

        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.alpha -= 0.025;

        if (star.alpha <= 0 || star.x > width || star.y > height) {
          star.active = false;
          continue;
        }

        ctx.save();
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 12;
        ctx.strokeStyle = star.color;
        ctx.lineWidth = 2.2;
        ctx.globalAlpha = star.alpha;

        const tailX = star.x - Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;

        const starGrad = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
        starGrad.addColorStop(0, 'transparent');
        starGrad.addColorStop(1, star.color);
        ctx.strokeStyle = starGrad;

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(star.x, star.y);
        ctx.stroke();

        // Star head sparkle
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [mode, combo]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      style={{ opacity: 0.95 }}
    />
  );
};
