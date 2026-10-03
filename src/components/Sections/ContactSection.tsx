import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Eye, BookOpen, MapPin, Clock, ExternalLink, Copy, Check } from 'lucide-react';
import { ArchOrnamentHeader } from '../IslamicArt/ArchFrame';
import { RubElHizb } from '../IslamicArt/RubElHizb';
import { ArabesquePattern } from '../IslamicArt/ArabesquePattern';
import { AllahCrest } from '../IslamicArt/AllahCrest';
import { ETIQUETTE_GUIDELINES } from '../../data/heritageData';
import { ASTAAN_INFO } from '../../data/astaanData';

const etiquetteIcons = [
  <ShieldCheck className="w-5 h-5 text-[#d59b35]" />,
  <HeartHandshake className="w-5 h-5 text-[#549e8d]" />,
  <Eye className="w-5 h-5 text-[#d59b35]" />,
  <BookOpen className="w-5 h-5 text-[#549e8d]" />
];

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(ASTAAN_INFO.coordinates).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-[#181512] border-t border-[#d59b35]/20">
      <ArabesquePattern opacity={0.04} className="absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ArchOrnamentHeader
          tag="Sanctuary Guidelines & Custodial Care"
          arabic="الله"
          title="Visitor Decorum & Sanctuary Information"
          subtitle="Preserving sacred tranquility, traditional etiquette, and facilitating academic and pilgrim visits to Khanqah-e-Andrabia."
        />

        {/* 4 Etiquette Guidelines Grid in Shaha Aesthetic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-16">
          {ETIQUETTE_GUIDELINES.map((guide, idx) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-xl bg-[#1e1914] border border-[#d59b35]/20 hover:border-[#d59b35]/60 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[#14110e] border border-[#d59b35]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {etiquetteIcons[idx] || <ShieldCheck className="w-5 h-5 text-[#d59b35]" />}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#f5cf7b] px-2 py-0.5 rounded bg-[#14110e] border border-[#d59b35]/20">
                    0{idx + 1}
                  </span>
                </div>

                <h4 className="font-cormorant text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#d59b35] transition-colors mb-2">
                  {guide.title}
                </h4>
                <p className="font-manrope text-xs text-[#d4cec7] leading-relaxed">
                  {guide.text}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#d59b35]/15 text-[11px] text-[#d59b35] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <span>✦</span>
                <span>Sacred Decorum</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custodial Details & Archival Guidelines (Split Shaha Showcase, No Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Custodial Details & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 p-8 sm:p-12 rounded-xl bg-[#1e1914] border border-[#d59b35]/30 shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            <ArabesquePattern opacity={0.04} />
            <div className="relative z-10">
              <AllahCrest text="الله" size="md" className="items-start mb-3" />

              <span className="font-mono text-xs uppercase tracking-widest text-[#549e8d] font-bold block mb-1">
                Sanctuary Administration
              </span>

              <h4 className="font-cormorant text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
                Custodial & Visitation Information
              </h4>

              <p className="font-manrope text-xs sm:text-sm text-[#d4cec7] leading-relaxed mb-6">
                Khanqah-e-Andrabia is maintained with deep reverence as an active spiritual sanctuary and archival heritage site. Visitors, worshippers, and researchers are welcome throughout the day during operational hours.
              </p>

              <div className="space-y-3.5 mb-8 font-manrope text-xs sm:text-sm text-[#d4cec7]">
                <div className="p-3.5 rounded-lg bg-[#14110e] border border-[#d59b35]/25 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d59b35] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-xs uppercase tracking-wider mb-0.5">Location:</strong>
                    <span>Sonwar Bagh, Srinagar, Jammu & Kashmir 190004</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#14110e] border border-[#d59b35]/25 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#549e8d] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-xs uppercase tracking-wider mb-0.5">Sanctuary Hours:</strong>
                    <span>Open daily from pre-dawn Fajr until Isha night prayers</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#14110e] border border-[#d59b35]/25 flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-[#d59b35] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-xs uppercase tracking-wider mb-0.5">Registry Entity:</strong>
                    <span>Indo-Islamic Archival Monograph Record #10504</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={ASTAAN_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shaha-gold text-xs py-2.5 px-5"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyCoords}
                  className="btn-shaha-outline text-xs py-2.5 px-4"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy GPS Coords'}</span>
                </button>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#d59b35]/20 flex items-center justify-between text-xs text-[#9e958b] relative z-10">
              <span>Sonwar Bagh, Srinagar, Kashmir 190004</span>
              <RubElHizb size={14} className="text-[#d59b35]/60" />
            </div>
          </motion.div>

          {/* Right: Archival Authenticity & Visitor Protocols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-6 p-8 sm:p-12 rounded-xl bg-[#1e1914] border border-[#d59b35]/30 shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            <ArabesquePattern opacity={0.03} />
            <div className="relative z-10">
              <AllahCrest text="الله" size="md" className="items-start mb-3" />

              <span className="font-mono text-xs uppercase tracking-widest text-[#d59b35] font-bold block mb-1">
                Archival Custody & Protocols
              </span>

              <h4 className="font-cormorant text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
                Scholarly Research & Pilgrimage Protocols
              </h4>

              <div className="space-y-4 font-manrope text-xs sm:text-sm text-[#d4cec7] leading-relaxed mb-6">
                <p>
                  Scholars and researchers investigating the Andrabi Sayyid lineage, Persian manuscripts, regional Sufi hagiographies, and Kashmiri vernacular timber architecture are accommodated by appointment through the custodians.
                </p>
                <p>
                  The shrine holds authenticated genealogical trees (Shajarah-e-Nasab) tracing back eight generations to Sayyid Ahmad Andrabi (781 AH) and through to Hazrat Ali ibn Abi Talib (K.W.).
                </p>
              </div>

              {/* Archival Authenticity Box */}
              <div className="p-4 rounded-lg bg-[#14110e]/95 border-l-4 border-[#d59b35] border-y border-r border-[#d59b35]/20 text-xs text-[#9e958b] mb-6">
                <strong className="text-[#f5cf7b] block font-semibold mb-1 uppercase tracking-wider text-xs">
                  Commitment to Archival Authenticity:
                </strong>
                <span>{ASTAAN_INFO.placeholderDisclaimerEn}</span>
              </div>

              {/* Four Sacred Observances for Visitors */}
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wider text-[#d59b35] font-semibold font-mono mb-2">
                  Visitor Observances:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#d4cec7]">
                  <div className="flex items-center gap-2 p-2 rounded bg-[#14110e] border border-[#d59b35]/15">
                    <span className="text-[#d59b35] font-bold">✦</span>
                    <span>Tahara (Ritual Purity)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-[#14110e] border border-[#d59b35]/15">
                    <span className="text-[#549e8d] font-bold">✦</span>
                    <span>Silence During Salat</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-[#14110e] border border-[#d59b35]/15">
                    <span className="text-[#d59b35] font-bold">✦</span>
                    <span>Modest Islamic Attire</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-[#14110e] border border-[#d59b35]/15">
                    <span className="text-[#549e8d] font-bold">✦</span>
                    <span>No Commercial Filming</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#d59b35]/20 flex items-center justify-between text-xs text-[#9e958b] relative z-10">
              <span className="font-mono text-[#f5cf7b]">Entity #10504 • Wisal 1081 AH</span>
              <RubElHizb size={14} className="text-[#d59b35]/60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
