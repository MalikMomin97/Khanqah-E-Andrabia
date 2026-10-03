export interface PrayerTiming {
  nameEn: string;
  nameUr: string;
  arabic: string;
  timeNoteEn: string;
  timeNoteUr: string;
  descEn: string;
  descUr: string;
}

export interface ActivityItem {
  id: string;
  titleEn: string;
  titleUr: string;
  scheduleEn: string;
  scheduleUr: string;
  descEn: string;
  descUr: string;
  tagEn: string;
  tagUr: string;
  featured?: boolean;
}

export interface SpecialOccasion {
  id: string;
  titleEn: string;
  titleUr: string;
  honoredEntityEn: string;
  honoredEntityUr: string;
  dateNoteEn: string;
  dateNoteUr: string;
  descEn: string;
  descUr: string;
  activitiesEn: string[];
  activitiesUr: string[];
  isPrimaryUrs?: boolean;
}

export const DAILY_PRAYERS: PrayerTiming[] = [
  {
    nameEn: 'Fajr',
    nameUr: 'فجر',
    arabic: 'صلاة الفجر',
    timeNoteEn: 'Dawn (Seasonal time posted on Astaan Notice Board)',
    timeNoteUr: 'صبحِ صادق (موسمی اوقات آستان کے نوٹس بورڈ پر آویزاں ہیں)',
    descEn: 'Pre-dawn congregational prayer followed by the traditional collective recitation of Aurad-e-Fathiya.',
    descUr: 'نمازِ فجر باجماعت اور اس کے بعد روایتی اورادِ فتحیہ کا اجتماعی ورد۔'
  },
  {
    nameEn: 'Dhuhr',
    nameUr: 'ظہر',
    arabic: 'صلاة الظهر',
    timeNoteEn: 'Midday (Seasonal time posted on Astaan Notice Board)',
    timeNoteUr: 'دوپہر (موسمی اوقات آستان کے نوٹس بورڈ پر آویزاں ہیں)',
    descEn: 'Midday congregational prayer followed by quiet contemplation and individual supplications.',
    descUr: 'دوپہر کی نماز باجماعت اور اس کے بعد انفرادی دعائیں و ذکر۔'
  },
  {
    nameEn: 'Asr',
    nameUr: 'عصر',
    arabic: 'صلاة العصر',
    timeNoteEn: 'Late Afternoon (Seasonal time posted on Astaan Notice Board)',
    timeNoteUr: 'سہ پہر (موسمی اوقات آستان کے نوٹس بورڈ پر آویزاں ہیں)',
    descEn: 'Afternoon prayer; on Thursdays, this precedes the weekly Khatam gathering.',
    descUr: 'سہ پہر کی نماز؛ جمعرات کو اس کے بعد ہفتہ وار ختم شریف کا اہتمام ہوتا ہے۔'
  },
  {
    nameEn: 'Maghrib',
    nameUr: 'مغرب',
    arabic: 'صلاة المغرب',
    timeNoteEn: 'Sunset (Immediately following the sunset call to prayer)',
    timeNoteUr: 'غروبِ آفتاب (اذانِ مغرب کے فوری بعد)',
    descEn: 'Sunset congregational prayer, tasbihat, and Quranic recitation.',
    descUr: 'غروبِ آفتاب کے بعد نمازِ مغرب باجماعت اور تسبیحات۔'
  },
  {
    nameEn: 'Isha',
    nameUr: 'عشاء',
    arabic: 'صلاة العشاء',
    timeNoteEn: 'Night (Seasonal time posted on Astaan Notice Board)',
    timeNoteUr: 'رات (موسمی اوقات آستان کے نوٹس بورڈ پر آویزاں ہیں)',
    descEn: 'Night congregational prayer followed by final evening benedictions.',
    descUr: 'رات کی نماز باجماعت اور اختتامی دعائیہ کلمات۔'
  }
];

