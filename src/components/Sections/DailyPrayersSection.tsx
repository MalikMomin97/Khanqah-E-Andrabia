import React from 'react';
import { motion } from 'motion/react';
import { Clock, Sun, Moon, Sparkles, Info, ArrowUpRight } from 'lucide-react';
import { ArchOrnamentHeader } from '../IslamicArt/ArchFrame';
import { ArabesquePattern } from '../IslamicArt/ArabesquePattern';
import { DAILY_PRAYERS } from '../../data/astaanData';

const prayerIcons: Record<string, React.ReactNode> = {
  Fajr: <Sun className="w-5 h-5 text-[#d59b35]" />,
  Dhuhr: <Sun className="w-5 h-5 text-[#f5cf7b]" />,
  Asr: <Sun className="w-5 h-5 text-[#d59b35]" />,
  Maghrib: <Moon className="w-5 h-5 text-[#549e8d]" />,
  Isha: <Moon className="w-5 h-5 text-[#549e8d]" />
};

export const DailyPrayersSection: React.FC = () => {
  return (
    <section id="prayers" className="py-24 px-4 relative bg-[#14110e] border-t border-[#d59b35]/20">
      <ArabesquePattern opacity={0.035} className="absolute inset-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ArchOrnamentHeader
          tag="Daily Liturgy & Congregation"
          arabic="الله"
          title="The Five Daily Congregational Prayers"
          subtitle="Preserving the communal cadence of five daily prayers and the revered dawn recitation of Aurad-e-Fathiya."
        />

        {/* Shaha Seasonal Notice Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="my-8 p-5 sm:p-6 rounded-xl bg-[#1e1914] border-l-4 border-[#d59b35] border-y border-r border-[#d59b35]/20 text-xs sm:text-sm text-[#d4cec7] flex items-start gap-4 shadow-xl"
        >
          <Info className="w-5 h-5 text-[#d59b35] shrink-0 mt-0.5" />
          <div className="flex-1">
            <strong className="text-white block font-semibold uppercase tracking-wider text-xs mb-1">
              Seasonal Solar Shifts & Notice Board Iqamah:
            </strong>
            <p className="leading-relaxed">
              In the Kashmir Valley, congregational prayer and Iqamah timings shift continuously with seasonal solar elevation. Visitors and worshippers are kindly requested to check the Astaan entrance bulletin board for current Iqamah times.
            </p>
          </div>
        </motion.div>

        {/* Five Daily Prayers Grid in Shaha Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
          {DAILY_PRAYERS.map((prayer, idx) => {
            const isFajr = prayer.nameEn === 'Fajr';

            return (
              <motion.div
                key={prayer.nameEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-xl bg-[#1e1914] border transition-all text-center relative group flex flex-col justify-between shadow-xl ${
                  isFajr ? 'border-[#d59b35]/60 bg-[#251f19]' : 'border-[#d59b35]/20 hover:border-[#d59b35]/50'
                }`}
              >
                {/* Special Liturgy Highlight Badge for Fajr */}
                {isFajr && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d59b35] text-white text-[10px] font-bold font-mono uppercase tracking-wider px-3 py-0.5 rounded shadow-md whitespace-nowrap">
                    Includes Aurad
                  </div>
                )}

                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#14110e] border border-[#d59b35]/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {prayerIcons[prayer.nameEn] || <Clock className="w-5 h-5 text-[#d59b35]" />}
                  </div>

                  <h4 className="font-cormorant text-2xl font-bold text-white uppercase tracking-tight mb-0.5">
                    {prayer.nameEn}
                  </h4>
                  <div className="font-amiri text-xs text-[#d59b35] font-semibold mb-3">
                    {prayer.arabic}
                  </div>

                  <p className="font-manrope text-xs text-[#d4cec7] leading-relaxed mb-4">
                    {prayer.descEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#d59b35]/15">
                  <div className="text-[11px] font-mono font-semibold px-2.5 py-1.5 rounded bg-[#14110e] text-[#f5cf7b] border border-[#d59b35]/25">
                    {prayer.timeNoteEn}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Aurad-e-Fathiya Feature in Shaha Card */}
        <div className="mt-12 p-5 sm:p-8 rounded-xl bg-[#1e1914] border border-[#d59b35]/30 shadow-2xl relative overflow-hidden">
          <ArabesquePattern opacity={0.04} />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d59b35]/15 border border-[#d59b35]/30 text-[#d59b35] text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Kashmiri Morning Liturgy</span>
              </div>
              <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Collective Aurad-e-Fathiya at Dawn
              </h3>
              <p className="font-manrope text-xs sm:text-sm text-[#d4cec7] max-w-2xl leading-relaxed">
                Authored by Amir-e-Kabir Mir Sayyid Ali Hamadani (R.A.), this revered compendium of divine praises, Quranic invocations, and Istighfar is recited collectively following the Fajr congregational prayer.
              </p>
            </div>
            <a href="#thursday-khatam" className="btn-shaha-gold shrink-0 w-full sm:w-auto">
              <span>View Thursday Khatam</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
