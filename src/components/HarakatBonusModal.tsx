import React, { useState, useEffect, useMemo } from 'react';
import { LevelQuestion, IrabWordDetail } from '../types';
import { getSentenceIrabAnalysis, getMaknaMufidah, stripEndingVowel } from '../utils/irabHelper';
import { bonusGameData as defaultBonusBank } from '../data/syllabusData';
import { soundEngine } from '../audio/audioEngine';
import {
  Trophy,
  CheckCircle2,
  AlertCircle,
  X,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  BookOpen,
  Layers,
  Sparkles,
  ListFilter,
  CheckCheck
} from 'lucide-react';

interface HarakatBonusModalProps {
  isOpen: boolean;
  question: LevelQuestion;
  bonusBank?: LevelQuestion[];
  isFromMistake?: boolean;
  onClose: () => void;
  onAwardBonus: (points: number) => void;
}

interface WordAnswerState {
  selectedHarakat: string;
  isCorrect: boolean;
  pointsAwarded: boolean;
}

export const HarakatBonusModal: React.FC<HarakatBonusModalProps> = ({
  isOpen,
  question,
  bonusBank = defaultBonusBank,
  isFromMistake = false,
  onClose,
  onAwardBonus,
}) => {
  // Mode: 'current' (soalan semasa/salah) vs 'bank' (30 soalan bonus pilihan)
  const [activeTab, setActiveTab] = useState<'current' | 'bank'>(isFromMistake ? 'current' : 'bank');
  
  // Selected index in the 30-bonus-questions bank (0 to 29)
  const [bankQuestionIndex, setBankQuestionIndex] = useState<number>(0);
  
  // Active Word Index in the current sentence (0 to irabList.length - 1)
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  
  // Track completed words across questions: Key format: `q_${qKey}_w_${wordIndex}`
  const [completedAnswers, setCompletedAnswers] = useState<Record<string, WordAnswerState>>({});

  // Show 30 questions drawer / selector
  const [showQuestionGrid, setShowQuestionGrid] = useState<boolean>(false);

  // Current active question based on tab
  const activeQuestion: LevelQuestion = useMemo(() => {
    if (activeTab === 'current') {
      return question;
    }
    return bonusBank[bankQuestionIndex] || bonusBank[0] || question;
  }, [activeTab, question, bonusBank, bankQuestionIndex]);

  const activeQuestionKey = activeTab === 'current' ? `cur_${question.unitName}` : `bank_${bankQuestionIndex}`;
  const irabList = useMemo(() => getSentenceIrabAnalysis(activeQuestion), [activeQuestion]);

  // Current active word
  const targetWord: IrabWordDetail = irabList[currentWordIndex] || irabList[0];
  const totalWords = irabList.length;

  const currentAnswerKey = `${activeQuestionKey}_w_${currentWordIndex}`;
  const currentAnswerState = completedAnswers[currentAnswerKey];

  const selectedHarakat = currentAnswerState?.selectedHarakat || null;
  const hasSubmitted = !!currentAnswerState;
  const isCurrentCorrect = currentAnswerState?.isCorrect || false;

  // Calculate statistics across the 30 bonus questions
  const totalBonusQuestions = bonusBank.length;
  
  // Count fully completed questions
  const fullyCompletedQuestionsCount = useMemo(() => {
    return bonusBank.filter((q, qIdx) => {
      const qKey = `bank_${qIdx}`;
      const qIrab = getSentenceIrabAnalysis(q);
      return qIrab.every((_, wIdx) => completedAnswers[`${qKey}_w_${wIdx}`]?.isCorrect);
    }).length;
  }, [bonusBank, completedAnswers]);

  // Count total bonus points earned so far in this modal session
  const totalBonusPointsEarned = useMemo(() => {
    return (Object.values(completedAnswers) as WordAnswerState[]).filter(ans => ans.pointsAwarded && ans.isCorrect).length * 150;
  }, [completedAnswers]);

  // Count current question completed words
  const currentQuestionCompletedWords = irabList.filter(
    (_, wIdx) => completedAnswers[`${activeQuestionKey}_w_${wIdx}`]?.isCorrect
  ).length;

  const isCurrentQuestionAllCompleted = currentQuestionCompletedWords === totalWords && totalWords > 0;

  // Reset tab if question changes
  useEffect(() => {
    if (isOpen) {
      if (isFromMistake) {
        setActiveTab('current');
      }
      setCurrentWordIndex(0);
    }
  }, [isOpen, isFromMistake, question]);

  if (!isOpen || !targetWord) return null;

  const bareWord = stripEndingVowel(targetWord.word);

  // 4 Standard Arabic Harakat Choices
  const harakatOptions = [
    {
      name: 'Dhommah',
      symbol: 'ُ',
      label: 'Dhommah (Baris Depan)',
      rule: 'Untuk Marfu\' (cth: Fa\'il, Mubtada\', Khabar)',
    },
    {
      name: 'Fathah',
      symbol: 'َ',
      label: 'Fathah (Baris Atas)',
      rule: 'Untuk Mansub (cth: Maf\'ul Bih, Zhorof, Isim Inna)',
    },
    {
      name: 'Kasrah',
      symbol: 'ِ',
      label: 'Kasrah (Baris Bawah)',
      rule: 'Untuk Majrur (cth: Selepas Harf Jar, Mudhaf Ilaih)',
    },
    {
      name: 'Sukun',
      symbol: 'ْ',
      label: 'Sukun (Mati/Tanda Sukun)',
      rule: 'Untuk Mabni / Majzum (cth: Fi\'il Madhi/Amr/Harf)',
    },
  ];

  // Helper function to match selected symbol with answer
  const isMatchHarakat = (userSymbol: string, correctAnswer: string) => {
    const normAns = correctAnswer.toLowerCase();

    if (userSymbol === 'ُ') {
      return normAns.includes('dhomm') || normAns.includes('depan') || normAns.includes('marfu') || normAns.includes('ُ');
    }
    if (userSymbol === 'َ') {
      return normAns.includes('fath') || normAns.includes('atas') || normAns.includes('mansub') || normAns.includes('َ');
    }
    if (userSymbol === 'ِ') {
      return normAns.includes('kasr') || normAns.includes('bawah') || normAns.includes('majrur') || normAns.includes('ِ');
    }
    if (userSymbol === 'ْ') {
      return normAns.includes('sukun') || normAns.includes('mati') || normAns.includes('mabni') || normAns.includes('majzum') || normAns.includes('ْ');
    }
    return false;
  };

  const handleSelectOption = (symbol: string) => {
    // If already correctly answered, ignore re-selection
    if (hasSubmitted && isCurrentCorrect) return;

    const correct = isMatchHarakat(symbol, targetWord.harakat);

    if (correct) {
      soundEngine.playCorrect();
      if (!currentAnswerState?.pointsAwarded) {
        onAwardBonus(150);
      }
    } else {
      soundEngine.playWrong();
    }

    setCompletedAnswers(prev => ({
      ...prev,
      [currentAnswerKey]: {
        selectedHarakat: symbol,
        isCorrect: correct,
        pointsAwarded: correct || prev[currentAnswerKey]?.pointsAwarded || false,
      }
    }));
  };

  const handleResetCurrentWord = () => {
    setCompletedAnswers(prev => {
      const next = { ...prev };
      delete next[currentAnswerKey];
      return next;
    });
  };

  const handleGoNextWord = () => {
    if (currentWordIndex + 1 < totalWords) {
      setCurrentWordIndex(prev => prev + 1);
    }
  };

  const handleGoPrevWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(prev => prev - 1);
    }
  };

  const handleSelectBankQuestion = (index: number) => {
    setActiveTab('bank');
    setBankQuestionIndex(index);
    setCurrentWordIndex(0);
    setShowQuestionGrid(false);
  };

  const handlePrevBankQuestion = () => {
    if (bankQuestionIndex > 0) {
      setBankQuestionIndex(prev => prev - 1);
      setCurrentWordIndex(0);
    }
  };

  const handleNextBankQuestion = () => {
    if (bankQuestionIndex + 1 < totalBonusQuestions) {
      setBankQuestionIndex(prev => prev + 1);
      setCurrentWordIndex(0);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-gradient-to-b from-slate-900 via-[#0a1628] to-[#040a14] border-2 border-amber-400 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl shadow-amber-950 flex flex-col gap-2.5 sm:gap-3 relative overflow-hidden max-h-[95vh] overflow-y-auto">
        <div className="absolute top-0 right-0 w-52 h-52 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header with Badge & Live Bonus Counter */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-300 shadow-sm shrink-0">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-300 truncate">
                  Makmal Bonus Baris &amp; I&apos;rab (30 Soalan)
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold bg-amber-400 text-slate-950 px-1.5 sm:px-2 py-0.5 rounded font-mono shrink-0">
                  +150 PTS / Kalimah
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">
                {isFromMistake && activeTab === 'current'
                  ? '🎯 Tebus markah bagi soalan yang salah & terokai 30 soalan bonus!'
                  : `🏆 ${fullyCompletedQuestionsCount}/${totalBonusQuestions} Soalan Bonus Selesai | +${totalBonusPointsEarned} PTS Terkumpul`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer shrink-0 border border-slate-700"
            title="Tutup Modal"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Mode & Question Selector Tabs Strip */}
        <div className="flex items-center justify-between gap-1.5 bg-slate-950/80 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl border border-slate-800/80 flex-wrap">
          <div className="flex items-center gap-1 flex-wrap">
            <button
              onClick={() => {
                setActiveTab('current');
                setCurrentWordIndex(0);
              }}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-black transition cursor-pointer flex items-center gap-1 sm:gap-1.5 ${
                activeTab === 'current'
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Semasa {isFromMistake ? '(Tebus)' : ''}</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('bank');
                setCurrentWordIndex(0);
              }}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-black transition cursor-pointer flex items-center gap-1 sm:gap-1.5 ${
                activeTab === 'bank'
                  ? 'bg-teal-400 text-slate-950 shadow-md shadow-teal-400/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>30 Bank Soalan</span>
            </button>
          </div>

          {activeTab === 'bank' && (
            <button
              onClick={() => setShowQuestionGrid(prev => !prev)}
              className="px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-teal-300 text-[10px] sm:text-[11px] font-bold flex items-center gap-1 transition cursor-pointer"
            >
              <ListFilter className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Pilih #{bankQuestionIndex + 1}/30</span>
            </button>
          )}
        </div>

        {/* 30 Questions Grid Selector (Collapsible Drawer) */}
        {activeTab === 'bank' && showQuestionGrid && (
          <div className="bg-slate-950 border border-teal-500/40 p-2.5 rounded-2xl animate-in slide-in-from-top-2 duration-200 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] sm:text-xs font-black text-teal-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Pilih Dari 30 Soalan Bonus:
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {fullyCompletedQuestionsCount}/30 Selesai
              </span>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-1.5 max-h-48 overflow-y-auto p-1">
              {bonusBank.map((q, qIdx) => {
                const qKey = `bank_${qIdx}`;
                const qIrab = getSentenceIrabAnalysis(q);
                const isQCompleted = qIrab.every((_, wIdx) => completedAnswers[`${qKey}_w_${wIdx}`]?.isCorrect);
                const isQActive = bankQuestionIndex === qIdx;

                return (
                  <button
                    key={qIdx}
                    onClick={() => handleSelectBankQuestion(qIdx)}
                    className={`py-1.5 px-1 rounded-xl text-xs font-black transition cursor-pointer flex flex-col items-center justify-center border ${
                      isQActive
                        ? 'bg-amber-400 text-slate-950 border-amber-300 scale-105 shadow-md shadow-amber-400/40'
                        : isQCompleted
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/60'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-850 hover:border-slate-700'
                    }`}
                    title={q.unitName}
                  >
                    <span>#{qIdx + 1}</span>
                    {isQCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-400 mt-0.5" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Active Question Info Strip & Navigation */}
        <div className="bg-slate-950/90 border border-slate-800 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-amber-400">
              {activeTab === 'current'
                ? `Soalan Semasa (${activeQuestion.unitName})`
                : `Soalan Bonus ${bankQuestionIndex + 1} dari 30`}
            </span>
            <h3 className="text-xs sm:text-sm font-black text-slate-200 truncate max-w-[200px] sm:max-w-none">
              {activeQuestion.unitName}
            </h3>
          </div>

          {activeTab === 'bank' && (
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrevBankQuestion}
                disabled={bankQuestionIndex === 0}
                className="p-1 sm:p-1.5 rounded-lg sm:rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none text-slate-200 border border-slate-700 transition cursor-pointer"
                title="Soalan Bonus Sebelum"
              >
                <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
              <span className="text-[11px] sm:text-xs font-mono font-bold px-1.5 py-0.5 text-slate-300">
                {bankQuestionIndex + 1}/{totalBonusQuestions}
              </span>
              <button
                onClick={handleNextBankQuestion}
                disabled={bankQuestionIndex + 1 >= totalBonusQuestions}
                className="p-1 sm:p-1.5 rounded-lg sm:rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none text-slate-200 border border-slate-700 transition cursor-pointer"
                title="Soalan Bonus Seterusnya"
              >
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Multi-Word Selector Carousel (Concealing Unanswered Endings) */}
        <div className="bg-slate-950/80 border border-slate-800 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl flex flex-col gap-1 sm:gap-1.5">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold px-1 text-slate-300">
            <span className="flex items-center gap-1">
              <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
              Pilih Kalimah:
            </span>
            <span className="text-amber-400 font-mono">
              Kalimah {currentWordIndex + 1} dari {totalWords} ({currentQuestionCompletedWords}/{totalWords} Betul)
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1" dir="rtl">
            {irabList.map((item, idx) => {
              const status = completedAnswers[`${activeQuestionKey}_w_${idx}`];
              const isSelected = idx === currentWordIndex;
              const isDone = status?.isCorrect;
              // Conceal ending harakat to prevent answer leakage
              const pillDisplayText = isDone ? item.word : `${stripEndingVowel(item.word)}ـ؟`;

              return (
                <button
                  key={idx}
                  onClick={() => setCurrentWordIndex(idx)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border font-arabic font-bold text-sm sm:text-base transition-all flex items-center gap-1 shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md shadow-amber-400/30 scale-105'
                      : isDone
                      ? 'bg-emerald-950/70 text-emerald-300 border-emerald-500/50'
                      : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <span>{pillDisplayText}</span>
                  {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Sentence Context (With Real-Time Revealed Baris) */}
        <div className="bg-slate-950/90 border border-amber-400/50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 text-center shadow-inner flex flex-col gap-1.5 sm:gap-2">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-300 flex-wrap">
            <span className="shrink-0 text-slate-400 text-[10px] sm:text-xs">Konteks Ayat:</span>
            <div className="text-lg sm:text-2xl font-arabic font-bold flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center" dir="rtl">
              {irabList.map((item, wIdx) => {
                const isWordDone = completedAnswers[`${activeQuestionKey}_w_${wIdx}`]?.isCorrect;
                const isWordActive = wIdx === currentWordIndex;

                if (isWordDone) {
                  return (
                    <span key={wIdx} className="text-emerald-300 bg-emerald-950/40 px-1.5 sm:px-2 py-0.5 rounded-lg border border-emerald-500/30 shadow-sm">
                      {item.word}
                    </span>
                  );
                }

                if (isWordActive) {
                  return (
                    <span key={wIdx} className="text-amber-300 bg-amber-950/60 px-2 sm:px-2.5 py-0.5 rounded-lg border-2 border-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.3)]">
                      {bareWord}
                      <span className="text-amber-400 font-mono ml-0.5 font-bold">[{selectedHarakat || '؟'}]</span>
                    </span>
                  );
                }

                return (
                  <span key={wIdx} className="text-slate-500">
                    {stripEndingVowel(item.word)}ـ؟
                  </span>
                );
              })}
            </div>
          </div>

          <div className="py-1.5 sm:py-2 px-2.5 sm:px-3 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between gap-2 flex-wrap">
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-black tracking-wider block">
                Kalimah Diuji:
              </span>
              <span className="text-base sm:text-xl font-arabic font-black text-amber-300" dir="rtl">
                {bareWord}ـ؟
              </span>
            </div>

            <div className="text-right">
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold block">Kedudukan Nahu:</span>
              <span className="text-[11px] sm:text-xs font-black text-teal-300 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-500/40">
                {targetWord.role}
              </span>
            </div>
          </div>
        </div>

        {/* 4 Harakat Options Buttons */}
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5">
          {harakatOptions.map(opt => {
            const isSelected = selectedHarakat === opt.symbol;
            return (
              <button
                key={opt.symbol}
                onClick={() => handleSelectOption(opt.symbol)}
                className={`p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border-2 text-left flex flex-col gap-0.5 sm:gap-1 transition-all active:scale-98 cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? isCurrentCorrect
                      ? 'bg-emerald-950/90 border-emerald-400 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                      : 'bg-rose-950/90 border-rose-400 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-200 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-xl sm:text-3xl font-arabic font-black text-amber-300 leading-none">
                      ـ{opt.symbol}
                    </span>
                    <div>
                      <span className="text-[11px] sm:text-xs font-black block">{opt.name}</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold">{opt.label}</span>
                    </div>
                  </div>

                  {isSelected && (
                    <div>
                      {isCurrentCorrect ? (
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                      ) : (
                        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
                      )}
                    </div>
                  )}
                </div>

                <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight border-t border-slate-800/80 pt-1">
                  {opt.rule}
                </p>
              </button>
            );
          })}
        </div>

        {/* Feedback Section After Selection */}
        {hasSubmitted && (
          <div
            className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border flex flex-col gap-1 sm:gap-1.5 animate-in fade-in slide-in-from-bottom-2 duration-200 ${
              isCurrentCorrect
                ? 'bg-emerald-950/80 border-emerald-500/70 text-emerald-200'
                : 'bg-rose-950/80 border-rose-500/70 text-rose-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 sm:gap-2">
                {isCurrentCorrect ? (
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 shrink-0" />
                )}
                <div>
                  <h4 className="text-[11px] sm:text-sm font-black">
                    {isCurrentCorrect ? 'Tahniah! Jawapan Tepat (+150 PTS)' : 'Kurang Tepat! Fahami Kaedah Nahu'}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] opacity-90">
                    Status I&apos;rab: <strong>{targetWord.irabStatus}</strong> | Baris Sebenar: <strong>{targetWord.harakat}</strong>
                  </p>
                </div>
              </div>

              {!isCurrentCorrect && (
                <button
                  onClick={handleResetCurrentWord}
                  className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-rose-900/80 hover:bg-rose-800 text-rose-200 text-[9px] sm:text-[10px] font-black flex items-center gap-1 border border-rose-400/40 transition cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  Cuba Lagi
                </button>
              )}
            </div>

            <p className="text-[10px] sm:text-xs bg-black/40 p-2 rounded-xl text-slate-200 font-medium leading-relaxed">
              💡 <strong>Huraian Nahu:</strong> {targetWord.reason}
            </p>
          </div>
        )}

        {/* Makna Mufidah (Accurate Translation of the Complete Sentence) */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 text-[11px] sm:text-xs text-slate-300">
          <span className="font-bold text-teal-400 block mb-0.5">📖 Makna Mufidah (Terjemahan Sempurna):</span>
          <p className="text-slate-200 italic font-medium leading-relaxed">
            &ldquo;{getMaknaMufidah(activeQuestion)}&rdquo;
          </p>
        </div>

        {/* Bottom Actions: Kalimah Navigation & Soalan Navigation */}
        <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-800 flex-wrap">
          <button
            onClick={handleGoPrevWord}
            disabled={currentWordIndex === 0}
            className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none text-slate-200 font-bold text-[11px] sm:text-xs flex items-center gap-1 sm:gap-1.5 border border-slate-700 transition cursor-pointer"
          >
            <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Kalimah Sebelum</span>
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {activeTab === 'bank' && isCurrentQuestionAllCompleted && bankQuestionIndex + 1 < totalBonusQuestions ? (
              <button
                onClick={handleNextBankQuestion}
                className="py-1.5 sm:py-2 px-3 sm:px-3.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 font-black text-[11px] sm:text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-teal-500/25 transition cursor-pointer active:scale-95"
              >
                <span>Bonus #{bankQuestionIndex + 2}</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
            ) : null}

            {currentWordIndex + 1 < totalWords ? (
              <button
                onClick={handleGoNextWord}
                className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 font-bold text-[11px] sm:text-xs flex items-center gap-1 sm:gap-1.5 border border-teal-400/50 transition cursor-pointer"
              >
                <span>Kalimah Seterusnya</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="py-1.5 sm:py-2 px-3.5 sm:px-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-[11px] sm:text-xs uppercase tracking-wider flex items-center gap-1 sm:gap-1.5 shadow-md shadow-amber-500/20 transition cursor-pointer active:scale-95"
              >
                <CheckCheck className="w-3.5 h-3.5" />
                <span>Selesai &amp; Simpan</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
