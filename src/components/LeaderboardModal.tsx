import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Flame, Award, X, Sparkles, UserCheck, Search, RotateCcw, PlusCircle, Check } from 'lucide-react';
import { LeaderboardEntry } from '../types';
import { getLeaderboard, saveLeaderboardEntry, resetLeaderboard } from '../utils/leaderboard';
import { soundEngine } from '../audio/audioEngine';
import confetti from 'canvas-confetti';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentScore?: number;
  currentAccuracy?: number;
  currentMaxCombo?: number;
  currentMode?: 'main' | 'bonus' | 'all';
}

const AVATAR_OPTIONS = ['👑', '🌟', '⚡', '🚀', '🌸', '🛡️', '🕌', '🎮', '🎯', '🦅'];

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  onClose,
  currentScore = 0,
  currentAccuracy = 100,
  currentMaxCombo = 1,
  currentMode = 'main'
}) => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'main' | 'bonus'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('👑');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setEntries(getLeaderboard());
      // If user has a score > 0, offer submission form by default
      if (currentScore > 0 && !hasSubmitted) {
        setShowSubmitForm(true);
      }
    }
  }, [isOpen, currentScore, hasSubmitted]);

  if (!isOpen) return null;

  const filteredEntries = entries
    .filter(e => {
      if (activeTab === 'all') return true;
      return e.mode === activeTab || e.mode === 'all';
    })
    .filter(e => {
      if (!searchQuery.trim()) return true;
      return e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.rankTitle.toLowerCase().includes(searchQuery.toLowerCase());
    });

  const top3 = filteredEntries.slice(0, 3);
  const restEntries = filteredEntries.slice(3);

  const handleSubmitScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim()) return;

    soundEngine.playCorrect(5);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });

    let rankTitle = 'Mumtaz Tertinggi (مُمْتَازٌ)';
    if (currentAccuracy < 70) rankTitle = 'Maqbul (مَقْبُولٌ)';
    else if (currentAccuracy < 85) rankTitle = 'Jayyid Jiddan (جَيِّدٌ جِدّاً)';

    const updated = saveLeaderboardEntry({
      name: playerName.trim(),
      score: currentScore,
      accuracy: currentAccuracy,
      maxCombo: currentMaxCombo,
      rankTitle,
      mode: currentMode as 'main' | 'bonus' | 'all',
      avatarEmoji: selectedAvatar
    });

    setEntries(updated);
    setHasSubmitted(true);
    setShowSubmitForm(false);
  };

  const handleReset = () => {
    if (window.confirm('Adakah anda pasti mahu set semula papan pendahulu ke rekod asal?')) {
      const reset = resetLeaderboard();
      setEntries(reset);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-gradient-to-b from-slate-900 via-[#0a1224] to-[#040814] border-2 border-amber-400/80 rounded-3xl p-4 sm:p-6 shadow-[0_0_50px_rgba(251,191,36,0.3)] flex flex-col gap-4 relative overflow-hidden max-h-[92vh]">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-60 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-[0_0_15px_rgba(251,191,36,0.6)]">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-100 font-sans tracking-tight">
                  Papan Juara Nahu & Qawalib
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/40">
                  DEWAN KEMASYHURAN
                </span>
              </div>
              <p className="text-xs text-slate-400">Senarai pencapaian markah tertinggi pelajar Bahasa Arab Tingkatan 1</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Submit Score Banner (if user has active game score) */}
        {currentScore > 0 && !hasSubmitted && (
          <div className="bg-gradient-to-r from-amber-950/60 via-indigo-950/60 to-emerald-950/60 border-2 border-amber-400/50 rounded-2xl p-3.5 flex flex-col gap-2 relative shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-slate-200">
                  Markah Semasa Anda:{' '}
                  <strong className="text-amber-400 font-mono text-sm">{currentScore.toLocaleString()} PTS</strong>
                </span>
              </div>
              {!showSubmitForm && (
                <button
                  onClick={() => setShowSubmitForm(true)}
                  className="px-3 py-1 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black rounded-lg transition active:scale-95 cursor-pointer shadow"
                >
                  Rekodkan Markah Saya!
                </button>
              )}
            </div>

            {showSubmitForm && (
              <form onSubmit={handleSubmitScore} className="flex flex-col gap-2 pt-1 border-t border-slate-700/60">
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-xs text-slate-400 font-medium">Avatar:</span>
                    <div className="flex gap-1 overflow-x-auto py-1">
                      {AVATAR_OPTIONS.map(em => (
                        <button
                          key={em}
                          type="button"
                          onClick={() => setSelectedAvatar(em)}
                          className={`w-7 h-7 rounded-lg text-sm flex items-center justify-center transition ${
                            selectedAvatar === em
                              ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300 scale-110 shadow'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          {em}
                        </button>
                      ))}
                    </div>
                  </div>

                  <input
                    type="text"
                    required
                    maxLength={24}
                    placeholder="Masukkan nama anda (cth: Ahmad Rayyan)"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="flex-1 w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-md transition active:scale-95 cursor-pointer shrink-0"
                  >
                    Simpan Skor 🏆
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Filter Tabs & Search Strip */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          {/* Tabs */}
          <div className="flex p-1 rounded-xl bg-slate-900/90 border border-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 sm:flex-initial px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Semua Kategori
            </button>
            <button
              onClick={() => setActiveTab('main')}
              className={`flex-1 sm:flex-initial px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeTab === 'main'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Silibus Utama (24 Unit)
            </button>
            <button
              onClick={() => setActiveTab('bonus')}
              className={`flex-1 sm:flex-initial px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeTab === 'bonus'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Round Bonus
            </button>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama jaguh..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-44 bg-slate-900/90 border border-slate-800 rounded-xl pl-8 pr-3 py-1 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400/70"
            />
          </div>
        </div>

        {/* TOP 3 PODIUM DISPLAY */}
        {top3.length > 0 && !searchQuery && (
          <div className="grid grid-cols-3 gap-2 sm:gap-3 items-end pt-2 pb-1">
            {/* 2nd Place (Left) */}
            {top3[1] && (
              <div className="flex flex-col items-center bg-slate-900/80 border-2 border-slate-400/40 rounded-2xl p-2.5 sm:p-3 relative shadow-lg order-1">
                <div className="w-6 h-6 rounded-full bg-slate-300 text-slate-950 font-black text-xs flex items-center justify-center -top-3 absolute shadow-md border border-white">
                  2
                </div>
                <div className="text-2xl mt-1">{top3[1].avatarEmoji}</div>
                <span className="text-xs font-bold text-slate-200 mt-1 truncate max-w-full text-center">
                  {top3[1].name}
                </span>
                <span className="text-xs sm:text-sm font-black text-slate-300 font-mono">
                  {top3[1].score.toLocaleString()}
                </span>
                <span className="text-[9px] text-slate-400 uppercase font-semibold mt-0.5">
                  {top3[1].accuracy}% Ketepatan
                </span>
              </div>
            )}

            {/* 1st Place (Center - Elevated) */}
            {top3[0] && (
              <div className="flex flex-col items-center bg-gradient-to-b from-amber-950/80 to-slate-900/90 border-2 border-amber-400 rounded-2xl p-3 sm:p-4 relative shadow-[0_0_20px_rgba(251,191,36,0.3)] order-2 scale-105 z-10">
                <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center -top-3.5 absolute shadow-lg border-2 border-amber-200">
                  👑 1
                </div>
                <div className="text-3xl mt-1">{top3[0].avatarEmoji}</div>
                <span className="text-xs sm:text-sm font-black text-amber-300 mt-1 truncate max-w-full text-center">
                  {top3[0].name}
                </span>
                <span className="text-sm sm:text-base font-black text-amber-400 font-mono">
                  {top3[0].score.toLocaleString()} PTS
                </span>
                <span className="text-[10px] text-amber-300/80 font-bold mt-0.5">
                  {top3[0].rankTitle.split('(')[0]}
                </span>
              </div>
            )}

            {/* 3rd Place (Right) */}
            {top3[2] && (
              <div className="flex flex-col items-center bg-slate-900/80 border-2 border-amber-700/50 rounded-2xl p-2.5 sm:p-3 relative shadow-lg order-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-amber-100 font-black text-xs flex items-center justify-center -top-3 absolute shadow-md border border-amber-500">
                  3
                </div>
                <div className="text-2xl mt-1">{top3[2].avatarEmoji}</div>
                <span className="text-xs font-bold text-slate-200 mt-1 truncate max-w-full text-center">
                  {top3[2].name}
                </span>
                <span className="text-xs sm:text-sm font-black text-amber-500 font-mono">
                  {top3[2].score.toLocaleString()}
                </span>
                <span className="text-[9px] text-slate-400 uppercase font-semibold mt-0.5">
                  {top3[2].accuracy}% Ketepatan
                </span>
              </div>
            )}
          </div>
        )}

        {/* Leaderboard Scrollable List */}
        <div className="flex flex-col gap-1.5 overflow-y-auto pr-1 flex-1 min-h-[160px] max-h-64 sm:max-h-72">
          {filteredEntries.map((entry, idx) => {
            const isTop3 = idx < 3;
            return (
              <div
                key={entry.id}
                className={`p-2.5 sm:p-3 rounded-2xl border transition flex items-center justify-between gap-3 ${
                  entry.isUser
                    ? 'bg-amber-950/70 border-amber-400 shadow-md ring-1 ring-amber-400/50'
                    : isTop3
                    ? 'bg-slate-900/90 border-slate-700/80 hover:bg-slate-850'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/70'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {/* Rank Number Badge */}
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                      idx === 0
                        ? 'bg-amber-400 text-slate-950 shadow-[0_0_8px_#fbbf24]'
                        : idx === 1
                        ? 'bg-slate-300 text-slate-950'
                        : idx === 2
                        ? 'bg-amber-700 text-white'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    #{idx + 1}
                  </div>

                  <div className="text-xl shrink-0">{entry.avatarEmoji}</div>

                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs sm:text-sm font-bold text-slate-100 truncate">
                        {entry.name}
                      </span>
                      {entry.isUser && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded font-black bg-amber-400 text-slate-950">
                          ANDA
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="text-indigo-300 font-medium truncate">{entry.rankTitle}</span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5 text-amber-400 font-bold">
                        <Flame className="w-3 h-3 text-amber-400" />
                        {entry.maxCombo}x Streak
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end shrink-0">
                  <span className="text-sm sm:text-base font-black text-amber-400 font-mono">
                    {entry.score.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {entry.accuracy}% Ketepatan
                  </span>
                </div>
              </div>
            );
          })}

          {filteredEntries.length === 0 && (
            <div className="p-8 text-center text-slate-500 text-xs">
              Tiada rekod ditemui untuk carian ini.
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-slate-800 pt-3">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-400 transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Set Semula Rekod</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer"
          >
            Tutup Papan Juara
          </button>
        </div>

      </div>
    </div>
  );
};
