import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Sparkles, CheckCircle2, Info } from 'lucide-react';
import { ShahaPageBanner } from '../components/ShahaPageBanner';
import { RubElHizb } from '../components/IslamicArt/RubElHizb';
import { ArabesquePattern } from '../components/IslamicArt/ArabesquePattern';
import { AllahCrest } from '../components/IslamicArt/AllahCrest';
import { SPECIAL_OCCASIONS } from '../data/astaanData';

export const EventsPage: React.FC = () => {
  const primaryUrs = SPECIAL_OCCASIONS.find(o => o.isPrimaryUrs) || SPECIAL_OCCASIONS[0];
  const otherOccasions = SPECIAL_OCCASIONS.filter(o => !o.isPrimaryUrs);

  return (
    <div className="bg-[#14110e] text-[#fcfbf9]">
      {/* Signature Shaha Page Opening Title Banner */}
      <ShahaPageBanner
        title="Events & Hijri Calendar"
        subtitle="Commemorating the Urs of Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.) and sacred gatherings throughout the Islamic year."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events' }
        ]}
      />

      <div className="py-16 px-4 max-w-7xl mx-auto">
        {/* Lunar Moon Sighting Notice */}
        <div className="mb-12 p-5 rounded-xl bg-[#1e1914] border-l-4 border-[#d59b35] border-y border-r border-[#d59b35]/20 text-xs sm:text-sm text-[#d4cec7] flex items-start gap-3 shadow-lg">
          <Info className="w-5 h-5 text-[#d59b35] shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block font-semibold mb-1 uppercase tracking-wider text-xs">
              Lunar Calendar & Event Announcements:
            </strong>
            <span>
              All religious commemorations and Urs assemblies follow the regional Islamic lunar calendar. Exact dates and program timings are formally announced by the Astaan management prior to each blessed occasion.
            </span>
          </div>
        </div>

        {/* Primary Dedicated Feature: Urs of Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-5 sm:p-8 lg:p-12 mb-16 rounded-xl bg-[#1e1914] border border-[#d59b35]/35 shadow-2xl relative overflow-hidden"
        >
          <ArabesquePattern opacity={0.04} />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-[#d59b35]/20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#d59b35] text-white text-xs font-bold uppercase tracking-wider shadow self-start sm:self-auto">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Central Annual Commemoration</span>
              </div>
              <span className="font-mono text-xs text-[#f5cf7b] font-semibold">
                Astaan Sonwar Bagh
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h2 className="font-cormorant text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-3">
                  {primaryUrs.titleEn}
                </h2>

                <div className="text-xs sm:text-sm font-semibold text-[#549e8d] mb-4 flex items-center gap-2 font-mono">
                  <Calendar className="w-4 h-4 text-[#549e8d]" />
                  <span>{primaryUrs.dateNoteEn}</span>
                </div>

                <p className="font-manrope text-sm text-[#d4cec7] leading-relaxed mb-6">
                  {primaryUrs.descEn}
                </p>

                <div className="space-y-2.5">
                  <div className="font-semibold text-xs uppercase tracking-wider text-[#d59b35] mb-2 font-mono">
                    Urs Program Highlights:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {primaryUrs.activitiesEn.map((act, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#d4cec7]">
                        <CheckCircle2 className="w-4 h-4 text-[#d59b35] shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl bg-[#14110e] border border-[#d59b35]/30 text-center shadow-inner">
                <AllahCrest text="الله" size="lg" className="mb-2" />
                <div className="font-mono text-xs uppercase tracking-wider text-[#d59b35] font-bold mb-1">
                  Wisal Record
                </div>
                <div className="font-cormorant text-2xl font-bold text-[#f5cf7b] mb-1">
                  16 Jumada al-Awwal 1081 AH
                </div>
                <div className="font-mono text-[11px] text-[#9e958b]">
                  Courtyard Tomb • Sonwar Bagh
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Blessed Occasions Grid */}
        <div>
          <div className="text-center mb-10">
            <span className="font-mono text-xs text-[#d59b35] uppercase tracking-widest font-bold block mb-1">
              Annual Calendar
            </span>
            <h3 className="font-cormorant text-3xl font-bold text-white uppercase tracking-tight">
              Other Major Commemorations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherOccasions.map((occ) => (
              <div
                key={occ.id}
                className="p-5 sm:p-7 rounded-xl bg-[#1e1914] border border-[#d59b35]/20 hover:border-[#d59b35]/50 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#d59b35]/15 gap-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#14110e] border border-[#d59b35]/20 text-[#f5cf7b] font-bold truncate">
                      {occ.dateNoteEn}
                    </span>
                    <RubElHizb size={15} className="text-[#d59b35]/60 shrink-0" />
                  </div>

                  <h4 className="font-cormorant text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-[#d59b35] transition-colors">
                    {occ.titleEn}
                  </h4>

                  <p className="font-manrope text-xs sm:text-sm text-[#d4cec7] leading-relaxed mb-4">
                    {occ.descEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#d59b35]/15 flex items-center justify-between text-xs text-[#d59b35] font-semibold uppercase tracking-wider">
                  <span>Commemorative Assembly</span>
                  <span>✦</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
