import React from 'react';
import { motion } from 'motion/react';
import { Compass, Crown, Sparkles, Quote } from 'lucide-react';
import { ArchOrnamentHeader } from './IslamicArt/ArchFrame';
import { RubElHizb } from './IslamicArt/RubElHizb';

export const HistorySection: React.FC = () => {
  return (
    <section id="history" className="py-20 px-4 relative bg-emerald-950/20">
      <div className="max-w-7xl mx-auto">
        <ArchOrnamentHeader
          arabic="أصول السادات الأندرابية في كشمير"
          title="Historical Origins & Spiritual Lineage"
          subtitle="From the Central Asian valley of Andarab to royal patronage in the Kashmir Valley."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1: Central Asian Departure & Amir-e-Kabir */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 relative flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-text-gold mb-6 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6 text-gold-400" />
              </div>
              <div className="font-urdu text-xl text-gold-300 mb-2">وادي أندراب وبداية الهجرة</div>
              <h3 className="font-cormorant text-2xl font-bold text-text-primary mb-3">
                Origins in Andarab (781 AH / 1379 CE)
              </h3>
              <p className="font-manrope text-sm text-text-secondary leading-relaxed mb-4">
                The Andrabi Sayyids trace their nisba to the historic valley of <strong>Andarab</strong> in the Hindu Kush mountains of Central Asia. 
                In 781 AH (1379 CE), during the reign of Sultan Qutub-ud-Din, <strong>Sayyid Ahmad Andrabi</strong> and his son 
                <strong>Sayyid Muhammad Andrabi</strong> entered the Kashmir Valley in the blessed caravan of 
                <strong> Amir-e-Kabir Mir Sayyid Ali Hamadani (Shah-e-Hamdan)</strong>.
              </p>
              <p className="font-manrope text-sm text-text-secondary leading-relaxed">
                When Shah-e-Hamdan departed Kashmir, he entrusted Sayyid Ahmad Andrabi with the continued spiritual education, 
                moral elevation, and doctrinal grounding of the nascent Kashmiri Muslim community.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gold-400/15 flex items-center justify-between text-xs text-text-gold font-semibold">
              <span>Caravan of Shah-e-Hamdan</span>
              <RubElHizb size={18} />
            </div>
          </motion.div>

          {/* Card 2: Sultan Sikandar Royal Decree */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-panel p-8 relative flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-text-gold mb-6 group-hover:scale-110 transition-transform">
                <Crown className="w-6 h-6 text-gold-400" />
              </div>
              <div className="font-urdu text-xl text-gold-300 mb-2">مرسوم السلطان إسكندر</div>
              <h3 className="font-cormorant text-2xl font-bold text-text-primary mb-3">
                Royal Foundation (1389–1413 CE)
              </h3>
              <p className="font-manrope text-sm text-text-secondary leading-relaxed mb-4">
                Recognizing Sayyid Ahmad Andrabi's immense scholarly erudition and spiritual stature, 
                <strong>Sultan Sikandar</strong> issued an imperial royal decree establishing the first dedicated 
                <strong>Khanqah-e-Andrabia</strong> alongside an academic madrasa in Srinagar.
              </p>
              <p className="font-manrope text-sm text-text-secondary leading-relaxed">
                The hospice served as a key institutional hub where students studied the traditional Islamic sciences 
                (Tafsir, Hadith, Fiqh) while disciples received initiation into the Kubrawi and Suhrawardi contemplative paths.
                Sayyid Ahmad passed away in Srinagar in 1401 CE, leaving an enduring institutional lineage.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gold-400/15 flex items-center justify-between text-xs text-text-gold font-semibold">
              <span>Sultanate Archival Foundation</span>
              <RubElHizb size={18} />
            </div>
          </motion.div>

          {/* Card 3: Hazrat Mir Mirak (Sanad-ul-Aarifeen) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel p-8 relative flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-text-gold mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-gold-400" />
              </div>
              <div className="font-urdu text-xl text-gold-300 mb-2">سند العارفين الشيخ مير ميرك</div>
              <h3 className="font-cormorant text-2xl font-bold text-text-primary mb-3">
                Sanad-ul-Aarifeen (1515–1582 CE)
              </h3>
              <p className="font-manrope text-sm text-text-secondary leading-relaxed mb-4">
                In the 16th century, the fifth-generation descendant <strong>Hazrat Shaykh Syed Mir Mirak Andrabi</strong> (1515–1582 CE) 
                rose to preeminence as one of Kashmir's most celebrated Sufi luminaries, earning the universal honorific 
                <em>"Sanad-ul-Aarifeen"</em> (The Authority / Proof of the Gnostics).
              </p>
              <p className="font-manrope text-sm text-text-secondary leading-relaxed">
                Hazrat Mir Mirak synthesized outward obedience to the Shariah with deep esoteric realization (Haqiqah). 
                His spiritual mastership cemented the moral prestige and institutional autonomy of the Andrabi khanaqahs across Kashmir.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gold-400/15 flex items-center justify-between text-xs text-text-gold font-semibold">
              <span>Golden Epoch of Kashmiri Tasawwuf</span>
              <RubElHizb size={18} />
            </div>
          </motion.div>
        </div>

        {/* Archival Callout Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass-panel-elevated p-8 sm:p-10 relative overflow-hidden"
        >
          <Quote className="w-16 h-16 text-gold-400/15 absolute top-4 right-6 pointer-events-none" />
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-text-gold font-bold">
              Historiographical Synthesis
            </span>
            <blockquote className="font-cormorant text-xl sm:text-2xl font-semibold text-text-primary mt-2 leading-relaxed italic">
              "The Andrabi Sayyids formed one of the primary pillars through which Persian scholarship, 
              Central Asian spiritual traditions, and compassionate public charity became permanently woven into the social fabric of Srinagar."
            </blockquote>
            <p className="font-manrope text-xs text-text-muted mt-3">
              — Documented in Classical Kashmiri Persian Tadhkirahs & Indo-Islamic Heritage Archive #10504
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