export const REGULAR_ACTIVITIES: ActivityItem[] = [
  {
    id: 'jummah',
    titleEn: 'Jummah (Friday) Congregational Gathering',
    titleUr: 'نمازِ جمعۃ المبارک کا باوقار اجتماع',
    scheduleEn: 'Every Friday • Khutbah & Namaz (Seasonal Timing)',
    scheduleUr: 'ہر جمعۃ المبارک • خطبہ و نماز باجماعت',
    descEn: 'The weekly Friday congregation draws devotees from Sonwar and across Srinagar. Includes the Arabic Friday Khutbah, congregational prayer, recitation of Aurad-e-Fathiya, and collective Dua for the Valley and humanity.',
    descUr: 'جمعۃ المبارک کے روز سونہ وار اور گرد و نواح سے عقیدت مند شرکت کرتے ہیں۔ روایتی عربی خطبہ، نمازِ باجماعت، اورادِ فتحیہ کا ورد اور اجتماعی دعا شامل ہے۔',
    tagEn: 'Weekly Friday Congregation',
    tagUr: 'ہفتہ وار جمعہ اجتماع',
    featured: true
  },
  {
    id: 'thursday-khatam',
    titleEn: 'Weekly Thursday Khatam Gathering',
    titleUr: 'ہفتہ وار جمعرات کا ختم شریف و ذکرِ خیر',
    scheduleEn: 'Every Thursday • After Asr / Maghrib',
    scheduleUr: 'ہر جمعرات • بعد نمازِ عصر / مغرب',
    descEn: 'The traditional weekly Majlis-e-Khatmat held every Thursday evening in reverence of the Awliya-e-Kashmir. Includes Khatam-e-Sharief, Durood-o-Salam, spiritual contemplation (Muraqabah), and collective prayers for the sick and departed.',
    descUr: 'ہر جمعرات کو اولیائے کرام کی یاد میں مجلسِ ختمات، ختمِ شریف، درود و سلام اور مصائب و پریشانیوں سے نجات کے لیے رقت آمیز دعا۔',
    tagEn: 'Weekly Spiritual Gathering',
    tagUr: 'ہفتہ وار روحانی مجلس',
    featured: true
  },
  {
    id: 'aurad-fathiya',
    titleEn: 'Daily Recitation of Aurad-e-Fathiya',
    titleUr: 'روزانہ صبح اورادِ فتحیہ کا باقاعدہ ورد',
    scheduleEn: 'Daily • Following Fajr Congregation',
    scheduleUr: 'روزانہ • بعد نمازِ فجر',
    descEn: 'Carrying forward the blessed tradition established by Amir-e-Kabir Mir Sayyid Ali Hamadani (R.A.) across Kashmiri Khanqahs for over six centuries.',
    descUr: 'امیرِ کبیر حضرت میر سید علی ہمدانی رحمۃ اللہ علیہ کے جاری کردہ اورادِ فتحیہ کی چھ صدیوں پر محیط مبارک روایت۔',
    tagEn: 'Daily Liturgy',
    tagUr: 'روزانہ معمول'
  },
  {
    id: 'dars-quran',
    titleEn: 'Quranic Instruction & Spiritual Guidance',
    titleUr: 'تعلیمِ قرآن و تزکیۂ نفس',
    scheduleEn: 'Daily & Weekend Sessions (Placeholder for verified schedule)',
    scheduleUr: 'روزانہ اور ہفتہ وار نشستیں (مصدقہ شیڈول کے مطابق)',
    descEn: 'Providing quiet guidance on moral ethics, Tazkiyah (spiritual refinement), Tajweed of the Quran, and the teachings of classical Sufi masters.',
    descUr: 'اخلاقی تربیت، تزکیۂ باطن، تجویدِ قرآن اور تعلیماتِ بزرگانِ دین کی تفہیم۔',
    tagEn: 'Educational Guidance',
    tagUr: 'تعلیمی رہنمائی'
  }
];

