import React from 'react';
import { SITE_CONTENT } from '../data/site-content';
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071420] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">

          {/* Col 1: Brand Info & Standards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B4965] to-[#0B253A] flex items-center justify-center text-white font-black text-lg shadow-sm border border-white/10">
                A
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl tracking-tight text-white">AHU</span>
                <span className="font-extrabold text-2xl tracking-tight text-[#38BDF8]">Star</span>
                <span className="text-[10px] uppercase font-mono-spec font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700 ml-1">
                  Hygienic
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
              {SITE_CONTENT.footer.tagline}
            </p>

            <div className="pt-2 text-[11px] text-slate-500 font-mono-spec">
              Standar Regulasi: ISO 16890 • EN 1751 Class 2 • ISO 846 • CPOB BPOM 2024
            </div>
          </div>

          {/* Col 2: Products Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono-spec">
              {SITE_CONTENT.footer.columnProducts.title}
            </h4>
            <ul className="space-y-2.5">
              {SITE_CONTENT.footer.columnProducts.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-1 group py-0.5"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#38BDF8]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Engineering Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono-spec">
              {SITE_CONTENT.footer.columnEngineering.title}
            </h4>
            <ul className="space-y-2.5">
              {SITE_CONTENT.footer.columnEngineering.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-1 group py-0.5"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#38BDF8]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Workshop (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono-spec">
              {SITE_CONTENT.footer.columnContact.title}
            </h4>
            <div className="space-y-3 text-slate-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {SITE_CONTENT.footer.columnContact.address}
                </span>
              </p>
              <p className="flex items-center gap-2.5 font-mono-spec">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${SITE_CONTENT.company.phoneDisplay.replace(/\s+/g, '')}`} className="text-xs hover:text-white transition-colors py-0.5">
                  {SITE_CONTENT.footer.columnContact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5 font-mono-spec">
                <MessageSquare className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={getWhatsAppUrl('Halo Tim Sales AHUStar, saya ingin konsultasi mengenai pengadaan unit Hygienic AHU.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:text-white transition-colors py-0.5"
                >
                  {SITE_CONTENT.footer.columnContact.whatsapp} (Direct WhatsApp)
                </a>
              </p>
              <p className="flex items-center gap-2.5 font-mono-spec">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${SITE_CONTENT.company.emailSupport}`} className="text-xs hover:text-white transition-colors py-0.5">
                  {SITE_CONTENT.footer.columnContact.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p className="max-w-xl text-center md:text-left leading-relaxed">
            {SITE_CONTENT.footer.disclaimer}
          </p>
          <p className="shrink-0 font-mono-spec">
            {SITE_CONTENT.footer.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
};
