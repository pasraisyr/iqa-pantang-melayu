import type { Achievement, BusinessInfo, FaqItem, FeatureItem, Product } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  namaBerdaftar: 'IQA PRESTIGE GLOBAL',
  jenama: 'IQA PANTANG MELAYU',
  pengasas: 'Iqa Helmy',
  tahunPenubuhan: '2026',
  jenisPerniagaan: 'Milikan Tunggal (Enterprise)',
  noPendaftaranSSM: '202603232653 (CT0168796-H)',
  negara: 'Malaysia',
  emelRasmi: 'iqaprestigeglobal@gmail.com',
  nomborPerhubungan: '+6019-9687696',
  whatsappNumber: '60199687696',
};

export const EXCLUSIVE_SET: Product = {
  id: 'set-pantang-premium',
  name: 'SET PANTANG MELAYU PREMIUM',
  subtitle: 'Koleksi Lengkap 14 Keperluan Berpantang + Percuma E-Book Panduan',
  price: 349,
  image: '/media/koleksi_pantang_ekslusif.jpg',
  isSet: true,
  description:
    'Raikan perjalanan keibuan dengan koleksi penjagaan berpantang eksklusif yang diinspirasikan daripada kehalusan warisan Melayu.',
  manfaat: [
    'Himpunan lengkap keperluan berpantang dalam satu pakej eksklusif.',
    'Mengharmonikan kebijaksanaan tradisi Melayu dengan keselamatan moden.',
    'Disertakan Percuma E-Buku Kitab IQA Pantang Melayu (Panduan 44 Hari).',
    'Pembungkusan premium sesuai untuk kegunaan sendiri mahupun hadiah istimewa.',
  ],
};

export const EXCLUSIVE_SET_ITEMS = [
  'Param, Pilis & Tapel Bidan',
  'Gel Mandian Maharani',
  'Minyak Bidan Kampong',
  'Bengkong Kebaya Primadona',
  'Balm Emas Anaknda',
  'Tungku Permata Sungai',
  'Tungku Kacang Ketot',
  'Lulur Bentara Hutan',
  'Sajian Pantang',
  'Akar Kayu Sukma Jelita',
  'Rempah Tangas Dewi Putik',
  'Limpah Susu',
  'Siraman Anakku',
  'Bunjut Pasak Seri',
];

