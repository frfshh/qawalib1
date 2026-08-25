export type WordType = 'isim' | 'fiil' | 'harf';

export interface WordOption {
  w: string;
  type: WordType;
  msMeaning?: string;
  transliteration?: string;
}

export interface PatternSlot {
  ar: string;
  ms: string;
  expectedType?: WordType;
}

export interface IrabWordDetail {
  word: string;
  role: string; // e.g. "Mubtada' (مبتدأ)", "Fa'il (فاعل)", "Maf'ul Bih (مفعول به)", "Isim Majrur (اسم مجرور)"
  harakat: string; // e.g. "Dhammah (ُ)", "Fathah (َ)", "Kasrah (ِ)"
  irabStatus: string; // e.g. "Marfu' (مرفوع)", "Mansub (منصوب)", "Majrur (مجرور)"
  reason: string; // Explanation of why this word gets this baris
  testOptions?: string[]; // Multiple choice options for Harakat quiz e.g. ["ُ", "َ", "ِ", "ْ"]
  correctHarakat?: string; // e.g. "ُ"
}

export interface LevelQuestion {
  unitNum: number;
  unitName: string;
  unitArName?: string;
  patterns: PatternSlot[];
  correctAns: string[];
  options: WordOption[];
  explanation?: string;
  meaningMs?: string; // Makna mufidah lengkap
  irabDetails?: IrabWordDetail[]; // Analisis terperinci konsep i'rab & baris
}

export type MusicTheme = 
  | 'ocean_breeze'
  | 'sunset_chaghaf'
  | 'teacher_anthem'
  | 'lofi_nasheed'
  | 'pixel_minecraft'
  | 'zombie_darkwave'
  | 'merdeka_march'
  | 'sakura_breeze'
  | 'cyber_hijaz' 
  | 'desert_trap' 
  | 'sahara_drift'
  | 'mamluk_tension'
  | 'andalusia_rush'
  | 'nasheed_electro' 
  | 'neon_oud' 
  | 'bonus_turbo' 
  | 'synth_arcade'
  | 'ambient_arabic';

export type AtmosphereMode = 
  | 'tema_buku'
  | 'panorama_laut'
  | 'panorama_petang'
  | 'hari_guru'
  | 'hari_ibu'
  | 'gelombang_muzik'
  | 'astro_oasis' 
  | 'bunga_sakura'
  | 'kemerdekaan'
  | 'zombie_apocalypse'
  | 'minecraft_voxel'
  | 'cosmic_hijaz' 
  | 'suria_sahara' 
  | 'arcade_cyberpunk';

export interface SelectedWordSlot {
  id: string;
  word: WordOption;
  originalIndex: number;
}

export interface GameStats {
  score: number;
  combo: number;
  maxCombo: number;
  correctAnswers: number;
  wrongAnswers: number;
  timeouts: number;
  totalTimeSpent: number;
  bonusIrabPoints?: number;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  accuracy: number;
  maxCombo: number;
  rankTitle: string;
  mode: 'all' | 'main' | 'bonus';
  date: string;
  isUser?: boolean;
  avatarEmoji: string;
}
