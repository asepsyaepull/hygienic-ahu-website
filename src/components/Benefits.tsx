import React from 'react';
import { ShieldCheck, Sparkles, Gauge, Lock, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_CONTENT, type BenefitItem } from '../data/site-content';
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from '../utils/animations';

export const Benefits: React.FC = () => {
  const getIcon = (iconName: BenefitItem['iconName']) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#1B4965]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#1B4965]" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-[#1B4965]" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-[#1B4965]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#1B4965]" />;
    }
  };

  const items = SITE_CONTENT.benefits.items;

  return (
    <section id="keunggulan" className="py-16 sm:py-20 lg:py-32 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="max-w-3xl mb-10 sm:mb-16"
        >
          <span className="text-xs font-bold font-mono-spec uppercase tracking-wider text-[#1B4965] mb-2 block">
            Rekayasa Anti-Kontaminasi Farmasi
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#0F172A] tracking-[-0.035em] leading-[1.15] mb-3 sm:mb-4 text-balance">
            {SITE_CONTENT.benefits.headline}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            {SITE_CONTENT.benefits.subheadline}
          </p>
        </motion.div>

        {/* Asymmetric Engineering Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer(0.12, 0.1)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          
          {/* Bento Cell 1: Featured Flagship Pillar (7 cols) - SS304 Full-Welded */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-7 machined-shell"
          >
            <div className="machined-core p-5 sm:p-7 lg:p-9 h-full flex flex-col justify-between bg-gradient-to-br from-white via-[#FAFCFE] to-[#F0F9FF]/40">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                    className="w-11 h-11 rounded-2xl bg-[#E0F2FE]/70 border border-[#38BDF8]/30 flex items-center justify-center cursor-pointer"
                  >
                    {getIcon(items[0].iconName)}
                  </motion.div>
                  <span className="text-[11px] font-mono-spec font-bold px-3 py-1 rounded-full bg-slate-900 text-cyan-300">
                    SS304 FULL-WELDED
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight mb-3">
                  {items[0].title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {items[0].description}
                </p>
              </div>

              {/* Technical Validation Highlights */}
              <div className="pt-6 border-t border-slate-200/70">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {items[0].bullets.map((bullet, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200/70 flex flex-col justify-between shadow-2xs">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F2D3F] mb-1">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Kriteria 0{idx + 1}</span>
                      </div>
                      <span className="text-xs text-slate-600 leading-tight">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Bento Cell 2: Zero Stagnation Drainage (5 cols) */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-5 machined-shell"
          >
            <div className="machined-core p-5 sm:p-7 lg:p-9 h-full flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                    className="w-11 h-11 rounded-2xl bg-[#E0F2FE]/70 border border-[#38BDF8]/30 flex items-center justify-center cursor-pointer"
                  >
                    {getIcon(items[1].iconName)}
                  </motion.div>
                  <span className="text-[11px] font-mono-spec font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    SLOPE 2.0%
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight mb-3">
                  {items[1].title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {items[1].description}
                </p>
              </div>

              <ul className="space-y-2.5 pt-5 border-t border-slate-100">
                {items[1].bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bento Cell 3: Aerodynamics & Motor Drive (6 cols) */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-6 machined-shell"
          >
            <div className="machined-core p-5 sm:p-7 lg:p-8 h-full flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                    className="w-11 h-11 rounded-2xl bg-[#E0F2FE]/70 border border-[#38BDF8]/30 flex items-center justify-center cursor-pointer"
                  >
                    {getIcon(items[2].iconName)}
                  </motion.div>
                  <span className="text-[11px] font-mono-spec font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-800">
                    DIRECT-DRIVE PLUG FAN
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight mb-3">
                  {items[2].title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {items[2].description}
                </p>
              </div>

              <ul className="space-y-2.5 pt-5 border-t border-slate-100">
                {items[2].bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bento Cell 4: Personnel & Facility Safety LOTO (6 cols) */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-6 machined-shell"
          >
            <div className="machined-core p-5 sm:p-7 lg:p-8 h-full flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                    className="w-11 h-11 rounded-2xl bg-[#E0F2FE]/70 border border-[#38BDF8]/30 flex items-center justify-center cursor-pointer"
                  >
                    {getIcon(items[3].iconName)}
                  </motion.div>
                  <span className="text-[11px] font-mono-spec font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-800">
                    INTERLOCK &amp; LOTO
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight mb-3">
                  {items[3].title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {items[3].description}
                </p>
              </div>

              <ul className="space-y-2.5 pt-5 border-t border-slate-100">
                {items[3].bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
