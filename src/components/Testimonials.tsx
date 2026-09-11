import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONTENT } from '../data/site-content';
import { ShieldCheck, Quote, Building2 } from 'lucide-react';
import { EASE_PREMIUM, fadeInUp, viewportConfig } from '../utils/animations';

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const items = SITE_CONTENT.testimonials.items;

  return (
    <section id="testimoni" className="py-16 sm:py-20 lg:py-32 bg-white border-b border-slate-200/80">
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
            Validasi Audit &amp; Keandalan Lapangan
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-[-0.035em] leading-[1.15] mb-3 sm:mb-4 text-balance">
            {SITE_CONTENT.testimonials.headline}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            {SITE_CONTENT.testimonials.subheadline}
          </p>
        </motion.div>

        {/* Featured Editorial Validation Card + Selector */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch"
        >
          
          {/* Main Editorial Quote (8 cols) */}
          <div className="lg:col-span-8 machined-shell">
            <div className="machined-core p-5 sm:p-8 lg:p-12 h-full flex flex-col justify-between bg-gradient-to-br from-[#FAFCFE] via-white to-[#F0F9FF]/30 min-h-0 sm:min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.25, ease: EASE_PREMIUM }}
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between items-start gap-3 mb-6 sm:mb-8">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="w-10 h-10 rounded-xl bg-[#E0F2FE] border border-[#38BDF8]/30 flex items-center justify-center text-[#1B4965] shrink-0"
                      >
                        <Quote className="w-5 h-5" />
                      </motion.div>
                      <div className="flex items-center gap-1.5 text-xs font-mono-spec font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Audit Kepatuhan CPOB Terverifikasi</span>
                      </div>
                    </div>

                    <blockquote className="text-base sm:text-xl text-[#0F172A] font-medium leading-relaxed mb-6 sm:mb-8">
                      "{items[activeIdx].quote}"
                    </blockquote>
                  </div>

                  {/* Author Attribution */}
                  <div className="pt-5 sm:pt-6 border-t border-slate-200/80 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0F2D3F] text-white flex items-center justify-center font-bold text-xs sm:text-sm font-mono-spec border border-white/20 shadow-xs shrink-0">
                        {items[activeIdx].avatarInitial}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                          {items[activeIdx].author}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                          {items[activeIdx].role} • <span className="text-[#1B4965] font-semibold">{items[activeIdx].company}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {items.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveIdx(i)}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            activeIdx === i ? 'w-8 bg-[#1B4965]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                          }`}
                          aria-label={`Pilih testimoni ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Selector Cards (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-4 justify-between">
            {items.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveIdx(idx)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#F0F9FF] border-[#38BDF8]/60 shadow-sm ring-1 ring-[#38BDF8]/30'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/70'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono-spec font-bold text-[#1B4965]">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{item.company}</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#0F172A] mb-1">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 font-normal">
                    {item.role}
                  </p>
                </motion.button>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
