import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, HeartHandshake, ChevronRight } from 'lucide-react';
import { ArchOrnamentHeader } from '../IslamicArt/ArchFrame';
import { RubElHizb } from '../IslamicArt/RubElHizb';
import { ArabesquePattern } from '../IslamicArt/ArabesquePattern';
import { AllahCrest } from '../IslamicArt/AllahCrest';
import imagesManifest from '../../data/imagesManifest.json';

export const SpiritualHeritageSection: React.FC = () => {
  const heritagePlate = imagesManifest['khanqah-1'] || imagesManifest['astaan-hero'];

  const spiritualPillars = [
    {
      numEn: '01',
      titleEn: 'Tazkiyat-un-Nafs (Heart Purification)',
      descEn:
        'Cultivating profound inner sincerity, divine remembrance (Zikr), and spiritual humility away from worldly ostentation, as practiced by Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.).',
      icon: <Sparkles className="w-5 h-5 text-[#549e8d]" />
    },
    {
      numEn: '02',
      titleEn: 'Custody of Quran & Hadith Sciences',
      descEn:
        'A distinguished lineage of Hafiz-e-Quran scholars. Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.) received spiritual stations of Suluk directly from his father, dedicating his life to religious instruction.',
      icon: <BookOpen className="w-5 h-5 text-[#d59b35]" />
    },
    {
      numEn: '03',
      titleEn: 'Khidmat & Solace for All Seekers',
      descEn:
        'The Kashmiri Sufi ethos of unconditional communal hospitality (Langar), silent service, spiritual solace for seekers, and prayers for the relief of suffering.',
      icon: <HeartHandshake className="w-5 h-5 text-[#549e8d]" />
    }
  ];

  return (
    <section id="heritage" className="py-24 px-4 relative bg-[#181512] border-t border-[#d59b35]/20">
      <ArabesquePattern opacity={0.04} className="absolute inset-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ArchOrnamentHeader
          tag="Spiritual Heritage & Lineage"
          arabic="الله"
          title="About the Astaan & Sacred Lineage"
          subtitle="Six centuries of scholastic custody, heart-purification (Tazkiyah), and quiet devotion rooted in the Hamadani Sufi transmission."
        />

        {/* Shaha Signature Full-Bleed Split Showcase Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden border border-[#d59b35]/30 shadow-2xl mb-16 bg-[#1f1a15]">
          {/* Left: Full-Height Evocative Photographic Plate */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[500px]">
            <picture>
              <source
                type="image/webp"
                srcSet={heritagePlate.srcSet}
                sizes="(max-width: 1024px) 100vw, 650px"
              />
              <img
                src={heritagePlate.originalPath}
                alt="Khanaqah-e-Andrabia Heritage Plate"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#14110e]/90 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Right: Shaha Editorial Band */}
          <div className="lg:col-span-6 p-5 sm:p-8 lg:p-14 flex flex-col justify-between bg-gradient-to-br from-[#1e1914] to-[#161310] relative">
            <ArabesquePattern opacity={0.05} />
            <div className="relative z-10">
              <AllahCrest text="الله" size="md" className="items-start mb-3" />

              <span className="font-mono text-xs uppercase tracking-widest text-[#d59b35] font-bold block mb-1">
                Primary Archival Biography
              </span>

              <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight mb-4">
                Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.)
              </h3>

              <div className="space-y-4 font-manrope text-sm sm:text-base text-[#d4cec7] leading-relaxed mb-6">
                <p>
                  <strong className="text-white font-semibold">Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.)</strong> belonged to the noble Sadat-e-Andrabiya family. His respected father, Hazrat Mir Syed Muhammad Ibrahim Andrabi (R.A.), was an eminent saint, a Hafiz of the Holy Quran, and a scholar who spent his nights in vigilant worship. He passed away in 1076 AH and is buried in Malaratta, Srinagar.
                </p>
                <p>
                  Both Hazrat Mir Syed Kamal-ud-Din Andrabi and his brother Mir Tahir were Hafiz of the Quran and knowledgeable in Hadith sciences. Kamal-ud-Din received all stations of the spiritual path (Suluk) and divine mysteries directly from his father. After performing the holy pilgrimage of Hajj, he relocated to Sonwar, Srinagar, devoting his entire life to teaching, worship, and spiritual direction.
                </p>
                <p>
                  He passed away on 16 Jumada al-Awwal 1081 AH, and rests in eternal peace in the courtyard of his house in Sonwar Bagh, Srinagar.
                </p>
              </div>

              {/* Shaha Button CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a href="#thursday-khatam" className="btn-shaha-gold">
                  <span>Weekly Majalis</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#location" className="btn-shaha-outline">
                  <span>Visit Sanctuary</span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#d59b35]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400 relative z-10">
              <span>Annual Urs: 16 Jumada al-Awwal 1081 AH</span>
              <RubElHizb size={16} className="text-[#d59b35]" />
            </div>
          </div>
        </div>

        {/* 3 Pillars of Spiritual Transmission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spiritualPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.numEn}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-5 sm:p-7 rounded-xl bg-[#1e1914] border border-[#d59b35]/20 hover:border-[#d59b35]/60 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#14110e] border border-[#d59b35]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#f5cf7b] px-2 py-0.5 rounded bg-[#14110e] border border-[#d59b35]/20">
                    {pillar.numEn}
                  </span>
                </div>

                <h4 className="font-cormorant text-2xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-[#d59b35] transition-colors">
                  {pillar.titleEn}
                </h4>

                <p className="font-manrope text-xs sm:text-sm text-[#d4cec7] leading-relaxed">
                  {pillar.descEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d59b35]/15 flex items-center justify-between text-xs text-[#d59b35] font-semibold uppercase tracking-wider">
                <span>Spiritual Pillar</span>
                <RubElHizb size={14} className="text-[#d59b35]/60" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
