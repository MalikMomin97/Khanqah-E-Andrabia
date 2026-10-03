import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, ExternalLink, Copy, Check, Plane, Train, Compass, Clock, Building2 } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ArchOrnamentHeader } from '../IslamicArt/ArchFrame';
import { RubElHizb } from '../IslamicArt/RubElHizb';
import { ArabesquePattern } from '../IslamicArt/ArabesquePattern';
import { AllahCrest } from '../IslamicArt/AllahCrest';
import { ASTAAN_INFO } from '../../data/astaanData';
import { TRANSIT_ACCESS } from '../../data/heritageData';

const transitIcons: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-5 h-5 text-[#d59b35]" />,
  Train: <Train className="w-5 h-5 text-[#549e8d]" />,
  MapPin: <Compass className="w-5 h-5 text-[#d59b35]" />
};

export const LocationSection: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(ASTAAN_INFO.coordinates).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const lat = ASTAAN_INFO.lat;
    const lng = ASTAAN_INFO.lng;

    const map = L.map(mapContainerRef.current, {
      center: [lat, lng],
      zoom: 16,
      scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(map);

    const customIcon = L.divIcon({
      className: 'shaha-leaflet-marker',
      html: `
        <div style="
          width: 44px;
          height: 44px;
          background: radial-gradient(circle, #1e1914 0%, #14110e 100%);
          border: 2px solid #d59b35;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d59b35;
          box-shadow: 0 0 18px rgba(213, 155, 53, 0.7);
          cursor: pointer;
        ">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d59b35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17"/>
          </svg>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
      popupAnchor: [0, -24]
    });

    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

    const popupHtml = `
      <div style="font-family: system-ui, -apple-system, sans-serif; padding: 4px; color: #1c1814; min-width: 210px;">
        <h4 style="margin: 0 0 4px 0; color: #a26d1a; font-size: 14px; font-weight: 700; text-transform: uppercase;">
          Khanqah-e-Andrabia
        </h4>
        <p style="margin: 0 0 6px 0; font-size: 11px; color: #4a433c;">
          Sonwar Bagh, Srinagar, Jammu & Kashmir 190004
        </p>
        <div style="font-size: 10px; color: #78716c; margin-bottom: 8px;">
          Coordinates: 34.0736° N, 74.8427° E
        </div>
        <a href="${ASTAAN_INFO.googleMapsUrl}" 
           target="_blank" 
           rel="noopener noreferrer" 
           style="display: inline-flex; align-items: center; gap: 4px; background: #d59b35; color: #ffffff; text-decoration: none; padding: 5px 12px; border-radius: 4px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
          Open in Maps &rarr;
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
    <section id="location" className="py-24 px-4 relative bg-[#14110e] border-t border-[#d59b35]/20">
      <ArabesquePattern opacity={0.035} className="absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ArchOrnamentHeader
          tag="Geographic Location & Route"
          arabic="الله"
          title="Sanctuary Location & Transit Access"
          subtitle="Exact geographic coordinates, interactive cartography, and transit access from Srinagar airport, railway station, and city centre."
        />

        {/* Shaha Signature Split Showcase: Info on Left, Leaflet on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden border border-[#d59b35]/30 shadow-2xl mb-14 bg-[#1f1a15]">
          {/* Information & Route Details */}
          <div className="lg:col-span-6 p-5 sm:p-8 lg:p-14 flex flex-col justify-between bg-gradient-to-br from-[#1e1914] to-[#161310] relative">
            <ArabesquePattern opacity={0.05} />
            <div className="relative z-10">
              <AllahCrest text="الله" size="md" className="items-start mb-3" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14110e] border border-[#d59b35]/30 text-xs font-mono text-[#f5cf7b] mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#d59b35]" />
                <span>{ASTAAN_INFO.coordinates}</span>
              </div>

              <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight mb-3">
                Khanqah-e-Andrabia Sonwar
              </h3>

              <p className="font-manrope text-sm sm:text-base text-[#d4cec7] leading-relaxed mb-6">
                The historic shrine of Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.) stands serenely in Sonwar Bagh, Srinagar. Positioned adjacent to Dalgate and reachable within minutes from Lal Chowk, the sanctuary offers tranquil contemplation at the heart of the valley.
              </p>

              {/* Address & Verified Registry Card */}
              <div className="space-y-3.5 p-4 sm:p-5 rounded-lg bg-[#14110e]/90 border border-[#d59b35]/25 text-xs sm:text-sm text-[#d4cec7] mb-8">
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#d59b35] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-xs uppercase tracking-wider mb-0.5">
                      Sanctuary Address:
                    </strong>
                    <span>{ASTAAN_INFO.addressEn}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#549e8d] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-xs uppercase tracking-wider mb-0.5">
                      Visiting & Sanctuary Hours:
                    </strong>
                    <span>Open daily from pre-dawn Fajr until Isha night prayers</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <RubElHizb size={15} className="text-[#d59b35] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold text-xs uppercase tracking-wider mb-0.5">
                      Archival Registry:
                    </strong>
                    <span>Indo-Islamic Archival Monograph Record #10504</span>
                  </div>
                </div>
              </div>

              {/* Shaha Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={ASTAAN_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shaha-gold"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyCoords}
                  className="btn-shaha-outline"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy GPS Coords'}</span>
                </button>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#d59b35]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400 relative z-10">
              <span>Sonwar Bagh, Srinagar, Kashmir 190004</span>
              <RubElHizb size={16} className="text-[#d59b35]" />
            </div>
          </div>

          {/* Interactive Leaflet Map on Right */}
          <div className="lg:col-span-6 flex flex-col bg-[#14110e] relative min-h-[380px] lg:min-h-[500px]">
            <div className="flex items-center justify-between p-4 bg-[#181512] border-b border-[#d59b35]/20 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#549e8d] animate-pulse" />
                <span className="font-mono text-xs text-[#d59b35] font-bold uppercase tracking-wider">
                  Live Cartographic Viewer
                </span>
              </div>
              <a
                href={ASTAAN_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#549e8d] hover:text-[#d59b35] font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Expand Live Route</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div
              ref={mapContainerRef}
              className="w-full flex-1 min-h-[350px] lg:min-h-[460px] z-10"
              style={{ background: '#14110e' }}
            />
          </div>
        </div>

        {/* 3 Transit Hub Connectivity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRANSIT_ACCESS.map((transit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-7 rounded-xl bg-[#1e1914] border border-[#d59b35]/20 hover:border-[#d59b35]/60 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[#14110e] border border-[#d59b35]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {transitIcons[transit.iconName] || <Compass className="w-5 h-5 text-[#d59b35]" />}
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#14110e] text-[#f5cf7b] border border-[#d59b35]/25 font-bold">
                    {transit.distance}
                  </span>
                </div>

                <h4 className="font-cormorant text-xl font-bold text-white uppercase tracking-tight mb-1 group-hover:text-[#d59b35] transition-colors">
                  {transit.title}
                </h4>

                <div className="text-xs text-[#549e8d] font-semibold mb-3 font-mono">
                  Approx. {transit.travelTime}
                </div>

                <p className="font-manrope text-xs sm:text-sm text-[#d4cec7] leading-relaxed mb-4">
                  {transit.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#d59b35]/15 text-[11px] text-[#9e958b]">
                <strong className="text-[#f5cf7b] font-semibold">Route Note:</strong> {transit.routeAdvice}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
