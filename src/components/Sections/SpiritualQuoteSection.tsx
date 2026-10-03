import React from 'react';
import { motion } from 'motion/react';
import { RubElHizb } from '../IslamicArt/RubElHizb';
import { ArabesquePattern } from '../IslamicArt/ArabesquePattern';
import { AllahCrest } from '../IslamicArt/AllahCrest';
import { useLanguage } from '../../context/LanguageContext';

export const SpiritualQuoteSection: React.FC = () => {
  const { isUrdu } = useLanguage();

  return (
    <section id="quote" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#181512] via-[#1f1a15] to-[#181512] border-t border-[#d59b35]/20">
      <ArabesquePattern opacity={0.045} className="absolute inset-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#d59b35]/[0.08] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="p-5 sm:p-12 lg:p-16 rounded-xl bg-[#14110e]/95 border-2 border-[#d59b35]/35 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Ornamental Corner Stars (Adjusted for mobile) */}
          <div className="absolute top-3 left-3 opacity-40 sm:opacity-70">
            <RubElHizb size={16} className="text-[#d59b35]" />
          </div>
          <div className="absolute top-3 right-3 opacity-40 sm:opacity-70">
            <RubElHizb size={16} className="text-[#d59b35]" />
          </div>
          <div className="hidden sm:block absolute bottom-4 left-4">
            <RubElHizb size={22} className="text-[#d59b35]/40" />
          </div>
          <div className="hidden sm:block absolute bottom-4 right-4">
            <RubElHizb size={22} className="text-[#d59b35]/40" />
          </div>

          {/* Top Rosette Emblem: Shaha Allah Crest */}
          <div className="flex justify-center mb-6">
            <AllahCrest text="الله" size="lg" />
          </div>

          {/* Sacred Quranic Calligraphy in Amiri */}
          <div className="font-amiri text-xl sm:text-3xl lg:text-4xl text-[#f5cf7b] mb-6 leading-[1.8] sm:leading-[2] tracking-wide font-normal max-w-4xl mx-auto drop-shadow-md break-words">
            الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
          </div>

          {/* Symmetrical Ornamental Filigree Divider */}
          <div className="flex items-center justify-center gap-3 w-full max-w-xs mx-auto my-6">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d59b35]/40 to-[#d59b35]" />
            <div className="w-2 h-2 rotate-45 border border-[#d59b35] bg-[#14110e]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#d59b35]/40 to-[#d59b35]" />
          </div>

          {/* Urdu Translation in Noto Nastaliq Urdu */}
          <div className="font-urdu text-xl sm:text-2xl text-slate-100 mb-6 leading-relaxed max-w-3xl mx-auto">
            "وہ لوگ جو ایمان لائے اور جن کے دل اللہ کے ذکر سے مطمئن ہوتے ہیں؛ خبردار! اللہ ہی کے ذکر سے دلوں کو اطمینان و سکون ملتا ہے۔"
          </div>

          {/* English Translation in Cormorant Garamond */}
          <blockquote className="font-cormorant text-lg sm:text-2xl italic text-[#d4cec7] leading-relaxed max-w-3xl mx-auto mb-6">
            "Those who have believed and whose hearts find tranquility in the remembrance of Allah. 
            Verily, in the remembrance of Allah do hearts find rest."
          </blockquote>

          <div className="font-mono text-xs text-[#d59b35] uppercase tracking-widest font-semibold mb-8">
            — Surah Ar-Ra'd (13:28) • سورة الرعد
          </div>

          {/* Saintly Reflection */}
          <div className="p-5 rounded-lg bg-[#1e1914] border border-[#d59b35]/20 max-w-2xl mx-auto text-xs sm:text-sm text-[#d4cec7] leading-relaxed font-manrope">
            <p>
              {isUrdu
                ? 'حضرت میر سید کمال الدین اندرابی رحمۃ اللہ علیہ کی تمام حیاتِ مبارکہ اسی قرآنی حقیقت کا زندہ مظہر تھی۔ سونہ وار آستان کی پرسکون فضا اور روزانہ کا ذکر و اذکار روح کو سکون اور دلوں کو روشنی بخشتا ہے۔'
                : 'The life and teachings of Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.) embodied this divine reality. Within the peaceful courtyard of Khanqah-e-Andrabia Sonwar, prayer and collective litanies continue to offer calm solace and spiritual renewal to every visitor.'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
