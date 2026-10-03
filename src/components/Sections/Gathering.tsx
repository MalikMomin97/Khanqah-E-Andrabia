import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Reveal } from './Editorial';

export const Gathering = ({ id, number, icon: Icon, title, urdu, description, descriptionUr }: { id: string; number: string; icon: LucideIcon; title: string; urdu: string; description: string; descriptionUr: string }) => {
  const { isUrdu } = useLanguage();
  return <section id={id} className="gathering"><Reveal><div className="gathering-top"><Icon size={26} strokeWidth={1.15} aria-hidden="true" /><span>{number}</span></div><p className="eyebrow">{isUrdu ? 'نماز اور محافل' : 'Prayer & togetherness'}</p><h2>{isUrdu ? urdu : title}</h2><p className="editorial-copy">{isUrdu ? descriptionUr : description}</p><p className="gathering-status">{isUrdu ? 'پروگرام اور وقت کی تصدیق باقی ہے' : 'Programme & timing to be confirmed'}</p><Link className="text-link" to="/events">{isUrdu ? 'محافل کی معلومات' : 'Gathering updates'}<ArrowUpRight size={17} aria-hidden="true" /></Link></Reveal></section>;
};
