import { LeaderboardEntry } from '../types';

const LEADERBOARD_STORAGE_KEY = 'qawalib_matrix_leaderboard_v1';

const DEFAULT_LEADERBOARD: LeaderboardEntry[] = [
  {
    id: 'seed-1',
    name: 'Ahmad Rayyan',
    score: 42800,
    accuracy: 100,
    maxCombo: 14,
    rankTitle: 'Mumtaz Tertinggi (مُمْتَازٌ)',
    mode: 'bonus',
    date: 'Hari ini',
    avatarEmoji: '👑'
  },
  {
    id: 'seed-2',
    name: 'Nur Iman Farihin',
    score: 38500,
    accuracy: 96,
    maxCombo: 11,
    rankTitle: 'Bintang Nahu Fastaqim',
    mode: 'main',
    date: 'Semalam',
    avatarEmoji: '🌟'
  },
  {
    id: 'seed-3',
    name: 'Ustaz Farhan',
    score: 35100,
    accuracy: 94,
    maxCombo: 10,
    rankTitle: 'Pakar Qawalib Arabi',
    mode: 'all',
    date: '2 hari lalu',
    avatarEmoji: '⚡'
  },
  {
    id: 'seed-4',
    name: 'Siti Aisyah Humaira',
    score: 31200,
    accuracy: 90,
    maxCombo: 8,
    rankTitle: 'Jayyid Jiddan (جَيِّدٌ جِدّاً)',
    mode: 'main',
    date: '3 hari lalu',
    avatarEmoji: '🌸'
  },
  {
    id: 'seed-5',
    name: 'Muhammad Harith',
    score: 28400,
    accuracy: 85,
    maxCombo: 7,
    rankTitle: 'Penjelajah Nahu Siber',
    mode: 'main',
    date: '4 hari lalu',
    avatarEmoji: '🚀'
  },
  {
    id: 'seed-6',
    name: 'Faris Hazim',
    score: 24900,
    accuracy: 80,
    maxCombo: 6,
    rankTitle: 'Wira Isim & Fi\'il',
    mode: 'main',
    date: '5 hari lalu',
    avatarEmoji: '🛡️'
  }
];

export function getLeaderboard(): LeaderboardEntry[] {
  try {
    const data = localStorage.getItem(LEADERBOARD_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(DEFAULT_LEADERBOARD));
      return DEFAULT_LEADERBOARD;
    }
    const parsed: LeaderboardEntry[] = JSON.parse(data);
    return parsed.sort((a, b) => b.score - a.score);
  } catch {
    return DEFAULT_LEADERBOARD;
  }
}

export function saveLeaderboardEntry(entry: Omit<LeaderboardEntry, 'id' | 'date'>): LeaderboardEntry[] {
  const current = getLeaderboard();
  const newEntry: LeaderboardEntry = {
    ...entry,
    id: `entry-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    date: 'Baru Sahaja',
    isUser: true
  };

  const updated = [newEntry, ...current].sort((a, b) => b.score - a.score).slice(0, 20); // Keep top 20
  try {
    localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save leaderboard:', err);
  }
  return updated;
}

export function resetLeaderboard(): LeaderboardEntry[] {
  try {
    localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(DEFAULT_LEADERBOARD));
  } catch (err) {
    console.error('Failed to reset leaderboard:', err);
  }
  return DEFAULT_LEADERBOARD;
}