export const EBOOK_CHAPTERS = [
  {
    num: '01',
    title: 'Panduan 44 Hari Berpantang',
    desc: 'Penjagaan diri & persediaan harian.',
  },
  {
    num: '02',
    title: 'Jadual Rutin Penjagaan Ibu',
    desc: 'Cadangan rutin hari ke-7, 14, 30 dan 44.',
  },
  {
    num: '03',
    title: 'Menu Pantang 14 Hari',
    desc: 'Inspirasi pemakanan seimbang.',
  },
  {
    num: '04',
    title: 'Panduan Penggunaan Produk',
    desc: 'Cara guna koleksi IQA PANTANG MELAYU.',
  },
  {
    num: '05',
    title: 'Panduan Bertungku & Berbengkung',
    desc: 'Teknik & langkah keselamatan.',
  },
  {
    num: '06',
    title: 'Penjagaan Diri Selepas Bersalin',
    desc: 'Kebersihan & keselesaan ibu.',
  },
  {
    num: '07',
    title: 'Senarai Keperluan Ibu & Bayi',
    desc: 'Senarai semak sebelum & selepas lahir.',
  },
  {
    num: '08',
    title: 'Rekod Harian Ibu',
    desc: 'Ruangan mencatat rutin & perkembangan.',
  },
  {
    num: '09',
    title: 'Panduan Keselamatan Ibu',
    desc: 'Tanda amaran & bila perlu jumpa doktor.',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'tungku-kacang-ketot',
    name: 'Tungku Kacang Ketot',
    subtitle: 'Tungku Bayi',
    image: '/media/tungku_kacang_ketot.jpg',
    description:
      'Tungku bayi digunakan secara tradisional untuk membantu memberikan keselesaan kepada bayi, khususnya selepas mandi atau ketika bayi mengalami ketidakselesaan tertentu seperti perut berangin.',
    kandungan: ['Halba', 'Ketumbar', 'Lada Hitam', 'Rempah Ratus Campuran'],
    manfaat: [
      'Membantu memberi kehangatan pada badan bayi.',
      'Membantu mengurangkan kembung atau angin dalam perut.',
      'Membantu bayi lebih selesa dan tenang.',
      'Membantu melancarkan peredaran badan bayi secara tradisional.',
      'Sesuai digunakan selepas mandi atau sebelum tidur.',
    ],
    kaedahPenggunaan: [
      'Panaskan tungku mengikut arahan produk.',
      'Pastikan suhu tungku suam dan tidak terlalu panas sebelum digunakan pada bayi.',
      'Uji dahulu suhu pada tangan orang dewasa.',
      'Letakkan atau tuam perlahan pada bahagian perut, tapak kaki, dan belakang badan.',
      'Gunakan dalam tempoh singkat secara lembut dan berhati-hati.',
    ],
    peringatan:
      'Sentiasa pantau suhu tungku. Elakkan penggunaan ketika bayi sedang tidur nyenyak atau jika kulit bayi sensitif/kemerahan.',
  },
  {
    id: 'tungku-permata-sungai',
    name: 'Tungku Permata Sungai',
    subtitle: 'Tungku Ibu',
    image: '/media/tungku_permata_sungai.jpg',
    description:
      'Tungku tradisional bertatahkan batu sungai pilihan untuk pemulihan rahim dan keselesaan tubuh ibu.',
    kandungan: [
      'Batu Sungai Kecil',
      'Halba',
      'Lada Hitam',
      'Ketumbar',
      'Rempah Ratus Campuran',
    ],
    manfaat: [
      'Membantu memberi kehangatan pada badan selepas bersalin.',
      'Membantu memberikan keselesaan pada bahagian perut, pinggang dan badan.',
      'Membantu ibu rasa lebih lega dan relaks.',
      'Membantu mengurangkan rasa tidak selesa akibat angin dalam badan.',
      'Membantu ibu menjalani tempoh berpantang dengan lebih selesa.',
    ],
    kaedahPenggunaan: [
      'Panaskan tungku mengikut arahan produk.',
      'Pastikan suhu tungku sesuai dan tidak terlalu panas. Uji pada tangan terlebih dahulu.',
      'Tuam atau letakkan tungku perlahan pada bahagian perut, pinggang, belakang badan, peha atau tapak kaki.',
      'Boleh digunakan selepas mandi atau ketika waktu berehat.',
    ],
    peringatan:
      'Elakkan penggunaan pada kawasan luka yang belum sembuh sepenuhnya (terutama kes C-Section).',
  },
  {
    id: 'akar-kayu-sukma-jelita',
    name: 'Akar Kayu Sukma Jelita',
    subtitle: 'Ubat Periuk',
    image: '/media/akar_kayu_sukma_jelita.jpg',
    beratBersih: '100gm',
    description:
      'Herba rebusan tradisional untuk kesihatan dalaman dan kesegaran tubuh ibu.',
    kandungan: [
      'Akar Serapat',
      'Manjakani',
      'Bunga Pakma',
      'Mas Cotek',
      'Larak Api',
      'Hamba Raja Emas',
      'Hamba Raja Perak',
      'Gajah Beranak',
      'Herba terpilih',
    ],
    kaedahPenggunaan: [
      'Cuci sekali lalu herba dan tapis.',
      'Masukkan air sehingga herba tenggelam.',
      'Rebus hingga mendidih dan air tersejat sedikit.',
      'Biarkan suam kuku, minum secawan sehari.',
      'Herba yang telah direbus boleh disimpan dalam peti sejuk dan direbus semula sehingga air rebusan tidak lagi berwarna dan tiada rasa.',
    ],
  },
  {
    id: 'lulur-bentara-hutan',
    name: 'Lulur Bentara Hutan',
    image: '/media/lulur_bentara_hutan.jpg',
    beratBersih: '120gm',
    description:
      'Lulur herba tradisional untuk melicinkan kulit, membuang sel mati dan menyegarkan badan.',
    kandungan: [
      'Lada hitam',
      'Cekur',
      'Halia',
      'Biji sawi',
      'Ketumbar',
      'Kunyit',
      'Halba',
      'Jintan hitam',
      'Tepung kacang hijau',
      'Tepung beras',
      '9 jenis herba berkualiti tinggi',
    ],
    manfaat: [
      'Menanggalkan sel-sel kulit mati & melembutkan bahagian kulit keras.',
      'Menyingkirkan toksin & mengeluarkan angin dalam badan.',
      'Memberi aroma wangi semula jadi pada badan.',
      'Sangat sesuai untuk kegunaan spa atau melulur sendiri di rumah.',
    ],
  },
  {
    id: 'bunjut-pasak-seri',
    name: 'Bunjut Pasak Seri',
    subtitle: 'Herba Mandian',
    image: '/media/bunjut_pasak_seri.jpg',
    description:
      'Dirumus khas sebagai herba mandian sesuai untuk ibu dalam pantang, wanita letih bekerja dan rendaman kaki.',
    kandungan: [
      'Daun Chapa',
      'Daun Meringan',
      'Daun Mengkudu Wangi',
      'Daun Lengkuas',
      'Daun Serai Wangi',
      'Daun Inai',
      'Daun Pandan',
      'Daun Pisang Kelat',
      'Daun Limau',
      'Daun Bidara',
    ],
    manfaat: [
      'Melancarkan peredaran darah.',
      'Membuang angin.',
      'Melegakan sengal-sengal otot.',
      'Melembutkan urat saraf.',
    ],
    kaedahPenggunaan: [
      'Rebus 1 bunjut herba dalam 1 periuk besar bersama 2 gayung air sehingga mendidih.',
      'Campurkan air rebusan dengan air biasa sehingga suam kuku untuk mandi/berendam.',
      '1 bunjut boleh digunakan sehingga 3 kali rebusan.',
    ],
  },
  {
    id: 'minyak-bidan-kampung',
    name: 'Minyak Bidan Kampung',
    image: '/media/minyak_bidang_kampong.jpg',
    description: 'Minyak urut tradisional berciri aromaterapi ringan.',
    manfaat: [
      'Membantu menghalau nyamuk dan serangga.',
      'Memberi rasa segar dan nyaman pada badan.',
      'Melegakan lenguh-lenguh ringan dan sakit badan.',
    ],
    kaedahPenggunaan: [
      'Sapukan pada kulit atau pakaian semasa urutan. (Elakkan terkena mata dan kawasan sensitif).',
    ],
  },
  {
    id: 'gel-mandian-maharani',
    name: 'Gel Mandian Maharani',
    image: '/media/gel_mandian_maharani.jpg',
    description: 'Gel mandian herba pembersih dan pemanas tubuh ibu.',
    kandungan: ['Akar Sintok', 'Cengkih', 'Temulawak', 'Sireh'],
    manfaat: [
      'Menyegarkan badan ibu berpantang.',
      'Memberi rasa hangat selepas mandi.',
      'Mengurangkan bau badan.',
    ],
    kaedahPenggunaan: [
      'Sapu dan urut perlahan pada seluruh badan semasa mandi, kemudian bilas sehingga bersih.',
    ],
  },
  {
    id: 'sajian-pantang',
    name: 'Sajian Pantang',
    subtitle: 'Bawang Putih & Halia',
    image: '/media/sajian_pantang.jpg',
    description:
      'Sajian ramuan tradisi untuk pemulihan dalaman dan membuang angin.',
    manfaat: [
      'Manfaat Bawang Putih: Membantu menguatkan sistem imun, kelancaran darah, dan antibakteria semula jadi.',
      'Manfaat Halia: Membantu membuang angin, melegakan kembung, memberi kesan hangat dan mengurangkan lenguh badan.',
    ],
  },
  {
    id: 'limpah-susu',
    name: 'Limpah Susu',
    subtitle: 'Milk Booster Kurma, Goji & Longan',
    image: '/media/limpah_susu.jpg',
    description: 'Minuman herba semula jadi penggalak susu ibu.',
    manfaat: [
      'Meningkatkan penghasilan susu ibu secara semula jadi.',
      'Memberi tenaga dan mengurangkan lesu selepas bersalin.',
      'Kaya antioksidan dan membantu menstabilkan emosi ibu.',
    ],
    kaedahPenggunaan: ['Rebus 1 pek untuk 2 kali minuman.'],
  },
  {
    id: 'rempah-tangas-dewi-putik',
    name: 'Rempah Tangas Dewi Putik',
    image: '/media/rempah_tangas_dewi_putik.jpg',
    description: 'Rawatan bertangas tradisional untuk kesihatan intim ibu.',
    kandungan: ['Halia', 'Kunyit', 'Habbatussauda', 'Herba terpilih'],
    manfaat: [
      'Membantu mengecutkan rahim secara semula jadi.',
      'Melancarkan peredaran darah.',
      'Membuang angin dan memberi rasa segar.',
    ],
  },
  {
    id: 'siraman-anakku',
    name: 'Siraman Anakku',
    subtitle: 'Mandian Kuning Bayi',
    image: '/media/siraman_anakku.jpg',
    beratBersih: '4 bunjut / pek (8gm setiap bunjut)',
    description: 'Bunjut herba mandian lembut khas untuk bayi tersayang.',
    manfaat: [
      'Menenangkan kulit bayi sensitif.',
      'Memberi haruman herba semula jadi.',
      'Mengurangkan ruam ringan.',
    ],
    kaedahPenggunaan: [
      'Rebus 1 bunjut dalam air mendidih (5–10 minit).',
      'Campurkan ke dalam air mandian bayi sehingga suam.',
      '(1 bunjut boleh diguna 2 kali).',
    ],
  },
  {
    id: 'set-param-pilis-tapel',
    name: 'Set Param, Pilis & Tapel Bidan',
    image: '/media/pilis_param_tapel.jpg',
    description:
      'Gandingan tiga serangkai herba luaran tradisi Melayu untuk kepala, badan dan perut ibu.',
    manfaat: [
      'Pilis (Sapu di dahi): Kayu manis, cengkih, pudina — Mengurangkan pening kepala, menyegarkan mata, elak masuk angin bahagian kepala.',
      'Param (Sapu di badan): Kayu manis, temulawak, limau nipis — Memanaskan badan, membuang angin, melegakan lenguh.',
      'Tapel (Sapu di perut): Temulawak, sireh, halia — Membantu mengecutkan perut dan kemaskan bahagian perut.',
    ],
  },
  {
    id: 'balm-emas-anaknda',
    name: 'Balm Emas Anaknda',
    image: '/media/balm_emas.jpg',
    description: 'Balm kehangatan lembut khusus untuk bayi.',
    kandungan: [
      'Daun Bidara',
      'Minyak Kayu Putih',
      'Minyak Herba Terpilih',
    ],
    manfaat: [
      'Memberikan keselesaan perut bayi.',
      'Kehangatan lembut.',
      'Melembapkan kulit.',
      'Membantu bayi relaks sebelum tidur.',
    ],
  },
  {
    id: 'bengkong-kebaya-primadona',
    name: 'Bengkong Kebaya Primadona',
    subtitle: 'Lentik & sihat seperti gadis perawan',
    image: '/media/bengkong_kebaya.jpg',
    description:
      'Bengkung belacu berkualiti tinggi dan berzip untuk menyokong postur dan bentuk tubuh ibu.',
    manfaat: [
      'Menyokong bahagian perut dan pinggang.',
      'Memperbaiki postur badan.',
      'Memberikan keselesaan dan mengembalikan bentuk tubuh ideal secara tradisional.',
    ],
  },
  {
    id: 'set-tembikar-sri-bonda',
    name: 'Set Pengurusan Uri - Tembikar Sri Bonda',
    image: '/media/tembikar_sri_bonda.jpg',
    description: 'Set lengkap pengurusan uri mengikut syariat dan adat Melayu.',
    kandungan: [
      'Tembikar Uri',
      'Asam Jawa',
      'Asam Kering',
      'Garam Kasar',
      'Kain Balut Tembikar',
      'Kain Batik Uri (3 unit)',
      'Face Mask',
      'Sarung Tangan',
      'Getah Pengikat',
    ],
  },
];

