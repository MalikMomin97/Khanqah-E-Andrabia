import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArabesquePattern } from './IslamicArt/ArabesquePattern';
import { AllahCrest } from './IslamicArt/AllahCrest';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ShahaPageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

/**
 * ShahaPageBanner
 * Exact replica of Shaha's signature page-header title banner (as on https://shaha.ancorathemes.com/programs/):
 * - Dark textured background with arabesque watermark
 * - Centered golden calligraphic crest
 * - Monumental uppercase serif display title in Cormorant Garamond
 * - Symmetrical filigree diamond divider
 * - Classical breadcrumb trail (Home › Current Page) in ochre gold & warm ivory
 */
export const ShahaPageBanner: React.FC<ShahaPageBannerProps> = ({
  title,
  subtitle,
  breadcrumbs,
  bgImage
}) => {
  return (
    <div className="relative py-20 sm:py-24 px-4 bg-gradient-to-b from-[#100e0b] via-[#161310] to-[#12100d] border-b border-[#d59b35]/25 overflow-hidden text-center">
      {/* Background Image / Overlay */}
      {bgImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-luminosity scale-105"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      
      {/* Arabesque Pattern Watermark */}
      <ArabesquePattern opacity={0.045} className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#14110e]/60 to-[#14110e] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-4xl mx-auto relative z-10 flex flex-col items-center"
      >
        {/* Shaha Golden Allah Crest */}
        <AllahCrest text="الله" size="md" className="mb-2" />

        {/* Monumental Page Caption Title */}
        <h1 className="font-cormorant text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-tight mb-3 break-words">
          {title}
        </h1>

        {/* Symmetrical Ornamental Filigree Divider */}
        <div className="flex items-center justify-center gap-3 w-48 my-2">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d59b35]" />
          <div className="w-2 h-2 rotate-45 border border-[#d59b35] bg-[#14110e]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#d59b35]" />
        </div>

        {/* Subtitle if provided */}
        {subtitle && (
          <p className="font-manrope text-xs sm:text-sm text-[#d4cec7] max-w-xl mx-auto leading-relaxed mt-1 mb-4">
            {subtitle}
          </p>
        )}

        {/* Shaha Classical Breadcrumbs Trail */}
        <nav aria-label="Breadcrumb" className="mt-2 inline-flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 text-xs font-manrope font-semibold tracking-wider uppercase text-[#9e958b]">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;

            return (
              <React.Fragment key={crumb.label}>
                {crumb.href && !isLast ? (
                  <Link
                    to={crumb.href}
                    className="text-[#d59b35] hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={isLast ? 'text-white font-bold' : 'text-[#d59b35]'}>
                    {crumb.label}
                  </span>
                )}
                {!isLast && <span className="text-[#d59b35]/60 text-sm">›</span>}
              </React.Fragment>
            );
          })}
        </nav>
      </motion.div>
    </div>
  );
};
