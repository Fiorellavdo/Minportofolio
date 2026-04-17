// ════════════════════════════════════════════════
//  LÄGG TILL DINA BILDER HÄR
//  Format: { src: "images/MAPP/filnamn.jpg", alt: "Beskrivning" }
// ════════════════════════════════════════════════

const BILDER = {

  vai: [
    { src: "images/vai/3.png", alt: "VAI design" },
    { src: "images/vai/4.png", alt: "VAI kampanj" },
    { src: "images/vai/Namnlös design.png", alt: "VAI design" },
    { src: "images/vai/Tonalitet.png", alt: "VAI tonalitet" },
  ],

  evity: [
    { src: "images/evity/1.png", alt: "Evity projekt" },
    { src: "images/evity/16.png", alt: "Evity innehål" },
    { src: "images/evity/17.png", alt: "Evity design" },
    { src: "images/evity/2.png", alt: "Evity kampanj" },
    { src: "images/evity/3.png", alt: "Evity grafik" },
    { src: "images/evity/4.png", alt: "Evity inlägg" },
    { src: "images/evity/5 (1).png", alt: "Evity material" },
    { src: "images/evity/6.png", alt: "Evity layout" },
    { src: "images/evity/Evity Grafisk Profil.png", alt: "Evity grafisk profil" },
  ],

  silva: [
    { src: "images/silva/1.png", alt: "Primus-Silva kampanj" },
    { src: "images/silva/1 2.png", alt: "Primus-Silva design" },
    { src: "images/silva/2.png", alt: "Primus-Silva annons" },
    { src: "images/silva/2 2.png", alt: "Primus-Silva material" },
    { src: "images/silva/3.png", alt: "Primus-Silva grafik" },
    { src: "images/silva/3 2.png", alt: "Primus-Silva layout" },
    { src: "images/silva/4.png", alt: "Primus-Silva inlägg" },
    { src: "images/silva/5.png", alt: "Primus-Silva design" },
    { src: "images/silva/6.png", alt: "Primus-Silva innehål" },
    { src: "images/silva/7.png", alt: "Primus-Silva banner" },
    { src: "images/silva/10.png", alt: "Primus-Silva kampanj" },
    { src: "images/silva/20.png", alt: "Primus-Silva material" },
    { src: "images/silva/30.png", alt: "Primus-Silva design" },
    { src: "images/silva/40.png", alt: "Primus-Silva annons" },
    { src: "images/silva/50.png", alt: "Primus-Silva grafik" },
    { src: "images/silva/60.png", alt: "Primus-Silva inlägg" },
    { src: "images/silva/Helga- Fio- Anton- Oliver  flow NY.png", alt: "Primus-Silva flow" },
  ],

  ihm: [
    { src: "images/ihm/4x5 boka hos oss.png", alt: "IHM kampanj 4x5" },
    { src: "images/ihm/4x5 skapa minnen.png", alt: "IHM design 4x5" },
    { src: "images/ihm/9x16 boka hos oss.png", alt: "IHM kampanj 9x16" },
    { src: "images/ihm/9x16 skapa minnen.png", alt: "IHM design 9x16" },
    { src: "images/ihm/Favoritbild - byte av font och copy.jpg", alt: "IHM favoritbild" },
    { src: "images/ihm/Linkedin recension.png", alt: "LinkedIn recension" },
    { src: "images/ihm/Marknadsplan - US.jpg", alt: "Marknadsplan" },
    { src: "images/ihm/Marknadsplan - US (1).jpg", alt: "Marknadsplan variant" },
    { src: "images/ihm/Marknadsplan - US (2).png", alt: "Marknadsplan design" },
  ],

  eget: [
    { src: "images/eget/Jobba med det som betyder något.png", alt: "Eget projekt" },
    { src: "images/eget/Lägg till lite brödtext (1).png", alt: "Eget design" },
  ],

};

// ════════════════════════════════════════════════
//  KARUSELLER – flera bilder i en slideshow
//  Lägg till en lista med bilder per karusell
// ════════════════════════════════════════════════

const KARUSELLER = {

  vai: [
    // Exempel: en karusell med tre bilder
    // [
    //   { src: "images/vai/slide1.jpg", alt: "Bild 1" },
    //   { src: "images/vai/slide2.jpg", alt: "Bild 2" },
    //   { src: "images/vai/slide3.jpg", alt: "Bild 3" },
    // ],
  ],

  evity: [],
  silva: [],
  ihm:   [],
  eget:  [],

};