export const SPECIAL_OCCASIONS: SpecialOccasion[] = [
  {
    id: 'urs-kamal-ud-din',
    titleEn: 'Annual Urs of Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.)',
    titleUr: 'عرسِ مبارک حضرت میر سید کمال الدین رحمۃ اللہ علیہ',
    honoredEntityEn: 'Hazrat Mir Syed Kamal-ud-Din Andrabi (Rehmatullah Alaih)',
    honoredEntityUr: 'حضرت میر سید کمال الدین رحمۃ اللہ علیہ',
    dateNoteEn: '16th Jumada al-Awwal (Annual Urs Mubarak • Wisal 1081 AH)',
    dateNoteUr: '۱۶ جمادی الاول (سالانہ عرسِ مبارک • وصال ۱۰۸۱ھ)',
    descEn: 'The central annual gathering of the Astaan, commemorating the life, piety, and spiritual legacy of Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.), who passed away on 16th Jumada al-Awwal 1081 AH. Devotees from all districts assemble for Khatmat, Quran Khawani, sermons, and traditional Langar distribution.',
    descUr: 'آستان عالیہ کا سب سے بڑا سالانہ مبارک اجتماع، جس میں حضرت میر سید کمال الدین رحمۃ اللہ علیہ کی یاد منائی جاتی ہے (وصال: ۱۶ جمادی الاول ۱۰۸۱ھ)۔ قرآن خوانی، محافلِ نعت و مناقب، خطابات اور روایتی لنگر کا اہتمام ہوتا ہے۔',
    activitiesEn: [
      'Night-long Vigils & Tahajjud prayers (Shab-Khawani)',
      'Recitation of Holy Quran & Khatam-e-Sharief',
      'Spiritual Discourses by esteemed scholars',
      'Community Langar (unconditional hospitality) distribution',
      'Special Supplications for peace, harmony, and wellbeing'
    ],
    activitiesUr: [
      'شب خوانی اور قیام اللیل',
      'قرآن خوانی اور ختمِ شریف',
      'علمائے کرام و مشائخ کے روحانی خطابات',
      'عام لنگر کا وسیع اہتمام',
      'عالمِ اسلام اور وادی میں امن و سلامتی کے لیے خصوصی دعائیں'
    ],
    isPrimaryUrs: true
  },
  {
    id: 'makhdoom-sahib',
    titleEn: 'Urs & Mehfil of Hazrat Sheikh Hamza Makhdoom (R.A.)',
    titleUr: 'عرس و محفل حضرت شیخ حمزہ مخدوم کشمیری رحمۃ اللہ علیہ (مخدوم صاحب)',
    honoredEntityEn: 'Sultan-ul-Arifeen Hazrat Sheikh Hamza Makhdoom (R.A.) - Mehboob-ul-Alam',
    honoredEntityUr: 'سلطان العارفین محبوب العالم حضرت شیخ حمزہ مخدوم کشمیری رحمۃ اللہ علیہ',
    dateNoteEn: '13th to 24th Safar-ul-Muzaffar (Annual commemoration)',
    dateNoteUr: '۱۳ تا ۲۴ صفر المظفر (سالانہ ایام)',
    descEn: 'Special commemorative Mehfil-e-Khatmat observed in reverence of Kashmir’s foremost indigenous saint, Sultan-ul-Arifeen Sheikh Hamza Makhdoom (R.A.), known affectionately throughout the Valley as Makhdoom Sahib.',
    descUr: 'کشمیر کے عظیم پیشوا سلطان العارفین حضرت شیخ حمزہ مخدوم رحمۃ اللہ علیہ کی یاد میں خصوصی محفلِ ختمات و مناقب۔',
    activitiesEn: [
      'Collective Khatmat and recitation of Makhdoom Sahib’s classical litanies',
      'Discourse on Kashmiri Tasawwuf and indigenous saintly ethics',
      'Distribution of Tabarruk among devotees'
    ],
    activitiesUr: [
      'ختمات اور کلامِ مخدوم صاحب کا اجتماعی ورد',
      'کشمیر کے صوفیانہ ورثے اور اخلاقیات پر روشنی',
      'حاضرین میں تبرک کی تقسیم'
    ]
  },
  {
    id: 'milad-un-nabi',
    titleEn: 'Eid Milad-un-Nabi ﷺ (The Blessed Birth of the Prophet)',
    titleUr: 'جشنِ ولادتِ باسعادت سرورِ کائنات حضرت محمد مصطفیٰ ﷺ',
    honoredEntityEn: 'The Noble Messenger of Allah, Sayyidina Muhammad ﷺ',
    honoredEntityUr: 'سید الانبیاء والمرسلین، خاتم النبیین حضرت محمد ﷺ',
    dateNoteEn: '12th Rabi-ul-Awwal (Annual celebration)',
    dateNoteUr: '۱۲ ربیع الاول (سالانہ جشنِ میلاد)',
    descEn: 'The holiest celebration marking the birth of the Seal of the Prophets, Muhammad ﷺ. The Astaan is illuminated in celebration, and devotees recite classical Arabic, Persian, Kashmiri, and Urdu Naats, followed by Darood-o-Salam and lectures on the exalted character (Seerah) of the Holy Prophet ﷺ.',
    descUr: 'سرورِ کونین ﷺ کی ولادتِ باسعادت پر آستان میں خصوصی چراغاں، نعت خوانی، سیرتِ طیبہ پر تفصیلی خطابات اور درود و سلام کی روح پرور مجالس۔',
    activitiesEn: [
      'Majlis-e-Durood-o-Salam & collective Salawat',
      'Classical Kashmiri, Persian, and Urdu Naat Khawani',
      'Lectures on the Mercy and Sunnah of the Prophet ﷺ',
      'Distribution of sweets and Tabarruk'
    ],
    activitiesUr: [
      'مجلسِ درود و سلام و صلوات',
      'کشمیری، فارسی اور اردو زبانوں میں نعت خوانی',
      'رحمۃ للعالمین ﷺ کی سیرت پر بیانات',
      'شیرینی و تبرکات کی تقسیم'
    ]
  },
  {
    id: 'ghaus-ul-azam',
    titleEn: 'Urs of Hazrat Sheikh Syed Abdul Qadir Jilani (R.A.)',
    titleUr: 'عرس و گیارہویں شریف حضرت شیخ سید عبد القادر جیلانی رحمۃ اللہ علیہ',
    honoredEntityEn: 'Ghaus-ul-Azam Sheikh Syed Abdul Qadir Jilani (R.A.) - Dastgeer Sahib',
    honoredEntityUr: 'غوث الاعظم پیرانِ پیر حضرت شیخ سید عبد القادر جیلانی رحمۃ اللہ علیہ (دستگیر صاحب)',
    dateNoteEn: '11th Rabi-us-Sani (Gyarwee Sharif) & Annual Urs',
    dateNoteUr: '۱۱ ربیع الثانی (گیارہویں شریف) و سالانہ ایام',
    descEn: 'Observed with deep devotion across Kashmir, where Sheikh Syed Abdul Qadir Jilani is revered as Ghaus-ul-Azam and Dastgeer Sahib. Features the recitation of Khatam-e-Ghausia and traditional Qasidas.',
    descUr: 'کشمیر میں غوث الاعظم دستگیر صاحب کی یاد میں خصوصی عقیدت کا اظہار، ختمِ غوثیہ کا ورد اور قصائدِ غوثیہ کا نذرانہ۔',
    activitiesEn: [
      'Recitation of Khatam-e-Ghausia & Qasida Burdah',
      'Sermons on the spiritual discipline and purification of the Qadiriyya way',
      'Congregational prayers and Langar'
    ],
    activitiesUr: [
      'ختمِ غوثیہ اور قصیدہ بردہ کا ورد',
      'قادریہ سلسلے کی تعلیمات اور اصلاحِ نفس پر خطابات',
      'اجتماعی دعائیں اور نیاز کی تقسیم'
    ]
  },
  {
    id: 'shah-e-hamdan',
    titleEn: 'Urs of Ameer-e-Kabir Mir Sayyid Ali Hamadani (R.A.)',
    titleUr: 'عرسِ مبارک امیرِ کبیر حضرت میر سید علی ہمدانی رحمۃ اللہ علیہ (شاہِ ہمدان)',
    honoredEntityEn: 'Amir-e-Kabir Mir Sayyid Ali Hamadani (R.A.) - Shah-e-Hamdan',
    honoredEntityUr: 'امیرِ کبیر حضرت میر سید علی ہمدانی رحمۃ اللہ علیہ (بانیِ اسلام در کشمیر)',
    dateNoteEn: '6th Dhu al-Hijjah (Annual commemoration)',
    dateNoteUr: '۶ ذوالحجہ (سالانہ عرس)',
    descEn: 'Commemorating the patron saint of Kashmir who brought Islam, Persian crafts, calligraphy, and scholastic institutions to the Valley in the 14th century, and with whose blessed caravan the Andrabi Sayyids arrived in Kashmir.',
    descUr: 'وادیِ کشمیر کے محسنِ اعظم اور بانیِ اسلام حضرت شاہِ ہمدان کی یاد میں عقیدت کا خراج، جن کے ہمراہ اندرابی سادات کشمیر تشریف لائے۔',
    activitiesEn: [
      'Comprehensive dawn recitation of Aurad-e-Fathiya',
      'Lectures on Shah-e-Hamdan’s spiritual, social, and economic transformation of Kashmir',
      'Solemn prayer for the preservation of Kashmiri heritage'
    ],
    activitiesUr: [
      'فجر کے بعد اورادِ فتحیہ کا خصوصی اہتمام',
      'شاہِ ہمدان کے لائے ہوئے اسلامی و اخلاقی انقلاب پر بیانات',
      'کشمیر کے اسلامی و تہذیبی ورثے کی بقا کے لیے دعائیں'
    ]
  }
];

