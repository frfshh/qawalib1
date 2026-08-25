import { IrabWordDetail, LevelQuestion } from '../types';

/**
 * Helper to analyze and generate rich I'rab concepts and Harakat rules
 * for syllabus questions.
 */
export function getSentenceIrabAnalysis(question: LevelQuestion): IrabWordDetail[] {
  if (question.irabDetails && question.irabDetails.length > 0) {
    return question.irabDetails;
  }

  const words = question.correctAns;
  const patterns = question.patterns;

  return words.map((w, idx) => {
    const pattern = patterns[idx];
    const isFirstWord = idx === 0;
    const isSecondWord = idx === 1;
    const isLastWord = idx === words.length - 1;

    // Detect Harakat from the Arabic string
    let harakatSymbol = 'ُ';
    let harakatName = 'Dhammah (ُ) - Baris Hadapan';
    let irabStatus = "Marfu' (مَرْفُوع)";
    let role = "Isim (اسم)";
    let reason = "Mendapat baris hadapan kerana kedudukan marfu'.";

    // 1. Fi'il detection
    if (w.startsWith('يَ') || w.startsWith('يُ') || w.startsWith('تَ') || w.startsWith('تُ') || pattern?.ar?.includes('فعل') || pattern?.ms?.toLowerCase().includes('fi')) {
      if (w.endsWith('ُ')) {
        role = "Fi'il Mudhari' (فِعْلٌ مُضَارِعٌ)";
        harakatSymbol = 'ُ';
        harakatName = 'Dhammah (ُ) - Baris Hadapan';
        irabStatus = "Marfu' (مَرْفُوع)";
        reason = "Fi'il Mudhari' berbaris hadapan (Dhammah) kerana tidak didahului oleh amil nasab atau jazam.";
      } else if (w.endsWith('َ')) {
        role = "Fi'il Madhi (فِعْلٌ مَاضٍ)";
        harakatSymbol = 'َ';
        harakatName = 'Fathah (َ) - Baris Atas';
        irabStatus = "Mabni 'alal Fath (مَبْنِيٌّ عَلَى الفَتْحِ)";
        reason = "Fi'il Madhi adalah mabni di atas baris atas (Fathah) pada asalnya.";
      } else {
        role = "Fi'il (فِعْل)";
        harakatSymbol = 'ُ';
        harakatName = 'Dhammah (ُ)';
        irabStatus = "Marfu' (مَرْفُوع)";
        reason = "Kata kerja dalam binaan ayat.";
      }
    }
    // 2. Harf Jar detection
    else if (['فِي', 'عَلَى', 'مِنْ', 'إِلَى', 'عَنْ', 'بِـ', 'لِـ', 'مِنَ', 'بِ'].includes(w) || pattern?.ar?.includes('حرف') || pattern?.ms?.toLowerCase().includes('harf')) {
      role = "Harf Jar (حَرْفُ جَرٍّ)";
      harakatSymbol = w.endsWith('ْ') ? 'ْ' : w.endsWith('ِ') ? 'ِ' : 'َ';
      harakatName = w.endsWith('ْ') ? 'Sukun (ْ) - Baris Mati' : w.endsWith('ِ') ? 'Kasrah (ِ) - Baris Bawah' : 'Mabni';
      irabStatus = "Mabni (مَبْنِيٌّ لَا مَحَلَّ لَهُ مِنَ الإِعْرَابِ)";
      reason = "Harf Jar adalah kata sendi nama yang membarisbawahkan (men-jarkan) isim selepasnya.";
    }
    // 3. Isim Majrur (Word immediately after Harf Jar)
    else if (idx > 0 && (['فِي', 'عَلَى', 'مِنْ', 'إِلَى', 'عَنْ', 'بِـ', 'لِـ', 'مِنَ', 'بِ'].includes(words[idx - 1]) || patterns[idx - 1]?.ms?.toLowerCase().includes('harf'))) {
      role = "Isim Majrur (اِسْمٌ مَجْرُورٌ)";
      harakatSymbol = 'ِ';
      harakatName = 'Kasrah (ِ) - Baris Bawah';
      irabStatus = "Majrur (مَجْرُورٌ)";
      reason = "Wajib berbaris bawah (Kasrah) kerana didahului oleh Harf Jar sebelumnya.";
    }
    // 4. Jumlah Ismiyyah: Mubtada' & Khabar
    else if (patterns.length === 2 && patterns[0].ms === 'Isim' && patterns[1].ms === 'Isim') {
      if (isFirstWord) {
        role = "Mubtada' (مُبْتَدَأٌ)";
        harakatSymbol = 'ُ';
        harakatName = 'Dhammah (ُ) - Baris Hadapan';
        irabStatus = "Marfu' (مَرْفُوعٌ)";
        reason = "Isim yang memulakan ayat (Mubtada') wajib Marfu' dengan tanda Dhammah.";
      } else {
        role = "Khabar (خَبَرٌ)";
        harakatSymbol = w.endsWith('ٌ') ? 'ٌ' : 'ُ';
        harakatName = 'Tanwin Dhammah (ٌ) / Dhammah (ُ)';
        irabStatus = "Marfu' (مَرْفُوعٌ)";
        reason = "Khabar menerangkan keadaan Mubtada' dan wajib Marfu' dengan tanda Dhammah/Tanwin.";
      }
    }
    // 5. Fa'il (Subject / Pelaku)
    else if (idx === 1 && (patterns[0]?.ms?.toLowerCase().includes('fi') || words[0].startsWith('ي') || words[0].startsWith('ت') || words[0].endsWith('َ'))) {
      role = "Fa'il (فَاعِلٌ - Pelaku)";
      harakatSymbol = 'ُ';
      harakatName = 'Dhammah (ُ) - Baris Hadapan';
      irabStatus = "Marfu' (مَرْفُوعٌ)";
      reason = "Fa'il (pelaku perbuatan) sentiasa Marfu' dengan tanda Dhammah di hujung perkataan.";
    }
    // 6. Maf'ul Bih (Object / Objek)
    else if (idx === 2 && (patterns[0]?.ms?.toLowerCase().includes('fi') || patterns[1]?.ms?.toLowerCase().includes('isim')) && !['فِي', 'عَلَى', 'مِنْ', 'إِلَى'].includes(words[1])) {
      role = "Maf'ul Bih (مَفْعُولٌ بِهِ - Objek)";
      harakatSymbol = 'َ';
      harakatName = 'Fathah (َ) - Baris Atas';
      irabStatus = "Mansub (مَنْصُوبٌ)";
      reason = "Maf'ul Bih (sasaran/objek perbuatan) wajib Mansub dengan tanda Fathah (baris atas).";
    }
    // 7. General Isim Mubtada' / Na'at
    else if (isFirstWord && pattern?.ms === 'Isim') {
      role = "Mubtada' (مُبْتَدَأٌ)";
      harakatSymbol = 'ُ';
      harakatName = 'Dhammah (ُ) - Baris Hadapan';
      irabStatus = "Marfu' (مَرْفُوعٌ)";
      reason = "Subjek permulaan ayat wajib Marfu' dengan tanda Dhammah.";
    }
    else {
      // Check ending harakat from string itself
      if (w.endsWith('ِ') || w.endsWith('ٍ')) {
        harakatSymbol = 'ِ';
        harakatName = 'Kasrah (ِ) - Baris Bawah';
        irabStatus = "Majrur (مَجْرُورٌ)";
        role = "Isim Majrur / Mudhaf Ilaih (مُضَافٌ إِلَيْهِ)";
        reason = "Berbaris bawah (Kasrah) kerana kedudukan Majrur atau sandaran Mudhaf Ilaih.";
      } else if (w.endsWith('َ') || w.endsWith('ً')) {
        harakatSymbol = 'َ';
        harakatName = 'Fathah (َ) - Baris Atas';
        irabStatus = "Mansub (مَنْصُوبٌ)";
        role = "Maf'ul Bih / Hal (مَفْعُولٌ بِهِ)";
        reason = "Berbaris atas (Fathah) kerana kedudukan Mansub.";
      } else {
        harakatSymbol = 'ُ';
        harakatName = 'Dhammah (ُ) - Baris Hadapan';
        irabStatus = "Marfu' (مَرْفُوعٌ)";
        role = "Isim Marfu' (اِسْمٌ مَرْفُوعٌ)";
        reason = "Berbaris hadapan (Dhammah) mengikut asas tanda I'rab isim.";
      }
    }

    return {
      word: w,
      role,
      harakat: harakatName,
      irabStatus,
      reason,
      correctHarakat: harakatSymbol,
      testOptions: ['ُ', 'َ', 'ِ', 'ْ']
    };
  });
}

