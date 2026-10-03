import React from 'react';
import { motion } from 'motion/react';
import { Compass, Landmark, Sparkles, Mountain, ScrollText, Calendar } from 'lucide-react';
import { ArchOrnamentHeader } from './IslamicArt/ArchFrame';
import { HISTORICAL_EPOCHS } from '../data/heritageData';
import { RubElHizb } from './IslamicArt/RubElHizb';

const timelineIcons: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5 text-gold-400" />,
  Landmark: <Landmark className="w-5 h-5 text-gold-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-gold-400" />,
  Mountain: <Mountain className="w-5 h-5 text-gold-400" />,
  ScrollText: <ScrollText className="w-5 h-5 text-gold-400" />,
};

export const HistoricalTimeline: React.FC = () => {
  return (
    <section id="chronology" className="py-20 px-4 relative bg-emerald-950/20">
      <div className="max-w-5xl mx-auto">
        <ArchOrnamentHeader
          arabic="تسلسل العصور والعهود التاريخية"
          title="Historical Chronology"
          subtitle="A five-epoch timeline documenting the unbroken spiritual lineage from 1379 CE to the present."
        />

        <div className="relative mt-16 pl-6 sm:pl-10 border-l-2 border-gold-400/30 space-y-12">
          {HISTORICAL_EPOCHS.map((epoch, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Icon Pin */}
              <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-950 border-2 border-gold-400 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-gold-300 transition-transform">
                {timelineIcons[epoch.iconName] || <Calendar className="w-5 h-5 text-gold-400" />}
              </div>

              {/* Content Card */}
              <div className="glass-panel p-6 sm:p-8 ml-2 sm:ml-4 group-hover:border-gold-400/50 transition-all">
                {/* Year & Tag Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-cormorant text-xl sm:text-2xl font-bold text-text-gold">
                      {epoch.yearRange}
                    </span>
                    {epoch.hijriYear && (
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-text-secondary">
                        {epoch.hijriYear}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-900/60 border border-gold-400/20 text-gold-300">
                    {epoch.tag}
                  </span>
                </div>

                {/* Arabic / Urdu Epigraph */}
                {epoch.arabicTitle && (
                  <div className="font-amiri text-sm sm:text-base text-gold-400 font-semibold mb-1">
                    {epoch.arabicTitle}
                  </div>
                )}

                {/* Epoch Title */}
                <h3 className="font-cormorant text-xl sm:text-2xl font-bold text-text-primary mb-3">
                  {epoch.title}
                </h3>

                {/* Description */}
                <p className="font-manrope text-sm text-text-secondary leading-relaxed">
                  {epoch.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-text-muted font-manrope">
            <RubElHizb size={16} />
            <span>Documented in Classical Persian Tadhkirahs & Indo-Islamic Heritage Registry</span>
            <RubElHizb size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};
