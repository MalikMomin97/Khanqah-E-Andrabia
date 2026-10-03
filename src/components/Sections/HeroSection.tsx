import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Clock, MapPin, ChevronRight, Moon } from 'lucide-react';
import { RubElHizb } from '../IslamicArt/RubElHizb';
import { ArabesquePattern } from '../IslamicArt/ArabesquePattern';
import { AllahCrest } from '../IslamicArt/AllahCrest';
import { getHijriDate } from '../../services/hijriCalendar';
import imagesManifest from '../../data/imagesManifest.json';

export const HeroSection: React.FC = () => {
  const heroImage = imagesManifest['astaan-hero'] || imagesManifest['khanqah-1'];
  const todayHijri = getHijriDate(new Date(), -1);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 overflow-hidden bg-gradient-to-b from-[#12100d] via-[#181512] to-[#14110e]">
      {/* Background Watermark Arabesque */}
      <ArabesquePattern opacity={0.045} className="absolute inset-0 pointer-events-none" />

      {/* Subtle Warm Gold Radial Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#d59b35]/[0.08] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Shaha Signature Editorial Typography */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Top Calligraphic Mark: Shaha Allah Crest */}
          <div className="flex items-center gap-3 mb-4">
            <AllahCrest text="الله" size="md" />
            <div className="h-4 w-[1px] bg-[#d59b35]/40" />
            <span className="font-amiri text-[#d59b35] text-lg sm:text-xl font-bold tracking-wider">
              بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </span>
          </div>

          {/* Badges Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d59b35]/10 border border-[#d59b35]/30 text-[#d59b35] text-xs font-mono font-semibold tracking-wider uppercase backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d59b35]" />
              <span>Heritage Entity #10504</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e1914] border border-[#d59b35]/20 text-[#f5cf7b] text-xs font-mono backdrop-blur-md">
              <Moon className="w-3.5 h-3.5 text-[#d59b35]" />
              <span>{todayHijri.formattedEnglish}</span>
            </div>
          </div>

          {/* Monumental English Heading in Shaha Style */}
          <h1 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[1.06] mb-3">
            Khanqah-e-Andrabia <br />
            <span className="text-gold-gradient text-3xl sm:text-5xl lg:text-6xl font-semibold">
              Hazrat Mir Syed Kamal-ud-Din Andrabi
            </span>{' '}
            <span className="text-xl sm:text-2xl text-[#d59b35] font-normal lowercase">(R.A.)</span>
          </h1>

          <div className="font-mono text-xs text-[#549e8d] uppercase tracking-widest font-bold mb-6">
            Sonwar Bagh, Srinagar, Kashmir • Founded 1081 AH
          </div>

          {/* Shaha Editorial Subtitle */}
          <p className="font-manrope text-sm sm:text-base text-[#d4cec7] max-w-2xl leading-relaxed mb-8">
            A serene historic sanctuary of prayer, contemplation, and centuries-old Kashmiri Sufi tradition. Nestled in Sonwar Bagh beneath the Zabarwan range, the Astaan serves as a spiritual home for the five daily prayers, Aurad-e-Fathiya, weekly Thursday Khatam assemblies, and annual saintly commemorations.
          </p>

          {/* Quick Pillar Anchors in Shaha Dark Ivory */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl mb-8">
            <div className="p-3 rounded bg-[#1e1914] border border-[#d59b35]/25 text-center">
              <span className="block font-cormorant text-xl font-bold text-[#d59b35]">781 AH</span>
              <span className="text-[11px] text-slate-400 font-mono uppercase">1379 CE Arrival</span>
            </div>
            <div className="p-3 rounded bg-[#1e1914] border border-[#d59b35]/25 text-center">
              <span className="block font-cormorant text-xl font-bold text-[#d59b35]">1081 AH</span>
              <span className="text-[11px] text-slate-400 font-mono uppercase">Sonwar Wisal</span>
            </div>
            <div className="p-3 rounded bg-[#1e1914] border border-[#d59b35]/25 text-center">
              <span className="block font-cormorant text-xl font-bold text-[#549e8d]">Aurad</span>
              <span className="text-[11px] text-slate-400 font-mono uppercase">Dawn Liturgy</span>
            </div>
            <div className="p-3 rounded bg-[#1e1914] border border-[#d59b35]/25 text-center">
              <span className="block font-cormorant text-xl font-bold text-[#549e8d]">Thursday</span>
              <span className="text-[11px] text-slate-400 font-mono uppercase">Weekly Khatam</span>
            </div>
          </div>

          {/* Signature Shaha Action Buttons: Ochre Gold & Mineral Sage Teal */}
          <div className="flex flex-wrap items-center gap-4">
            <a href="#heritage" className="btn-shaha-gold">
              <span>About Astaan</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a href="#prayers" className="btn-shaha-teal">
              <Clock className="w-4 h-4" />
              <span>Daily Prayers</span>
            </a>

            <a href="#thursday-khatam" className="btn-shaha-outline">
              <Sparkles className="w-4 h-4" />
              <span>Thursday Khatam</span>
            </a>

            <a href="#location" className="btn-shaha-outline">
              <MapPin className="w-4 h-4" />
              <span>Location & Map</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: High-Resolution Visual with Shaha Framing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 relative"
        >
          {/* Decorative Corner Rub el Hizb Starlet */}
          <div className="absolute -top-4 -left-4 z-20">
            <RubElHizb size={46} className="text-[#d59b35] drop-shadow-xl" />
          </div>

          <div className="p-3 bg-[#1e1914] border-2 border-[#d59b35]/40 rounded-xl relative overflow-hidden shadow-2xl group">
            {/* Responsive Picture with WebP srcSet */}
            <div className="overflow-hidden rounded-lg">
              <picture>
                <source
                  type="image/webp"
                  srcSet={heroImage.srcSet}
                  sizes="(max-width: 768px) 100vw, 550px"
                />
                <img
                  src={heroImage.originalPath}
                  alt="Khanqah-e-Andrabia Astaan Hazrat Mir Syed Kamal-ud-Din Andrabi Sonwar Srinagar"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </picture>
            </div>

            {/* Shaha Hero Attribution Plaque */}
            <div className="p-4 bg-[#14110e]/95 backdrop-blur-md rounded-lg mt-3 border border-[#d59b35]/25 text-slate-200">
              <div className="flex items-center justify-between text-xs text-[#d59b35] font-semibold mb-1">
                <span className="uppercase tracking-widest font-mono text-[11px]">
                  SACRED SANCTUARY • SONWAR
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px] text-[#549e8d]">
                  <Sparkles className="w-3 h-3 text-[#549e8d]" />
                  Khanqah-e-Andrabia
                </span>
              </div>
              <h3 className="font-cormorant text-xl font-bold text-white uppercase">
                Astaan Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.)
              </h3>
              <p className="font-manrope text-xs text-[#d4cec7] leading-relaxed mt-1">
                The historic deodar timber facade and pagoda spire beneath the Himalayan slopes of Sonwar Bagh.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
