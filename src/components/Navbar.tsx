import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { SITE_CONTENT } from '../data/site-content';
import { EASE_PREMIUM } from '../utils/animations';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappHref = getWhatsAppUrl('Halo Tim Sales AHUStar, saya ingin konsultasi spesifikasi & penawaran teknis Hygienic AHU.');

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        className="max-w-6xl mx-auto pointer-events-auto"
      >
        <div
          className={`flex items-center justify-between rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 ${isScrolled
              ? 'bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-900/5'
              : 'bg-white/75 backdrop-blur-md border border-slate-200/60 shadow-md shadow-slate-900/3'
            }`}
        >
          {/* Brand Logo & Precision Identity */}
          <a href="#" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.06, rotate: 2 }}
              whileTap={{ scale: 0.96 }}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1B4965] to-[#0B253A] flex items-center justify-center text-white font-black text-base shadow-sm border border-white/15"
            >
              A
            </motion.div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-[#0F172A]">AHU</span>
                <span className="font-extrabold text-lg tracking-tight text-[#1B4965]">Star</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {SITE_CONTENT.navigation.navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-[#1B4965] hover:bg-slate-100/80 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Button-in-Button CTA -> WhatsApp Leads */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-island-primary text-xs"
            >
              <span>{SITE_CONTENT.navigation.ctaButton}</span>
              <span className="btn-pill-icon">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </motion.a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Card with Backdrop */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Tap-outside Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-slate-900/20 backdrop-blur-xs z-[-1] pointer-events-auto"
                aria-hidden="true"
              />

              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.97 }}
                transition={{ duration: 0.22, ease: EASE_PREMIUM }}
                className="md:hidden mt-2 p-4 bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl shadow-2xl origin-top relative z-10"
              >
                <div className="flex flex-col space-y-1">
                  {SITE_CONTENT.navigation.navLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="min-h-[44px] flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#1B4965] hover:bg-slate-50 active:bg-slate-100 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-3 border-t border-slate-100 mt-2">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full btn-island-primary justify-center text-sm py-3"
                    >
                      <span>{SITE_CONTENT.navigation.ctaButton}</span>
                      <span className="btn-pill-icon">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};
