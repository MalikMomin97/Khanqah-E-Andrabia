import React from 'react';
import { ShahaHeroSlider } from '../components/ShahaHeroSlider';
import { SpiritualHeritageSection } from '../components/Sections/SpiritualHeritageSection';
import { DailyPrayersSection } from '../components/Sections/DailyPrayersSection';
import { JummaSection } from '../components/Sections/JummaSection';
import { ThursdayKhatamSection } from '../components/Sections/ThursdayKhatamSection';
import { MehfilMiladSection } from '../components/Sections/MehfilMiladSection';
import { HistorySection } from '../components/Sections/HistorySection';
import { EventsHijriSection } from '../components/Sections/EventsHijriSection';
import { GallerySection } from '../components/Sections/GallerySection';
import { SpiritualQuoteSection } from '../components/Sections/SpiritualQuoteSection';
import { LocationSection } from '../components/Sections/LocationSection';
import { ContactSection } from '../components/Sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="heritage-page">
      <ShahaHeroSlider />
      <SpiritualHeritageSection />
      <DailyPrayersSection />
      <JummaSection />
      <ThursdayKhatamSection />
      <MehfilMiladSection />
      <HistorySection />
      <EventsHijriSection />
      <GallerySection />
      <SpiritualQuoteSection />
      <LocationSection />
      <ContactSection />
    </div>
  );
};
