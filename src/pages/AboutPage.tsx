import React from 'react';
import { ShieldCheck, BookOpen, Layers, TowerControl, Users, Calendar, Video, ExternalLink } from 'lucide-react';
import { ShahaPageBanner } from '../components/ShahaPageBanner';
import { ArchFrame } from '../components/IslamicArt/ArchFrame';
import { RubElHizb } from '../components/IslamicArt/RubElHizb';
import { ArabesquePattern } from '../components/IslamicArt/ArabesquePattern';
import { AllahCrest } from '../components/IslamicArt/AllahCrest';
import { ARCHITECTURAL_DETAILS } from '../data/heritageData';
import imagesManifest from '../data/imagesManifest.json';

const iconMap: Record<string, React.ReactNode> = {
  TowerControl: <TowerControl className="w-5 h-5 text-[#d59b35]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#549e8d]" />,
  Layers: <Layers className="w-5 h-5 text-[#d59b35]" />,
  Users: <Users className="w-5 h-5 text-[#549e8d]" />
};

export const AboutPage: React.FC = () => {
  const heroImage = imagesManifest['astaan-hero'] || imagesManifest['khanqah-1'];
  const spireImage = imagesManifest['khanqah-2'];

  return (
    <div className="bg-[#14110e] text-[#fcfbf9]">
      {/* Signature Shaha Page Opening Title Banner */}
      <ShahaPageBanner
        title="About Astaan & Heritage"
        subtitle="A sacred institutional sanctuary of Sufi contemplation, community prayer, and Kashmiri vernacular architecture."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Astaan' }
        ]}
        bgImage={heroImage.originalPath}
      />

      <div className="py-16 px-4 max-w-7xl mx-auto">
        {/* Main Profile & Image Layout in Shaha Split Format */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6 mb-20">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-5 sm:p-8 lg:p-10 rounded-xl bg-[#1e1914] border border-[#d59b35]/30 shadow-2xl relative overflow-hidden">
              <ArabesquePattern opacity={0.04} />
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#d59b35]/20">
                  <div className="flex items-center gap-2 text-[#d59b35]">
                    <BookOpen className="w-5 h-5 text-[#d59b35]" />
                    <span className="font-mono text-xs uppercase tracking-widest font-bold">
                      Sacred Biography & Lineage
                    </span>
                  </div>
                  <div className="px-3 py-1 rounded bg-[#14110e] border border-[#d59b35]/30 text-[#f5cf7b] font-mono text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-[#d59b35]" />
                    <span>Urs Mubarak: 16 Jumada al-Awwal, 1081 AH</span>
                  </div>
                </div>

                <h2 className="font-cormorant text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-6">
                  Hazrat Mir Syed Kamal ud din Andrabi (RA)
                </h2>

                {/* Exact Verified Archival Biography */}
                <div className="space-y-4 font-manrope text-sm text-[#d4cec7] leading-relaxed select-text">
                  <p>
                    <strong className="text-white font-semibold">Hazrat Mir Syed Kamal ud din Andrabi (RA)</strong> belonged to the Sadat Andrabiya (Syed Andrabi family). His respected father, Hazrat Mir Syed Muhammad Ibrahim Andrabi (RA), was a great and distinguished saint. He was a Hafiz of the Quran and a scholar of religion, and he spent his nights in worship. He passed away in 1076 AH and is buried in Malaratha, Srinagar.
                  </p>
                  <p>
                    He had two sons, Mir Tahir Andrabi (RA) and Mir Syed Kamal ud din Andrabi (RA). Both were distinguished saints, Hafiz of the Quran and knowledgeable in the Hadith sciences. Kamaluddin received all the stations of the spiritual path (suluk) and the divine secrets from his father.
                  </p>
                  <p>
                    After performing the pilgrimage to the House of Allah (Hajj), he married the virtuous daughter of his father's paternal uncle, Hazrat Mir Syed Muhammad Yusuf Andrabi (RA), who is buried in Drugan Dalgate, Srinagar. He lived in Drugan Dalgate for a long time, but later moved to Sonwar, Srinagar, to preach the religion of Muhammad (ﷺ). He settled in Sonwar for the rest of his life, devoted to preaching and worship.
                  </p>
                  <p>
                    He lived three years after the death of his righteous, pious and devout wife. He passed away on 16 Jumada al-Awwal, 1081 AH. Allah Almighty apparently did not grant him any children. He now rests in eternal sleep in the courtyard of his house in Sonwar Srinagar.
                  </p>
                </div>

                {/* Urs Mubarak Highlight Banner */}
                <div className="mt-8 p-4 sm:p-5 rounded-lg bg-[#14110e] border border-[#d59b35]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-start sm:items-center gap-3">
                    <RubElHizb size={28} className="text-[#d59b35] shrink-0 mt-0.5 sm:mt-0" />
                    <div>
                      <div className="font-cormorant text-lg font-bold text-white uppercase tracking-wider">
                        Annual Urs Mubarak Commemoration
                      </div>
                      <div className="font-mono text-xs text-[#f5cf7b]">
                        16 Jumada al-Awwal, 1081 AH • Observed annually with Quran Khawani & Langar
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Astaan Sanctuary Photo */}
          <div className="lg:col-span-5">
            <div className="p-3 rounded-xl bg-[#1e1914] border border-[#d59b35]/30 shadow-2xl relative group">
              <ArchFrame className="rounded-lg overflow-hidden shadow-2xl">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={heroImage.srcSet}
                    sizes="(max-width: 768px) 100vw, 550px"
                  />
                  <img
                    src={heroImage.originalPath}
                    alt="Original Photo of Astaan Hazrat Mir Syed Kamal-ud-Din Andrabi Sonwar"
                    className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </picture>
              </ArchFrame>
              <div className="mt-3 px-2 py-1 text-center font-mono text-xs text-[#9e958b]">
                Astaan Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.) • Sonwar Bagh
              </div>
            </div>
          </div>
        </div>

        {/* 4 Architectural Hallmarks of the Sanctuary */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <AllahCrest text="الله" size="md" className="mb-2" />
            <h3 className="font-cormorant text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Architectural & Structural Hallmarks
            </h3>
            <p className="font-manrope text-xs sm:text-sm text-[#9e958b] max-w-xl mx-auto mt-2">
              Kashmiri vernacular wooden construction characterized by interlocking cedar logs and tiered roofs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARCHITECTURAL_DETAILS.map((detail, idx) => (
              <div
                key={detail.title}
                className="p-7 rounded-xl bg-[#1e1914] border border-[#d59b35]/20 hover:border-[#d59b35]/60 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-[#14110e] border border-[#d59b35]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {iconMap[detail.iconName] || <TowerControl className="w-5 h-5 text-[#d59b35]" />}
                    </div>
                    <span className="font-mono text-xs font-bold text-[#f5cf7b] px-2 py-0.5 rounded bg-[#14110e] border border-[#d59b35]/20">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-cormorant text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-[#d59b35] transition-colors">
                    {detail.title}
                  </h4>

                  <p className="font-manrope text-xs text-[#d4cec7] leading-relaxed mb-4">
                    {detail.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#d59b35]/15 flex items-center justify-between text-xs text-[#d59b35] font-semibold uppercase tracking-wider">
                  <span>Vernacular Architecture</span>
                  <RubElHizb size={13} className="text-[#d59b35]/50" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Image Showcase */}
        {spireImage && (
          <div className="mt-20 p-8 sm:p-12 rounded-xl bg-[#1e1914] border border-[#d59b35]/30 shadow-2xl relative overflow-hidden">
            <ArabesquePattern opacity={0.03} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-5">
                <div className="rounded-lg overflow-hidden border border-[#d59b35]/30 shadow-xl">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={spireImage.srcSet}
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                    <img
                      src={spireImage.originalPath}
                      alt={spireImage.title}
                      className="w-full h-80 object-cover"
                      loading="eager"
                    />
                  </picture>
                </div>
              </div>
              <div className="lg:col-span-7">
                <h4 className="font-cormorant text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3">
                  The Historic Pagoda Spire (Burj)
                </h4>
                <p className="font-manrope text-xs sm:text-sm text-[#d4cec7] leading-relaxed mb-4">
                  The soaring lantern spire crowning Khanqah-e-Andrabia reflects the unique Indo-Islamic architectural harmony of the Kashmir Valley, uniting classical Central Asian motifs with Kashmiri cedar woodwork.
                </p>
                <div className="p-4 rounded-lg bg-[#14110e] border border-[#d59b35]/20 font-mono text-xs text-[#f5cf7b]">
                  Entity Record #10504 • Sonwar Bagh, Srinagar 190004
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Documentation Archive */}
        <div className="mt-20 p-5 sm:p-10 lg:p-12 rounded-xl bg-[#1e1914] border border-[#d59b35]/30 shadow-2xl relative overflow-hidden">
          <ArabesquePattern opacity={0.04} />
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <AllahCrest text="الله" size="md" className="mb-2" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14110e] border border-[#d59b35]/30 text-xs font-mono text-[#d59b35] font-semibold mb-3">
                <Video className="w-3.5 h-3.5" />
                <span>Visual Heritage & Documentary</span>
              </div>
              <h3 className="font-cormorant text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight">
                Astaan Khanqah-e-Andrabia Video Archive
              </h3>
              <p className="font-manrope text-xs sm:text-sm text-[#d4cec7] mt-2 leading-relaxed">
                Visual pilgrimage and archival documentation of Astaan Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.) at Sonwar Bagh, Srinagar.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-[#d59b35]/35 shadow-2xl bg-[#14110e]">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/BZ20iGCuI9s"
                  title="Astaan Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.) - Sonwar Bagh, Srinagar"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="lazy"
                  className="w-full h-full border-0"
                />
              </div>

              <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-[#14110e] border border-[#d59b35]/20">
                <div className="text-center sm:text-left">
                  <div className="font-cormorant text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                    Khanqah-e-Andrabia Sonwar Documentary
                  </div>
                  <div className="font-mono text-xs text-[#9e958b]">
                    Original Video Presentation & Documentary Record
                  </div>
                </div>
                <a
                  href="https://youtu.be/BZ20iGCuI9s?si=w59AGCSDgdg8VnuW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shaha-gold inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold py-2.5 px-5 shrink-0"
                >
                  <Video className="w-4 h-4" />
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
