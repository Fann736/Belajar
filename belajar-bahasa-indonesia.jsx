import { useState } from "react";

const palette = {
  bg: "#0f0e17",
  card: "#1a1830",
  accent: "#ff6b35",
  accent2: "#ffd166",
  accent3: "#06d6a0",
  accent4: "#118ab2",
  text: "#fffffe",
  muted: "#a7a9be",
  border: "#2d2b4e",
};

const TOPICS = [
  { id: "berita", label: "Teks Berita", emoji: "📰", color: palette.accent },
  { id: "fiksi", label: "Buku Fiksi & Nonfiksi", emoji: "📚", color: palette.accent2 },
  { id: "ulasan", label: "Teks Ulasan", emoji: "✍️", color: palette.accent3 },
  { id: "surat", label: "Surat Pribadi & Dinas", emoji: "✉️", color: palette.accent4 },
];

const FLASHCARDS = {
  berita: [
    { q: "Apa itu teks berita?", a: "Teks yang berisi informasi mengenai suatu peristiwa yang aktual, faktual, dan penting untuk diketahui masyarakat." },
    { q: "Sebutkan 3 ciri-ciri teks berita!", a: "① Berdasarkan fakta  ② Bersifat aktual (terbaru)  ③ Objektif (tidak memihak)" },
    { q: "Apa kepanjangan 5W+1H?", a: "What (apa), Who (siapa), When (kapan), Where (di mana), Why (mengapa), How (bagaimana)" },
    { q: "Apa fungsi fakta dalam berita?", a: "① Menjamin kebenaran informasi  ② Membuat berita lebih terpercaya  ③ Menghindari hoaks" },
    { q: "Apa itu konjungsi temporal? Beri contoh!", a: "Konjungsi yang menunjukkan hubungan waktu. Contoh: kemudian, setelah itu, sebelum, selanjutnya." },
    { q: "Apa struktur teks berita secara urut?", a: "① Judul  ② Teras berita (lead)  ③ Tubuh berita  ④ Ekor berita" },
    { q: "Apa itu ide pokok / gagasan utama?", a: "Gagasan utama yang menjadi dasar pengembangan sebuah paragraf. Biasanya ada di kalimat pertama (paragraf deduktif)." },
    { q: "Bagaimana cara menghindari hoaks?", a: "① Periksa sumber berita  ② Bandingkan dengan media terpercaya  ③ Jangan langsung share  ④ Pastikan fakta benar" },
    { q: "Konjungsi 'bahwa' digunakan untuk apa?", a: "Untuk menjelaskan isi pernyataan. Contoh: 'Polisi menjelaskan bahwa kecelakaan terjadi karena hujan deras.'" },
    { q: "Apa itu kalimat tunggal?", a: "Kalimat yang hanya memiliki SATU klausa. Contoh: 'Polisi menjaga gedung Balai Kota sejak pagi.'" },
    { q: "Apa itu kalimat majemuk?", a: "Kalimat yang memiliki DUA klausa atau lebih. Contoh: 'Ketika presiden datang, para polisi berpatroli di sekitar kawasan Jalan Merdeka.'" },
    { q: "Apa itu konjungsi kronologis? Beri contoh!", a: "Konjungsi yang menunjukkan urutan waktu/kejadian. Contoh: kemudian, lalu, setelah itu, pada akhirnya." },
    { q: "Apa itu konjungsi kausalitas? Beri contoh!", a: "Konjungsi yang menunjukkan sebab-akibat. Contoh: sebab, karena, oleh sebab itu. Contoh kalimat: 'Kebakaran terjadi karena kebocoran tabung gas.'" },
    { q: "Apa itu kata ganti/pronomina dalam teks berita?", a: "Kata yang merujuk pada kejadian yang dijelaskan. Teks berita memakai kata tunjuk: ini, itu, tersebut — BUKAN kata ganti orang seperti ia, dia, mereka." },
    { q: "Sebutkan 5 ciri kebahasaan teks berita/eksplanasi!", a: "① Kalimat tunggal  ② Kalimat majemuk  ③ Konjungsi kronologis (kemudian, lalu, setelah itu)  ④ Konjungsi kausalitas (sebab, karena, oleh sebab itu)  ⑤ Kata tunjuk (ini, itu, tersebut)" },
  ],
  fiksi: [
    { q: "Apa itu buku fiksi?", a: "Buku yang berisi cerita hasil imajinasi atau rekaan pengarang. Contoh: novel, cerpen, dongeng, fabel." },
    { q: "Apa itu buku nonfiksi?", a: "Buku yang berisi informasi berdasarkan fakta dan kenyataan. Contoh: biografi, buku pelajaran, ensiklopedia." },
    { q: "Apa perbedaan tujuan buku fiksi dan nonfiksi?", a: "Fiksi → bertujuan menghibur. Nonfiksi → bertujuan memberi informasi/pengetahuan." },
    { q: "Sebutkan 7 unsur intrinsik buku fiksi!", a: "① Tema  ② Tokoh  ③ Penokohan  ④ Alur  ⑤ Latar  ⑥ Sudut pandang  ⑦ Amanat" },
    { q: "Apa ciri-ciri buku nonfiksi?", a: "① Berdasarkan fakta  ② Bahasa lugas  ③ Bersifat informatif  ④ Dapat dipertanggungjawabkan" },
    { q: "Apa itu tokoh antagonis?", a: "Tokoh yang berperan sebagai pihak jahat / penentang tokoh utama (protagonis). Contoh: Bawang Merah dalam cerita Bawang Merah Bawang Putih." },
    { q: "Sebutkan jenis-jenis alur cerita!", a: "① Alur maju  ② Alur mundur (flashback)  ③ Alur campuran" },
    { q: "Apa itu amanat dalam cerita fiksi?", a: "Pesan moral atau pelajaran hidup yang ingin disampaikan pengarang kepada pembaca melalui cerita." },
    { q: "Apa itu latar dalam cerita?", a: "Latar adalah keterangan tentang waktu, tempat, dan suasana dalam cerita." },
    { q: "Apa itu cerita rakyat / legenda?", a: "Kisah turun-temurun yang disampaikan dari mulut ke mulut tentang asal-usul suatu tempat atau kejadian." },
    { q: "Apa urutan alur cerita yang benar?", a: "Orientasi → Komplikasi → Krisis → Resolusi → Koda" },
    { q: "Apa itu 'koda' dalam struktur cerita?", a: "Bagian penutup cerita yang menceritakan kehidupan akhir tokoh setelah konflik selesai." },
    { q: "Apa itu paragraf deduktif?", a: "Paragraf yang kalimat utamanya berada di AWAL paragraf, diikuti kalimat penjelas. Contoh: 'Hutan memiliki manfaat yang sangat besar...' (kalimat utama di awal)." },
    { q: "Apa itu paragraf induktif?", a: "Paragraf yang kalimat utamanya berada di AKHIR paragraf. Kalimat-kalimat sebelumnya adalah penjelas, lalu ditutup dengan simpulan/gagasan utama." },
    { q: "Apa itu paragraf campuran?", a: "Paragraf yang kalimat utamanya ada di AWAL dan AKHIR paragraf sekaligus. Kalimat akhir menegaskan kembali kalimat awal." },
    { q: "Paragraf: 'Masyarakat harus waspada DBD... Kewaspadaan masyarakat sangat diperlukan agar wabah tidak menyebar luas.' — Jenis paragrafnya?", a: "Campuran. Kalimat utama ada di awal ('harus waspada') dan ditegaskan kembali di akhir ('kewaspadaan sangat diperlukan')." },
    { q: "Paragraf: 'Rajin olahraga... makan bergizi... istirahat cukup... Jadi, pola hidup sehat sangat penting.' — Jenis paragrafnya?", a: "Induktif. Kalimat penjelas dulu di awal, simpulan/gagasan utama ada di akhir ('Jadi, pola hidup sehat...')." },
    { q: "Apa itu resensi?", a: "Suatu penilaian atau ulasan terhadap sebuah karya (buku, film, dll)." },
    { q: "Apa saja bagian-bagian resensi buku?", a: "① Identitas buku (judul, penulis, penerbit, tahun, tebal)  ② Ringkasan buku  ③ Kelebihan buku  ④ Kekurangan buku" },
    { q: "Apa itu kelebihan dalam resensi buku?", a: "Bagian yang berisi hal-hal positif / keunggulan buku tersebut bagi pembaca." },
    { q: "Apa itu kekurangan dalam resensi buku?", a: "Bagian yang berisi kelemahan atau kekurangan buku, misalnya: istilah asing tidak ada penjelasannya, bahasa sulit, dll." },
  ],
  ulasan: [
    { q: "Apa itu teks ulasan?", a: "Teks yang berisi penilaian, tanggapan, atau kritik terhadap suatu karya." },
    { q: "Apa isi bagian kritik dalam teks ulasan?", a: "Berisi kelemahan atau kekurangan karya. Contoh: 'Alur cerita kurang berkembang pada bagian akhir.'" },
    { q: "Apa isi bagian saran dalam teks ulasan?", a: "Berisi masukan untuk memperbaiki karya. Contoh: 'Penulis sebaiknya menambahkan konflik agar cerita lebih menarik.'" },
    { q: "Apa perbedaan kritik dan saran?", a: "Kritik = menunjukkan kelemahan karya. Saran = memberikan masukan/solusi perbaikan." },
    { q: "Contoh amanat dalam cerita fiksi itu seperti apa?", a: "Contoh: 'Semenjak itu si kelinci tak lagi meremehkan hewan lain dan meminta maaf kepada kura-kura.' — Ini menunjukkan pesan moral tentang kerendahan hati." },
    { q: "Apa saja bagian-bagian resensi buku?", a: "① Identitas buku (judul, penulis, penerbit, tahun, tebal)  ② Ringkasan isi buku  ③ Kelebihan buku  ④ Kekurangan buku" },
    { q: "Buku 'Satwa Terancam Bahaya' — siapa penulisnya dan diterbitkan tahun berapa?", a: "Penulis: Jen Green. Penerbit: Pakar Raya. Tahun: 2006. Tebal: 32 halaman." },
    { q: "Apa kelebihan buku 'Satwa Terancam Bahaya'?", a: "Membantu siswa dengan kemampuan baca berbeda dan dapat dijadikan bahan diskusi kelompok di kelas." },
    { q: "Apa kekurangan buku 'Satwa Terancam Bahaya'?", a: "Masih terdapat beberapa istilah asing yang tidak ada penjelasannya sehingga menimbulkan tanda tanya bagi pembaca." },
  ],
  surat: [
    { q: "Apa itu surat pribadi?", a: "Surat yang dibuat untuk keperluan pribadi dan bersifat tidak resmi, ditujukan ke teman, keluarga, atau kerabat." },
    { q: "Sebutkan struktur surat pribadi!", a: "① Tempat dan tanggal surat  ② Salam pembuka  ③ Isi surat  ④ Salam penutup  ⑤ Nama pengirim" },
    { q: "Apa itu surat dinas?", a: "Surat resmi yang digunakan oleh instansi atau lembaga untuk kepentingan kedinasan." },
    { q: "Sebutkan unsur-unsur surat dinas!", a: "Kop surat, nomor surat, tanggal, lampiran, perihal, alamat tujuan, salam pembuka, isi, salam penutup, tanda tangan pejabat." },
    { q: "Apa ciri bahasa surat dinas?", a: "Menggunakan bahasa baku, singkat, jelas, sopan, dan ejaan yang benar." },
    { q: "Apa perbedaan surat pribadi dan surat dinas?", a: "Surat pribadi: tidak resmi, bahasa santai. Surat dinas: resmi, bahasa baku, digunakan lembaga/instansi." },
  ],
};