export const FOUNDER_ACHIEVEMENTS: Achievement[] = [
  { iconType: 'crown', title: 'Mrs Continental Tourism International 2022', country: 'Philippines' },
  { iconType: 'globe', title: 'Malaysia Cultural & Tourism Ambassador 2023', country: 'Malaysia' },
  { iconType: 'crown', title: 'Mrs Legend Universal 2025', country: 'Malaysia' },
  { iconType: 'crown', title: 'Mrs Queen Cheongsam International 2025', country: 'Taiwan' },
  { iconType: 'award', title: 'Cultural Beauty Queen of the Year', country: 'MFMPA' },
  { iconType: 'trophy', title: 'No. 1 Best Inspiring Woman', country: 'Indonesia' },
  { iconType: 'award', title: 'Pelbagai kemenangan dan pengiktirafan dalam bidang peragaan serta pertandingan kecantikan.' },
];

export const FEATURES: FeatureItem[] = [
  {
    iconType: 'shield',
    title: 'Warisan Melayu',
    desc: 'Diinspirasikan daripada keindahan tradisi penjagaan ibu turun-temurun.',
  },
  {
    iconType: 'crown',
    title: 'Koleksi Eksklusif',
    desc: 'Himpunan lengkap keperluan berpantang dalam satu pakej.',
  },
  {
    iconType: 'gift',
    title: 'Pembungkusan Premium',
    desc: 'Dipersembahkan secara elegan, sesuai untuk kegunaan sendiri atau hadiah.',
  },
  {
    iconType: 'book',
    title: 'Panduan Digital Percuma',
    desc: 'E-buku eksklusif melengkapi perjalanan berpantang.',
  },
  {
    iconType: 'heart',
    title: 'Sentuhan Kasih',
    desc: 'Dihasilkan dengan penuh penghormatan terhadap setiap ibu.',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Bila boleh mula menggunakan set pantang?',
    answer:
      'Masa mula penggunaan bergantung pada jenis produk, keadaan kesihatan ibu dan cara bersalin. Bagi bengkung, tungku dan mandian herba, ibu digalakkan mendapatkan nasihat doktor atau bidan bertauliah. Pastikan ibu berada dalam keadaan stabil dan selesa.',
  },
  {
    question: 'Adakah sesuai untuk ibu bersalin secara C-Section?',
    answer:
      'Sesetengah produk boleh digunakan bergantung pada keadaan luka pembedahan. Untuk bengkung, pastikan ia tidak menekan luka atau menyebabkan kesakitan. Dapatkan pengesahan doktor terlebih dahulu.',
  },
  {
    question: 'Boleh digunakan semasa menyusukan bayi?',
    answer:
      'Produk penjagaan luaran secara umumnya selamat, namun elakkan daripada terkena bahagian puting atau kawasan bersentuhan dengan mulut bayi.',
  },
  {
    question: 'Berapa lama satu set boleh digunakan?',
    answer:
      'Produk fabrik seperti bengkung boleh digunakan berulang kali. Bagi produk herba dan minyak, sila ikut arahan label dan tempoh penggunaan selepas dibuka.',
  },
  {
    question: 'Adakah produk mempunyai pendaftaran atau notifikasi?',
    answer:
      'Produk ini menggunakan bahan alami buatan tangan (homemade) tanpa bahan kimia berbahaya. Ia adalah untuk kegunaan luaran sahaja.',
  },
];