/**
 * Returns a full meaningful Malay translation (Makna Mufidah) for the question.
 */
export function getMaknaMufidah(question: LevelQuestion): string {
  if (question.meaningMs && question.meaningMs.trim().length > 0) {
    return question.meaningMs;
  }

  // Pre-mapped dictionary for common sentences
  const sentenceKey = question.correctAns.join(' ');
  const meaningsMap: Record<string, string> = {
    // Set 1
    "البَيْتُ جَدِيدٌ": "Rumah itu baharu (Ayat berita sempurna memaklumkan keadaan rumah).",
    "المَدْرَسَةُ كَبِيرَةٌ": "Sekolah itu besar (Menerangkan sifat sekolah yang luas dan besar).",
    "يُنَظِّفُ الطَّالِبُ الفَصْلَ": "Murid itu sedang membersihkan bilik darjah.",
    "الطَّالِبُ يَقْرَأُ الكِتَابَ": "Pelajar itu sedang membaca buku tersebut.",
    "الوَلَدُ يَلْعَبُ": "Kanak-kanak lelaki itu sedang bermain.",
    "يَكْتُبُ التِّلْمِيذُ": "Murid itu sedang menulis (di dalam kelas).",
    "الكِتَابُ عَلَى المَكْتَبِ": "Buku itu terletak di atas meja.",
    "يَلْعَبُ الطَّالِبُ فِي المَلْعَبِ": "Pelajar itu sedang bermain di padang.",
    "القَلَمُ الجَدِيدُ عَلَى المَكْتَبِ": "Pen yang baharu itu terletak di atas meja.",
    "الطَّالِبُ يَذْهَبُ إِلَى المَدْرَسَةِ": "Pelajar itu sedang pergi ke sekolah.",
    "قَرَأَ الأُسْتَاذُ الكِتَابَ المُفِيدَ": "Guru lelaki itu telah membaca buku yang berfaedah.",
    "المُعَلِّمُ يُحِبُّ الطَّالِبَ المُجْتَهِدَ": "Guru menyukai murid yang rajin dan tekun.",
    "سَافَرَ الأَبُ إِلَى المَدِينَةِ": "Bapa telah bermusafir ke bandar.",
    "اللُّغَةُ العَرَبِيَّةُ جَمِيلَةٌ": "Bahasa Arab itu sangat indah.",
    "يَتَحَدَّثُ التِّلْمِيذُ بِاللُّغَةِ العَرَبِيَّةِ": "Murid itu bertutur dalam bahasa Arab dengan fasih.",
    "المُسَابَقَةُ فِي الفَصْلِ": "Pertandingan itu diadakan di dalam kelas.",
    "مَدِينَةُ المِهَنِ وَاسِعَةٌ": "Bandar kerjaya itu sangat luas.",
    "رَكِبَ الطَّلَبَةُ الحَافِلَةَ": "Para pelajar telah menaiki bas sekolah.",
    "يُصَلِّي المُسْلِمُ فِي المَسْجِدِ": "Orang Islam itu menunaikan solat di dalam masjid.",
    "يَوْمُ العِيدِ جَمِيلٌ": "Hari raya itu sangat indah dan meriah.",
    "الطَّعَامُ لَذِيذٌ جِدّاً": "Makanan itu sangat lazat dan enak.",
    "الأَبُ يَأْكُلُ الغَدَاءَ": "Bapa sedang menikmati makan tengah hari.",
    "الوَلَدُ يَجْلِسُ عَلَى الكُرْسِيِّ": "Budak lelaki itu sedang duduk di atas kerusi.",
    "شَرِبَ الضَّيْفُ مِنَ المَاءِ": "Tetamu itu telah meminum air.",

    // Set 2
    "المَسْجِدُ نَظِيفٌ": "Masjid itu bersih dan terjaga.",
    "الغُرْفَةُ وَاسِعَةٌ": "Bilik itu luas dan selesa.",
    "يَغْسِلُ الوَلَدُ الثَّوْبَ": "Budak lelaki itu sedang mencuci pakaian.",
    "المُعَلِّمُ يَشْرَحُ الدَّرْسَ": "Guru sedang menerangkan pelajaran kepada murid.",
    "البِنْتُ تَجْلِسُ": "Kanak-kanak perempuan itu sedang duduk.",
    "يَرْكُضُ اللَّاعِبُ": "Pemain itu sedang berlari laju.",
    "المِسْطَرَةُ فِي الحَقِيبَةِ": "Pembaris itu berada di dalam beg.",
    "يَجْلِسُ المُدِيرُ فِي المَكْتَبِ": "Pengetua sedang duduk di dalam pejabat.",
    "الحَاسُوبُ الجَدِيدُ عَلَى الطَّاوِلَةِ": "Komputer baharu itu terletak di atas meja.",
    "الأُسْتَاذُ يَرْجِعُ إِلَى البَيْتِ": "Guru itu sedang pulang ke rumah.",
    "فَتَحَ الحَارِسُ البَابَ الكَبِيرَ": "Pengawal telah membuka pintu yang besar.",
    "الرَّسَّامُ يَرْسُمُ الصُّورَةَ الجَمِيلَةَ": "Pelukis sedang melukis gambar yang indah.",
    "سَافَرَ التَّاجِرُ إِلَى القَرْيَةِ": "Peniaga itu telah bermusafir ke kampung.",
    "الطَّبِيبُ مَاهِرٌ": "Doktor itu sangat mahir dan cekap.",
    "المَرِيضُ يَتَنَاوَلُ الدَّوَاءَ المُفِيدَ": "Pesakit itu sedang mengambil ubat yang berfaedah.",
    "نَظَرَ الزَّائِرُ إِلَى الأَسَدِ": "Pelawat itu telah melihat ke arah singa.",
    "القِرْدُ يَقْفِزُ عَلَى الشَّجَرَةِ": "Monyet itu sedang melompat di atas pokok.",
    "اشْتَرَى الأَبُ الحَقِيبَةَ": "Ayah telah membeli sebuah beg baharu.",
    "السُّوقُ مُزْدَحِمٌ": "Pasar itu sangat sesak dan ramai orang.",
    "الأُخْتُ تَأْكُلُ الحَلْوَى": "Kakak/Adik perempuan sedang makan manisan enak.",
    "الطَّالِبَةُ تَجْلِسُ فِي المَقْصَفِ": "Pelajar perempuan itu sedang duduk di kantin.",
    "أَكَلَ الرَّجُلُ مِنَ الفَاكِهَةِ": "Lelaki itu telah memakan buah-buahan segar.",

    // Set 3
    "المَكْتَبُ جَمِيلٌ": "Meja itu cantik dan tersusun kemas.",
    "المَكْتَبَةُ نَظِيفَةٌ": "Perpustakaan itu bersih dan tenang.",
    "يُرَتِّبُ التِّلْمِيذُ الأَدَوَاتِ": "Murid itu menyusun peralatan tulis dengan rapi.",
    "المُهَنْدِسُ يَبْنِي المَبْنَى": "Jurutera itu sedang membina bangunan yang megah.",
    "الشُّرْطِيُّ يَعْمَلُ": "Pegawai polis itu sedang menjalankan tugas.",
    "يَضْحَكُ الصَّدِيقُ": "Sahabat itu sedang ketawa riang.",
    "القَلَمُ فِي المِقْلَمَةِ": "Pen itu disimpan di dalam bekas pensel.",
    "يَمْشِي الأُسْتَاذُ فِي السَّاحَةِ": "Guru itu sedang berjalan di dataran perhimpunan.",
    "الكِتَابُ المُفِيدُ فِي المَكْتَبَةِ": "Buku yang berfaedah itu terdapat di dalam perpustakaan.",
    "المُسْلِمُ يَمْشِي إِلَى المَسْجِدِ": "Orang Islam itu berjalan menuju ke masjid.",
    "سَمِعَ الوَلَدُ النَّصِيحَةَ الجَمِيلَةَ": "Budak lelaki itu telah mendengar nasihat yang baik.",
    "الطَّالِبُ يَكْتُبُ الرِّسَالَةَ الطَّوِيلَةَ": "Murid itu sedang menulis surat yang panjang.",
    "ذَهَبَ المُدِيرُ إِلَى المُؤْتَمَرِ": "Pengetua telah pergi menghadiri persidangan.",
    "المُمَرِّضَةُ نَشِيطَةٌ": "Jururawat itu rajin dan cergas membantu pesakit.",
    "الوَلَدُ يَشْرَبُ العَصِيرَ اللَّذِيذَ": "Kanak-kanak lelaki itu sedang meminum jus yang lazat.",
    "رَأَى الطِّفْلُ إِلَى الفِيلِ": "Kanak-kanak itu telah melihat kepada gajah di taman.",
    "الطَّائِرُ يَطِيرُ فِي السَّمَاءِ": "Burung itu sedang terbang tinggi di angkasa.",
    "بَاعَ التَّاجِرُ القَمِيصَ": "Peniaga itu telah menjual kemeja pakaian.",
    "الدُّكَّانُ قَرِيبٌ": "Kedai itu terletak berhampiran.",
    "الضَّيْفُ يَجْلِسُ عَلَى الأَرِيكَةِ": "Tetamu itu sedang duduk selesa di atas sofa.",
    "شَرِبَ الوَلَدُ مِنَ الشَّايِ": "Budak itu telah meminum air teh hangat.",

    // 30 Soalan Bonus Ekstrim
    "الحَدِيقَةُ جَمِيلَةٌ وَاسِعَةٌ": "Taman itu sangat cantik dan luas saujana memandang.",
    "يَنْجَحُ الطَّالِبُ فِي الِامْتِحَانِ": "Pelajar itu berjaya cemerlang dalam peperiksaan.",
    "المُعَلِّمُ يَدْخُلُ إِلَى الفَصْلِ": "Guru sedang melangkah masuk ke dalam bilik darjah.",
    "يَقْرَأُ التِّلْمِيذُ الكِتَابَ المُفِيدَ": "Murid itu membaca buku yang amat berfaedah.",
    "السَّيَّارَةُ الجَدِيدَةُ أَمَامَ المَدْرَسَةِ": "Kereta yang baharu itu diparkir di hadapan sekolah.",
    "يُسَاعِدُ الوَلَدُ الأُمَّ فِي المَطْبَخِ": "Kanak-kanak lelaki itu membantu ibunya di dapur.",
    "المَسْجِدُ كَبِيرٌ نَظِيفٌ": "Masjid itu besar, tersergam indah dan sentiasa bersih.",
    "يَكْتُبُ الشَّاعِرُ القَصِيدَةَ الرَّائِعَةَ": "Penyair itu sedang mengarang bait syair yang hebat.",
    "الطَّالِبَةُ تَرْسُمُ فِي الكُرَّاسَةِ": "Pelajar perempuan itu melukis di dalam buku lukisan.",
    "يَشْرَبُ الضَّيْفُ القَهْوَةَ اللَّذِيذَةَ": "Tetamu itu sedang menikmati secawan kopi yang lazat.",
    "يُصَلِّي المُؤْمِنُ فِي اللَّيْلِ": "Orang yang beriman itu sedang menunaikan solat pada waktu malam.",
    "الطَّبِيبُ يُعَالِجُ المَرِيضَ فِي المُسْتَشْفَى": "Doktor sedang merawat pesakit di hospital.",
    "رَكِبَ الوَلَدُ القِطَارَ السَّرِيعَ": "Kanak-kanak itu telah menaiki kereta api laju.",
    "العِلْمُ نُورٌ لِـ الإِنْسَانِ": "Ilmu itu adalah penyuluh cahaya bagi kehidupan manusia.",
    "تَلْعَبُ البِنْتُ فِي الحَدِيقَةِ": "Kanak-kanak perempuan itu sedang bermain riang di taman.",
    "يَغْرِسُ الفَلَّاحُ الشَّجَرَةَ فِي المَزْرَعَةِ": "Petani itu menanam anak pokok di kebun ladang.",
    "البَابُ مَفْتُوحٌ لِـ الزَّائِرِ": "Pintu masuk terbuka luas menyambut para pelawat.",
    "يَسْتَمِعُ التِّلْمِيذُ إِلَى النَّصِيحَةِ": "Murid itu mendengar nasihat guru dengan penuh perhatian.",
    "المَدْرَسَةُ نَظِيفَةٌ مُنَظَّمَةٌ": "Sekolah itu sentiasa bersih dan tersusun rapi.",
    "يَبْنِي البَنَّاءُ المَنْزِلَ الكَبِيرَ": "Tukang bina sedang membina sebuah rumah kediaman yang besar.",
    "القَلَمُ الجَدِيدُ فِي المِقْلَمَةِ": "Pen yang baharu itu disimpan rapi di dalam bekas pensel.",
    "يُنَظِّفُ العَامِلُ الشَّارِعَ فِي الصَّبَاحِ": "Pekerja itu membersihkan jalan raya pada waktu pagi.",
    "الأُمُّ تَطْبُخُ الطَّعَامَ اللَّذِيذَ": "Ibu sedang memasak hidangan makanan yang lazat.",
    "يَرْفَعُ الجُنْدِيُّ العَلَمَ فِي السَّاحَةِ": "Askar menaikkan bendera megah di dataran perhimpunan.",
    "الحَافِلَةُ وَاقِفَةٌ فِي المَحَطَّةِ": "Bas sedang berhenti mengambil penumpang di stesen.",
    "يَفْهَمُ الطَّالِبُ الدَّرْسَ": "Pelajar itu memahami pelajaran yang diajar dengan pantas.",
    "الكِتَابُ الصَّغِيرُ عَلَى الطَّاوِلَةِ": "Buku yang kecil itu terletak elok di atas meja.",
    "يَنْظُرُ الوَلَدُ إِلَى التِّلْفَازِ": "Kanak-kanak itu sedang menonton rancangan televisyen.",
    "الزَّهْرَةُ جَمِيلَةٌ فِي الحَدِيقَةِ": "Bunga itu kembang mekar dan sangat cantik di taman.",
    "يَجْتَهِدُ الصَّدِيقُ فِي الدِّرَاسَةِ": "Sahabat itu berusaha bersungguh-sungguh dalam pengajiannya."
  };

  return meaningsMap[sentenceKey] || `Susunan ayat Arab lengkap membawa maksud: "${question.correctAns.join(' ')}" secara mufidah.`;
}

/**
 * Removes ending Arabic diacritics/vowels (Dhammah, Fathah, Kasrah, Sukun, Tanwin)
 * from a word to prevent giving away the answer in quiz mode.
 */
export function stripEndingVowel(word: string): string {
  if (!word) return '';
  // Strips trailing Arabic diacritics (\u064B-\u0652: fathatan, dammatan, kasratan, fatha, damma, kasra, sukun)
  // Preserves base consonants and letters
  return word.replace(/[\u064B\u064C\u064D\u064E\u064F\u0650\u0652]+$/g, '');
}
