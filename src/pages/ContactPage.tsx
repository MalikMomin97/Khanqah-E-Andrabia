import React, { useEffect, useRef, useState } from 'react';
import { Navigation, ExternalLink, Copy, Check, Plane, Train, Compass, ShieldCheck, HeartHandshake, Eye, BookOpen, Clock, Building2 } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ArchOrnamentHeader } from '../components/IslamicArt/ArchFrame';
import { ArabesquePattern } from '../components/IslamicArt/ArabesquePattern';
import { AllahCrest } from '../components/IslamicArt/AllahCrest';
import { RubElHizb } from '../components/IslamicArt/RubElHizb';
import { TRANSIT_ACCESS, ETIQUETTE_GUIDELINES } from '../data/heritageData';
import { ASTAAN_INFO } from '../data/astaanData';

const transitIcons: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-5 h-5 text-[#d59b35]" />,
  Train: <Train className="w-5 h-5 text-[#549e8d]" />,
  MapPin: <Compass className="w-5 h-5 text-[#d59b35]" />
};

const etiquetteIcons = [
  <ShieldCheck className="w-5 h-5 text-[#d59b35]" />,
  <HeartHandshake className="w-5 h-5 text-[#549e8d]" />,
  <Eye className="w-5 h-5 text-[#d59b35]" />,
  <BookOpen className="w-5 h-5 text-[#549e8d]" />
];

