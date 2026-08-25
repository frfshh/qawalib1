import { LevelQuestion } from '../types';

export const vocabMeaning: Record<string, string> = {
  // Unit 1 & 2: Kawasan Sekolah & Kelas
  "البَيْتُ": "rumah",
  "جَدِيدٌ": "baharu",
  "فِي": "di / dalam",
  "قَرَأَ": "telah membaca",
  "المَدْرَسَةُ": "sekolah",
  "كَبِيرَةٌ": "besar",
  "ذَهَبَ": "telah pergi",
  "عَلَى": "di atas",
  "الطَّالِبُ": "murid lelaki",
  "الطَّالِبَةُ": "murid perempuan",
  "يَقْرَأُ": "sedang membaca",
  "الكِتَابَ": "buku",
  "مِنْ": "daripada / dari",
  "الوَلَدُ": "budak lelaki",
  "البِنْتُ": "budak perempuan",
  "يَلْعَبُ": "sedang bermain",
  "يَكْتُبُ": "sedang menulis",
  "التِّلْمِيذُ": "murid",
  "كِتَابٌ": "sebuah buku",
  "إِلَى": "ke / ke arah",
  "الكِتَابُ": "buku",
  "المَكْتَبِ": "meja",
  "المَكْتَبُ": "meja",
  "القَلَمُ": "sebatang pen",
  "القَلَمِ": "pen",
  "الجَدِيدُ": "yang baharu",
  "يَذْهَبُ": "sedang pergi",
  "الْمَدْرَسَةِ": "sekolah",
  "الأُسْتَاذُ": "guru lelaki",
  "الأُسْتَاذَةُ": "guru perempuan",
  "المُعَلِّمُ": "guru",
  "المُفِيدَ": "yang berfaedah",
  "المُفِيدُ": "berfaedah",
  "يُحِبُّ": "menyukai / gemar",
  "الحَلْوَى": "manisan / gula-gula",
  "اللَّذِيذَةَ": "yang lazat / enak",
  "اللَّذِيذُ": "lazat",
  "الحَقِيبَةِ": "beg",
  "الحَقِيبَةُ": "beg",
  "سَافَرَ": "telah bermusafir",
  "المَدِينَةِ": "bandar / kota",
  "المَدِينَةُ": "bandar",
  "بِـ": "dengan",
  "اللُّغَةُ": "bahasa",
  "العَرَبِيَّةُ": "Arab",
  "العَرَبِيَّةَ": "bahasa Arab",
  "جَمِيلَةٌ": "indah / cantik",
  "جَمِيلٌ": "indah / tampan",
  "يَتَحَدَّثُ": "bercakap / bertutur",
  "المُسَابَقَةُ": "pertandingan",
  "الفَصْلِ": "kelas",
  "الفَصْلُ": "kelas",
  "مَدِينَةُ": "bandar / kota",
  "المِهَنِ": "pekerjaan / kerjaya",
  "وَاسِعَةٌ": "luas",
  "وَاسِعٌ": "luas",
  "رَكِبَ": "telah menaiki",
  "الطَّلَبَةُ": "para pelajar",
  "الحَافِلَةَ": "bas",
  "الحَافِلَةُ": "bas",
  "المُسْلِمُ": "orang Islam",
  "يُصَلِّي": "menunaikan solat",
  "المَسْجِدِ": "masjid",
  "المَسْجِدُ": "masjid",
  "يَوْمُ": "hari",
  "العِيدِ": "raya",
  "الطَّعَامُ": "makanan",
  "لَذِيذٌ": "lazat / enak",
  "جِدّاً": "sangat",
  "الأَبُ": "ayah",
  "الأُمُّ": "ibu",
  "يَأْكُلُ": "sedang makan",
  "الغَدَاءَ": "makan tengah hari",
  "الغَدَاءُ": "makan tengah hari",
  "يَجْلِسُ": "sedang duduk",
  "الكُرْسِيِّ": "kerusi",
  "الكُرْسِيُّ": "kerusi",
  "شَرِبَ": "telah minum",
  "الضَّيْفُ": "tetamu",
  "مِنَ": "daripada",
  "المَاءِ": "air",
  "المَاءُ": "air",
  "الحَدِيقَةُ": "taman",
  "الحَدِيقَةِ": "taman",
  "يَنْجَحُ": "sedang berjaya",
  "الِامْتِحَانِ": "peperiksaan",
  "يَدْخُلُ": "sedang masuk",
  "قَلَمٌ": "sebatang pen",
  "يَعْمَلُ": "sedang bekerja",
  "أَكَلَ": "telah makan",
  
  // Pelbagai Mufradat Tambahan Silibus
  "المَكْتَبَةُ": "perpustakaan",
  "المَكْتَبَةِ": "perpustakaan",
  "المُخْتَبَرُ": "makmal sains",
  "المُخْتَبَرِ": "makmal sains",
  "المَقْصَفُ": "kantin",
  "المَقْصَفِ": "kantin",
  "السَّاحَةُ": "dataran perhimpunan",
  "المَلْعَبُ": "padang permainan",
  "المَلْعَبِ": "padang",
  "المِسْطَرَةُ": "pembaris",
  "المِمْسَحَةُ": "pemadam",
  "السَّبُّورَةُ": "papan hitam / putih",
  "السَّبُّورَةِ": "papan tulis",
  "الحَاسُوبُ": "komputer",
  "الحَاسُوبِ": "komputer",
  "الشُّرْطِيُّ": "polis",
  "الطَّبِيبُ": "doktor",
  "المُهَنْدِسُ": "jurutera",
  "المُدِيرُ": "pengetua / guru besar",
  "الرَّسَّامُ": "pelukis",
  "يَرْسُمُ": "sedang melukis",
  "الصُّورَةَ": "gambar",
  "يَسْتَمِعُ": "mendengar",
  "إِلَى_النَّصِيحَةِ": "nasihat",
  "يَفْتَحُ": "membuka",
  "البَابَ": "pintu",
  "البَابُ": "pintu",
  "يُنَظِّفُ": "sedang membersihkan",
  "الغُرْفَةَ": "bilik",
  "نَظِيفٌ": "bersih",
  "نَظِيفَةٌ": "bersih",
  "صَغِيرٌ": "kecil",
  "صَغِيرَةٌ": "kecil",
  "سَرِيعٌ": "pantas / laju",
  "مُجْتَهِدٌ": "rajin / tekun",
  "مُجْتَهِدَةٌ": "rajin (perempuan)",
  "يَرْجِعُ": "sedang pulang",
  "الرُّزَّ": "nasi",
  "الدَّجَاجَ": "ayam",
  "الشَّايَ": "teh",
  "الفَاكِهَةَ": "buah-buahan",
  "الصَّبَاحِ": "waktu pagi",
  "المَسَاءِ": "waktu petang",
  "عَنْ": "tentang / daripada",
  "الشَّاعِرُ": "penyair / pemuisi",
  "القَصِيدَةَ": "puisi / syair",
  "الرَّائِعَةَ": "yang indah / hebat",
  "الكُرَّاسَةِ": "buku lukisan / latihan",
  "القَهْوَةَ": "kopi",
  "القِطَارَ": "kereta api",
  "السَّرِيعَ": "yang laju / pantas",
  "الإِنْسَانِ": "manusia",
  "الفَلَّاحُ": "petani / peladang",
  "المَزْرَعَةِ": "ladang / kebun",
  "الزَّائِرِ": "pelawat / pengunjung",
  "مَفْتُوحٌ": "terbuka",
  "مُنَظَّمَةٌ": "tersusun / teratur",
  "البَنَّاءُ": "tukang bina / tukang rumah",
  "المَنْزِلَ": "rumah kediaman",
  "المِقْلَمَةِ": "kotak pensel",
  "العَامِلُ": "pekerja",
  "الشَّارِعَ": "jalan raya",
  "تَطْبُخُ": "sedang memasak",
  "الجُنْدِيُّ": "askar / tentera",
  "العَلَمَ": "bendera",
  "وَاقِفَةٌ": "sedang berhenti / berdiri",
  "المَحَطَّةِ": "stesen perhentian",
  "يَفْهَمُ": "sedang memahami",
  "الدَّرْسَ": "pelajaran",
  "يَنْظُرُ": "sedang melihat / memandang",
  "التِّلْفَازِ": "televisyen",
  "الزَّهْرَةُ": "bunga",
  "يَجْتَهِدُ": "berusaha bersungguh-sungguh",
  "الصَّدِيقُ": "sahabat / rakan",
  "الدِّرَاسَةِ": "pembelajaran / pengajian",
  "أَمَامَ": "di hadapan",
  "المَطْبَخِ": "dapur",
  "لِـ": "untuk / bagi",
  "مَعَ": "bersama / dengan"
};

