import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import images from '../../data/imagesManifest.json';

export const Reveal = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55 }}>{children}</motion.div>;
};

export const SectionHeading = ({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) => (
  <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children && <p className="editorial-copy">{children}</p>}</div>
);

export const TextLink = ({ to, children }: { to: string; children: ReactNode }) => <Link className="text-link" to={to}>{children}<ArrowUpRight size={17} aria-hidden="true" /></Link>;

export type ImageId = keyof typeof images;
export const HeritageImage = ({ id, alt, className = '', eager = false, sizes = '(max-width: 700px) 100vw, 50vw' }: { id: ImageId; alt: string; className?: string; eager?: boolean; sizes?: string }) => {
  const image = images[id];
  return <img className={className} src={image.originalPath} srcSet={image.srcSet} sizes={sizes} width={image.dimensions.width} height={image.dimensions.height} alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" />;
};
