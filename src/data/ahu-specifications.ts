export interface SpecItem {
  component: string;
  category: 'casing' | 'filter' | 'coil' | 'fan' | 'drainage' | 'control' | 'safety';
  star1: string;
  star2: string;
  standard?: string;
  details: string;
}

export const TECHNICAL_SPEC_MATRIX: SpecItem[] = [
  // Casing
  {
    component: "Internal Casing Plate",
    category: "casing",
    star1: "SS304 tebal 2.0 mm, Full-Welded",
    star2: "SS304 tebal 2.0 mm, Full-Welded + Coved Corner R=15mm",
    standard: "ISO 846 / ASTM A240",
    details: "Permukaan rata tanpa baut, sekrup, atau paku keling di airstream."
  },
  {
    component: "External Casing Plate",
    category: "casing",
    star1: "Mild Steel 1.2 mm + Electrostatic Powder Coating",
    star2: "Mild Steel 1.2 mm + Epoxy Powder Coating / Optional SS304",
    standard: "ASTM B117 Salt Spray Test",
    details: "Tahan korosi atmosfer luar ruangan dan benturan fisik."
  },
  {
    component: "Insulasi Casing",
    category: "casing",
    star1: "PU Foam 50 mm (Density 40-42 kg/m³)",
    star2: "Injected PU Foam 50 mm + Thermal Break Profile",
    standard: "EN 1886 Class T2 / TB2",
    details: "Mencegah kondensasi eksternal pada kelembapan lingkungan tropis."
  },
  // Filter
  {
    component: "Primary Filter (Pre-filter)",
    category: "filter",
    star1: "Camfil G4 Pleated Synthetic (48 mm)",
    star2: "Camfil G4 Pleated Synthetic (48 mm)",
    standard: "ISO 16890 (ePM10 ≥ 50%)",
    details: "Dilengkapi manometer diferensial Magnehelic analog / digital."
  },
  {
    component: "Secondary Filter (Medium)",
    category: "filter",
    star1: "Camfil F7 Mini-Pleat Glass Fiber",
    star2: "Camfil F9 High-Efficiency Mini-Pleat",
    standard: "ISO 16890 (ePM1 ≥ 80%)",
    details: "Rangka SS304 dengan clamping system kedap udara (zero bypass)."
  },
  // Coil
  {
    component: "Chilled Water / DX Coil",
    category: "coil",
    star1: "SS304 Tube 0.5 mm, Al Fin 0.23 mm, SS304 Frame",
    star2: "SS304 Tube 0.5 mm, Hydrophilic Al Fin 0.23 mm, SS304 Frame",
    standard: "Factory Test 20 Bar (2.0 MPa)",
    details: "Sirip hidrofilik dengan proteksi anti-microbial coating."
  },
  {
    component: "Steam Coil Chamber",
    category: "coil",
    star1: "Tidak Tersedia (Opsi Elektrik Heater)",
    star2: "SS304 Tube 1.0 mm, Tekanan Operasional Maks 6.0 Bar",
    standard: "ASME Boiler & Pressure Vessel",
    details: "Khusus siklus sanitasi uap farmasi & kontrol kelembapan presisi."
  },
  // Fan & Motor
  {
    component: "Kipas Distribusi (Fan)",
    category: "fan",
    star1: "Comefri (Italy) Backward-Curved Plug Fan",
    star2: "Comefri (Italy) High-Pressure Plug Fan",
    standard: "AMCA 210 / ISO 5801",
    details: "Direct-drive tanpa sabuk (beltless), bebas serbuk debu karet."
  },
  {
    component: "Motor Penggerak",
    category: "fan",
    star1: "ABB IE2 High Efficiency, 3-Phase 380V",
    star2: "ABB IE2 / IE3 Premium Efficiency, VFD Rated 30-50 Hz",
    standard: "IEC 60034-30-1",
    details: "Modulasi kecepatan via inverter untuk menjaga static pressure konstan."
  },
  // Drainage
  {
    component: "Drain Pan Kondensat",
    category: "drainage",
    star1: "SS304 Integral, Kemiringan 2% ke pipa outlet",
    star2: "SS304 Sanitary Coved, Kemiringan Multidireksional 2%",
    standard: "VDI 6022 Cleanability",
    details: "Drain trap sistem bola quick-coupling, anti-aliran balik aroma/udara kotor."
  },
  // Safety & Control
  {
    component: "Sistem Keamanan Pintu (Safety)",
    category: "safety",
    star1: "Safety Limit Switch + Mechanical Handle Lock",
    star2: "Safety Interlock + Magnetic Door Lock + LOTO Isolator Switch",
    standard: "CE Machinery Safety Directive",
    details: "Fan otomatis mati instan jika pintu dibuka saat operasi."
  },
  {
    component: "Kontrol & Otomasi",
    category: "control",
    star1: "Dedicated Microprocessor / HMI Touchscreen 7 inci",
    star2: "Industrial PLC + Multi-Level Password HMI + Modbus SCADA / BMS",
    standard: "21 CFR Part 11 Audit Trail Ready",
    details: "Integrasi monitoring temperatur, RH%, differential pressure, & alarm."
  }
];

