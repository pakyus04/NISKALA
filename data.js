/* =====================================================
   NISKALA — PANGKALAN DATA DUNIA
   Kemas kini fail ini sahaja apabila bab baharu keluar.
   ===================================================== */

const CAMPUSES = [
  {
    id: "Tuah", rank: 1, score: 10500, color: "#e0566a",
    banner: "assets/campuses/tuah-banner.webp",
    logo: "assets/campuses/tuah-logo.webp",
    tagline: "Kedudukan semasa tertinggi dalam sistem Mata Niskala.",
    identiti: "Merah darah • Lambang matahari",
    description: "Tuah berada di kedudukan pertama dalam ranking semasa Mata Niskala. Kedudukan yang tinggi memberikan kampus akses kepada peruntukan dan kemudahan yang lebih baik."
  },
  {
    id: "Mahawangsa", rank: 2, score: 9850, color: "#6f8fe0",
    banner: "assets/campuses/mahawangsa-banner.webp",
    logo: "assets/campuses/mahawangsa-logo.webp",
    tagline: "Kampus Faiz, Harith dan Danish. Bilik 217 berada di sini.",
    identiti: "Biru malam • Lambang sayap",
    description: "Kampus Faiz, Harith dan Danish. Mahawangsa kini berada di tempat kedua dan mempunyai kemudahan yang selesa termasuk kafeteria dengan pilihan makanan yang luas."
  },
  {
    id: "Inderaputera", rank: 3, score: 8900, color: "#b18be0",
    banner: "assets/campuses/inderaputera-banner.webp",
    logo: "assets/campuses/inderaputera-logo.webp",
    tagline: "Salah satu daripada lima komuniti utama Niskala.",
    identiti: "Ungu diraja • Lambang kompas",
    description: "Inderaputera berada di tengah-tengah kedudukan semasa Niskala. Nadhira merupakan antara pelajar kampus ini."
  },
  {
    id: "Malim", rank: 4, score: 8300, color: "#d9a35c",
    banner: "assets/campuses/malim-banner.webp",
    logo: "assets/campuses/malim-logo.webp",
    tagline: "Kemudahan mula menunjukkan kesan kedudukan rendah dalam sistem mata.",
    identiti: "Hijau hutan • Lambang pohon",
    description: "Malim berada di kedudukan keempat. Faiz mula menyedari kesan ranking apabila melihat beberapa kemudahan Malim menunggu penyelenggaraan serta pilihan makanan yang lebih terhad."
  },
  {
    id: "Sulung", rank: 5, score: 7550, color: "#7fc4a0",
    banner: "assets/campuses/sulung-banner.webp",
    logo: "assets/campuses/sulung-logo.webp",
    tagline: "Kampus dengan peruntukan paling terhad pada kedudukan semasa.",
    identiti: "Hitam gangsa • Lambang nyala daun",
    description: "Sulung berada di kedudukan kelima. Kemudahan asas masih disediakan, tetapi beberapa akses, penyelenggaraan dan pilihan tambahan lebih terhad berbanding kampus berkedudukan tinggi."
  }
];

