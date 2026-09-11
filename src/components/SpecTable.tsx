import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TECHNICAL_SPEC_MATRIX } from '../data/ahu-specifications';
import { SITE_CONTENT } from '../data/site-content';
import { Search, Download, FileSpreadsheet } from 'lucide-react';
import { fadeInUp, viewportConfig } from '../utils/animations';

export const SpecTable: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSpecs = useMemo(() => {
    return TECHNICAL_SPEC_MATRIX.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        item.component.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.star1.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.star2.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.standard && item.standard.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.details.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleDownloadPdf = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      ['Komponen,Kategori,Star 1,Star 2,Standar,Detail']
        .concat(
          TECHNICAL_SPEC_MATRIX.map(
            (i) =>
              `"${i.component}","${i.category}","${i.star1}","${i.star2}","${i.standard || '-'}","${i.details}"`
          )
        )
        .join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'AHUStar-Spesifikasi-Teknis-2026.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="spesifikasi" className="py-16 sm:py-20 lg:py-32 bg-white border-b border-slate-200/80">
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
            Matriks Parameter Teknis
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-[-0.035em] leading-[1.15] mb-3 sm:mb-4 text-balance">
            {SITE_CONTENT.specifications.headline}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            {SITE_CONTENT.specifications.subheadline}
          </p>
        </motion.div>

        {/* Filter Bar & Search & Download Actions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="machined-shell p-1.5 sm:p-2 mb-6 sm:mb-8"
        >
          <div className="machined-core p-4 sm:p-5 bg-[#FAFCFE]">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
              
              {/* Search Input */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={SITE_CONTENT.specifications.searchPlaceholder}
                  className="w-full pl-10 pr-4 py-2.5 bg-white rounded-full border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all shadow-inner"
                />
              </div>

              {/* Export Button */}
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownloadPdf}
                  className="w-full md:w-auto btn-island-secondary text-xs cursor-pointer justify-center"
                >
                  <span className="flex items-center gap-2">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-[#1B4965]" />
                    Unduh Datasheet Teknis (CSV)
                  </span>
                  <span className="btn-pill-icon">
                    <Download className="w-3.5 h-3.5" />
                  </span>
                </motion.button>
              </div>

            </div>

            {/* Category Tabs (Swipeable on Mobile) */}
            <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-slate-200 overflow-x-auto no-scrollbar pb-1 sm:pb-0 sm:flex-wrap">
              {SITE_CONTENT.specifications.filterCategories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#1B4965] text-white shadow-xs'
                        : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {cat.label}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center justify-between px-3.5 py-2 mb-3 rounded-xl bg-slate-100 border border-slate-200/80 text-[11px] font-mono-spec text-slate-600">
          <span className="flex items-center gap-1.5 font-medium">
            <span>←</span>
            <span>Geser tabel untuk komparasi lengkap</span>
            <span>→</span>
          </span>
          <span className="text-[10px] font-bold text-[#1B4965] bg-white px-2 py-0.5 rounded shadow-2xs">
            {filteredSpecs.length} Komponen
          </span>
        </div>

        {/* Specifications Data Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white overscroll-x-contain"
        >
          <table className="w-full min-w-[680px] text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#0F2D3F] text-white font-mono-spec">
                <th className="py-4 px-5 font-bold uppercase tracking-wider text-[11px] w-1/4">
                  Komponen &amp; Bagian
                </th>
                <th className="py-4 px-5 font-bold uppercase tracking-wider text-[11px] w-1/4 bg-[#1B4965]">
                  AHU Star 1 (Standard)
                </th>
                <th className="py-4 px-5 font-bold uppercase tracking-wider text-[11px] w-1/4 bg-[#0B253A] text-cyan-300">
                  AHU Star 2 (Pharma GMP) ★
                </th>
                <th className="py-4 px-5 font-bold uppercase tracking-wider text-[11px] w-1/4">
                  Standar Uji &amp; Catatan
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {filteredSpecs.length > 0 ? (
                filteredSpecs.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-blue-50/40 transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFCFE]'
                    }`}
                  >
                    <td className="py-4 px-5 font-bold text-slate-900">
                      <div>{item.component}</div>
                      <span className="inline-block mt-1 text-[10px] uppercase font-mono-spec px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-5 font-mono-spec text-slate-700">
                      {item.star1}
                    </td>
                    <td className="py-4 px-5 font-mono-spec font-semibold text-[#1B4965] bg-blue-50/20">
                      {item.star2}
                    </td>
                    <td className="py-4 px-5 text-slate-600">
                      {item.standard && (
                        <div className="font-mono-spec font-bold text-xs text-slate-900 mb-1">
                          {item.standard}
                        </div>
                      )}
                      <div className="text-xs text-slate-500">{item.details}</div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-slate-500">
                    <p className="text-sm font-semibold mb-1">
                      Tidak ada komponen yang cocok dengan pencarian "{searchQuery}"
                    </p>
                    <p className="text-xs">
                      Spesifikasi kustom tersedia sesuai permintaan engineering fasilitas Anda.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  );
};