// 24 SOALAN SILIBUS KSSM LENGKAP MERANGKUMI KESEMUA 24 QAWALIB (UNIT 1 - UNIT 8)
export const gameData: LevelQuestion[] = [
  // 1. UNIT 1: اسم + اسم
  {
    unitNum: 1,
    unitName: "Membersihkan Kelas",
    unitArName: "تَنْظِيفُ الفَصْلِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["البَيْتُ", "جَدِيدٌ"],
    options: [
      { w: "البَيْتُ", type: "isim", msMeaning: "rumah" },
      { w: "جَدِيدٌ", type: "isim", msMeaning: "baharu" },
      { w: "فِي", type: "harf", msMeaning: "di dalam" },
      { w: "قَرَأَ", type: "fiil", msMeaning: "telah membaca" }
    ],
    explanation: "Susunan Jumlah Ismiyyah ringkas: Mubtada' + Khabar (اسم + اسم)."
  },
  // 2. UNIT 1: اسم + اسم + اسم
  {
    unitNum: 1,
    unitName: "Membersihkan Kelas",
    unitArName: "تَنْظِيفُ الفَصْلِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الفَصْلُ", "النَّظِيفُ", "جَمِيلٌ"],
    options: [
      { w: "الفَصْلُ", type: "isim", msMeaning: "kelas" },
      { w: "النَّظِيفُ", type: "isim", msMeaning: "bersih" },
      { w: "جَمِيلٌ", type: "isim", msMeaning: "cantik" },
      { w: "يَكْتُبُ", type: "fiil", msMeaning: "menulis" }
    ],
    explanation: "Mubtada' + Na'at (Sifat) + Khabar (اسم + اسم + اسم)."
  },
  // 3. UNIT 1: اسم + فعل + اسم
  {
    unitNum: 1,
    unitName: "Membersihkan Kelas",
    unitArName: "تَنْظِيفُ الفَصْلِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الطَّالِبُ", "يَقْرَأُ", "الكِتَابَ"],
    options: [
      { w: "الطَّالِبُ", type: "isim", msMeaning: "murid" },
      { w: "يَقْرَأُ", type: "fiil", msMeaning: "membaca" },
      { w: "الكِتَابَ", type: "isim", msMeaning: "buku" },
      { w: "عَلَى", type: "harf", msMeaning: "di atas" }
    ],
    explanation: "Jumlah Ismiyyah: Mubtada' + Fi'il Mudhari' + Maf'ul Bih (اسم + فعل + اسم)."
  },

  // 4. UNIT 2: اسم + فعل
  {
    unitNum: 2,
    unitName: "Bersiar-siar Sekitar Sekolah",
    unitArName: "التَّجَوُّلُ حَوْلَ المَدْرَسَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }],
    correctAns: ["الوَلَدُ", "يَلْعَبُ"],
    options: [
      { w: "الوَلَدُ", type: "isim", msMeaning: "budak lelaki" },
      { w: "يَلْعَبُ", type: "fiil", msMeaning: "sedang bermain" },
      { w: "القَلَمُ", type: "isim", msMeaning: "pen" },
      { w: "فِي", type: "harf", msMeaning: "di" }
    ],
    explanation: "Jumlah Ismiyyah dengan khabar fi'il (اسم + فعل)."
  },
  // 5. UNIT 2: فعل + اسم
  {
    unitNum: 2,
    unitName: "Bersiar-siar Sekitar Sekolah",
    unitArName: "التَّجَوُّلُ حَوْلَ المَدْرَسَةِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَكْتُبُ", "التِّلْمِيذُ"],
    options: [
      { w: "يَكْتُبُ", type: "fiil", msMeaning: "sedang menulis" },
      { w: "التِّلْمِيذُ", type: "isim", msMeaning: "murid" },
      { w: "كِتَابٌ", type: "isim", msMeaning: "buku" },
      { w: "إِلَى", type: "harf", msMeaning: "ke" }
    ],
    explanation: "Jumlah Fi'liyyah: Fi'il + Fa'il (فعل + اسم)."
  },
  // 6. UNIT 2: اسم + حرف + اسم
  {
    unitNum: 2,
    unitName: "Bersiar-siar Sekitar Sekolah",
    unitArName: "التَّجَوُّلُ حَوْلَ المَدْرَسَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الكِتَابُ", "عَلَى", "المَكْتَبِ"],
    options: [
      { w: "الكِتَابُ", type: "isim", msMeaning: "buku" },
      { w: "عَلَى", type: "harf", msMeaning: "di atas" },
      { w: "المَكْتَبِ", type: "isim", msMeaning: "meja" },
      { w: "يَأْكُلُ", type: "fiil", msMeaning: "makan" }
    ],
    explanation: "Mubtada' + Khabar Syibh Jumlah Jar Majrur (اسم + حرف + اسم)."
  },

  // 7. UNIT 3: اسم + اسم + حرف + اسم
  {
    unitNum: 3,
    unitName: "Majlis Sambutan",
    unitArName: "حَفْلَةُ عِيدِ المِيلَادِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["القَلَمُ", "الجَدِيدُ", "عَلَى", "المَكْتَبِ"],
    options: [
      { w: "القَلَمُ", type: "isim", msMeaning: "pen" },
      { w: "الجَدِيدُ", type: "isim", msMeaning: "baharu" },
      { w: "عَلَى", type: "harf", msMeaning: "di atas" },
      { w: "المَكْتَبِ", type: "isim", msMeaning: "meja" },
      { w: "ذَهَبَ", type: "fiil", msMeaning: "telah pergi" }
    ],
    explanation: "Mubtada' + Sifat + Jar Majrur (اسم + اسم + حرف + اسم)."
  },
  // 8. UNIT 3: اسم + فعل + حرف + اسم
  {
    unitNum: 3,
    unitName: "Majlis Sambutan",
    unitArName: "حَفْلَةُ عِيدِ المِيلَادِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الطَّالِبُ", "يَذْهَبُ", "إِلَى", "المَدْرَسَةِ"],
    options: [
      { w: "الطَّالِبُ", type: "isim", msMeaning: "murid" },
      { w: "يَذْهَبُ", type: "fiil", msMeaning: "sedang pergi" },
      { w: "إِلَى", type: "harf", msMeaning: "ke arah" },
      { w: "المَدْرَسَةِ", type: "isim", msMeaning: "sekolah" }
    ],
    explanation: "Mubtada' + Fi'il + Jar Majrur (اسم + فعل + حرف + اسم)."
  },
  // 9. UNIT 3: فعل + اسم + اسم + فعل
  {
    unitNum: 3,
    unitName: "Majlis Sambutan",
    unitArName: "حَفْلَةُ عِيدِ المِيلَادِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }],
    correctAns: ["قَرَأَ", "الأُسْتَاذُ", "الكِتَابَ", "يَشْرَحُ"],
    options: [
      { w: "قَرَأَ", type: "fiil", msMeaning: "telah membaca" },
      { w: "الأُسْتَاذُ", type: "isim", msMeaning: "guru" },
      { w: "الكِتَابَ", type: "isim", msMeaning: "buku" },
      { w: "يَشْرَحُ", type: "fiil", msMeaning: "menerangkan" },
      { w: "فِي", type: "harf", msMeaning: "dalam" }
    ],
    explanation: "Jumlah Fi'liyyah bersambung Hal fi'liyyah (فعل + اسم + اسم + فعل)."
  },
  // 10. UNIT 3: اسم + فعل + اسم + اسم
  {
    unitNum: 3,
    unitName: "Majlis Sambutan",
    unitArName: "حَفْلَةُ عِيدِ المِيلَادِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الوَلَدُ", "يُحِبُّ", "الحَلْوَى", "اللَّذِيذَةَ"],
    options: [
      { w: "الوَلَدُ", type: "isim", msMeaning: "budak lelaki" },
      { w: "يُحِبُّ", type: "fiil", msMeaning: "menyukai" },
      { w: "الحَلْوَى", type: "isim", msMeaning: "manisan" },
      { w: "اللَّذِيذَةَ", type: "isim", msMeaning: "yang enak" },
      { w: "عَلَى", type: "harf", msMeaning: "atas" }
    ],
    explanation: "Mubtada' + Fi'il + Maf'ul Bih + Sifat (اسم + فعل + اسم + اسم)."
  },

  // 11. UNIT 4: اسم + حرف + اسم + اسم
  {
    unitNum: 4,
    unitName: "Diari Harian Murid",
    unitArName: "يَوْمِيَّاتُ الطَّالِبِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["القَلَمُ", "فِي", "الحَقِيبَةِ", "الجَدِيدَةِ"],
    options: [
      { w: "القَلَمُ", type: "isim", msMeaning: "pen" },
      { w: "فِي", type: "harf", msMeaning: "di dalam" },
      { w: "الحَقِيبَةِ", type: "isim", msMeaning: "beg" },
      { w: "الجَدِيدَةِ", type: "isim", msMeaning: "baharu" },
      { w: "يَكْتُبُ", type: "fiil", msMeaning: "menulis" }
    ],
    explanation: "Mubtada' + Harf Jar + Isim Majrur + Sifat (اسم + حرف + اسم + اسم)."
  },
  // 12. UNIT 4: فعل + حرف + اسم + اسم
  {
    unitNum: 4,
    unitName: "Diari Harian Murid",
    unitArName: "يَوْمِيَّاتُ الطَّالِبِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["سَافَرَ", "إِلَى", "المَدِينَةِ", "المُنَوَّرَةِ"],
    options: [
      { w: "سَافَرَ", type: "fiil", msMeaning: "telah musafir" },
      { w: "إِلَى", type: "harf", msMeaning: "ke" },
      { w: "المَدِينَةِ", type: "isim", msMeaning: "kota" },
      { w: "المُنَوَّرَةِ", type: "isim", msMeaning: "bercahaya" },
      { w: "قَلَمٌ", type: "isim", msMeaning: "pen" }
    ],
    explanation: "Fi'il + Harf Jar + Isim Majrur + Sifat (فعل + حرف + اسم + اسم)."
  },
  // 13. UNIT 4: فعل + اسم + حرف + اسم
  {
    unitNum: 4,
    unitName: "Diari Harian Murid",
    unitArName: "يَوْمِيَّاتُ الطَّالِبِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَكْتُبُ", "الطَّالِبُ", "بِـ", "القَلَمِ"],
    options: [
      { w: "يَكْتُبُ", type: "fiil", msMeaning: "sedang menulis" },
      { w: "الطَّالِبُ", type: "isim", msMeaning: "murid" },
      { w: "بِـ", type: "harf", msMeaning: "dengan" },
      { w: "القَلَمِ", type: "isim", msMeaning: "pen" }
    ],
    explanation: "Fi'il + Fa'il + Harf Jar + Isim Majrur (فعل + اسم + حرف + اسم)."
  },

  // 14. UNIT 5: اسم + اسم + اسم
  {
    unitNum: 5,
    unitName: "Minggu Bahasa Arab",
    unitArName: "أُسْبُوعُ اللُّغَةِ العَرَبِيَّةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["اللُّغَةُ", "العَرَبِيَّةُ", "جَمِيلَةٌ"],
    options: [
      { w: "اللُّغَةُ", type: "isim", msMeaning: "bahasa" },
      { w: "العَرَبِيَّةُ", type: "isim", msMeaning: "Arab" },
      { w: "جَمِيلَةٌ", type: "isim", msMeaning: "indah" },
      { w: "ذَهَبَ", type: "fiil", msMeaning: "telah pergi" }
    ],
    explanation: "Mubtada' + Sifat + Khabar (اسم + اسم + اسم)."
  },
  // 15. UNIT 5: اسم + اسم + فعل + اسم
  {
    unitNum: 5,
    unitName: "Minggu Bahasa Arab",
    unitArName: "أُسْبُوعُ اللُّغَةِ العَرَبِيَّةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الطَّالِبُ", "المَاهِرُ", "يَتَحَدَّثُ", "العَرَبِيَّةَ"],
    options: [
      { w: "الطَّالِبُ", type: "isim", msMeaning: "pelajar" },
      { w: "المَاهِرُ", type: "isim", msMeaning: "mahir" },
      { w: "يَتَحَدَّثُ", type: "fiil", msMeaning: "bertutur" },
      { w: "العَرَبِيَّةَ", type: "isim", msMeaning: "bahasa Arab" }
    ],
    explanation: "Mubtada' + Sifat + Fi'il + Maf'ul Bih (اسم + اسم + فعل + اسم)."
  },
  // 16. UNIT 5: اسم + اسم + حرف + اسم
  {
    unitNum: 5,
    unitName: "Minggu Bahasa Arab",
    unitArName: "أُسْبُوعُ اللُّغَةِ العَرَبِيَّةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المُسَابَقَةُ", "الكَبِيرَةُ", "فِي", "الفَصْلِ"],
    options: [
      { w: "المُسَابَقَةُ", type: "isim", msMeaning: "pertandingan" },
      { w: "الكَبِيرَةُ", type: "isim", msMeaning: "besar" },
      { w: "فِي", type: "harf", msMeaning: "dalam" },
      { w: "الفَصْلِ", type: "isim", msMeaning: "kelas" },
      { w: "قَرَأَ", type: "fiil", msMeaning: "telah membaca" }
    ],
    explanation: "Mubtada' + Sifat + Jar Majrur (اسم + اسم + حرف + اسم)."
  },

  // 17. UNIT 6: اسم + اسم + اسم + اسم
  {
    unitNum: 6,
    unitName: "Lawatan Kota Kerjaya",
    unitArName: "الرِّحْلَةُ إِلَى مَدِينَةِ المِهَنِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["مَدِينَةُ", "المِهَنِ", "التَّرْفِيهِيَّةِ", "وَاسِعَةٌ"],
    options: [
      { w: "مَدِينَةُ", type: "isim", msMeaning: "kota" },
      { w: "المِهَنِ", type: "isim", msMeaning: "kerjaya" },
      { w: "التَّرْفِيهِيَّةِ", type: "isim", msMeaning: "rekreasi" },
      { w: "وَاسِعَةٌ", type: "isim", msMeaning: "luas" },
      { w: "رَكِبَ", type: "fiil", msMeaning: "menaiki" }
    ],
    explanation: "Mudhaf + Mudhaf Ilaih + Na'at + Khabar (اسم + اسم + اسم + اسم)."
  },
  // 18. UNIT 6: فعل + اسم + اسم + اسم
  {
    unitNum: 6,
    unitName: "Lawatan Kota Kerjaya",
    unitArName: "الرِّحْلَةُ إِلَى مَدِينَةِ المِهَنِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["رَكِبَ", "الطَّلَبَةُ", "الحَافِلَةَ", "السَّرِيعَةَ"],
    options: [
      { w: "رَكِبَ", type: "fiil", msMeaning: "telah menaiki" },
      { w: "الطَّلَبَةُ", type: "isim", msMeaning: "para pelajar" },
      { w: "الحَافِلَةَ", type: "isim", msMeaning: "bas" },
      { w: "السَّرِيعَةَ", type: "isim", msMeaning: "laju" },
      { w: "عَلَى", type: "harf", msMeaning: "atas" }
    ],
    explanation: "Fi'il + Fa'il + Maf'ul Bih + Sifat (فعل + اسم + اسم + اسم)."
  },

  // 19. UNIT 7: اسم + اسم + فعل + اسم
  {
    unitNum: 7,
    unitName: "Persediaan Hari Raya",
    unitArName: "الاسْتِعْدَادُ لِيَوْمِ العِيدِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المُسْلِمُ", "الصَّالِحُ", "يُصَلِّي", "العِيدَ"],
    options: [
      { w: "المُسْلِمُ", type: "isim", msMeaning: "orang Islam" },
      { w: "الصَّالِحُ", type: "isim", msMeaning: "soleh" },
      { w: "يُصَلِّي", type: "fiil", msMeaning: "menunaikan solat" },
      { w: "العِيدَ", type: "isim", msMeaning: "hari raya" }
    ],
    explanation: "Mubtada' + Sifat + Fi'il + Maf'ul Bih (اسم + اسم + فعل + اسم)."
  },
  // 20. UNIT 7: اسم + اسم + اسم
  {
    unitNum: 7,
    unitName: "Persediaan Hari Raya",
    unitArName: "الاسْتِعْدَادُ لِيَوْمِ العِيدِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَوْمُ", "العِيدِ", "سَعِيدٌ"],
    options: [
      { w: "يَوْمُ", type: "isim", msMeaning: "hari" },
      { w: "العِيدِ", type: "isim", msMeaning: "raya" },
      { w: "سَعِيدٌ", type: "isim", msMeaning: "bahagia" },
      { w: "يَعْمَلُ", type: "fiil", msMeaning: "bekerja" }
    ],
    explanation: "Mudhaf + Mudhaf Ilaih + Khabar (اسم + اسم + اسم)."
  },

  // 21. UNIT 8: اسم + اسم + اسم + اسم
  {
    unitNum: 8,
    unitName: "Makan Tengah Hari",
    unitArName: "الغَدَاءُ فِي المَطْعَمِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["طَعَامُ", "الغَدَاءِ", "اللَّذِيذُ", "جَاهِزٌ"],
    options: [
      { w: "طَعَامُ", type: "isim", msMeaning: "makanan" },
      { w: "الغَدَاءِ", type: "isim", msMeaning: "tengah hari" },
      { w: "اللَّذِيذُ", type: "isim", msMeaning: "lazat" },
      { w: "جَاهِزٌ", type: "isim", msMeaning: "siap terhidang" },
      { w: "أَكَلَ", type: "fiil", msMeaning: "telah makan" }
    ],
    explanation: "Mudhaf + Mudhaf Ilaih + Na'at + Khabar (اسم + اسم + اسم + اسم)."
  },
  // 22. UNIT 8: اسم + اسم + فعل + اسم
  {
    unitNum: 8,
    unitName: "Makan Tengah Hari",
    unitArName: "الغَدَاءُ فِي المَطْعَمِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الأُمُّ", "الكَرِيمَةُ", "تَطْبُخُ", "الطَّعَامَ"],
    options: [
      { w: "الأُمُّ", type: "isim", msMeaning: "ibu" },
      { w: "الكَرِيمَةُ", type: "isim", msMeaning: "mulia" },
      { w: "تَطْبُخُ", type: "fiil", msMeaning: "sedang memasak" },
      { w: "الطَّعَامَ", type: "isim", msMeaning: "makanan" }
    ],
    explanation: "Mubtada' + Sifat + Fi'il + Maf'ul Bih (اسم + اسم + فعل + اسم)."
  },
  // 23. UNIT 8: اسم + فعل + حرف + اسم
  {
    unitNum: 8,
    unitName: "Makan Tengah Hari",
    unitArName: "الغَدَاءُ فِي المَطْعَمِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الوَلَدُ", "يَجْلِسُ", "عَلَى", "الكُرْسِيِّ"],
    options: [
      { w: "الوَلَدُ", type: "isim", msMeaning: "budak lelaki" },
      { w: "يَجْلِسُ", type: "fiil", msMeaning: "sedang duduk" },
      { w: "عَلَى", type: "harf", msMeaning: "di atas" },
      { w: "الكُرْسِيِّ", type: "isim", msMeaning: "kerusi" }
    ],
    explanation: "Mubtada' + Fi'il + Jar Majrur (اسم + فعل + حرف + اسم)."
  },
  // 24. UNIT 8: فعل + اسم + حرف + اسم
  {
    unitNum: 8,
    unitName: "Makan Tengah Hari",
    unitArName: "الغَدَاءُ فِي المَطْعَمِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["شَرِبَ", "الضَّيْفُ", "مِنَ", "المَاءِ"],
    options: [
      { w: "شَرِبَ", type: "fiil", msMeaning: "telah minum" },
      { w: "الضَّيْفُ", type: "isim", msMeaning: "tetamu" },
      { w: "مِنَ", type: "harf", msMeaning: "daripada" },
      { w: "المَاءِ", type: "isim", msMeaning: "air" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Jar Majrur (فعل + اسم + حرف + اسم)."
  }
];

// SOALAN BONUS EKSTRIM & MAKMAL ILMU (30 SOALAN LENGKAP)
export const bonusGameData: LevelQuestion[] = [
  // 1
  {
    unitNum: 9,
    unitName: "Bonus 1: Taman Ilmu",
    unitArName: "حَدِيقَةُ العِلْمِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الحَدِيقَةُ", "جَمِيلَةٌ", "وَاسِعَةٌ"],
    options: [
      { w: "الحَدِيقَةُ", type: "isim", msMeaning: "taman" },
      { w: "جَمِيلَةٌ", type: "isim", msMeaning: "cantik" },
      { w: "وَاسِعَةٌ", type: "isim", msMeaning: "luas" },
      { w: "يَلْعَبُ", type: "fiil", msMeaning: "bermain" }
    ],
    explanation: "Mubtada' diikuti Khabar dan Sifat (Na'at)."
  },
  // 2
  {
    unitNum: 9,
    unitName: "Bonus 2: Kejayaan Peperiksaan",
    unitArName: "النَّجَاحُ فِي الِامْتِحَانِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَنْجَحُ", "الطَّالِبُ", "فِي", "الِامْتِحَانِ"],
    options: [
      { w: "يَنْجَحُ", type: "fiil", msMeaning: "berjaya" },
      { w: "الطَّالِبُ", type: "isim", msMeaning: "pelajar" },
      { w: "فِي", type: "harf", msMeaning: "dalam" },
      { w: "الِامْتِحَانِ", type: "isim", msMeaning: "peperiksaan" }
    ],
    explanation: "Fi'il Mudhari' + Fa'il (Marfu') + Harf Jar + Isim Majrur (Kasrah)."
  },
  // 3
  {
    unitNum: 9,
    unitName: "Bonus 3: Dewan Pembelajaran",
    unitArName: "دُخُولُ الفَصْلِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المُعَلِّمُ", "يَدْخُلُ", "إِلَى", "الفَصْلِ"],
    options: [
      { w: "المُعَلِّمُ", type: "isim", msMeaning: "guru" },
      { w: "يَدْخُلُ", type: "fiil", msMeaning: "masuk" },
      { w: "إِلَى", type: "harf", msMeaning: "ke dalam" },
      { w: "الفَصْلِ", type: "isim", msMeaning: "kelas" }
    ],
    explanation: "Isim Mubtada' + Jumlah Fi'liyyah Khabar (Fi'il + Jar Majrur)."
  },
  // 4
  {
    unitNum: 9,
    unitName: "Bonus 4: Membaca Buku Berfaedah",
    unitArName: "قِرَاءَةُ الكِتَابِ المُفِيدِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَقْرَأُ", "التِّلْمِيذُ", "الكِتَابَ", "المُفِيدَ"],
    options: [
      { w: "يَقْرَأُ", type: "fiil", msMeaning: "membaca" },
      { w: "التِّلْمِيذُ", type: "isim", msMeaning: "murid" },
      { w: "الكِتَابَ", type: "isim", msMeaning: "buku" },
      { w: "المُفِيدَ", type: "isim", msMeaning: "yang berfaedah" }
    ],
    explanation: "Fi'il Mudhari' + Fa'il + Maf'ul Bih (Mansub) + Na'at (Mansub)."
  },
  // 5
  {
    unitNum: 9,
    unitName: "Bonus 5: Kenderaan Di Hadapan Sekolah",
    unitArName: "السَّيَّارَةُ الجَدِيدَةُ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["السَّيَّارَةُ", "الجَدِيدَةُ", "أَمَامَ", "المَدْرَسَةِ"],
    options: [
      { w: "السَّيَّارَةُ", type: "isim", msMeaning: "kereta" },
      { w: "الجَدِيدَةُ", type: "isim", msMeaning: "baharu" },
      { w: "أَمَامَ", type: "harf", msMeaning: "di hadapan" },
      { w: "المَدْرَسَةِ", type: "isim", msMeaning: "sekolah" },
      { w: "شَرِبَ", type: "fiil", msMeaning: "minum" }
    ],
    explanation: "Mubtada' + Sifat + Zharf Makan + Mudhaf Ilaih (Majrur Kasrah)."
  },
  // 6
  {
    unitNum: 9,
    unitName: "Bonus 6: Membantu Ibu Di Dapur",
    unitArName: "مُسَاعَدَةُ الأُمِّ فِي المَطْبَخِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يُسَاعِدُ", "الوَلَدُ", "الأُمَّ", "فِي", "المَطْبَخِ"],
    options: [
      { w: "يُسَاعِدُ", type: "fiil", msMeaning: "menolong" },
      { w: "الوَلَدُ", type: "isim", msMeaning: "budak lelaki" },
      { w: "الأُمَّ", type: "isim", msMeaning: "ibu" },
      { w: "فِي", type: "harf", msMeaning: "di dalam" },
      { w: "المَطْبَخِ", type: "isim", msMeaning: "dapur" }
    ],
    explanation: "Fi'il Mudhari' + Fa'il + Maf'ul Bih + Harf Jar + Isim Majrur."
  },
  // 7
  {
    unitNum: 9,
    unitName: "Bonus 7: Kebersihan Masjid",
    unitArName: "نَظَافَةُ المَسْجِدِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المَسْجِدُ", "كَبِيرٌ", "نَظِيفٌ"],
    options: [
      { w: "المَسْجِدُ", type: "isim", msMeaning: "masjid" },
      { w: "كَبِيرٌ", type: "isim", msMeaning: "besar" },
      { w: "نَظِيفٌ", type: "isim", msMeaning: "bersih" },
      { w: "قَامَ", type: "fiil", msMeaning: "berdiri" }
    ],
    explanation: "Mubtada' + Khabar Awwal + Khabar Thani (Marfu' Tanwin Dhammah)."
  },
  // 8
  {
    unitNum: 9,
    unitName: "Bonus 8: Menulis Syair Indah",
    unitArName: "كِتَابَةُ القَصِيدَةِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَكْتُبُ", "الشَّاعِرُ", "القَصِيدَةَ", "الرَّائِعَةَ"],
    options: [
      { w: "يَكْتُبُ", type: "fiil", msMeaning: "menulis" },
      { w: "الشَّاعِرُ", type: "isim", msMeaning: "penyair" },
      { w: "القَصِيدَةَ", type: "isim", msMeaning: "puisi/syair" },
      { w: "الرَّائِعَةَ", type: "isim", msMeaning: "yang hebat" }
    ],
    explanation: "Fi'il Mudhari' + Fa'il + Maf'ul Bih Mansub + Sifat Mansub."
  },
  // 9
  {
    unitNum: 9,
    unitName: "Bonus 9: Melukis Di Buku Lukisan",
    unitArName: "الرَّسْمُ فِي الكُرَّاسَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الطَّالِبَةُ", "تَرْسُمُ", "فِي", "الكُرَّاسَةِ"],
    options: [
      { w: "الطَّالِبَةُ", type: "isim", msMeaning: "murid perempuan" },
      { w: "تَرْسُمُ", type: "fiil", msMeaning: "sedang melukis" },
      { w: "فِي", type: "harf", msMeaning: "di dalam" },
      { w: "الكُرَّاسَةِ", type: "isim", msMeaning: "buku lukisan" }
    ],
    explanation: "Mubtada' Muannats + Fi'il Mudhari' Muannats + Harf Jar + Isim Majrur."
  },
  // 10
  {
    unitNum: 9,
    unitName: "Bonus 10: Minuman Kopi Lazat",
    unitArName: "شُرْبُ القَهْوَةِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَشْرَبُ", "الضَّيْفُ", "القَهْوَةَ", "اللَّذِيذَةَ"],
    options: [
      { w: "يَشْرَبُ", type: "fiil", msMeaning: "minum" },
      { w: "الضَّيْفُ", type: "isim", msMeaning: "tetamu" },
      { w: "القَهْوَةَ", type: "isim", msMeaning: "kopi" },
      { w: "اللَّذِيذَةَ", type: "isim", msMeaning: "yang lazat" }
    ],
    explanation: "Fi'il + Fa'il Marfu' + Maf'ul Bih Mansub + Na'at Mansub."
  },
  // 11
  {
    unitNum: 9,
    unitName: "Bonus 11: Ibadah Malam Mukmin",
    unitArName: "قِيَامُ اللَّيْلِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يُصَلِّي", "المُؤْمِنُ", "فِي", "اللَّيْلِ"],
    options: [
      { w: "يُصَلِّي", type: "fiil", msMeaning: "menunaikan solat" },
      { w: "المُؤْمِنُ", type: "isim", msMeaning: "orang beriman" },
      { w: "فِي", type: "harf", msMeaning: "pada" },
      { w: "اللَّيْلِ", type: "isim", msMeaning: "waktu malam" }
    ],
    explanation: "Fi'il Mudhari' + Fa'il (Dhammah) + Harf Jar + Isim Majrur (Kasrah)."
  },
  // 12
  {
    unitNum: 9,
    unitName: "Bonus 12: Doktor Merawat Pesakit",
    unitArName: "عِلَاجُ المَرِيضِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الطَّبِيبُ", "يُعَالِجُ", "المَرِيضَ", "فِي", "المُسْتَشْفَى"],
    options: [
      { w: "الطَّبِيبُ", type: "isim", msMeaning: "doktor" },
      { w: "يُعَالِجُ", type: "fiil", msMeaning: "merawat" },
      { w: "المَرِيضَ", type: "isim", msMeaning: "pesakit" },
      { w: "فِي", type: "harf", msMeaning: "di" },
      { w: "المُسْتَشْفَى", type: "isim", msMeaning: "hospital" }
    ],
    explanation: "Mubtada' + Fi'il Mudhari' Khabar + Maf'ul Bih + Jar Majrur."
  },
  // 13
  {
    unitNum: 9,
    unitName: "Bonus 13: Menaiki Kereta Api Laju",
    unitArName: "رُكُوبُ القِطَارِ السَّرِيعِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["رَكِبَ", "الوَلَدُ", "القِطَارَ", "السَّرِيعَ"],
    options: [
      { w: "رَكِبَ", type: "fiil", msMeaning: "telah menaiki" },
      { w: "الوَلَدُ", type: "isim", msMeaning: "kanak-kanak" },
      { w: "القِطَارَ", type: "isim", msMeaning: "kereta api" },
      { w: "السَّرِيعَ", type: "isim", msMeaning: "yang laju" }
    ],
    explanation: "Fi'il Madhi + Fa'il + Maf'ul Bih + Sifat."
  },
  // 14
  {
    unitNum: 9,
    unitName: "Bonus 14: Ilmu Cahaya Kehidupan",
    unitArName: "العِلْمُ نُورٌ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["العِلْمُ", "نُورٌ", "لِـ", "الإِنْسَانِ"],
    options: [
      { w: "العِلْمُ", type: "isim", msMeaning: "ilmu" },
      { w: "نُورٌ", type: "isim", msMeaning: "cahaya" },
      { w: "لِـ", type: "harf", msMeaning: "bagi/untuk" },
      { w: "الإِنْسَانِ", type: "isim", msMeaning: "manusia" }
    ],
    explanation: "Mubtada' + Khabar + Harf Jar 'لِـ' + Isim Majrur."
  },
  // 15
  {
    unitNum: 9,
    unitName: "Bonus 15: Bermain Di Taman Permainan",
    unitArName: "اللَّعِبُ فِي الحَدِيقَةِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["تَلْعَبُ", "البِنْتُ", "فِي", "الحَدِيقَةِ"],
    options: [
      { w: "تَلْعَبُ", type: "fiil", msMeaning: "sedang bermain" },
      { w: "البِنْتُ", type: "isim", msMeaning: "budak perempuan" },
      { w: "فِي", type: "harf", msMeaning: "di dalam" },
      { w: "الحَدِيقَةِ", type: "isim", msMeaning: "taman" }
    ],
    explanation: "Jumlah Fi'liyyah Muannats: Fi'il + Fa'il + Jar Majrur."
  },
  // 16
  {
    unitNum: 9,
    unitName: "Bonus 16: Menanam Pokok Di Ladang",
    unitArName: "غَرْسُ الشَّجَرَةِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَغْرِسُ", "الفَلَّاحُ", "الشَّجَرَةَ", "فِي", "المَزْرَعَةِ"],
    options: [
      { w: "يَغْرِسُ", type: "fiil", msMeaning: "menanam" },
      { w: "الفَلَّاحُ", type: "isim", msMeaning: "petani" },
      { w: "الشَّجَرَةَ", type: "isim", msMeaning: "pokok" },
      { w: "فِي", type: "harf", msMeaning: "di" },
      { w: "المَزْرَعَةِ", type: "isim", msMeaning: "kebun/ladang" }
    ],
    explanation: "Fi'il Mudhari' + Fa'il + Maf'ul Bih + Harf Jar + Isim Majrur."
  },
  // 17
  {
    unitNum: 9,
    unitName: "Bonus 17: Pintu Terbuka Untuk Pelawat",
    unitArName: "البَابُ المَفْتُوحُ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["البَابُ", "مَفْتُوحٌ", "لِـ", "الزَّائِرِ"],
    options: [
      { w: "البَابُ", type: "isim", msMeaning: "pintu" },
      { w: "مَفْتُوحٌ", type: "isim", msMeaning: "terbuka" },
      { w: "لِـ", type: "harf", msMeaning: "untuk" },
      { w: "الزَّائِرِ", type: "isim", msMeaning: "pelawat" }
    ],
    explanation: "Mubtada' + Khabar Isim Maf'ul + Jar Majrur."
  },
  // 18
  {
    unitNum: 9,
    unitName: "Bonus 18: Mendengar Nasihat Guru",
    unitArName: "الاسْتِمَاعُ إِلَى النَّصِيحَةِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَسْتَمِعُ", "التِّلْمِيذُ", "إِلَى", "النَّصِيحَةِ"],
    options: [
      { w: "يَسْتَمِعُ", type: "fiil", msMeaning: "mendengar" },
      { w: "التِّلْمِيذُ", type: "isim", msMeaning: "murid" },
      { w: "إِلَى", type: "harf", msMeaning: "kepada" },
      { w: "النَّصِيحَةِ", type: "isim", msMeaning: "nasihat" }
    ],
    explanation: "Fi'il Mudhari' + Fa'il Marfu' + Harf Jar 'إِلَى' + Isim Majrur Kasrah."
  },
  // 19
  {
    unitNum: 9,
    unitName: "Bonus 19: Sekolah Bersih & Teratur",
    unitArName: "المَدْرَسَةُ النَّظِيفَةُ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["المَدْرَسَةُ", "نَظِيفَةٌ", "مُنَظَّمَةٌ"],
    options: [
      { w: "المَدْرَسَةُ", type: "isim", msMeaning: "sekolah" },
      { w: "نَظِيفَةٌ", type: "isim", msMeaning: "bersih" },
      { w: "مُنَظَّمَةٌ", type: "isim", msMeaning: "tersusun rapi" },
      { w: "ذَهَبَ", type: "fiil", msMeaning: "pergi" }
    ],
    explanation: "Mubtada' Muannats + Khabar Awwal + Khabar Thani."
  },
  // 20
  {
    unitNum: 9,
    unitName: "Bonus 20: Tukang Bina Membina Rumah",
    unitArName: "بِنَاءُ المَنْزِلِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَبْنِي", "البَنَّاءُ", "المَنْزِلَ", "الكَبِيرَ"],
    options: [
      { w: "يَبْنِي", type: "fiil", msMeaning: "membina" },
      { w: "البَنَّاءُ", type: "isim", msMeaning: "tukang bina" },
      { w: "المَنْزِلَ", type: "isim", msMeaning: "rumah" },
      { w: "الكَبِيرَ", type: "isim", msMeaning: "yang besar" }
    ],
    explanation: "Fi'il Mudhari' + Fa'il Marfu' + Maf'ul Bih Mansub + Sifat Mansub."
  },
  // 21
  {
    unitNum: 9,
    unitName: "Bonus 21: Pen Baharu Di Bekas Pensel",
    unitArName: "القَلَمُ فِي المِقْلَمَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["القَلَمُ", "الجَدِيدُ", "فِي", "المِقْلَمَةِ"],
    options: [
      { w: "القَلَمُ", type: "isim", msMeaning: "pen" },
      { w: "الجَدِيدُ", type: "isim", msMeaning: "baharu" },
      { w: "فِي", type: "harf", msMeaning: "di dalam" },
      { w: "المِقْلَمَةِ", type: "isim", msMeaning: "kotak pensel" }
    ],
    explanation: "Mubtada' + Sifat + Khabar Syibh Jumlah (Jar Majrur)."
  },
  // 22
  {
    unitNum: 9,
    unitName: "Bonus 22: Pekerja Membersihkan Jalan",
    unitArName: "تَنْظِيفُ الشَّارِعِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يُنَظِّفُ", "العَامِلُ", "الشَّارِعَ", "فِي", "الصَّبَاحِ"],
    options: [
      { w: "يُنَظِّفُ", type: "fiil", msMeaning: "membersihkan" },
      { w: "العَامِلُ", type: "isim", msMeaning: "pekerja" },
      { w: "الشَّارِعَ", type: "isim", msMeaning: "jalan raya" },
      { w: "فِي", type: "harf", msMeaning: "pada" },
      { w: "الصَّبَاحِ", type: "isim", msMeaning: "waktu pagi" }
    ],
    explanation: "Fi'il Mudhari' + Fa'il + Maf'ul Bih + Jar Majrur."
  },
  // 23
  {
    unitNum: 9,
    unitName: "Bonus 23: Ibu Memasak Makanan Enak",
    unitArName: "طَبْخُ الطَّعَامِ الشَّهِيِّ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الأُمُّ", "تَطْبُخُ", "الطَّعَامَ", "اللَّذِيذَ"],
    options: [
      { w: "الأُمُّ", type: "isim", msMeaning: "ibu" },
      { w: "تَطْبُخُ", type: "fiil", msMeaning: "memasak" },
      { w: "الطَّعَامَ", type: "isim", msMeaning: "makanan" },
      { w: "اللَّذِيذَ", type: "isim", msMeaning: "yang lazat" }
    ],
    explanation: "Mubtada' + Jumlah Fi'liyyah Khabar + Maf'ul Bih + Na'at."
  },
  // 24
  {
    unitNum: 9,
    unitName: "Bonus 24: Askar Menaikkan Bendera",
    unitArName: "رَفْعُ العَلَمِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَرْفَعُ", "الجُنْدِيُّ", "العَلَمَ", "فِي", "السَّاحَةِ"],
    options: [
      { w: "يَرْفَعُ", type: "fiil", msMeaning: "menaikkan" },
      { w: "الجُنْدِيُّ", type: "isim", msMeaning: "askar/tentera" },
      { w: "العَلَمَ", type: "isim", msMeaning: "bendera" },
      { w: "فِي", type: "harf", msMeaning: "di" },
      { w: "السَّاحَةِ", type: "isim", msMeaning: "dataran" }
    ],
    explanation: "Fi'il + Fa'il + Maf'ul Bih Mansub + Jar Majrur."
  },
  // 25
  {
    unitNum: 9,
    unitName: "Bonus 25: Bas Berhenti Di Stesen",
    unitArName: "الحَافِلَةُ فِي المَحَطَّةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الحَافِلَةُ", "وَاقِفَةٌ", "فِي", "المَحَطَّةِ"],
    options: [
      { w: "الحَافِلَةُ", type: "isim", msMeaning: "bas" },
      { w: "وَاقِفَةٌ", type: "isim", msMeaning: "berhenti/berdiri" },
      { w: "فِي", type: "harf", msMeaning: "di" },
      { w: "المَحَطَّةِ", type: "isim", msMeaning: "stesen" }
    ],
    explanation: "Mubtada' Muannats + Khabar Muannats + Jar Majrur."
  },
  // 26
  {
    unitNum: 9,
    unitName: "Bonus 26: Memahami Pelajaran Pantas",
    unitArName: "فَهْمُ الدَّرْسِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَفْهَمُ", "الطَّالِبُ", "الدَّرْسَ"],
    options: [
      { w: "يَفْهَمُ", type: "fiil", msMeaning: "memahami" },
      { w: "الطَّالِبُ", type: "isim", msMeaning: "pelajar" },
      { w: "الدَّرْسَ", type: "isim", msMeaning: "pelajaran" },
      { w: "عَلَى", type: "harf", msMeaning: "atas" }
    ],
    explanation: "Fi'il Mudhari' + Fa'il Marfu' (Dhammah) + Maf'ul Bih (Fathah)."
  },
  // 27
  {
    unitNum: 9,
    unitName: "Bonus 27: Buku Kecil Di Atas Meja",
    unitArName: "الكِتَابُ عَلَى الطَّاوِلَةِ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الكِتَابُ", "الصَّغِيرُ", "عَلَى", "الطَّاوِلَةِ"],
    options: [
      { w: "الكِتَابُ", type: "isim", msMeaning: "buku" },
      { w: "الصَّغِيرُ", type: "isim", msMeaning: "yang kecil" },
      { w: "عَلَى", type: "harf", msMeaning: "di atas" },
      { w: "الطَّاوِلَةِ", type: "isim", msMeaning: "meja" }
    ],
    explanation: "Mubtada' + Sifat + Khabar Syibh Jumlah."
  },
  // 28
  {
    unitNum: 9,
    unitName: "Bonus 28: Menonton Rancangan Televisyen",
    unitArName: "مُشَاهَدَةُ التِّلْفَازِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَنْظُرُ", "الوَلَدُ", "إِلَى", "التِّلْفَازِ"],
    options: [
      { w: "يَنْظُرُ", type: "fiil", msMeaning: "melihat/menonton" },
      { w: "الوَلَدُ", type: "isim", msMeaning: "kanak-kanak" },
      { w: "إِلَى", type: "harf", msMeaning: "ke arah/kepada" },
      { w: "التِّلْفَازِ", type: "isim", msMeaning: "televisyen" }
    ],
    explanation: "Fi'il Mudhari' + Fa'il + Harf Jar + Isim Majrur."
  },
  // 29
  {
    unitNum: 9,
    unitName: "Bonus 29: Bunga Menawan Di Musim Bunga",
    unitArName: "الزَّهْرَةُ الجَمِيلَةُ",
    patterns: [{ ar: "اسم", ms: "Isim" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["الزَّهْرَةُ", "جَمِيلَةٌ", "فِي", "الحَدِيقَةِ"],
    options: [
      { w: "الزَّهْرَةُ", type: "isim", msMeaning: "bunga" },
      { w: "جَمِيلَةٌ", type: "isim", msMeaning: "cantik/indah" },
      { w: "فِي", type: "harf", msMeaning: "di dalam" },
      { w: "الحَدِيقَةِ", type: "isim", msMeaning: "taman" }
    ],
    explanation: "Mubtada' Muannats + Khabar + Jar Majrur."
  },
  // 30
  {
    unitNum: 9,
    unitName: "Bonus 30: Tekun Belajar Demi Masa Depan",
    unitArName: "الِاجْتِهَادُ فِي الدِّرَاسَةِ",
    patterns: [{ ar: "فعل", ms: "Fi'il" }, { ar: "اسم", ms: "Isim" }, { ar: "حرف", ms: "Harf" }, { ar: "اسم", ms: "Isim" }],
    correctAns: ["يَجْتَهِدُ", "الصَّدِيقُ", "فِي", "الدِّرَاسَةِ"],
    options: [
      { w: "يَجْتَهِدُ", type: "fiil", msMeaning: "berusaha tekun" },
      { w: "الصَّدِيقُ", type: "isim", msMeaning: "sahabat" },
      { w: "فِي", type: "harf", msMeaning: "dalam" },
      { w: "الدِّرَاسَةِ", type: "isim", msMeaning: "pembelajaran" }
    ],
    explanation: "Kemuncak Qawalib: Fi'il Mudhari' + Fa'il Marfu' + Harf Jar + Isim Majrur Kasrah."
  }
];
