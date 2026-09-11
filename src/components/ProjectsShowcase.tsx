import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONTENT } from '../data/site-content';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { EASE_PREMIUM, fadeInUp, staggerContainer, staggerItem, viewportConfig } from '../utils/animations';

export const ProjectsShowcase: React.FC = () => {
  const [flagship, project2, project3] = SITE_CONTENT.projects.items;

  return (
    <section id="proyek" className="py-16 sm:py-20 lg:py-32 bg-white border-b border-slate-200/80">
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
            Studi Kasus &amp; Rekayasa Lapangan
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-[-0.035em] leading-[1.15] mb-3 sm:mb-4 text-balance">
            {SITE_CONTENT.projects.headline}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            {SITE_CONTENT.projects.subheadline}
          </p>
        </motion.div>

        {/* Asymmetric Case Study Architecture */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer(0.12, 0.1)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch"
        >
          
          {/* Flagship Case Study with Cleanroom Visual (7 cols) */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: EASE_PREMIUM }}
            className="lg:col-span-7 machined-shell"
          >
            <div className="machined-core h-full flex flex-col justify-between bg-white overflow-hidden">
              
              {/* Cleanroom Suite Architectural Image Header */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <motion.img
                  src="/images/pharma-cleanroom-showcase.jpg"
                  alt="Pharmaceutical cleanroom facility deployment"
                  className="w-full h-full object-cover object-center"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: EASE_PREMIUM }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/10" />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="text-[10.5px] sm:text-[11px] font-mono-spec font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-950/80 text-cyan-300 backdrop-blur-md border border-white/20">
                    STUDI KASUS UNGGULAN
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
                  <div>
                    <span className="text-[11px] sm:text-xs font-mono-spec text-cyan-300 block">
                      {flagship.industry}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {flagship.client}
                    </h3>
                  </div>
                  <span className="self-start sm:self-auto text-xs sm:text-sm font-black font-mono-spec bg-white/15 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/20 shrink-0">
                    {flagship.airflow}
                  </span>
                </div>
              </div>

              {/* Detail Content */}
              <div className="p-5 sm:p-7 lg:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-100 text-xs font-mono-spec">
                    <span className="text-slate-500 font-medium">Model Unit Terpasang:</span>
                    <span className="font-bold text-[#0F2D3F]">{flagship.unitModel}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {flagship.description}
                  </p>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 mb-6 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Pencapaian Validasi: </span>
                      <span>{flagship.achievement}</span>
                    </div>
                  </div>
                </div>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {flagship.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10.5px] sm:text-[11px] font-mono-spec font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: 2 Stacked Focused Deployments (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Project 2: Hospital OT */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className="machined-shell flex-1"
            >
              <div className="machined-core p-5 sm:p-6 lg:p-7 h-full flex flex-col justify-between bg-[#FAFCFE]">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <span className="text-[11px] font-mono-spec font-bold text-slate-400">
                      PROYEK 02
                    </span>
                    <span className="text-[11px] font-mono-spec font-bold px-2.5 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
                      {project2.industry}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight mb-2">
                    {project2.client}
                  </h3>
                  <p className="text-xs text-[#1B4965] font-mono-spec font-bold mb-3">
                    {project2.unitModel} • {project2.airflow}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {project2.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>{project2.achievement}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3: Clean Food Manufacturing */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className="machined-shell flex-1"
            >
              <div className="machined-core p-5 sm:p-6 lg:p-7 h-full flex flex-col justify-between bg-[#FAFCFE]">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <span className="text-[11px] font-mono-spec font-bold text-slate-400">
                      PROYEK 03
                    </span>
                    <span className="text-[11px] font-mono-spec font-bold px-2.5 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
                      {project3.industry}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mb-2">
                    {project3.client}
                  </h3>
                  <p className="text-xs text-[#1B4965] font-mono-spec font-bold mb-3">
                    {project3.unitModel} • {project3.airflow}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {project3.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{project3.achievement}</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
