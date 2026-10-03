import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Sparkles, FileText } from 'lucide-react';
import { ShahaPageBanner } from '../components/ShahaPageBanner';
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

export const GalleryPage: React.FC = () => {
  const rawImages = Object.values(imagesManifest) as ManifestItem[];

  // Put astaan-hero first if available
  const images = [...rawImages].sort((a, b) => {
    if (a.id === 'astaan-hero') return -1;
    if (b.id === 'astaan-hero') return 1;
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
    <div className="bg-[#14110e] text-[#fcfbf9]">
      {/* Signature Shaha Page Opening Title Banner */}
      <ShahaPageBanner
        title="Architectural Gallery"
        subtitle="Curated photographic study documenting Kashmiri timber joinery, the pagoda lantern spire (Burj), and archival manuscripts."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gallery' }
        ]}
        bgImage={images[0]?.originalPath}
      />

      <div className="py-16 px-4 max-w-7xl mx-auto">
        {/* Archival Digitization Notice Banner */}
        <div className="mb-10 p-5 rounded-xl bg-[#1e1914] border-l-4 border-[#d59b35] border-y border-r border-[#d59b35]/20 text-xs sm:text-sm text-[#d4cec7] flex items-start gap-3 shadow-lg">
          <FileText className="w-5 h-5 text-[#d59b35] shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block font-semibold mb-1 uppercase tracking-wider text-xs">
              Archival Imagery & Manuscript Digitization:
            </strong>
            <span>
              Historical Urdu documents, Persian manuscripts, and archival photographs are curated and displayed in this gallery upon formal verification.
            </span>
          </div>
        </div>

        {/* Gallery Grid in Shaha Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {images.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setActiveIdx(idx)}
              className="p-3 rounded-xl bg-[#1e1914] border border-[#d59b35]/25 hover:border-[#d59b35]/60 transition-all cursor-pointer group flex flex-col justify-between shadow-xl"
            >
              <div className="relative overflow-hidden aspect-[4/3] rounded-lg bg-[#14110e]">
                <picture>
                  <source type="image/webp" srcSet={img.srcSet} sizes="(max-width: 768px) 100vw, 450px" />
                  <img
                    src={img.originalPath}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${img.base64Placeholder})`,
                      backgroundSize: 'cover'
                    }}
                  />
                </picture>

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-[#14110e]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-[#d59b35] text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#14110e]/90 backdrop-blur-md border border-[#d59b35]/30 text-[11px] font-mono font-semibold text-[#f5cf7b]">
                  {img.id === 'astaan-hero' ? 'Main Astaan Plate' : `Plate ${idx + 1}`}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cormorant text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#d59b35] transition-colors mb-1.5">
                    {img.title}
                  </h3>
                  <p className="font-manrope text-xs text-[#d4cec7] leading-relaxed line-clamp-2">
                    {img.subtitle}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#d59b35]/15 flex items-center justify-between text-xs text-[#9e958b]">
                  <span className="font-mono text-[11px]">{img.dimensions.width} &times; {img.dimensions.height} px</span>
                  <span className="text-[#d59b35] font-semibold flex items-center gap-1 uppercase tracking-wider text-[11px]">
                    <Camera className="w-3.5 h-3.5" /> Inspect
                  </span>
                </div>
              </div>
            </div>
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
                className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[#1e1914] hover:bg-[#d59b35] hover:text-white text-[#d59b35] border border-[#d59b35]/40 flex items-center justify-center transition-all z-50 cursor-pointer"
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
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#1e1914] hover:bg-[#d59b35] hover:text-white text-[#d59b35] border border-[#d59b35]/40 flex items-center justify-center transition-all z-50 cursor-pointer"
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
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#1e1914] hover:bg-[#d59b35] hover:text-white text-[#d59b35] border border-[#d59b35]/40 flex items-center justify-center transition-all z-50 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div
                className="relative max-w-5xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-xl overflow-hidden border-2 border-[#d59b35] shadow-2xl max-h-[75vh]">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={images[activeIdx].srcSet}
                      sizes="(max-width: 1200px) 100vw, 1100px"
                    />
                    <img
                      src={images[activeIdx].originalPath}
                      alt={images[activeIdx].title}
                      className="max-h-[75vh] w-auto object-contain"
                    />
                  </picture>
                </div>

                <div className="text-center mt-5 max-w-2xl px-4">
                  <div className="text-xs font-mono text-[#f5cf7b] uppercase tracking-widest mb-1 flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#d59b35]" />
                    <span>Plate {activeIdx + 1} of {images.length}</span>
                  </div>
                  <h3 className="font-cormorant text-2xl font-bold text-white uppercase tracking-tight mb-1">
                    {images[activeIdx].title}
                  </h3>
                  <p className="font-manrope text-xs sm:text-sm text-[#d4cec7] leading-relaxed">
                    {images[activeIdx].subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
