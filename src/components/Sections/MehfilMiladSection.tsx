import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, ArrowUpRight } from 'lucide-react';
import { ArchOrnamentHeader } from '../IslamicArt/ArchFrame';
import { RubElHizb } from '../IslamicArt/RubElHizb';
import { ArabesquePattern } from '../IslamicArt/ArabesquePattern';
import { AllahCrest } from '../IslamicArt/AllahCrest';

export const MehfilMiladSection: React.FC = () => {
  const awliyaGatherings = [
    {
      nameEn: 'Urs of Sultan-ul-Arifeen Sheikh Hamza Makhdoom (R.A.)',
      dateEn: '13th to 24th Safar-ul-Muzaffar',
      descEn:
        'Commemorating Kashmir’s foremost indigenous spiritual master, Mehboob-ul-Alam, with classical litanies and reflections on local Sufi ethics.'
    },
    {
      nameEn: 'Gyarwee Sharif & Urs of Ghaus-ul-Azam (R.A.)',
      dateEn: '11th Rabi-us-Sani (Monthly & Annual)',
      descEn:
        'Revered across Kashmir as Dastgeer Sahib. Recitation of Khatam-e-Ghausia and discourses on spiritual purification in the Qadiri way.'
    },
    {
      nameEn: 'Urs of Amir-e-Kabir Mir Sayyid Ali Hamadani (R.A.)',
      dateEn: '6th Dhu al-Hijjah',
      descEn:
        'Honoring the patron saint of Kashmir who introduced Islam, arts, and crafts to the Valley, with comprehensive dawn Aurad-e-Fathiya.'
    }
  ];

  return (
    <section id="mehfil" className="py-24 px-4 relative bg-[#181512] border-t border-[#d59b35]/20">
      <ArabesquePattern opacity={0.04} className="absolute inset-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ArchOrnamentHeader
          tag="Milad & Commemorative Majalis"
          arabic="الله"
          title="Mehfil-e-Milad & Saintly Commemorations"
          subtitle="Celebrating the blessed Mawlid of Prophet Muhammad ﷺ and venerating Kashmir’s spiritual masters."
        />

        {/* Featured Card: Eid Milad-un-Nabi ﷺ in Shaha Luxury Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-5 sm:p-8 lg:p-12 mb-14 rounded-xl bg-[#1e1914] border border-[#d59b35]/35 shadow-2xl relative overflow-hidden"
        >
          <ArabesquePattern opacity={0.05} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3.5 py-1 rounded bg-[#d59b35] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Most Blessed Commemoration</span>
                </span>
                <span className="text-xs font-mono text-[#f5cf7b] font-semibold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#d59b35]" />
                  <span>12th Rabi-ul-Awwal</span>
                </span>
              </div>

              <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight mb-4">
                Eid Milad-un-Nabi ﷺ at Khanqah-e-Andrabia
              </h3>

              <p className="font-manrope text-sm sm:text-base text-[#d4cec7] leading-relaxed mb-6">
                During the auspicious month of Rabi-ul-Awwal, Khanqah-e-Andrabia is illuminated in solemn celebration of the birth of the Seal of Prophets, Muhammad ﷺ. Devotees gather for traditional Naat Khawani rendered in classical Kashmiri, Persian, and Urdu metres, accompanied by scholarly discourses on the Prophet’s boundless mercy, ethics, and character.
              </p>

              {/* Milad Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#d4cec7] mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-[#d59b35] font-bold">✦</span>
                  <span>Continuous Salawat & Durood-e-Taj recitation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#549e8d] font-bold">✦</span>
                  <span>Classical Kashmiri & Persian Naat Khawani</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#d59b35] font-bold">✦</span>
                  <span>Scholarly lectures on the Prophetic Seerah</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#549e8d] font-bold">✦</span>
                  <span>Distribution of Tabarruk and sweets</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a href="#events" className="btn-shaha-gold">
                  <span>View Islamic Calendar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Side Calligraphic Medallion */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl bg-[#14110e]/95 border border-[#d59b35]/30 text-center shadow-xl">
              <AllahCrest text="محمد ﷺ" size="lg" className="mb-2" />
              <div className="font-amiri text-2xl text-[#f5cf7b] mb-1 font-semibold leading-relaxed">
                يَا نَبِي سَلَامٌ عَلَيْكَ
              </div>
              <div className="font-manrope text-xs text-slate-400 italic mt-2">
                "May blessings and peace descend eternally upon the Prophet of Mercy ﷺ"
              </div>
            </div>
          </div>
        </motion.div>

        {/* Saintly Commemorations Grid in Shaha Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awliyaGatherings.map((gathering, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-7 rounded-xl bg-[#1e1914] border border-[#d59b35]/20 hover:border-[#d59b35]/60 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#d59b35]/15">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#14110e] text-[#f5cf7b] border border-[#d59b35]/20">
                    {gathering.dateEn}
                  </span>
                  <RubElHizb size={14} className="text-[#d59b35]/50" />
                </div>

                <h4 className="font-cormorant text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#d59b35] transition-colors mb-2">
                  {gathering.nameEn}
                </h4>
                <p className="font-manrope text-xs text-[#d4cec7] leading-relaxed">
                  {gathering.descEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d59b35]/15 flex items-center justify-between text-xs text-[#d59b35] font-semibold uppercase tracking-wider">
                <span>Sacred Day</span>
                <Sparkles className="w-3.5 h-3.5 text-[#549e8d]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
