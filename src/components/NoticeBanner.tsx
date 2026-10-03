import React from 'react';
import { Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const NoticeBanner: React.FC = () => {
  const { isUrdu } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 border-y border-gold-400/25 py-2.5 px-4 text-xs text-slate-200">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400"></span>
          </span>
          <span className="font-semibold text-gold-300">
            {isUrdu ? 'آستان عالیہ کا معلوماتی اعلامیہ:' : 'Astaan Public Notice & Information Portal:'}
          </span>
          <span className="text-slate-300">
            {isUrdu
              ? 'ہفتہ وار جمعرات ختم شریف بعد نمازِ عصر و مغرب منعقد ہوتا ہے۔'
              : 'Weekly Thursday Khatam gathering takes place after Asr / Maghrib prayers.'}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gold-400/90 text-[11px] font-manrope">
          <Info className="w-3.5 h-3.5 shrink-0" />
          <span>
            {isUrdu
              ? 'مصدقہ تاریخی دستاویزات و اسناد جانچ کے بعد شائع کی جائیں گی۔'
              : 'Historical Urdu documents and verified papers will be published upon archival transcription.'}
          </span>
        </div>
      </div>
    </div>
  );
};
