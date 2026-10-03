import React from 'react';
import { Compass, Landmark, Sparkles, Mountain, ScrollText, FileText, CheckCircle2 } from 'lucide-react';
import { ShahaPageBanner } from '../components/ShahaPageBanner';
import { ArchFrame } from '../components/IslamicArt/ArchFrame';
import { ArabesquePattern } from '../components/IslamicArt/ArabesquePattern';
import { AllahCrest } from '../components/IslamicArt/AllahCrest';
import { VERIFIED_DOCUMENT_DATA } from '../data/astaanData';
import imagesManifest from '../data/imagesManifest.json';

export const HistoryPage: React.FC = () => {
  const docImage = imagesManifest['historical-document-shajarah'] || imagesManifest['astaan-hero'];

  const historyEpochs = [
    {
      year: '781 AH / 1379 CE',
      titleEn: 'Arrival with Amir-e-Kabir Mir Sayyid Ali Hamadani (R.A.)',
      descEn:
        'Sayyid Ahmad Andrabi and his son entered the Kashmir Valley from Andarab (Central Asia) accompanying Shah-e-Hamdan during the reign of Sultan Qutub-ud-Din, entrusted with sustaining Islamic scholarship and spiritual direction.',
      icon: <Compass className="w-5 h-5 text-[#d59b35]" />
    },
    {
      year: '1389–1413 CE',
      titleEn: 'Establishment of the First Royal Khanqah-e-Andrabia',
      descEn:
        'Sultan Sikandar issued an imperial decree establishing the first dedicated royal Khanqah and academic madrasa in Srinagar for Sayyid Ahmad Andrabi (d. 1401 CE), becoming a preeminent center for Islamic sciences in the Valley.',
      icon: <Landmark className="w-5 h-5 text-[#549e8d]" />
    },
    {
      year: '1515–1582 CE',
      titleEn: 'Hazrat Shaykh Syed Mir Mirak Andrabi (Sanad-ul-Aarifeen)',
      descEn:
        'The fifth-generation luminary Hazrat Mir Mirak Andrabi rose as one of Kashmir’s foremost spiritual masters. Universally titled "Sanad-ul-Aarifeen" (The Proof of Gnostics), he harmonized outward Shariah with profound inner Tasawwuf.',
      icon: <Sparkles className="w-5 h-5 text-[#d59b35]" />
    },
    {
      year: '1081 AH (1670 CE)',
      titleEn: 'Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.) & Sonwar Astaan',
      descEn:
        'Hazrat Mir Syed Kamal ud din Andrabi (RA), Hafiz of the Quran and scholar of Hadith, relocated from Drugan Dalgate to Sonwar specifically for the propagation of the religion of Prophet Muhammad ﷺ. He spent his life in worship and teaching, passing away on 16th Jumada al-Awwal 1081 AH, and rests in the courtyard of his house in Sonwar.',
      icon: <Mountain className="w-5 h-5 text-[#549e8d]" />
    },
    {
      year: 'Present Day',
      titleEn: 'Living Heritage & Archival Documentation',
      descEn:
        'Today, the sacred Astaan continues its mission of daily congregational prayers, weekly Thursday Khatam assemblies, and annual Urs on 16th Jumada al-Awwal.',
      icon: <ScrollText className="w-5 h-5 text-[#d59b35]" />
    }
  ];

  return (
    <div className="bg-[#14110e] text-[#fcfbf9]">
      {/* Signature Shaha Page Opening Title Banner */}
      <ShahaPageBanner
        title="History & Verified Lineage"
        subtitle="Verifiable historical chronicle compiled from authenticated manuscripts, Persian records, and genealogical trees."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'History' }
        ]}
        bgImage={docImage.originalPath}
      />

      <div className="py-16 px-4 max-w-7xl mx-auto">
        {/* Featured Primary Historical Document & Certified Translation Section */}
        <section className="mb-20">
          <div className="p-5 sm:p-8 lg:p-12 rounded-xl bg-[#1e1914] border border-[#d59b35]/35 shadow-2xl relative overflow-hidden">
            <ArabesquePattern opacity={0.04} />
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#d59b35]/20">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#d59b35]" />
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#d59b35] font-bold">
                      Verified Archival Document
                    </span>
                    <h2 className="font-cormorant text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                      {VERIFIED_DOCUMENT_DATA.titleEn}
                    </h2>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded bg-[#14110e] border border-[#d59b35]/30 text-[#f5cf7b] font-mono text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#549e8d]" />
                  <span>Wisal: {VERIFIED_DOCUMENT_DATA.wisalDateEn}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Document Photograph Display with Arch Frame */}
                <div className="lg:col-span-5">
                  <div className="p-3 rounded-xl bg-[#14110e] border border-[#d59b35]/25 relative group overflow-hidden">
                    <ArchFrame className="rounded-lg overflow-hidden shadow-2xl">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={docImage.srcSet}
                          sizes="(max-width: 768px) 100vw, 500px"
                        />
                        <img
                          src={docImage.originalPath}
                          alt="Primary Historical Document - Hazrat Mir Syed Kamal-ud-Din Andrabi"
                          className="w-full h-auto object-contain max-h-[500px] transition-transform duration-500 group-hover:scale-105"
                        />
                      </picture>
                    </ArchFrame>
                    <div className="p-3 bg-[#1e1914] rounded-lg mt-3 text-center border border-[#d59b35]/20">
                      <span className="font-cormorant text-xs sm:text-sm font-bold text-[#f5cf7b] uppercase tracking-wider">
                        Primary Archival Manuscript & Shajarah Plate
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Bilingual Document Text & Accurate Translation */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Original Urdu Text Card */}
                  <div className="p-4 sm:p-6 rounded-xl bg-[#14110e] border border-[#d59b35]/25">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 pb-3 mb-3 border-b border-[#d59b35]/15">
                      <span className="font-cormorant text-xl font-bold text-white uppercase tracking-wider">
                        Original Archival Manuscript (Urdu)
                      </span>
                      <span className="text-xs font-mono text-[#d59b35]">Monograph #10504</span>
                    </div>
                    <p className="font-urdu text-base sm:text-lg text-slate-100 leading-[2.2] text-justify select-text">
                      {VERIFIED_DOCUMENT_DATA.originalUrduText}
                    </p>
                  </div>

                  {/* Accurate English Translation Card */}
                  <div className="p-4 sm:p-6 rounded-xl bg-[#14110e] border border-[#d59b35]/20">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 pb-3 mb-3 border-b border-[#d59b35]/15">
                      <span className="font-cormorant text-xl font-bold text-white uppercase tracking-wider">
                        Accurate English Translation
                      </span>
                      <span className="text-xs font-mono text-[#9e958b]">Verified Archival English</span>
                    </div>
                    <div className="font-manrope text-xs sm:text-sm text-[#d4cec7] leading-relaxed space-y-3 select-text">
                      {VERIFIED_DOCUMENT_DATA.accurateEnglishTranslation.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 8-Generation Genealogical Tree (Shajarah-e-Nasab) */}
              <div className="mt-12 pt-8 border-t border-[#d59b35]/20">
                <div className="text-center mb-8">
                  <AllahCrest text="الله" size="sm" className="mb-1" />
                  <h3 className="font-cormorant text-2xl font-bold text-white uppercase tracking-tight">
                    Eight-Generation Sacred Lineage (Shajarah)
                  </h3>
                  <p className="font-manrope text-xs text-[#9e958b] mt-1">
                    From Sayyid Ahmad Andrabi (781 AH) to Hazrat Mir Syed Kamal ud din Andrabi (1081 AH)
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {VERIFIED_DOCUMENT_DATA.shajarahChain.map((node) => (
                    <div
                      key={node.num}
                      className="p-5 rounded-xl bg-[#14110e] border border-[#d59b35]/20 text-center hover:border-[#d59b35]/50 transition-all group"
                    >
                      <span className="inline-block w-7 h-7 rounded-full bg-[#1e1914] border border-[#d59b35]/30 font-mono text-xs font-bold text-[#d59b35] mb-2.5 leading-7">
                        {node.num}
                      </span>
                      <div className="font-urdu text-sm text-[#f5cf7b] mb-1 leading-relaxed">
                        {node.nameUr}
                      </div>
                      <div className="font-cormorant text-base font-bold text-white group-hover:text-[#d59b35] transition-colors mb-1">
                        {node.nameEn}
                      </div>
                      <div className="font-manrope text-[11px] text-[#9e958b]">
                        {node.roleEn}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Epochs Chronology */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <AllahCrest text="الله" size="md" className="mb-2" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#d59b35] font-bold">
              Chronological Milestones
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight mt-1">
              Six Centuries of Spiritual Presence in Kashmir
            </h2>
          </div>

          <div className="relative pl-6 sm:pl-10 border-l-2 border-[#d59b35]/30 space-y-10">
            {historyEpochs.map((epoch, idx) => (
              <div
                key={idx}
                className="relative group transition-all duration-300"
              >
                <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#14110e] border-2 border-[#d59b35] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-[#f5cf7b] transition-transform">
                  {epoch.icon}
                </div>

                <div className="p-7 rounded-xl bg-[#1e1914] border border-[#d59b35]/20 ml-2 sm:ml-4 group-hover:border-[#d59b35]/60 transition-all shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="font-cormorant text-2xl font-bold text-[#f5cf7b]">
                      {epoch.year}
                    </span>
                  </div>

                  <h3 className="font-cormorant text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-3">
                    {epoch.titleEn}
                  </h3>

                  <p className="font-manrope text-sm text-[#d4cec7] leading-relaxed">
                    {epoch.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