const CHARACTERS = [
  {
    name: "Faiz Arsyad bin Irsyadi", category: "student",
    role: "Mahasiswa • Mahawangsa",
    image: "assets/characters/faiz-arsyad.webp",
    quote: "Bukan semua jawapan perlu dicari dengan suara yang kuat.",
    description: "Watak utama Niskala yang kelihatan terlalu tenang untuk seseorang yang dipilih oleh institusi itu. Jarang cuba menonjolkan diri, tetapi sering melihat masalah dari sudut yang tidak difikirkan orang lain.",
    details: { Umur: "21", Status: "Pelajar Niskala", Kampus: "Mahawangsa", Bilik: "217", Sifat: "Pemerhati • Analitikal • Tenang", Mata: "4", Catatan: "Dalam pemerhatian Niskala sebelum pencalonan" }
  },
  {
    name: "Harith Zaim bin Rahman", category: "student",
    role: "Mahasiswa • Mahawangsa",
    image: "assets/characters/harith-zaim.webp",
    quote: "Perkara kecil kadang-kadang menyimpan jalan keluar yang paling besar.",
    description: "Rakan sebilik Faiz yang tenang dan tidak banyak bercakap. Dalam simulasi Metropoli, Harith mengingati satu butiran kecil daripada gambar yang pernah ditunjukkan Prof. Zaizul.",
    details: { Umur: "21", Status: "Pelajar Niskala", Kampus: "Mahawangsa", Bilik: "217", Sifat: "Teliti • Pendiam • Berfokus", Pemerhatian: "Ingatan visual luar biasa", Catatan: "Keupayaan sebenar belum diketahui" }
  },
  {
    name: "Danish Raiyyan bin Safuan", category: "student",
    role: "Mahasiswa • Mahawangsa",
    image: "assets/characters/danish-raiyyan.webp",
    quote: "Kadang-kadang benda rosak cuma tunggu orang yang faham cara ia bernafas.",
    description: "Rakan sebilik Faiz yang spontan dan mudah mesra. Beberapa tindakan kecil menunjukkan dia mempunyai pemahaman semula jadi terhadap struktur dan benda mekanikal.",
    details: { Umur: "21", Status: "Pelajar Niskala", Kampus: "Mahawangsa", Bilik: "217", Sifat: "Spontan • Mesra • Praktikal", Pemerhatian: "Cenderung memahami mekanikal", Catatan: "Sangat menghargai ayam kafeteria" }
  },
  {
    name: "Dr. Zafran Hakimi bin Iskandar", category: "staff",
    role: "Pensyarah • Alumni Niskala",
    image: "assets/characters/dr-zafran.webp",
    quote: "Ada rahsia yang lebih selamat jika hanya tinggal di dalam kepala.",
    description: "Pensyarah universiti lama Faiz dan bekas mahasiswa Niskala. Selepas menyedari bahawa Faiz mengetahui sesuatu yang sepatutnya tersembunyi, dia cuba mencalonkan Faiz kepada Niskala.",
    details: { Umur: "44", Status: "Pensyarah Universiti", Sifat: "Berhati-hati • Cerdik • Tertekan", Hubungan: "Pensyarah Faiz", Pencalonan: "Ditolak oleh sistem", Mesej: "Calon telah berada dalam pemerhatian", Rahsia: "Hubungan sulit dengan Azlina" }
  },
  {
    name: "Prof. Zaizul Azman bin Salleh", category: "staff",
    role: "Profesor • Niskala",
    image: "assets/characters/prof-zaizul.webp",
    quote: "Saya tidak mencari jawapan yang paling cepat. Saya mencari cara fikir yang paling jujur.",
    description: "Pensyarah yang menerangkan sejarah Niskala dan kemudian memberikan simulasi Bangunan Metropoli kepada pelajar daripada lima kampus.",
    details: { Umur: "58", Status: "Profesor Niskala", Sifat: "Intelektual • Tenang • Menilai", Institusi: "Niskala", Aktiviti: "Simulasi Metropoli", "Markah Faiz": "96 / 100", Prinsip: "Cara berfikir lebih penting daripada hafalan" }
  },
  {
    name: "Arman Firdaus bin Halim", category: "student",
    role: "Mahasiswa • Tuah",
    image: "assets/characters/arman-firdaus.webp",
    quote: "Kalau jalan itu wujud, kita cari. Kalau tak wujud, kita bina pilihan terbaik.",
    description: "Ahli kumpulan Faiz dalam simulasi Metropoli. Cepat bertindak dan cenderung mencari penyelesaian yang boleh dilaksanakan dengan segera.",
    details: { Umur: "21", Status: "Pelajar Niskala", Kampus: "Tuah", Aktiviti: "Simulasi Metropoli", Kumpulan: "Faiz • Harith • Danish • Nadhira", Sifat: "Yakin • Proaktif • Cepat bertindak" }
  },
  {
    name: "Nadhira Sofea binti Mahfuz", category: "student",
    role: "Mahasiswa • Inderaputera",
    image: "assets/characters/nadhira-sofea.webp",
    quote: "Ketelitian bukan kelewatan. Ketelitian ialah cara kita mengelakkan kesilapan daripada menjadi bencana.",
    description: "Ahli kumpulan Faiz dalam simulasi Metropoli. Lebih tenang dan berhati-hati ketika menilai setiap pilihan yang dicadangkan oleh kumpulan.",
    details: { Umur: "21", Status: "Pelajar Niskala", Kampus: "Inderaputera", Aktiviti: "Simulasi Metropoli", Kumpulan: "Faiz • Harith • Danish • Arman", Sifat: "Tenang • Analitikal • Berhemat" }
  },
  {
    name: "Hakim Aiman bin Rosli", category: "student",
    role: "Rakan Universiti Lama",
    image: "assets/characters/hakim-aiman.webp",
    quote: "Kalau peluang besar datang, aku takkan pura-pura tak nampak.",
    description: "Rakan Faiz sebelum Niskala. Hakim pernah bergurau bahawa dia akan meninggalkan universitinya jika diberi peluang memasuki Niskala.",
    details: { Umur: "21", Status: "Mahasiswa Universiti", Institusi: "Universiti lama Faiz", Hubungan: "Rakan Faiz", Sifat: "Ramah • Banyak cakap • Spontan", Pengetahuan: "Mengenali reputasi Niskala", Catatan: "Sering mempersoalkan perangai Faiz" }
  },
  {
    name: "Iqbal Haziq bin Zulkarnain", category: "student",
    role: "Rakan Universiti Lama",
    image: "assets/characters/iqbal-haziq.webp",
    quote: "Kadang-kadang nama besar lebih menakutkan daripada perkara yang kita benar-benar faham.",
    description: "Seorang lagi rakan Faiz sebelum Niskala. Iqbal antara individu yang memperkenalkan perbualan tentang reputasi Niskala sebelum Faiz menerima surat.",
    details: { Umur: "21", Status: "Mahasiswa Universiti", Institusi: "Universiti lama Faiz", Hubungan: "Rakan Faiz", Sifat: "Rasional • Tenang • Pemerhati", Catatan: "Mengenali reputasi alumni Niskala" }
  },
  {
    name: "Mia Adalika binti Zulkifli", category: "student",
    role: "Mahasiswa • Niskala",
    image: "assets/characters/mia-adalika.webp",
    quote: "Peraturan wujud supaya manusia tidak hilang arah apabila keadaan mula retak.",
    description: "Seorang pelajar yang tegas, tersusun dan memiliki aura kepimpinan yang kuat. Mia melihat dunia dengan disiplin, tanggungjawab dan ketepatan yang sukar dipertikaikan.",
    details: { Umur: "21", Status: "Pelajar Niskala", Institusi: "Niskala", Sifat: "Tegas • Berdisiplin • Berwibawa", Pemerhatian: "Memiliki aura kepimpinan yang kuat" }
  },
  {
    name: "Azlina Nadia binti Rahman", category: "staff",
    role: "Staf Akademik • Fakulti Ekonomi",
    image: "assets/characters/azlina-nadia.webp",
    quote: "Kadangkala, yang kita mahu hanya kepastian, bukan janji kosong.",
    description: "Azlina kelihatan yakin dan profesional, namun di sebalik ketegasan itu dia juga rapuh apabila melibatkan perasaan. Dia tahu apa yang dimahukan dan tidak lagi mahu berada dalam hubungan yang samar tanpa arah.",
    details: { Umur: "34", Status: "Staf Akademik", Institusi: "Fakulti Ekonomi", Sifat: "Matang • Ekspresif • Tegas • Realistik", Hubungan: "Terlibat dalam hubungan sulit dengan Dr. Zafran", Catatan: "Mencari kepastian dan tidak mahu dipermainkan" }
  },

  /* ---------- Watak baharu (rujuk 01_Kitab_Watak_dan_Latar_Niskala.md) ----------
     Penerangan sengaja tidak membocorkan rahsia plot.
     image: null  -> paparan "Rekod visual disekat" jika tiada potret. */
  {
    name: "Alin Mastura binti Firdaus Ahmad", category: "student",
    role: "Mahasiswa • Inderaputera",
    image: "assets/characters/alin-mastura.webp", focus: "45% 25%",
    description: "Sahabat Mia dan anak tunggal Dato' Firdaus. Sentiasa dibayangi nama besar ayahnya, dan lebih takut dibandingkan dengan ayahnya daripada takut gagal.",
    details: { Umur: "20", Status: "Pelajar Niskala • Tahun 2", Kampus: "Inderaputera", Keluarga: "Anak tunggal Dato' Firdaus", Hubungan: "Sahabat Mia", Catatan: "Bergelut dengan dua subjek teras" }
  },
  {
    name: "Nur Haziqah Humaira", category: "student",
    role: "Mahasiswa • Inderaputera",
    image: "assets/characters/nur-haziqah.webp", focus: "50% 22%",
    description: "Penolong kurator Galeri Warisan Inderaputera. Idealis dan percaya bahawa peraturan wujud untuk dipatuhi, walaupun apabila kebenaran itu menyakitkan orang yang dikenali.",
    details: { Umur: "20", Status: "Pelajar Niskala • Tahun 2", Kampus: "Inderaputera", Peranan: "Penolong Kurator Galeri Warisan", Sifat: "Idealis • Berprinsip • Teliti", Keluarga: "Anak tunggal Puan Rohaya" }
  },
  {
    name: "Sarjan Amri Hassan", category: "other",
    role: "Polis Bantuan Niskala",
    image: "assets/characters/sarjan-amri.webp", focus: "55% 20%",
    description: "Pegawai Polis Bantuan Niskala yang letih tetapi jujur pada asalnya. Hidupnya berputar di sekitar anaknya, Irfan, yang sedang dirawat di Pusat Perubatan Niskala.",
    details: { Umur: "44", Status: "Sarjan, Polis Bantuan Niskala", Keluarga: "Bapa kepada Irfan (9 tahun)", Sifat: "Letih • Berhati-hati • Pendiam", Catatan: "Pegawai kes di kampus" }
  },
  {
    name: "Dato' Firdaus Ahmad bin Isa", category: "other",
    role: "Alumni Mahawangsa • Firdaus Nanotek",
    image: "assets/characters/dato-firdaus.webp", focus: "50% 18%",
    description: "Pengasas Firdaus Nanotek dan alumni Mahawangsa yang berjaya. Di sebalik reputasi besar, ada sejarah perniagaan lama yang jarang dia sebut.",
    details: { Umur: "52", Status: "Pengasas Firdaus Nanotek", Alumni: "Mahawangsa", Keluarga: "Bapa kepada Alin Mastura", Sifat: "Berwibawa • Berhati-hati • Tertutup" }
  },
  {
    name: "Kelembai", category: "other",
    role: "Broker • Black Market",
    image: "assets/characters/kelembai.webp", focus: "50% 30%",
    description: "Broker bertopeng kayu di Black Market Niskala. Bercakap dalam teka-teki dan tidak pernah menjual maklumat tanpa harga yang 'setimpal'.",
    details: { Umur: "Tidak diketahui", Status: "Broker maklumat", Lokasi: "Black Market", Identiti: "Disekat", Catatan: "Tahu lebih banyak tentang Faiz daripada yang sepatutnya" }
  },
  {
    name: "Adi Hakimi", category: "student",
    role: "Mahasiswa • Tuah",
    image: "assets/characters/adi-hakimi.webp", focus: "50% 20%",
    description: "Anak orang kaya di Tuah yang angkuh dan sentiasa berkamera. Merakam apa-apa sahaja yang mungkin berguna kepadanya suatu hari nanti.",
    details: { Umur: "21", Status: "Pelajar Niskala • Tahun 3", Kampus: "Tuah", Sifat: "Angkuh • Licik • Oportunis", Tabiat: "Merakam segala-galanya" }
  },
  {
    name: "Inspektor Rozita Hamdan", category: "other",
    role: "Unit Integriti • Polis Niskala",
    image: "assets/characters/inspektor-rozita.webp", focus: "50% 15%",
    description: "Pegawai Unit Integriti Polis Niskala. Tenang, tajam, dan lebih suka memerhati dari jauh sebelum bertindak.",
    details: { Status: "Inspektor", Unit: "Unit Integriti Polis Niskala", Sifat: "Tenang • Tajam • Teliti" }
  }
];

const CHAPTERS = [
  { no: "01", title: "Pemerhatian", text: "Kehidupan biasa Faiz berubah apabila satu ujian mengejut membawa Dr. Zafran kepada nama yang sudah lama berada dalam pemerhatian Niskala." },
  { no: "02", title: "Ketibaan", text: "Faiz menaiki bas tanpa mengetahui lokasi sebenar Niskala sebelum ditempatkan di Mahawangsa dan bertemu Harith serta Danish." },
  { no: "03", title: "Cara Melihat", text: "Simulasi Metropoli mula menunjukkan cara Faiz melihat masalah, sementara sistem Mata Niskala memperlihatkan kesannya terhadap lima kampus." }
];
