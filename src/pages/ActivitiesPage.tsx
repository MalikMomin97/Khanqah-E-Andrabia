import React from 'react';
import { Clock, Sun, Moon, Info, Sparkles } from 'lucide-react';
import { ShahaPageBanner } from '../components/ShahaPageBanner';
import { RubElHizb } from '../components/IslamicArt/RubElHizb';
import { ArabesquePattern } from '../components/IslamicArt/ArabesquePattern';
import { AllahCrest } from '../components/IslamicArt/AllahCrest';
import { DAILY_PRAYERS, REGULAR_ACTIVITIES } from '../data/astaanData';

const prayerIcons: Record<string, React.ReactNode> = {
  Fajr: <Sun className="w-5 h-5 text-[#f5cf7b]" />,
  Dhuhr: <Sun className="w-5 h-5 text-[#d59b35]" />,
  Asr: <Sun className="w-5 h-5 text-[#be8525]" />,
  Maghrib: <Moon className="w-5 h-5 text-[#549e8d]" />,
  Isha: <Moon className="w-5 h-5 text-[#428475]" />
};

export const ActivitiesPage: React.FC = () => {
  return (
    <div className="bg-[#14110e] text-[#fcfbf9]">
      {/* Signature Shaha Page Opening Title Banner */}
      <ShahaPageBanner
        title="Weekly Programs & Activities"
        subtitle="The daily cadence of congregational prayers, weekly Friday assemblies, and the sacred Thursday evening Khatmat."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Programs' }
        ]}
      />

      <div className="py-16 px-4 max-w-7xl mx-auto">
        {/* Seasonal Timing Notice */}
        <div className="mb-14 p-5 rounded-xl bg-[#1e1914] border-l-4 border-[#d59b35] border-y border-r border-[#d59b35]/20 text-xs sm:text-sm text-[#d4cec7] flex items-start gap-3 shadow-lg">
          <Info className="w-5 h-5 text-[#d59b35] shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block font-semibold mb-1 uppercase tracking-wider text-xs">
              Seasonal Solar Shifts & Notice Board Iqamah:
            </strong>
            <span>
              In Srinagar, congregational prayer and Iqamah timings shift throughout the year aligned with seasonal solar positions. Visitors are advised to refer to the daily announcement board at the Astaan entrance.
            </span>
          </div>
        </div>

        {/* Five Daily Prayers Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <AllahCrest text="الله" size="md" className="mb-2" />
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              The Five Daily Congregational Prayers
            </h2>
            <p className="font-manrope text-xs sm:text-sm text-[#9e958b] max-w-xl mx-auto mt-2">
              Farz prayers observed in congregation daily with Adhan and Iqamah.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {DAILY_PRAYERS.map((prayer) => {
              const isFajr = prayer.nameEn === 'Fajr';

              return (
                <div
                  key={prayer.nameEn}
                  className={`p-6 rounded-xl bg-[#1e1914] border transition-all text-center relative group flex flex-col justify-between shadow-xl ${
                    isFajr ? 'border-[#d59b35]/60 bg-[#251f19]' : 'border-[#d59b35]/20 hover:border-[#d59b35]/50'
                  }`}
                >
                  {isFajr && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d59b35] text-white text-[10px] font-bold font-mono uppercase tracking-wider px-3 py-0.5 rounded shadow-md whitespace-nowrap">
                      Includes Aurad
                    </div>
                  )}

                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#14110e] border border-[#d59b35]/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      {prayerIcons[prayer.nameEn] || <Clock className="w-5 h-5 text-[#d59b35]" />}
                    </div>

                    <h3 className="font-cormorant text-2xl font-bold text-white uppercase tracking-tight mb-0.5">
                      {prayer.nameEn}
                    </h3>
                    <div className="font-amiri text-xs text-[#d59b35] font-semibold mb-3">
                      {prayer.arabic}
                    </div>

                    <p className="font-manrope text-xs text-[#d4cec7] leading-relaxed mb-4">
                      {prayer.descEn}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#d59b35]/15 flex items-center justify-between text-[11px] font-mono text-[#f5cf7b]">
                    <span>Congregational</span>
                    <RubElHizb size={12} className="text-[#d59b35]/60" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Regular Weekly Assemblies Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="font-mono text-xs text-[#d59b35] uppercase tracking-widest font-bold block mb-1">
              Weekly Liturgies
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Weekly Spiritual Gatherings (Majalis)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REGULAR_ACTIVITIES.map((act) => (
              <div
                key={act.id}
                className="p-5 sm:p-8 lg:p-10 rounded-xl bg-[#1e1914] border border-[#d59b35]/30 shadow-2xl relative overflow-hidden flex flex-col justify-between"
              >
                <ArabesquePattern opacity={0.03} />
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs px-3 py-1 rounded bg-[#14110e] border border-[#d59b35]/25 text-[#f5cf7b] font-bold">
                      {act.scheduleEn}
                    </span>
                    <Sparkles className="w-5 h-5 text-[#d59b35]" />
                  </div>

                  <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3">
                    {act.titleEn}
                  </h3>

                  <p className="font-manrope text-xs sm:text-sm text-[#d4cec7] leading-relaxed mb-6">
                    {act.descEn}
                  </p>

                  <div className="p-4 rounded-lg bg-[#14110e] border border-[#d59b35]/20 text-xs text-[#9e958b]">
                    <strong className="text-white block font-semibold mb-1 uppercase tracking-wider text-[11px]">
                      Sanctuary Location:
                    </strong>
                    <span>Khanqah-e-Andrabia Main Prayer Hall • Sonwar Bagh</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#d59b35]/20 flex items-center justify-between text-xs text-[#d59b35] font-semibold uppercase tracking-wider relative z-10">
                  <span>Open to All Visitors</span>
                  <RubElHizb size={14} className="text-[#d59b35]/60" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
