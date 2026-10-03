import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Heart, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { ArchOrnamentHeader } from '../IslamicArt/ArchFrame';
import { RubElHizb } from '../IslamicArt/RubElHizb';
import { ArabesquePattern } from '../IslamicArt/ArabesquePattern';
import { AllahCrest } from '../IslamicArt/AllahCrest';
import imagesManifest from '../../data/imagesManifest.json';

export const JummaSection: React.FC = () => {
  const jummaPlate = imagesManifest['khanqah-3'] || imagesManifest['astaan-hero'];

  const jummaPillars = [
    {
      titleEn: 'Arabic Khutbah & Moral Sermon',
      descEn:
        'The delivered sermon emphasizes righteousness (Taqwa), communal brotherhood, compassion, and upholding the Prophetic Sunnah in daily life.',
      icon: <BookOpen className="w-5 h-5 text-[#d59b35]" />
    },
    {
      titleEn: 'Aurad-e-Fathiya & Tasbihat',
      descEn:
        'Following the Farz prayer, the congregation joins in collective recitation of the traditional Kashmiri litanies and abundant Salawat upon the Holy Prophet ﷺ.',
      icon: <Sparkles className="w-5 h-5 text-[#549e8d]" />
    },
    {
      titleEn: 'Solemn Collective Dua for Peace',
      descEn:
        'Heartfelt collective supplications for the peace, harmony, relief of difficulties, health of the afflicted, and spiritual elevation of all humanity.',
      icon: <Heart className="w-5 h-5 text-[#d59b35]" />
    }
  ];

  return (
    <section id="jumma" className="py-24 px-4 relative bg-[#181512] border-t border-[#d59b35]/20">
      <ArabesquePattern opacity={0.04} className="absolute inset-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ArchOrnamentHeader
          tag="Weekly Majlis & Assembly"
          arabic="الله"
          title="Weekly Friday Congregation (Jumma)"
          subtitle="The spiritual anchor of the week, uniting worshippers beneath the deodar beams in reverence, Khutbah, and collective prayer."
        />

        {/* Shaha Signature Split Showcase Banner for Jumma */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden border border-[#d59b35]/30 shadow-2xl mb-16 bg-[#1f1a15]">
          {/* Content on Left */}
          <div className="lg:col-span-7 p-5 sm:p-8 lg:p-14 flex flex-col justify-between bg-gradient-to-br from-[#1e1914] to-[#161310] relative order-2 lg:order-1">
            <ArabesquePattern opacity={0.05} />
            <div className="relative z-10">
              <AllahCrest text="الله" size="md" className="items-start mb-3" />

              <span className="font-mono text-xs uppercase tracking-widest text-[#549e8d] font-bold block mb-1">
                Weekly Community Anchor
              </span>

              <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight mb-4">
                Sacred Friday Gathering at Sonwar
              </h3>

              <p className="font-manrope text-sm sm:text-base text-[#d4cec7] leading-relaxed mb-6">
                Every Friday, Khanqah-e-Andrabia welcomes worshippers from Sonwar, Dalgate, and across Srinagar for the weekly congregation. Beneath the timber-framed sanctuary, devotees gather early for Quranic recitation, listen to the Arabic Khutbah, offer congregational prayer, and join the historic collective recitation of Aurad-e-Fathiya.
              </p>

              {/* Checklist */}
              <div className="space-y-3 p-4 sm:p-5 rounded-lg bg-[#14110e]/80 border border-[#d59b35]/25 text-xs sm:text-sm text-[#d4cec7] mb-8">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d59b35] shrink-0" />
                  <span>Traditional Arabic Khutbah and ethical counsel on Taqwa</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#549e8d] shrink-0" />
                  <span>Collective recitation of Aurad-e-Fathiya post-prayer</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d59b35] shrink-0" />
                  <span>Solemn collective Dua for community peace and wellbeing</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a href="#thursday-khatam" className="btn-shaha-teal">
                  <span>Thursday Majlis</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#location" className="btn-shaha-outline">
                  <span>Directions & Timings</span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#d59b35]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400 relative z-10">
              <span>Worshippers are requested to arrive early for Tahiyyat-ul-Masjid</span>
              <RubElHizb size={16} className="text-[#549e8d]" />
            </div>
          </div>

          {/* Image on Right */}
          <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-[500px] order-1 lg:order-2">
            <picture>
              <source
                type="image/webp"
                srcSet={jummaPlate.srcSet}
                sizes="(max-width: 1024px) 100vw, 550px"
              />
              <img
                src={jummaPlate.originalPath}
                alt="Khanqah-e-Andrabia Friday Congregation Sanctuary"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#14110e]/90 via-transparent to-transparent lg:hidden" />
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jummaPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-7 rounded-xl bg-[#1e1914] border border-[#d59b35]/20 hover:border-[#d59b35]/60 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#14110e] border border-[#d59b35]/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className="font-cormorant text-2xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-[#d59b35] transition-colors">
                  {pillar.titleEn}
                </h4>
                <p className="font-manrope text-xs sm:text-sm text-[#d4cec7] leading-relaxed">
                  {pillar.descEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d59b35]/15 flex items-center justify-between text-xs text-[#d59b35] font-semibold uppercase tracking-wider">
                <span>Friday Practice</span>
                <RubElHizb size={14} className="text-[#d59b35]/60" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
