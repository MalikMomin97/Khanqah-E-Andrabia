import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Landmark, ScrollText, FileText, Maximize2, X, ShieldCheck } from 'lucide-react';
import { ArchOrnamentHeader } from '../IslamicArt/ArchFrame';
import { RubElHizb } from '../IslamicArt/RubElHizb';
import { ArabesquePattern } from '../IslamicArt/ArabesquePattern';
import { VERIFIED_DOCUMENT_DATA } from '../../data/astaanData';
import imagesManifest from '../../data/imagesManifest.json';

export const HistorySection: React.FC = () => {
  const [showDocModal, setShowDocModal] = useState<boolean>(false);
  const docImage = imagesManifest['historical-document-shajarah'] || imagesManifest['astaan-hero'];

  const historyEpochs = [
    {
      year: '781 AH / 1379 CE',
      titleEn: 'Arrival with Amir-e-Kabir Shah-e-Hamdan (R.A.)',
      descEn:
        'Sayyid Ahmad Andrabi entered the Kashmir Valley from Andarab (Central Asia) accompanying Shah-e-Hamdan during the reign of Sultan Qutub-ud-Din, establishing academic and spiritual centers in the Valley.',
      icon: <Compass className="w-5 h-5 text-[#d59b35]" />
    },
    {
      year: '1081 AH / 1670 CE',
      titleEn: 'Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.) at Sonwar Bagh',
      descEn:
        'Hafiz of the Holy Quran and scholar of Hadith, Hazrat Mir Syed Kamal-ud-Din Andrabi relocated to Sonwar for the propagation of Islamic learning. He passed away on 16th Jumada al-Awwal 1081 AH and rests in Sonwar Bagh.',
      icon: <Landmark className="w-5 h-5 text-[#549e8d]" />
    },
    {
      year: 'Contemporary Era',
      titleEn: 'Living Heritage & Indo-Islamic Entity #10504',
      descEn:
        'Documented in the Indo-Islamic Heritage Registry (#10504), the Astaan remains an active spiritual sanctuary holding daily congregational prayers, weekly Thursday Khatam assemblies, and the annual Urs Mubarak.',
      icon: <ScrollText className="w-5 h-5 text-[#d59b35]" />
    }
  ];

  return (
    <section id="history" className="py-24 px-4 relative bg-[#14110e] border-t border-[#d59b35]/20">
      <ArabesquePattern opacity={0.035} className="absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ArchOrnamentHeader
          tag="Archival Chronicle & Lineage"
          arabic="الله"
          title="Historical Chronicle & Verified Documents"
          subtitle="Verifiable historical milestones compiled from authenticated manuscripts, Persian records, and genealogical trees."
        />

        {/* Brief 3-Milestone Chronicle in Shaha Card Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16">
          {historyEpochs.map((epoch, idx) => (
            <motion.div
              key={epoch.year}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-xl bg-[#1e1914] border border-[#d59b35]/20 hover:border-[#d59b35]/60 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[#14110e] border border-[#d59b35]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {epoch.icon}
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#14110e] text-[#f5cf7b] border border-[#d59b35]/25 font-bold">
                    {epoch.year}
                  </span>
                </div>

                <h4 className="font-cormorant text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-[#d59b35] transition-colors">
                  {epoch.titleEn}
                </h4>

                <p className="font-manrope text-xs sm:text-sm text-[#d4cec7] leading-relaxed">
                  {epoch.descEn}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#d59b35]/15 flex items-center justify-between text-xs text-[#d59b35] font-semibold uppercase tracking-wider">
                <span>Verified Historical Record</span>
                <RubElHizb size={13} className="text-[#d59b35]/60" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Archival Showcase: Verified Shajarah Document */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-5 sm:p-8 lg:p-12 rounded-xl bg-[#1e1914] border border-[#d59b35]/35 shadow-2xl relative overflow-hidden"
        >
          <ArabesquePattern opacity={0.04} />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#d59b35]/20 gap-3 relative z-10">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#d59b35]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#d59b35] font-bold">
                Certified Primary Document Showcase
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="px-3 py-1 rounded bg-[#14110e] border border-[#d59b35]/30 text-[#f5cf7b] font-mono text-xs font-bold">
                Wisal: 16 Jumada al-Awwal 1081 AH
              </span>
              <button
                onClick={() => setShowDocModal(true)}
                className="btn-shaha-gold text-xs py-2 px-4"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Inspect Document</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left: Document Picture Preview with Zoom click */}
            <div className="lg:col-span-5 relative group cursor-pointer" onClick={() => setShowDocModal(true)}>
              <div className="rounded-xl overflow-hidden border-2 border-[#d59b35]/30 shadow-2xl">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={docImage.srcSet}
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                  <img
                    src={docImage.originalPath}
                    alt="Certified Historical Document of Hazrat Mir Syed Kamal-ud-Din Andrabi"
                    className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="absolute inset-0 bg-[#14110e]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl pointer-events-none">
                <span className="btn-shaha-gold text-xs shadow-2xl">
                  <Maximize2 className="w-4 h-4" />
                  <span>Click to View Full Resolution</span>
                </span>
              </div>
            </div>

            {/* Right: Transcribed English Translation & Lineage Chain */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h4 className="font-cormorant text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
                  {VERIFIED_DOCUMENT_DATA.titleEn}
                </h4>

                <div className="p-5 rounded-lg bg-[#14110e]/90 border border-[#d59b35]/25 text-xs sm:text-sm text-[#d4cec7] leading-relaxed mb-6 font-manrope">
                  <p>{VERIFIED_DOCUMENT_DATA.accurateEnglishTranslation}</p>
                </div>

                {/* Shajarah nodes excerpt */}
                <div className="space-y-2 text-xs text-[#d4cec7]">
                  <div className="font-semibold text-[#d59b35] uppercase tracking-wider mb-2 flex items-center gap-1.5 font-mono">
                    <RubElHizb size={14} />
                    <span>Genealogical Lineage Sequence (Shajarah Excerpt):</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {VERIFIED_DOCUMENT_DATA.shajarahChain.slice(0, 6).map((node) => (
                      <div key={node.num} className="p-2.5 rounded bg-[#14110e] border border-[#d59b35]/20 flex items-center justify-between">
                        <span className="text-white font-medium">{node.nameEn}</span>
                        <span className="font-mono text-[#d59b35] font-bold text-[11px]">Gen 0{node.num}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d59b35]/20 flex items-center justify-between text-xs text-[#9e958b]">
                <span className="italic">
                  * Transcribed verbatim from the verified archival framed monograph (Entity #10504).
                </span>
                <ShieldCheck className="w-4 h-4 text-[#d59b35]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modal Lightbox for High-Resolution Document Inspection */}
        <AnimatePresence>
          {showDocModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setShowDocModal(false)}
            >
              <div
                className="relative max-w-5xl w-full max-h-[92vh] bg-[#181512] border border-[#d59b35]/40 rounded-xl p-4 overflow-hidden flex flex-col shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#d59b35]/20">
                  <div className="flex items-center gap-2">
                    <RubElHizb size={20} className="text-[#d59b35]" />
                    <span className="font-cormorant text-xl font-bold text-white uppercase">
                      Certified Archival Document & Lineage Shajarah
                    </span>
                  </div>
                  <button
                    onClick={() => setShowDocModal(false)}
                    className="p-1.5 rounded bg-[#d59b35]/20 hover:bg-[#d59b35]/30 text-[#f5cf7b] cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-auto rounded-lg border border-[#d59b35]/20 flex items-center justify-center bg-black/40 p-2">
                  <img
                    src={docImage.originalPath}
                    alt="High Resolution Shajarah Document"
                    className="max-h-[75vh] w-auto object-contain rounded"
                  />
                </div>

                <div className="mt-3 pt-2 border-t border-[#d59b35]/20 flex items-center justify-between text-xs text-[#9e958b]">
                  <span>Official Archival Record • Indo-Islamic Monograph #10504</span>
                  <span className="font-mono text-[#d59b35]">Wisal: 16 Jumada al-Awwal 1081 AH</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
