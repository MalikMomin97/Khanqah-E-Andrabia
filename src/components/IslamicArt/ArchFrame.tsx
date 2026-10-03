import React from 'react';
import { RubElHizb } from './RubElHizb';
import { AllahCrest } from './AllahCrest';

interface ArchFrameProps {
  children?: React.ReactNode;
  className?: string;
  borderColor?: string;
}

/**
 * KashmiriArchFrame
 * Encapsulates photographic plates in an authentic Kashmiri pointed-arch silhouette
 * with double antique gold hairlines and smooth shadows.
 */
export const ArchFrame: React.FC<ArchFrameProps> = ({
  children,
  className = '',
  borderColor = 'rgba(213, 155, 53, 0.45)'
}) => {
  return (
    <div className={`relative group ${className}`}>
      <div 
        className="relative overflow-hidden rounded-t-[3.5rem] sm:rounded-t-[5rem] rounded-b-2xl border-2 transition-all duration-500 shadow-2xl"
        style={{ borderColor }}
      >
        <div className="absolute inset-1 rounded-t-[3.25rem] sm:rounded-t-[4.75rem] rounded-b-xl border border-[#d59b35]/25 pointer-events-none z-10" />
        {children}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="w-3 h-3 rotate-45 border border-[#d59b35] bg-[#181512]/90 shadow-[0_0_10px_rgba(213,155,53,0.6)]" />
        </div>
      </div>
    </div>
  );
};

interface ArchOrnamentHeaderProps {
  title: string;
  subtitle?: string;
  arabic?: string;
  tag?: string;
  align?: 'center' | 'left';
  showAllahCrest?: boolean;
}

/**
 * ArchOrnamentHeader / ShahaSectionHeader
 * Implements the signature Shaha Islamic theme header:
 * - Golden 'الله' calligraphic crest
 * - Grand uppercase serif title with classical dignity
 * - Explanatory subtitle
 */
export const ArchOrnamentHeader: React.FC<ArchOrnamentHeaderProps> = ({
  title,
  subtitle,
  arabic,
  tag,
  align = 'center',
  showAllahCrest = true
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} mb-14`}>
      {/* Signature Shaha Calligraphic Mark 'الله' */}
      {showAllahCrest && (
        <AllahCrest text={arabic || 'الله'} size="md" className="mb-2" />
      )}

      {/* Tag / Category Badge */}
      {tag && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d59b35]/10 border border-[#d59b35]/25 text-[#d59b35] text-xs font-mono font-semibold tracking-widest uppercase mb-3 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d59b35]" />
          <span>{tag}</span>
        </div>
      )}

      {/* Shaha Monumental Uppercase Serif Title */}
      <h2 className="font-cormorant text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary uppercase leading-tight mt-1 break-words">
        {title}
      </h2>

      {/* Symmetrical Ornamental Filigree Divider */}
      <div className={`flex items-center gap-3 w-full max-w-xs my-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d59b35]/50 to-[#d59b35]" />
        <div className="w-2 h-2 rotate-45 border border-[#d59b35] bg-[#181512]" />
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#d59b35]/50 to-[#d59b35]" />
      </div>

      {/* Subtitle with High Legibility */}
      {subtitle && (
        <p className="font-manrope text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export const IslamicDivider: React.FC<{ className?: string }> = ({ className = 'my-16' }) => {
  return (
    <div className={`flex items-center justify-center gap-4 max-w-xl mx-auto px-4 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d59b35]/30 to-[#d59b35]/70" />
      <RubElHizb size={16} className="text-[#d59b35]/80" />
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#d59b35]/30 to-[#d59b35]/70" />
    </div>
  );
};
