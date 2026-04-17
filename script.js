// ════════════════════════════════════════════════
//  PROFILFOTO
//  Lägg bilden i images/ och skriv filnamnet
// ════════════════════════════════════════════════

const PROFILFOTO = ""; // ex: "images/profil.jpg"


// ════════════════════════════════════════════════
//  BILDER
//  { src: "images/MAPP/filnamn.jpg", alt: "Beskrivning" }
// ════════════════════════════════════════════════

// ════════════════════════════════════════════════
//  KARUSELLER – bilder & videos tillsammans
//  type: 'image' eller 'video'
// ════════════════════════════════════════════════

const KARUSELLER = {
  vai:   [
    [
      { type: 'image', src: "images/vai/3.png", alt: "VAI Marketing" },
      { type: 'image', src: "images/vai/4.png", alt: "VAI Marketing" },
      { type: 'image', src: "images/vai/Namnlös design.png", alt: "VAI Design" },
      { type: 'image', src: "images/vai/Tonalitet.png", alt: "VAI Tonalitet" },
    ]
  ],
  evity: [
    [
      { type: 'image', src: "images/evity/1.png", alt: "Evity" },
      { type: 'image', src: "images/evity/2.png", alt: "Evity" },
      { type: 'image', src: "images/evity/3.png", alt: "Evity" },
      { type: 'image', src: "images/evity/4.png", alt: "Evity" },
      { type: 'image', src: "images/evity/5 (1).png", alt: "Evity" },
      { type: 'image', src: "images/evity/6.png", alt: "Evity" },
      { type: 'image', src: "images/evity/16.png", alt: "Evity" },
      { type: 'image', src: "images/evity/17.png", alt: "Evity" },
      { type: 'image', src: "images/evity/Evity Grafisk Profil.png", alt: "Evity Grafisk Profil" },
    ]
  ],
  silva: [
    [
      { type: 'image', src: "images/silva/1.png", alt: "Silva" },
      { type: 'image', src: "images/silva/2.png", alt: "Silva" },
      { type: 'image', src: "images/silva/3.png", alt: "Silva" },
      { type: 'image', src: "images/silva/4.png", alt: "Silva" },
      { type: 'image', src: "images/silva/5.png", alt: "Silva" },
      { type: 'image', src: "images/silva/6.png", alt: "Silva" },
      { type: 'image', src: "images/silva/7.png", alt: "Silva" },
      { type: 'image', src: "images/silva/10.png", alt: "Silva" },
      { type: 'image', src: "images/silva/20.png", alt: "Silva" },
      { type: 'image', src: "images/silva/30.png", alt: "Silva" },
      { type: 'image', src: "images/silva/40.png", alt: "Silva" },
      { type: 'image', src: "images/silva/50.png", alt: "Silva" },
      { type: 'image', src: "images/silva/60.png", alt: "Silva" },
      { type: 'image', src: "images/silva/1 2.png", alt: "Silva" },
      { type: 'image', src: "images/silva/2 2.png", alt: "Silva" },
      { type: 'image', src: "images/silva/3 2.png", alt: "Silva" },
      { type: 'image', src: "images/silva/Helga- Fio- Anton- Oliver  flow NY.png", alt: "Silva Flow" },
      { type: 'video', src: "images/silva/Copy 2.mp4", label: "Silva Kampanj" },
      { type: 'video', src: "images/silva/Copy 3.mp4", label: "Silva Kampanj" },
      { type: 'video', src: "images/silva/Copy1.mp4", label: "Silva Kampanj" },
      { type: 'video', src: "images/silva/Helga & Fio Kampanjen.mp4", label: "Helga & Fio Kampanjen" },
    ]
  ],
  ihm:   [
    [
      { type: 'image', src: "images/ihm/4x5 boka hos oss.png", alt: "IHM Social Media" },
      { type: 'image', src: "images/ihm/4x5 skapa minnen.png", alt: "IHM Social Media" },
      { type: 'image', src: "images/ihm/9x16 boka hos oss.png", alt: "IHM Social Media" },
      { type: 'image', src: "images/ihm/9x16 skapa minnen.png", alt: "IHM Social Media" },
      { type: 'image', src: "images/ihm/Favoritbild - byte av font och copy.jpg", alt: "IHM Favoritbild" },
      { type: 'image', src: "images/ihm/Linkedin recension.png", alt: "LinkedIn Recension" },
      { type: 'image', src: "images/ihm/Marknadsplan - US.jpg", alt: "Marknadsplan" },
      { type: 'image', src: "images/ihm/Marknadsplan - US (1).jpg", alt: "Marknadsplan" },
      { type: 'image', src: "images/ihm/Marknadsplan - US (2).png", alt: "Marknadsplan" },
      { type: 'video', src: "images/ihm/Målgrupp, Utveckla tonalitetbranding Content Calendar Content - bild Content - rörligt Copy Koncept för e-mail marketing.mp4", label: "E-mail Marketing Koncept" },
    ]
  ],
  eget:  [
    [
      { type: 'image', src: "images/eget/Jobba med det som betyder något.png", alt: "Eget Projekt" },
      { type: 'image', src: "images/eget/Lägg till lite brödtext (1).png", alt: "Eget Projekt" },
    ]
  ],
};


