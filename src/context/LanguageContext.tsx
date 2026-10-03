import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ur';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isUrdu: boolean;
  dir: 'ltr' | 'rtl';
  t: (key: string) => string;
}

const translations: Record<string, { en: string; ur: string }> = {
  // Navigation
  'nav.home': { en: 'Home', ur: 'صفحہ اول' },
  'nav.about': { en: 'About Astaan', ur: 'تعارف آستان عالیہ' },
  'nav.history': { en: 'History', ur: 'تاریخ و سوانح' },
  'nav.activities': { en: 'Prayers & Activities', ur: 'اوقاتِ نماز و معمولات' },
  'nav.events': { en: 'Events & Urs', ur: 'تقاریب و اعراس' },
  'nav.gallery': { en: 'Gallery', ur: 'تصویری البم' },
  'nav.contact': { en: 'Visit & Contact', ur: 'رہنمائی و رابطہ' },

  // Site Identity
  'site.title': {
    en: 'Astaan Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.)',
    ur: 'آستان عالیہ حضرت میر سید کمال الدین رحمۃ اللہ علیہ'
  },
  'site.subtitle': {
    en: 'Khanqah-e-Andrabia • Sonwar Srinagar, Kashmir',
    ur: 'خانقاہِ اندرابیہ • سونہ وار سرینگر، کشمیر'
  },
  'site.honorific': {
    en: '(Rehmatullah Alaih)',
    ur: '(رحمۃ اللہ علیہ)'
  },
  'site.bismillah': {
    en: 'In the name of Allah, the Most Gracious, the Most Merciful',
    ur: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ'
  },

  // Buttons & CTAs
  'btn.about': { en: 'About Astaan', ur: 'آستان کا تعارف' },
  'btn.activities': { en: 'Daily Prayers & Khatam', ur: 'نماز و معمولات' },
  'btn.events': { en: 'Events & Urs', ur: 'محافل و اعراس' },
  'btn.visit': { en: 'Plan Your Visit', ur: 'رہنمائیِ زیارت' },
  'btn.maps': { en: 'Open in Google Maps', ur: 'گوگل میپس پر دیکھیں' },
  'btn.copyCoords': { en: 'Copy Coordinates', ur: 'نقشے کے نقاط محفوظ کریں' },
  'btn.copied': { en: 'Copied', ur: 'محفوظ ہو گیا' },
  'btn.more': { en: 'Read More', ur: 'مزید پڑھیں' },
  'btn.placeholderNotice': {
    en: 'Verified historical documents and seasonal schedules will be updated upon archival review.',
    ur: 'مصدقہ تاریخی دستاویزات اور موسمی اوقاتِ نماز جانچ کے بعد شامل کیے جائیں گے۔'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('astaan-lang') as Language;
      if (saved === 'en' || saved === 'ur') return saved;
    }
    return 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr';
    localStorage.setItem('astaan-lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ur' : 'en'));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isUrdu: language === 'ur',
        dir: language === 'ur' ? 'rtl' : 'ltr',
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
