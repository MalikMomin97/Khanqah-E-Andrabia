import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AllahCrest } from './IslamicArt/AllahCrest';
import { ArabesquePattern } from './IslamicArt/ArabesquePattern';

export const ShahaPreloader: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="shaha-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#14110e] text-[#fcfbf9] pointer-events-none select-none"
        >
          <ArabesquePattern opacity={0.05} className="absolute inset-0" />
          
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center relative z-10"
          >
            {/* Pulsing Allah Crest */}
            <div className="relative mb-4">
              <div className="absolute inset-0 rounded-full bg-[#d59b35]/20 blur-xl animate-pulse" />
              <AllahCrest text="الله" size="lg" className="relative z-10 drop-shadow-[0_0_20px_rgba(213,155,53,0.6)]" />
            </div>

            {/* Sanctuary Name */}
            <h2 className="font-cormorant text-2xl sm:text-3xl font-bold uppercase tracking-widest text-white mt-2">
              Khanqah-e-Andrabia
            </h2>

            <div className="flex items-center gap-3 w-40 my-3">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d59b35]" />
              <div className="w-1.5 h-1.5 rotate-45 border border-[#d59b35] bg-[#14110e]" />
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#d59b35]" />
            </div>

            <p className="font-manrope text-[11px] uppercase tracking-widest text-[#d59b35] font-semibold">
              Sonwar Bagh • Srinagar, Kashmir
            </p>

            {/* Elegant Spinning Progress Line */}
            <div className="w-24 h-[2px] bg-[#1e1914] rounded-full overflow-hidden mt-5 relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-gradient-to-r from-[#d59b35]/20 via-[#d59b35] to-[#d59b35]/20"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
