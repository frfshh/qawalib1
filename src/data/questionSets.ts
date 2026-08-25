import { LevelQuestion } from '../types';
import { gameData as set1GameData, bonusGameData as set1BonusData } from './syllabusData';

// SET 2 (SET B): Set Mufradat Variasi B (Dengan Terjemahan Maksud Lengkap)
export const set2GameData: LevelQuestion[] = [
  // UNIT 1: تنظيف الفصل (Pola: Isim + Isim, Isim + Isim, Fi'il + Isim + Isim, Isim + Fi'il + Isim)
  {
    unitNum: 1,
    unitName: "Membersihkan Kelas",
    unitArName: "تَنْظِيفُ الفَصْلِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المَسْجِدُ", "نَظِيفٌ"],
    options: [
      { w: "المَسْجِدُ", type: "isim", msMeaning: "masjid" },
      { w: "نَظِيفٌ", type: "isim", msMeaning: "bersih" },
      { w: "فِي", type: "harf", msMeaning: "di dalam" },
      { w: "دَخَلَ", type: "fiil", msMeaning: "telah masuk" }
    ],
    explanation: "Jumlah Ismiyyah (Mubtada' + Khabar) muzakkar: Isim subjek diikuti Isim sifat keadaan."
  },
  {
    unitNum: 1,
    unitName: "Membersihkan Kelas",
    unitArName: "تَنْظِيفُ الفَصْلِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الغُرْفَةُ", "وَاسِعَةٌ"],
    options: [
      { w: "الغُرْفَةُ", type: "isim", msMeaning: "bilik" },
      { w: "وَاسِعَةٌ", type: "isim", msMeaning: "luas" },
      { w: "خَرَجَ", type: "fiil", msMeaning: "telah keluar" },
      { w: "عَلَى", type: "harf", msMeaning: "di atas" }
    ],
    explanation: "Jumlah Ismiyyah muannats: Mubtada' muannats (الغُرْفَةُ) dipadankan dengan Khabar muannats (وَاسِعَةٌ)."
  },
  {
    unitNum: 1,
    unitName: "Membersihkan Kelas",
    unitArName: "تَنْظِيفُ الفَصْلِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَغْسِلُ", "الوَلَدُ", "الثَّوْبَ"],
    options: [
      { w: "يَغْسِلُ", type: "fiil", msMeaning: "membasuh" },
      { w: "الوَلَدُ", type: "isim", msMeaning: "budak lelaki" },
      { w: "الثَّوْبَ", type: "isim", msMeaning: "pakaian" },
      { w: "مِنْ", type: "harf", msMeaning: "dari" }
    ],
    explanation: "Jumlah Fi'liyyah: Fi'il Mudhari' + Fa'il (Marfu' Dhammah) + Maf'ul Bih (Mansub Fathah)."
  },
  {
    unitNum: 1,
    unitName: "Membersihkan Kelas",
    unitArName: "تَنْظِيفُ الفَصْلِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المُعَلِّمُ", "يَشْرَحُ", "الدَّرْسَ"],
    options: [
      { w: "المُعَلِّمُ", type: "isim", msMeaning: "guru lelaki" },
      { w: "يَشْرَحُ", type: "fiil", msMeaning: "menerangkan" },
      { w: "الدَّرْسَ", type: "isim", msMeaning: "pelajaran" },
      { w: "إِلَى", type: "harf", msMeaning: "ke" }
    ],
    explanation: "Susunan Isim (Mubtada') + Fi'il Mudhari' Khabar + Maf'ul Bih (Objek Mansub)."
  },

  // UNIT 2: التجول حول المدرسة (Pola: Isim+Fi'il, Fi'il+Isim, Isim+Harf+Isim, Fi'il+Isim+Harf+Isim)
  {
    unitNum: 2,
    unitName: "Bersiar-siar Sekitar Sekolah",
    unitArName: "التَّجَوُّلُ حَوْلَ المَدْرَسَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }],
    correctAns: ["البِنْتُ", "تَجْلِسُ"],
    options: [
      { w: "البِنْتُ", type: "isim", msMeaning: "anak perempuan" },
      { w: "تَجْلِسُ", type: "fiil", msMeaning: "sedang duduk" },
      { w: "الحَقِيبَةُ", type: "isim", msMeaning: "beg" },
      { w: "فِي", type: "harf", msMeaning: "di" }
    ],
    explanation: "Jumlah Ismiyyah ringkas: Isim muannats diikuti Fi'il Mudhari' muannats."
  },
  {
    unitNum: 2,
    unitName: "Bersiar-siar Sekitar Sekolah",
    unitArName: "التَّجَوُّلُ حَوْلَ المَدْرَسَةِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَرْكُضُ", "اللَّاعِبُ"],
    options: [
      { w: "يَرْكُضُ", type: "fiil", msMeaning: "sedang berlari" },
      { w: "اللَّاعِبُ", type: "isim", msMeaning: "pemain" },
      { w: "كُرَةٌ", type: "isim", msMeaning: "bola" },
      { w: "عَلَى", type: "harf", msMeaning: "atas" }
    ],
    explanation: "Jumlah Fi'liyyah lazim: Fi'il Mudhari' + Fa'il Marfu'."
  },
  {
    unitNum: 2,
    unitName: "Bersiar-siar Sekitar Sekolah",
    unitArName: "التَّجَوُّلُ حَوْلَ المَدْرَسَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المِسْطَرَةُ", "فِي", "الحَقِيبَةِ"],
    options: [
      { w: "المِسْطَرَةُ", type: "isim", msMeaning: "pembaris" },
      { w: "فِي", type: "harf", msMeaning: "di dalam" },
      { w: "الحَقِيبَةِ", type: "isim", msMeaning: "beg" },
      { w: "شَرِبَ", type: "fiil", msMeaning: "telah minum" }
    ],
    explanation: "Isim + Harf Jar + Isim Majrur tanda Kasrah."
  },
  {
    unitNum: 2,
    unitName: "Bersiar-siar Sekitar Sekolah",
    unitArName: "التَّجَوُّلُ حَوْلَ المَدْرَسَةِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَجْلِسُ", "المُدِيرُ", "فِي", "المَكْتَبِ"],
    options: [
      { w: "يَجْلِسُ", type: "fiil", msMeaning: "sedang duduk" },
      { w: "المُدِيرُ", type: "isim", msMeaning: "pengetua" },
      { w: "فِي", type: "harf", msMeaning: "di dalam" },
      { w: "المَكْتَبِ", type: "isim", msMeaning: "pejabat" }
    ],
    explanation: "Fi'il + Fa'il + Harf Jar + Isim Majrur."
  },

  // UNIT 3: حفلة عيد الميلاد (Pola: Isim+Isim+Harf+Isim, Isim+Fi'il+Harf+Isim, Fi'il+Isim+Isim+Isim)
  {
    unitNum: 3,
    unitName: "Majlis Sambutan",
    unitArName: "حَفْلَةُ عِيدِ المِيلَادِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الحَاسُوبُ", "الجَدِيدُ", "عَلَى", "الطَّاوِلَةِ"],
    options: [
      { w: "الحَاسُوبُ", type: "isim", msMeaning: "komputer" },
      { w: "الجَدِيدُ", type: "isim", msMeaning: "yang baharu" },
      { w: "عَلَى", type: "harf", msMeaning: "di atas" },
      { w: "الطَّاوِلَةِ", type: "isim", msMeaning: "meja" },
      { w: "نَامَ", type: "fiil", msMeaning: "telah tidur" }
    ],
    explanation: "Na'at Man'ut + Jar Majrur (Mubtada' + Sifat + Khabar Syibhul Jumlah)."
  },
  {
    unitNum: 3,
    unitName: "Majlis Sambutan",
    unitArName: "حَفْلَةُ عِيدِ المِيلَادِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الأُسْتَاذُ", "يَرْجِعُ", "إِلَى", "البَيْتِ"],
    options: [
      { w: "الأُسْتَاذُ", type: "isim", msMeaning: "guru lelaki" },
      { w: "يَرْجِعُ", type: "fiil", msMeaning: "pulang" },
      { w: "إِلَى", type: "harf", msMeaning: "ke" },
      { w: "البَيْتِ", type: "isim", msMeaning: "rumah" }
    ],
    explanation: "Isim + Fi'il Mudhari' + Harf Jar + Isim Majrur."
  },
  {
    unitNum: 3,
    unitName: "Majlis Sambutan",
    unitArName: "حَفْلَةُ عِيدِ المِيلَادِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["فَتَحَ", "الحَارِسُ", "البَابَ", "الكَبِيرَ"],
    options: [
      { w: "فَتَحَ", type: "fiil", msMeaning: "telah membuka" },
      { w: "الحَارِسُ", type: "isim", msMeaning: "pengawal" },
      { w: "البَابَ", type: "isim", msMeaning: "pintu" },
      { w: "الكَبِيرَ", type: "isim", msMeaning: "yang besar" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Maf'ul Bih + Na'at Mansub."
  },

  // UNIT 4: في وقت الفراغ (Pola: Isim+Fi'il+Isim+Isim, Fi'il+Isim+Harf+Isim)
  {
    unitNum: 4,
    unitName: "Pada Waktu Lapang",
    unitArName: "فِي وَقْتِ الفَرَاغِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الرَّسَّامُ", "يَرْسُمُ", "الصُّورَةَ", "الجَمِيلَةَ"],
    options: [
      { w: "الرَّسَّامُ", type: "isim", msMeaning: "pelukis" },
      { w: "يَرْسُمُ", type: "fiil", msMeaning: "melukis" },
      { w: "الصُّورَةَ", type: "isim", msMeaning: "gambar" },
      { w: "الجَمِيلَةَ", type: "isim", msMeaning: "yang cantik" }
    ],
    explanation: "Mubtada' + Fi'il + Maf'ul Bih + Na'at muannats."
  },
  {
    unitNum: 4,
    unitName: "Pada Waktu Lapang",
    unitArName: "فِي وَقْتِ الفَرَاغِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["سَافَرَ", "التَّاجِرُ", "إِلَى", "القَرْيَةِ"],
    options: [
      { w: "سَافَرَ", type: "fiil", msMeaning: "telah bermusafir" },
      { w: "التَّاجِرُ", type: "isim", msMeaning: "peniaga" },
      { w: "إِلَى", type: "harf", msMeaning: "ke" },
      { w: "القَرْيَةِ", type: "isim", msMeaning: "kampung" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Jar Majrur."
  },

  // UNIT 5: في عيادة المدرسة (Pola: Isim+Isim, Isim+Fi'il+Isim+Isim)
  {
    unitNum: 5,
    unitName: "Di Klinik Sekolah",
    unitArName: "فِي عِيَادَةِ المَدْرَسَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الطَّبِيبُ", "مَاهِرٌ"],
    options: [
      { w: "الطَّبِيبُ", type: "isim", msMeaning: "doktor" },
      { w: "مَاهِرٌ", type: "isim", msMeaning: "mahir / cekap" },
      { w: "عَلَى", type: "harf", msMeaning: "atas" },
      { w: "شَرِبَ", type: "fiil", msMeaning: "minum" }
    ],
    explanation: "Jumlah Ismiyyah Mubtada' + Khabar."
  },
  {
    unitNum: 5,
    unitName: "Di Klinik Sekolah",
    unitArName: "فِي عِيَادَةِ المَدْرَسَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المَرِيضُ", "يَتَنَاوَلُ", "الدَّوَاءَ", "المُفِيدَ"],
    options: [
      { w: "المَرِيضُ", type: "isim", msMeaning: "pesakit" },
      { w: "يَتَنَاوَلُ", type: "fiil", msMeaning: "mengambil / makan" },
      { w: "الدَّوَاءَ", type: "isim", msMeaning: "ubat" },
      { w: "المُفِيدَ", type: "isim", msMeaning: "yang berfaedah" }
    ],
    explanation: "Mubtada' + Fi'il Mudhari' + Maf'ul Bih + Sifat."
  },

  // UNIT 6: في حديقة الحيوانات (Pola: Fi'il+Isim+Harf+Isim, Isim+Fi'il+Harf+Isim)
  {
    unitNum: 6,
    unitName: "Di Zoo Haiwan",
    unitArName: "فِي حَدِيقَةِ الحَيَوَانَاتِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["نَظَرَ", "الزَّائِرُ", "إِلَى", "الأَسَدِ"],
    options: [
      { w: "نَظَرَ", type: "fiil", msMeaning: "telah melihat" },
      { w: "الزَّائِرُ", type: "isim", msMeaning: "pelawat" },
      { w: "إِلَى", type: "harf", msMeaning: "kepada / ke" },
      { w: "الأَسَدِ", type: "isim", msMeaning: "singa" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Harf Jar + Isim Majrur."
  },
  {
    unitNum: 6,
    unitName: "Di Zoo Haiwan",
    unitArName: "فِي حَدِيقَةِ الحَيَوَانَاتِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["القِرْدُ", "يَقْفِزُ", "عَلَى", "الشَّجَرَةِ"],
    options: [
      { w: "القِرْدُ", type: "isim", msMeaning: "monyet" },
      { w: "يَقْفِزُ", type: "fiil", msMeaning: "melompat" },
      { w: "عَلَى", type: "harf", msMeaning: "di atas" },
      { w: "الشَّجَرَةِ", type: "isim", msMeaning: "pokok" }
    ],
    explanation: "Jumlah Ismiyyah dengan khabar fi'il dan kata sendi nama."
  },

  // UNIT 7: في مركز التسوق (Pola: Fi'il+Isim+Isim, Isim+Isim)
  {
    unitNum: 7,
    unitName: "Di Pusat Membeli-belah",
    unitArName: "فِي مَرْكَزِ التَّسَوُّقِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["اشْتَرَى", "الأَبُ", "الحَقِيبَةَ"],
    options: [
      { w: "اشْتَرَى", type: "fiil", msMeaning: "telah membeli" },
      { w: "الأَبُ", type: "isim", msMeaning: "ayah" },
      { w: "الحَقِيبَةَ", type: "isim", msMeaning: "beg" },
      { w: "فِي", type: "harf", msMeaning: "di" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Maf'ul Bih."
  },
  {
    unitNum: 7,
    unitName: "Di Pusat Membeli-belah",
    unitArName: "فِي مَرْكَزِ التَّسَوُّقِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["السُّوقُ", "مُزْدَحِمٌ"],
    options: [
      { w: "السُّوقُ", type: "isim", msMeaning: "pasar / kedai" },
      { w: "مُزْدَحِمٌ", type: "isim", msMeaning: "sesak / ramai" },
      { w: "مِنْ", type: "harf", msMeaning: "dari" },
      { w: "قَالَ", type: "fiil", msMeaning: "berkata" }
    ],
    explanation: "Mubtada' + Khabar."
  },

  // UNIT 8: الغداء في المطعم (Pola: Isim+Fi'il+Isim, Isim+Fi'il+Harf+Isim, Fi'il+Isim+Harf+Isim)
  {
    unitNum: 8,
    unitName: "Makan Tengah Hari",
    unitArName: "الغَدَاءُ فِي المَطْعَمِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الأُمُّ", "تَطْبُخُ", "الطَّعَامَ"],
    options: [
      { w: "الأُمُّ", type: "isim", msMeaning: "ibu" },
      { w: "تَطْبُخُ", type: "fiil", msMeaning: "memasak" },
      { w: "الطَّعَامَ", type: "isim", msMeaning: "makanan" },
      { w: "عَلَى", type: "harf", msMeaning: "atas" }
    ],
    explanation: "Mubtada' + Fi'il Mudhari' + Maf'ul Bih."
  },
  {
    unitNum: 8,
    unitName: "Makan Tengah Hari",
    unitArName: "الغَدَاءُ فِي المَطْعَمِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الطَّالِبَةُ", "تَجْلِسُ", "فِي", "المَقْصَفِ"],
    options: [
      { w: "الطَّالِبَةُ", type: "isim", msMeaning: "pelajar perempuan" },
      { w: "تَجْلِسُ", type: "fiil", msMeaning: "duduk" },
      { w: "فِي", type: "harf", msMeaning: "di" },
      { w: "المَقْصَفِ", type: "isim", msMeaning: "kantin" }
    ],
    explanation: "Mubtada' + Fi'il Mudhari' + Harf Jar + Isim Majrur."
  },
  {
    unitNum: 8,
    unitName: "Makan Tengah Hari",
    unitArName: "الغَدَاءُ فِي المَطْعَمِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["أَكَلَ", "الرَّجُلُ", "مِنَ", "الفَاكِهَةِ"],
    options: [
      { w: "أَكَلَ", type: "fiil", msMeaning: "telah makan" },
      { w: "الرَّجُلُ", type: "isim", msMeaning: "lelaki itu" },
      { w: "مِنَ", type: "harf", msMeaning: "daripada" },
      { w: "الفَاكِهَةِ", type: "isim", msMeaning: "buah-buahan" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Jar Majrur."
  }
];

// SET 3 (SET C): Set Mufradat Dinamik C (Cabaran Tulen TANPA Maksud Pada Mufradat)
export const set3GameData: LevelQuestion[] = [
  // UNIT 1: تنظيف الفصل
  {
    unitNum: 1,
    unitName: "Membersihkan Kelas",
    unitArName: "تَنْظِيفُ الفَصْلِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المَكْتَبُ", "جَمِيلٌ"],
    options: [
      { w: "المَكْتَبُ", type: "isim" },
      { w: "جَمِيلٌ", type: "isim" },
      { w: "فِي", type: "harf" },
      { w: "كَتَبَ", type: "fiil" }
    ],
    explanation: "Jumlah Ismiyyah (Mubtada' + Khabar)."
  },
  {
    unitNum: 1,
    unitName: "Membersihkan Kelas",
    unitArName: "تَنْظِيفُ الفَصْلِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المَكْتَبَةُ", "نَظِيفَةٌ"],
    options: [
      { w: "المَكْتَبَةُ", type: "isim" },
      { w: "نَظِيفَةٌ", type: "isim" },
      { w: "قَامَ", type: "fiil" },
      { w: "إِلَى", type: "harf" }
    ],
    explanation: "Jumlah Ismiyyah Muannats: Mubtada' muannats + Khabar muannats."
  },
  {
    unitNum: 1,
    unitName: "Membersihkan Kelas",
    unitArName: "تَنْظِيفُ الفَصْلِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يُرَتِّبُ", "التِّلْمِيذُ", "الأَدَوَاتِ"],
    options: [
      { w: "يُرَتِّبُ", type: "fiil" },
      { w: "التِّلْمِيذُ", type: "isim" },
      { w: "الأَدَوَاتِ", type: "isim" },
      { w: "عَنْ", type: "harf" }
    ],
    explanation: "Jumlah Fi'liyyah: Fi'il Mudhari' + Fa'il + Maf'ul Bih."
  },
  {
    unitNum: 1,
    unitName: "Membersihkan Kelas",
    unitArName: "تَنْظِيفُ الفَصْلِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المُهَنْدِسُ", "يَبْنِي", "المَبْنَى"],
    options: [
      { w: "المُهَنْدِسُ", type: "isim" },
      { w: "يَبْنِي", type: "fiil" },
      { w: "المَبْنَى", type: "isim" },
      { w: "فِي", type: "harf" }
    ],
    explanation: "Isim (Mubtada') + Fi'il Khabar + Objek Maf'ul Bih."
  },

  // UNIT 2: التجول حول المدرسة
  {
    unitNum: 2,
    unitName: "Bersiar-siar Sekitar Sekolah",
    unitArName: "التَّجَوُّلُ حَوْلَ المَدْرَسَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }],
    correctAns: ["الشُّرْطِيُّ", "يَعْمَلُ"],
    options: [
      { w: "الشُّرْطِيُّ", type: "isim" },
      { w: "يَعْمَلُ", type: "fiil" },
      { w: "القَلَمُ", type: "isim" },
      { w: "إِلَى", type: "harf" }
    ],
    explanation: "Mubtada' + Fi'il Mudhari'."
  },
  {
    unitNum: 2,
    unitName: "Bersiar-siar Sekitar Sekolah",
    unitArName: "التَّجَوُّلُ حَوْلَ المَدْرَسَةِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَسْبَحُ", "السَّبَّاحُ"],
    options: [
      { w: "يَسْبَحُ", type: "fiil" },
      { w: "السَّبَّاحُ", type: "isim" },
      { w: "مَاءٌ", type: "isim" },
      { w: "فِي", type: "harf" }
    ],
    explanation: "Fi'il Mudhari' + Fa'il."
  },
  {
    unitNum: 2,
    unitName: "Bersiar-siar Sekitar Sekolah",
    unitArName: "التَّجَوُّلُ حَوْلَ المَدْرَسَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الكُرَاسَةُ", "عَلَى", "المَكْتَبِ"],
    options: [
      { w: "الكُرَاسَةُ", type: "isim" },
      { w: "عَلَى", type: "harf" },
      { w: "المَكْتَبِ", type: "isim" },
      { w: "ذَهَبَ", type: "fiil" }
    ],
    explanation: "Mubtada' + Jar Majrur."
  },
  {
    unitNum: 2,
    unitName: "Bersiar-siar Sekitar Sekolah",
    unitArName: "التَّجَوُّلُ حَوْلَ المَدْرَسَةِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَمْشِي", "الحَارِسُ", "حَوْلَ", "المَبْنَى"],
    options: [
      { w: "يَمْشِي", type: "fiil" },
      { w: "الحَارِسُ", type: "isim" },
      { w: "حَوْلَ", type: "harf" },
      { w: "المَبْنَى", type: "isim" }
    ],
    explanation: "Fi'il + Fa'il + Zhorof/Harf + Isim Majrur."
  },

  // UNIT 3: حفلة عيد الميلاد
  {
    unitNum: 3,
    unitName: "Majlis Sambutan",
    unitArName: "حَفْلَةُ عِيدِ المِيلَادِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الهَدِيَّةُ", "الجَمِيلَةُ", "فِي", "الصُّنْدُوقِ"],
    options: [
      { w: "الهَدِيَّةُ", type: "isim" },
      { w: "الجَمِيلَةُ", type: "isim" },
      { w: "فِي", type: "harf" },
      { w: "الصُّنْدُوقِ", type: "isim" },
      { w: "أَكَلَ", type: "fiil" }
    ],
    explanation: "Na'at Man'ut + Jar Majrur."
  },
  {
    unitNum: 3,
    unitName: "Majlis Sambutan",
    unitArName: "حَفْلَةُ عِيدِ المِيلَادِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الضُّيُوفُ", "يَحْضُرُونَ", "إِلَى", "الحَفْلِ"],
    options: [
      { w: "الضُّيُوفُ", type: "isim" },
      { w: "يَحْضُرُونَ", type: "fiil" },
      { w: "إِلَى", type: "harf" },
      { w: "الحَفْلِ", type: "isim" }
    ],
    explanation: "Mubtada' Jamak + Fi'il Mudhari' + Jar Majrur."
  },
  {
    unitNum: 3,
    unitName: "Majlis Sambutan",
    unitArName: "حَفْلَةُ عِيدِ المِيلَادِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["قَدَّمَ", "الصَّدِيقُ", "الهَدِيَّةَ", "الثَّمِينَةَ"],
    options: [
      { w: "قَدَّمَ", type: "fiil" },
      { w: "الصَّدِيقُ", type: "isim" },
      { w: "الهَدِيَّةَ", type: "isim" },
      { w: "الثَّمِينَةَ", type: "isim" }
    ],
    explanation: "Fi'il + Fa'il + Maf'ul Bih + Sifat."
  },

  // UNIT 4: في وقت الفراغ
  {
    unitNum: 4,
    unitName: "Pada Waktu Lapang",
    unitArName: "فِي وَقْتِ الفَرَاغِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الشَّاعِرُ", "يُنْشِدُ", "القَصِيدَةَ", "الرَّائِعَةَ"],
    options: [
      { w: "الشَّاعِرُ", type: "isim" },
      { w: "يُنْشِدُ", type: "fiil" },
      { w: "القَصِيدَةَ", type: "isim" },
      { w: "الرَّائِعَةَ", type: "isim" }
    ],
    explanation: "Mubtada' + Fi'il + Maf'ul Bih + Na'at."
  },
  {
    unitNum: 4,
    unitName: "Pada Waktu Lapang",
    unitArName: "فِي وَقْتِ الفَرَاغِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["ذَهَبَ", "الفَلَّاحُ", "إِلَى", "المَزْرَعَةِ"],
    options: [
      { w: "ذَهَبَ", type: "fiil" },
      { w: "الفَلَّاحُ", type: "isim" },
      { w: "إِلَى", type: "harf" },
      { w: "المَزْرَعَةِ", type: "isim" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Jar Majrur."
  },

  // UNIT 5: في عيادة المدرسة
  {
    unitNum: 5,
    unitName: "Di Klinik Sekolah",
    unitArName: "فِي عِيَادَةِ المَدْرَسَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المُمَرِّضَةُ", "نَشِيطَةٌ"],
    options: [
      { w: "المُمَرِّضَةُ", type: "isim" },
      { w: "نَشِيطَةٌ", type: "isim" },
      { w: "فِي", type: "harf" },
      { w: "نَامَ", type: "fiil" }
    ],
    explanation: "Mubtada' muannats + Khabar muannats."
  },
  {
    unitNum: 5,
    unitName: "Di Klinik Sekolah",
    unitArName: "فِي عِيَادَةِ المَدْرَسَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الصَّيْدَلِيُّ", "يَبِيعُ", "الدَّوَاءَ", "الشَّافِيَ"],
    options: [
      { w: "الصَّيْدَلِيُّ", type: "isim" },
      { w: "يَبِيعُ", type: "fiil" },
      { w: "الدَّوَاءَ", type: "isim" },
      { w: "الشَّافِيَ", type: "isim" }
    ],
    explanation: "Mubtada' + Fi'il + Maf'ul Bih + Sifat."
  },

  // UNIT 6: في حديقة الحيوانات
  {
    unitNum: 6,
    unitName: "Di Zoo Haiwan",
    unitArName: "فِي حَدِيقَةِ الحَيَوَانَاتِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["أَطْعَمَ", "الحَارِسُ", "فِي", "القَفَصِ"],
    options: [
      { w: "أَطْعَمَ", type: "fiil" },
      { w: "الحَارِسُ", type: "isim" },
      { w: "فِي", type: "harf" },
      { w: "القَفَصِ", type: "isim" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Jar Majrur."
  },
  {
    unitNum: 6,
    unitName: "Di Zoo Haiwan",
    unitArName: "فِي حَدِيقَةِ الحَيَوَانَاتِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الطَّائِرُ", "يَطِيرُ", "فِي", "السَّمَاءِ"],
    options: [
      { w: "الطَّائِرُ", type: "isim" },
      { w: "يَطِيرُ", type: "fiil" },
      { w: "فِي", type: "harf" },
      { w: "السَّمَاءِ", type: "isim" }
    ],
    explanation: "Mubtada' + Khabar Jumlah Fi'liyyah."
  },

  // UNIT 7: في مركز التسوق
  {
    unitNum: 7,
    unitName: "Di Pusat Membeli-belah",
    unitArName: "فِي مَرْكَزِ التَّسَوُّقِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["بَاعَ", "التَّاجِرُ", "القَمِيصَ"],
    options: [
      { w: "بَاعَ", type: "fiil" },
      { w: "التَّاجِرُ", type: "isim" },
      { w: "القَمِيصَ", type: "isim" },
      { w: "عَلَى", type: "harf" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Maf'ul Bih."
  },
  {
    unitNum: 7,
    unitName: "Di Pusat Membeli-belah",
    unitArName: "فِي مَرْكَزِ التَّسَوُّقِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الدُّكَّانُ", "قَرِيبٌ"],
    options: [
      { w: "الدُّكَّانُ", type: "isim" },
      { w: "قَرِيبٌ", type: "isim" },
      { w: "مِنْ", type: "harf" },
      { w: "ذَهَبَ", type: "fiil" }
    ],
    explanation: "Jumlah Ismiyyah Mubtada' + Khabar."
  },

  // UNIT 8: الغداء في المطعم
  {
    unitNum: 8,
    unitName: "Makan Tengah Hari",
    unitArName: "الغَدَاءُ فِي المَطْعَمِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الأُخْتُ", "تَأْكُلُ", "الحَلْوَى"],
    options: [
      { w: "الأُخْتُ", type: "isim" },
      { w: "تَأْكُلُ", type: "fiil" },
      { w: "الحَلْوَى", type: "isim" },
      { w: "فِي", type: "harf" }
    ],
    explanation: "Mubtada' + Fi'il + Maf'ul Bih."
  },
  {
    unitNum: 8,
    unitName: "Makan Tengah Hari",
    unitArName: "الغَدَاءُ فِي المَطْعَمِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الضَّيْفُ", "يَجْلِسُ", "عَلَى", "الأَرِيكَةِ"],
    options: [
      { w: "الضَّيْفُ", type: "isim" },
      { w: "يَجْلِسُ", type: "fiil" },
      { w: "عَلَى", type: "harf" },
      { w: "الأَرِيكَةِ", type: "isim" }
    ],
    explanation: "Mubtada' + Fi'il + Jar Majrur."
  },
  {
    unitNum: 8,
    unitName: "Makan Tengah Hari",
    unitArName: "الغَدَاءُ فِي المَطْعَمِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["شَرِبَ", "الوَلَدُ", "مِنَ", "الشَّايِ"],
    options: [
      { w: "شَرِبَ", type: "fiil" },
      { w: "الوَلَدُ", type: "isim" },
      { w: "مِنَ", type: "harf" },
      { w: "الشَّايِ", type: "isim" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Jar Majrur."
  }
];

// SET 4 (SET D): Cabaran Tulen D (Kosa Kata & Qawalib Tulen Bahasa Arab TANPA Maksud Pada Mufradat)
export const set4GameData: LevelQuestion[] = [
  // UNIT 1: تنظيف الفصل
  {
    unitNum: 1,
    unitName: "Membersihkan Kelas",
    unitArName: "تَنْظِيفُ الفَصْلِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["القَلَمُ", "جَدِيدٌ"],
    options: [
      { w: "القَلَمُ", type: "isim" },
      { w: "جَدِيدٌ", type: "isim" },
      { w: "فِي", type: "harf" },
      { w: "قَرَأَ", type: "fiil" }
    ],
    explanation: "Jumlah Ismiyyah (Mubtada' + Khabar): Isim subjek diikuti Isim penerang keadaan."
  },
  {
    unitNum: 1,
    unitName: "Membersihkan Kelas",
    unitArName: "تَنْظِيفُ الفَصْلِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["السَّبُّورَةُ", "نَظِيفَةٌ"],
    options: [
      { w: "السَّبُّورَةُ", type: "isim" },
      { w: "نَظِيفَةٌ", type: "isim" },
      { w: "ذَهَبَ", type: "fiil" },
      { w: "عَلَى", type: "harf" }
    ],
    explanation: "Jumlah Ismiyyah muannats: Mubtada' muannats dipadankan dengan Khabar muannats."
  },
  {
    unitNum: 1,
    unitName: "Membersihkan Kelas",
    unitArName: "تَنْظِيفُ الفَصْلِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَكْتُبُ", "الطَّالِبُ", "الوَاجِبَ"],
    options: [
      { w: "يَكْتُبُ", type: "fiil" },
      { w: "الطَّالِبُ", type: "isim" },
      { w: "الوَاجِبَ", type: "isim" },
      { w: "مِنْ", type: "harf" }
    ],
    explanation: "Jumlah Fi'liyyah: Fi'il Mudhari' + Fa'il Marfu' + Maf'ul Bih Mansub."
  },
  {
    unitNum: 1,
    unitName: "Membersihkan Kelas",
    unitArName: "تَنْظِيفُ الفَصْلِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المُدَرِّسُ", "يَشْرَحُ", "القَاعِدَةَ"],
    options: [
      { w: "المُدَرِّسُ", type: "isim" },
      { w: "يَشْرَحُ", type: "fiil" },
      { w: "القَاعِدَةَ", type: "isim" },
      { w: "إِلَى", type: "harf" }
    ],
    explanation: "Jumlah Ismiyyah dengan Khabar Jumlah Fi'liyyah dan Maf'ul Bih."
  },

  // UNIT 2: التجول حول المدرسة
  {
    unitNum: 2,
    unitName: "Bersiar-siar Sekitar Sekolah",
    unitArName: "التَّجَوُّلُ حَوْلَ المَدْرَسَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }],
    correctAns: ["التِّلْمِيذَةُ", "تَقْرَأُ"],
    options: [
      { w: "التِّلْمِيذَةُ", type: "isim" },
      { w: "تَقْرَأُ", type: "fiil" },
      { w: "الكِتَابُ", type: "isim" },
      { w: "فِي", type: "harf" }
    ],
    explanation: "Mubtada' Muannats + Fi'il Mudhari' Muannats."
  },
  {
    unitNum: 2,
    unitName: "Bersiar-siar Sekitar Sekolah",
    unitArName: "التَّجَوُّلُ حَوْلَ المَدْرَسَةِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَخْرُجُ", "المُدِيرُ"],
    options: [
      { w: "يَخْرُجُ", type: "fiil" },
      { w: "المُدِيرُ", type: "isim" },
      { w: "البَابُ", type: "isim" },
      { w: "عَلَى", type: "harf" }
    ],
    explanation: "Fi'il Mudhari' Lazim + Fa'il Marfu'."
  },
  {
    unitNum: 2,
    unitName: "Bersiar-siar Sekitar Sekolah",
    unitArName: "التَّجَوُّلُ حَوْلَ المَدْرَسَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المِمْسَحَةُ", "عَلَى", "الرَّفِّ"],
    options: [
      { w: "المِمْسَحَةُ", type: "isim" },
      { w: "عَلَى", type: "harf" },
      { w: "الرَّفِّ", type: "isim" },
      { w: "شَرِبَ", type: "fiil" }
    ],
    explanation: "Isim Mubtada' + Harf Jar + Isim Majrur (Khabar Syibhul Jumlah)."
  },
  {
    unitNum: 2,
    unitName: "Bersiar-siar Sekitar Sekolah",
    unitArName: "التَّجَوُّلُ حَوْلَ المَدْرَسَةِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَدْخُلُ", "الطَّالِبُ", "إِلَى", "المُخْتَبَرِ"],
    options: [
      { w: "يَدْخُلُ", type: "fiil" },
      { w: "الطَّالِبُ", type: "isim" },
      { w: "إِلَى", type: "harf" },
      { w: "المُخْتَبَرِ", type: "isim" }
    ],
    explanation: "Fi'il + Fa'il + Harf Jar + Isim Majrur."
  },

  // UNIT 3: حفلة عيد الميلاد
  {
    unitNum: 3,
    unitName: "Majlis Sambutan",
    unitArName: "حَفْلَةُ عِيدِ المِيلَادِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الكَعْكَةُ", "اللَّذِيذَةُ", "فِي", "المَطْبَخِ"],
    options: [
      { w: "الكَعْكَةُ", type: "isim" },
      { w: "اللَّذِيذَةُ", type: "isim" },
      { w: "فِي", type: "harf" },
      { w: "المَطْبَخِ", type: "isim" },
      { w: "نَامَ", type: "fiil" }
    ],
    explanation: "Na'at Man'ut Muannats + Jar Majrur."
  },
  {
    unitNum: 3,
    unitName: "Majlis Sambutan",
    unitArName: "حَفْلَةُ عِيدِ المِيلَادِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الأَبُ", "يَصِلُ", "إِلَى", "الحَفْلَةِ"],
    options: [
      { w: "الأَبُ", type: "isim" },
      { w: "يَصِلُ", type: "fiil" },
      { w: "إِلَى", type: "harf" },
      { w: "الحَفْلَةِ", type: "isim" }
    ],
    explanation: "Isim + Fi'il Mudhari' + Jar Majrur."
  },
  {
    unitNum: 3,
    unitName: "Majlis Sambutan",
    unitArName: "حَفْلَةُ عِيدِ المِيلَادِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["شَرِبَ", "الضَّيْفُ", "العَصِيرَ", "البَارِدَ"],
    options: [
      { w: "شَرِبَ", type: "fiil" },
      { w: "الضَّيْفُ", type: "isim" },
      { w: "العَصِيرَ", type: "isim" },
      { w: "البَارِدَ", type: "isim" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Maf'ul Bih + Na'at Mansub."
  },

  // UNIT 4: في وقت الفراغ
  {
    unitNum: 4,
    unitName: "Pada Waktu Lapang",
    unitArName: "فِي وَقْتِ الفَرَاغِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["اللَّاعِبُ", "يَقْذِفُ", "الكُرَةَ", "الجَدِيدَةَ"],
    options: [
      { w: "اللَّاعِبُ", type: "isim" },
      { w: "يَقْذِفُ", type: "fiil" },
      { w: "الكُرَةَ", type: "isim" },
      { w: "الجَدِيدَةَ", type: "isim" }
    ],
    explanation: "Mubtada' + Fi'il Mudhari' + Maf'ul Bih + Na'at."
  },
  {
    unitNum: 4,
    unitName: "Pada Waktu Lapang",
    unitArName: "فِي وَقْتِ الفَرَاغِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["جَلَسَ", "الشَّيْخُ", "فِي", "الحَدِيقَةِ"],
    options: [
      { w: "جَلَسَ", type: "fiil" },
      { w: "الشَّيْخُ", type: "isim" },
      { w: "فِي", type: "harf" },
      { w: "الحَدِيقَةِ", type: "isim" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Jar Majrur."
  },

  // UNIT 5: في عيادة المدرسة
  {
    unitNum: 5,
    unitName: "Di Klinik Sekolah",
    unitArName: "فِي عِيَادَةِ المَدْرَسَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["العِلَاجُ", "نَافِعٌ"],
    options: [
      { w: "العِلَاجُ", type: "isim" },
      { w: "نَافِعٌ", type: "isim" },
      { w: "عَلَى", type: "harf" },
      { w: "شَرِبَ", type: "fiil" }
    ],
    explanation: "Jumlah Ismiyyah Mubtada' + Khabar muzakkar."
  },
  {
    unitNum: 5,
    unitName: "Di Klinik Sekolah",
    unitArName: "فِي عِيَادَةِ المَدْرَسَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الطَّبِيبُ", "يَفْحَصُ", "المَرِيضَ", "المُصَابَ"],
    options: [
      { w: "الطَّبِيبُ", type: "isim" },
      { w: "يَفْحَصُ", type: "fiil" },
      { w: "المَرِيضَ", type: "isim" },
      { w: "المُصَابَ", type: "isim" }
    ],
    explanation: "Mubtada' + Fi'il + Maf'ul Bih + Na'at."
  },

  // UNIT 6: في حديقة الحيوانات
  {
    unitNum: 6,
    unitName: "Di Zoo Haiwan",
    unitArName: "فِي حَدِيقَةِ الحَيَوَانَاتِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["وَقَفَ", "الفِيلُ", "أَمَامَ", "البُحَيْرَةِ"],
    options: [
      { w: "وَقَفَ", type: "fiil" },
      { w: "الفِيلُ", type: "isim" },
      { w: "أَمَامَ", type: "harf" },
      { w: "البُحَيْرَةِ", type: "isim" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Zhorof Makan + Mudhaf Ilaih."
  },
  {
    unitNum: 6,
    unitName: "Di Zoo Haiwan",
    unitArName: "فِي حَدِيقَةِ الحَيَوَانَاتِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الغَزَالُ", "يَرْعَى", "فِي", "المَرْعَى"],
    options: [
      { w: "الغَزَالُ", type: "isim" },
      { w: "يَرْعَى", type: "fiil" },
      { w: "فِي", type: "harf" },
      { w: "المَرْعَى", type: "isim" }
    ],
    explanation: "Mubtada' + Fi'il Mudhari' + Harf Jar + Isim Majrur."
  },

  // UNIT 7: في مركز التسوق
  {
    unitNum: 7,
    unitName: "Di Pusat Membeli-belah",
    unitArName: "فِي مَرْكَزِ التَّسَوُّقِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["حَمَلَ", "المُشْتَرِي", "الحَقِيبَةَ"],
    options: [
      { w: "حَمَلَ", type: "fiil" },
      { w: "المُشْتَرِي", type: "isim" },
      { w: "الحَقِيبَةَ", type: "isim" },
      { w: "مِنْ", type: "harf" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Maf'ul Bih."
  },
  {
    unitNum: 7,
    unitName: "Di Pusat Membeli-belah",
    unitArName: "فِي مَرْكَزِ التَّسَوُّقِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المَطْعَمُ", "مَفْتُوحٌ"],
    options: [
      { w: "المَطْعَمُ", type: "isim" },
      { w: "مَفْتُوحٌ", type: "isim" },
      { w: "عَلَى", type: "harf" },
      { w: "قَالَ", type: "fiil" }
    ],
    explanation: "Jumlah Ismiyyah Mubtada' + Khabar."
  },

  // UNIT 8: الغداء في المطعم
  {
    unitNum: 8,
    unitName: "Makan Tengah Hari",
    unitArName: "الغَدَاءُ فِي المَطْعَمِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الخَادِمُ", "يُقَدِّمُ", "الطَّعَامَ"],
    options: [
      { w: "الخَادِمُ", type: "isim" },
      { w: "يُقَدِّمُ", type: "fiil" },
      { w: "الطَّعَامَ", type: "isim" },
      { w: "فِي", type: "harf" }
    ],
    explanation: "Mubtada' + Fi'il Mudhari' + Maf'ul Bih."
  },
  {
    unitNum: 8,
    unitName: "Makan Tengah Hari",
    unitArName: "الغَدَاءُ فِي المَطْعَمِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["العَائِلَةُ", "تَجْتَمِعُ", "فِي", "المَطْعَمِ"],
    options: [
      { w: "العَائِلَةُ", type: "isim" },
      { w: "تَجْتَمِعُ", type: "fiil" },
      { w: "فِي", type: "harf" },
      { w: "المَطْعَمِ", type: "isim" }
    ],
    explanation: "Mubtada' Muannats + Fi'il Mudhari' + Jar Majrur."
  },
  {
    unitNum: 8,
    unitName: "Makan Tengah Hari",
    unitArName: "الغَدَاءُ فِي المَطْعَمِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["شَرِبَ", "الضَّيْفُ", "مِنَ", "المَاءِ"],
    options: [
      { w: "شَرِبَ", type: "fiil" },
      { w: "الضَّيْفُ", type: "isim" },
      { w: "مِنَ", type: "harf" },
      { w: "المَاءِ", type: "isim" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Jar Majrur."
  }
];

// ==========================================
// SET 5 GAME DATA: UJIAN NAHU KOMPREHENSIF (SET E - TANPA TONA WARNA)
// Merangkumi 24 Qawalib KSSM Unit 1 - 8 Tanpa Bantuan Tona Warna
// ==========================================
export const set5GameData: LevelQuestion[] = [
  // UNIT 1
  {
    unitNum: 1,
    unitName: "Unit 1: Al-Madrasah (Qalib 1)",
    unitArName: "المَدْرَسَةُ",
    meaningMs: "Masjid itu besar.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["المَسْجِدُ", "كَبِيرٌ"],
    options: [
      { w: "المَسْجِدُ", type: "isim" },
      { w: "كَبِيرٌ", type: "isim" },
      { w: "يَدْخُلُ", type: "fiil" },
      { w: "فِي", type: "harf" }
    ],
    explanation: "Pola: Isim + Isim (Mubtada' + Khabar)."
  },
  {
    unitNum: 1,
    unitName: "Unit 1: Al-Madrasah (Qalib 2)",
    unitArName: "المَدْرَسَةُ",
    meaningMs: "Ketua kelas itu rajin.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["رَئِيسُ", "الفَصْلِ", "نَشِيطٌ"],
    options: [
      { w: "رَئِيسُ", type: "isim" },
      { w: "الفَصْلِ", type: "isim" },
      { w: "نَشِيطٌ", type: "isim" },
      { w: "يَكْتُبُ", type: "fiil" }
    ],
    explanation: "Pola: Isim + Isim + Isim (Mudhaf + Mudhaf Ilayh + Khabar)."
  },
  {
    unitNum: 1,
    unitName: "Unit 1: Al-Madrasah (Qalib 3)",
    unitArName: "المَدْرَسَةُ",
    meaningMs: "Pelajar itu membaca buku.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "فعل", ms: "Fi'il" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["الطَّالِبُ", "يَقْرَأُ", "الكِتَابَ"],
    options: [
      { w: "الطَّالِبُ", type: "isim" },
      { w: "يَقْرَأُ", type: "fiil" },
      { w: "الكِتَابَ", type: "isim" },
      { w: "عَلَى", type: "harf" }
    ],
    explanation: "Pola: Isim + Fi'il + Isim (Mubtada' + Fi'il Mudhari' + Maf'ul Bih)."
  },

  // UNIT 2
  {
    unitNum: 2,
    unitName: "Unit 2: Al-Fasl (Qalib 1)",
    unitArName: "الفَصْلُ",
    meaningMs: "Guru itu sedang menerangkan.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "فعل", ms: "Fi'il" }
    ],
    correctAns: ["الأُسْتَاذُ", "يَشْرَحُ"],
    options: [
      { w: "الأُسْتَاذُ", type: "isim" },
      { w: "يَشْرَحُ", type: "fiil" },
      { w: "الدَّرْسُ", type: "isim" },
      { w: "مَعَ", type: "harf" }
    ],
    explanation: "Pola: Isim + Fi'il (Mubtada' + Jumlah Fi'liyyah sebagai Khabar)."
  },
  {
    unitNum: 2,
    unitName: "Unit 2: Al-Fasl (Qalib 2)",
    unitArName: "الفَصْلُ",
    meaningMs: "Murid itu berusaha bersungguh-sungguh.",
    patterns: [
      { ar: "فعل", ms: "Fi'il" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["يَجْتَهِدُ", "التِّلْمِيذُ"],
    options: [
      { w: "يَجْتَهِدُ", type: "fiil" },
      { w: "التِّلْمِيذُ", type: "isim" },
      { w: "مَاهِرٌ", type: "isim" },
      { w: "إِلَى", type: "harf" }
    ],
    explanation: "Pola: Fi'il + Isim (Fi'il Mudhari' + Fa'il Marfu')."
  },
  {
    unitNum: 2,
    unitName: "Unit 2: Al-Fasl (Qalib 3)",
    unitArName: "الفَصْلُ",
    meaningMs: "Bola itu berada di padang.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "حرف", ms: "Harf" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["الكُرَةُ", "فِي", "المَلْعَبِ"],
    options: [
      { w: "الكُرَةُ", type: "isim" },
      { w: "فِي", type: "harf" },
      { w: "المَلْعَبِ", type: "isim" },
      { w: "يَلْعَبُ", type: "fiil" }
    ],
    explanation: "Pola: Isim + Harf + Isim (Mubtada' + Jar Majrur)."
  },

  // UNIT 3
  {
    unitNum: 3,
    unitName: "Unit 3: Al-Hafiah (Qalib 1)",
    unitArName: "الحَفْلَةُ",
    meaningMs: "Majalah sekolah itu berada di atas meja.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" },
      { ar: "حرف", ms: "Harf" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["مَجَلَّةُ", "المَدْرَسَةِ", "عَلَى", "المَكْتَبِ"],
    options: [
      { w: "مَجَلَّةُ", type: "isim" },
      { w: "المَدْرَسَةِ", type: "isim" },
      { w: "عَلَى", type: "harf" },
      { w: "المَكْتَبِ", type: "isim" },
      { w: "تَقْرَأُ", type: "fiil" }
    ],
    explanation: "Pola: Isim + Isim + Harf + Isim (Mudhaf + Mudhaf Ilayh + Jar Majrur)."
  },
  {
    unitNum: 3,
    unitName: "Unit 3: Al-Hafiah (Qalib 2)",
    unitArName: "الحَفْلَةُ",
    meaningMs: "Doktor itu bertugas di hospital.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "فعل", ms: "Fi'il" },
      { ar: "حرف", ms: "Harf" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["الطَّبِيبُ", "يَعْمَلُ", "فِي", "المُسْتَشْفَى"],
    options: [
      { w: "الطَّبِيبُ", type: "isim" },
      { w: "يَعْمَلُ", type: "fiil" },
      { w: "فِي", type: "harf" },
      { w: "المُسْتَشْفَى", type: "isim" },
      { w: "عَالِمٌ", type: "isim" }
    ],
    explanation: "Pola: Isim + Fi'il + Harf + Isim (Mubtada' + Fi'il + Jar Majrur)."
  },
  {
    unitNum: 3,
    unitName: "Unit 3: Al-Hafiah (Qalib 3)",
    unitArName: "الحَفْلَةُ",
    meaningMs: "Kanak-kanak itu menyukai sukan lalu dia berenang.",
    patterns: [
      { ar: "فعل", ms: "Fi'il" },
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" },
      { ar: "فعل", ms: "Fi'il" }
    ],
    correctAns: ["يُحِبُّ", "الوَلَدُ", "الرِّيَاضَةَ", "فَيَسْبَحُ"],
    options: [
      { w: "يُحِبُّ", type: "fiil" },
      { w: "الوَلَدُ", type: "isim" },
      { w: "الرِّيَاضَةَ", type: "isim" },
      { w: "فَيَسْبَحُ", type: "fiil" },
      { w: "سَرِيعٌ", type: "isim" }
    ],
    explanation: "Pola: Fi'il + Isim + Isim + Fi'il (Fi'il + Fa'il + Maf'ul + Ma'tuf Fi'il)."
  },

  // UNIT 4
  {
    unitNum: 4,
    unitName: "Unit 4: Al-Mihan (Qalib 1)",
    unitArName: "المِهَنُ",
    meaningMs: "Pegawai itu menyambut tetamu-tetamu yang mulia.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "فعل", ms: "Fi'il" },
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["المُوَظَّفُ", "يَسْتَقْبِلُ", "الضُّيُوفَ", "الكِرَامَ"],
    options: [
      { w: "المُوَظَّفُ", type: "isim" },
      { w: "يَسْتَقْبِلُ", type: "fiil" },
      { w: "الضُّيُوفَ", type: "isim" },
      { w: "الكِرَامَ", type: "isim" },
      { w: "إِلَى", type: "harf" }
    ],
    explanation: "Pola: Isim + Fi'il + Isim + Isim (Mubtada' + Fi'il + Maf'ul Bih + Na'at)."
  },
  {
    unitNum: 4,
    unitName: "Unit 4: Al-Mihan (Qalib 2)",
    unitArName: "المِهَنُ",
    meaningMs: "Perjalanan ke kampung itu indah.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "حرف", ms: "Harf" },
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["السَّفَرُ", "إِلَى", "القَرْيَةِ", "جَمِيلٌ"],
    options: [
      { w: "السَّفَرُ", type: "isim" },
      { w: "إِلَى", type: "harf" },
      { w: "القَرْيَةِ", type: "isim" },
      { w: "جَمِيلٌ", type: "isim" },
      { w: "يَرْكَبُ", type: "fiil" }
    ],
    explanation: "Pola: Isim + Harf + Isim + Isim (Mubtada' + Jar Majrur + Khabar)."
  },
  {
    unitNum: 4,
    unitName: "Unit 4: Al-Mihan (Qalib 3)",
    unitArName: "المِهَنُ",
    meaningMs: "Pemandu itu turun dari kereta.",
    patterns: [
      { ar: "فعل", ms: "Fi'il" },
      { ar: "حرف", ms: "Harf" },
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["نَزَلَ", "مِنَ", "السَّيَّارَةِ", "السَّائِقُ"],
    options: [
      { w: "نَزَلَ", type: "fiil" },
      { w: "مِنَ", type: "harf" },
      { w: "السَّيَّارَةِ", type: "isim" },
      { w: "السَّائِقُ", type: "isim" },
      { w: "مَسْرُورٌ", type: "isim" }
    ],
    explanation: "Pola: Fi'il + Harf + Isim + Isim (Fi'il + Jar Majrur + Fa'il Muakhkhar)."
  },

  // UNIT 5
  {
    unitNum: 5,
    unitName: "Unit 5: Al-Aswaq (Qalib 1)",
    unitArName: "الأَسْوَاقُ",
    meaningMs: "Lelaki itu menaiki bas.",
    patterns: [
      { ar: "فعل", ms: "Fi'il" },
      { ar: "اسم", ms: "Isim" },
      { ar: "حرف", ms: "Harf" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["رَكِبَ", "الرَّجُلُ", "فِي", "الحَافِلَةِ"],
    options: [
      { w: "رَكِبَ", type: "fiil" },
      { w: "الرَّجُلُ", type: "isim" },
      { w: "فِي", type: "harf" },
      { w: "الحَافِلَةِ", type: "isim" },
      { w: "سَرِيعٌ", type: "isim" }
    ],
    explanation: "Pola: Fi'il + Isim + Harf + Isim (Fi'il Madhi + Fa'il + Jar Majrur)."
  },
  {
    unitNum: 5,
    unitName: "Unit 5: Al-Aswaq (Qalib 2)",
    unitArName: "الأَسْوَاقُ",
    meaningMs: "Taman haiwan itu luas.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["حَدِيقَةُ", "الحَيَوَانَاتِ", "وَاسِعَةٌ"],
    options: [
      { w: "حَدِيقَةُ", type: "isim" },
      { w: "الحَيَوَانَاتِ", type: "isim" },
      { w: "وَاسِعَةٌ", type: "isim" },
      { w: "يَزُورُ", type: "fiil" }
    ],
    explanation: "Pola: Isim + Isim + Isim (Mudhaf + Mudhaf Ilayh + Khabar)."
  },
  {
    unitNum: 5,
    unitName: "Unit 5: Al-Aswaq (Qalib 3)",
    unitArName: "الأَسْوَاقُ",
    meaningMs: "Tuan kedai itu menjual barang dagangan.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" },
      { ar: "فعل", ms: "Fi'il" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["صَاحِبُ", "المَتْجَرِ", "يَبِيعُ", "البَضَائِعَ"],
    options: [
      { w: "صَاحِبُ", type: "isim" },
      { w: "المَتْجَرِ", type: "isim" },
      { w: "يَبِيعُ", type: "fiil" },
      { w: "البَضَائِعَ", type: "isim" },
      { w: "فِي", type: "harf" }
    ],
    explanation: "Pola: Isim + Isim + Fi'il + Isim (Mudhaf + Mudhaf Ilayh + Fi'il Mudhari' + Maf'ul Bih)."
  },

  // UNIT 6
  {
    unitNum: 6,
    unitName: "Unit 6: Al-Khadamat (Qalib 1)",
    unitArName: "الخَدَمَاتُ",
    meaningMs: "Ambulan itu berada di hadapan pusat kesihatan.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" },
      { ar: "حرف", ms: "Harf" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["سَيَّارَةُ", "الإِسْعَافِ", "أَمَامَ", "المَرْكَزِ"],
    options: [
      { w: "سَيَّارَةُ", type: "isim" },
      { w: "الإِسْعَافِ", type: "isim" },
      { w: "أَمَامَ", type: "harf" },
      { w: "المَرْكَزِ", type: "isim" },
      { w: "تَسِيرُ", type: "fiil" }
    ],
    explanation: "Pola: Isim + Isim + Harf + Isim (Mudhaf + Mudhaf Ilayh + Zharf + Mudhaf Ilayh)."
  },
  {
    unitNum: 6,
    unitName: "Unit 6: Al-Khadamat (Qalib 2)",
    unitArName: "الخَدَمَاتُ",
    meaningMs: "Pintu perpustakaan awam itu terbuka.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["بَابُ", "المَكْتَبَةِ", "العَامَّةِ", "مَفْتُوحٌ"],
    options: [
      { w: "بَابُ", type: "isim" },
      { w: "المَكْتَبَةِ", type: "isim" },
      { w: "العَامَّةِ", type: "isim" },
      { w: "مَفْتُوحٌ", type: "isim" },
      { w: "يَدْخُلُ", type: "fiil" }
    ],
    explanation: "Pola: Isim + Isim + Isim + Isim (Mudhaf + Mudhaf Ilayh + Na'at + Khabar)."
  },
  {
    unitNum: 6,
    unitName: "Unit 6: Al-Khadamat (Qalib 3)",
    unitArName: "الخَدَمَاتُ",
    meaningMs: "Pengarah syarikat yang baharu itu telah hadir.",
    patterns: [
      { ar: "فعل", ms: "Fi'il" },
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["حَضَرَ", "مُدِيرُ", "الشَّرِكَةِ", "الجَدِيدُ"],
    options: [
      { w: "حَضَرَ", type: "fiil" },
      { w: "مُدِيرُ", type: "isim" },
      { w: "الشَّرِكَةِ", type: "isim" },
      { w: "الجَدِيدُ", type: "isim" },
      { w: "إِلَى", type: "harf" }
    ],
    explanation: "Pola: Fi'il + Isim + Isim + Isim (Fi'il + Fa'il Mudhaf + Mudhaf Ilayh + Na'at)."
  },

  // UNIT 7
  {
    unitNum: 7,
    unitName: "Unit 7: Al-Sina'ah (Qalib 1)",
    unitArName: "الصِّنَاعَةُ",
    meaningMs: "Pengawal kilang itu membuka pintu pagar utama.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" },
      { ar: "فعل", ms: "Fi'il" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["حَارِسُ", "المَصْنَعِ", "يَفْتَحُ", "البَوَّابَةَ"],
    options: [
      { w: "حَارِسُ", type: "isim" },
      { w: "المَصْنَعِ", type: "isim" },
      { w: "يَفْتَحُ", type: "fiil" },
      { w: "البَوَّابَةَ", type: "isim" },
      { w: "فِي", type: "harf" }
    ],
    explanation: "Pola: Isim + Isim + Fi'il + Isim (Mudhaf + Mudhaf Ilayh + Fi'il + Maf'ul Bih)."
  },
  {
    unitNum: 7,
    unitName: "Unit 7: Al-Sina'ah (Qalib 2)",
    unitArName: "الصِّنَاعَةُ",
    meaningMs: "Pakar arkeologi itu terkenal.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["عَالِمُ", "الآثَارِ", "مَشْهُورٌ"],
    options: [
      { w: "عَالِمُ", type: "isim" },
      { w: "الآثَارِ", type: "isim" },
      { w: "مَشْهُورٌ", type: "isim" },
      { w: "يَبْحَثُ", type: "fiil" }
    ],
    explanation: "Pola: Isim + Isim + Isim (Mudhaf + Mudhaf Ilayh + Khabar)."
  },
  {
    unitNum: 7,
    unitName: "Unit 7: Al-Sina'ah (Qalib 3)",
    unitArName: "الصِّنَاعَةُ",
    meaningMs: "Dewan mesyuarat yang besar itu bersih.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["قَاعَةُ", "الاجْتِمَاعِ", "الكَبِيرَةُ", "نَظِيفَةٌ"],
    options: [
      { w: "قَاعَةُ", type: "isim" },
      { w: "الاجْتِمَاعِ", type: "isim" },
      { w: "الكَبِيرَةُ", type: "isim" },
      { w: "نَظِيفَةٌ", type: "isim" },
      { w: "تَقَعُ", type: "fiil" }
    ],
    explanation: "Pola: Isim + Isim + Isim + Isim (Mudhaf + Mudhaf Ilayh + Na'at + Khabar)."
  },

  // UNIT 8
  {
    unitNum: 8,
    unitName: "Unit 8: Al-Riyadah (Qalib 1)",
    unitArName: "الرِّيَاضَةُ",
    meaningMs: "Penuntut ilmu itu menghafal Al-Quran.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "اسم", ms: "Isim" },
      { ar: "فعل", ms: "Fi'il" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["طَالِبُ", "العِلْمِ", "يَحْفَظُ", "القُرْآنَ"],
    options: [
      { w: "طَالِبُ", type: "isim" },
      { w: "العِلْمِ", type: "isim" },
      { w: "يَحْفَظُ", type: "fiil" },
      { w: "القُرْآنَ", type: "isim" },
      { w: "فِي", type: "harf" }
    ],
    explanation: "Pola: Isim + Isim + Fi'il + Isim (Mudhaf + Mudhaf Ilayh + Fi'il + Maf'ul Bih)."
  },
  {
    unitNum: 8,
    unitName: "Unit 8: Al-Riyadah (Qalib 2)",
    unitArName: "الرِّيَاضَةُ",
    meaningMs: "Imam itu berdoa untuk sekalian orang Islam.",
    patterns: [
      { ar: "اسم", ms: "Isim" },
      { ar: "فعل", ms: "Fi'il" },
      { ar: "حرف", ms: "Harf" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["الإِمَامُ", "يَدْعُو", "لِلْمُسْلِمِينَ", "بِالخَيْرِ"],
    options: [
      { w: "الإِمَامُ", type: "isim" },
      { w: "يَدْعُو", type: "fiil" },
      { w: "لِلْمُسْلِمِينَ", type: "harf" },
      { w: "بِالخَيْرِ", type: "isim" },
      { w: "صَالِحٌ", type: "isim" }
    ],
    explanation: "Pola: Isim + Fi'il + Harf + Isim (Mubtada' + Fi'il + Jar Majrur)."
  },
  {
    unitNum: 8,
    unitName: "Unit 8: Al-Riyadah (Qalib 3)",
    unitArName: "الرِّيَاضَةُ",
    meaningMs: "Orang beriman itu telah solat di dalam masjid.",
    patterns: [
      { ar: "فعل", ms: "Fi'il" },
      { ar: "اسم", ms: "Isim" },
      { ar: "حرف", ms: "Harf" },
      { ar: "اسم", ms: "Isim" }
    ],
    correctAns: ["صَلَّى", "المُؤْمِنُ", "فِي", "المَسْجِدِ"],
    options: [
      { w: "صَلَّى", type: "fiil" },
      { w: "المُؤْمِنُ", type: "isim" },
      { w: "فِي", type: "harf" },
      { w: "المَسْجِدِ", type: "isim" },
      { w: "خَاشِعٌ", type: "isim" }
    ],
    explanation: "Pola: Fi'il + Isim + Harf + Isim (Fi'il Madhi + Fa'il + Jar Majrur)."
  }
];

export interface QuestionSetMeta {
  id: number;
  title: string;
  badge: string;
  desc: string;
  isMonochrome?: boolean;
  data: LevelQuestion[];
  bonusData: LevelQuestion[];
}

export const allQuestionSets: QuestionSetMeta[] = [
  {
    id: 1,
    title: "Mudah A: Kosa Kata Asas (Dengan Terjemahan)",
    badge: "Mudah A",
    desc: "24 soalan qawalib merangkumi Unit 1 - 8 berserta bantuan makna mufradat.",
    data: set1GameData,
    bonusData: set1BonusData
  },
  {
    id: 2,
    title: "Mudah B: Kosa Kata Variasi (Dengan Terjemahan)",
    badge: "Mudah B",
    desc: "24 soalan qawalib variasi kosa kata baharu berserta bantuan makna mufradat.",
    data: set2GameData,
    bonusData: set1BonusData
  },
  {
    id: 3,
    title: "Mencabar A: Kosa Kata Tulen (Tanpa Terjemahan)",
    badge: "Mencabar A",
    desc: "24 soalan qawalib tulen bahasa Arab tanpa makna mufradat.",
    data: set3GameData,
    bonusData: set1BonusData
  },
  {
    id: 4,
    title: "Mencabar B: Nahu Lanjutan (Tanpa Terjemahan)",
    badge: "Mencabar B",
    desc: "24 soalan cabaran kosa kata & nahu tulen bahasa Arab tanpa makna mufradat.",
    data: set4GameData,
    bonusData: set1BonusData
  },
  {
    id: 5,
    title: "Set E: Ujian Nahu Komprehensif (Tanpa Tona Warna)",
    badge: "Set E",
    desc: "24 soalan qawalib merangkumi kesemua 24 acuan Unit 1 - 8 tanpa bantuan tona warna (ujian kemahiran nahu tulen).",
    isMonochrome: true,
    data: set5GameData,
    bonusData: set1BonusData
  }
];
