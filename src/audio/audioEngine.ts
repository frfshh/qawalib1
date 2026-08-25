// Advanced Web Audio API Engine for Qawalib Matrix
import { MusicTheme } from '../types';

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isBgmPlaying: boolean = false;
  private currentTheme: MusicTheme = 'cyber_hijaz';
  private masterGain: GainNode | null = null;
  private bgmGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private bgmTimer: number | null = null;
  private step: number = 0;
  private tempo: number = 78; // BPM (Chill & Relaxed tempo)
  private volume: number = 0.7;

  constructor() {
    // Lazy initialization on first user touch
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtxClass();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.bgmGain = this.ctx.createGain();
      this.bgmGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.bgmGain.connect(this.masterGain);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.65, this.ctx.currentTime);
      this.sfxGain.connect(this.masterGain);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public getIsPlaying(): boolean {
    return this.isBgmPlaying;
  }

  public getTheme(): MusicTheme {
    return this.currentTheme;
  }

  public setTheme(theme: MusicTheme) {
    this.currentTheme = theme;
    if (theme === 'bonus_turbo') {
      this.tempo = 88;
    } else if (theme === 'teacher_anthem') {
      this.tempo = 78;
    } else if (theme === 'sahara_drift') {
      this.tempo = 84;
    } else if (theme === 'andalusia_rush') {
      this.tempo = 82;
    } else if (theme === 'mamluk_tension') {
      this.tempo = 80;
    } else if (theme === 'desert_trap') {
      this.tempo = 80;
    } else if (theme === 'synth_arcade') {
      this.tempo = 82;
    } else if (theme === 'nasheed_electro') {
      this.tempo = 78;
    } else if (theme === 'cyber_hijaz') {
      this.tempo = 78;
    } else if (theme === 'neon_oud') {
      this.tempo = 74;
    } else if (theme === 'pixel_minecraft') {
      this.tempo = 82;
    } else if (theme === 'merdeka_march') {
      this.tempo = 80;
    } else if (theme === 'zombie_darkwave') {
      this.tempo = 74;
    } else if (theme === 'sakura_breeze') {
      this.tempo = 72;
    } else if (theme === 'ocean_breeze') {
      this.tempo = 70;
    } else if (theme === 'sunset_chaghaf') {
      this.tempo = 70;
    } else if (theme === 'ambient_arabic') {
      this.tempo = 68;
    } else if (theme === 'lofi_nasheed') {
      this.tempo = 66;
    } else {
      this.tempo = 74;
    }
  }

  // --- MELODIES & HARMONY PROGRESSIONS ---
  private readonly NOTE = {
    C2: 65.41, Cs2: 69.30, D2: 73.42, Eb2: 77.78, E2: 82.41, F2: 87.31, Fs2: 92.50, G2: 98.00, Ab2: 103.83, A2: 110.00, Bb2: 116.54, B2: 123.47,
    C3: 130.81, Cs3: 138.59, D3: 146.83, Eb3: 155.56, E3: 164.81, F3: 174.61, Fs3: 185.00, G3: 196.00, Gs3: 207.65, Ab3: 207.65, A3: 220.00, Bb3: 233.08, B3: 246.94,
    C4: 261.63, Cs4: 277.18, D4: 293.66, Eb4: 311.13, E4: 329.63, F4: 349.23, Fs4: 369.99, G4: 392.00, Gs4: 415.30, A4: 440.00, Bb4: 466.16, B4: 493.88,
    C5: 523.25, Cs5: 554.37, D5: 587.33, Eb5: 622.25, E5: 659.25, F5: 698.46, Fs5: 739.99, G5: 783.99, A5: 880.00, Bb5: 932.33, B5: 987.77, C6: 1046.50, Cs6: 1108.73, D6: 1174.66,
    REST: 0
  };

  public startBGM(theme?: MusicTheme) {
    this.initContext();
    if (theme) this.setTheme(theme);
    if (this.isBgmPlaying) return;
    this.isBgmPlaying = true;
    this.step = 0;

    const tick = () => {
      if (!this.isBgmPlaying) return;
      this.playSequencerStep();
      this.step = (this.step + 1) % 32;

      // 16th note duration = (60 / tempo) / 4 * 1000
      const stepDurationMs = (60 / this.tempo / 4) * 1000;
      this.bgmTimer = window.setTimeout(tick, stepDurationMs);
    };

    tick();
  }

  public pauseBGM() {
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
    this.isBgmPlaying = false;
  }

  public stopBGM() {
    this.pauseBGM();
    this.step = 0;
  }

  private playSequencerStep() {
    if (!this.ctx || !this.bgmGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const s = this.step;

    switch (this.currentTheme) {
      case 'cyber_hijaz':
        this.playCyberHijazStep(now, s);
        break;
      case 'sahara_drift':
        this.playSaharaDriftStep(now, s);
        break;
      case 'mamluk_tension':
        this.playMamlukTensionStep(now, s);
        break;
      case 'andalusia_rush':
        this.playAndalusiaRushStep(now, s);
        break;
      case 'bonus_turbo':
        this.playTurboStep(now, s);
        break;
      case 'synth_arcade':
        this.playArcadeStep(now, s);
        break;
      case 'desert_trap':
        this.playDesertTrapStep(now, s);
        break;
      case 'nasheed_electro':
        this.playNasheedElectroStep(now, s);
        break;
      case 'lofi_nasheed':
        this.playLofiNasheedStep(now, s);
        break;
      case 'pixel_minecraft':
        this.playMinecraftStep(now, s);
        break;
      case 'zombie_darkwave':
        this.playZombieDarkwaveStep(now, s);
        break;
      case 'merdeka_march':
        this.playMerdekaMarchStep(now, s);
        break;
      case 'sakura_breeze':
        this.playSakuraBreezeStep(now, s);
        break;
      case 'neon_oud':
        this.playNeonOudStep(now, s);
        break;
      case 'ocean_breeze':
        this.playOceanBreezeStep(now, s);
        break;
      case 'sunset_chaghaf':
        this.playSunsetChaghafStep(now, s);
        break;
      case 'teacher_anthem':
        this.playTeacherAnthemStep(now, s);
        break;
      case 'ambient_arabic':
      default:
        this.playAmbientStep(now, s);
        break;
    }
  }

  // --- TRACK 1: CYBER HIJAZ (Synthwave Arabic) ---
  private playCyberHijazStep(now: number, s: number) {
    const N = this.NOTE;

    if (s % 8 === 0 || s === 22) {
      this.synthKick(now, s % 8 === 0 ? 0.45 : 0.25);
    }
    if (s % 8 === 4) {
      this.synthSnare(now, 0.3);
    }
    if (s % 2 === 0) {
      this.synthHiHat(now, s % 4 === 2 ? 0.18 : 0.08, s % 4 === 2);
    }

    const chordIdx = Math.floor(s / 8);
    let bassNote = N.D2;
    if (chordIdx === 1) bassNote = N.Bb2;
    else if (chordIdx === 2) bassNote = N.G2;
    else if (chordIdx === 3) bassNote = N.A2;

    if ([0, 2, 3, 5, 6, 7].includes(s % 8)) {
      const freq = s % 8 === 6 ? bassNote * 1.5 : bassNote;
      this.synthBass(now, freq, 0.16, 0.22);
    }

    const melodyPattern: number[] = [
      N.D4, N.REST, N.Fs4, N.G4, N.A4, N.REST, N.Bb4, N.A4,
      N.G4, N.Fs4, N.Eb4, N.Fs4, N.D4, N.REST, N.D4, N.REST,
      N.D5, N.REST, N.C5, N.Bb4, N.A4, N.G4, N.Fs4, N.G4,
      N.A4, N.Bb4, N.A4, N.G4, N.Fs4, N.Eb4, N.D4, N.REST
    ];

    const leadNote = melodyPattern[s];
    if (leadNote && leadNote !== N.REST) {
      this.synthLead(now, leadNote, 0.25, 0.18, 'sawtooth');
    }

    if (s % 2 === 1) {
      const arpChords = [
        [N.D3, N.A3, N.D4, N.Fs4],
        [N.Bb2, N.F3, N.Bb3, N.D4],
        [N.G2, N.D3, N.G3, N.Bb3],
        [N.A2, N.E3, N.A3, N.Cs4]
      ];
      const currentChord = arpChords[chordIdx];
      const arpNote = currentChord[(s % 8) % currentChord.length];
      this.synthArp(now, arpNote, 0.12, 0.08);
    }
  }

  // --- TRACK 2: DESERT TRAP EDM (Oriental 808 Trap) ---
  private playDesertTrapStep(now: number, s: number) {
    const N = this.NOTE;

    // 808 Kick on heavy syncopation
    if ([0, 6, 10, 16, 22, 28].includes(s)) {
      this.synth808Kick(now, 0.55);
    }

    // Hard Trap Snare on 4, 12, 20, 28
    if (s % 8 === 4) {
      this.synthSnare(now, 0.4);
    }

    // Trap hi-hat rolls (triplets / 32nds)
    if (s >= 14 && s <= 16) {
      this.synthHiHat(now, 0.18, false);
    } else if (s >= 30) {
      this.synthHiHat(now, 0.15, false);
    } else {
      this.synthHiHat(now, s % 2 === 1 ? 0.12 : 0.06, false);
    }

    // Bayati / Hijaz oriental pluck melody
    const trapMelody: number[] = [
      N.A4, N.Bb4, N.A4, N.G4, N.Fs4, N.REST, N.G4, N.A4,
      N.D5, N.REST, N.C5, N.Bb4, N.A4, N.G4, N.Fs4, N.Eb4,
      N.D4, N.Eb4, N.Fs4, N.G4, N.A4, N.REST, N.Bb4, N.D5,
      N.Cs5, N.Bb4, N.A4, N.G4, N.Fs4, N.Eb4, N.D4, N.REST
    ];

    if (trapMelody[s] && trapMelody[s] !== N.REST) {
      this.synthPluck(now, trapMelody[s], 0.14, 0.24);
    }
  }

  // --- TRACK 3: NASHEED ELECTRO (Uplifting Futuristic Qasidah) ---
  private playNasheedElectroStep(now: number, s: number) {
    const N = this.NOTE;

    // Four on the floor warm kick
    if (s % 8 === 0 || s % 8 === 4) {
      this.synthKick(now, 0.38);
    }

    // Acoustic rhythmic handclap on 4, 12, 20, 28
    if (s % 8 === 4) {
      this.synthClap(now, 0.3);
    }

    // Shaker / Tambourine 16th pulse
    this.synthHiHat(now, (s % 4 === 2) ? 0.14 : 0.05, s % 4 === 2);

    // Warm chord pad & bass
    const chords = [
      [N.D3, N.F3, N.A3, N.D4],
      [N.G2, N.Bb3, N.D4, N.G4],
      [N.C3, N.E3, N.G3, N.C4],
      [N.A2, N.Cs4, N.E4, N.A4]
    ];
    const cIdx = Math.floor(s / 8);

    if (s % 8 === 0) {
      this.synthBass(now, chords[cIdx][0], 0.5, 0.22);
    }

    // Melodic Qasidah Anthem synth
    const nasheedLead: number[] = [
      N.D4, N.D4, N.E4, N.F4, N.G4, N.A4, N.REST, N.A4,
      N.Bb4, N.A4, N.G4, N.F4, N.E4, N.F4, N.D4, N.REST,
      N.A4, N.REST, N.A4, N.Bb4, N.C5, N.D5, N.REST, N.C5,
      N.Bb4, N.A4, N.G4, N.F4, N.E4, N.F4, N.E4, N.D4
    ];

    if (nasheedLead[s] && nasheedLead[s] !== N.REST) {
      this.synthLead(now, nasheedLead[s], 0.22, 0.2, 'triangle');
    }
  }

  // --- TRACK 4: NEON OUD JOURNEY (Organic Micro-glides) ---
  private playNeonOudStep(now: number, s: number) {
    const N = this.NOTE;

    // Soft darbuka-like kick on 0, 3, 6
    if (s % 8 === 0 || s % 8 === 3) {
      this.synthKick(now, 0.3);
    }
    // Rimshot on 6
    if (s % 8 === 6) {
      this.synthSnare(now, 0.2);
    }
    if (s % 2 === 0) {
      this.synthHiHat(now, 0.07, false);
    }

    // Mellow sub drone
    if (s % 16 === 0) {
      this.synthBass(now, N.D2, 0.8, 0.2);
    }

    // Oud Simulation (dual triangle/saw with fast attack & bend)
    const oudMelody: number[] = [
      N.D4, N.REST, N.E4, N.F4, N.Fs4, N.G4, N.REST, N.A4,
      N.Bb4, N.A4, N.G4, N.Fs4, N.Eb4, N.REST, N.D4, N.REST,
      N.Fs4, N.G4, N.A4, N.C5, N.Bb4, N.A4, N.G4, N.REST,
      N.Fs4, N.Eb4, N.D4, N.Cs4, N.D4, N.REST, N.D4, N.REST
    ];

    if (oudMelody[s] && oudMelody[s] !== N.REST) {
      this.synthPluck(now, oudMelody[s], 0.28, 0.22);
    }
  }

  // --- TRACK 5: BONUS TURBO (Intense Matrix Speedrun) ---
  private playTurboStep(now: number, s: number) {
    const N = this.NOTE;

    if (s % 4 === 0) {
      this.synthKick(now, 0.55);
    }
    if (s % 4 === 2) {
      this.synthSnare(now, 0.35);
    }
    this.synthHiHat(now, s % 2 === 1 ? 0.2 : 0.07, s % 4 === 2);

    const bassSeq = [N.D2, N.D2, N.F2, N.G2, N.D2, N.D2, N.Bb2, N.A2];
    this.synthBass(now, bassSeq[s % 8], 0.1, 0.28);

    const turboLead = [
      N.D5, N.A4, N.D5, N.F5, N.E5, N.D5, N.Cs5, N.E5,
      N.D5, N.A4, N.F5, N.G5, N.A5, N.G5, N.F5, N.E5,
      N.D5, N.F5, N.A5, N.D5, N.C5, N.Bb4, N.A4, N.G4,
      N.F4, N.G4, N.A4, N.Cs5, N.D5, N.E5, N.D5, N.A5
    ];
    if (s % 2 === 0) {
      this.synthLead(now, turboLead[s], 0.16, 0.22, 'square');
    }
  }

  // --- TRACK 6: SYNTH ARCADE (Chiptune Nahu) ---
  private playArcadeStep(now: number, s: number) {
    const N = this.NOTE;
    if (s % 8 === 0) this.synthKick(now, 0.4);
    if (s % 8 === 4) this.synthSnare(now, 0.25);
    if (s % 2 === 0) this.synthHiHat(now, 0.1, false);

    const arcadeBass = [N.A2, N.REST, N.A2, N.C3, N.D3, N.REST, N.E3, N.G2];
    if (arcadeBass[s % 8] !== N.REST) {
      this.synthBass(now, arcadeBass[s % 8], 0.15, 0.2);
    }

    const arcadeMelody = [
      N.E4, N.G4, N.A4, N.REST, N.C5, N.B4, N.A4, N.G4,
      N.E4, N.REST, N.D4, N.E4, N.G4, N.A4, N.REST, N.REST,
      N.A4, N.C5, N.D5, N.E5, N.D5, N.C5, N.A4, N.C5,
      N.B4, N.G4, N.E4, N.G4, N.A4, N.REST, N.A4, N.REST
    ];
    if (arcadeMelody[s] !== N.REST) {
      this.synthLead(now, arcadeMelody[s], 0.18, 0.16, 'square');
    }
  }

  // --- TRACK 7: AMBIENT ARABIC (Chill & Mellow) ---
  private playAmbientStep(now: number, s: number) {
    const N = this.NOTE;
    if (s % 8 === 0) this.synthKick(now, 0.25);
    if (s % 8 === 4) this.synthSnare(now, 0.15);
    if (s % 4 === 2) this.synthHiHat(now, 0.08, false);

    if (s % 8 === 0) {
      const roots = [N.D2, N.Bb2, N.G2, N.A2];
      this.synthBass(now, roots[Math.floor(s / 8)], 0.6, 0.18);
    }

    const ambientMelody = [
      N.D4, N.REST, N.Fs4, N.REST, N.A4, N.REST, N.G4, N.Fs4,
      N.Eb4, N.REST, N.D4, N.REST, N.REST, N.REST, N.REST, N.REST,
      N.A4, N.REST, N.C5, N.REST, N.Bb4, N.A4, N.G4, N.REST,
      N.Fs4, N.Eb4, N.D4, N.REST, N.D4, N.REST, N.REST, N.REST
    ];
    if (ambientMelody[s] !== N.REST) {
      this.synthLead(now, ambientMelody[s], 0.35, 0.12, 'sine');
    }
  }

  // --- TRACK 8: SAHARA DRIFT PHONK (Thrilling 808 Phonk / Maqam Drift) ---
  private playSaharaDriftStep(now: number, s: number) {
    const N = this.NOTE;
    // Heavy 808 syncopated kick
    if ([0, 4, 8, 11, 14, 16, 20, 24, 27, 30].includes(s)) {
      this.synth808Kick(now, 0.55);
    }
    // Hard Phonk Snare / Clack
    if (s % 8 === 4) {
      this.synthSnare(now, 0.42);
    }
    // Fast Phonk Hi-hat pulse
    this.synthHiHat(now, s % 2 === 1 ? 0.16 : 0.08, false);

    // Deep pulsating sub bass
    const phonkBass = [N.D2, N.D2, N.Eb2, N.D2, N.Bb2, N.A2, N.D2, N.Fs2];
    this.synthBass(now, phonkBass[Math.floor(s / 4)], 0.18, 0.32);

    // Thrilling Cowbell / Phonk Lead (Hijaz tuned)
    const driftLead = [
      N.D5, N.Fs5, N.G5, N.A5, N.D5, N.Bb5, N.A5, N.G5,
      N.Fs5, N.G5, N.A5, N.Fs5, N.Eb5, N.D5, N.Eb5, N.Fs5,
      N.D5, N.D5, N.A5, N.G5, N.Fs5, N.G5, N.Bb5, N.A5,
      N.D6, N.Cs6, N.Bb5, N.A5, N.G5, N.Fs5, N.Eb5, N.D5
    ];
    if (driftLead[s] !== N.REST) {
      this.synthLead(now, driftLead[s], 0.14, 0.25, 'sawtooth');
    }
  }

  // --- TRACK 9: MAMLUK SUSPENSE BOSS (Dramatic Cinematic Battle Nahu) ---
  private playMamlukTensionStep(now: number, s: number) {
    const N = this.NOTE;
    // Heartbeat double-kick on tension
    if (s % 8 === 0 || s % 8 === 2) {
      this.synthKick(now, s % 8 === 0 ? 0.5 : 0.3);
    }
    // Deep thunder rim / snare on 4
    if (s % 8 === 4) {
      this.synthSnare(now, 0.35);
    }
    // Ticking suspense clock
    this.synthHiHat(now, 0.12, false);

    // Low dramatic drone & pulsating Kurd / Bayati bass
    const mamlukChords = [N.D2, N.Eb2, N.G2, N.A2];
    const mIdx = Math.floor(s / 8);
    if (s % 4 === 0) {
      this.synthBass(now, mamlukChords[mIdx], 0.22, 0.3);
    }

    // Fast arpeggiated tension strings
    const tensionArp = [
      [N.D3, N.A3, N.D4, N.Fs4, N.A4, N.D5, N.Fs5, N.A5],
      [N.Eb3, N.Bb3, N.Eb4, N.G4, N.Bb4, N.Eb5, N.G5, N.Bb5],
      [N.G2, N.D3, N.G3, N.Bb3, N.D4, N.G4, N.Bb4, N.D5],
      [N.A2, N.E3, N.A3, N.Cs4, N.E4, N.A4, N.Cs5, N.E5]
    ];
    const arpNote = tensionArp[mIdx][s % 8];
    this.synthArp(now, arpNote, 0.11, 0.15);

    // Epic Melodic Hook on bar turnaround
    const bossMelody = [
      N.D5, N.REST, N.Eb5, N.D5, N.C5, N.Bb4, N.A4, N.REST,
      N.Fs4, N.G4, N.A4, N.Bb4, N.A4, N.G4, N.Fs4, N.REST,
      N.D5, N.Eb5, N.Fs5, N.G5, N.A5, N.Bb5, N.A5, N.G5,
      N.Fs5, N.Eb5, N.D5, N.Cs5, N.D5, N.REST, N.D5, N.REST
    ];
    if (bossMelody[s] !== N.REST) {
      this.synthLead(now, bossMelody[s], 0.22, 0.22, 'sawtooth');
    }
  }

  // --- TRACK 10: ANDALUSIA CYBER RUSH (Catchy High Energy Synth) ---
  private playAndalusiaRushStep(now: number, s: number) {
    const N = this.NOTE;
    // Four on the floor pumping kick
    if (s % 4 === 0) {
      this.synthKick(now, 0.48);
    }
    if (s % 8 === 4) {
      this.synthClap(now, 0.32);
      this.synthSnare(now, 0.2);
    }
    if (s % 2 === 0) {
      this.synthHiHat(now, s % 4 === 2 ? 0.22 : 0.1, s % 4 === 2);
    }

    // Bouncing electro bass
    const electroBass = [N.A2, N.A2, N.G2, N.G2, N.F2, N.F2, N.E2, N.G2];
    this.synthBass(now, electroBass[s % 8], 0.12, 0.26);

    // Catchy cheerful euphoric melody
    const andalusiaMelody = [
      N.A4, N.C5, N.E5, N.D5, N.C5, N.B4, N.C5, N.A4,
      N.E4, N.G4, N.B4, N.A4, N.G4, N.F4, N.G4, N.E4,
      N.A4, N.B4, N.C5, N.D5, N.E5, N.Fs5, N.G5, N.A5,
      N.B5, N.A5, N.G5, N.E5, N.F5, N.E5, N.D5, N.E5
    ];
    if (andalusiaMelody[s] !== N.REST) {
      this.synthLead(now, andalusiaMelody[s], 0.16, 0.2, 'square');
    }
  }

  // --- TRACK 11: LOFI NASYEED CHILL (Peaceful Spiritual Mellow Beats) ---
  private playLofiNasheedStep(now: number, s: number) {
    const N = this.NOTE;

    // Warm mellow Lofi Boom-Bap kick
    if (s === 0 || s === 10 || s === 16 || s === 26) {
      this.synthKick(now, 0.38);
    }
    // Soft organic rim click / snare on 4, 12, 20, 28
    if (s % 8 === 4) {
      this.synthSnare(now, 0.22);
    }
    // Relaxed swinging lofi hi-hats with velvet velocity
    if (s % 2 === 0) {
      this.synthHiHat(now, s % 4 === 2 ? 0.12 : 0.06, false);
    }

    // Warm deep lofi sub bass
    const lofiBass = [N.D2, N.D2, N.Bb2, N.Bb2, N.G2, N.G2, N.A2, N.A2];
    const bIdx = Math.floor(s / 4);
    if (s % 4 === 0) {
      this.synthBass(now, lofiBass[bIdx], 0.25, 0.28);
    }

    // Mellow Rhodes / Kanun Chords (Soulful Nahawand & Bayati Harmony)
    const chords = [
      [N.D3, N.F3, N.A3, N.C4, N.E4], // Dm9
      [N.Bb2, N.D3, N.F3, N.A3, N.D4], // Bbmaj7
      [N.G2, N.Bb2, N.D3, N.F3, N.A3], // Gm9
      [N.A2, N.Cs3, N.E3, N.G3, N.A3]  // A7
    ];
    const chordIdx = Math.floor(s / 8);
    if (s % 8 === 0 || s % 8 === 4) {
      const chord = chords[chordIdx];
      chord.forEach((freq, idx) => {
        this.synthPluck(now + idx * 0.015, freq, 0.4, 0.15);
      });
    }

    // Soothing Spiritual Nasheed Flute / Vocal Synth Melody
    const nasheedMelody = [
      N.D4, N.REST, N.F4, N.G4, N.A4, N.REST, N.G4, N.F4,
      N.E4, N.F4, N.G4, N.REST, N.F4, N.E4, N.D4, N.REST,
      N.D4, N.F4, N.A4, N.C5, N.Bb4, N.A4, N.G4, N.A4,
      N.F4, N.G4, N.E4, N.F4, N.D4, N.REST, N.D4, N.REST
    ];
    if (nasheedMelody[s] !== N.REST) {
      this.synthLead(now, nasheedMelody[s], 0.24, 0.22, 'sine');
    }
  }

  // --- TRACK 12: PIXEL MINECRAFT 8-BIT ADVENTURE (Chiptune Sandbox RPG) ---
  private playMinecraftStep(now: number, s: number) {
    const N = this.NOTE;

    // 8-bit crunchy bass kick on 0, 8, 16, 24
    if (s % 8 === 0) {
      this.synthKick(now, 0.35);
    }
    // Noise snare on 4, 12, 20, 28
    if (s % 8 === 4) {
      this.synthSnare(now, 0.25);
    }
    // Chiptune rapid square hi-hat
    if (s % 2 === 0) {
      this.synthHiHat(now, 0.08, false);
    }

    // Bouncy 8-bit Square Bass
    const bassline = [
      N.C3, N.REST, N.C3, N.G2, N.A2, N.REST, N.A2, N.E2,
      N.F2, N.REST, N.F2, N.C3, N.G2, N.REST, N.G2, N.B2,
      N.C3, N.REST, N.C3, N.G2, N.A2, N.REST, N.A2, N.E2,
      N.F2, N.G2, N.A2, N.B2, N.C3, N.REST, N.C3, N.REST
    ];
    if (bassline[s] !== N.REST) {
      this.synthBass(now, bassline[s], 0.2, 0.28);
    }

    // Playful nostalgic C-Major Sandbox Melody (Square Wave)
    const mcMelody = [
      N.E4, N.G4, N.C5, N.E5, N.D5, N.B4, N.G4, N.REST,
      N.C5, N.E4, N.A4, N.C5, N.B4, N.G4, N.D4, N.REST,
      N.A4, N.C5, N.F5, N.A5, N.G5, N.E5, N.C5, N.REST,
      N.D5, N.F5, N.E5, N.D5, N.C5, N.REST, N.C5, N.REST
    ];
    if (mcMelody[s] !== N.REST) {
      this.synthLead(now, mcMelody[s], 0.2, 0.24, 'square');
    }
  }

  // --- TRACK 13: ZOMBIE DARKWAVE HAUNT (Spooky Ominous Pulse) ---
  private playZombieDarkwaveStep(now: number, s: number) {
    const N = this.NOTE;

    // Heavy industrial distorted kick
    if (s % 8 === 0 || s === 14 || s === 22) {
      this.synthKick(now, 0.48);
    }
    // Ghoulish clack snare
    if (s % 8 === 4) {
      this.synthSnare(now, 0.32);
    }
    // Dark ominous tick
    if (s % 4 === 2) {
      this.synthHiHat(now, 0.12, true);
    }

    // Heavy detuned Saw Sub Drone
    const zombieBass = [N.C2, N.C2, N.Cs2, N.C2, N.Eb2, N.D2, N.Cs2, N.C2];
    const zIdx = Math.floor(s / 4);
    if (s % 4 === 0) {
      this.synthBass(now, zombieBass[zIdx], 0.38, 0.35);
    }

    // Haunting Horror Synthesizer Arpeggio
    const zombieMelody = [
      N.C4, N.Cs4, N.Eb4, N.Cs4, N.C4, N.G3, N.Ab3, N.G3,
      N.C4, N.Eb4, N.Fs4, N.Eb4, N.C4, N.Cs4, N.Eb4, N.REST,
      N.G4, N.Fs4, N.Eb4, N.Cs4, N.C4, N.Cs4, N.C4, N.G3,
      N.Ab3, N.C4, N.Eb4, N.D4, N.Cs4, N.C4, N.REST, N.REST
    ];
    if (zombieMelody[s] !== N.REST) {
      this.synthLead(now, zombieMelody[s], 0.26, 0.28, 'sawtooth');
    }
  }

  // --- TRACK 14: MERDEKA HEROIC MARCH (Malaysian Patriotic Brass Fanfare) ---
  private playMerdekaMarchStep(now: number, s: number) {
    const N = this.NOTE;

    // Military Marching Kick
    if (s % 4 === 0) {
      this.synthKick(now, 0.4);
    }
    // Marching Snare Drum Roll & Accent
    if (s % 8 === 4 || s === 14 || s === 15 || s === 30 || s === 31) {
      this.synthSnare(now, 0.28);
    }
    // Crisp ceremonial cymbals
    if (s % 4 === 2) {
      this.synthHiHat(now, 0.14, false);
    }

    // Triumphant Brass Bass
    const marchBass = [
      N.G2, N.G2, N.C3, N.C3, N.D3, N.D3, N.G2, N.G2,
      N.C3, N.C3, N.F2, N.F2, N.G2, N.D2, N.G2, N.G2
    ];
    const mIdx = Math.floor(s / 2);
    if (s % 2 === 0) {
      this.synthBass(now, marchBass[mIdx], 0.24, 0.3);
    }

    // Triumphant Glorious Fanfare Brass (Heroic Theme)
    const fanfareMelody = [
      N.G4, N.G4, N.C5, N.REST, N.E5, N.D5, N.C5, N.D5,
      N.E5, N.REST, N.C5, N.G4, N.A4, N.C5, N.D5, N.REST,
      N.G5, N.E5, N.C5, N.E5, N.D5, N.C5, N.A4, N.C5,
      N.D5, N.E5, N.D5, N.C5, N.C5, N.REST, N.C5, N.REST
    ];
    if (fanfareMelody[s] !== N.REST) {
      this.synthLead(now, fanfareMelody[s], 0.25, 0.32, 'sawtooth');
    }
  }

  // --- TRACK 15: SAKURA FLORAL GARDEN BREEZE (Acoustic Zen Blossom) ---
  private playSakuraBreezeStep(now: number, s: number) {
    const N = this.NOTE;

    // Gentle soft heartbeat pulse
    if (s === 0 || s === 16) {
      this.synthKick(now, 0.2);
    }
    // Zen woodblock chime
    if (s % 8 === 4) {
      this.synthSnare(now, 0.12);
    }

    // Pentatonic Insen / Yo scale acoustic koto plucks
    const kotoPlucks = [
      N.A3, N.C4, N.D4, N.E4, N.G4, N.A4, N.G4, N.E4,
      N.D4, N.E4, N.G4, N.A4, N.C5, N.A4, N.G4, N.E4,
      N.A4, N.C5, N.D5, N.E5, N.D5, N.C5, N.A4, N.G4,
      N.E4, N.G4, N.A4, N.C5, N.A4, N.REST, N.A4, N.REST
    ];
    if (s % 2 === 0 && kotoPlucks[s] !== N.REST) {
      this.synthPluck(now, kotoPlucks[s], 0.6, 0.24);
    }

    // Calming bamboo flute lead
    const fluteMelody = [
      N.A4, N.REST, N.C5, N.REST, N.D5, N.E5, N.D5, N.REST,
      N.C5, N.REST, N.A4, N.G4, N.A4, N.REST, N.A4, N.REST,
      N.E5, N.D5, N.C5, N.REST, N.A4, N.C5, N.D5, N.REST,
      N.C5, N.A4, N.G4, N.A4, N.A4, N.REST, N.A4, N.REST
    ];
    if (fluteMelody[s] !== N.REST) {
      this.synthLead(now, fluteMelody[s], 0.35, 0.18, 'sine');
    }
  }

  // --- TRACK 15: OCEAN BREEZE (Symphony Waves & Ocean Flute) ---
  private playOceanBreezeStep(now: number, s: number) {
    const N = this.NOTE;
    // Gentle deep ocean swell pulse
    if (s === 0 || s === 16) {
      this.synthKick(now, 0.22);
    }
    // Soft acoustic wave percussion
    if (s % 8 === 4) {
      this.synthSnare(now, 0.12);
    }
    if (s % 4 === 2) {
      this.synthHiHat(now, 0.06, false);
    }

    // Harp arpeggios mirroring ocean ripple
    const oceanHarp = [
      N.C4, N.E4, N.G4, N.C5, N.E5, N.G4, N.E4, N.C4,
      N.A3, N.C4, N.E4, N.A4, N.C5, N.E4, N.C4, N.A3,
      N.F3, N.A3, N.C4, N.F4, N.A4, N.C4, N.A3, N.F3,
      N.G3, N.B3, N.D4, N.G4, N.B4, N.D4, N.B3, N.G3
    ];
    if (s % 2 === 0) {
      this.synthPluck(now, oceanHarp[s], 0.45, 0.18);
    }

    // Soothing ocean breeze flute melody
    const oceanFlute = [
      N.C5, N.REST, N.E5, N.REST, N.G5, N.REST, N.F5, N.E5,
      N.D5, N.REST, N.C5, N.REST, N.A4, N.REST, N.C5, N.REST,
      N.A4, N.REST, N.C5, N.D5, N.E5, N.REST, N.D5, N.C5,
      N.D5, N.REST, N.G4, N.REST, N.C5, N.REST, N.REST, N.REST
    ];
    if (oceanFlute[s] !== N.REST) {
      this.synthLead(now, oceanFlute[s], 0.38, 0.15, 'sine');
    }
  }

  // --- TRACK 16: SUNSET CHAGHAF (Panorama Petang Acoustic Chill) ---
  private playSunsetChaghafStep(now: number, s: number) {
    const N = this.NOTE;
    // Chill lofi beat
    if (s % 8 === 0 || s === 6 || s === 22) {
      this.synthKick(now, s % 8 === 0 ? 0.35 : 0.18);
    }
    if (s % 8 === 4) {
      this.synthClap(now, 0.22);
    }
    if (s % 2 === 1) {
      this.synthHiHat(now, 0.08, false);
    }

    // Warm Rhodes acoustic chords
    const chordBase = [N.D3, N.Bb2, N.F2, N.C3];
    if (s % 8 === 0) {
      const root = chordBase[Math.floor(s / 8)];
      this.synthBass(now, root / 2, 0.4, 0.22);
    }

    // Warm twilight acoustic plucks & chords
    const sunsetPluck = [
      N.F4, N.A4, N.D5, N.REST, N.E4, N.G4, N.C5, N.REST,
      N.D4, N.F4, N.Bb4, N.REST, N.C4, N.E4, N.A4, N.REST,
      N.D4, N.F4, N.A4, N.D5, N.C5, N.A4, N.F4, N.D4,
      N.Bb3, N.D4, N.F4, N.A4, N.G4, N.E4, N.D4, N.REST
    ];
    if (sunsetPluck[s] !== N.REST) {
      this.synthPluck(now, sunsetPluck[s], 0.5, 0.2);
    }

    // Mellow sax / flute lead
    const sunsetLead = [
      N.D5, N.REST, N.F5, N.E5, N.D5, N.REST, N.C5, N.REST,
      N.Bb4, N.REST, N.A4, N.G4, N.A4, N.REST, N.D4, N.REST,
      N.F4, N.G4, N.A4, N.C5, N.D5, N.REST, N.E5, N.F5,
      N.E5, N.D5, N.Cs5, N.E5, N.D5, N.REST, N.REST, N.REST
    ];
    if (sunsetLead[s] !== N.REST) {
      this.synthLead(now, sunsetLead[s], 0.32, 0.16, 'triangle');
    }
  }

  // --- TRACK 17: TEACHER ANTHEM (Mars Inspirasi Guru & Kasih Ibu) ---
  private playTeacherAnthemStep(now: number, s: number) {
    const N = this.NOTE;
    // Grand orchestral cadence
    if (s % 8 === 0 || s % 8 === 3 || s % 8 === 6) {
      this.synthKick(now, 0.35);
    }
    if (s % 8 === 4) {
      this.synthSnare(now, 0.28);
    }
    if (s % 2 === 0) {
      this.synthHiHat(now, 0.12, false);
    }

    // Majestic brass bassline
    const anthemRoots = [N.C2, N.G2, N.A2, N.F2];
    const curRoot = anthemRoots[Math.floor(s / 8)];
    if (s % 4 === 0) {
      this.synthBass(now, curRoot, 0.25, 0.25);
    }

    // Uplifting anthem bells
    const anthemChimes = [
      N.C4, N.E4, N.G4, N.C5, N.G4, N.B4, N.D5, N.G5,
      N.A3, N.C4, N.E4, N.A4, N.F3, N.A3, N.C4, N.F4,
      N.C4, N.G4, N.C5, N.E5, N.D5, N.C5, N.B4, N.G4,
      N.A4, N.F4, N.D4, N.G4, N.C4, N.REST, N.C5, N.REST
    ];
    if (s % 2 === 0 && anthemChimes[s] !== N.REST) {
      this.synthPluck(now, anthemChimes[s], 0.5, 0.2);
    }

    // Triumphant noble lead melody
    const anthemMelody = [
      N.C5, N.REST, N.C5, N.D5, N.E5, N.REST, N.D5, N.C5,
      N.D5, N.REST, N.G4, N.REST, N.D5, N.REST, N.E5, N.D5,
      N.C5, N.REST, N.E5, N.G5, N.A5, N.REST, N.G5, N.F5,
      N.E5, N.REST, N.D5, N.REST, N.C5, N.REST, N.REST, N.REST
    ];
    if (anthemMelody[s] !== N.REST) {
      this.synthLead(now, anthemMelody[s], 0.28, 0.22, 'square');
    }
  }

  // --- SYNTHESIZER INSTRUMENT VOICES ---

  // Standard Kick
  private synthKick(time: number, volume: number) {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(38, time + 0.12);

    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);

    osc.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(time);
    osc.stop(time + 0.22);
  }

  // Deep 808 Trap Sub Kick
  private synth808Kick(time: number, volume: number) {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, time);
    osc.frequency.exponentialRampToValueAtTime(45, time + 0.08);
    osc.frequency.setValueAtTime(42, time + 0.35);

    gain.gain.setValueAtTime(volume, time);
    gain.gain.linearRampToValueAtTime(volume * 0.8, time + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.4);

    osc.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(time);
    osc.stop(time + 0.42);
  }

  // Snare / Rim Clack
  private synthSnare(time: number, volume: number) {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, time);
    osc.frequency.exponentialRampToValueAtTime(90, time + 0.1);
    oscGain.gain.setValueAtTime(volume * 0.7, time);
    oscGain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);
    osc.connect(oscGain);
    oscGain.connect(this.bgmGain);
    osc.start(time);
    osc.stop(time + 0.14);

    const bufferSize = Math.floor(this.ctx.sampleRate * 0.1);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.setValueAtTime(1200, time);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(volume * 0.8, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.bgmGain);

    noise.start(time);
  }

  // Handclap
  private synthClap(time: number, volume: number) {
    if (!this.ctx || !this.bgmGain) return;
    for (let i = 0; i < 3; i++) {
      const offset = i * 0.012;
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.08);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let j = 0; j < bufferSize; j++) {
        data[j] = (Math.random() * 2 - 1) * Math.exp(-j / (bufferSize * 0.25));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, time + offset);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(volume * (i === 2 ? 1 : 0.6), time + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, time + offset + 0.1);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.bgmGain);
      noise.start(time + offset);
    }
  }

  // Hi-hat
  private synthHiHat(time: number, volume: number, isOpen: boolean) {
    if (!this.ctx || !this.bgmGain) return;
    const dur = isOpen ? 0.08 : 0.035;
    const bufferSize = Math.floor(this.ctx.sampleRate * dur);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1);
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(7500, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + dur);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.bgmGain);

    noise.start(time);
  }

  // Rolling Synth Bass
  private synthBass(time: number, freq: number, duration: number, volume: number) {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, time);
    filter.frequency.exponentialRampToValueAtTime(140, time + duration);
    filter.Q.setValueAtTime(3.5, time);

    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(time);
    osc.stop(time + duration + 0.02);
  }

  // Melodic Lead Synthesizer
  private synthLead(time: number, freq: number, duration: number, volume: number, wave: OscillatorType = 'sawtooth') {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = wave;
    osc.frequency.setValueAtTime(freq, time);

    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(freq / 2, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1800, time);
    filter.frequency.exponentialRampToValueAtTime(600, time + duration);
    filter.Q.setValueAtTime(2.0, time);

    gain.gain.setValueAtTime(0.01, time);
    gain.gain.linearRampToValueAtTime(volume, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    subOsc.connect(filter);
    filter.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(time);
    subOsc.start(time);
    osc.stop(time + duration + 0.05);
    subOsc.stop(time + duration + 0.05);
  }

  // Plucked Instrument (Oud / Arabian Kanun Synth)
  private synthPluck(time: number, freq: number, duration: number, volume: number) {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2800, time);
    filter.frequency.exponentialRampToValueAtTime(400, time + duration);
    filter.Q.setValueAtTime(4.0, time);

    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(time);
    osc.stop(time + duration + 0.02);
  }

  // Shimmering Arpeggio
  private synthArp(time: number, freq: number, duration: number, volume: number) {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(time);
    osc.stop(time + duration + 0.02);
  }

  // ==========================================
  // --- SOUND EFFECTS (SFX) ---
  // ==========================================

  public playTileClick(isIsim: boolean = false, isFiil: boolean = false) {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const baseFreq = isIsim ? 587.33 : isFiil ? 659.25 : 523.25;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + 0.06);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.09);
  }

  public playTileRemove() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.08);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.1);
  }

  public playPopSound(pitch: number = 1.0) {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    // Resonant bubble pop: snappy rapid upward frequency sweep + body resonance
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const startFreq = 420 * pitch;
    const peakFreq = 1680 * pitch;
    const endFreq = 880 * pitch;

    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(peakFreq, now + 0.025);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.08);

    gain.gain.setValueAtTime(0.32, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.14);

    // Sweet sparkling bubble harmonic
    const overtone = this.ctx.createOscillator();
    const overtoneGain = this.ctx.createGain();
    overtone.type = 'triangle';
    overtone.frequency.setValueAtTime(peakFreq * 1.5, now + 0.01);
    overtone.frequency.exponentialRampToValueAtTime(endFreq * 1.2, now + 0.09);

    overtoneGain.gain.setValueAtTime(0.18, now + 0.01);
    overtoneGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    overtone.connect(overtoneGain);
    overtoneGain.connect(this.sfxGain);

    overtone.start(now + 0.01);
    overtone.stop(now + 0.11);
  }

  public playCorrect(combo: number = 1) {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    // Trigger juicy pop sound
    this.playPopSound(1 + Math.min(0.5, (combo - 1) * 0.08));

    const pitchMultiplier = Math.min(1.4, 1 + (combo - 1) * 0.05);
    const chords = [523.25, 659.25, 783.99, 1046.50, 1318.51].map(f => f * pitchMultiplier);

    chords.forEach((freq, idx) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);

      gain.gain.setValueAtTime(0.22, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.45);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.48);
    });

    const spark = this.ctx.createOscillator();
    const sparkGain = this.ctx.createGain();
    spark.type = 'triangle';
    spark.frequency.setValueAtTime(1567.98 * pitchMultiplier, now + 0.18);
    sparkGain.gain.setValueAtTime(0.15, now + 0.18);
    sparkGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
    spark.connect(sparkGain);
    sparkGain.connect(this.sfxGain);
    spark.start(now + 0.18);
    spark.stop(now + 0.62);
  }

  public playBuzzerTet() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    // Classic Game Show Dual-Tone Error Buzzer "TETTTT!" (Detuned harsh saw waves)
    const buzzerFreqs = [146.83, 155.56, 220.00, 233.08]; // D3, Eb3, A3, Bb3 dissonant cluster
    
    // First quick pulse "Tet-"
    buzzerFreqs.forEach(freq => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(750, now);
      filter.Q.setValueAtTime(2.5, now);

      gain.gain.setValueAtTime(0.24, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now);
      osc.stop(now + 0.13);
    });

    // Second long emphatic pulse "-TETTTT!"
    const t2 = now + 0.14;
    buzzerFreqs.forEach(freq => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, t2);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(720, t2);
      filter.Q.setValueAtTime(2.2, t2);

      gain.gain.setValueAtTime(0.3, t2);
      gain.gain.setValueAtTime(0.28, t2 + 0.25);
      gain.gain.exponentialRampToValueAtTime(0.001, t2 + 0.38);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(t2);
      osc.stop(t2 + 0.4);
    });
  }

  public playKidChuckle() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    // Playful cartoon chuckle "he-he-he-heee!" (Rapid bouncy vocal frequency pulses)
    const chuckleSteps = [
      { f: 580, t: 0.12, d: 0.07 },
      { f: 520, t: 0.20, d: 0.07 },
      { f: 470, t: 0.28, d: 0.07 },
      { f: 420, t: 0.36, d: 0.10 }
    ];

    chuckleSteps.forEach(step => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(step.f, now + step.t);
      osc.frequency.exponentialRampToValueAtTime(step.f * 0.85, now + step.t + step.d);

      gain.gain.setValueAtTime(0.18, now + step.t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + step.t + step.d);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now + step.t);
      osc.stop(now + step.t + step.d + 0.02);
    });
  }

  public playKidVoiceLaLaFormant() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    // Dual-syllable synthetic cute child vocal "LAAA... LAAA!"
    const syllables = [
      { start: now + 0.05, dur: 0.18, pitchStart: 460, pitchEnd: 410 },
      { start: now + 0.25, dur: 0.22, pitchStart: 440, pitchEnd: 380 }
    ];

    syllables.forEach(s => {
      if (!this.ctx || !this.sfxGain) return;
      
      // Vocal cord pulse source (sawtooth + triangle blend for voice-like timbre)
      const source = this.ctx.createOscillator();
      source.type = 'sawtooth';
      source.frequency.setValueAtTime(s.pitchStart, s.start);
      source.frequency.exponentialRampToValueAtTime(s.pitchEnd, s.start + s.dur);

      // Formant 1 (Vowel 'A' around 850Hz)
      const f1 = this.ctx.createBiquadFilter();
      f1.type = 'bandpass';
      f1.frequency.setValueAtTime(850, s.start);
      f1.Q.setValueAtTime(4.0, s.start);

      // Formant 2 (around 1350Hz)
      const f2 = this.ctx.createBiquadFilter();
      f2.type = 'bandpass';
      f2.frequency.setValueAtTime(1350, s.start);
      f2.Q.setValueAtTime(3.5, s.start);

      const amp = this.ctx.createGain();
      amp.gain.setValueAtTime(0.001, s.start);
      amp.gain.linearRampToValueAtTime(0.22, s.start + 0.04);
      amp.gain.exponentialRampToValueAtTime(0.001, s.start + s.dur);

      source.connect(f1);
      source.connect(f2);
      f1.connect(amp);
      f2.connect(amp);
      amp.connect(this.sfxGain);

      source.start(s.start);
      source.stop(s.start + s.dur + 0.02);
    });
  }

  public speakArabicLaLa() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || this.isMuted) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance("لَا ! لَا !");
      utterance.lang = "ar-SA";
      utterance.pitch = 1.85; // Cute kid high-pitched voice
      utterance.rate = 1.25;  // Energetic kid cadence
      utterance.volume = 1.0;

      const voices = window.speechSynthesis.getVoices();
      const arVoice = voices.find(v => v.lang.startsWith('ar') || v.lang.includes('Arabic'));
      if (arVoice) {
        utterance.voice = arVoice;
      }
      window.speechSynthesis.speak(utterance);
    } catch {
      // Safe fallback if speech synthesis is disabled in iframe
    }
  }

  public playWrong() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;

    // 1. Play Classic Game Buzzer "TETTTT!"
    this.playBuzzerTet();

    // 2. Play cute synthetic child vocal formant "LAA! LAA!"
    this.playKidVoiceLaLaFormant();

    // 3. Play cartoon giggle / chuckle
    this.playKidChuckle();

    // 4. Trigger speech synthesis child Arabic "لَا! لَا!"
    this.speakArabicLaLa();

    // 5. Subtle low descending dramatic thud
    const now = this.ctx.currentTime;
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(120, now);
    subOsc.frequency.exponentialRampToValueAtTime(45, now + 0.35);
    subGain.gain.setValueAtTime(0.2, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
    subOsc.connect(subGain);
    subGain.connect(this.sfxGain);
    subOsc.start(now);
    subOsc.stop(now + 0.4);
  }

  public playDoorOpen() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(480, now + 0.4);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.48);

    const chime = this.ctx.createOscillator();
    const chimeGain = this.ctx.createGain();
    chime.type = 'sine';
    chime.frequency.setValueAtTime(880, now + 0.2);
    chime.frequency.setValueAtTime(1174.66, now + 0.35);
    chimeGain.gain.setValueAtTime(0.2, now + 0.2);
    chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
    chime.connect(chimeGain);
    chimeGain.connect(this.sfxGain);
    chime.start(now + 0.2);
    chime.stop(now + 0.72);
  }

  public playVictoryFanfare() {
    this.initContext();
    if (!this.ctx || !this.sfxGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const fanfare = [
      { f: 523.25, t: 0, d: 0.15 },
      { f: 523.25, t: 0.15, d: 0.15 },
      { f: 523.25, t: 0.3, d: 0.15 },
      { f: 659.25, t: 0.45, d: 0.35 },
      { f: 587.33, t: 0.8, d: 0.15 },
      { f: 659.25, t: 0.95, d: 0.15 },
      { f: 783.99, t: 1.1, d: 0.7 }
    ];

    fanfare.forEach(note => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, now + note.t);
      gain.gain.setValueAtTime(0.28, now + note.t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now + note.t);
      osc.stop(now + note.t + note.d + 0.05);
    });
  }
}

export const soundEngine = new SoundEngine();
