import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Sparkles, ChevronRight, Moon } from 'lucide-react';
import { ArchOrnamentHeader } from '../IslamicArt/ArchFrame';
import { RubElHizb } from '../IslamicArt/RubElHizb';
import { ArabesquePattern } from '../IslamicArt/ArabesquePattern';
import { AllahCrest } from '../IslamicArt/AllahCrest';
import { getHijriDate, HijriDateResult } from '../../services/hijriCalendar';
import { SPECIAL_OCCASIONS } from '../../data/astaanData';

export const EventsHijriSection: React.FC = () => {
  const [offsetDays, setOffsetDays] = useState<number>(-1);
  const currentHijri: HijriDateResult = getHijriDate(new Date(), offsetDays);

  const primaryUrs = SPECIAL_OCCASIONS.find(o => o.isPrimaryUrs) || SPECIAL_OCCASIONS[0];
  const otherOccasions = SPECIAL_OCCASIONS.filter(o => !o.isPrimaryUrs);

  return (
    <section id="events" className="py-24 px-4 relative bg-[#181512] border-t border-[#d59b35]/20">
      <ArabesquePattern opacity={0.04} className="absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ArchOrnamentHeader
          tag="Umm al-Qura Calendar & Hijri Events"
          arabic="الله"
          title="Sacred Events & Hijri Commemorations"
          subtitle="Computed via native Intl Umm al-Qura engine with regional moon-sighting adjustments for Kashmir."
        />

        {/* Live Hijri Date & Moon-Sighting Control Console */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="my-10 p-6 sm:p-8 rounded-xl bg-[#1e1914] border border-[#d59b35]/35 relative overflow-hidden shadow-2xl"
        >
          <ArabesquePattern opacity={0.03} />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            {/* Live Computed Hijri Banner */}
            <div className="md:col-span-7 flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-[#14110e] border border-[#d59b35]/30 flex items-center justify-center text-[#d59b35] shrink-0">
                <Moon className="w-7 h-7 text-[#d59b35]" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#d59b35] font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                  <span>Today’s Hijri Date:</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#549e8d] animate-pulse" />
                </div>
                <div className="font-cormorant text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                  {currentHijri.formattedEnglish}
                </div>
                <div className="font-amiri text-sm text-[#f5cf7b] mt-0.5">
                  {currentHijri.formattedArabic}
                </div>
              </div>
            </div>

            {/* Regional Sighting Selector */}
            <div className="md:col-span-5 flex flex-col sm:items-end">
              <span className="text-xs text-slate-400 mb-2 font-mono uppercase tracking-wider">
                Regional Sighting Adjustment:
              </span>
              <div className="inline-flex rounded-lg bg-[#14110e] p-1 border border-[#d59b35]/25">
                {[
                  { offset: -1, label: 'Kashmir (-1d)' },
                  { offset: 0, label: 'Umm al-Qura (0d)' },
                  { offset: 1, label: 'Sighting (+1d)' }
                ].map((item) => (
                  <button
                    key={item.offset}
                    onClick={() => setOffsetDays(item.offset)}
                    className={`px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                      offsetDays === item.offset
                        ? 'bg-[#d59b35] text-white font-bold shadow-md'
                        : 'text-slate-400 hover:text-[#f5cf7b]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Central Dedicated Feature: Annual Urs of Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-5 sm:p-8 lg:p-12 mb-14 rounded-xl bg-[#1e1914] border border-[#d59b35]/40 shadow-2xl relative overflow-hidden"
        >
          <ArabesquePattern opacity={0.04} />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#d59b35]/20 gap-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#d59b35] text-white text-xs font-bold font-mono uppercase tracking-wider shadow-md self-start sm:self-auto">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Central Annual Commemoration</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f5cf7b]">
              <CalendarIcon className="w-4 h-4 text-[#d59b35]" />
              <span>{primaryUrs.dateNoteEn}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight mb-4">
                Annual Urs Mubarak: 16th Jumada al-Awwal (1081 AH)
              </h3>
              <p className="font-manrope text-sm sm:text-base text-[#d4cec7] leading-relaxed mb-6">
                {primaryUrs.descEn}
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="text-xs uppercase tracking-wider text-[#d59b35] font-semibold font-mono mb-2">
                  Urs Program Observances:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#d4cec7]">
                  {primaryUrs.activitiesEn.map((act, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#d59b35] font-bold">✦</span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#location" className="btn-shaha-gold">
                <span>Sanctuary Location & Route</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-xl bg-[#14110e]/95 border border-[#d59b35]/30 text-center shadow-xl">
              <AllahCrest text="الله" size="lg" className="mb-2" />
              <div className="font-mono text-xs uppercase tracking-widest text-[#d59b35] font-bold mb-1">
                Wisal Mubarak Record
              </div>
              <div className="font-cormorant text-2xl font-bold text-[#f5cf7b] mb-1 uppercase tracking-tight">
                16 Jumada al-Awwal 1081 AH
              </div>
              <div className="font-mono text-xs text-slate-300 uppercase tracking-wider">
                Historical Urs Commemoration
              </div>
              <div className="mt-4 pt-3 border-t border-[#d59b35]/20 w-full text-[11px] text-slate-400 font-mono">
                Astaan Sonwar Bagh, Srinagar
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Commemorations Calendar Grid in Shaha Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherOccasions.map((occ, idx) => (
            <motion.div
              key={occ.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-[#1e1914] border border-[#d59b35]/20 hover:border-[#d59b35]/60 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#d59b35]/15">
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#14110e] text-[#f5cf7b] border border-[#d59b35]/20">
                    {occ.dateNoteEn}
                  </span>
                  <RubElHizb size={14} className="text-[#d59b35]/50" />
                </div>

                <h4 className="font-cormorant text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#d59b35] transition-colors mb-2">
                  {occ.titleEn}
                </h4>
                <p className="font-manrope text-xs text-[#d4cec7] leading-relaxed mb-4">
                  {occ.descEn}
                </p>
              </div>

              <div className="pt-3 border-t border-[#d59b35]/15 flex items-center justify-between text-xs text-[#d59b35] font-semibold uppercase tracking-wider">
                <span>Sacred Occasion</span>
                <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
