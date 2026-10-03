import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ArchOrnamentHeader } from '../IslamicArt/ArchFrame';
import { RubElHizb } from '../IslamicArt/RubElHizb';
import { ArabesquePattern } from '../IslamicArt/ArabesquePattern';
import { AllahCrest } from '../IslamicArt/AllahCrest';
import imagesManifest from '../../data/imagesManifest.json';

export const ThursdayKhatamSection: React.FC = () => {
  const spirePlate = imagesManifest['khanqah-2'] || imagesManifest['astaan-hero'];

  const khatamRituals = [
    {
      numEn: '01',
      titleEn: 'Khatam-e-Sharief',
      descEn:
        'The classical Naqshbandi and Kubrawi litany of sacred Quranic surahs, Istighfar, and divine invocations handed down across centuries.'
    },
    {
      numEn: '02',
      titleEn: 'Majlis-e-Durood & Salawat',
      descEn:
        'Heart-stirring recitation of Durood-e-Taj, Salawat upon the Messenger of Allah ﷺ, and traditional Kashmiri eulogies (Manqabat).'
    },
    {
      numEn: '03',
      titleEn: 'Muraqabah (Heart Contemplation)',
      descEn:
        'Quiet moments of silent remembrance, heart contemplation, and seeking inner tranquility in the serene ambiance of the Astaan.'
    },
    {
      numEn: '04',
      titleEn: 'Supplication for Sick & Departed',
      descEn:
        'Solemn, tearful collective prayers for the healing of the sick, relief of those burdened with grief, and peace for the departed souls.'
    }
  ];

  return (
    <section id="thursday-khatam" className="py-24 px-4 relative bg-[#14110e] border-t border-[#d59b35]/20">
      <ArabesquePattern opacity={0.035} className="absolute inset-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ArchOrnamentHeader
          tag="Weekly Evening Majlis"
          arabic="الله"
          title="Weekly Thursday Khatam Gathering"
          subtitle="The time-honored Thursday Majlis-e-Khatmat held every week after Asr and Maghrib prayers."
        />

        {/* Shaha Split Banner: Photo on Left, Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden border border-[#d59b35]/30 shadow-2xl mb-14 bg-[#1f1a15]">
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-[480px]">
            <picture>
              <source
                type="image/webp"
                srcSet={spirePlate.srcSet}
                sizes="(max-width: 1024px) 100vw, 550px"
              />
              <img
                src={spirePlate.originalPath}
                alt="Khanqah-e-Andrabia Pagoda Spire"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#14110e]/90 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-7 p-5 sm:p-8 lg:p-14 flex flex-col justify-between bg-gradient-to-br from-[#1e1914] to-[#161310] relative">
            <ArabesquePattern opacity={0.05} />
            <div className="relative z-10">
              <AllahCrest text="الله" size="md" className="items-start mb-3" />

              <span className="font-mono text-xs uppercase tracking-widest text-[#d59b35] font-bold block mb-1">
                Thursday Evening Liturgy
              </span>

              <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight mb-4">
                The Heritage of Thursday Khatam
              </h3>

              <p className="font-manrope text-sm sm:text-base text-[#d4cec7] leading-relaxed mb-6">
                In Kashmiri Sufi hospices, Thursday evenings hold special reverence for commemorative litanies and invocations of saintly blessings. At Khanqah-e-Andrabia Sonwar, this weekly assembly draws elders, youth, and travellers who assemble after Asr prayer for Khatam-e-Sharief, Durood-e-Taj, and quiet introspection.
              </p>

              {/* Timing Highlight Pill */}
              <div className="p-4 rounded-lg bg-[#14110e]/80 border-l-4 border-[#d59b35] border-y border-r border-[#d59b35]/20 text-xs sm:text-sm text-[#d4cec7] mb-8">
                <strong className="text-white block font-semibold mb-1 uppercase tracking-wider text-xs">
                  Assembly Timing & Welcome:
                </strong>
                <span>
                  The assembly commences shortly after the Asr congregational prayer and concludes around Maghrib. All worshippers and visitors are cordially welcomed.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a href="#events" className="btn-shaha-gold">
                  <span>View All Occasions</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#location" className="btn-shaha-outline">
                  <span>Directions & Map</span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#d59b35]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400 relative z-10">
              <span>Traditional Tabarruk is shared among all attendees</span>
              <RubElHizb size={16} className="text-[#d59b35]" />
            </div>
          </div>
        </div>

        {/* 4 Liturgical Steps in Shaha Card Format */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {khatamRituals.map((ritual, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-[#1e1914] border border-[#d59b35]/20 hover:border-[#d59b35]/60 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded bg-[#14110e] border border-[#d59b35]/30 text-[#d59b35] font-mono text-xs font-bold flex items-center justify-center group-hover:scale-110 transition-transform">
                    {ritual.numEn}
                  </span>
                  <RubElHizb size={14} className="text-[#d59b35]/40" />
                </div>

                <h4 className="font-cormorant text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-[#d59b35] transition-colors">
                  {ritual.titleEn}
                </h4>
                <p className="font-manrope text-xs text-[#d4cec7] leading-relaxed">
                  {ritual.descEn}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#d59b35]/15 text-[11px] text-[#d59b35] font-semibold uppercase tracking-wider flex items-center gap-1">
                <span>✦</span>
                <span>Preserved Step</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
