import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { RubElHizb } from './IslamicArt/RubElHizb';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Handle scroll state for sticky header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Programs', path: '/activities' },
    { label: 'Events', path: '/events' },
    { label: 'History', path: '/history' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' }
  ];

  const isHome = location.pathname === '/' || location.pathname === '';

  return (
    <header
      className={`w-full z-50 transition-all duration-500 ${
        isHome
          ? scrolled
            ? 'fixed top-0 bg-[#14110e]/95 backdrop-blur-xl border-b border-[#d59b35]/25 shadow-2xl'
            : 'absolute top-0 bg-gradient-to-b from-[#14110e]/90 via-[#14110e]/40 to-transparent'
          : 'sticky top-0 bg-[#14110e]/95 backdrop-blur-xl border-b border-[#d59b35]/25 shadow-2xl'
      }`}
    >
      <div className="relative py-3 sm:py-4 px-3 sm:px-6">
        {/* Mobile/Tablet Bar (< 1024px) - Compact & Zero Overflow on 320px+ */}
        <div className="flex items-center justify-between w-full lg:hidden max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 min-w-0 mr-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d59b35]/25 via-[#1e1914] to-[#14110e] border border-[#d59b35]/50 flex items-center justify-center shrink-0">
              <RubElHizb size={18} className="text-[#d59b35]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-cinzel text-xs sm:text-base font-bold tracking-wider text-white uppercase truncate">
                Khanqah-e-Andrabia
              </span>
              <span className="font-manrope text-[8px] sm:text-[9px] text-[#d59b35] tracking-widest uppercase truncate">
                Sonwar Bagh, Srinagar
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={onToggleTheme}
              className="p-1.5 rounded-full bg-[#181512]/80 border border-[#d59b35]/25 text-[#d59b35] transition-all cursor-pointer"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#f5cf7b]" /> : <Moon className="w-4 h-4 text-[#d59b35]" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-[#d59b35]/35 text-[#d59b35] hover:bg-[#d59b35]/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Centered Brand Logo (>= 1024px) */}
        <div className="hidden lg:flex items-center justify-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="font-cinzel text-2xl xl:text-3xl font-bold tracking-widest text-white uppercase drop-shadow-md">
              Khanqah
            </span>

            <div className="relative flex items-center justify-center w-11 xl:w-12 h-11 xl:h-12 rounded-full bg-gradient-to-br from-[#d59b35]/25 via-[#1e1914] to-[#14110e] border border-[#d59b35]/50 shadow-xl group-hover:border-[#f5cf7b] transition-colors">
              <RubElHizb size={24} className="text-[#d59b35] transition-transform duration-500 group-hover:rotate-45" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-cinzel text-xs xl:text-sm font-bold text-[#d59b35] tracking-widest uppercase">
                Andrabia
              </span>
              <span className="font-manrope text-[9px] xl:text-[10px] text-slate-300 tracking-wider uppercase font-medium">
                Sonwar Bagh
              </span>
            </div>
          </Link>
        </div>

        {/* Second Row: Centered Navigation Menu in Cinzel Decorative (Desktop >= 1024px) */}
        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-8 mt-2.5 pt-1.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-cinzel text-xs xl:text-sm font-bold tracking-wider transition-all duration-300 relative py-1 ${
                  isActive
                    ? 'text-[#d59b35] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#d59b35]'
                    : 'text-white/90 hover:text-[#d59b35] after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:h-[2px] after:bg-[#d59b35] hover:after:left-0 hover:after:right-0 after:transition-all after:duration-300'
                }`}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}

          {/* Shaha Gold Action in Menu Row */}
          <Link
            to="/contact"
            className="font-cinzel text-xs xl:text-sm font-bold tracking-wider text-[#d59b35] hover:text-white transition-colors flex items-center gap-1 ml-2"
          >
            <span>Plan a Visit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-1.5 rounded-full bg-[#181512]/80 hover:bg-[#25201a] border border-[#d59b35]/30 text-[#d59b35] transition-all cursor-pointer ml-2"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-[#f5cf7b]" /> : <Moon className="w-3.5 h-3.5 text-[#d59b35]" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Drawer (< 1024px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#14110e]/98 border-t border-[#d59b35]/25 p-4 flex flex-col gap-2 shadow-2xl backdrop-blur-2xl">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-cinzel px-4 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase transition-colors ${
                  isActive
                    ? 'bg-[#d59b35]/20 text-[#f5cf7b] border border-[#d59b35]/40'
                    : 'text-[#d4cec7] hover:bg-[#1e1914] hover:text-[#d59b35]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-shaha-gold text-center py-2.5 mt-2 text-xs font-cinzel uppercase tracking-wider font-bold"
          >
            <span>Plan a Visit</span>
          </Link>
        </div>
      )}
    </header>
  );
};
