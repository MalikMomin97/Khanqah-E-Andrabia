import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Plane, Train, MapPin, Navigation, ExternalLink, Map as MapIcon } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ArchOrnamentHeader } from './IslamicArt/ArchFrame';
import { TRANSIT_ACCESS } from '../data/heritageData';

const transitIcons: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-5 h-5 text-gold-400" />,
  Train: <Train className="w-5 h-5 text-gold-400" />,
  MapPin: <MapPin className="w-5 h-5 text-gold-400" />,
};

export const MapLocation: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const lat = 34.073565;
    const lng = 74.842745;

    const map = L.map(mapContainerRef.current, {
      center: [lat, lng],
      zoom: 16,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Custom Gold Islamic Pin Icon
    const customIcon = L.divIcon({
      className: 'custom-leaflet-marker',
      html: `
        <div style="
          width: 44px;
          height: 44px;
          background: radial-gradient(circle, #0e4b37 0%, #03140e 100%);
          border: 2px solid #d4af37;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fde68a;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.8);
          cursor: pointer;
        ">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17"/>
          </svg>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
      popupAnchor: [0, -24],
    });

    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

    const popupHtml = `
      <div style="font-family: system-ui, -apple-system, sans-serif; padding: 4px; color: #0f172a; min-width: 220px;">
        <h4 style="margin: 0 0 4px 0; color: #064e3b; font-size: 14px; font-weight: 700;">
          Astaan Khanaqah E Andrabia
        </h4>
        <p style="margin: 0 0 8px 0; font-size: 11px; color: #475569;">
          Sonwar Bagh, Srinagar, Jammu & Kashmir 190004
        </p>
        <a href="https://maps.app.goo.gl/S7vvmonAPykNBYRDA" 
           target="_blank" 
           rel="noopener noreferrer" 
           style="display: inline-flex; align-items: center; gap: 4px; background: #064e3b; color: #fde68a; text-decoration: none; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 600;">
          Open in Google Maps &rarr;
        </a>
      </div>
    `;

    marker.bindPopup(popupHtml);
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <section id="location" className="py-20 px-4 relative bg-emerald-950/20">
      <div className="max-w-7xl mx-auto">
        <ArchOrnamentHeader
          arabic="الموقع الجغرافي وسهولة الوصول"
          title="Geographic Setting & Transit Accessibility"
          subtitle="Situated in Sonwar Bagh, offering direct road connections between Dal Lake, the Old City, and transport terminals."
        />

        {/* Transit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
          {TRANSIT_ACCESS.map((transit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center">
                    {transitIcons[transit.iconName]}
                  </div>
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-gold-400/10 text-text-gold font-bold">
                    {transit.distance}
                  </span>
                </div>

                <h3 className="font-cormorant text-xl font-bold text-text-primary mb-1">
                  {transit.title}
                </h3>
                <div className="text-xs text-text-gold font-semibold mb-3">
                  Approx. {transit.travelTime}
                </div>
                <p className="font-manrope text-xs text-text-secondary leading-relaxed mb-4">
                  {transit.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gold-400/15 text-[11px] text-text-muted">
                <strong className="text-text-primary">Transit Advice:</strong> {transit.routeAdvice}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leaflet Map & Directions Panel */}
        <div className="glass-panel-elevated overflow-hidden p-3 md:p-4">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-gold-400/20">
            <div className="flex items-center gap-3">
              <MapIcon className="w-5 h-5 text-gold-400" />
              <div>
                <h4 className="font-cormorant text-lg font-bold text-text-primary">
                  Interactive Cartographic Viewer
                </h4>
                <p className="font-manrope text-xs text-text-muted">
                  Astaan Sonwar Coordinates: 34.0736° N, 74.8427° E
                </p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/S7vvmonAPykNBYRDA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-400 text-emerald-950 font-manrope font-bold text-xs hover:bg-gold-300 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open Astaan on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div
            ref={mapContainerRef}
            className="w-full h-[400px] md:h-[480px] rounded-xl z-10"
            style={{ background: '#0a3325' }}
          />
        </div>
      </div>
    </section>
  );
};
