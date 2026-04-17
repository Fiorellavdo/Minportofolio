// ── Page navigation ──────────────────────────────────────
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

// ── Lightbox ─────────────────────────────────────────────
function openLbx(src) {
  document.getElementById('lbx-img').src = src;
  document.getElementById('lbx').classList.add('open');
}
function closeLbx() { document.getElementById('lbx').classList.remove('open'); }

// ── Read file as data URL ─────────────────────────────────
function readFile(file) {
  return new Promise(res => {
    const r = new FileReader();
    r.onload = e => res(e.target.result);
    r.readAsDataURL(file);
  });
}

// ── Add single images ─────────────────────────────────────
async function addImages(id, inp) {
  const grid = document.getElementById('grid-' + id);
  const toolbar = grid.previousElementSibling;
  for (const file of Array.from(inp.files)) {
    const src = await readFile(file);
    const item = document.createElement('div');
    item.className = 'gal-item';
    item.style.position = 'relative';
    item.innerHTML =
      '<img src="' + src + '" alt="" style="width:100%;height:100%;object-fit:cover;display:block;" onclick="openLbx(\'' + src + '\')">' +
      '<button class="rm-btn" onclick="this.parentElement.remove()">&#x2715;</button>';
    grid.appendChild(item);
  }
  inp.value = '';
}

// ── Add carousel ──────────────────────────────────────────
async function addCarousel(id, inp) {
  const files = Array.from(inp.files);
  if (!files.length) return;
  const srcs = await Promise.all(files.map(readFile));
  const grid = document.getElementById('grid-' + id);
  let idx = 0;

  const wrap = document.createElement('div');
  wrap.className = 'carousel-wrap';

  const outer = document.createElement('div');
  outer.className = 'carousel-track-outer';
  const track = document.createElement('div');
  track.className = 'carousel-track';
  srcs.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
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
  const rm = document.createElement('button');
  rm.className = 'car-rm'; rm.textContent = 'Ta bort karusell';

  function update() {
    track.style.transform = 'translateX(-' + (idx * 100) + '%)';
    counter.textContent = (idx + 1) + ' / ' + srcs.length;
  }
  prev.onclick = () => { idx = (idx - 1 + srcs.length) % srcs.length; update(); };
  next.onclick = () => { idx = (idx + 1) % srcs.length; update(); };
  rm.onclick = () => wrap.remove();
  update();

  nav.appendChild(prev);
  nav.appendChild(counter);
  nav.appendChild(next);
  nav.appendChild(rm);
  wrap.appendChild(outer);
  wrap.appendChild(nav);
  grid.appendChild(wrap);
  inp.value = '';
}

// ── Add video ─────────────────────────────────────────────
async function addVideo(id, inp) {
  const file = inp.files[0]; if (!file) return;
  const src = await readFile(file);
  const grid = document.getElementById('grid-' + id);

  const wrap = document.createElement('div');
  wrap.className = 'vid-item';

  const vid = document.createElement('video');
  vid.src = src; vid.controls = true; vid.preload = 'metadata';

  const rm = document.createElement('button');
  rm.className = 'vid-rm'; rm.textContent = 'Ta bort';
  rm.onclick = () => wrap.remove();

  wrap.appendChild(vid);
  wrap.appendChild(rm);
  grid.appendChild(wrap);
  inp.value = '';
}