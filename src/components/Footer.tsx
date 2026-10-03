import React from 'react';
import { ArrowUp } from 'lucide-react';
import { RubElHizb } from './IslamicArt/RubElHizb';
import { ArabesquePattern } from './IslamicArt/ArabesquePattern';
import { AllahCrest } from './IslamicArt/AllahCrest';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
  };

  return (
    <footer className="bg-[#12100d] text-[#d4cec7] border-t border-[#d59b35]/25 relative overflow-hidden">
      <ArabesquePattern opacity={0.03} className="absolute inset-0 pointer-events-none" />

      {/* Main Centered Minimalist Sanctuary Identity in Shaha Style */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center relative z-10">
        {/* Centered Allah Crest */}
        <div className="flex justify-center mb-4">
          <AllahCrest text="الله" size="md" />
        </div>

        {/* Sanctuary Title & Dedication */}
        <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase tracking-wider mb-2">
          Khanqah-e-Andrabia
        </h2>
        
        <p className="font-cormorant text-lg sm:text-xl text-[#f5cf7b] tracking-wide mb-3">
          Astaan Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.)
        </p>

        {/* Symmetrical Ornamental Filigree Divider */}
        <div className="flex items-center justify-center gap-3 w-full max-w-xs mx-auto my-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d59b35]/40 to-[#d59b35]" />
          <div className="w-2 h-2 rotate-45 border border-[#d59b35] bg-[#12100d]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#d59b35]/40 to-[#d59b35]" />
        </div>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e1914] border border-[#d59b35]/30 text-xs font-mono text-[#d59b35] hover:text-white hover:border-[#d59b35] transition-all cursor-pointer shadow-lg"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bottom Minimal Copyright Bar */}
      <div className="bg-[#0e0c0a] border-t border-[#d59b35]/15 py-5 px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#78716c]">
          <div className="flex items-center gap-2">
            <RubElHizb size={13} className="text-[#d59b35]" />
            <span>
              © {new Date().getFullYear()} Khanqah-e-Andrabia. Preserved with reverence and archival care.
            </span>
          </div>

          <div className="text-[11px] font-mono text-[#9e958b]">
            Sonwar Bagh, Srinagar
          </div>
        </div>
      </div>
    </footer>
  );
};
