import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { ArchOrnamentHeader } from './IslamicArt/ArchFrame';
import imagesManifest from '../data/imagesManifest.json';

interface ManifestItem {
  id: string;
  filename: string;
  originalPath: string;
  title: string;
  subtitle: string;
  aspectRatio: string;
  dimensions: { width: number; height: number };
  base64Placeholder: string;
  srcSet: string;
}

export const PhotoArchive: React.FC = () => {
  const images = Object.values(imagesManifest) as ManifestItem[];
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % images.length);
    }
  }, [activeIdx, images.length]);

  const handlePrev = useCallback(() => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + images.length) % images.length);
    }
  }, [activeIdx, images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx === null) return;
      if (e.key === 'Escape') setActiveIdx(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, handleNext, handlePrev]);

  return (
    <section id="archive" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <ArchOrnamentHeader
          arabic="الأرشيف المصور للخانقاه"
          title="Photographic Documentation"
          subtitle="Authentic visual plates capturing Khanaqah E Andrabia across seasons and architectural details."
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onClick={() => setActiveIdx(idx)}
              className="glass-panel overflow-hidden cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-emerald-950">
                <picture>
                  <source type="image/webp" srcSet={img.srcSet} sizes="(max-width: 768px) 100vw, 400px" />
                  <img
                    src={img.originalPath}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${img.base64Placeholder})`,
                      backgroundSize: 'cover',
                    }}
                  />
                </picture>

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-emerald-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-gold-400 text-emerald-950 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-emerald-950/80 backdrop-blur-md border border-gold-400/30 text-[11px] font-mono font-semibold text-gold-300">
                  Plate {idx + 1}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cormorant text-xl font-bold text-text-primary group-hover:text-text-gold transition-colors mb-1.5">
                    {img.title}
                  </h3>
                  <p className="font-manrope text-xs text-text-secondary line-clamp-2 leading-relaxed">
                    {img.subtitle}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gold-400/15 flex items-center justify-between text-xs text-text-muted">
                  <span>Archival Plate #{idx + 1}</span>
                  <span className="text-text-gold font-medium flex items-center gap-1">
                    <Camera className="w-3.5 h-3.5" /> Inspect
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setActiveIdx(null)}
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx(null);
                }}
                className="absolute top-5 right-5 w-11 h-11 rounded-full bg-emerald-950/80 hover:bg-gold-400 hover:text-emerald-950 text-white border border-gold-400/30 flex items-center justify-center transition-all z-50 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-emerald-950/80 hover:bg-gold-400 hover:text-emerald-950 text-white border border-gold-400/30 flex items-center justify-center transition-all z-50 cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-emerald-950/80 hover:bg-gold-400 hover:text-emerald-950 text-white border border-gold-400/30 flex items-center justify-center transition-all z-50 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div
                className="relative max-w-4xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-2xl overflow-hidden border-2 border-gold-400 shadow-2xl max-h-[75vh]">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={images[activeIdx].srcSet}
                      sizes="(max-width: 1024px) 100vw, 900px"
                    />
                    <img
                      src={images[activeIdx].originalPath}
                      alt={images[activeIdx].title}
                      className="max-h-[75vh] w-auto object-contain"
                    />
                  </picture>
                </div>

                <div className="text-center mt-4 max-w-2xl px-4">
                  <div className="text-xs font-mono text-gold-300 uppercase tracking-widest mb-1 flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    <span>Plate {activeIdx + 1} of {images.length}</span>
                  </div>
                  <h3 className="font-cormorant text-2xl font-bold text-white mb-1">
                    {images[activeIdx].title}
                  </h3>
                  <p className="font-manrope text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {images[activeIdx].subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
