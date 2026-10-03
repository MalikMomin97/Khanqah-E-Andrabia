export interface FactRecord {
  label: string;
  value: string;
  detail?: string;
  category: 'registry' | 'geography' | 'architecture' | 'tradition';
}

export interface EpochEvent {
  yearRange: string;
  hijriYear?: string;
  title: string;
  arabicTitle?: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface ArchitecturalFeature {
  title: string;
  kashmiriTerm: string;
  arabicTerm?: string;
  description: string;
  material: string;
  significance: string;
  iconName: string;
}

export interface TransitCard {
  title: string;
  distance: string;
  travelTime: string;
  description: string;
  routeAdvice: string;
  iconName: string;
}

export const ENTITY_FACTS: FactRecord[] = [
  { label: 'Official Entity Name', value: 'Khanaqah E Andrabia Sonwar Srinagar', category: 'registry' },
  { label: 'Indo-Islamic Archival ID', value: 'Entity Record #10504', detail: 'National Indo-Islamic Heritage Registry', category: 'registry' },
  { label: 'Spiritual Tradition', value: 'Andrabia Sufi Sadat Lineage (Hamadani / Kubrawi)', category: 'tradition' },
  { label: 'Original Foundation', value: '781 AH (1379 CE) • Royal Hospice 1389–1413 CE', category: 'tradition' },
  { label: 'Geographic Location', value: 'Sonwar Bagh, Srinagar, Jammu & Kashmir', detail: 'Pincode 190004, India', category: 'geography' },
  { label: 'Precise Coordinates', value: '34.0736° N, 74.8427° E', detail: 'Astaan Khanaqah E Andrabia, Sonwar', category: 'geography' },
  { label: 'Google Maps Registry', value: 'Astaan Khanaqah E Andrabia', detail: 'https://maps.app.goo.gl/S7vvmonAPykNBYRDA', category: 'geography' },
  { label: 'Architectural Style', value: 'Classical Kashmiri Vernacular Timber & Masonry', category: 'architecture' },
  { label: 'Roof Structure', value: 'Multi-tiered Pagoda Spire (Burj) with Golden Crescent', category: 'architecture' },
  { label: 'Primary Liturgy', value: 'Aurad-e-Fathiya & Khatam-e-Sharief Recitations', category: 'tradition' },
  { label: 'Communal Status', value: 'Active Living Sanctuary & Research Center', category: 'registry' },
];

export const HISTORICAL_EPOCHS: EpochEvent[] = [
  {
    yearRange: '1379 CE',
    hijriYear: '781 AH',
    title: 'Arrival with Amir-e-Kabir Mir Sayyid Ali Hamadani (R.A.)',
    arabicTitle: 'ورود السادات الأندرابية مع أمير كبير',
    description:
      'Sayyid Ahmad Andrabi and his son Sayyid Muhammad Andrabi entered the Kashmir Valley from Andarab (Central Asia) accompanying Shah-e-Hamdan during the reign of Sultan Qutub-ud-Din. Sayyid Ahmad was charged with sustaining the spiritual education and Islamic scholarship upon Hamadani’s departure.',
    iconName: 'Compass',
    tag: 'Foundation & Central Asian Roots'
  },
  {
    yearRange: '1389–1413 CE',
    hijriYear: 'Reign of Sultan Sikandar',
    title: 'The First Royal Khanqah-e-Andrabia Established',
    arabicTitle: 'تأسيس الخانقاه الأندرابية بالمرسوم السلطاني',
    description:
      'Sultan Sikandar established a dedicated royal Khanqah and educational Madrasa in Srinagar for Sayyid Ahmad Andrabi (d. 1401 CE). The hospice became the principal urban focal point for Sufi contemplation, theological instruction, and the scholastic custody of Islamic sciences in Kashmir.',
    iconName: 'Landmark',
    tag: 'Sultanate Patronage'
  },
  {
    yearRange: '1515–1582 CE',
    hijriYear: '921–990 AH',
    title: 'Hazrat Shaykh Syed Mir Mirak Andrabi (Sanad-ul-Aarifeen)',
    arabicTitle: 'سند العارفين الشيخ سيد مير ميرك أندرابي',
    description:
      'The fifth-generation luminary Hazrat Mir Mirak Andrabi emerged as one of the preeminent Sufi masters of 16th-century Kashmir. Revered with the title "Sanad-ul-Aarifeen" (The Proof of Gnostics), he harmonized strict outward Shariah discipline with profound inner Tasawwuf realization.',
    iconName: 'Sparkles',
    tag: 'Golden Age of Tasawwuf'
  },
  {
    yearRange: '19th–20th Century',
    hijriYear: 'Settlement in Sonwar',
    title: 'Consolidation of the Sonwar Bagh Sanctuary',
    arabicTitle: 'مقر خانقاه سونہ وار باغ',
    description:
      'As Srinagar expanded towards the Dal Lake basin and the slopes of the Zabarwan range, the Andrabi spiritual seat took root in Sonwar Bagh, establishing an architectural sanctuary and quiet oasis for meditation, communal reconciliation, and prayer.',
    iconName: 'Mountain',
    tag: 'Sonwar Bagh Seat'
  },
  {
    yearRange: '21st Century',
    hijriYear: 'Contemporary Era',
    title: 'Preserved Living Heritage & Indo-Islamic Entity #10504',
    arabicTitle: 'التراث الحي والمحفوظ',
    description:
      'Today, Khanaqah E Andrabia Sonwar stands formally documented in the Indo-Islamic Heritage Registry (#10504). It remains an active spiritual hospice, hosting traditional dawn assemblies for Aurad-e-Fathiya, Khatam-e-Sharief, and annual Urs celebrations.',
    iconName: 'ScrollText',
    tag: 'Archival Registry & Living Legacy'
  }
];

export const ARCHITECTURAL_DETAILS: ArchitecturalFeature[] = [
  {
    title: 'Pagoda Lantern Spire',
    kashmiriTerm: 'Burj & Brangh',
    arabicTerm: 'المنارة الخشبية الهرمية',
    description:
      'A multi-tiered square timber spire rising from the hipped roof, crowned by a traditional gilded finial (Alam). The lantern allows natural chimney ventilation and amplifies acoustic resonance.',
    material: 'Himalayan Deodar (Cedrus deodara) & Sheet Copper',
    significance: 'Distinctive vernacular signature of Kashmiri Islamic wooden architecture dating to Shah-e-Hamdan.',
    iconName: 'TowerControl'
  },
  {
    title: 'Seismic Timber-Laced Joinery',
    kashmiriTerm: 'Dajji Dewari & Taq',
    arabicTerm: 'البناء الخشبي المقاوم للزلازل',
    description:
      'Interlocking horizontal and diagonal timber frames filled with fired brick and lime mortar, providing structural flexibility against Himalayan seismic movements.',
    material: 'Seasoned Deodar Beams & Handcrafted Brickwork',
    significance: 'Centuries-old Kashmiri engineering wisdom ensuring the preservation of heritage khanaqahs.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Geometrical Ceilings & Paneling',
    kashmiriTerm: 'Khatamband Woodwork',
    arabicTerm: 'سقف الخاتمبند الهندسي',
    description:
      'Intricate Islamic polygonal patterns assembled from small polygonal faceted wood pieces fitted seamlessly without nails, creating thermal insulation and acoustic clarity for zikr.',
    material: 'Hand-carved Walnut & Pinewood Facets',
    significance: 'Spiritual mathematics in wood reflecting the infinite order of divine creation.',
    iconName: 'Layers'
  },
  {
    title: 'Congregational Prayer Sanctuary',
    kashmiriTerm: 'Ibadat-Gah & Dars-Gah',
    arabicTerm: 'قاعة الأوراد والذكر الجماعي',
    description:
      'A serene carpeted hall configured for collective recitation of Aurad-e-Fathiya facing the Qiblah Mehrab, framed by walnut pillars and natural daylight.',
    material: 'Traditional Hand-knotted Kashmiri Carpets & Polished Timber',
    significance: 'Designed for deep acoustic immersion during collective dawn and evening litanies.',
    iconName: 'Users'
  }
];

export const TRANSIT_ACCESS: TransitCard[] = [
  {
    title: 'Sheikh ul-Alam International Airport (SXR)',
    distance: '~12.5 Kilometers',
    travelTime: '25–35 Minutes',
    description: 'Direct vehicular transit via Airport Road, Hyderpora Bypass, and Dalgate/Sonwar boulevard.',
    routeAdvice: 'Prepaid airport taxis and app cabs operate round-the-clock directly to Sonwar Bagh.',
    iconName: 'Plane'
  },
  {
    title: 'Srinagar Railway Station (Nowgam)',
    distance: '~10.0 Kilometers',
    travelTime: '20–30 Minutes',
    description: 'Connected via Pantha Chowk arterial corridor connecting Northern and Southern Kashmir.',
    routeAdvice: 'Regular shared mobility and taxi connections link the railway terminus to Sonwar.',
    iconName: 'Train'
  },
  {
    title: 'Lal Chowk City Center Hub',
    distance: '~3.8 Kilometers',
    travelTime: '8–12 Minutes',
    description: 'Sonwar Bagh sits adjacent to the civic heart of Srinagar, connecting seamlessly to Dal Lake and Boulevard Road.',
    routeAdvice: 'Direct e-rickshaw, auto, and bus links ply continuously along Maulana Azad and Sonwar Road.',
    iconName: 'MapPin'
  }
];

export const ETIQUETTE_GUIDELINES = [
  {
    title: 'Modest Dress & Demeanor',
    text: 'Visitors and researchers are requested to observe traditional decorum. Modest clothing covering arms and legs is customary. Head coverings are respectfully recommended inside the prayer hall.'
  },
  {
    title: 'Removal of Footwear',
    text: 'Footwear is removed at the designated timber entrance shoe-storage area before stepping onto the sanctuary carpets.'
  },
  {
    title: 'Quiet Contemplation & Photography',
    text: 'Devotees gather for meditation, zikr, and congregational worship. Photography of architectural details is welcomed; respectful silence is maintained during congregational recitation.'
  },
  {
    title: 'Scholarly & Archival Inquiries',
    text: 'Researchers investigating the Andrabi Sayyid lineage, Persian manuscript inscriptions, or Kashmiri vernacular architecture are welcomed to consult local custodians after prayer assemblies.'
  }
];
