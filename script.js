// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// theme
const tb=document.getElementById('themeBtn');
if(tb)tb.addEventListener('click',()=>{
  const d=document.documentElement.getAttribute('data-theme')==='dark';
  document.documentElement.setAttribute('data-theme',d?'light':'dark');
  tb.textContent=d?'☾':'☀';
});

// mobile menu
const bg=document.getElementById('burger'),mm=document.getElementById('mobileMenu');
if(bg)bg.addEventListener('click',()=>mm.classList.toggle('open'));

// ===== showroom (only on showroom page) =====
const grid=document.getElementById('showGrid');
if(grid){
  // 1) Bygg karusellkort automatiskt från carousels.js
  function carouselHTML(images){
    const imgs=images.map((s,i)=>{
      if(s.endsWith('.mp4')){
        return `<video src="${s}" controls style="width:100%; height:auto;" loading="lazy"></video>`;
      } else {
        return `<img src="${s}" alt="Slide ${i+1}" loading="lazy">`;
      }
    }).join('');
    return `<div class="carousel" data-carousel>
      <div class="track">${imgs}</div>
      <button class="nav prev" aria-label="Föregående">‹</button>
      <button class="nav next" aria-label="Nästa">›</button>
      <div class="cdots"></div>
    </div>`;
  }
  if(window.CAROUSELS){
    window.CAROUSELS.forEach(c=>{
      const fig=document.createElement('figure');
      fig.className='mock reveal'+(c.wide?' wide':'');
      fig.dataset.s=c.src; fig.dataset.p=c.platform;
      fig.style.margin='0';
      fig.innerHTML=carouselHTML(c.images)+
        `<div class="mclient">${c.client}</div><div class="mlabel">${c.label}</div>`;
      grid.appendChild(fig);
    });
  }

  // 2) Gör varje karusell interaktiv
  function initCarousel(root){
    const track=root.querySelector('.track');
    const slides=[...track.children];
    const dotsWrap=root.querySelector('.cdots');
    const prev=root.querySelector('.prev'), next=root.querySelector('.next');
    let idx=0;
    slides.forEach((_,i)=>{
      const d=document.createElement('span');
      if(i===0)d.classList.add('on');
      d.addEventListener('click',e=>{e.stopPropagation();go(i)});
      dotsWrap.appendChild(d);
    });
    const dots=[...dotsWrap.children];
    function go(i){
      idx=Math.max(0,Math.min(i,slides.length-1));
      track.style.transform=`translateX(-${idx*100}%)`;
      dots.forEach((d,j)=>d.classList.toggle('on',j===idx));
      prev.disabled=idx===0; next.disabled=idx===slides.length-1;
    }
    prev.addEventListener('click',e=>{e.stopPropagation();go(idx-1)});
    next.addEventListener('click',e=>{e.stopPropagation();go(idx+1)});
    // swipe på touch
    let x0=null;
    track.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});
    track.addEventListener('touchend',e=>{
      if(x0===null)return;
      const dx=e.changedTouches[0].clientX-x0;
      if(Math.abs(dx)>40)go(idx+(dx<0?1:-1));
      x0=null;
    });
    go(0);
  }
  document.querySelectorAll('[data-carousel]').forEach(initCarousel);

  // 3) Filter
  const mocks=document.querySelectorAll('.mock');
  let curSrc='alla',curPlat='alla';
  function apply(){
    mocks.forEach(m=>{
      const okS=curSrc==='alla'||m.dataset.s===curSrc;
      const okP=curPlat==='alla'||m.dataset.p===curPlat;
      m.classList.toggle('hide',!(okS&&okP));
    });
  }
  document.querySelectorAll('.filter[data-s]').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.filter[data-s]').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');curSrc=b.dataset.s;apply();
  }));
  document.querySelectorAll('.filter[data-p]').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.filter[data-p]').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');curPlat=b.dataset.p;apply();
  }));

  // reveal de nyskapade korten
  document.querySelectorAll('#showGrid .reveal').forEach(el=>{
    new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}}),{threshold:.12}).observe(el);
  });

  // 4) Lightbox – öppnar mockup/karusell förstorad
  const lb=document.getElementById('lightbox'),lbI=document.getElementById('lbInner');
  document.querySelectorAll('.mock').forEach(m=>m.addEventListener('click',e=>{
    if(e.target.closest('.nav')||e.target.closest('.cdots'))return; // klick på pilar/prickar bläddrar, öppnar inte
    const inner=m.querySelector('.dev,.reel,.carousel');
    lbI.innerHTML=inner.outerHTML;
    lb.classList.add('open');
    const c=lbI.querySelector('[data-carousel]');
    if(c)initCarousel(c);
  }));
  document.getElementById('lbClose').addEventListener('click',()=>lb.classList.remove('open'));
  lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('open')});
}

