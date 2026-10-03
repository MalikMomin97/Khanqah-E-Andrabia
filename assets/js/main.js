/* ==========================================================================
   Khanaqah E Andrabia - Informative Heritage Portal Scripts
   Theme Engine • Srinagar Clock • Interactive Leaflet Map • Archive Lightbox
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Theme Engine (Dark / Light Mode with Persistence)
  // ==========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('noor-theme') || 'dark';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('noor-theme', theme);
    if (themeToggleBtn) {
      if (theme === 'dark') {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggleBtn.setAttribute('title', 'Switch to Subh (Light) Mode');
      } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggleBtn.setAttribute('title', 'Switch to Layl (Dark) Mode');
      }
    }
  }

  setTheme(storedTheme);

  themeToggleBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });


  // ==========================================================================
  // 2. Live Srinagar Clock & Date
  // ==========================================================================
  function updateSrinagarClock() {
    const timeElem = document.getElementById('srinagar-time');
    const dateElem = document.getElementById('srinagar-date');
    if (!timeElem && !dateElem) return;

    const now = new Date();
    const optionsTime = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const optionsDate = {
      timeZone: 'Asia/Kolkata',
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    };

    if (timeElem) timeElem.textContent = now.toLocaleTimeString('en-US', optionsTime) + ' IST';
    if (dateElem) dateElem.textContent = now.toLocaleDateString('en-US', optionsDate);
  }

  setInterval(updateSrinagarClock, 1000);
  updateSrinagarClock();


  // ==========================================================================
  // 3. Hero Background Image Rotation
  // ==========================================================================
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 6000);
  }


  // ==========================================================================
  // 4. Interactive Leaflet Map
  // ==========================================================================
  const mapElement = document.getElementById('map');
  if (mapElement && typeof L !== 'undefined') {
    const lat = 34.0817;
    const lng = 74.8248;

    const map = L.map('map', {
      center: [lat, lng],
      zoom: 15,
      zoomControl: true,
      scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);

    const goldIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div style="
          width: 40px;
          height: 40px;
          background: radial-gradient(circle, #0e4b37 0%, #03140e 100%);
          border: 2px solid #d4af37;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fde68a;
          box-shadow: 0 0 18px rgba(212, 175, 55, 0.7);
          cursor: pointer;
        ">
          <i class="fas fa-mosque" style="font-size: 16px;"></i>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -22]
    });

    const marker = L.marker([lat, lng], { icon: goldIcon }).addTo(map);
    const popupContent = `
      <div style="padding: 6px; font-family: 'Plus Jakarta Sans', sans-serif; color: #0f172a; max-width: 240px;">
        <h4 style="font-family: 'Cinzel', serif; margin: 0 0 4px 0; color: #064e3b; font-size: 14px; font-weight: 700;">
          Khanaqah E Andrabia
        </h4>
        <p style="margin: 0 0 8px 0; font-size: 12px; color: #475569; line-height: 1.4;">
          Sonwar Bagh, Srinagar, Jammu & Kashmir 190004
        </p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=34.0817,74.8248" 
           target="_blank" 
           rel="noopener noreferrer" 
           style="display: inline-block; background: #064e3b; color: #fde68a; text-decoration: none; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: 600;">
          Get Directions &rarr;
        </a>
      </div>
    `;
    marker.bindPopup(popupContent);
  }


  // ==========================================================================
  // 5. Copy Coordinates Utility
  // ==========================================================================
  const copyBtn = document.getElementById('copy-coords-btn');
  copyBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText('34.0817° N, 74.8248° E').then(() => {
      const orig = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied to Clipboard';
      setTimeout(() => { copyBtn.innerHTML = orig; }, 2000);
    });
  });


  // ==========================================================================
  // 6. Photographic Archive Lightbox Modal
  // ==========================================================================
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-item-title')?.textContent || '';
      const sub = item.querySelector('.gallery-item-sub')?.textContent || '';
      if (lightboxModal && lightboxImg && img) {
        lightboxImg.src = img.src;
        if (lightboxCaption) lightboxCaption.textContent = `${title} — ${sub}`;
        lightboxModal.classList.add('active');
      }
    });
  });

  lightboxClose?.addEventListener('click', () => {
    lightboxModal?.classList.remove('active');
  });

  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) lightboxModal.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal?.classList.contains('active')) {
      lightboxModal.classList.remove('active');
    }
  });
});