// All 40 questions from the PDF
const QUIZ = [
  { q: "Buku nonfiksi dibuat berdasarkan....", opts: ["Opini", "Pendapat", "Pandangan orang", "Fakta"], ans: 3, topic: "fiksi" },
  { q: "Salah satu contoh dari buku nonfiksi adalah....", opts: ["Fabel", "Biografi", "Novel", "Puisi"], ans: 1, topic: "fiksi" },
  { q: "Buku nonfiksi banyak memberikan .... bagi para pembacanya.", opts: ["Pengetahuan", "Hikmah", "Pelajaran hidup", "Motivasi"], ans: 0, topic: "fiksi" },
  { q: "Indonesia kaya dengan kisah turun-temurun dari mulut ke mulut yang dikenal dengan...", opts: ["Dongeng", "Cerita rakyat", "Legenda", "Hikayat"], ans: 1, topic: "fiksi" },
  { q: "Kutipan cerita tentang Bangsa Elvar di hutan Telssier (makhluk abadi, wajah menawan) terdapat pada jenis buku....", opts: ["Fiksi", "Nonfiksi", "Biografi", "Pengetahuan"], ans: 0, topic: "fiksi", passage: "Wajar jika Vrey sangat waspada, saat ini dia tengah menyusup ke dalam Hutan Telssier, tempat suci bangsa asli penghuni benua Ther Melian, Bangsa Elvar. Mereka awet muda dengan wajah menawan, memiliki pendengaran dan penglihatan setajam rubah, dan mampu bergerak secepat angin. Tapi yang lebih hebat lagi, Elvar adalah makhluk abadi, mereka tidak dapat meninggal karena usia tua. (Dikutip dari: Shienny M.S, Ther Melian Revelation, 2011)" },
  { q: "Cerpen tentang Badu yang makan mangga kecil lalu sakit perut. Amanat cerpen tersebut adalah...", opts: ["Jangan melawan orang tua", "Kita harus menuruti nasihat orang tua", "Janganlah memetik mangga sembarangan", "Janganlah makan mangga yang masih kecil"], ans: 1, topic: "fiksi", passage: "\"Kamu mengapa, Du?\" tanya kakek dengan sedih. \"Maafkan Badu, Kek. Tadi Badu makan mangga yang masih kecil-kecil dan akhirnya Badu sakit perut,\" kata Badu sambil terisak. \"Sudahlah, Du, lain kali tunggulah sampai mangga itu ranum, baru Badu boleh memetiknya.\"" },
  { q: "Suatu penilaian terhadap sebuah karya disebut juga....", opts: ["Resensi", "Resensator", "Penilaian", "Laporan"], ans: 0, topic: "ulasan" },
  { q: "Dari daftar: Cerpen, Novel, Komik, Biografi, Pidato, Mitos, Buku pelajaran — yang termasuk nonfiksi adalah...", opts: ["Cerpen, novel, dan komik", "Biografi, Pidato, dan Buku Pelajaran", "Novel, biografi dan mitos", "Pidato, mitos, buku pelajaran"], ans: 1, topic: "fiksi" },
  { q: "Berikut adalah jenis-jenis prosa fiksi KECUALI...", opts: ["Esai", "Cerita fantasi", "Dongeng", "Artikel"], ans: 0, topic: "fiksi" },
  { q: "Teks tentang brokoli (superfood, mengandung sulforafan, diteliti UEA) — dilihat dari segi bahasa, ini contoh teks....", opts: ["Fiksi", "Autobiografi", "Nonfiksi", "Naratif"], ans: 2, topic: "fiksi", passage: "Brokoli mungkin bukan sayur yang paling populer. Tapi, brokoli adalah salah satu yang paling bergizi. Itu sebabnya, brokoli disebut dengan superfood. Brokoli tinggi akan serat, antioksidan, vitamin B, A, C, K, dan zat besi. Penelitian dari University of East Anglia (UEA) mengidentifikasi bahwa brokoli sarat akan senyawa Sulforafan yang ampuh memperlambat osteoartritis." },
  { q: "Nilai yang terdapat dalam kutipan cerpen Dageraad Van Dallen yang terpengaruh budaya Banjar adalah nilai....", opts: ["Budaya", "Pendidikan", "Sosial", "Agama"], ans: 0, topic: "fiksi", passage: "Ya. Dageraad memang selalu memanggil Galuh dengan sebutan Diamant yang berarti intan. Karena dalam budaya pendulang di tanah banjar, intan disebut dengan Galuh sebagai sapaan penghormatan sekaligus lambang kasih sayang seorang ayah kepada putrinya. Sepuluh tahun menginjak tanah banjar nyatanya cukup memengaruhi banyak sisi kehidupan dalam diri seorang Dageraad Van Dallen, marinir angkatan darat Walanda itu. (Sumber: \"Geheugen Galery\", Kompas, Miranda Seftiana)" },
  { q: "Berikut yang BUKAN cara mendapat informasi dari teks nonfiksi adalah...", opts: ["Membuat ringkasan", "Membuat peta pikiran", "Membuat contekan", "Membuat daftar pertanyaan 5W1H"], ans: 2, topic: "fiksi" },
  { q: "Berikut yang BUKAN termasuk jenis-jenis alur adalah...", opts: ["Alur campuran", "Alur mundur", "Alur maju", "Alur zig-zag"], ans: 3, topic: "fiksi" },
  { q: "Agar cerita lebih menarik, teks fiksi harus mengandung...", opts: ["Konflik", "Amanat", "Pengenalan", "Penyelesaian"], ans: 0, topic: "fiksi" },
  { q: "Tokoh cerita Rara Anteng, Joko Seger, dan Bajak Laut — tokoh cerita di atas adalah...", opts: ["Rara Anteng", "Bajak laut", "Joko Seger", "Rara Anteng, Joko Seger, Bajak Laut"], ans: 3, topic: "fiksi", passage: "Ketika lahir anak itu tidak menangis. Ia diberi nama Rara Anteng. Setelah dewasa dia menjadi gadis cantik. Suatu hari ia dilamar bajak laut yang kejam. Rara Anteng minta dibuatkan laut di tengah gunung. Tetapi akhirnya Rara Anteng menikah dengan Joko Seger, karena bajak laut gagal memenuhi permintaannya." },
  { q: "Dalam cerita Bawang Merah Bawang Putih, tokoh antagonisnya adalah...", opts: ["Bawang merah", "Bawang putih", "Ibu", "Bawang putih dan bawang merah"], ans: 0, topic: "fiksi", passage: "Dahulu ada seorang Ibu mempunyai dua anak perempuan. Bawang Merah selalu marah-marah. Apa yang dilakukan Bawang Putih tidak pernah benar. Setiap hari Bawang Putih bekerja atas perintah Bawang Merah." },
  { q: "'Hutan adalah salah satu kawasan yang tumbuh alami, berisi ribuan jenis pohon dan beragam binatang.' Gagasan pokok paragraf di atas adalah...", opts: ["Hutan berhawa sejuk", "Berisi ribuan jenis pohon dan binatang", "Hutan adalah kawasan yang alami", "Hutan berada di daerah pinggir kota"], ans: 2, topic: "berita", passage: "Hutan adalah salah satu kawasan yang tumbuh alami, berisi ribuan jenis pohon dan beragam binatang. Hutan biasanya berada di daerah pinggiran kota dan berhawa sejuk." },
  { q: "'Kambing-kambing sudah kembali ke kandang setelah seharian merumput di lapangan.' Latar waktu yang tergambar adalah...", opts: ["Sore", "Pagi", "Malam", "Siang"], ans: 0, topic: "fiksi", passage: "Kambing-kambing sudah kembali ke kandang setelah seharian merumput di lapangan." },
  { q: "Dalam cerita Timun Emas, Buto Ijo terus mengejar dan akhirnya tenggelam di laut. Watak Buto Ijo adalah...", opts: ["Sombong", "Bijaksana", "Murah hati", "Kejam"], ans: 3, topic: "fiksi", passage: "Timun Emas terus berlari ketakutan. Sementara Buto Ijo terus mengejarnya. Untunglah orang tuanya, Mbok Dadapan memberikan bekal untuk melindungi putrinya. Sampai akhirnya Buto Ijo tenggelam di laut yang luas." },
  { q: "Temanmu suka membuang sampah sembarangan. Saran yang tepat adalah...", opts: ["Keterlaluan kamu, seperti tidak tahu saja!", "Biar saja, nanti juga ada tukang sampah.", "Membuang sampah sembarangan tidak baik, bisa menimbulkan penyakit.", "Hai, kamu jangan buang sampah sembarangan."], ans: 2, topic: "ulasan" },
  { q: "Paragraf tentang sakit tifus (suhu naik, perut perih, lidah pahit). Tema paragraf di atas adalah...", opts: ["Olahraga", "Kesehatan", "Gizi", "Sakit tifus"], ans: 1, topic: "fiksi", passage: "Saat pertama sakit, aku merasakan suhu badanku naik, perut terasa perih, lidahku pahit. Esok harinya Ayah membawaku ke dokter. Setelah diperiksa ternyata aku menderita gejala tifus." },
  { q: "Dialog antara Toni dan Santi tentang oleh-oleh untuk Dodi. Tokoh dalam dialog tersebut adalah...", opts: ["Toni dan Dodi", "Toni dan Santi", "Dodi dan Santi", "Toni, Dodi dan Santi"], ans: 1, topic: "fiksi", passage: "Toni : \"San, kita beli apa untuk oleh-oleh Dodi?\"\nSanti : \"Hmm… kita kasih uang saja San.\"" },
  { q: "'Catur adalah olahraga yang kurang diminati di Indonesia...' Gagasan utama paragraf di atas adalah...", opts: ["Rahmat teman baru kita", "Catur membutuhkan daya pikir keras", "Olahraga catur", "Catur adalah olahraga yang kurang diminati"], ans: 3, topic: "berita", passage: "Catur adalah olahraga yang kurang diminati di Indonesia. Karena catur membutuhkan daya pikir yang cukup keras untuk memenangkan pertandingan. Namun, tidak demikian dengan Rahmat. Teman kita ini baru berusia 11 tahun, namun sudah dapat mengharumkan nama Indonesia melalui catur." },
  { q: "Dialog Hasan dan Ibu tentang main ke rumah Ali. Tokoh dalam dialog tersebut adalah...", opts: ["Ali dan Ayah", "Ali dan Hasan", "Ayah dan Ibu", "Hasan dan Ibu"], ans: 3, topic: "fiksi", passage: "Hasan : \"Bu, bolehkah saya main ke rumah Ali sekarang?\"\nIbu : \"Boleh saja, asal jangan sore-sore pulangnya nanti telat mandinya.\"\nHasan : \"Ya, Bu. Saya tidak lama. Sebelum ayah pulang saya sudah di rumah.\"\nIbu : \"Makan dulu, San. Biar ngak sakit.\"\nHasan : \"Baik, Bu. Saya makan dulu.\"" },
  { q: "'Musim panen telah tiba. Para petani bergembira...' Kalimat utama paragraf tersebut adalah...", opts: ["Musim panen telah tiba", "Para petani bergembira karena tidak banyak hama", "Mereka bahagia melihat padi siap panen", "Mereka bersama-sama menanam padi"], ans: 0, topic: "berita", passage: "Musim panen telah tiba. Para petani bergembira karena tahun ini tidak banyak hama yang menyerang tanaman padinya. Mereka bahagia sekali melihat tanaman padi yang kuning dan siap di panen. Mereka bersama-sama menanam padi." },
  { q: "Kalimat: (1) Ada yang mencari daging buruan, (2) Penduduk desa mengadakan pesta rakyat, (3) Ada yang membuat pentas hiburan, (4) Semua bergotong royong. Urutan yang padu adalah...", opts: ["4-3-2-1", "3-2-1-4", "2-4-3-1", "1-2-3-4"], ans: 2, topic: "berita", passage: "Kalimat-kalimat acak:\n1. Ada pula yang mencari daging buruan di hutan\n2. Penduduk desa akan mengadakan pesta rakyat\n3. Ada yang membuat pentas hiburan\n4. Semua bergotong royong menyiapkan acara tersebut" },
  { q: "Paragraf tentang Ario yang ingin jadi penyanyi tapi pemalu. Kalimat yang tepat untuk melengkapi adalah...", opts: ["Ario mulai rajin berlatih bernyanyi dengan serius.", "Ia tidak berminat menjadi penyanyi yang terkenal", "Namun, keinginan itu hanya dia simpan di dalam hati.", "Jika tidak ada halangan dia akan tampil di televisi."], ans: 2, topic: "fiksi", passage: "Ario sangat kagum pada penyanyi yang bersuara bagus. Kalau penyanyi itu muncul di televisi, Ario akan menontonnya. Ario juga suka menonton kontes-kontes menyanyi di televisi. Ario pun bercita-cita untuk menjadi penyanyi, ……………… karena Ario merasa dirinya sangat pemalu." },
  { q: "Contoh amanat dalam buku fiksi yang tepat adalah...", opts: ["Suatu hari di hutan hiduplah hewan yang dipimpin Harimau bijaksana.", "'Kenapa kau tidak mendengar nasehatku?', tanya Bobi kepada Bani.", "Semenjak itu si kelinci tak lagi meremehkan hewan lain. Mereka bersahabat.", "Ir Soekarno lahir di Blitar dari ibu asal Bali."], ans: 2, topic: "ulasan" },
  { q: "Cerpen tentang Badu (makan mangga kecil, sakit perut). Amanat penggalan cerpen tersebut adalah...", opts: ["Jangan melawan orang tua", "Kita harus menuruti nasihat orang tua", "Janganlah memetik mangga sembarangan", "Janganlah makan mangga yang masih kecil"], ans: 1, topic: "fiksi", passage: "\"Kamu mengapa, Du?\" tanya kakek dengan sedih. \"Maafkan Badu, Kek. Tadi Badu makan mangga yang masih kecil-kecil dan akhirnya Badu sakit perut,\" kata Badu sambil terisak. \"Sudahlah, Du, lain kali tunggulah sampai mangga itu ranum, baru Badu boleh memetiknya.\"" },
  { q: "Apa yang kamu ketahui tentang teks nonfiksi?", opts: ["Teks berdasarkan kenyataan, realita, hal yang benar terjadi dalam kehidupan.", "Teks berdasarkan angan-angan, fantasi, khayalan, atau karangan penulisnya.", "Paragraf yang mengembangkan pendapat dan ide pribadi penulisnya.", "Paragraf yang menceritakan peristiwa berdasarkan kronologi waktu."], ans: 0, topic: "fiksi" },
  { q: "Teks tentang warga Waborabo yang sulit air bersih. Uraian urutan peristiwa yang benar adalah...", opts: ["Warga tidak sulit mencari air bersih, tidak perlu 15 km, mengharapkan bantuan.", "Warga sulit mencari air bersih.", "Warga sulit mencari air bersih → menempuh 15 km → mengharapkan bantuan pemerintah.", "Menempuh 15 km → mengharapkan bantuan pemerintah."], ans: 2, topic: "berita", passage: "Warga Kelurahan Waborabo, Kecamatan Betaoambari, Kota Bau Bau, Sulawesi Tenggara sulit mencari air bersih. Mereka terpaksa menempuh perjalanan sejauh 15 km untuk mendapatkan air bersih. Mereka sangat mengharapkan bantuan pemerintah untuk keperluan tersebut." },
  { q: "Berikut yang BUKAN cara mendapat informasi dari teks nonfiksi adalah...", opts: ["Membuat ringkasan", "Membuat peta pikiran", "Membuat contekan", "Membuat daftar pertanyaan 5W1H"], ans: 2, topic: "fiksi" },
  { q: "Paragraf tentang 6 agama resmi Indonesia dan Bhinneka Tunggal Ika. Gagasan pokok terdapat pada kalimat nomor...", opts: ["1", "2", "3", "4"], ans: 0, topic: "berita", passage: "(1) Bangsa Indonesia memiliki enam agama resmi. (2) Keenam agama tersebut adalah Islam, Katolik, Kristen, Hindu, Buddha, dan Konghucu. (3) Keragaman agama di Indonesia tidak membuat bangsa Indonesia terpecah belah. (4) Indonesia tetap menjaga persatuan dan kesatuan sesuai semboyannya, \"Bhinneka Tunggal Ika\"." },
  { q: "Kenapa bangsa Indonesia tidak terpecah belah karena perbedaan agama?", opts: ["Karena Indonesia memiliki semboyan Bhinneka Tunggal Ika", "Karena Indonesia memiliki 6 agama resmi", "Karena rakyat Indonesia berbeda-beda", "Karena pemerintah melarang perbedaan pendapat"], ans: 0, topic: "berita", passage: "Bangsa Indonesia memiliki enam agama resmi. Keenam agama tersebut adalah Islam, Katolik, Kristen, Hindu, Buddha, dan Konghucu. Keragaman agama di Indonesia tidak membuat bangsa Indonesia terpecah belah. Indonesia tetap menjaga persatuan dan kesatuan sesuai semboyannya, \"Bhinneka Tunggal Ika\" yang artinya \"meskipun berbeda-beda tetapi tetap satu jua\"." },
  { q: "'Istirahat dan tidur berperan penting... Sebaiknya tidur 7 jam sehari...' Berapa jumlah kalimat pendukung?", opts: ["5 kalimat", "4 kalimat", "3 kalimat", "2 kalimat"], ans: 1, topic: "berita", passage: "Istirahat dan tidur berperan penting dalam menjaga kesehatan tubuh. Setelah belajar dan melakukan kegiatan, tubuh perlu istirahat. Istirahat yang baik adalah tidur. Sebaiknya kita tidur selama tujuh jam setiap hari. Istirahat dan tidur yang cukup dan berkualitas membuat kita tetap aktif sepanjang hari." },
  { q: "Paragraf tentang pendidikan karakter (kalimat utama di awal, kalimat penjelas, simpulan di akhir). Jenis paragraf apakah ini?", opts: ["Deduktif", "Induktif", "Ineratif", "Campuran"], ans: 3, topic: "berita", passage: "Pendidikan yang paling utama bagi anak adalah pendidikan karakter (1). Dengan pendidikan karakter yang baik, si anak akan mempunyai pondasi karakter dan mental yang kuat (2). Orang tua dan guru pun bisa bekerja sama untuk membentuk karakter anak (3). Jika berhasil, orang tua dan guru akan lebih mudah mentransfer ilmu kepada anak (4). Jadi, pendidikan karakter harus diutamakan dalam Pendidikan (5)." },
  { q: "Jalan cerita (alur) yang benar adalah...", opts: ["Koda, resolusi, krisis, komplikasi, orientasi", "Orientasi, krisis, komplikasi, resolusi, koda", "Orientasi, komplikasi, krisis, resolusi, koda", "Koda, orientasi, komplikasi, krisis"], ans: 2, topic: "fiksi" },
  { q: "Koda adalah...", opts: ["Bagian yang menceritakan kehidupan akhir tokoh", "Bagian masalah yang dihadapi tokoh", "Kehidupan awal tokoh", "Munculnya masalah tokoh"], ans: 0, topic: "fiksi" },
  { q: "Kata baku yang benar adalah...", opts: ["Apotik, ijin, aktifitas", "Apotek, izin, aktivitas", "Apotik, izin, aktivitas", "Apotek, ijin, aktifitas"], ans: 1, topic: "berita" },
  { q: "Surat yang dikirim untuk keperluan pribadi ke sahabat karib termasuk jenis...", opts: ["Surat dinas", "Surat resmi", "Surat niaga", "Surat pribadi"], ans: 3, topic: "surat" },
  { q: "Paragraf: 'Hutan memiliki manfaat yang sangat besar... Pohon menghasilkan oksigen... akar menyerap air hujan... hutan rumah bagi hewan langka.' Jenis paragraf ini adalah...", opts: ["Deduktif", "Induktif", "Campuran", "Narasi"], ans: 0, topic: "berita" },
  { q: "Paragraf: 'Rajin olahraga... makan bergizi... istirahat cukup memulihkan energi. JADI, pola hidup sehat sangat penting untuk menjaga kebugaran.' Jenis paragraf ini adalah...", opts: ["Deduktif", "Induktif", "Campuran", "Deskripsi"], ans: 1, topic: "berita" },
  { q: "Paragraf: 'Hasil panen di Desa Makmur sangat memuaskan. Padi berkualitas, buah-buahan subur. Oleh karena itu, tahun ini adalah tahun keberuntungan.' Jenis paragraf ini adalah...", opts: ["Deduktif", "Induktif", "Campuran", "Persuasif"], ans: 1, topic: "berita" },
  { q: "Paragraf: 'Masyarakat harus waspada DBD... Bersihkan genangan air... Tutup wadah... Kuras bak mandi... Kewaspadaan masyarakat sangat diperlukan agar wabah tidak menyebar.' Jenis paragraf ini adalah...", opts: ["Deduktif", "Induktif", "Campuran", "Narasi"], ans: 2, topic: "berita" },
  { q: "Pernyataan yang sesuai dengan identitas buku 'Satwa Terancam Bahaya' adalah...", opts: ["Buku ini termasuk buku fiksi", "Penulis buku adalah Pakar Raya", "Buku dicetak pada tahun 2010", "Tebal buku adalah 32 halaman"], ans: 3, topic: "ulasan" },
  { q: "Informasi yang TIDAK sesuai dengan resensi buku 'Satwa Terancam Bahaya' adalah...", opts: ["Buku membantu siswa kemampuan baca berbeda, bisa jadi bahan diskusi kelompok", "Buku mengajak mengenal penyebab satwa langka dan cara menyelamatkannya", "Sekarang terjadi pemanasan global, banyak penyebab hewan menjadi langka bahkan punah", "Zaman dahulu belum banyak spesies punah karena hewan bisa menyesuaikan diri"], ans: 3, topic: "ulasan" },
  { q: "Pendapat yang KONTRA dengan 'Pencemaran, penebangan liar, perburuan, hujan asam menyebabkan satwa langka' adalah...", opts: ["Kita harus menjaga kelestarian lingkungan untuk menyelamatkan spesies hewan", "Pemerintah harus memberi sanksi berat kepada pelaku pencemaran dan penebangan liar", "Hewan langka dapat dipelihara untuk koleksi pribadi karena unik dan sulit ditemukan", "Pencemaran dan perburuan besar-besaran merupakan tindakan tidak terpuji"], ans: 2, topic: "ulasan" },
  { q: "KEKURANGAN buku 'Satwa Terancam Bahaya' dalam resensi adalah...", opts: ["Masih terdapat istilah asing tanpa penjelasan sehingga menimbulkan tanda tanya pembaca", "Isi buku kompleks dengan tema bertumpuk sehingga pembaca kurang memahami", "Topik terlalu ringan dengan bahasa tidak lugas", "Banyak ungkapan kiasan yang membuat pembaca kesulitan"], ans: 0, topic: "ulasan" },
  { q: "Kalimat majemuk tentang buku Jen Green tentang satwa langka — terdiri atas berapa kalimat tunggal yang digabungkan?", opts: ["1 kalimat tunggal", "2 kalimat tunggal", "3 kalimat tunggal", "4 kalimat tunggal"], ans: 1, topic: "ulasan" },

  // Soal ciri kebahasaan teks berita/eksplanasi
  { q: "'Polisi menjaga gedung Balai Kota sejak pagi.' Kalimat ini termasuk jenis...", opts: ["Kalimat majemuk", "Kalimat tunggal", "Kalimat langsung", "Kalimat tanya"], ans: 1, topic: "berita" },
  { q: "'Ketika presiden datang, para polisi berpatroli di sekitar kawasan.' Kalimat ini termasuk jenis...", opts: ["Kalimat tunggal", "Kalimat majemuk", "Kalimat perintah", "Kalimat seru"], ans: 1, topic: "berita" },
  { q: "Kata 'kemudian', 'lalu', 'setelah itu', 'pada akhirnya' termasuk konjungsi...", opts: ["Kausalitas", "Kronologis", "Pertentangan", "Penjumlahan"], ans: 1, topic: "berita" },
  { q: "Kata 'sebab', 'karena', 'oleh sebab itu' termasuk konjungsi...", opts: ["Kronologis", "Temporal", "Kausalitas", "Pertentangan"], ans: 2, topic: "berita" },
  { q: "'Bencana tanah longsor terjadi di Sumedang. Peristiwa INI terjadi akibat hujan deras.' Kata 'ini' dalam kalimat tersebut berfungsi sebagai...", opts: ["Kata ganti orang", "Kata tunjuk yang merujuk kejadian", "Konjungsi temporal", "Kata kerja tindakan"], ans: 1, topic: "berita" },
  { q: "Dalam teks berita, kata ganti yang digunakan untuk merujuk kejadian adalah...", opts: ["Ia, dia, mereka", "Ini, itu, tersebut", "Kami, kita, kalian", "Saya, kamu, beliau"], ans: 1, topic: "berita" },
];