// ════════════════════════════════════════════════
//  RÖRA INTE NEDANFÖR
// ════════════════════════════════════════════════

function showPage(name, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

function openLbx(src) {
  document.getElementById('lbx-img').src = src;
  document.getElementById('lbx').classList.add('open');
}
function closeLbx() { document.getElementById('lbx').classList.remove('open'); }

function buildCarousel(slides) {
  let idx = 0;
  const wrap = document.createElement('div');
  wrap.className = 'carousel-wrap';
  const outer = document.createElement('div');
  outer.className = 'carousel-track-outer';
  const track = document.createElement('div');
  track.className = 'carousel-track';
  
  slides.forEach(({ type, src, alt, label }) => {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    
    if (type === 'image') {
      const img = document.createElement('img');
      img.src = src;
      img.alt = alt || '';
      img.onclick = () => openLbx(src);
      item.appendChild(img);
    } else if (type === 'video') {
      const video = document.createElement('video');
      video.controls = true;
      video.preload = 'metadata';
      video.style.width = '100%';
      video.style.height = '100%';
      
      const source = document.createElement('source');
      source.src = src;
      source.type = 'video/mp4';
      video.appendChild(source);
      
      item.appendChild(video);
      if (label) {
        const lbl = document.createElement('div');
        lbl.className = 'vid-label';
        lbl.textContent = label;
        item.appendChild(lbl);
      }
    }
    
    track.appendChild(item);
  });
  
  outer.appendChild(track);
  const nav = document.createElement('div');
  nav.className = 'carousel-nav';
  const prev = document.createElement('button');
  prev.className = 'car-arrow'; prev.textContent = '←';
  const counter = document.createElement('span');
  counter.className = 'car-counter';
  const next = document.createElement('button');
  next.className = 'car-arrow'; next.textContent = '→';
  
  function update() {
    track.style.transform = `translateX(-${idx * 100}%)`;
    counter.textContent = `${idx + 1} / ${slides.length}`;
  }
  
  prev.onclick = () => { idx = (idx - 1 + slides.length) % slides.length; update(); };
  next.onclick = () => { idx = (idx + 1) % slides.length; update(); };
  update();
  nav.append(prev, counter, next);
  wrap.append(outer, nav);
  return wrap;
}

function renderContent() {
  if (PROFILFOTO) {
    const c = document.getElementById('profile-circle');
    if (c) c.innerHTML = `<img src="${PROFILFOTO}" alt="Profilfoto">`;
  }

  ['vai','evity','silva','ihm','eget'].forEach(id => {
    const grid = document.getElementById('grid-' + id);
    if (!grid) return;

    (KARUSELLER[id] || []).forEach(slides => {
      if (slides && slides.length) grid.appendChild(buildCarousel(slides));
    });
  });
}

document.addEventListener('DOMContentLoaded', renderContent);
