import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Landmark, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';
import { RubElHizb } from './IslamicArt/RubElHizb';
import { GirihPattern } from './IslamicArt/GirihPattern';
import { ArchFrame } from './IslamicArt/ArchFrame';
import imagesManifest from '../data/imagesManifest.json';

export const Hero: React.FC = () => {
  const plate1 = imagesManifest['khanqah-1'];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-16 px-4 overflow-hidden">
      {/* Background Girih lattice overlay */}
      <GirihPattern opacity={0.06} className="absolute inset-0" />

      {/* Radial Atmospheric Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold-400/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Registry Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-text-gold mb-6 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span className="font-manrope text-xs font-semibold tracking-wider uppercase">
              Indo-Islamic Heritage Archival Entity #10504
            </span>
          </div>

          {/* Sacred Title in Urdu / Arabic */}
          <div className="font-urdu text-3xl sm:text-4xl text-gold-300 dark:text-gold-200 mb-2 leading-relaxed">
            خانقاہِ اندرابیہ سونہ وار سرینگر
          </div>

          {/* Monumental English Heading */}
          <h1 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.08] mb-6">
            Sanctuary of <br />
            <span className="text-gold-gradient">The Andrabi Sayyids</span>
          </h1>

          {/* Scholarly Subtitle */}
          <p className="font-manrope text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed mb-8">
            An authoritative architectural monograph and historical archive of <strong>Khanaqah E Andrabia</strong> in Sonwar Bagh, Srinagar. 
            Rooted in the 14th-century mission of <em>Amir-e-Kabir Mir Sayyid Ali Hamadani (R.A.)</em>, 
            royal patronage under Sultan Sikandar, and the spiritual synthesis of <em>Hazrat Mir Mirak Andrabi (Sanad-ul-Aarifeen)</em>.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl mb-8">
            <div className="glass-panel p-3.5 text-center">
              <span className="block font-cormorant text-xl font-bold text-text-gold">781 AH</span>
              <span className="text-xs text-text-muted">1379 CE Arrival</span>
            </div>
            <div className="glass-panel p-3.5 text-center">
              <span className="block font-cormorant text-xl font-bold text-text-gold">Sonwar</span>
              <span className="text-xs text-text-muted">Srinagar Foothills</span>
            </div>
            <div className="glass-panel p-3.5 text-center">
              <span className="block font-cormorant text-xl font-bold text-text-gold">Deodar</span>
              <span className="text-xs text-text-muted">Vernacular Spire</span>
            </div>
            <div className="glass-panel p-3.5 text-center">
              <span className="block font-cormorant text-xl font-bold text-text-gold">#10504</span>
              <span className="text-xs text-text-muted">Heritage Entity</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#overview"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold-400 text-emerald-950 font-manrope font-bold text-sm tracking-wide shadow-lg hover:bg-gold-300 transition-all hover:gap-3 cursor-pointer"
            >
              <span>Explore Fact Sheet</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#history"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-text-primary hover:text-text-gold font-manrope font-semibold text-sm tracking-wide transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-gold-400" />
              <span>Historical Lineage</span>
            </a>
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-text-primary hover:text-text-gold font-manrope font-semibold text-sm tracking-wide transition-all cursor-pointer"
            >
              <Landmark className="w-4 h-4 text-gold-400" />
              <span>Vernacular Spire</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: High-Res Archival Hero Visual with Kashmiri Arch & Responsive WebP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 relative"
        >
          {/* Decorative Corner Starlets */}
          <div className="absolute -top-4 -left-4 z-20">
            <RubElHizb size={44} className="text-gold-400 drop-shadow-lg" />
          </div>

          <div className="glass-panel-elevated p-2 md:p-3 relative overflow-hidden group">
            {/* Responsive Picture with WebP srcSet */}
            <ArchFrame className="rounded-xl overflow-hidden shadow-2xl">
              <picture>
                <source
                  type="image/webp"
                  srcSet={plate1.srcSet}
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <img
                  src={plate1.originalPath}
                  alt={plate1.title}
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  style={{
                    backgroundImage: `url(${plate1.base64Placeholder})`,
                    backgroundSize: 'cover',
                  }}
                />
              </picture>
            </ArchFrame>

            {/* Floating Image Attribution Card */}
            <div className="p-4 bg-emerald-950/85 backdrop-blur-md rounded-xl mt-3 border border-gold-400/20 text-slate-200">
              <div className="flex items-center justify-between text-xs text-gold-300 font-semibold mb-1">
                <span>PLATE I • WINTER ARCHIVE</span>
                <span className="flex items-center gap-1 font-mono">
                  <Sparkles className="w-3 h-3 text-gold-400" />
                  Zabarwan Ridge
                </span>
              </div>
              <p className="font-manrope text-xs text-slate-300 leading-relaxed">
                Khanaqah E Andrabia sheltered beneath the snow-draped Himalayan slopes in Sonwar Bagh.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