export default function App() {
  const [screen, setScreen] = useState("home");
  const [activeTopic, setActiveTopic] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [filterTopic, setFilterTopic] = useState("all");

  const allCards = Object.values(FLASHCARDS).flat();
  const cards = activeTopic ? FLASHCARDS[activeTopic] : [];

  const filteredQuiz = filterTopic === "all" ? QUIZ : QUIZ.filter(q => q.topic === filterTopic);

  const startFlashcard = (topicId) => {
    setActiveTopic(topicId);
    setCardIndex(0);
    setFlipped(false);
    setScreen("flashcard");
  };

  const nextCard = () => { if (cardIndex < cards.length - 1) { setCardIndex(cardIndex + 1); setFlipped(false); } };
  const prevCard = () => { if (cardIndex > 0) { setCardIndex(cardIndex - 1); setFlipped(false); } };

  const startQuiz = (topic = "all") => {
    setFilterTopic(topic);
    setQuizIndex(0);
    setSelected(null);
    setScore(0);
    setQuizDone(false);
    setAnswers([]);
    setScreen("quiz");
  };

  const currentQuiz = filteredQuiz[quizIndex];

  const handleAnswer = (i) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === currentQuiz.ans) setScore(s => s + 1);
    setAnswers(a => [...a, { correct: i === currentQuiz.ans, selected: i }]);
  };

  const nextQuestion = () => {
    if (quizIndex < filteredQuiz.length - 1) { setQuizIndex(quizIndex + 1); setSelected(null); }
    else setQuizDone(true);
  };

  const topicInfo = activeTopic ? TOPICS.find(t => t.id === activeTopic) : null;

  return (
    <div style={{ minHeight: "100vh", background: palette.bg, color: palette.text, fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button { cursor: pointer; font-family: inherit; }
        .flip-card { perspective: 1000px; width: 100%; }
        .flip-inner { position: relative; width: 100%; min-height: 200px; transition: transform 0.5s cubic-bezier(.4,2,.6,1); transform-style: preserve-3d; }
        .flip-inner.flipped { transform: rotateY(180deg); }
        .flip-front, .flip-back { position: absolute; width: 100%; min-height: 200px; backface-visibility: hidden; border-radius: 16px; display: flex; align-items: center; justify-content: center; padding: 28px; text-align: center; }
        .flip-back { transform: rotateY(180deg); }
        @keyframes slideUp { from{transform:translateY(20px);opacity:0} to{transform:translateY(0);opacity:1} }
        .slideUp { animation: slideUp .3s ease; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: ${palette.border}; border-radius: 3px; }
      `}</style>

      {/* HOME */}
      {screen === "home" && (
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "32px 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🎓</div>
            <h1 style={{ fontSize: 24, fontWeight: 800 }}>Belajar Bahasa Indonesia</h1>
            <p style={{ color: palette.muted, marginTop: 6, fontSize: 13 }}>Kelas 7 · Semester 2 · AAT 2025/2026</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 10 }}>
              <span style={{ background: palette.accent+"22", color: palette.accent, borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 700 }}>40 Soal Asli</span>
              <span style={{ background: palette.accent3+"22", color: palette.accent3, borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 700 }}>{allCards.length} Flashcard</span>
            </div>
          </div>

          {/* Quick Quiz */}
          <div style={{ background: palette.card, border: `1.5px solid ${palette.border}`, borderRadius: 16, padding: "18px", marginBottom: 20 }}>
            <p style={{ fontWeight: 700, marginBottom: 12, fontSize: 14 }}>🧠 Kuis — Pilih Topik</p>
            <button onClick={() => startQuiz("all")} style={{
              width: "100%", padding: "12px", borderRadius: 10, marginBottom: 8,
              background: palette.accent, border: "none", color: "#fff", fontWeight: 700, fontSize: 14,
              boxShadow: `0 4px 16px ${palette.accent}44`,
            }}>Semua Soal (40 soal)</button>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {TOPICS.map(t => (
                <button key={t.id} onClick={() => startQuiz(t.id)} style={{
                  padding: "10px 8px", borderRadius: 10,
                  background: t.color + "18", border: `1.5px solid ${t.color}44`,
                  color: t.color, fontWeight: 600, fontSize: 12,
                }}>
                  {t.emoji} {t.label.split(" ")[0]}<br/>
                  <span style={{ fontWeight: 400, fontSize: 11, color: palette.muted }}>
                    {QUIZ.filter(q => q.topic === t.id).length} soal
                  </span>
                </button>
              ))}
            </div>
          </div>

          <p style={{ color: palette.muted, fontSize: 12, marginBottom: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Flashcard per Topik</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
            {TOPICS.map(t => (
              <button key={t.id} onClick={() => startFlashcard(t.id)} style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "16px 18px", borderRadius: 14,
                background: palette.card, border: `1.5px solid ${palette.border}`,
                color: palette.text, textAlign: "left",
              }}>
                <span style={{ fontSize: 26, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, background: t.color + "22" }}>{t.emoji}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{t.label}</div>
                  <div style={{ color: palette.muted, fontSize: 12 }}>{FLASHCARDS[t.id].length} kartu</div>
                </div>
                <span style={{ marginLeft: "auto", color: t.color }}>→</span>
              </button>
            ))}
          </div>

          <button onClick={() => setScreen("summary")} style={{
            width: "100%", padding: "13px", borderRadius: 12,
            background: palette.border, border: "none", color: palette.text, fontWeight: 700, fontSize: 14,
          }}>📋 Ringkasan Materi</button>
        </div>
      )}

      {/* FLASHCARD */}
      {screen === "flashcard" && activeTopic && (
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "28px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <button onClick={() => setScreen("home")} style={{ background: palette.card, border: `1.5px solid ${palette.border}`, color: palette.text, borderRadius: 10, padding: "8px 14px", fontSize: 14 }}>← Back</button>
            <div>
              <div style={{ fontWeight: 700 }}>{topicInfo.emoji} {topicInfo.label}</div>
              <div style={{ color: palette.muted, fontSize: 12 }}>{cardIndex + 1} / {cards.length}</div>
            </div>
          </div>
          <div style={{ height: 6, background: palette.border, borderRadius: 99, marginBottom: 24, overflow: "hidden" }}>
            <div style={{ height: "100%", borderRadius: 99, background: topicInfo.color, width: `${((cardIndex + 1) / cards.length) * 100}%`, transition: "width .3s" }} />
          </div>
          <div className="flip-card" onClick={() => setFlipped(f => !f)}>
            <div className={`flip-inner ${flipped ? "flipped" : ""}`} style={{ minHeight: 220 }}>
              <div className="flip-front" style={{ background: palette.card, border: `1.5px solid ${palette.border}` }}>
                <div>
                  <div style={{ fontSize: 11, color: topicInfo.color, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>PERTANYAAN</div>
                  <div style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.6 }}>{cards[cardIndex].q}</div>
                  <div style={{ color: palette.muted, fontSize: 12, marginTop: 16 }}>Tap untuk lihat jawaban 👆</div>
                </div>
              </div>
              <div className="flip-back" style={{ background: `linear-gradient(135deg, ${topicInfo.color}22, ${palette.card})`, border: `1.5px solid ${topicInfo.color}55` }}>
                <div>
                  <div style={{ fontSize: 11, color: topicInfo.color, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>JAWABAN</div>
                  <div style={{ fontSize: 15, lineHeight: 1.7, whiteSpace: "pre-line" }}>{cards[cardIndex].a}</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <button onClick={prevCard} disabled={cardIndex === 0} style={{ flex: 1, padding: "13px 0", borderRadius: 12, background: cardIndex === 0 ? palette.border+"55" : palette.border, border: "none", color: cardIndex === 0 ? palette.muted : palette.text, fontWeight: 700 }}>← Sebelumnya</button>
            <button onClick={nextCard} disabled={cardIndex === cards.length - 1} style={{ flex: 1, padding: "13px 0", borderRadius: 12, background: cardIndex === cards.length - 1 ? palette.border+"55" : topicInfo.color, border: "none", color: cardIndex === cards.length - 1 ? palette.muted : "#000", fontWeight: 700 }}>Selanjutnya →</button>
          </div>
          {cardIndex === cards.length - 1 && (
            <button onClick={() => setScreen("home")} style={{ width: "100%", marginTop: 10, padding: "13px", borderRadius: 12, background: palette.accent, border: "none", color: "#fff", fontWeight: 700 }}>✅ Selesai!</button>
          )}
        </div>
      )}

      {/* QUIZ */}
      {screen === "quiz" && !quizDone && currentQuiz && (
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "28px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <button onClick={() => setScreen("home")} style={{ background: palette.card, border: `1.5px solid ${palette.border}`, color: palette.text, borderRadius: 10, padding: "8px 14px", fontSize: 13 }}>← Keluar</button>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>🧠 Kuis · Soal {quizIndex + 1}/{filteredQuiz.length}</div>
            </div>
            <div style={{ background: palette.accent+"22", color: palette.accent, borderRadius: 8, padding: "4px 12px", fontWeight: 700, fontSize: 14 }}>{score} ✓</div>
          </div>
          <div style={{ height: 6, background: palette.border, borderRadius: 99, marginBottom: 16, overflow: "hidden" }}>
            <div style={{ height: "100%", borderRadius: 99, background: `linear-gradient(90deg, ${palette.accent}, ${palette.accent2})`, width: `${((quizIndex + 1) / filteredQuiz.length) * 100}%`, transition: "width .3s" }} />
          </div>
          <div style={{ marginBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", padding: "3px 10px", borderRadius: 6, background: palette.accent4+"33", color: palette.accent4 }}>
              {TOPICS.find(t => t.id === currentQuiz.topic)?.label}
            </span>
          </div>
          {currentQuiz.passage && (
            <div style={{ background: "#1e1b38", border: `1.5px solid ${palette.accent2}44`, borderRadius: 12, padding: "14px 16px", marginBottom: 12, borderLeft: `3px solid ${palette.accent2}` }}>
              <div style={{ fontSize: 10, color: palette.accent2, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>📖 Bacaan / Kutipan</div>
              <p style={{ fontSize: 13, color: "#ddd", lineHeight: 1.7, whiteSpace: "pre-line" }}>{currentQuiz.passage}</p>
            </div>
          )}
          <div className="slideUp" style={{ background: palette.card, border: `1.5px solid ${palette.border}`, borderRadius: 14, padding: "18px 16px", marginBottom: 14 }}>
            <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.6 }}>{currentQuiz.q}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {currentQuiz.opts.map((opt, i) => {
              let bg = palette.card, border = palette.border, color = palette.text;
              if (selected !== null) {
                if (i === currentQuiz.ans) { bg = palette.accent3+"22"; border = palette.accent3; color = palette.accent3; }
                else if (i === selected) { bg = "#e63946"+"22"; border = "#e63946"; color = "#e63946"; }
              }
              return (
                <button key={i} onClick={() => handleAnswer(i)} style={{ padding: "13px 16px", borderRadius: 11, background: bg, border: `1.5px solid ${border}`, color, fontWeight: 600, fontSize: 13, textAlign: "left", transition: "all .15s" }}>
                  <span style={{ marginRight: 8, opacity: 0.5 }}>{["A","B","C","D"][i]}.</span>
                  {opt}
                  {selected !== null && i === currentQuiz.ans && <span style={{ marginLeft: 6 }}>✓</span>}
                  {selected === i && i !== currentQuiz.ans && <span style={{ marginLeft: 6 }}>✗</span>}
                </button>
              );
            })}
          </div>
          {selected !== null && (
            <button onClick={nextQuestion} style={{ width: "100%", marginTop: 14, padding: "13px", borderRadius: 12, background: palette.accent, border: "none", color: "#fff", fontWeight: 700, fontSize: 15 }}>
              {quizIndex < filteredQuiz.length - 1 ? "Soal Berikutnya →" : "Lihat Hasil 🎉"}
            </button>
          )}
        </div>
      )}

      {/* QUIZ DONE */}
      {screen === "quiz" && quizDone && (
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "36px 20px", textAlign: "center" }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>{score >= filteredQuiz.length * 0.85 ? "🏆" : score >= filteredQuiz.length * 0.7 ? "🎉" : score >= filteredQuiz.length * 0.5 ? "👍" : "💪"}</div>
          <h2 style={{ fontSize: 30, fontWeight: 800, marginBottom: 6 }}>{score} / {filteredQuiz.length}</h2>
          <p style={{ color: palette.muted, marginBottom: 4, fontSize: 15 }}>
            {score >= filteredQuiz.length * 0.85 ? "Luar biasa! Kamu siap ujian! 🔥" : score >= filteredQuiz.length * 0.7 ? "Bagus! Tinggal poles dikit lagi." : score >= filteredQuiz.length * 0.5 ? "Lumayan! Yuk belajar lagi." : "Jangan nyerah! Flashcard dulu yuk."}
          </p>
          <p style={{ color: palette.accent2, fontSize: 13, marginBottom: 20 }}>Nilai: {Math.round((score / filteredQuiz.length) * 100)}</p>
          <div style={{ background: palette.card, border: `1.5px solid ${palette.border}`, borderRadius: 14, padding: "14px 16px", marginBottom: 20, textAlign: "left", maxHeight: 360, overflowY: "auto" }}>
            <p style={{ fontWeight: 700, marginBottom: 10, color: palette.muted, fontSize: 11, letterSpacing: 1, textTransform: "uppercase" }}>Rekap Jawaban</p>
            {filteredQuiz.map((q, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "8px 0", borderBottom: i < filteredQuiz.length - 1 ? `1px solid ${palette.border}` : "none" }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>{answers[i]?.correct ? "✅" : "❌"}</span>
                <div style={{ fontSize: 12, flex: 1 }}>
                  <div style={{ color: palette.muted, marginBottom: 2 }}>Soal {i + 1}: {q.q.length > 60 ? q.q.slice(0, 60) + "..." : q.q}</div>
                  {!answers[i]?.correct && <div style={{ color: palette.accent3, fontWeight: 600 }}>✓ {q.opts[q.ans]}</div>}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => startQuiz(filterTopic)} style={{ flex: 1, padding: "13px", borderRadius: 12, background: palette.accent, border: "none", color: "#fff", fontWeight: 700 }}>🔄 Ulangi</button>
            <button onClick={() => setScreen("home")} style={{ flex: 1, padding: "13px", borderRadius: 12, background: palette.border, border: "none", color: palette.text, fontWeight: 700 }}>🏠 Menu</button>
          </div>
        </div>
      )}

      {/* SUMMARY */}
      {screen === "summary" && (
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "28px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <button onClick={() => setScreen("home")} style={{ background: palette.card, border: `1.5px solid ${palette.border}`, color: palette.text, borderRadius: 10, padding: "8px 14px", fontSize: 14 }}>← Back</button>
            <div style={{ fontWeight: 700, fontSize: 17 }}>📋 Ringkasan Materi</div>
          </div>
          {[
            { title: "📰 Teks Berita", color: palette.accent, points: [
              "5W+1H: What, Who, When, Where, Why, How",
              "Ciri: faktual, aktual, objektif, bahasa baku",
              "Struktur: Judul → Teras berita (lead) → Tubuh → Ekor",
              "Konjungsi kronologis: kemudian, lalu, setelah itu, pada akhirnya",
              "Konjungsi kausalitas: sebab, karena, oleh sebab itu",
              "Konjungsi 'bahwa' = menjelaskan isi pernyataan",
              "Kalimat tunggal = 1 klausa | Kalimat majemuk = 2+ klausa",
              "Kata tunjuk: ini, itu, tersebut (BUKAN ia/dia/mereka)",
              "Gagasan utama biasanya di kalimat pertama (paragraf deduktif)",
              "Hindari hoaks: cek sumber, bandingkan, jangan langsung share",
            ]},
            { title: "📚 Buku Fiksi & Nonfiksi", color: palette.accent2, points: [
              "Fiksi: imajinatif, menghibur (novel, cerpen, dongeng, fabel)",
              "Nonfiksi: faktual, informatif (biografi, ensiklopedia, buku pelajaran)",
              "Unsur intrinsik fiksi: tema, tokoh, penokohan, alur, latar, sudut pandang, amanat",
              "Alur cerita: Orientasi → Komplikasi → Krisis → Resolusi → Koda",
              "Koda = bagian akhir kehidupan tokoh setelah konflik selesai",
              "Jenis alur: maju, mundur (flashback), campuran",
              "Tokoh antagonis = tokoh jahat / penentang protagonis",
              "Latar = waktu, tempat, suasana dalam cerita",
              "Amanat = pesan moral yang ingin disampaikan pengarang",
            ]},
            { title: "📝 Jenis Paragraf", color: "#a855f7", points: [
              "Deduktif: kalimat utama di AWAL paragraf",
              "Induktif: kalimat utama di AKHIR paragraf (biasanya diawali 'jadi...' / 'oleh karena itu...')",
              "Campuran: kalimat utama di AWAL dan AKHIR sekaligus",
              "Kalimat utama = gagasan pokok / ide pokok paragraf",
              "Kalimat penjelas = kalimat yang mendukung kalimat utama",
            ]},
            { title: "✍️ Teks Ulasan / Resensi", color: palette.accent3, points: [
              "Ulasan / resensi = penilaian atau tanggapan terhadap suatu karya",
              "Bagian resensi: identitas buku → ringkasan → kelebihan → kekurangan",
              "Identitas buku: judul, penulis, penerbit, tahun terbit, tebal halaman",
              "Kritik = kelemahan karya",
              "Saran = masukan untuk perbaikan",
              "Contoh kekurangan: 'Istilah asing tidak ada penjelasannya'",
            ]},
            { title: "✉️ Surat Pribadi & Dinas", color: palette.accent4, points: [
              "Surat pribadi: tidak resmi, bahasa santai, ke teman/keluarga",
              "Surat dinas: resmi, bahasa baku, dari instansi/lembaga",
              "Struktur surat pribadi: tanggal → salam buka → isi → salam tutup → nama",
              "Unsur surat dinas: kop surat, nomor, tanggal, lampiran, perihal, alamat, isi, tanda tangan",
            ]},
          ].map(s => (
            <div key={s.title} style={{ background: palette.card, border: `1.5px solid ${palette.border}`, borderRadius: 14, padding: "16px", marginBottom: 12, borderLeft: `4px solid ${s.color}` }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{s.title}</div>
              {s.points.map((p, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7, fontSize: 13, lineHeight: 1.5 }}>
                  <span style={{ color: s.color, flexShrink: 0 }}>•</span>
                  <span style={{ color: palette.muted }}>{p}</span>
                </div>
              ))}
            </div>
          ))}
          <div style={{ background: `linear-gradient(135deg, ${palette.accent}18, ${palette.accent2}18)`, border: `1.5px solid ${palette.accent}44`, borderRadius: 14, padding: "14px 16px", marginBottom: 16 }}>
            <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 14 }}>✅ Poin Kunci AAT</div>
            {["Unsur berita = 5W + 1H", "Buku fiksi = imajinatif | Nonfiksi = faktual", "Kritik = kelemahan | Saran = masukan perbaikan", "Surat pribadi = tidak resmi | Dinas = resmi", "Alur: Orientasi → Komplikasi → Krisis → Resolusi → Koda", "Koda = bagian akhir kehidupan tokoh setelah konflik selesai"].map((p, i) => (
              <div key={i} style={{ fontSize: 13, marginBottom: 5, color: palette.text }}>→ {p}</div>
            ))}
          </div>
          <button onClick={() => startQuiz("all")} style={{ width: "100%", padding: "13px", borderRadius: 12, background: palette.accent, border: "none", color: "#fff", fontWeight: 700, fontSize: 15 }}>🧠 Langsung Kuis Semua Soal!</button>
        </div>
      )}
    </div>
  );
}
