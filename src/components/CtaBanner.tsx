import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { SITE_CONTENT } from '../data/site-content';
import { fadeInUp, viewportConfig } from '../utils/animations';
import { getWhatsAppUrl } from '../utils/whatsapp';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export const CtaBanner: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open(
      getWhatsAppUrl('Halo Tim Sales Engineering AHUStar, saya ingin berkonsultasi mengenai spesifikasi teknis dan estimasi penawaran unit Hygienic AHU untuk proyek fasilitas kami.'),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="kontak" className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="machined-shell p-1.5 sm:p-2.5"
        >
          <div className="machined-core bg-gradient-to-br from-[#0B253A] via-[#0F2D3F] to-[#1B4965] rounded-[1.35rem] p-6 sm:p-12 lg:p-20 text-white text-center relative overflow-hidden shadow-2xl border-0">

            {/* Ambient Animated Lighting */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#38BDF8] rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"
            />
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"
            />

            <div className="max-w-3xl mx-auto relative z-10">

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-[-0.035em] leading-tight mb-4 sm:mb-6 text-balance">
                {SITE_CONTENT.ctaBanner.headline}
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto font-normal">
                {SITE_CONTENT.ctaBanner.subheadline}
              </p>

              {/* Single Focused Hero CTA Action */}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppClick}
                  className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 px-5 sm:px-8 py-3.5 rounded-full bg-white text-[#0B253A] font-bold text-xs sm:text-base shadow-2xl shadow-black/25 hover:bg-slate-50 hover:shadow-emerald-500/20 transition-all cursor-pointer group"
                >
                  <span className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-300/40 flex items-center justify-center text-emerald-600 transition-transform group-hover:scale-110 shrink-0">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                  </span>
                  <span>Minta Penawaran Teknis</span>
                  <span className="w-7 h-7 rounded-full bg-[#0F2D3F] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </motion.button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
