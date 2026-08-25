import React from 'react';
import { X, BookOpen, Sparkles } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-gradient-to-b from-slate-900 via-[#0c182a] to-[#040a14] border-2 border-teal-500/80 rounded-3xl p-5 shadow-2xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-teal-500/20 border border-teal-400/50 flex items-center justify-center text-teal-300 shadow">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-100 font-sans">Panduan Nahu & Qawalib T1</h3>
              <p className="text-xs text-slate-400">Prinsip Isim, Fi'il, Harf & Pola Ayat KSSM</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Categories explanation */}
        <div className="flex flex-col gap-3 text-xs">
          {/* Isim */}
          <div className="p-3.5 rounded-2xl bg-teal-950/60 border border-teal-500/50 flex flex-col gap-1.5 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf]" />
              <span className="font-black text-teal-300 text-sm">اسم (Isim - Kata Nama)</span>
            </div>
            <p className="text-slate-200 leading-relaxed">
              Kata yang merujuk kepada manusia, benda, tempat, sifat atau masa (contoh: <span className="font-arabic font-black text-base text-teal-200" dir="rtl">البَيْتُ, الطَّالِبُ, المُعَلِّمُ, جَدِيدٌ, كَبِيرَةٌ</span>). Ciri utama: Boleh menerima Alif Lam (الـ) atau Tanwin.
            </p>
          </div>

          {/* Fi'il */}
          <div className="p-3.5 rounded-2xl bg-rose-950/60 border border-rose-500/50 flex flex-col gap-1.5 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-rose-400 shadow-[0_0_8px_#fb7185]" />
              <span className="font-black text-rose-300 text-sm">فعل (Fi'il - Kata Kerja)</span>
            </div>
            <p className="text-slate-200 leading-relaxed">
              Kata yang menunjukkan perbuatan terikat dengan masa lampau (Madhi: <span className="font-arabic font-black text-base text-rose-200" dir="rtl">قَرَأَ, ذَهَبَ, دَرَسَ</span>) atau sedang/akan berlaku (Mudhari': <span className="font-arabic font-black text-base text-rose-200" dir="rtl">يَقْرَأُ, يَكْتُبُ, يَذْهَبُ</span>).
            </p>
          </div>

          {/* Harf */}
          <div className="p-3.5 rounded-2xl bg-amber-950/60 border border-amber-500/50 flex flex-col gap-1.5 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
              <span className="font-black text-amber-300 text-sm">حرف (Harf - Kata Sendi/Huruf)</span>
            </div>
            <p className="text-slate-200 leading-relaxed">
              Kata penghubung atau sendi yang mempunyai erti sempurna apabila bersambung dengan perkataan lain (contoh Harf Jar: <span className="font-arabic font-black text-base text-amber-200" dir="rtl">فِي, عَلَى, مِنْ, إِلَى, بِـ, لِـ</span>).
            </p>
          </div>

          {/* Rules & RTL ordering */}
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col gap-1.5">
            <span className="font-black text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Peraturan Susunan Qawalib (Kanan ke Kiri):
            </span>
            <ul className="list-disc list-inside text-slate-300 space-y-1 pl-1">
              <li>Pilih perkataan daripada Bank Mufradat mengikut turutan pola dari kanan ke kiri.</li>
              <li><strong>Jumlah Ismiyyah</strong> bermula dengan Isim (Mubtada' + Khabar).</li>
              <li><strong>Jumlah Fi'liyyah</strong> bermula dengan Fi'il (Fi'il + Fa'il + Maf'ul Bih).</li>
              <li>Klik mana-mana perkataan di papan susunan untuk membatalkan pilihan.</li>
            </ul>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-black text-xs uppercase tracking-wider transition active:scale-98 cursor-pointer"
        >
          Tutup Panduan
        </button>
      </div>
    </div>
  );
};
