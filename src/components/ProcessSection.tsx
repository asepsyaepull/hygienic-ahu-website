import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Compass,
  FileCheck,
  ShieldCheck,
} from 'lucide-react';
import React from 'react';
import { SITE_CONTENT, type ProcessStep } from '../data/site-content';
import { EASE_PREMIUM, fadeInUp, staggerContainer, staggerItem, viewportConfig } from '../utils/animations';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ProcessSection: React.FC = () => {
  const { steps, dossier } = SITE_CONTENT.process;
  const whatsappHref = getWhatsAppUrl(dossier.ctaMessage);

  const getStepIcon = (iconName: ProcessStep['iconName']) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-[#1B4965]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#1B4965]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#1B4965]" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-5 h-5 text-[#1B4965]" />;
      default:
        return <ClipboardCheck className="w-5 h-5 text-[#1B4965]" />;
    }
  };

  return (
    <section id="alur" className="py-16 sm:py-20 lg:py-32 bg-[#FAFCFE] border-b border-slate-200/80 relative overflow-hidden">
      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#1B4965]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="max-w-3xl mb-10 sm:mb-16"
        >
          <div className="mb-3">
            <span className="text-xs font-bold font-mono-spec uppercase tracking-wider">
              {SITE_CONTENT.process.badge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-[-0.035em] leading-[1.15] mb-3 sm:mb-4 text-balance">
            {SITE_CONTENT.process.headline}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal text-balance">
            {SITE_CONTENT.process.subheadline}
          </p>
        </motion.div>

        {/* Seamless 4-Stage Connected Pipeline */}
        <div className="relative">

          {/* Subtle Interconnecting Flow Guideline (Desktop Only) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-gradient-to-r from-[#1B4965]/20 via-[#38BDF8]/30 to-[#10B981]/30 pointer-events-none z-0" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer(0.1, 0.08)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative z-10 items-stretch"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25, ease: EASE_PREMIUM }}
                className="machined-shell flex flex-col justify-between group h-full"
              >
                <div className="machined-core p-5 sm:p-6 lg:p-7 h-full flex flex-col justify-between bg-white transition-all duration-300 group-hover:border-[#38BDF8]/40">

                  <div>
                    {/* Top Node Bar: Icon & Stage Number */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F0F9FF] border border-[#38BDF8]/30 flex items-center justify-center text-[#1B4965] group-hover:bg-[#E0F2FE] transition-colors shrink-0 shadow-2xs">
                        {getStepIcon(step.iconName)}
                      </div>

                      <span className="text-[11px] font-mono-spec font-extrabold text-[#1B4965] tracking-wider px-2.5 py-0.5 rounded-full bg-[#E0F2FE]/70 border border-[#38BDF8]/30">
                        STAGE {step.stepNumber}
                      </span>
                    </div>

                    {/* Qualification Standard Pill */}
                    <div className="mb-2">
                      <span className="text-[10.5px] font-mono-spec font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 tracking-wide inline-block">
                        {step.qualificationCode}
                      </span>
                    </div>

                    {/* Stage Title & Short Description */}
                    <h3 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight group-hover:text-[#1B4965] transition-colors leading-snug mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed mb-4 font-normal">
                      {step.description}
                    </p>

                    {/* Key Output Deliverables (Clean Micro-Tags) */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100/90 mb-4">
                      {step.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 font-mono-spec">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clean Footer: Duration & Quality Gate */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono-spec text-slate-500 mt-auto">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {step.duration}
                    </span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {step.qualityGate}
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Seamless Validation Dossier Strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-5"
        >
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#E0F2FE] border border-[#38BDF8]/30 text-[#1B4965] flex items-center justify-center shrink-0 shadow-2xs mt-0.5 sm:mt-0">
              <FileCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] tracking-tight">
                  {dossier.title}
                </span>
                <span className="text-[10px] font-mono-spec font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                  Siap Audit BPOM
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Bundel protokol inspeksi pabrik, uji kebocoran kabinet, dan kualifikasi DQ / IQ / OQ / SAT lengkap.
              </p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-island-primary shrink-0 w-full md:w-auto text-center justify-between md:justify-center text-xs py-3 md:py-2.5 px-4"
          >
            <span>{dossier.ctaLabel}</span>
            <span className="btn-pill-icon w-6 h-6">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};