export const ASTAAN_INFO = {
  nameEn: 'Astaan-e-Aaliya Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.)',
  nameUr: 'آستان عالیہ حضرت میر سید کمال الدین رحمۃ اللہ علیہ',
  knownAsEn: 'Khanqah-e-Andrabia Sonwar Srinagar',
  knownAsUr: 'خانقاہِ اندرابیہ سونہ وار سرینگر',
  addressEn: 'Sonwar Bagh, Srinagar, Jammu & Kashmir 190004, India',
  addressUr: 'سونہ وار باغ، سرینگر، جموں و کشمیر ۱۹۰۰۰۴، بھارت',
  coordinates: '34.0736° N, 74.8427° E',
  lat: 34.073565,
  lng: 74.842745,
  googleMapsUrl: 'https://maps.app.goo.gl/S7vvmonAPykNBYRDA',
  registryEntity: 'Indo-Islamic Heritage Archival Record #10504',
  heroImage: '/images/optimized/astaan-hero-1600w.webp',
  originalHero: '/images/astaan-hero.jpg',
  placeholderDisclaimerEn: 'Detailed biographies, Persian sanads, and Urdu historical manuscripts are currently being compiled. All dates and records will be updated upon archival verification without altering authentic facts.',
  placeholderDisclaimerUr: 'تفصیلی سوانح حیات، فارسی اسناد اور اردو تاریخی دستاویزات تصدیق کے عمل میں ہیں۔ مستند معلومات موصول ہوتے ہی بغیر کسی رد و بدل کے شائع کی جائیں گی۔'
};

