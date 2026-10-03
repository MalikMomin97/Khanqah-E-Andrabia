import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import imagesManifest from '../data/imagesManifest.json';

export interface HeroSlide {
  id: string;
  image: string;
  calligraphy?: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  badge?: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: 'slide-astaan-hero',
    image: imagesManifest['astaan-hero']?.originalPath || '/images/astaan-hero.jpg',
    calligraphy: 'الله',
    title: 'Khanqah-e-Andrabia',
    subtitle: 'Astaan Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.) • Sonwar Bagh, Srinagar',
    buttonText: 'Explore Sanctuary',
    buttonLink: '/about',
    badge: 'Sacred Sanctuary'
  },
  {
    id: 'slide-khanqah-1',
    image: imagesManifest['khanqah-1']?.originalPath || '/images/khanqah-1.jpg',
    calligraphy: 'الله',
    title: 'Sacred Majalis & Weekly Khatmat',
    subtitle: 'Every Thursday Khatam-e-Sharief & Friday Congregational Gathering',
    buttonText: 'View Weekly Programs',
    buttonLink: '/activities',
    badge: 'Weekly Liturgies'
  },
  {
    id: 'slide-khanqah-2',
    image: imagesManifest['khanqah-2']?.originalPath || '/images/khanqah-2.jpg',
    calligraphy: 'الله',
    title: 'Kashmiri Vernacular Heritage',
    subtitle: 'Traditional Pagoda Lantern Spire (Burj) & Deodar Timber Joinery',
    buttonText: 'Architectural Gallery',
    buttonLink: '/gallery',
    badge: 'Historic Architecture'
  },
  {
    id: 'slide-khanqah-3',
    image: imagesManifest['khanqah-3']?.originalPath || '/images/khanqah-3.jpg',
    calligraphy: 'الله',
    title: 'Sanctuary Prayer & Contemplation',
    subtitle: 'Five Daily Farz Congregations & Recitation of Aurad-e-Fathiya',
    buttonText: 'Prayer & Activity Timings',
    buttonLink: '/activities',
    badge: 'Daily Cadence'
  },
  {
    id: 'slide-shajarah',
    image: imagesManifest['historical-document-shajarah']?.originalPath || '/images/historical-document-shajarah.jpg',
    calligraphy: 'الله',
    title: 'Verified Historical Lineage',
    subtitle: 'Eight-Generation Sacred Shajarah • Indo-Islamic Archival Monograph #10504',
    buttonText: 'Archival Chronicle',
    buttonLink: '/history',
    badge: 'Archival Record'
  }
];

export const ShahaHeroSlider: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(nextSlide, 6500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const slide = SLIDES[currentIdx];

  return (
    <div
      className="relative w-full h-[100svh] min-h-[560px] sm:min-h-[620px] max-h-[960px] overflow-hidden bg-[#14110e] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel with crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slide.image})`
          }}
        >
          {/* Shaha Dark Vignette Overlays for perfect legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#14110e]/85 via-[#14110e]/45 to-[#14110e]/95" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#14110e]/50 to-[#14110e]/90 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Golden Arched Mandala at top center */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] xs:w-[480px] sm:w-[700px] md:w-[850px] lg:w-[940px] h-[130px] sm:h-[200px] md:h-[260px] pointer-events-none z-10 opacity-70 mix-blend-screen bg-contain bg-no-repeat bg-top"
        style={{ backgroundImage: 'url(/images/shaha_mandala.webp)' }}
      />

      {/* Centered Slide Content Container */}
      <div className="relative z-20 h-full max-w-4xl mx-auto px-4 sm:px-8 flex flex-col justify-center items-center text-center pt-24 sm:pt-32 md:pt-36 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
            className="flex flex-col items-center max-w-3xl w-full"
          >
            {/* Small Golden Arabic Calligraphy: الله */}
            {slide.calligraphy && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-amiri text-2xl sm:text-3xl text-[#d59b35] mb-2 sm:mb-3 font-semibold select-none drop-shadow"
              >
                {slide.calligraphy}
              </motion.div>
            )}

            {/* Monumental Cinzel Decorative Display Headline */}
            <h1 className="font-cinzel text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white uppercase leading-[1.2] drop-shadow-2xl mb-3 sm:mb-5 max-w-2xl sm:max-w-3xl">
              {slide.title}
            </h1>

            {/* Subtitle Details */}
            <p className="font-cormorant text-xs xs:text-sm sm:text-lg md:text-xl text-[#f5cf7b] font-medium max-w-xl sm:max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 drop-shadow">
              {slide.subtitle}
            </p>

            {/* Shaha Signature CTA Button with slide_left hover effect */}
            <Link
              to={slide.buttonLink}
              className="btn-shaha-gold text-xs sm:text-sm md:text-base px-5 sm:px-8 py-2.5 sm:py-3.5 shadow-2xl tracking-wider uppercase font-semibold"
            >
              <span>{slide.buttonText}</span>
              <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows: Left & Right (Visible on screens >= 1200px to ensure zero text overlap) */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden xl:flex absolute left-6 2xl:left-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#14110e]/60 hover:bg-[#d59b35] text-[#d59b35] hover:text-white border border-[#d59b35]/40 items-center justify-center transition-all duration-300 backdrop-blur-md cursor-pointer hover:scale-110 shadow-xl"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden xl:flex absolute right-6 2xl:right-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#14110e]/60 hover:bg-[#d59b35] text-[#d59b35] hover:text-white border border-[#d59b35]/40 items-center justify-center transition-all duration-300 backdrop-blur-md cursor-pointer hover:scale-110 shadow-xl"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentIdx(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIdx === idx
                ? 'w-7 sm:w-8 h-2 bg-[#d59b35] shadow-lg'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
