import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../data/ahu-specifications';
import { SITE_CONTENT } from '../data/site-content';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { EASE_PREMIUM, fadeInUp, staggerContainer, staggerItem, viewportConfig } from '../utils/animations';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-32 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-xs font-bold font-mono-spec uppercase tracking-wider text-[#1B4965] mb-2 block">
            Klarifikasi Teknis &amp; Regulasi
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-[-0.035em] leading-[1.15] mb-3 sm:mb-4 text-balance">
            {SITE_CONTENT.faqSection.headline}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            {SITE_CONTENT.faqSection.subheadline}
          </p>
        </motion.div>

        {/* Accordion List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer(0.08, 0.1)}
          className="space-y-3 sm:space-y-4"
        >
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#38BDF8]/60 bg-[#FAFCFE] shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 px-4 sm:py-5 sm:px-6 text-left flex items-center justify-between gap-3 sm:gap-4 font-bold text-xs sm:text-base text-[#0F172A] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2.5 sm:gap-3">
                    <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${
                      isOpen ? 'text-[#1B4965]' : 'text-slate-400'
                    }`} />
                    <span className="leading-snug">{item.question}</span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: EASE_PREMIUM }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-colors ${
                        isOpen ? 'text-[#1B4965]' : 'text-slate-400'
                      }`}
                    />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