// ===== grafisk profil (only on profil page) =====
const pfTabs=document.getElementById('pfTabs');
if(pfTabs && window.PROFILES){
  const pfPanels=document.getElementById('pfPanels');
  function logoHTML(p){
    const inner = p.logo.type==='img'
      ? `<img src="${p.logo.src}" alt="${p.name} logotyp">`
      : `<span class="txt" style="color:${p.logo.color||'#fff'}">${p.logo.text}</span>`;
    return `<div class="pf-logo" style="background:${p.bg||'#222'}">${inner}</div>`;
  }
  function colorsHTML(p){
    const sw=p.colors.map(c=>`<div class="pf-sw"><div class="chip" style="background:${c.hex}"></div><div class="hex">${c.hex}</div><div class="nm">${c.name||''}</div></div>`).join('');
    return `<div class="pf-card"><div class="lbl">Färgpalett</div><div class="pf-swatches">${sw}</div></div>`;
  }
  function fontsHTML(p){
    const f=p.fonts.map((ft,i)=>{
      const st=[];
      if(ft.css)st.push('font-family:'+ft.css);
      if(ft.italic)st.push('font-style:italic');
      if(ft.weight)st.push('font-weight:'+ft.weight);
      return `<div class="pf-font ${i>0?'sans':''}"><div class="role">${ft.name} · ${ft.role}</div><div class="sample" style="${st.join(';')}">${ft.sample}</div></div>`;
    }).join('');
    return `<div class="pf-card"><div class="lbl">Typografi</div>${f}</div>`;
  }
  window.PROFILES.forEach((p,i)=>{
    const tab=document.createElement('button');
    tab.className='pf-tab'+(i===0?' active':'');
    tab.textContent=p.name;
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.pf-tab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.pf-panel').forEach(t=>t.classList.remove('show'));
      tab.classList.add('active');
      document.getElementById('pf-'+i).classList.add('show');
    });
    pfTabs.appendChild(tab);

    const panel=document.createElement('div');
    panel.className='pf-panel'+(i===0?' show':'');
    panel.id='pf-'+i;
    panel.innerHTML=`<div class="pf-head"><h2>${p.name}</h2><p>${p.tagline||''}</p></div>
      <div class="pf-grid">${logoHTML(p)}${colorsHTML(p)}${fontsHTML(p)}</div>`;
    pfPanels.appendChild(panel);
  });
}

// ===== verktyg (only on om page) =====
const toolsWrap=document.getElementById('toolsWrap');
if(toolsWrap && window.TOOLS){
  window.TOOLS.forEach(group=>{
    const tg=document.createElement('div');
    tg.className='tg reveal';
    tg.innerHTML=`<h3>${group.group}</h3><div class="chips"></div>`;
    const chipsWrap=tg.querySelector('.chips');
    group.items.forEach(it=>{
      const chip=document.createElement('span');
      chip.className='chip';
      chip.dataset.name=it.name;
      // alltid synlig grund: initial-cirkel
      const initial=it.name.replace(/[^A-Za-zÅÄÖåäö0-9]/g,'').charAt(0).toUpperCase();
      chip.innerHTML=`<span class="ini">${initial}</span>`;
      // försök lägga riktig logga ovanpå
      if(it.icon){
        const img=new Image();
        img.src=`https://cdn.simpleicons.org/${it.icon}`;
        img.alt=it.name;
        img.onload=()=>{ chip.innerHTML=''; chip.appendChild(img); chip.classList.add('has-logo'); };
        // misslyckas → behåll initialen (gör inget)
      }
      chipsWrap.appendChild(chip);
    });
    toolsWrap.appendChild(tg);
  });
  document.querySelectorAll('#toolsWrap .reveal').forEach(el=>{
    new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}}),{threshold:.12}).observe(el);
  });
}