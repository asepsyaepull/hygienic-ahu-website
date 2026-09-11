import React from 'react';
import { ArrowUpRight, ShieldCheck, Activity, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { EASE_PREMIUM, fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

export const Hero: React.FC = () => {
  const whatsappHref = getWhatsAppUrl('Halo Tim Sales AHUStar, saya ingin konsultasi teknis dan penawaran unit Hygienic AHU untuk proyek fasilitas kami.');

  const trustChips = ['ISO 16890 Filtration', 'EN 1751 Class 2', 'ISO 846 Antimicrobial', 'BPOM CPOB 2024'];

  return (
    <section id="beranda" className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#FAFCFE] bg-grid-blueprint border-b border-slate-200/80">
      {/* Subtle animated ambient lighting */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE_PREMIUM }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-[#E0F2FE]/50 via-transparent to-transparent blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Left Column: Focused Value Proposition & Primary Actions (6 cols) */}
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start text-left"
          >

            {/* Single Restrained Eyebrow */}
            <motion.div variants={fadeInUp} className="section-eyebrow mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Standar CPOB &amp; ISO 14644-1</span>
            </motion.div>

            {/* Main Headline - Bold, Controlled Line Count, Tight Tracking */}
            <motion.h1
              variants={fadeInUp}
              className="text-[1.65rem] sm:text-4xl lg:text-[46px] font-black text-[#0F172A] tracking-[-0.035em] leading-[1.18] sm:leading-[1.12] mb-4 sm:mb-5"
            >
              Solusi Tata Udara Higienis Presisi Tinggi untuk{' '}
              <span className="text-[#1B4965] underline decoration-[#38BDF8]/40 decoration-wavy decoration-2">
                Industri Farmasi &amp; Healthcare
              </span>
            </motion.h1>

            {/* Subtext: Concise, authoritative */}
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mb-6 sm:mb-8 font-normal"
            >
              Dirancang khusus untuk ruang bersih farmasi dan rumah sakit. Casing SS304 full-welded, sertifikasi kebocoran EN 1751 Class 2, dan efisiensi filtrasi standar ISO 16890.
            </motion.p>

            {/* Button-in-Button Primary & Secondary CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-island-primary py-3 sm:py-2.5"
              >
                <span>Minta Penawaran Teknis</span>
                <span className="btn-pill-icon">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="#produk"
                className="btn-island-secondary py-3 sm:py-2.5"
              >
                <span>Lihat Varian Produk</span>
                <span className="btn-pill-icon">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </motion.a>
            </motion.div>

            {/* Trust Validation Chips */}
            <motion.div
              variants={staggerContainer(0.08, 0.4)}
              className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200/70 w-full"
            >
              {trustChips.map((chip, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  whileHover={{ scale: 1.04, borderColor: '#38BDF8' }}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-[11px] font-semibold text-slate-700 font-mono-spec shadow-2xs transition-colors cursor-default"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{chip}</span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column: High-Fidelity Double-Bezel Hardware Showcase (6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_PREMIUM }}
            className="lg:col-span-6 relative"
          >

            {/* Outer Machined Bezel Enclosure */}
            <div className="machined-shell p-1.5 sm:p-2.5">
              <div className="machined-core relative rounded-[1.25rem] overflow-hidden bg-slate-900 shadow-2xl">

                {/* Real Photorealistic 3D Industrial AHU Photography */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <motion.img
                    src="/images/hygienic-ahu-hero.jpg"
                    alt="AHUStar Hygienic Air Handling Unit in Pharmaceutical Cleanroom"
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: EASE_PREMIUM }}
                    loading="eager"
                  />

                  {/* Gradient Vignette for readable overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Hardware Inspection Tag Bottom-Left */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: EASE_PREMIUM }}
                    className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 text-white"
                  >
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <Gauge className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0 animate-pulse" />
                      <div className="min-w-0">
                        <span className="block text-[10.5px] sm:text-[11px] font-mono-spec font-bold text-slate-200">
                          Tekanan Statis: 850 Pa
                        </span>
                        <span className="block text-[9.5px] sm:text-[10px] text-slate-400">
                          Konstruksi SS304 Full-Welded R=15mm
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex self-start sm:self-auto items-center gap-1.5 text-[10.5px] sm:text-xs font-mono-spec font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-emerald-500/30 shrink-0">
                      <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 animate-pulse" />
                      <span>Zero-Bypass Air Leakage</span>
                    </div>
                  </motion.div>

                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
