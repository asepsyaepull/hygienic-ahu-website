/**
 * SITE CONTENT & STATIC COPYWRITING CONFIGURATION
 *
 * Seluruh teks statis, label tombol, headline, kontak, dan konten landing page
 * dikumpulkan di file ini agar mudah di-maintenance oleh tim marketing/sales/klien
 * tanpa perlu menyentuh kode komponen UI (Zero Hardcoded Strings).
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface BenefitItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Sparkles' | 'Gauge' | 'Lock';
  bullets: string[];
}

export interface ProductCardData {
  id: 'star1' | 'star2';
  badge: string;
  name: string;
  tagline: string;
  description: string;
  cleanroomClass: string;
  pills: string[];
  keySpecs: { label: string; value: string }[];
  highlight: string;
  recommendedFor: string;
}

export interface TechFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'Layers' | 'Filter' | 'Wind' | 'Flame' | 'Cpu' | 'ShieldAlert';
  badge: string;
  specs: string[];
}

export interface ProcessStep {
  stepNumber: string;
  stageName: string;
  title: string;
  description: string;
  iconName: 'Calculator' | 'Compass' | 'ShieldCheck' | 'ClipboardCheck';
  duration: string;
  qualificationCode: string;
  deliverables: string[];
  qualityGate: string;
}

export interface ProcessDossier {
  badge: string;
  title: string;
  description: string;
  documents: { code: string; label: string }[];
  ctaLabel: string;
  ctaMessage: string;
}

export const SITE_CONTENT = {
  // Global Company & Contact Information
  company: {
    brandName: "AHUStar",
    brandSubtitle: "Hygienic Cleanroom HVAC",
    legalName: "PT ERAPUTRA RAHAYU ENGGINEERING",
    whatsappNumber: "6287889979297", // Format: kode negara tanpa +
    whatsappDisplay: "+62 878-8997-9297",
    phoneDisplay: "+62 21 2900-3698",
    emailSupport: "sales@renluft.co.id",
    officeAddress: "KAWASAN BITZPOINT, JALAN HOKAIDO NOMOR 23, Desa/Kelurahan Sukamulya, Kec. Cikupa, Kab. Tangerang, Provinsi Banten, Kode Pos: 15710",
    operatingHours: "24 Jam",
  },

  // Navbar Configuration
  navigation: {
    navLinks: [
      { label: "Keunggulan", href: "#keunggulan" },
      { label: "Produk Star", href: "#produk" },
      { label: "Proyek", href: "#proyek" },
      { label: "Teknologi", href: "#teknologi" },
      { label: "Spesifikasi", href: "#spesifikasi" },
      { label: "Alur Kualifikasi", href: "#alur" },
      { label: "FAQ", href: "#faq" },
    ] as NavItem[],
    ctaButton: "Minta Penawaran",
  },

  // Hero Section
  hero: {
    badge: "Spesialis AHU Higienis Standar Farmasi & Healthcare",
    headline: "Solusi Tata Udara Higienis Presisi Tinggi untuk Industri Steril",
    headlineHighlight: "Industri Steril",
    subheadline:
      "Unit Penanganan Udara (Hygienic AHU) bersertifikasi ISO 16890, EN 1751 Class 2, dan ISO 846. Konstruksi full-welded SS304 anti-kontaminasi, dirancang khusus untuk memenuhi kepatuhan audit CPOB / EU-GMP dan ruang bersih kritis.",
    ctaPrimary: "Konsultasi & Minta Penawaran",
    ctaSecondary: "Eksplorasi Anatomi Teknis",
    trustRibbonTitle: "Standar Validasi & Kepatuhan:",
    trustRibbonItems: [
      "SS304 Full-Welded",
      "ISO 16890 Filtration",
      "EN 1751 Class 2 Tightness",
      "ISO 846 Antimicrobial",
      "CPOB 2024 Compliant",
    ],
  },

  // Metric Strip (Social & Technical Proof)
  metrics: [
    { value: "500+", label: "Unit Terpasang", sublabel: "Di industri manufaktur & kesehatan" },
    { value: "120+", label: "Fasilitas Farmasi", sublabel: "Lolos audit CPOB / BPOM berkala" },
    { value: "99.9%", label: "Uptime Operasional", sublabel: "Didukung motor ABB & kipas Comefri" },
    { value: "4-8 Mgg", label: "Lead Time Fabrikasi", sublabel: "Kustomisasi engineering fleksibel" },
  ] as MetricItem[],

  // Benefits Section (4 Pillars of Hygiene)
  benefits: {
    badge: "Standar Rekayasa Higienis",
    headline: "Dirancang dari Nol untuk Meniadakan Risiko Kontaminasi",
    subheadline:
      "Berbeda dari AHU komersial gedung biasa, AHUStar dibangun dengan prinsip sanitasi tanpa kompromi untuk mencegah pertumbuhan mikroba dan partikel bebas.",
    items: [
      {
        id: "welded-casing",
        badge: "Sanitary Integrity",
        title: "Konstruksi SS304 Full-Welded",
        description:
          "Internal casing pelat Stainless Steel SS304 2.0 mm dilas penuh (full-welded) tanpa baut, sekrup, atau paku keling di jalur aliran udara.",
        iconName: "ShieldCheck",
        bullets: [
          "Bebas celah mikro (no crevices) tempat bersarangnya bakteri",
          "Tahan pencucian kimiawi berkala (CIP/Washdown ready)",
          "Finishing permukaan halus standar sanitasi farmasi",
        ],
      },
      {
        id: "drainage",
        badge: "Zero Water Stagnation",
        title: "100% Drain Pan Anti-Genangan",
        description:
          "Talang air kondensat integral berbahan SS304 dengan kemiringan multidireksional 2% memastikan air pembuangan mengalir seketika.",
        iconName: "Sparkles",
        bullets: [
          "Kemiringan 2% mencegah genangan air penyebab lumut & Legionella",
          "Quick-coupling ball-lock drain trap anti-backflow",
          "Koneksi drainase mudah diinspeksi dan dibersihkan",
        ],
      },
      {
        id: "aerodynamics",
        badge: "Energy & Efficiency",
        title: "Kipas Comefri + Motor ABB IE2",
        description:
          "Direct-drive backward-curved plug fan dari Comefri (Italia) dipadu motor efisiensi tinggi ABB IE2 bersertifikasi AMCA & IEC.",
        iconName: "Gauge",
        bullets: [
          "Belt-less direct drive: 0% risiko kontaminasi serbuk karet sabuk",
          "Modulasi kecepatan 30–50 Hz via Inverter (VFD)",
          "Getaran ultra-rendah dengan spring vibration isolator",
        ],
      },
      {
        id: "safety-loto",
        badge: "Personnel & Facility Safety",
        title: "Proteksi Multi-Lapis & LOTO",
        description:
          "Pintu inspeksi kedap udara dilengkapi safety interlock, kunci magnetik, lampu inspeksi IP65, dan sakelar isolasi LOTO.",
        iconName: "Lock",
        bullets: [
          "Safety interlock otomatis mematikan kipas saat pintu dibuka",
          "Local Isolator (LOTO) menjamin keamanan teknisi saat maintenance",
          "Differential pressure switch mendeteksi penyumbatan filter",
        ],
      },
    ] as BenefitItem[],
  },

  // Product Selection (Star 1 vs Star 2)
  products: {
    badge: "Pilihan Lini Produk",
    headline: "Pilih Varian Sesuai Klasifikasi Ruangan Anda",
    subheadline:
      "Tersedia dalam dua konfigurasi rekayasa: Star 1 untuk ruang bersih standar higienis, dan Star 2 untuk fasilitas steril farmasi kepatuhan GMP penuh.",
    items: [
      {
        id: "star1",
        badge: "HYGIENIC STANDARD",
        name: "AHU Star 1",
        tagline: "Solusi Higienis Fondasional untuk Ruang Bersih & Industri F&B",
        description:
          "Konfigurasi higienis esensial dengan konstruksi full-welded SS304 2mm, filtrasi bertingkat Camfil G4 + F7, serta kontrol HMI touchscreen.",
        cleanroomClass: "ISO Class 7 / Class 8 (Ruang Bersih Umum)",
        pills: ["SS304 Full-Welded", "G4 + F7 Filter", "Comefri Plug Fan", "HMI 7 Inci"],
        keySpecs: [
          { label: "Casing Internal", value: "SS304 2.0 mm Full-Welded" },
          { label: "Sistem Filtrasi", value: "G4 Pre + F7 Medium (Camfil USA)" },
          { label: "Koil Termal", value: "Chilled Water / DX System" },
          { label: "Penggerak", value: "Comefri Direct Plug Fan + ABB IE2" },
          { label: "Kontrol", value: "Dedicated HMI Touchscreen Panel" },
        ],
        highlight: "Ideal untuk industri makanan/minuman, packaging farmasi sekunder, laboratorium, dan kosmetik.",
        recommendedFor: "F&B, Kosmetik, Cleanroom ISO 7/8, RS Kelas Standar",
      },
      {
        id: "star2",
        badge: "ADVANCED GMP / STERILE",
        name: "AHU Star 2",
        tagline: "Konfigurasi Lanjutan untuk Fasilitas Aseptis & Farmasi CPOB",
        description:
          "Dirancang untuk persyaratan regulasi paling ketat. Dilengkapi sudut membulat coved R=15mm, Steam Coil 6 bar, SCADA ready, dan dual LOTO.",
        cleanroomClass: "ISO Class 5 / GMP Grade A/B (Ruang Aseptis)",
        pills: ["Coved R=15mm", "Steam Coil 6 Bar", "F9 + HEPA Ready", "Full SCADA / BMS"],
        keySpecs: [
          { label: "Casing Internal", value: "SS304 2.0 mm + Coved Radius R=15mm" },
          { label: "Sistem Filtrasi", value: "G4 Pre + F9 High-Eff + Terminal HEPA Ready" },
          { label: "Koil Termal", value: "Chilled Water + Steam Coil (Rating 6 Bar)" },
          { label: "Penggerak", value: "Comefri Plug Fan + Motor ABB IE2/IE3 + VFD" },
          { label: "Kontrol", value: "PLC Industrial + HMI + Modbus SCADA BMS" },
        ],
        highlight: "Memenuhi seluruh pedoman CPOB 2024, EU-GMP Annex 1, dan validasi FDA untuk produksi steril.",
        recommendedFor: "Pabrik Farmasi Steril, Ruang Operasi RS, Bioteknologi",
      },
    ] as ProductCardData[],
  },

  // Technology Section
  technology: {
    badge: "Komponen Kelas Dunia",
    headline: "Material Terpilih dari Prinsipal Industri Terkemuka",
    subheadline:
      "Kami hanya bermitra dengan produsen komponen tier-1 dunia untuk memastikan unit AHU beroperasi 24/7 tanpa henti dengan degradasi minimal.",
    features: [
      {
        id: "casing",
        title: "Casing & Struktur Termal",
        subtitle: "Thermal Break & SS304 2mm",
        description:
          "Rangka ekstrusi aluminium dengan profil pemutus jembatan termal (thermal break) dan insulasi injected PU foam 50mm untuk mencegah kondensasi di iklim tropis.",
        iconName: "Layers",
        badge: "EN 1886 T2/TB2",
        specs: ["Internal SS304 2mm", "PU Foam 40-42 kg/m³", "External powder coating 1.2mm"],
      },
      {
        id: "filtration",
        title: "Sistem Filtrasi Camfil (USA)",
        subtitle: "Uji Partikulat ISO 16890",
        description:
          "Menggunakan media filtrasi sintetis dan fiberglass berkinerja tinggi dari Camfil, dilengkapi sistem penjepit kedap udara bebas kebocoran bypass.",
        iconName: "Filter",
        badge: "ISO 16890 / ISO 846",
        specs: ["Pre-filter G4 ePM10 ≥ 50%", "Medium F7/F9 ePM1 ≥ 80%", "Digital Differential DP Switch"],
      },
      {
        id: "aerodynamics",
        title: "Dinamika Udara Comefri & ABB",
        subtitle: "Plug Fan & Variable Frequency Drive",
        description:
          "Desain kipas tanpa sabuk (direct-drive) yang seimbang secara dinamis (AMCA 210), dipacu motor ABB efisiensi tinggi dengan modulasi kecepatan 30-50 Hz.",
        iconName: "Wind",
        badge: "IEC 60034 IE2",
        specs: ["Impeller backward-curved", "Inverter duty motor", "Spring vibration isolator"],
      },
      {
        id: "thermodynamics",
        title: "Koil Pendingin & Uap 6 Bar",
        subtitle: "Dehumidifikasi & Pemanasan Presisi",
        description:
          "Pipa Stainless Steel SS304 tahan korosi dipadu sirip aluminium hidrofilik. Khusus Star 2, koil steam mampu menahan tekanan uap hingga 6.0 bar.",
        iconName: "Flame",
        badge: "Test Pressure 20 Bar",
        specs: ["Tube SS304 0.5-1.0mm", "Fin aluminium 0.23mm", "Steam rating 6.0 bar"],
      },
      {
        id: "automation",
        title: "Otomasi & SCADA BMS Ready",
        subtitle: "PLC Controller & Audit Trail",
        description:
          "Panel kontrol industri dengan layar sentuh HMI interaktif, proteksi multi-level password, serta protokol komunikasi Modbus TCP/IP untuk BMS terpusat.",
        iconName: "Cpu",
        badge: "21 CFR Part 11 Ready",
        specs: ["Siemens/Delta PLC", "HMI Color Touchscreen", "Data logging & error codes"],
      },
      {
        id: "safety-sanitary",
        title: "Sanitasi & Kepatuhan LOTO",
        subtitle: "Cleanable & Worker Safety",
        description:
          "Talang pembuangan bersudut 2%, pintu akses ganda dengan sakelar interlock keselamatan, viewport kaca ganda, serta sakelar pemutus LOTO.",
        iconName: "ShieldAlert",
        badge: "VDI 6022 Cleanability",
        specs: ["Drain pan slope 2%", "Magnetic door interlock", "LOTO safety isolator"],
      },
    ] as TechFeature[],
  },

  // Specifications Matrix Section
  specifications: {
    badge: "Data Lembar Spesifikasi",
    headline: "Tabel Spesifikasi Teknis Lengkap",
    subheadline:
      "Gunakan filter kategori atau pencarian instan untuk mengecek kesesuaian parameter teknis unit terhadap dokumen tender proyek Anda.",
    searchPlaceholder: "Cari komponen (contoh: SS304, ABB, Camfil, Drain, Steam)...",
    downloadButton: "Unduh Datasheet Teknis (PDF)",
    filterCategories: [
      { id: "all", label: "Semua Kategori" },
      { id: "casing", label: "Casing & Struktur" },
      { id: "filter", label: "Filtrasi" },
      { id: "coil", label: "Koil Termal" },
      { id: "fan", label: "Kipas & Motor" },
      { id: "drainage", label: "Drainase" },
      { id: "safety", label: "Safety" },
      { id: "control", label: "Kontrol & Otomasi" },
    ],
  },

  // Process Section (4-Stage Engineering & Qualification Journey)
  process: {
    badge: "Alur Rekayasa & Kualifikasi",
    headline: "Dari Kalkulasi Psikrometrik Hingga Validasi Siap Audit BPOM",
    subheadline:
      "Setiap unit diproduksi melalui protokol stage-gate yang ketat untuk menjamin kepatuhan higienis, akurasi termal, dan kemudahan inspeksi CPOB / ISO.",
    steps: [
      {
        stepNumber: "01",
        stageName: "Tahap Pra-Desain",
        title: "Audit Desain & DQ",
        description:
          "Kalkulasi psikrometrik, beban termal (°C / %RH), airflow CFM, dan verifikasi matriks URS bersama konsultan MEP.",
        iconName: "Calculator",
        duration: "1–3 Hari",
        qualificationCode: "Design Qualification (DQ)",
        deliverables: [
          "Kalkulasi Psikrometrik & Heat Load",
          "Matriks Verifikasi URS Konsultan",
        ],
        qualityGate: "Sign-off Konsultan & Klien",
      },
      {
        stepNumber: "02",
        stageName: "Tahap Fabrikasi",
        title: "Pemodelan 3D & Fabrikasi",
        description:
          "Penyusunan Shop Drawing 3D detail, pemotongan laser CNC, dan pengelasan higienis TIG SS304 dengan sertifikat material resmi.",
        iconName: "Compass",
        duration: "2–4 Minggu",
        qualificationCode: "Standar EN 1886",
        deliverables: [
          "Shop Drawing & 3D GA As-Built",
          "Mill Certificate SS304 Resmi",
        ],
        qualityGate: "Inspeksi Presisi ±1mm",
      },
      {
        stepNumber: "03",
        stageName: "Tahap Uji Pabrik",
        title: "Uji Fungsi Pabrik (FAT)",
        description:
          "Pengujian kebocoran casing kabinet (EN 1886 L1/L2), balancing dinamis kipas Comefri, dan inspeksi filter di workshop.",
        iconName: "ShieldCheck",
        duration: "1–2 Hari",
        qualificationCode: "Protokol Uji FAT",
        deliverables: [
          "Uji Kebocoran Casing Class L1/L2",
          "Balancing Dinamis Impeller",
        ],
        qualityGate: "Berita Acara FAT Lolos QA",
      },
      {
        stepNumber: "04",
        stageName: "Tahap Commissioning",
        title: "Validasi Lapangan (IQ/OQ)",
        description:
          "Perakitan di site, air balancing (TAB), uji integritas kebocoran HEPA PAO, dan serah terima dokumen validasi CPOB.",
        iconName: "ClipboardCheck",
        duration: "3–7 Hari",
        qualificationCode: "Validasi Siap Audit BPOM",
        deliverables: [
          "Airflow Balancing & PAO Test",
          "Bundel Protokol DQ / IQ / OQ / SAT",
        ],
        qualityGate: "Sertifikasi Siap Audit BPOM",
      },
    ] as ProcessStep[],
    dossier: {
      badge: "Dossier Validasi Farmasi",
      title: "Paket Berkas & Dokumen Kualifikasi Siap Audit BPOM / CPOB",
      description:
        "Kami menyertakan bundel protokol validasi lengkap untuk mempermudah fasilitas Anda melewati audit registrasi izin edar maupun sertifikasi CPOB berkala.",
      documents: [
        { code: "DQ", label: "Design Qualification & URS Matrix" },
        { code: "FAT", label: "Factory Acceptance Test Report" },
        { code: "IQ", label: "Installation Qualification Checklist" },
        { code: "OQ", label: "Operational Qualification Protocol" },
      ],
      ctaLabel: "Konsultasi Berkas & Kualifikasi Proyek",
      ctaMessage: "Halo Tim AHUStar, saya ingin berkonsultasi mengenai kebutuhan berkas kualifikasi dan protokol validasi (DQ/IQ/OQ/FAT/SAT) untuk proyek Hygienic AHU kami.",
    } as ProcessDossier,
  },

  // Projects Showcase (Solvix Signature Pattern)
  projects: {
    badge: "Portofolio Instalasi",
    headline: "Terpasang di Fasilitas Bersih Terkemuka di Indonesia",
    subheadline:
      "Studi kasus nyata pengoperasian unit AHUStar pada industri farmasi regulated, ruang bedah rumah sakit, dan manufaktur steril.",
    items: [
      {
        number: "01",
        client: "Fasilitas Produksi Vaksin & Steril (Cikarang)",
        industry: "Industri Farmasi CPOB",
        unitModel: "AHU Star 2 Modular (Dual Chamber)",
        airflow: "35,000 CFM",
        classification: "ISO Class 5 / GMP Grade A Aseptic",
        achievement: "100% Lulus Audit Kepatuhan BPOM & Prequalification WHO",
        description:
          "Pemasangan unit hygienic dengan steam coil 6 bar untuk siklus dekontaminasi uap otomatis dan integrasi SCADA 21 CFR Part 11.",
        tags: ["Steam Coil 6 Bar", "Camfil H14 Terminal", "SCADA BMS Ready"],
      },
      {
        number: "02",
        client: "Ruang Operasi Modular RS Bedah Jantung (Jakarta)",
        industry: "Healthcare / Hospital OT",
        unitModel: "AHU Star 2 Surgical Grade",
        airflow: "12,000 CFM",
        classification: "Positive Differential Pressure (+45 Pa)",
        achievement: "Tingkat Kebisingan < 48 dBA & Zero Vibration",
        description:
          "Kipas Comefri backward-curved tanpa belt dan damper kedap EN 1751 Class 2 menjamin kestabilan aliran laminar di atas meja operasi.",
        tags: ["Low Noise 48 dBA", "EN 1751 Class 2", "Inverter 30-50 Hz"],
      },
      {
        number: "03",
        client: "Fasilitas Pengolahan Susu & Makanan Bayi (Karawang)",
        industry: "Manufaktur Makanan Higienis (HACCP)",
        unitModel: "AHU Star 1 Sanitary Washdown",
        airflow: "28,000 CFM",
        classification: "Cleanroom Class 100,000 (ISO 8)",
        achievement: "Efisiensi Energi 22% Lebih Hemat via ABB IE2",
        description:
          "Internal casing SS304 full-welded tahan semprotan disinfektan harian dengan talang pembuangan slope 2% bebas genangan.",
        tags: ["Full-Welded SS304", "ABB IE2 High-Eff", "Washdown CIP Ready"],
      },
    ],
  },

  // Client Testimonials
  testimonials: {
    badge: "Validasi Pengguna",
    headline: "Dipercaya oleh Praktisi Engineering & QA",
    subheadline:
      "Simak bagaimana unit AHUStar membantu kelancaran audit regulasi dan keandalan operasional fasilitas terkontrol.",
    items: [
      {
        quote:
          "Konstruksi internal SS304 full-welded dari AHUStar membuat proses kualifikasi fasilitas farmasi kami berjalan sangat mulus. Tim auditor BPOM terkesan dengan ketiadaan baut di airstream dan drain pan bersudut 2% yang benar-benar kering.",
        author: "Ir. Handoko Setiawan, M.Eng",
        role: "Project & Engineering Director",
        company: "Produsen Bio-Farmasi Terkemuka",
        avatarInitial: "HS",
        rating: 5,
      },
      {
        quote:
          "Motor ABB IE2 dipadu kipas Comefri direct-drive bekerja sangat senyap dan stabil. Pengujian kebisingan di ruang operasi kami memenuhi standar Kementerian Kesehatan tanpa kompromi pada static pressure.",
        author: "dr. Hendra Wicaksono, Sp.B",
        role: "Kepala Komite Medis & Fasilitas",
        company: "Rumah Sakit Khusus Bedah",
        avatarInitial: "HW",
        rating: 5,
      },
      {
        quote:
          "Kombinasi filter Camfil bersertifikasi ISO 16890 dan sistem LOTO pintu inspeksi sangat memudahkan tim maintenance kami. After-sales engineer sangat responsif dalam penyusunan berkas FAT/SAT.",
        author: "Ratna Kusuma Dewi",
        role: "QA & Compliance Manager",
        company: "FMCG Dairy & Infant Nutrition",
        avatarInitial: "RK",
        rating: 5,
      },
    ],
  },

  // FAQ Section
  faqSection: {
    badge: "Tanya Jawab Teknis",
    headline: "Pertanyaan yang Sering Diajukan",
    subheadline:
      "Jawaban langsung seputar standar kepatuhan, material, proses validasi, dan integrasi Building Management System.",
  },

  // CTA Banner (Bottom of Page)
  ctaBanner: {
    headline: "Siap Meningkatkan Standar Tata Udara Fasilitas Anda?",
    subheadline:
      "Diskusikan kebutuhan spesifik ruangan bersih Anda bersama tim engineering AHUStar untuk mendapatkan rekomendasi kapasitas, dimensi, dan simulasi penawaran terbaik.",
    buttonRfq: "Minta Penawaran Sekarang",
    buttonWa: "Hubungi Sales via WhatsApp",
  },

  // Footer Section
  footer: {
    tagline: "Spesialis Air Handling Unit higienis berstandar CPOB dan ISO untuk industri manufaktur presisi dan ruang bersih di Indonesia.",
    columnProducts: {
      title: "Produk & Varian",
      links: [
        { label: "AHU Star 1 (Cleanroom)", href: "#produk" },
        { label: "AHU Star 2 (Pharma GMP)", href: "#produk" },
        { label: "Koil Steam 6 Bar", href: "#teknologi" },
        { label: "Komponen Filtrasi Camfil", href: "#teknologi" },
      ],
    },
    columnEngineering: {
      title: "Rekayasa & Kualifikasi",
      links: [
        { label: "Alur Validasi DQ / IQ / OQ", href: "#alur" },
        { label: "Standar Kebocoran EN 1751", href: "#keunggulan" },
        { label: "Filtrasi Bersertifikat ISO 16890", href: "#teknologi" },
        { label: "Studi Kasus Ruang Bersih", href: "#proyek" },
      ],
    },
    columnContact: {
      title: "Workshop & Kontak",
      address: "KAWASAN BITZPOINT, JALAN HOKAIDO NOMOR 23, Desa/Kelurahan Sukamulya, Kec. Cikupa, Kab. Tangerang, Provinsi Banten, Kode Pos: 15710",
      email: "sales@renluft.co.id",
      phone: "+62 21 2900-3698",
      whatsapp: "+62 878-8997-9297",
    },
    disclaimer:
      "Seluruh data teknis, sertifikasi material, dan standar pengujian mengacu pada hasil tes laboratorium independen dan spesifikasi resmi prinsipal manufaktur.",
    copyright: "© 2026 AHUStar • PT ERAPUTRA RAHAYU ENGGINEERING. Seluruh hak cipta dilindungi undang-undang.",
  },
};
