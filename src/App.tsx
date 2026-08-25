/**
 * QAWALIB MATRIX: SILIBUS LENGKAP BAHASA ARAB TINGKATAN 1
 * Sistem Pembelajaran Nahu & Qawalib Interaktif (Astro-Nahu Neo-Arcade)
 */

import React, { useState, useEffect } from 'react';
import { RotateCcw, Send, Sparkles, AlertTriangle, CheckCircle2, ShieldAlert, Trophy, ArrowRight, BookOpen, Target, Shuffle } from 'lucide-react';
import { gameData, bonusGameData } from './data/syllabusData';
import { allQuestionSets, QuestionSetMeta } from './data/questionSets';
import { LevelQuestion, SelectedWordSlot, WordOption, GameStats, MusicTheme, AtmosphereMode } from './types';
import { soundEngine } from './audio/audioEngine';
import { getMaknaMufidah, getSentenceIrabAnalysis } from './utils/irabHelper';
import { BackgroundAtmosphere } from './components/BackgroundAtmosphere';
import { HudHeader } from './components/HudHeader';
import { PatternBlueprint } from './components/PatternBlueprint';
import { DropZone } from './components/DropZone';
import { WordBank } from './components/WordBank';
import { HiddenNavMenu } from './components/HiddenNavMenu';
import { AudioSettingsModal } from './components/AudioSettingsModal';
import { LevelTransitionModal } from './components/LevelTransitionModal';
import { VictoryModal } from './components/VictoryModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { HelpModal } from './components/HelpModal';
import { HarakatBonusModal } from './components/HarakatBonusModal';
import { PauseGraphicsOverlay } from './components/PauseGraphicsOverlay';