export const FAQ_ITEMS = [
  {
    question: "Apa perbedaan paling mendasar antara AHU Star 1 dan AHU Star 2?",
    answer: "AHU Star 1 dirancang sebagai solusi higienis standar untuk cleanroom ISO Class 7/8, industri F&B, dan kosmetik dengan koil chilled water atau DX. Sedangkan AHU Star 2 dirancang khusus untuk industri farmasi regulasi ketat (ISO Class 5 / GMP Grade A/B) yang membutuhkan internal casing bersudut lengkung coved R=15mm, steam coil 6 bar untuk sterilisasi termal, serta kontrol PLC dengan kesiapan integrasi SCADA/BMS 21 CFR Part 11."
  },
  {
    question: "Mengapa desain full-welded SS304 tanpa sekrup sangat krusial untuk AHU higienis?",
    answer: "Pada AHU komersial biasa, sambungan baut dan sekrup menciptakan celah mikro (crevices) yang menjadi perangkap kotoran, debu, dan air kondensat. Kondisi lembap ini menjadi sarang perkembangbiakan bakteri dan jamur. Konstruksi full-welded SS304 dengan finishing halus rata menghilangkan titik mati tersebut dan memungkinkan pembersihan kimiawi total (CIP/washdown)."
  },
  {
    question: "Apakah AHUStar menyediakan dokumen kualifikasi validasi (DQ, IQ, OQ)?",
    answer: "Ya. Khusus untuk proyek farmasi dan rumah sakit, kami menyediakan paket dokumentasi lengkap mencakup Design Qualification (DQ), Installation Qualification (IQ), Operational Qualification (OQ), serta protokol Factory Acceptance Test (FAT) dan Site Acceptance Test (SAT) untuk mempermudah proses audit BPOM."
  },
  {
    question: "Berapa lama estimasi lead time fabrikasi dan pengiriman unit?",
    answer: "Lead time standar untuk unit kustom berkisar antara 4 hingga 8 minggu kerja setelah persetujuan gambar kerja teknik (Shop Drawing) dan kalkulasi psikrometrik disetujui bersama tim engineering Anda."
  },
  {
    question: "Apakah sistem kontrol AHUStar dapat diintegrasikan dengan Building Management System (BMS) yang sudah ada?",
    answer: "Sangat bisa. Sistem kontrol kami dilengkapi dengan port komunikasi standar industri seperti Modbus RTU/TCP, BACnet IP, atau Profinet yang kompatibel dengan seluruh platform BMS/SCADA terkemuka (Siemens, Schneider, Honeywell, dll)."
  }
];
