# PRD — B2B Product Landing Page: Hygienic AHU (Star & Star 2)

**Project:** Official Product Landing Page — Hygienic Air Handling Unit (AHU) Star 1 & Star 2  
**Role:** Senior Technical Product Manager  
**Author:** Asep Syaepul Rohman (Product / UI-UX / Dev)  
**Version:** 2.0 (Production-Ready)  
**Date:** 2026-09-11  
**Status:** Ready for Design & Engineering Hand-off  
**Design Benchmark:** [Solvix Website](https://solvix.framer.website/) (Clean, modern industrial aesthetic & high-density layout)  

---

## 1. Executive Summary & Product Vision

Unit Penanganan Udara Higienis (**Hygienic AHU Star 1 & Star 2**) adalah lini produk HVAC industri berstandar tinggi yang dirancang khusus untuk lingkungan terkontrol: fasilitas farmasi (sesuai regulasi CPOB / EU-GMP), fasilitas healthcare / ruang operasi (RS), dan manufaktur makanan/minuman higienis (HACCP/ISO 22000).

Website landing page ini bukan sekadar brosur digital, melainkan **B2B Engineering Lead-Generation Engine & Technical Authority Hub**. Tujuannya adalah mengonversi *technical evaluators* (Konsultan HVAC, MEP Engineer, QA/QC Farmasi) dan *decision-makers* (Procurement & Facility Director) dari status pencari informasi menjadi prospek terverifikasi (Request for Quotation / RFQ & Consultation).

---

## 2. Problem Statement & Commercial Context

### Current Pain Points
1. **Technical Obscurity:** Spesifikasi unit saat ini terkunci di dalam file PDF statis yang tebal, sulit dinavigasi dari smartphone/tablet, dan tidak searchable.
2. **High Friction in Procurement:** Konsultan HVAC dan kontraktor kesulitan memvalidasi kesesuaian unit terhadap standar regulasi (CPOB, EN 1886, ISO 14644, ISO 16890, ISO 846) tanpa harus menghubungi sales secara manual.
3. **Low Conversion on General Channels:** Form kontak konvensional ("Hubungi Kami") menghasilkan leads berkualitas rendah tanpa data teknis awal (kapasitas CFM, static pressure, tipe cooling coil, standar ruangan).
4. **Differentiation Gap:** Prospek belum memahami perbedaan konkret antara model entri higienis (**Star 1**) dan model ultra-clean farmasi tingkat lanjut (**Star 2**).

---

## 3. B2B Buying Committee & Jobs-to-be-Done (JTBD)

Keputusan pembelian AHU industri bernilai ratusan juta hingga miliaran rupiah tidak dilakukan oleh 1 orang. Website harus memfasilitasi 4 persona utama:

| Persona | Peran dalam Proyek | Pertanyaan Kritis yang Harus Dijawab Website | Call-to-Action Utama |
| :--- | :--- | :--- | :--- |
| **Konsultan MEP / HVAC Engineer** | Evaluator Teknis & Pembuat Spesifikasi (Specifier) | *Apakah dimensi, fan curve (Comefri), motor efficiency (ABB IE2), coil pressure drop, dan damper leakage (EN 1751 Class 2) sesuai design basis proyek saya?* | Download Cut-Sheet / BIM-CAD / Spec Table |
| **QA / QC / Validation Manager (Pharma & Biotech)** | Compliance Gatekeeper | *Apakah material casing SS304 full-welded memenuhi ISO 846 (antimikroba)? Apakah ada pocket akumulasi debu/air? Bagaimana sertifikasi filtrasi ISO 16890?* | View Compliance Matrix & Casing Construction |
| **Facility & Maintenance Manager** | Operator & End-User Lapangan | *Apakah unit mudah dibersihkan (sloped drain pan 2%)? Bagaimana safety interlock door dan LOTO saat maintenance filter & fan?* | Interactive Cleanable Design Deep Dive |
| **Procurement / Project Director** | Pengambil Keputusan Finansial & Legal | *Berapa lead time fabrikasi? Siapa saja referensi klien farmasi yang sudah lulus audit BPOM menggunakan unit ini? Bagaimana keandalan after-sales?* | Request Quotation (RFQ) / Hubungi Sales Engineer |

---

## 4. Product Portfolio: Star 1 vs. Star 2 Positioning

Landing page harus memperjelas diferensiasi varian produk secara tegas agar tidak membingungkan buyer:

```
+------------------------------------------------------------------------------------+
|                                HYGIENIC AHU LINEUP                                 |
+------------------------------------------------------------------------------------+
|                                         |                                          |
|            [ STAR 1 ]                   |               [ STAR 2 ]                 |
|  "Standard Hygienic Foundation"         |   "Advanced GMP / Sterile Grade"         |
|                                         |                                          |
|  * ISO Class 7 / 8 & Ruang Bersih Umum  |   * ISO Class 5 / GMP Grade A/B Aseptic  |
|  * Filter: G4 Pre + F7/F9 Medium        |   * Filter: G4 + F9 + HEPA H13/H14 Ready |
|  * Chilled Water / Direct Expansion     |   * Chilled Water + Steam Coil (6 bar)   |
|  * Standalone HMI Controller            |   * PLC + HMI + Full SCADA / BMS Ready   |
|  * Full-Welded SS304 Internal           |   * Full-Welded SS304 + Coved R=15mm     |
|  * Basic Safety Interlock Door          |   * Dual LOTO + Magnetic Safety Lock     |
+------------------------------------------------------------------------------------+
```

---

## 5. Scope & Website Architecture

### 5.1 Structure Strategy: Modular Single-Page with Technical Slide-Overs / Deep Sub-Pages
Untuk MVP, website menggunakan arsitektur **High-Conversion Long-Form Landing Page** yang dilengkapi **Dynamic Modal / Drawer Deep-Dive** untuk spesifikasi detail dan dokumen teknis, sehingga evaluator tidak kehilangan konteks browsing.

### 5.2 Information Architecture (IA)
```
[Sticky Header] Logo AHUStar | Navigasi Anchor (Keunggulan, Unit Star, Teknologi, Spesifikasi, Validasi) | Primary CTA [Minta Penawaran / RFQ]

[1. Hero Section]
├── Value Proposition Headline (fokus pada kepatuhan CPOB & kebersihan tanpa kompromi)
├── Trust Badges Kepatuhan (ISO 16890 | EN 1751 Class 2 | ISO 846 | CPOB/GMP Compliant)
├── Primary Actions: [Konsultasi Engineering] & [Lihat Spesifikasi Unit]
└── Hero Visual: 3D Render Photorealistic Unit AHU dengan interactive hotspot preview

[2. Operational Proof Metric Strip]
└── Live Counter Metrics: Total Airflow Deployed, Proyek Farmasi & Healthcare, Uptime Track Record, Standar Kepatuhan Internasional

[3. Engineering Highlights (The Hygienic Difference)]
├── 4 Pilar Kebersihan: Full-Welded SS304 Casing, 100% Zero-Stagnant Drainage (2% Slope), Antimicrobial Internal (ISO 846), Integrated LOTO Safety
└── Visual perbandingan mikro: Standard Commercial AHU vs. Hygienic AHUStar

[4. Product Comparison & Selection (Star 1 vs Star 2)]
├── Tab / Card Switcher interaktif
├── Visual Section Breakdown (Exploded/Cutaway view)
├── Quick Feature Checklist & Ideal Use-Case
└── Action: [Buka Full Spec Star 1] vs [Buka Full Spec Star 2]

[5. Technology & Component Deep-Dive]
├── Sub-section 5.1: Casing & Structural Integrity (Thermal break, SS304 2mm, no-screw airstream)
├── Sub-section 5.2: Filtration Engineering (Camfil USA, differential pressure sensor, zero-bypass frame)
├── Sub-section 5.3: Aerodynamics & Drive System (Comefri Italy plug fan + ABB IE2 motor, 30-50 Hz VFD)
├── Sub-section 5.4: Thermodynamic Coils (Chilled water, DX, Steam coil 6 bar test)
└── Sub-section 5.5: Control, Automation & Safety (PLC, HMI touch panel, SCADA integration, door interlocks)

[6. Interactive Technical Data Matrix]
├── Live Filter by Category (Casing, Fan/Motor, Filter, Coil, Electrical & Safety)
├── Search input untuk part / standard tertentu
└── Button: [Download Engineering Cut-Sheet (PDF)]

[7. Compliance & Qualification Framework]
├── Penjelasan kesiapan dokumen validasi (DQ, IQ, OQ protocol support)
└── Referensi standar: EN 1886, EN 1751, ISO 16890, ISO 846, CPOB 2024

[8. Engineering Engagement Process (3-Step Delivery)]
└── 01 Audit & Psychrometric Sizing → 02 Custom 3D CAD & Fabrikasi → 03 FAT/SAT & Commissioning

[9. Technical RFQ & Consultation Lead Form]
├── Form terstruktur (merekam parameter teknis proyek, bukan sekadar pesan umum)
└── Direct WhatsApp Hotline untuk technical sales engineer

[Footer]
└── Dokumen teknis, sertifikasi, disclaimer engineering, copyright, kontak kantor pusat & workshop
```

---

## 6. Detailed Functional Requirements & Acceptance Criteria

### FR-1: Hero Section & Immediate Trust Validation
- **Deskripsi:** Menghadirkan diferensiasi produk dalam 5 detik pertama kunjungan, menegaskan spesialisasi pada lingkungan steril.
- **Komponen:**
  - Headline berbobot teknis: *"Air Handling Unit Higienis Presisi Tinggi untuk Industri Farmasi & Ruang Bersih"*.
  - Subheadline: *"Konstruksi full-welded SS304 anti-kontaminasi, efisiensi filtrasi teruji ISO 16890, dan kebocoran udara minimal EN 1751 Class 2. Dirancang untuk kelulusan audit CPOB & ISO 14644."*
  - Trust Badges: Grid badge resmi standar internasional (ISO 846, ISO 16890, EN 1751, CE/GMP compliance).
  - Quick Spec Tag Ribbon: `SS304 2mm` | `Comefri Plug Fan` | `ABB IE2` | `Steam 6 Bar` | `Slope 2%`.
- **Acceptance Criteria:**
  - CTA utama mengarahkan user langsung ke form RFQ teknis atau tabel spesifikasi tanpa lag.
  - Gambar hero teroptimasi dengan WebP/AVIF, LCP target < 1.8 detik.

### FR-2: Interactive Unit Section Explorer (Exploded Component View)
- **Deskripsi:** Komponen interaktif yang menampilkan visual anatomi potongan unit AHU (Cutaway View). User dapat mengklik atau mengarahkan kursor ke hotspot bagian untuk melihat spesifikasi engineering internal.
- **Data Hotspot Anatomi:**
  1. **Fresh/Return Air Damper:** Aluminium airfoil profile, EN 1751 Class 2 leakage rating, nylon gear anti-korosi.
  2. **Prefilter Section:** G4 Pleated filter, ePM10 ≥ 50% (Camfil USA), equipped with Magnehelic / digital differential pressure switch.
  3. **Medium / Secondary Filter Section:** F7 / F9 mini-pleat fiberglass, hermetically sealed frame to prevent air bypass.
  4. **Cooling & Heating Coil Section:** SS304 tube 0.5mm, aluminium hydrophilic fins 0.23mm, SS304 casing frame, test pressure 20 bar.
  5. **Steam Coil Chamber (Star 2 Specific):** Heavy-duty SS304 tube 1mm, rating tekanan operasional steam 6 bar.
  6. **Fan & Motor Chamber:** Comefri (Italy) backward-curved plug fan + ABB IE2 high-efficiency motor, anti-vibration mount, flexible duct connector hygienic grade.
  7. **Sloped Drain Pan:** All-SS304 integrated floor with 2% multidirectional slope, quick-coupling drain trap anti-backflow.
  8. **Hygienic Access Door:** Continuous silicone/EPDM gasket, safety interlock switch, visual viewport, IP65 internal LED lamp.
- **Acceptance Criteria:**
  - Klik pada hotspot memunculkan popover dengan deskripsi teknis dan parameter material.
  - Terdapat tombol toggle fallback: mode "Interactive Visual" dan mode "List Detail" agar tetap optimal pada koneksi lambat atau perangkat layar kecil (< 768px).

### FR-3: Star 1 vs. Star 2 Comparative Matrix
- **Deskripsi:** Tabel perbandingan sisi-demi-sisi (side-by-side) yang lugas dan transparan mengenai perbedaan teknis kedua model.
- **Matriks Data Teknis:**

| Fitur / Parameter | AHU Star 1 (Cleanroom Standard) | AHU Star 2 (Advanced GMP / Pharma) |
| :--- | :--- | :--- |
| **Aplikasi Utama** | Industri Makanan & Minuman, Kosmetik, Cleanroom ISO Class 7/8 | Industri Farmasi Aseptic, Bioteknologi, Bedah RS (ISO Class 5 / GMP A/B) |
| **Material Internal Casing** | SS304 tebal 2.0 mm, Full-Welded | SS304 tebal 2.0 mm, Full-Welded + Rounded Coved Corners R=15mm |
| **Finishing Sambungan** | Seamless weld, rata & bebas geram | Sanitary mirror/smooth polished weld, bebas celah akumulasi mikroba |
| **Konfigurasi Filtrasi** | Pre-filter G4 + Medium Filter F7/F9 | Pre-filter G4 + Medium F9 + Prepared HEPA H13/H14 housing terminal |
| **Sistem Koil** | Chilled Water / Direct Expansion (DX) | Chilled Water / DX + Steam Coil Sterilization (Rating 6 Bar) |
| **Kipas & Penggerak** | Comefri Plug Fan + Motor ABB IE2 | Comefri Plug Fan + Motor ABB IE2 / IE3 + VFD Speed Modulation 30-50 Hz |
| **Drainage System** | SS304 Drain Pan Kemiringan 2% | SS304 Drain Pan Kemiringan 2% + Quick Coupling Ball-Lock Trap |
| **Fitur Keselamatan** | Safety Door Switch, Differential Pressure Switch | Safety Interlock, LOTO (Lock-Out Tag-Out), Magnetic Lock, Buzzer Alarm |
| **Integrasi Kontrol** | Dedicated PLC + HMI Touchscreen | PLC + HMI Password Multi-Level + SCADA / Modbus TCP/IP Ready |
| **Validasi Dokumen** | Sertifikat Material & Factory Test Sheet | Lengkap Paket Dokumen DQ / IQ / OQ / FAT / SAT Protocol |

- **Acceptance Criteria:**
  - Desain responsif: di layar mobile berubah menjadi switcher tab (Star 1 | Star 2) tanpa merusak tabel.

### FR-4: Interactive Engineering Spec Sheet & Dynamic Filter/Export
- **Deskripsi:** Tabel pencarian spesifikasi interaktif dengan filter kategori: `Semua`, `Casing & Struktur`, `Filtrasi`, `Koil & Termal`, `Kipas & Dinamika`, `Kontrol & Safety`.
- **Fungsi Tambahan:**
  - Tombol **"Download Technical Datasheet (PDF)"** pada header tabel.
  - Search bar instant (misal ketik "ABB", "SS304", atau "Camfil").
- **Acceptance Criteria:**
  - Filtering bekerja tanpa reload halaman (client-side state).
  - Jika hasil pencarian tidak ditemukan, tampilkan pesan: *"Spesifikasi kustom tersedia sesuai permintaan engineering."* dengan link langsung ke form konsultasi.

### FR-5: High-Conversion Technical RFQ Engine (Lead Generation)
- **Deskripsi:** Form penawaran harga B2B yang dirancang agar sales engineer menerima data teknis yang cukup untuk membuat draft penawaran (*Preliminary Sizing*), tanpa membuat user merasa terbebani.
- **Input Fields:**
  1. **Nama Lengkap & Jabatan** (Required) — *e.g., Ir. Bambang - MEP Consultant*
  2. **Nama Perusahaan / Organisasi** (Required)
  3. **Email Bisnis & Nomor WhatsApp** (Required - validasi format email korporat/umum & nomor HP Indonesia)
  4. **Kategori Industri:** Dropdown [Industri Farmasi (CPOB), Rumah Sakit / Healthcare, Makanan & Minuman (HACCP), Fasilitas Elektronik/Semikonduktor, Lainnya]
  5. **Varian Unit:** Radio/Checkbox [AHU Star 1, AHU Star 2, Butuh Rekomendasi Engineering]
  6. **Estimasi Kapasitas Airflow (CFM / CMH):** Input angka opsional (atau pilihan range: < 2,000 CFM, 2,000 - 5,000 CFM, 5,000 - 15,000 CFM, > 15,000 CFM, Belum Dihitung)
  7. **Tipe Media Pendingin:** Radio [Chilled Water, Direct Expansion (Freon), Steam/Hot Water, Belum Ditentukan]
  8. **Catatan Tambahan / Ruang Lingkup Proyek:** Textarea (Opsional)
- **Acceptance Criteria:**
  - Validasi form real-time (klien) sebelum submit.
  - State feedback jelas: Loading spinner saat kirim, Success modal konfirmasi dengan estimasi waktu respon (*"Sales engineer kami akan menghubungi Anda dalam 1x24 jam kerja"*), dan fallback direct link WhatsApp jika koneksi lambat.
  - Proteksi anti-bot menggunakan Cloudflare Turnstile atau honeypot field tak kasat mata (tanpa CAPTCHA gambar yang merusak UX).

### FR-6: Regulatory & Standard Compliance Library
- **Deskripsi:** Section edukasi dan pembuktian legalitas teknis untuk memuaskan auditor dan QA.
- **Parameter Standar yang Dicakup:**
  - **ISO 16890:** Standar internasional uji efisiensi filter udara terhadap partikel PM1, PM2.5, dan PM10.
  - **EN 1751 (Class 2):** Standar kebocoran udara pada damper dan sambungan aerodinamis.
  - **ISO 846:** Standar evaluasi resistensi material non-logam dan permukaan terhadap mikroorganisme (bakteri dan jamur).
  - **CPOB 2024 / EU-GMP Annex 1:** Kepatuhan tata udara untuk area steril dan fasilitas produksi obat.
- **Acceptance Criteria:**
  - Setiap standar memiliki kartu deskripsi ringkas beserta implikasi langsungnya terhadap efisiensi operasional pabrik buyer.

---

## 7. Non-Functional Requirements (NFR)

### 7.1 Performance & Core Web Vitals (CWV Target)
- **Lighthouse Performance Score:** ≥ 92 di Desktop, ≥ 85 di Mobile (Simulated 4G).
- **Largest Contentful Paint (LCP):** < 2.0 detik.
- **Interaction to Next Paint (INP):** < 150 ms (responsif terhadap klik tab dan filter).
- **Cumulative Layout Shift (CLS):** < 0.05 (dimensi gambar dan font lokal/preload didefinisikan secara statis).
- **Asset Optimization:** Seluruh diagram teknis dan foto unit menggunakan format WebP/AVIF dengan srcset responsive.

### 7.2 Security & Data Privacy
- Form submissions di-enkripsi melalui HTTPS / TLS 1.3.
- Rate limiting pada API endpoint pengiriman form (maksimum 5 request per 10 menit per IP).
- Implementasi sanitasi input untuk mencegah XSS dan header injection pada notification mailer.
- Data kontak prospek hanya dikirimkan ke endpoint terproteksi (misal: webhook internal CRM / email sales engineer terverifikasi).

### 7.3 SEO & Discoverability
- **Primary Keywords Target:** `Hygienic AHU Indonesia`, `Air Handling Unit Farmasi`, `AHU CPOB`, `AHU Cleanroom Hospital`, `AHU SS304 Full Welded`.
- **Structured Data:** Implementasi Schema.org markup:
  - `Product` (dengan brand AHUStar, model Star 1 & Star 2).
  - `Organization` (identitas produsen & distributor resmi).
  - `FAQPage` (accordion FAQ teknis untuk meningkatkan rasio klik di SERP Google).
- Semantic landmark tags: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`.

### 7.4 Usability & Accessibility (A11y)
- Kepatuhan **WCAG 2.1 Level AA**:
  - Minimum rasio kontras teks 4.5:1 terhadap background (#0F172A dan #1B4965 di atas #FFFFFF dan #F8FAFC).
  - Navigasi keyboard penuh untuk tab switcher, modal visual cutaway, dan form input.
  - Accessible name (`aria-label`) pada semua tombol interaktif dan trigger modal.

---

## 8. Technical Architecture & Tech Stack Recommendation

| Layer | Rekomendasi Teknologi | Alasan Pemilihan & Nilai Bisnis |
| :--- | :--- | :--- |
| **Bundler & Tooling** | **Vite + React + TypeScript** | Build ultra-cepat, Instant HMR, output 100% static assets (< 80KB gzipped), zero server runtime requirement, dan bebas cold-start. |
| **Styling** | **Tailwind CSS** | Utility-first, bundle size minimal (purge otomatis), konsistensi desain sistem industri sesuai token Solvix. |
| **Motion / Interaction** | **Framer Motion** | Animasi halus untuk accordion, tab switching, counter numbers, dan modal cutaway hotspot tanpa jank. |
| **Icons** | **Lucide React** | Ringan, berbasis SVG, performa tinggi, dan memiliki koleksi ikon industri/mekanikal yang lengkap. |
| **SEO & Social Share** | **Static `index.html` Meta + OpenGraph + JSON-LD** | Meta tag, Open Graph (preview WhatsApp/LinkedIn), dan Schema.org Product/FAQ disematkan langsung di root HTML untuk crawlability optimal tanpa butuh SSR. |
| **Lead Engine / RFQ** | **Dual Engine: Direct WhatsApp Generator + Webhook/Web3Forms** | Mengonversi input teknis (CFM, industri, unit) langsung ke pesan WhatsApp terstruktur untuk response sales < 15 menit, dengan fallback email formal. |
| **Deployment** | **Static Hosting (Cloudflare Pages / Vercel / GitHub Pages / cPanel)** | Output murni HTML/CSS/JS statis, dapat di-deploy ke infrastruktur hosting mana pun milik klien tanpa server Node.js. |

---

## 9. Visual Design Direction & Token Alignment

Mengadopsi estetika Solvix Website (modern, presisi, industrial, berwibawa):

```css
:root {
  /* Brand Identity - Deep Medical Steel */
  --color-primary: #1B4965;       /* Dominan: Kebersihan & otoritas industrial */
  --color-primary-dark: #0F2D3F;  /* Hover state & dark accent */
  --color-accent: #5FA8D3;        /* Highlights, active tabs, sub-headings */
  --color-accent-light: #EBF4F9;  /* Background badge & soft container */
  
  /* Neutral Cleanroom Palette */
  --color-bg-body: #F8FAFC;       /* Off-white klinis, nyaman di mata */
  --color-surface-white: #FFFFFF; /* Card surface, clean panel */
  --color-border-subtle: #E2E8F0; /* Garis batas presisi */
  
  /* Dark High-Contrast Structural */
  --color-text-title: #0F172A;    /* Slate 900 untuk keterbacaan tajam */
  --color-text-body: #475569;     /* Slate 600 untuk deskripsi teknis */
  --color-text-muted: #94A3B8;    /* Slate 400 untuk caption & unit satuan */
  
  /* Industrial Status */
  --color-success-gmp: #10B981;   /* Badge kepatuhan audit / sertifikasi valid */
  --color-warning-safety: #F59E0B;/* Indikator warning / interlock indicator */
  
  /* Typography Scale */
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace; /* Untuk nilai data angka, CFM, Hz, Bar */
}
```

---

## 10. Implementation Roadmap & Development Milestones

```
+-----------------------------------------------------------------------------------+
| SPRINT 1 (Hari 1-3)  : Core Foundation, IA & Technical Copywriting Finalization   |
| SPRINT 2 (Hari 4-7)  : Component Development, Exploded Section & Specs Filter     |
| SPRINT 3 (Hari 8-10) : Lead Engine RFQ, Form Validation & Auto-Notification Setup |
| SPRINT 4 (Hari 11-12): SEO Metadata, Schema.org, Performance Optimization (CWV)   |
| SPRINT 5 (Hari 13-14): Testing, Staging Review, Cross-Browser Check & Deployment   |
+-----------------------------------------------------------------------------------+
```

### Milestone Breakdown:
- **Sprint 1 — Setup & Copy:** Inisialisasi repo Next.js, konfigurasi design tokens, finalisasi aset diagram & copy teknis Bahasa Indonesia profesional.
- **Sprint 2 — Interactive Features:** Pembangunan komponen Hero, Comparative Table Star 1 vs 2, Hotspot Exploded View, dan tabel spesifikasi dinamis dengan pencarian.
- **Sprint 3 — Conversion Loop:** Integrasi form RFQ dengan Resend/Telegram/WhatsApp alert, testing validasi form, dan pembuatan halaman konfirmasi.
- **Sprint 4 — Quality & Performance:** Audit Lighthouse, optimasi kompresi gambar SVG/WebP, penambahan Rich Snippet schema, dan verifikasi mobile viewport.
- **Sprint 5 — Launch & Hand-off:** Uji coba submission leads di environment staging klien, feedback adjustment, dan pointing custom domain production.

---

## 11. Key Performance Indicators (KPI) & Conversion Goals

Website ini diukur melalui metrik performa bisnis nyata (bukan sekadar pageviews):

1. **Lead Conversion Rate (LCR):** Minimum **3.5%** dari total visitor unik mengisi form RFQ atau mengklik direct WhatsApp technical sales.
2. **RFQ Data Quality Rate:** ≥ **80%** leads yang masuk mengisi minimal 3 parameter teknis (aplikasi industri, tipe varian, atau estimasi airflow), menandakan qualified B2B leads.
3. **Spec Sheet Download Engagement:** Minimum **15%** visitor berinteraksi dengan tabel spesifikasi atau mendownload dokumen PDF teknis.
4. **Technical Session Depth:** Rata-rata waktu sesi > 2.5 menit dengan scroll depth rata-rata ≥ 60% (menunjukkan evaluasi menyeluruh terhadap spesifikasi).

---

## 12. Project Risks & Engineering Mitigation Strategies

| Risiko Potensial | Tingkat Dampak | Rencana Mitigasi Teknis |
| :--- | :--- | :--- |
| **Foto 3D CAD/Render unit resolusi tinggi dari klien belum siap** | Tinggi | Gunakan diagram skematik potongan teknis 2D isometrik dengan styling blueprint modern berformat SVG murni. Desain blueprint justru meningkatkan kesan otentik engineering di mata konsultan MEP. |
| **Spesifikasi teknis internal berubah saat fabrikasi** | Sedang | Pisahkan seluruh data spesifikasi komponen ke dalam file konfigurasi terstruktur (`/data/ahu-specifications.ts`), sehingga perubahan data tidak memerlukan refactor kode UI. |
| **Lead RFQ masuk tapi lambat direspons sales klien** | Kritis | Konfigurasi dual notification: Selain kirim email notifikasi, sistem langsung men-trigger pesan otomatis ke WhatsApp grup tim sales klien via webhook, memastikan response time < 1 jam. |
| **Form di-spam oleh bot otomatis** | Sedang | Terapkan Cloudflare Turnstile tanpa captcha interaktif yang mengganggu user, ditambah validasi honeypot field tak kasat mata pada level server actions. |
