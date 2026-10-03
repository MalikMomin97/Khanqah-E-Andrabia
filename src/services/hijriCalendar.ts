/**
 * Native Intl Umm al-Qura Calendar Engine with Regional Moon-Sighting Offset
 * Provides precise Hijri date calculations, multilingual names, and regional sighting adjustments.
 */

export interface HijriDateResult {
  day: number;
  monthIndex: number; // 1-12
  monthArabic: string;
  monthUrdu: string;
  monthEnglish: string;
  year: number;
  yearSuffix: string;
  formattedEnglish: string;
  formattedUrdu: string;
  formattedArabic: string;
  occasion?: string;
  isSacredMonth: boolean;
}

export type RegionalZone = 'kashmir' | 'saudi' | 'custom';

const HIJRI_MONTHS = [
  { en: "Muharram", ar: "مُحَرَّم", ur: "محرم الحرام", sacred: true },
  { en: "Safar", ar: "صَفَر", ur: "صفر المظفر", sacred: false },
  { en: "Rabi' al-Awwal", ar: "رَبِيع ٱلْأَوَّل", ur: "ربیع الاول", sacred: false },
  { en: "Rabi' al-Thani", ar: "رَبِيع ٱلثَّانِي", ur: "ربیع الثانی", sacred: false },
  { en: "Jumada al-Ula", ar: "جُمَادَىٰ ٱلْأُولَىٰ", ur: "جمادی الاول", sacred: false },
  { en: "Jumada al-Thaniyah", ar: "جُمَادَىٰ ٱلثَّانِيَة", ur: "جمادی الثانی", sacred: false },
  { en: "Rajab", ar: "رَجَب", ur: "رجب المرجب", sacred: true },
  { en: "Sha'ban", ar: "شَعْبَان", ur: "شعبان المعظم", sacred: false },
  { en: "Ramadan", ar: "رَمَضَان", ur: "رمضان المبارک", sacred: false },
  { en: "Shawwal", ar: "شَوَّال", ur: "شوال المکرم", sacred: false },
  { en: "Dhu al-Qi'dah", ar: "ذُو ٱلْقَعْدَة", ur: "ذی القعدہ", sacred: true },
  { en: "Dhu al-Hijjah", ar: "ذُو ٱلْحِجَّة", ur: "ذی الحجہ", sacred: true },
];

const HISTORICAL_OCCASIONS: Record<string, string> = {
  "1-1": "Islamic New Year (1st Muharram)",
  "1-10": "Day of Ashura (10th Muharram)",
  "3-12": "Mawlid an-Nabi ﷺ (12th Rabi' al-Awwal)",
  "7-27": "Laylat al-Mi'raj (27th Rajab)",
  "8-15": "Shab-e-Barat (15th Sha'ban)",
  "9-1": "First Day of Ramadan",
  "9-27": "Laylat al-Qadr (27th Ramadan)",
  "10-1": "Eid al-Fitr (1st Shawwal)",
  "12-6": "Urs of Amir-e-Kabir Mir Sayyid Ali Hamadani (6th Dhu al-Hijjah)",
  "12-9": "Day of Arafah (9th Dhu al-Hijjah)",
  "12-10": "Eid al-Adha (10th Dhu al-Hijjah)",
};

/**
 * Calculates Hijri date using Intl.DateTimeFormat 'islamic-umalqura'
 * with a regional moon-sighting day offset.
 *
 * @param date Gregorian Date to convert (defaults to now)
 * @param offsetDays Moon sighting adjustment (-2, -1, 0, +1, +2). Kashmir/South Asia commonly sightings are -1 day relative to Umm al-Qura.
 */
export function getHijriDate(date: Date = new Date(), offsetDays: number = -1): HijriDateResult {
  const adjustedDate = new Date(date.getTime());
  adjustedDate.setDate(adjustedDate.getDate() + offsetDays);

  // Intl Umm al-Qura formatters
  const uqFormatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

  const parts = uqFormatter.formatToParts(adjustedDate);
  const partMap: Record<string, string> = {};
  for (const part of parts) {
    partMap[part.type] = part.value;
  }

  const rawDay = parseInt(partMap.day || '1', 10);
  const rawMonth = parseInt(partMap.month || '1', 10);
  const rawYear = parseInt(partMap.year || '1448', 10);

  const monthIdx = Math.max(1, Math.min(12, rawMonth));
  const monthInfo = HIJRI_MONTHS[monthIdx - 1];

  const occasionKey = `${monthIdx}-${rawDay}`;
  const occasion = HISTORICAL_OCCASIONS[occasionKey];

  return {
    day: rawDay,
    monthIndex: monthIdx,
    monthArabic: monthInfo.ar,
    monthUrdu: monthInfo.ur,
    monthEnglish: monthInfo.en,
    year: rawYear,
    yearSuffix: 'AH',
    formattedEnglish: `${rawDay} ${monthInfo.en} ${rawYear} AH`,
    formattedUrdu: `${rawDay} ${monthInfo.ur} ${rawYear} ھ`,
    formattedArabic: `${rawDay} ${monthInfo.ar} ${rawYear} هـ`,
    occasion,
    isSacredMonth: monthInfo.sacred,
  };
}