export default function App() {
  // Active Question Set ID (1, 2, or 3)
  const [currentSetId, setCurrentSetId] = useState<number>(1);

  // Game State
  const [isBonusMode, setIsBonusMode] = useState<boolean>(false);
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [selectedWords, setSelectedWords] = useState<SelectedWordSlot[]>([]);
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(1);
  const [maxCombo, setMaxCombo] = useState<number>(1);
  
  // Timer State
  const [timeLeft, setTimeLeft] = useState<number>(35);
  const [maxTimeForLevel, setMaxTimeForLevel] = useState<number>(35);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  
  // Feedback State
  const [feedback, setFeedback] = useState<{
    text: string;
    type: 'idle' | 'correct' | 'wrong' | 'timeout';
    correctSchema?: string;
  }>({
    text: 'Sedia untuk menyusun jawapan mengikut pola qawalib.',
    type: 'idle'
  });

  // Modal States
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);
  const [showLevelTransition, setShowLevelTransition] = useState<boolean>(false);
  const [showVictoryModal, setShowVictoryModal] = useState<boolean>(false);
  const [showLeaderboardModal, setShowLeaderboardModal] = useState<boolean>(false);
  const [showHarakatBonus, setShowHarakatBonus] = useState<boolean>(false);
  const [isBonusOffer, setIsBonusOffer] = useState<boolean>(false);
  const [showAudioSettings, setShowAudioSettings] = useState<boolean>(false);
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);
  const [lastTimeBonus, setLastTimeBonus] = useState<number>(0);

  // Audio & Atmosphere state
  const [isMuted, setIsMuted] = useState<boolean>(soundEngine.getIsMuted());
  const [audioTheme, setAudioTheme] = useState<MusicTheme>('cyber_hijaz');
  const [atmosphereMode, setAtmosphereMode] = useState<AtmosphereMode>('astro_oasis');
  const [volume, setVolume] = useState<number>(soundEngine.getVolume());
  const [hasStartedAudio, setHasStartedAudio] = useState<boolean>(false);

  // Performance stats
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    combo: 1,
    maxCombo: 1,
    correctAnswers: 0,
    wrongAnswers: 0,
    timeouts: 0,
    totalTimeSpent: 0
  });

  // Active dataset according to current question set
  const activeSetMeta = allQuestionSets.find(s => s.id === currentSetId) || allQuestionSets[0];
  const activeDataset: LevelQuestion[] = isBonusMode ? activeSetMeta.bonusData : activeSetMeta.data;
  const currentLevelData: LevelQuestion = activeDataset[currentLevelIndex] || activeDataset[0];
  const totalLevels = activeDataset.length;

  // Shuffled word bank options so they are randomized (terombak) instead of fixed in solution order
  const [shuffledOptions, setShuffledOptions] = useState<WordOption[]>([]);

  // Selected original indices in word bank
  const selectedOriginalIndices = selectedWords.map(s => s.originalIndex);

  // Helper function to shuffle array
  const shuffleOptions = (options: WordOption[]) => {
    const arr = [...options];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Start background audio on first user touch anywhere
  const triggerAudioStart = () => {
    if (!hasStartedAudio) {
      soundEngine.startBGM(audioTheme);
      setHasStartedAudio(true);
    }
  };

  // Initialize level
  const initLevel = (index: number, bonus: boolean, setId: number = currentSetId) => {
    const setObj = allQuestionSets.find(s => s.id === setId) || allQuestionSets[0];
    const dataset = bonus ? setObj.bonusData : setObj.data;
    if (index >= dataset.length) {
      if (!bonus) {
        setIsBonusOffer(true);
        setShowVictoryModal(true);
        soundEngine.playVictoryFanfare();
      } else {
        setIsBonusOffer(false);
        setShowVictoryModal(true);
        soundEngine.playVictoryFanfare();
      }
      return;
    }

    const currentQuestion = dataset[index];
    // Randomize word bank options order (terombak)
    setShuffledOptions(shuffleOptions(currentQuestion.options));

    // Dynamic timer based on question complexity & pattern slots (Min 15s, Max 40s)
    const slotCount = currentQuestion.patterns ? currentQuestion.patterns.length : 3;
    let initialTime = 30;
    if (bonus) {
      initialTime = Math.min(25, Math.max(15, slotCount * 6 + 5));
    } else {
      // 2 slots -> 25s, 3 slots -> 35s, 4 slots -> 40s with slight scaling down for later levels (min 15s, max 40s)
      const baseTime = slotCount <= 2 ? 25 : slotCount === 3 ? 35 : 40;
      const reduction = Math.min(10, Math.floor(index / 3));
      initialTime = Math.min(40, Math.max(15, baseTime - reduction));
    }
    setMaxTimeForLevel(initialTime);
    setTimeLeft(initialTime);
    setSelectedWords([]);
    setFeedback({
      text: 'Sedia untuk menyusun jawapan mengikut pola qawalib.',
      type: 'idle'
    });
    setIsPaused(false);
  };

  // Level setup effect
  useEffect(() => {
    initLevel(currentLevelIndex, isBonusMode, currentSetId);
  }, [currentLevelIndex, isBonusMode, currentSetId]);

  // Dynamic Timer Countdown Loop
  useEffect(() => {
    if (isPaused || showLevelTransition || showVictoryModal || showHarakatBonus || showAudioSettings || showHelpModal) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });

      setStats(prev => ({
        ...prev,
        totalTimeSpent: prev.totalTimeSpent + 1
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, showLevelTransition, showVictoryModal, showHarakatBonus, showAudioSettings, showHelpModal, currentLevelIndex, isBonusMode, currentSetId]);

  // Handle Timeout
  const handleTimeOut = () => {
    soundEngine.playWrong();
    setCombo(1);
    setScore(prev => Math.max(0, prev - 100));

    setStats(prev => ({
      ...prev,
      timeouts: prev.timeouts + 1
    }));

    const correctStr = currentLevelData.correctAns.join(' ');
    setFeedback({
      text: 'MASA TAMAT! Skema Jawapan Sebenar:',
      type: 'timeout',
      correctSchema: correctStr
    });
  };

  // Select Word from Bank
  const handleSelectWord = (word: WordOption, originalIndex: number) => {
    triggerAudioStart();
    
    // Boundary check: prevent exceeding pattern slots
    if (selectedWords.length >= currentLevelData.patterns.length) {
      soundEngine.playWrong();
      setFeedback({
        text: 'Papan jawapan telah penuh! Semak atau hantar jawapan anda.',
        type: 'wrong'
      });
      return;
    }

    soundEngine.playTileClick(word.type === 'isim', word.type === 'fiil');
    const newSlot: SelectedWordSlot = {
      id: `${word.w}-${Date.now()}-${Math.random()}`,
      word,
      originalIndex
    };

    setSelectedWords(prev => [...prev, newSlot]);
    setFeedback({
      text: 'Perkataan dimasukkan ke dalam papan susunan.',
      type: 'idle'
    });
  };

  // Remove Word from Drop Zone
  const handleRemoveWord = (index: number) => {
    triggerAudioStart();
    soundEngine.playTileRemove();
    setSelectedWords(prev => prev.filter((_, i) => i !== index));
    setFeedback({
      text: 'Perkataan dikeluarkan.',
      type: 'idle'
    });
  };

  // Reset current selection
  const handleResetSelection = () => {
    triggerAudioStart();
    if (selectedWords.length === 0) return;
    soundEngine.playTileRemove();
    setSelectedWords([]);
    setFeedback({
      text: 'Pilihan telah dikosongkan.',
      type: 'idle'
    });
  };

  // Submit and Check Answer
  const handleSubmitAnswer = () => {
    triggerAudioStart();

    if (selectedWords.length === 0) {
      soundEngine.playWrong();
      setFeedback({
        text: 'Sila susun perkataan pada papan jawapan terlebih dahulu!',
        type: 'wrong'
      });
      return;
    }

    const userAns = selectedWords.map(s => s.word.w);
    const correctAns = currentLevelData.correctAns;

    const isCorrect =
      userAns.length === correctAns.length &&
      userAns.every((val, idx) => val === correctAns[idx]);

    if (isCorrect) {
      // Calculate scores
      const multiplier = isBonusMode ? 2 : 1;
      const timeBonus = Math.round(timeLeft * 20 * multiplier * (1 + (combo - 1) * 0.15));
      const basePoints = 1000 * multiplier;
      const totalEarned = basePoints + timeBonus;

      const newCombo = combo + 1;
      const newScore = score + totalEarned;

      setScore(newScore);
      setCombo(newCombo);
      setMaxCombo(prev => Math.max(prev, newCombo));
      setLastTimeBonus(timeBonus);

      setStats(prev => ({
        ...prev,
        score: newScore,
        combo: newCombo,
        maxCombo: Math.max(prev.maxCombo, newCombo),
        correctAnswers: prev.correctAnswers + 1
      }));

      soundEngine.playCorrect(newCombo);
      soundEngine.playDoorOpen();

      setFeedback({
        text: 'TAHNIAH! Susunan qawalib tepat dan padan.',
        type: 'correct'
      });

      setShowLevelTransition(true);
    } else {
      soundEngine.playWrong();
      setCombo(1);
      setScore(prev => Math.max(0, prev - 200));

      setStats(prev => ({
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1
      }));

      const correctStr = correctAns.join(' ');
      setFeedback({
        text: 'SUSUNAN TIDAK TEPAT! Skema Betul:',
        type: 'wrong',
        correctSchema: correctStr
      });
    }
  };

  // Advance to next level
  const advanceToNextLevel = () => {
    setShowLevelTransition(false);
    if (currentLevelIndex + 1 < totalLevels) {
      setCurrentLevelIndex(prev => prev + 1);
    } else {
      if (!isBonusMode) {
        setIsBonusOffer(true);
        setShowVictoryModal(true);
        soundEngine.playVictoryFanfare();
      } else {
        setIsBonusOffer(false);
        setShowVictoryModal(true);
        soundEngine.playVictoryFanfare();
      }
    }
  };

  // Award bonus points from Harakat Challenge
  const handleAwardBonus = (bonusPts: number) => {
    setScore(prev => prev + bonusPts);
    setStats(prev => ({
      ...prev,
      score: prev.score + bonusPts
    }));
  };

  // Start Bonus Game
  const handleStartBonusGame = () => {
    setIsBonusOffer(false);
    setShowVictoryModal(false);
    setIsBonusMode(true);
    setCurrentLevelIndex(0);
    soundEngine.setTheme('bonus_turbo');
    setAudioTheme('bonus_turbo');
    soundEngine.startBGM('bonus_turbo');
    initLevel(0, true, currentSetId);
  };

  // Restart from beginning with optional different question set
  const handleRestartGame = (newSetId?: number) => {
    const targetSet = newSetId || ((currentSetId % allQuestionSets.length) + 1);
    setCurrentSetId(targetSet);
    setIsBonusMode(false);
    setCurrentLevelIndex(0);
    setScore(0);
    setCombo(1);
    setMaxCombo(1);
    setShowVictoryModal(false);
    setShowLevelTransition(false);
    setStats({
      score: 0,
      combo: 1,
      maxCombo: 1,
      correctAnswers: 0,
      wrongAnswers: 0,
      timeouts: 0,
      totalTimeSpent: 0
    });
    soundEngine.setTheme('cyber_hijaz');
    setAudioTheme('cyber_hijaz');
    soundEngine.startBGM('cyber_hijaz');
    initLevel(0, false, targetSet);
  };

  // Switch Question Set directly
  const handleSwitchSet = (setId: number) => {
    if (setId === currentSetId) return;
    setCurrentSetId(setId);
    setCurrentLevelIndex(0);
    setSelectedWords([]);
    setFeedback({
      text: `Bertukar ke ${allQuestionSets.find(s => s.id === setId)?.badge || 'Set Baharu'}. Sedia untuk menyusun jawapan.`,
      type: 'idle'
    });
  };

  // Finish game without bonus
  const handleFinishGameWithoutBonus = () => {
    setIsBonusOffer(false);
  };

  // Audio Toggles
  const handleToggleMute = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
    if (!muted && !hasStartedAudio) {
      soundEngine.startBGM(audioTheme);
      setHasStartedAudio(true);
    }
  };

  const handleVolumeChange = (newVol: number) => {
    soundEngine.setVolume(newVol);
    setVolume(newVol);
    if (!hasStartedAudio) {
      soundEngine.startBGM(audioTheme);
      setHasStartedAudio(true);
    }
  };

  const handleSelectAudioTheme = (theme: MusicTheme) => {
    soundEngine.setTheme(theme);
    setAudioTheme(theme);
    if (!soundEngine.getIsPlaying()) {
      soundEngine.startBGM(theme);
    }
  };

  const handleSelectAtmosphere = (mode: AtmosphereMode) => {
    setAtmosphereMode(mode);
  };

  const handleTogglePause = () => {
    triggerAudioStart();
    setIsPaused(prev => {
      const next = !prev;
      if (next) {
        soundEngine.pauseBGM();
      } else {
        soundEngine.startBGM(audioTheme);
      }
      return next;
    });
  };

  const totalQuestionsAnswered = stats.correctAnswers + stats.wrongAnswers + stats.timeouts;
  const currentAccuracy = totalQuestionsAnswered > 0 ? Math.round((stats.correctAnswers / totalQuestionsAnswered) * 100) : 100;

  return (
    <div
      onClick={triggerAudioStart}
      className="min-h-screen bg-[#030712] text-slate-100 flex flex-col items-center justify-center p-2.5 sm:p-4 md:p-6 relative selection:bg-amber-400 selection:text-black font-sans overflow-x-hidden"
    >
      {/* Dynamic Animated Background Atmosphere Canvas */}
      <BackgroundAtmosphere mode={atmosphereMode} combo={combo} />

      {/* Main Game Shell Container (Max Width 880px) */}
      <main className="w-full max-w-4xl relative z-10 flex flex-col gap-2 sm:gap-3 md:gap-4 my-auto">
        
        {/* HUD Top Header (Level info, Timer, Combo, Audio, Score & Hidden Menu Trigger) */}
        <HudHeader
          currentLevelData={currentLevelData}
          currentLevelIndex={currentLevelIndex}
          totalLevels={totalLevels}
          isBonusMode={isBonusMode}
          score={score}
          combo={combo}
          timeLeft={timeLeft}
          maxTime={maxTimeForLevel}
          isPaused={isPaused}
          isMuted={isMuted}
          currentTheme={audioTheme}
          onTogglePause={handleTogglePause}
          onToggleMute={handleToggleMute}
          onOpenNavMenu={() => setShowNavMenu(true)}
        />

        {/* Question Set Switcher Pill Strip */}
        <div className="w-full bg-slate-950/70 border border-slate-800/80 rounded-2xl p-1.5 flex items-center justify-between gap-1.5 sm:gap-2 px-2.5 sm:px-3">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-300 font-bold truncate">
            <Shuffle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="hidden xs:inline">Pilihan Set:</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap justify-end">
            {allQuestionSets.map((s) => {
              const isActive = s.id === currentSetId;
              return (
                <button
                  key={s.id}
                  onClick={() => handleSwitchSet(s.id)}
                  className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl text-[10px] sm:text-[11px] font-black transition border cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-sm'
                      : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-850'
                  }`}
                >
                  {s.badge}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pola Qawalib Nahu Blueprint (Compact & Contrast-Differentiated) */}
        <PatternBlueprint
          patterns={currentLevelData.patterns}
          levelIndex={currentLevelIndex}
          totalLevels={totalLevels}
          isMonochrome={activeSetMeta.isMonochrome}
        />

        {/* Papan Susunan Jawapan (Interactive Drop Zone / Answer Slots) */}
        <DropZone
          patterns={currentLevelData.patterns}
          selectedWords={selectedWords}
          onRemoveWord={handleRemoveWord}
          feedbackType={feedback.type}
          disabled={isPaused}
          isMonochrome={activeSetMeta.isMonochrome}
        />

        {/* Bank Mufradat (Word Option Tiles - Distinct Color Palette) */}
        <WordBank
          options={shuffledOptions}
          selectedOriginalIndices={selectedOriginalIndices}
          onSelectWord={handleSelectWord}
          disabled={isPaused}
          isMonochrome={activeSetMeta.isMonochrome}
        />

        {/* Action Controls & Interactive Dynamic Feedback Display */}
        <div className="w-full flex flex-col gap-2 sm:gap-3">
          {/* Action Buttons: Reset & Hantar Jawapan */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <button
              onClick={handleResetSelection}
              disabled={selectedWords.length === 0 || isPaused}
              className="py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl sm:rounded-2xl border-2 border-slate-700 bg-slate-900/90 hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none text-slate-200 font-bold text-[11px] sm:text-xs md:text-sm tracking-wide transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 shrink-0" />
              <span className="truncate">Semula</span>
            </button>

            <button
              onClick={handleSubmitAnswer}
              disabled={selectedWords.length === 0 || isPaused}
              className="py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 disabled:opacity-40 disabled:pointer-events-none text-slate-950 font-black text-[11px] sm:text-xs md:text-sm tracking-wide transition-all shadow-lg shadow-amber-500/25 active:scale-98 flex items-center justify-center gap-1.5 sm:gap-2 border-2 border-amber-300 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 fill-slate-950 shrink-0" />
              <span className="truncate">Hantar</span>
            </button>
          </div>

          {/* Kolum Penerangan Nahu & Analisis Tatabahasa (Grammar Explanation Card) */}
          {feedback.type !== 'idle' && (
            <div
              className={`w-full p-3 sm:p-5 rounded-2xl sm:rounded-3xl border-2 flex flex-col gap-2.5 sm:gap-3.5 animate-in fade-in slide-in-from-bottom-3 duration-300 shadow-2xl backdrop-blur-xl ${
                feedback.type === 'correct'
                  ? 'bg-gradient-to-b from-emerald-950/95 via-[#062c19]/95 to-[#02170d]/95 border-emerald-400 text-emerald-100 shadow-[0_0_30px_rgba(16,185,129,0.3)]'
                  : feedback.type === 'wrong'
                  ? 'bg-gradient-to-b from-rose-950/95 via-[#2c0611]/95 to-[#170208]/95 border-rose-400 text-rose-100 shadow-[0_0_30px_rgba(244,63,94,0.3)]'
                  : 'bg-gradient-to-b from-amber-950/95 via-[#2c1a06]/95 to-[#170e02]/95 border-amber-400 text-amber-100 shadow-[0_0_30px_rgba(245,158,11,0.3)]'
              }`}
            >
              {/* Status Header */}
              <div className="flex items-center justify-between gap-2 border-b border-slate-700/50 pb-2">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="p-1 sm:p-1.5 rounded-lg sm:rounded-xl bg-slate-950/60 border border-slate-700/60">
                    {feedback.type === 'correct' && <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />}
                    {feedback.type === 'wrong' && <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400" />}
                    {feedback.type === 'timeout' && <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />}
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs md:text-sm font-black uppercase tracking-wider block">
                      {feedback.type === 'correct'
                        ? '✨ Tahniah! Jawapan Tepat & Padan'
                        : feedback.type === 'wrong'
                        ? '❌ Susunan Kurang Tepat'
                        : '⏰ Masa Tamat'}
                    </span>
                    <span className="text-[10px] sm:text-[11px] opacity-80 font-medium">
                      {feedback.text}
                    </span>
                  </div>
                </div>

                <span className={`text-[9px] sm:text-[10px] uppercase font-mono font-black px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border ${
                  feedback.type === 'correct'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50'
                    : feedback.type === 'wrong'
                    ? 'bg-rose-500/20 text-rose-300 border-rose-400/50'
                    : 'bg-amber-500/20 text-amber-300 border-amber-400/50'
                }`}>
                  {feedback.type === 'correct' ? 'Skema Tepat' : 'Semakan Nahu'}
                </span>
              </div>

              {/* Ayat Lengkap Sebenar - Scaled Arabic Calligraphy */}
              <div className="bg-slate-950/90 border border-slate-800 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 text-center shadow-inner">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-0.5 sm:mb-1">
                  Susunan Ayat Lengkap (Skema Sebenar):
                </span>
                <p className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-arabic font-black text-amber-300 leading-relaxed drop-shadow-md py-0.5 sm:py-1" dir="rtl">
                  {currentLevelData.correctAns.join(' ')}
                </p>
                <div className="text-[11px] sm:text-xs md:text-sm text-amber-200/90 font-medium italic mt-1.5 sm:mt-2 border-t border-slate-800/80 pt-1.5 sm:pt-2 text-center">
                  📖 <strong className="text-amber-300 not-italic">Makna Mufidah (Maksud Lengkap):</strong> &ldquo;{getMaknaMufidah(currentLevelData)}&rdquo;
                </div>
              </div>

              {/* Penerangan & Analisis Konsep I'rab & Baris (I'rab Explanation) */}
              <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-black uppercase text-amber-400">
                  <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                  <span>Konsep I&apos;rab &amp; Kedudukan Tatabahasa:</span>
                </div>
                {currentLevelData.explanation && (
                  <p className="text-[11px] sm:text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
                    {currentLevelData.explanation}
                  </p>
                )}

                {/* Detailed I'rab and Harakat Analysis Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 mt-1 pt-1.5 sm:pt-2 border-t border-slate-800/60">
                  {getSentenceIrabAnalysis(currentLevelData).map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-slate-900/90 border border-slate-700/80 flex flex-col gap-0.5 sm:gap-1 text-left"
                    >
                      <div className="flex items-center justify-between gap-2" dir="rtl">
                        <span className="text-base sm:text-xl font-arabic font-bold text-teal-300">{detail.word}</span>
                        <span className="text-[10px] sm:text-[11px] font-bold text-amber-400 px-1.5 sm:px-2 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/30" dir="ltr">
                          {detail.role}
                        </span>
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-300 font-medium leading-snug">
                        <strong className="text-slate-100">Baris / I&apos;rab:</strong> {detail.irabStatus} ({detail.harakat})
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-slate-400 leading-tight">
                        {detail.reason}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soalan Bonus Baris & Action Buttons */}
              {feedback.type !== 'correct' ? (
                <div className="flex flex-col gap-2 pt-1">
                  <button
                    onClick={() => setShowHarakatBonus(true)}
                    className="w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-[11px] sm:text-xs md:text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg shadow-teal-500/25 active:scale-98 transition cursor-pointer border-2 border-emerald-200"
                  >
                    <Target className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>🎯 Bonus Baris (+150 PTS)</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleResetSelection}
                      className="py-2 sm:py-2.5 px-2.5 sm:px-3 rounded-lg sm:rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                      <span>Semula</span>
                    </button>

                    <button
                      onClick={advanceToNextLevel}
                      className="py-2 sm:py-2.5 px-2.5 sm:px-3 rounded-lg sm:rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[11px] sm:text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 transition active:scale-95 shadow-md shadow-amber-500/20 cursor-pointer"
                    >
                      <span>Langkau</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2 pt-1">
                  <button
                    onClick={() => setShowHarakatBonus(true)}
                    className="w-full py-2.5 px-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-[11px] sm:text-xs md:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-teal-500/20 active:scale-98 transition cursor-pointer border-2 border-emerald-200"
                  >
                    <Target className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>🎯 Bonus Baris (+150 PTS)</span>
                  </button>

                  <button
                    onClick={() => setShowLevelTransition(true)}
                    className="w-full py-3 px-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 active:scale-98 transition cursor-pointer"
                  >
                    <span>Seterusnya</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

      </main>

      {/* Leaderboard Modal */}
      <LeaderboardModal
        isOpen={showLeaderboardModal}
        onClose={() => setShowLeaderboardModal(false)}
        currentScore={score}
        currentAccuracy={currentAccuracy}
        currentMaxCombo={maxCombo}
        currentMode={isBonusMode ? 'bonus' : 'main'}
      />

      {/* Level Transition Modal */}
      <LevelTransitionModal
        isOpen={showLevelTransition}
        isBonusMode={isBonusMode}
        levelData={currentLevelData}
        levelIndex={currentLevelIndex}
        totalLevels={totalLevels}
        score={score}
        timeBonus={lastTimeBonus}
        combo={combo}
        onProceedNext={advanceToNextLevel}
        onOpenBonusQuiz={() => {
          setShowLevelTransition(false);
          setShowHarakatBonus(true);
        }}
      />

      {/* Victory & Summary Modal */}
      <VictoryModal
        isOpen={showVictoryModal}
        isBonusOffer={isBonusOffer}
        isBonusModeCompleted={isBonusMode}
        stats={stats}
        currentSetId={currentSetId}
        onStartBonusGame={handleStartBonusGame}
        onRestartGame={handleRestartGame}
        onFinishGame={handleFinishGameWithoutBonus}
        onOpenLeaderboard={() => {
          setShowVictoryModal(false);
          setShowLeaderboardModal(true);
        }}
      />

      {/* Unified Hidden Navigation Drawer (Bonus, Juara, Muzik, Panduan, Kawalan) */}
      <HiddenNavMenu
        isOpen={showNavMenu}
        onClose={() => setShowNavMenu(false)}
        onOpenBonusQuiz={() => setShowHarakatBonus(true)}
        onOpenLeaderboard={() => setShowLeaderboardModal(true)}
        onOpenAudioSettings={() => setShowAudioSettings(true)}
        onOpenHelp={() => setShowHelpModal(true)}
        onTogglePause={handleTogglePause}
        onToggleMute={handleToggleMute}
        isPaused={isPaused}
        isMuted={isMuted}
        currentTheme={audioTheme}
        atmosphereMode={atmosphereMode}
      />

      {/* Audio & Atmosphere Customization Settings Modal */}
      <AudioSettingsModal
        isOpen={showAudioSettings}
        currentTheme={audioTheme}
        atmosphereMode={atmosphereMode}
        volume={volume}
        isMuted={isMuted}
        onClose={() => setShowAudioSettings(false)}
        onSelectTheme={handleSelectAudioTheme}
        onSelectAtmosphere={handleSelectAtmosphere}
        onVolumeChange={handleVolumeChange}
        onToggleMute={handleToggleMute}
      />

      {/* Syllabus Grammar Guide Modal */}
      <HelpModal
        isOpen={showHelpModal}
        onClose={() => setShowHelpModal(false)}
      />

      {/* Harakat & Baris Bonus Challenge Modal (When Answer is Wrong or Requested) */}
      <HarakatBonusModal
        isOpen={showHarakatBonus}
        question={currentLevelData}
        bonusBank={bonusGameData}
        isFromMistake={feedback.type === 'wrong' || feedback.type === 'timeout'}
        onClose={() => setShowHarakatBonus(false)}
        onAwardBonus={handleAwardBonus}
      />

      {/* Screen Pause Overlay with Drifting Moving Graphics (Non-blocking so explanations remain visible) */}
      <PauseGraphicsOverlay
        isPaused={isPaused}
        onResume={handleTogglePause}
      />
    </div>
  );
}
