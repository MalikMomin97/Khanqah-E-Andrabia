import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Eye, BookOpen } from 'lucide-react';
import { ArchOrnamentHeader } from './IslamicArt/ArchFrame';
import { ETIQUETTE_GUIDELINES } from '../data/heritageData';

const etiquetteIcons = [
  <ShieldCheck className="w-5 h-5 text-gold-400" />,
  <HeartHandshake className="w-5 h-5 text-gold-400" />,
  <Eye className="w-5 h-5 text-gold-400" />,
  <BookOpen className="w-5 h-5 text-gold-400" />,
];

export const VisitorEtiquette: React.FC = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <ArchOrnamentHeader
          arabic="آداب الزيارة والبحث العلمي"
          title="Visitor & Research Etiquette"
          subtitle="Essential protocols for researchers, pilgrims, and cultural visitors experiencing the sanctuary."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {ETIQUETTE_GUIDELINES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-gold-400/10 border border-gold-400/25 flex items-center justify-center shrink-0">
                  {etiquetteIcons[idx]}
                </div>
                <h3 className="font-cormorant text-xl font-bold text-text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="font-manrope text-xs sm:text-sm text-text-secondary leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
