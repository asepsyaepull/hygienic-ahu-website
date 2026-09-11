import React, { useState } from 'react';
import { ArrowUpRight, Star, Sliders, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONTENT } from '../data/site-content';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { EASE_PREMIUM, fadeInUp, viewportConfig } from '../utils/animations';

export const ProductSection: React.FC = () => {
  const [activeVariant, setActiveVariant] = useState<'both' | 'star1' | 'star2'>('both');

  const handleTabChange = (variantId: 'both' | 'star1' | 'star2') => {
    setActiveVariant(variantId);
  };

  const handleCtaClick = (productId: 'star1' | 'star2') => {
    const productName = productId === 'star1' ? 'AHU Star 1 (Cleanroom Foundation)' : 'AHU Star 2 (Advanced GMP Sterile Grade)';
    const message = `Halo Tim Sales Engineering AHUStar, saya ingin meminta spesifikasi lengkap dan penawaran teknis untuk unit *${productName}*.`;
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const filterOptions: Array<{ id: 'both' | 'star1' | 'star2'; label: string; mobileLabel: string }> = [
    { id: 'both', label: 'Bandingkan Kedua Model', mobileLabel: 'Kedua Model' },
    { id: 'star1', label: 'AHU Star 1', mobileLabel: 'Star 1' },
    { id: 'star2', label: 'AHU Star 2', mobileLabel: 'Star 2' },
  ];

  const filteredProducts =
    activeVariant === 'both'
      ? SITE_CONTENT.products.items
      : SITE_CONTENT.products.items.filter((prod) => prod.id === activeVariant);

  return (
    <section id="produk" className="py-16 sm:py-20 lg:py-32 bg-[#FAFCFE] border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#38BDF8]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-16"
        >
          <span className="text-xs font-bold font-mono-spec uppercase tracking-wider text-[#1B4965] mb-2 block">
            {SITE_CONTENT.products.badge}
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-[-0.035em] mb-3 sm:mb-4 text-balance">
            {SITE_CONTENT.products.headline}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal text-balance">
            {SITE_CONTENT.products.subheadline}
          </p>

          {/* Seamless Floating Filter Switch (Responsive Mobile Rail) */}
          <div className="mt-6 sm:mt-8 max-w-full overflow-x-auto no-scrollbar inline-flex p-1 rounded-full bg-white border border-slate-200/90 shadow-sm relative">
            {filterOptions.map((opt) => {
              const isActive = activeVariant === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleTabChange(opt.id)}
                  className={`relative px-3.5 sm:px-5 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer select-none shrink-0 ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeProductTab"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute inset-0 rounded-full bg-[#1B4965] shadow-xs"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {opt.id === 'star2' && (
                      <Star
                        className={`w-3.5 h-3.5 ${
                          isActive ? 'fill-amber-300 text-amber-300' : 'fill-amber-400/60 text-amber-500'
                        }`}
                      />
                    )}
                    <span className="hidden sm:inline">{opt.label}</span>
                    <span className="sm:hidden">{opt.mobileLabel}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Seamless Differentiated Product Cards */}
        <div
          className={`grid gap-6 sm:gap-8 items-stretch transition-all duration-300 ${
            activeVariant === 'both'
              ? 'grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto'
              : 'grid-cols-1 max-w-2xl mx-auto'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => {
              const isStar2 = prod.id === 'star2';

              return (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                  whileHover={{ y: -4 }}
                  className={`machined-shell transition-all duration-300 ${
                    isStar2 ? 'ring-1 ring-[#38BDF8]/40' : ''
                  }`}
                >
                  <div className={`machined-core h-full flex flex-col justify-between p-5 sm:p-7 lg:p-9 ${
                    isStar2
                      ? 'bg-gradient-to-b from-white via-white to-[#F0F9FF]/40'
                      : 'bg-white'
                  }`}>

                    <div>
                      {/* Top Header: Badge, ISO Class & Star 2 Recommendation */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-slate-100">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`text-[11px] font-mono-spec font-bold px-2.5 py-1 rounded-md ${
                              isStar2
                                ? 'bg-[#0F2D3F] text-cyan-300'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {prod.badge}
                          </span>
                          {isStar2 && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono-spec font-bold text-amber-700 bg-amber-50 border border-amber-200/70 px-2.5 py-0.5 rounded-md">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                              <span>CPOB / EU-GMP</span>
                            </span>
                          )}
                        </div>

                        <span className="text-[11px] font-mono-spec font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                          {prod.cleanroomClass}
                        </span>
                      </div>

                      {/* Product Name & Tagline */}
                      <div className="mb-4">
                        <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mb-1.5">
                          {prod.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-[#1B4965] tracking-tight">
                          {prod.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                        {prod.description}
                      </p>

                      {/* Feature Highlights: Lightweight Clean Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {prod.pills.map((pill, pIdx) => (
                          <span
                            key={pIdx}
                            className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/80 font-mono-spec"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>

                      {/* Seamless Key Engineering Specs (Airy Minimalist List) */}
                      <div className="pt-5 border-t border-slate-100">
                        <div className="text-[10.5px] font-mono-spec font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                          <Sliders className="w-3 h-3 text-[#1B4965]" />
                          <span>Spesifikasi Rekayasa Kunci</span>
                        </div>
                        <dl className="divide-y divide-slate-100/90 text-xs">
                          {prod.keySpecs.map((spec, sIdx) => (
                            <div key={sIdx} className="py-2 flex items-baseline justify-between gap-4">
                              <dt className="text-slate-500 font-normal shrink-0">{spec.label}</dt>
                              <dd className="font-bold text-slate-800 text-right font-mono-spec">
                                {spec.value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>

                    {/* Integrated Footnote & Seamless Action */}
                    <div className="pt-5 mt-6 border-t border-slate-100 space-y-4">
                      {/* Clean Application Note */}
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <ShieldCheck className="w-4 h-4 text-[#1B4965] shrink-0" />
                        <span className="leading-snug">
                          <span className="font-bold text-slate-700">Aplikasi: </span>
                          {prod.recommendedFor}
                        </span>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleCtaClick(prod.id)}
                        className={`w-full ${isStar2 ? 'btn-island-primary' : 'btn-island-secondary'} justify-between py-3 cursor-pointer`}
                      >
                        <span>Minta Penawaran {prod.name}</span>
                        <span className="btn-pill-icon">
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </motion.button>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Quick Reset Helper when filtered */}
        {activeVariant !== 'both' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <button
              type="button"
              onClick={() => handleTabChange('both')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4965] hover:text-[#0B253A] bg-white border border-slate-200 px-4 py-2 rounded-full shadow-xs hover:border-[#1B4965]/40 transition-colors cursor-pointer"
            >
              <span>← Tampilkan Kedua Model (Bandingkan Berdampingan)</span>
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};

