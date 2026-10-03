import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ArchOrnamentHeader } from '../IslamicArt/ArchFrame';
import { RubElHizb } from '../IslamicArt/RubElHizb';
import { ArabesquePattern } from '../IslamicArt/ArabesquePattern';
import imagesManifest from '../../data/imagesManifest.json';

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

export const GallerySection: React.FC = () => {
  const rawImages = Object.values(imagesManifest) as ManifestItem[];

  const images = [...rawImages].sort((a, b) => {
    if (a.id === 'astaan-hero') return -1;
    if (b.id === 'astaan-hero') return 1;
    if (a.id === 'khanqah-2') return -1;
    if (b.id === 'khanqah-2') return 1;
    return 0;
  });

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
    <section id="gallery" className="py-24 px-4 relative bg-[#14110e] border-t border-[#d59b35]/20">
      <ArabesquePattern opacity={0.035} className="absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ArchOrnamentHeader
          tag="Architectural & Archival Plates"
          arabic="الله"
          title="Photographic Documentation & Heritage"
          subtitle="Curated photographic study documenting Kashmiri timber joinery, the pagoda lantern spire (Burj), and archival manuscripts."
        />

        {/* Gallery Grid in Shaha Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-3 rounded-xl bg-[#1e1914] border border-[#d59b35]/25 hover:border-[#d59b35]/70 transition-all flex flex-col justify-between group cursor-pointer shadow-xl"
              onClick={() => setActiveIdx(idx)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={img.srcSet}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  />
                  <img
                    src={img.originalPath}
                    alt={img.title}
                    className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </picture>

                {/* Shaha Hover Zoom Overlay */}
                <div className="absolute inset-0 bg-[#14110e]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded bg-[#d59b35] text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-2.5 right-2.5 z-10">
                  <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#14110e]/90 border border-[#d59b35]/30 text-[#d59b35] backdrop-blur-md">
                    Plate 0{idx + 1}
                  </span>
                </div>
              </div>

              <div className="p-3 mt-1">
                <h4 className="font-cormorant text-lg font-bold text-white uppercase tracking-tight group-hover:text-[#d59b35] transition-colors line-clamp-1">
                  {img.title}
                </h4>
                <p className="font-manrope text-xs text-[#d4cec7] leading-relaxed line-clamp-2 mt-1">
                  {img.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {activeIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              onClick={() => setActiveIdx(null)}
            >
              <div
                className="relative max-w-5xl w-full max-h-[92vh] flex flex-col justify-between"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top Bar with Title and Close */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#d59b35]/25 text-slate-100">
                  <div className="flex items-center gap-2">
                    <RubElHizb size={20} className="text-[#d59b35]" />
                    <div>
                      <h4 className="font-cormorant text-xl font-bold uppercase tracking-tight">
                        {images[activeIdx].title}
                      </h4>
                      <span className="text-[11px] font-mono text-[#d59b35]">
                        Plate {activeIdx + 1} of {images.length}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveIdx(null)}
                    className="p-2 rounded bg-[#d59b35]/20 hover:bg-[#d59b35]/30 text-[#f5cf7b] transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Main Image with Navigation Arrows */}
                <div className="relative flex-1 flex items-center justify-center overflow-hidden my-auto py-2">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={images[activeIdx].srcSet}
                      sizes="(max-width: 1024px) 100vw, 1000px"
                    />
                    <img
                      src={images[activeIdx].originalPath}
                      alt={images[activeIdx].title}
                      className="max-h-[68vh] w-auto object-contain rounded-lg border-2 border-[#d59b35]/30 shadow-2xl"
                    />
                  </picture>

                  <button
                    onClick={handlePrev}
                    className="absolute left-2 sm:left-4 p-3 rounded-full bg-[#181512]/90 border border-[#d59b35]/35 text-[#d59b35] hover:bg-[#d59b35] hover:text-white transition-all cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 sm:right-4 p-3 rounded-full bg-[#181512]/90 border border-[#d59b35]/35 text-[#d59b35] hover:bg-[#d59b35] hover:text-white transition-all cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Bottom Caption */}
                <div className="mt-3 pt-3 border-t border-[#d59b35]/20 text-center">
                  <p className="font-manrope text-xs sm:text-sm text-[#d4cec7] max-w-2xl mx-auto">
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
