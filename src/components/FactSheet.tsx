import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Copy, Check, ExternalLink, Bookmark, Info } from 'lucide-react';
import { ArchOrnamentHeader } from './IslamicArt/ArchFrame';
import { ENTITY_FACTS } from '../data/heritageData';

export const FactSheet: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleCopyCoords = () => {
    navigator.clipboard.writeText('34.0736° N, 74.8427° E').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const filteredFacts = activeCategory === 'all'
    ? ENTITY_FACTS
    : ENTITY_FACTS.filter(f => f.category === activeCategory);

  return (
    <section id="overview" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <ArchOrnamentHeader
          arabic="سجل التراث الهندي الإسلامي"
          title="Archival Record & Fact Sheet"
          subtitle="Official institutional documentation cataloged under Indo-Islamic Heritage Entity #10504."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
          {/* Left Column: Narrative Background & Institutional Role */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glass-panel p-6 sm:p-8">
              <div className="flex items-center gap-2 text-text-gold mb-4">
                <Bookmark className="w-5 h-5 text-gold-400" />
                <h3 className="font-cormorant text-2xl font-bold text-text-primary">
                  The Living Khanaqah Tradition
                </h3>
              </div>

              <p className="font-manrope text-sm text-text-secondary leading-relaxed mb-4">
                In Kashmiri historiography, the <strong>Khanaqah</strong> has historically functioned as far more than a sanctuary of ritual worship. 
                Introduced following the 14th-century arrival of Central Asian missionary-saints led by <em>Amir-e-Kabir Mir Sayyid Ali Hamadani</em>, 
                khanaqahs served as autonomous institutions of spiritual purification (<em>Tazkiyah</em>), ethical instruction, 
                unconditional hospitality (<em>Langar</em>), and community reconciliation.
              </p>

              <p className="font-manrope text-sm text-text-secondary leading-relaxed mb-6">
                <strong>Khanaqah E Andrabia in Sonwar Bagh</strong> preserves this uninterrupted legacy. Devotees and scholars 
                gather here for congregational recitations of the <em>Aurad-e-Fathiya</em> at dawn, traditional <em>Khatam-e-Sharief</em> zikr assemblies, 
                and annual Urs commemorations honoring the early Andrabi Sayyid saints.
              </p>

              {/* Callout Box */}
              <div className="p-4 rounded-xl bg-gold-400/10 border-l-4 border-gold-400 text-text-secondary">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <p className="font-manrope text-xs leading-relaxed italic">
                    "The strategic presence of Khanaqah E Andrabia in Sonwar Bagh provides an oasis of quiet contemplation 
                    between the historic old city of Srinagar and the tranquil waters of Dal Lake."
                  </p>
                </div>
              </div>

              {/* Verified Entity Links */}
              <div className="mt-6 pt-6 border-t border-gold-400/20 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://indoislamicheritage.com/historical_entities/details/10504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-text-gold hover:text-gold-300 transition-colors"
                >
                  <span>Official Indo-Islamic Heritage Registry</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="https://maps.app.goo.gl/S7vvmonAPykNBYRDA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800/80 border border-gold-400/30 text-xs font-semibold text-gold-300 transition-all cursor-pointer"
                  >
                    <span>Astaan on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={handleCopyCoords}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-400/15 hover:bg-gold-400/25 border border-gold-400/30 text-xs font-semibold text-text-gold transition-all cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : '34.0736° N, 74.8427° E'}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Entity Fact Sheet Data Table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-gold-400/20">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-gold-400" />
                  <span className="font-cormorant text-xl font-bold text-text-primary">
                    Archival Record Specifications
                  </span>
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
                  {[
                    { id: 'all', label: 'All Fields' },
                    { id: 'registry', label: 'Registry' },
                    { id: 'geography', label: 'Geography' },
                    { id: 'architecture', label: 'Architecture' },
                    { id: 'tradition', label: 'Liturgy' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        activeCategory === cat.id
                          ? 'bg-gold-400 text-emerald-950 font-bold shadow-md'
                          : 'bg-gold-400/10 hover:bg-gold-400/20 text-text-secondary border border-gold-400/20'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left font-manrope text-sm">
                  <tbody className="divide-y divide-gold-400/15">
                    {filteredFacts.map((fact, index) => (
                      <tr key={index} className="hover:bg-gold-400/5 transition-colors">
                        <td className="py-3.5 pr-4 font-semibold text-text-primary w-1/3 align-top">
                          {fact.label}
                        </td>
                        <td className="py-3.5 pl-4 text-text-secondary align-top">
                          <span className="text-text-gold font-medium">{fact.value}</span>
                          {fact.detail && (
                            <span className="block text-xs text-text-muted mt-0.5">
                              {fact.detail}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