export const ContactPage: React.FC = () => {
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
        <a href="${ASTAAN_INFO.googleMapsUrl}" 
           target="_blank" 
           rel="noopener noreferrer" 
           style="display: inline-flex; align-items: center; gap: 4px; background: #d59b35; color: #ffffff; text-decoration: none; padding: 5px 12px; border-radius: 4px; font-size: 11px; font-weight: 700; text-transform: uppercase;">
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
    <div className="py-14 px-4 max-w-7xl mx-auto">
      <ArchOrnamentHeader
        arabic="الله"
        tag="Visit & Custodial Information"
        title="Sanctuary Location & Visitor Guidance"
        subtitle="Geographic coordinates, interactive cartography, transit routes, and respectful sanctuary etiquette."
      />

      {/* Transit & Coordinates Bar */}
      <div className="my-8 p-5 sm:p-8 rounded-xl bg-[#1e1914] border border-[#d59b35]/30 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs text-[#d59b35] uppercase tracking-wider block font-bold mb-1">
            Astaan Geographic Address
          </span>
          <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
            {ASTAAN_INFO.addressEn}
          </h3>
          <span className="font-mono text-xs text-[#f5cf7b] flex items-center gap-1.5 mt-1">
            <Compass className="w-3.5 h-3.5 text-[#d59b35]" />
            Coordinates: {ASTAAN_INFO.coordinates}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={handleCopyCoords}
            className="btn-shaha-outline text-xs py-2 px-4"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Coordinates Copied' : 'Copy GPS'}</span>
          </button>
          <a
            href={ASTAAN_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shaha-gold text-xs py-2 px-4"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="my-12 rounded-xl overflow-hidden border border-[#d59b35]/30 shadow-2xl bg-[#14110e]">
        <div className="p-4 bg-[#181512] border-b border-[#d59b35]/20 flex items-center justify-between text-xs text-[#d4cec7]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#549e8d] animate-pulse" />
            <span className="font-mono font-bold text-[#d59b35] uppercase tracking-wider">
              Interactive Leaflet Map
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#9e958b]">
            Sonwar Bagh • Srinagar, Kashmir
          </span>
        </div>
        <div ref={mapContainerRef} className="w-full h-[450px]" />
      </div>

      {/* 3 Transit Routes Grid */}
      <div className="my-16">
        <div className="text-center mb-10">
          <span className="font-mono text-xs text-[#d59b35] uppercase tracking-widest font-bold block mb-1">
            Transit Access
          </span>
          <h2 className="font-cormorant text-3xl font-bold text-white uppercase tracking-tight">
            How to Reach Khanqah-e-Andrabia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRANSIT_ACCESS.map((transit, idx) => (
            <div
              key={idx}
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

                <h3 className="font-cormorant text-xl font-bold text-white uppercase tracking-tight mb-1 group-hover:text-[#d59b35] transition-colors">
                  {transit.title}
                </h3>

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
            </div>
          ))}
        </div>
      </div>

      {/* Sanctuary Decorum & Visitor Etiquette */}
      <div className="my-16">
        <div className="text-center mb-10">
          <span className="font-mono text-xs text-[#549e8d] uppercase tracking-widest font-bold block mb-1">
            Sacred Etiquette
          </span>
          <h2 className="font-cormorant text-3xl font-bold text-white uppercase tracking-tight">
            Sanctuary Decorum Guidelines
          </h2>
          <p className="font-manrope text-xs sm:text-sm text-[#9e958b] max-w-xl mx-auto mt-2">
            Visitors are kindly requested to observe traditional Islamic adab during their visit to maintain the sacred atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ETIQUETTE_GUIDELINES.map((item, idx) => (
            <div
              key={item.title}
              className="p-7 rounded-xl bg-[#1e1914] border border-[#d59b35]/20 hover:border-[#d59b35]/60 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[#14110e] border border-[#d59b35]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {etiquetteIcons[idx] || <ShieldCheck className="w-5 h-5 text-[#d59b35]" />}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#f5cf7b] px-2 py-0.5 rounded bg-[#14110e] border border-[#d59b35]/20">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-cormorant text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#d59b35] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="font-manrope text-xs text-[#d4cec7] leading-relaxed">
                  {item.text}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#d59b35]/15 text-[11px] text-[#d59b35] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <span>✦</span>
                <span>Sacred Decorum</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custodial Information & Archival Desk (No Form) */}
      <div className="p-5 sm:p-8 lg:p-12 rounded-xl bg-[#1e1914] border border-[#d59b35]/35 shadow-2xl max-w-4xl mx-auto relative overflow-hidden mb-12">
        <ArabesquePattern opacity={0.03} />
        <div className="relative z-10 text-center">
          <AllahCrest text="الله" size="md" className="mb-3" />
          
          <span className="font-mono text-xs uppercase tracking-widest text-[#d59b35] font-bold block mb-1">
            Custodial Administration
          </span>

          <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
            Sanctuary Custody & Academic Research
          </h3>

          <p className="font-manrope text-xs sm:text-sm text-[#d4cec7] max-w-2xl mx-auto leading-relaxed mb-8">
            Khanqah-e-Andrabia is administered with historical care and open daily to all visitors from Fajr until Isha prayers. Academic researchers investigating Islamic manuscripts, regional Kashmiri Sufi history, or the Andrabi Sayyid genealogy are warmly accommodated.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-manrope text-xs sm:text-sm text-[#d4cec7] mb-8">
            <div className="p-4 rounded-lg bg-[#14110e] border border-[#d59b35]/25 flex items-start gap-3">
              <Building2 className="w-5 h-5 text-[#d59b35] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold text-xs uppercase tracking-wider mb-0.5">Location</strong>
                <span>Sonwar Bagh, Srinagar 190004</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#14110e] border border-[#d59b35]/25 flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#549e8d] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold text-xs uppercase tracking-wider mb-0.5">Sanctuary Hours</strong>
                <span>Daily from Fajr to Isha</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#14110e] border border-[#d59b35]/25 flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-[#d59b35] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold text-xs uppercase tracking-wider mb-0.5">Archival Entity</strong>
                <span>Monograph Entity #10504</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#d59b35]/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#9e958b]">
            <span className="font-mono text-[#f5cf7b]">Wisal: 16 Jumada al-Awwal 1081 AH</span>
            <RubElHizb size={15} className="text-[#d59b35]/70" />
          </div>
        </div>
      </div>
    </div>
  );
};