export const VERIFIED_DOCUMENT_DATA = {
  titleUr: 'حضرت میر سید کمال الدین اندرابی — تاریخ کشمیر اور اولیاء اللہ کے آئینے میں',
  titleEn: 'Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.) — In the Mirror of Kashmir History & Awliya Allah',
  wisalDateUr: '۱۶ جمادی الاول ۱۰۸۱ھ',
  wisalDateEn: '16th Jumada al-Awwal 1081 AH',
  fatherUr: 'حضرت میر سید محمد ابراہیم اندرابیؒ (صاحبِ قرآن، وفات ۱۰۷۶ھ، مدفون ملارٹہ)',
  fatherEn: 'Hazrat Mir Syed Muhammad Ibrahim Andrabi (R.A.) (Hafiz of the Quran, d. 1076 AH, buried in Malaratta)',
  brotherUr: 'میر طاہر اندرابیؒ',
  brotherEn: 'Mir Tahir Andrabi (R.A.)',
  originalUrduText: `حضرت میر سید کمال الدین اندرابیؒ ساداتِ اندرابیہ سے تھے۔ آپ کے والدِ ماجد حضرت میر سید محمد ابراہیم اندرابیؒ ایک جلیل القدر بزرگ گزرے ہیں۔ آپ صاحبِ قرآن (حافظ) اور واقفِ دین تھے۔ رات کو عبادات میں مشغول رہتے تھے۔ آپ ۱۰۷۶ھ میں انتقال کر چکے ہیں اور ملارٹہ میں مدفون ہیں۔ آپ کے دو فرزند میر طاہر اندرابیؒ اور میر سید کمال الدین اندرابیؒ تھے۔ جو بڑے جلیل القدر بزرگ، حافظِ کلام اللہ شریف اور واقفِ علومِ حدیث تھے۔ آپ نے اپنے والدِ محترم سے تمام مقاماتِ سلوک اور اسرارِ الٰہی حاصل کئے تھے۔ زیارتِ بیت اللہ شریف کرنے کے بعد اپنے والدِ محترم کے چچا صاحب (حضرت میر سید محمد یوسف اندرابیؒ) جو کہ درگن میں مدفون ہیں، کی دخترِ نیک اختر سے عقد کر چکے ہیں۔ آپ کئی عرصہ تک درگن میں ہی بود و باش کرتے رہے۔ مگر بعد میں علاقہ سونہ وار میں انتقالِ مکان بغرضِ تبلیغِ دینِ محمدی ﷺ کر چکے اور تمام عمر سونہ وار میں ہی قرار کیا۔ تبلیغِ دین اور عبادت میں مشغول رہا کرتے ہے۔ اپنی نیک سیرت، پاکباز اور عبادت گزار شریکِ حیات کی موت کے بعد تین سال زندہ رہے۔ اور ۱۶ جمادی الاول ۱۰۸۱ھ میں انتقال فرمایا۔ آپ کو اللہ تعالیٰ نے بظاہر کوئی اولاد عطا نہیں کیا تھا۔ اور اپنے مکان کے صحن در واقعہ سونہ وار میں ابدی نیند فرما رہے ہیں۔

تاریخِ وفات: ۱۶ جمادی الاول ۱۰۸۱ھ`,
  accurateEnglishTranslation: `Hazrat Mir Syed Kamal ud din Andrabi (RA) belonged to the Sadat Andrabiya (Syed Andrabi family). His respected father, Hazrat Mir Syed Muhammad Ibrahim Andrabi (RA), was a great and distinguished saint. He was a Hafiz of the Quran and a scholar of religion, and he spent his nights in worship. He passed away in 1076 AH and is buried in Malaratha, Srinagar.

He had two sons, Mir Tahir Andrabi (RA) and Mir Syed Kamal ud din Andrabi (RA). Both were distinguished saints, Hafiz of the Quran and knowledgeable in the Hadith sciences. Kamaluddin received all the stations of the spiritual path (suluk) and the divine secrets from his father.

After performing the pilgrimage to the House of Allah (Hajj), he married the virtuous daughter of his father's paternal uncle, Hazrat Mir Syed Muhammad Yusuf Andrabi (RA), who is buried in Drugan Dalgate, Srinagar. He lived in Drugan Dalgate for a long time, but later moved to Sonwar, Srinagar, to preach the religion of Muhammad (ﷺ). He settled in Sonwar for the rest of his life, devoted to preaching and worship.

He lived three years after the death of his righteous, pious and devout wife. He passed away on 16 Jumada al-Awwal, 1081 AH. Allah Almighty apparently did not grant him any children. He now rests in eternal sleep in the courtyard of his house in Sonwar srinagar.

Urs Mubarak: 16 Jumada al-Awwal, 1081 AH`,
  shajarahChain: [
    { num: 1, nameUr: 'حضرت میر سید کمال الدین اندرابیؒ', nameEn: 'Hazrat Mir Syed Kamal ud din Andrabi (R.A.)', roleEn: 'Resting in Sonwar Astaan (Wisal 1081 AH)' },
    { num: 2, nameUr: 'فرزند حضرت میر سید محمد ابراہیم اندرابیؒ', nameEn: 'Son of Hazrat Mir Syed Muhammad Ibrahim Andrabi (R.A.)', roleEn: 'Hafiz-e-Quran, buried in Malaratta (d. 1076 AH)' },
    { num: 3, nameUr: 'فرزند حضرت سید محمد اندرابیؒ', nameEn: 'Son of Hazrat Syed Muhammad Andrabi (R.A.)', roleEn: 'Revered spiritual master' },
    { num: 4, nameUr: 'فرزند حضرت میر سعید میرک اندرابیؒ', nameEn: 'Son of Hazrat Mir Syed Mirak Andrabi (R.A.)', roleEn: 'Sanad-ul-Aarifeen (1515–1582 CE)' },
    { num: 5, nameUr: 'فرزند حضرت میر شمس اندرابیؒ', nameEn: 'Son of Hazrat Mir Shams Andrabi (R.A.)', roleEn: 'Eminent Sufi master' },
    { num: 6, nameUr: 'فرزند حضرت میر سعید ابراہیم اندرابیؒ', nameEn: 'Son of Hazrat Mir Syed Ibrahim Andrabi (R.A.)', roleEn: 'Scholar and ascetic' },
    { num: 7, nameUr: 'فرزند حضرت میر سعید اندرابیؒ', nameEn: 'Son of Hazrat Mir Syed Andrabi (R.A.)', roleEn: 'Sultanate period scholar' },
    { num: 8, nameUr: 'فرزند حضرت میر سعید احمد اندرابیؒ', nameEn: 'Son of Hazrat Mir Syed Ahmad Andrabi (R.A.)', roleEn: 'Arrived with Shah-e-Hamdan (781 AH / 1379 CE)' },
  ]
};
