import React from 'react';
import { Layers, Filter, Wind, Flame, Cpu, ShieldAlert, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_CONTENT, type TechFeature } from '../data/site-content';
import { EASE_PREMIUM, fadeInUp, staggerContainer, staggerItem, viewportConfig } from '../utils/animations';

export const TechnologyGrid: React.FC = () => {
  const getTechIcon = (iconName: TechFeature['iconName']) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#1B4965]" />;
      case 'Filter':
        return <Filter className="w-5 h-5 text-[#1B4965]" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-[#1B4965]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#1B4965]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#1B4965]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#1B4965]" />;
      default:
        return <Layers className="w-5 h-5 text-[#1B4965]" />;
    }
  };

  const features = SITE_CONTENT.technology.features;

  return (
    <section id="teknologi" className="py-16 sm:py-20 lg:py-32 bg-white border-b border-slate-200/80">
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
            Prinsipal Komponen Tier-1
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-[-0.035em] leading-[1.15] mb-3 sm:mb-4 text-balance">
            {SITE_CONTENT.technology.headline}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            {SITE_CONTENT.technology.subheadline}
          </p>
        </motion.div>

        {/* Balanced Symmetrical 3x2 Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer(0.08, 0.1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.id}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease: EASE_PREMIUM }}
              className="machined-shell group"
            >
              <div className="machined-core p-5 sm:p-7 lg:p-8 h-full flex flex-col justify-between bg-white transition-colors duration-200">
                <div>
                  {/* Top Bar: Icon & Spec Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -4, 4, 0] }}
                      transition={{ duration: 0.3 }}
                      className="w-11 h-11 rounded-2xl bg-[#F0F9FF] border border-[#38BDF8]/30 flex items-center justify-center group-hover:border-[#0284C7]/50 group-hover:bg-[#E0F2FE] transition-colors cursor-pointer"
                    >
                      {getTechIcon(feat.iconName)}
                    </motion.div>
                    <span className="font-mono-spec text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200/80">
                      {feat.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono-spec font-bold uppercase tracking-wider text-[#1B4965] mb-1.5 block">
                    {feat.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-tight group-hover:text-[#1B4965] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {feat.description}
                  </p>
                </div>

                {/* Specs List with Checkmarks */}
                <div className="pt-4 border-t border-slate-100 mt-auto space-y-2">
                  {feat.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700 font-mono-spec font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