// ════════════════════════════════════════════════
//  VIDEOS
//  Format: { src: "images/MAPP/video.mp4", label: "Beskrivning" }
// ════════════════════════════════════════════════

const VIDEOS = {

  vai:   [],
  
  evity: [],
  
  silva: [
    { src: "images/silva/Copy1.mp4", label: "Silva video" },
    { src: "images/silva/Copy 2.mp4", label: "Silva kampanj" },
    { src: "images/silva/Copy 3.mp4", label: "Silva material" },
    { src: "images/silva/Helga & Fio Kampanjen.mp4", label: "Helga & Fio kampanj" },
  ],
  
  ihm: [
    { src: "images/ihm/Målgrupp, Utveckla tonalitetbranding Content Calendar Content - bild Content - rörligt Copy Koncept för e-mail marketing.mp4", label: "IHM e-postmarknadsföring" },
  ],
  
  eget:  [],

};


// ════════════════════════════════════════════════
//  RÖRA INTE NEDANFÖR – det är koden som kör allt
// ════════════════════════════════════════════════

function showPage(name, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

function loadProfile(inp) {
  const file = inp.files[0]; if (!file) return;
  const r = new FileReader();
  r.onload = e => {
    const c = document.getElementById('profile-circle');
    c.innerHTML = '<img src="' + e.target.result + '" alt="Profilfoto">';
    c.onclick = null;
  };
  r.readAsDataURL(file);
}

function openLbx(src) {
  document.getElementById('lbx-img').src = src;
  document.getElementById('lbx').classList.add('open');
}
function closeLbx() { document.getElementById('lbx').classList.remove('open'); }

function showSection(sectionId, btnEl) {
  // Hide all sections
  document.querySelectorAll('[data-section]').forEach(sec => {
    sec.classList.remove('active');
  });
  
  // Remove active class from all buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show selected section
  const section = document.querySelector(`[data-section="${sectionId}"]`);
  if (section) {
    section.classList.add('active');
  }
  
  // Activate button
  if (btnEl) {
    btnEl.classList.add('active');
  }
}

function readFile(file) {
  return new Promise(res => {
    const r = new FileReader(); r.onload = e => res(e.target.result); r.readAsDataURL(file);
  });
}

// Render static images from BILDER object
function renderStaticContent() {
  const sections = ['vai', 'evity', 'silva', 'ihm', 'eget'];
  sections.forEach(id => {
    const grid = document.getElementById('grid-' + id);
    if (!grid) return;

    // For Evity, keep stats at top
    if (id === 'evity') {
      const statsRow = grid.querySelector('.evity-stats-row');
      if (statsRow) {
        // Keep stats, will add carousel after
      }
    }

    const images = BILDER[id] || [];
    if (images.length > 0) {
      // Create carousel container
      let currentIndex = 0;
      const container = document.createElement('div');
      container.className = 'carousel-container';
      
      const img = document.createElement('img');
      img.src = images[0].src;
      img.alt = images[0].alt;
      img.style.cursor = 'zoom-in';
      img.onclick = () => openLbx(images[currentIndex].src);
      container.appendChild(img);
      grid.appendChild(container);

      // Create navigation controls
      const nav = document.createElement('div');
      nav.className = 'carousel-nav';
      
      const prevBtn = document.createElement('button');
      prevBtn.className = 'carousel-arrow';
      prevBtn.textContent = '←';
      prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        img.src = images[currentIndex].src;
        img.alt = images[currentIndex].alt;
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
      };
      
      const counter = document.createElement('span');
      counter.className = 'carousel-counter';
      counter.textContent = `1 / ${images.length}`;
      
      const nextBtn = document.createElement('button');
      nextBtn.className = 'carousel-arrow';
      nextBtn.textContent = '→';
      nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        img.src = images[currentIndex].src;
        img.alt = images[currentIndex].alt;
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
      };
      
      nav.appendChild(prevBtn);
      nav.appendChild(counter);
      nav.appendChild(nextBtn);
      grid.appendChild(nav);
    }

    // Carousels (existing code)
    (KARUSELLER[id] || []).forEach(slides => {
      if (!slides.length) return;
      let idx = 0;
      const wrap = document.createElement('div');
      wrap.className = 'carousel-wrap';
      const outer = document.createElement('div');
      outer.className = 'carousel-track-outer';
      const track = document.createElement('div');
      track.className = 'carousel-track';
      slides.forEach(({ src, alt }) => {
        const img = document.createElement('img');
        img.src = src; img.alt = alt;
        img.onclick = () => openLbx(src);
        img.style.cursor = 'zoom-in';
        track.appendChild(img);
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
      nav.appendChild(prev); nav.appendChild(counter); nav.appendChild(next);
      wrap.appendChild(outer); wrap.appendChild(nav);
      grid.appendChild(wrap);
    });

    // Videos
    (VIDEOS[id] || []).forEach(({ src, label }) => {
      const wrap = document.createElement('div');
      wrap.className = 'vid-item';
      wrap.innerHTML = `<video src="${src}" controls preload="metadata"></video>`;
      if (label) {
        const lbl = document.createElement('div');
        lbl.style.cssText = 'padding:0.5rem 1rem;font-size:0.78rem;color:var(--muted);background:white;';
        lbl.textContent = label;
        wrap.appendChild(lbl);
      }
      grid.appendChild(wrap);
    });
  });
}

// Upload functions (for testing locally)
async function addImages(id, inp) {
  const grid = document.getElementById('grid-' + id);
  for (const file of Array.from(inp.files)) {
    const src = await readFile(file);
    const item = document.createElement('div');
    item.className = 'gal-item';
    item.style.position = 'relative';
    item.innerHTML = `<img src="${src}" alt="" style="width:100%;height:100%;object-fit:cover;display:block;" onclick="openLbx('${src}')">
      <button class="rm-btn" onclick="this.parentElement.remove()">&#x2715;</button>`;
    grid.appendChild(item);
  }
  inp.value = '';
}

async function addCarousel(id, inp) {
  const files = Array.from(inp.files); if (!files.length) return;
  const srcs = await Promise.all(files.map(readFile));
  const grid = document.getElementById('grid-' + id);
  let idx = 0;
  const wrap = document.createElement('div'); wrap.className = 'carousel-wrap';
  const outer = document.createElement('div'); outer.className = 'carousel-track-outer';
  const track = document.createElement('div'); track.className = 'carousel-track';
  srcs.forEach(src => {
    const img = document.createElement('img');
    img.src = src; img.onclick = () => openLbx(src); img.style.cursor = 'zoom-in';
    track.appendChild(img);
  });
  outer.appendChild(track);
  const nav = document.createElement('div'); nav.className = 'carousel-nav';
  const prev = document.createElement('button'); prev.className = 'car-arrow'; prev.textContent = '←';
  const counter = document.createElement('span'); counter.className = 'car-counter';
  const next = document.createElement('button'); next.className = 'car-arrow'; next.textContent = '→';
  const rm = document.createElement('button'); rm.className = 'car-rm'; rm.textContent = 'Ta bort karusell';
  function update() { track.style.transform = `translateX(-${idx * 100}%)`; counter.textContent = `${idx+1} / ${srcs.length}`; }
  prev.onclick = () => { idx = (idx - 1 + srcs.length) % srcs.length; update(); };
  next.onclick = () => { idx = (idx + 1) % srcs.length; update(); };
  rm.onclick = () => wrap.remove();
  update();
  nav.appendChild(prev); nav.appendChild(counter); nav.appendChild(next); nav.appendChild(rm);
  wrap.appendChild(outer); wrap.appendChild(nav);
  grid.appendChild(wrap);
  inp.value = '';
}

async function addVideo(id, inp) {
  const file = inp.files[0]; if (!file) return;
  const src = await readFile(file);
  const grid = document.getElementById('grid-' + id);
  const wrap = document.createElement('div'); wrap.className = 'vid-item';
  const vid = document.createElement('video');
  vid.src = src; vid.controls = true; vid.preload = 'metadata';
  const rm = document.createElement('button'); rm.className = 'vid-rm'; rm.textContent = 'Ta bort';
  rm.onclick = () => wrap.remove();
  wrap.appendChild(vid); wrap.appendChild(rm);
  grid.appendChild(wrap);
  inp.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  renderStaticContent();
  
  // Initialize first section as active
  const firstSection = document.querySelector('[data-section="vai"]');
  if (firstSection) {
    firstSection.classList.add('active');
  }
});
