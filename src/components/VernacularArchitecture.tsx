import React from 'react';
import { motion } from 'motion/react';
import { TowerControl, ShieldCheck, Layers, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { ArchOrnamentHeader, ArchFrame } from './IslamicArt/ArchFrame';
import { ARCHITECTURAL_DETAILS } from '../data/heritageData';
import imagesManifest from '../data/imagesManifest.json';

const iconMap: Record<string, React.ReactNode> = {
  TowerControl: <TowerControl className="w-6 h-6 text-gold-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-gold-400" />,
  Layers: <Layers className="w-6 h-6 text-gold-400" />,
  Users: <Users className="w-6 h-6 text-gold-400" />,
};

export const VernacularArchitecture: React.FC = () => {
  const plate2 = imagesManifest['khanqah-2'];

  return (
    <section id="architecture" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <ArchOrnamentHeader
          arabic="العمارة الخشبية التقليدية في كشمير"
          title="Kashmiri Vernacular Architecture"
          subtitle="Centuries-old deodar timber craftsmanship, seismic flexibility, and acoustic pagoda geometry."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-12">
          {/* Left Column: Visual Architectural Plate 2 (The Burj Spire & Finial) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel-elevated p-3 relative group">
              <ArchFrame className="rounded-xl overflow-hidden shadow-2xl">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={plate2.srcSet}
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <img
                    src={plate2.originalPath}
                    alt={plate2.title}
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    style={{
                      backgroundImage: `url(${plate2.base64Placeholder})`,
                      backgroundSize: 'cover',
                    }}
                  />
                </picture>
              </ArchFrame>

              <div className="p-4 bg-emerald-950/85 backdrop-blur-md rounded-xl mt-3 border border-gold-400/20 text-slate-200">
                <div className="flex items-center justify-between text-xs text-gold-300 font-semibold mb-1">
                  <span>PLATE II • ARCHITECTURAL STUDY</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Sparkles className="w-3 h-3 text-gold-400" />
                    Burj & Alam
                  </span>
                </div>
                <h4 className="font-cormorant text-lg font-bold text-slate-100">
                  The Wooden Pagoda Spire & Golden Crescent
                </h4>
                <p className="font-manrope text-xs text-slate-300 leading-relaxed mt-1">
                  Tiered eaves crafted from aged Himalayan cedar (Deodar), crowned with the gilded Islamic crescent (Alam), 
                  embodying Kashmir’s synthesis of Central Asian and indigenous woodwork.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Specifications Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ARCHITECTURAL_DETAILS.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 flex flex-col justify-between hover:border-gold-400/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center">
                      {iconMap[feature.iconName]}
                    </div>
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-gold-400/10 text-text-gold font-semibold">
                      {feature.kashmiriTerm}
                    </span>
                  </div>

                  {feature.arabicTerm && (
                    <div className="font-amiri text-xs text-gold-400 mb-1">
                      {feature.arabicTerm}
                    </div>
                  )}

                  <h3 className="font-cormorant text-xl font-bold text-text-primary mb-2">
                    {feature.title}
                  </h3>

                  <p className="font-manrope text-xs text-text-secondary leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gold-400/15 text-[11px] space-y-1.5 text-text-muted">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span><strong className="text-text-primary">Material:</strong> {feature.material}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span><strong className="text-text-primary">Significance:</strong> {feature.significance}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
