/* =====================================================================
   Portfolio – gemensam JavaScript
   Innehåll:
     1. Fade-in vid scroll
     2. Tema (ljust/mörkt) som sparas
     3. Mobilmeny
     4. Showroom (kort, karuseller, video, filter, lightbox)
     5. Grafisk profil (flikar)
     6. Verktyg (ikoner på Om mig)
   ===================================================================== */


/* ---------------------------------------------------------------------
   Hjälpfunktion: fade-in när ett element scrollas in i vyn
   --------------------------------------------------------------------- */
function revealOnScroll(elements) {
  const observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(function (element) {
    observer.observe(element);
  });
}

// Kör på alla element med klassen "reveal" som finns vid sidladdning
revealOnScroll(document.querySelectorAll('.reveal'));


/* ---------------------------------------------------------------------
   1. Tema – spara valet och behåll det på alla sidor
   --------------------------------------------------------------------- */
const themeButton = document.getElementById('themeBtn');

function applyTheme(mode) {
  document.documentElement.setAttribute('data-theme', mode);

  if (themeButton) {
    themeButton.textContent = (mode === 'dark') ? '☀' : '☾';
  }
}

// Läs in sparat tema direkt vid sidladdning (annars ljust)
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

if (themeButton) {
  themeButton.addEventListener('click', function () {
    const currentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextTheme = currentlyDark ? 'light' : 'dark';

    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
}


/* ---------------------------------------------------------------------
   2. Mobilmeny – öppna/stäng vid klick på hamburgaren
   --------------------------------------------------------------------- */
const burgerButton = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

if (burgerButton) {
  burgerButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
  });
}


/* ---------------------------------------------------------------------
   3. Showroom – byggs bara om sidan har containern #showSections
   --------------------------------------------------------------------- */
const showSections = document.getElementById('showSections');
const quickNav = document.getElementById('quickNav');

if (showSections) {
  /* --- Små hjälpfunktioner --- */

  // Avgör om en fil är en video
  function isVideoFile(path) {
    return /\.(mp4|webm|mov)$/i.test(path);
  }


  /* --- Bygg HTML för olika medietyper --- */

  function buildVideoHTML(path, eager) {
    const preload = eager ? 'auto' : 'metadata';

    return `
      <div class="media-video" data-video>
        <video src="${path}" preload="${preload}" playsinline></video>
        <button class="play-btn" aria-label="Spela">▶</button>
        <button class="mute-btn" type="button" aria-label="Ljud av">🔇</button>
      </div>`;
  }

  function buildSingleImageHTML(path, label, eager) {
    const loadingMode = eager ? 'eager' : 'lazy';
    const priority = eager ? 'high' : 'auto';

    return `
      <div class="media-single">
        <img src="${path}" alt="${label || ''}" loading="${loadingMode}" decoding="async" fetchpriority="${priority}">
      </div>`;
  }

  function buildCarouselHTML(images, eager) {
    const slides = images.map(function (path, index) {
      if (isVideoFile(path)) {
        return `<video src="${path}" preload="${eager ? 'auto' : 'metadata'}" playsinline></video>`;
      }
      return `<img src="${path}" alt="Slide ${index + 1}" loading="${eager ? 'eager' : 'lazy'}" decoding="async" fetchpriority="${eager ? 'high' : 'auto'}">`;
    }).join('');

    return `
      <div class="carousel" data-carousel>
        <div class="track">${slides}</div>
        <button class="nav prev" aria-label="Föregående">‹</button>
        <button class="nav next" aria-label="Nästa">›</button>
        <div class="cdots"></div>
      </div>`;
  }

  // Välj rätt media-HTML utifrån antal filer och typ
  function buildMediaHTML(item, eager) {
    const images = item.images;
    const isSingleFile = images.length === 1;

    if (isSingleFile && isVideoFile(images[0])) {
      return buildVideoHTML(images[0], eager);
    }
    if (isSingleFile) {
      return buildSingleImageHTML(images[0], item.label, eager);
    }
    return buildCarouselHTML(images, eager);
  }


  /* --- Skapa ett kort (figure) för ett innehållsobjekt --- */

  function buildCard(item) {
    const card = document.createElement('figure');

    const isCarousel = item.images.length > 1;
    const isVideo = item.images.length === 1 && isVideoFile(item.images[0]);

    const classNames = ['mock', 'reveal'];
    if (isCarousel) {
      classNames.push('is-carousel');
    }
    if (isVideo) {
      classNames.push('is-video');
    }

    card.className = classNames.join(' ');
    card.style.margin = '0';

    const caption = `
      <div class="mclient">${item.client}</div>
      <div class="mlabel">${item.label}</div>`;

    const mediaHTML = `<div class="mock-media">${buildMediaHTML(item, true)}</div>`;
    card.innerHTML = mediaHTML + caption;

    card.addEventListener('click', function (event) {
      const clickedControl =
        event.target.closest('.nav') ||
        event.target.closest('.cdots') ||
        event.target.closest('.play-btn') ||
        event.target.closest('.mute-btn') ||
        event.target.closest('video');

      if (clickedControl) {
        return;
      }

      openLightbox(card);
    });

    return card;
  }


  /* --- Bygg en hel kategori-sektion (rubrik + eget rutnät) --- */

  function buildCategorySection(category, items) {
    const section = document.createElement('section');
    section.className = 'cat-section';
    section.id = 'cat-' + category.key;

    const head = document.createElement('div');
    head.className = 'cat-head reveal';
    head.innerHTML = `
      <h2 class="cat-title">${category.label}</h2>
      <span class="cat-count">${items.length} st</span>`;

    const grid = document.createElement('div');
    grid.className = 'show-grid';

    items.forEach(function (item) {
      grid.appendChild(buildCard(item));
    });

    section.appendChild(head);
    section.appendChild(grid);
    return section;
  }

  // Bygg en sektion per kategori (i den ordning CATEGORIES anger),
  // och hoppa över kategorier som inte har något innehåll än.
  // Ingen kategori visas innan användaren väljer en.
  if (window.CAROUSELS && window.CATEGORIES) {
    const requestedKey = (window.location.hash || '').replace('#cat-', '');
    let selectedSection = null;
    let selectedTab = null;

    const placeholder = document.createElement('div');
    placeholder.className = 'cat-placeholder reveal';
    placeholder.innerHTML = `
      <div class="placeholder-box">
        <div class="placeholder-icon">≡</div>
        <h2>Välj en kategori ovan</h2>
        <p>Klicka på knapparna för att visa projekten i respektive kategori.</p>
      </div>`;
    showSections.appendChild(placeholder);

    function activateCategory(section, tab) {
      placeholder.style.display = 'none';
      document.querySelectorAll('#quickNav .filter').forEach(function (other) {
        other.classList.remove('active');
      });
      document.querySelectorAll('.cat-section').forEach(function (other) {
        other.classList.remove('show');
      });

      if (section && tab) {
        tab.classList.add('active');
        section.classList.add('show');
        selectedSection = section;
        selectedTab = tab;
      }
    }

    window.CATEGORIES.forEach(function (category) {
      const items = window.CAROUSELS.filter(function (item) {
        return item.src === category.key;
      });

      if (items.length === 0) {
        return;
      }

      const section = buildCategorySection(category, items);
      showSections.appendChild(section);

      if (quickNav) {
        const tab = document.createElement('button');
        tab.type = 'button';
        tab.className = 'filter';
        tab.innerHTML = `<span>${category.label}</span><span class="filter-count">${items.length}</span>`;

        tab.addEventListener('click', function () {
          activateCategory(section, tab);
        });

        quickNav.appendChild(tab);
      }

      if (requestedKey && category.key === requestedKey) {
        activateCategory(section, quickNav.querySelector('.filter:last-child'));
      }
    });
  }



  /* --- Gör en karusell interaktiv (pilar, prickar, swipe) --- */

  function initCarousel(carousel) {
    const track = carousel.querySelector('.track');
    const slides = Array.from(track.children);
    const dotsWrapper = carousel.querySelector('.cdots');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');

    let currentIndex = 0;

    // Skapa en prick per slide
    slides.forEach(function (slide, index) {
      const dot = document.createElement('span');

      if (index === 0) {
        dot.classList.add('on');
      }

      dot.addEventListener('click', function (event) {
        event.stopPropagation();
        goToSlide(index);
      });

      dotsWrapper.appendChild(dot);
    });

    const dots = Array.from(dotsWrapper.children);

    // Visa en viss slide
    function goToSlide(index) {
      currentIndex = Math.max(0, Math.min(index, slides.length - 1));

      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('on', dotIndex === currentIndex);
      });

      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === slides.length - 1;
    }

    prevButton.addEventListener('click', function (event) {
      event.stopPropagation();
      goToSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function (event) {
      event.stopPropagation();
      goToSlide(currentIndex + 1);
    });

    // Swipe på touch-skärmar
    let touchStartX = null;

    track.addEventListener('touchstart', function (event) {
      touchStartX = event.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', function (event) {
      if (touchStartX === null) {
        return;
      }

      const deltaX = event.changedTouches[0].clientX - touchStartX;

      if (Math.abs(deltaX) > 40) {
        const direction = deltaX < 0 ? 1 : -1;
        goToSlide(currentIndex + direction);
      }

      touchStartX = null;
    });

    goToSlide(0);
  }

  document.querySelectorAll('[data-carousel]').forEach(initCarousel);


  /* --- Video: spela/pausa vid klick --- */

  function pauseAllVideos(exceptVideo) {
    document.querySelectorAll('[data-video] video').forEach(function (otherVideo) {
      const otherContainer = otherVideo.closest('[data-video]');

      if (otherVideo !== exceptVideo) {
        otherVideo.pause();
        if (otherContainer) {
          otherContainer.classList.remove('playing');
        }
      }
    });
  }

  function initVideo(container) {
    const video = container.querySelector('video');
    const playButton = container.querySelector('.play-btn');
    const muteButton = container.querySelector('.mute-btn');

    if (!video || !playButton) {
      return;
    }

    video.muted = true;

    function updateMuteButton() {
      if (!muteButton) {
        return;
      }
      muteButton.textContent = video.muted ? '🔇' : '🔊';
      muteButton.setAttribute('aria-label', video.muted ? 'Ljud av' : 'Ljud på');
    }

    function togglePlay(event) {
      event.stopPropagation();

      if (video.paused) {
        pauseAllVideos(video);
        video.play();
        container.classList.add('playing');
      } else {
        video.pause();
        container.classList.remove('playing');
      }
    }

    function toggleMute(event) {
      event.stopPropagation();
      video.muted = !video.muted;
      updateMuteButton();
    }

    updateMuteButton();

    if (muteButton) {
      muteButton.addEventListener('click', toggleMute);
    }

    playButton.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);

    video.addEventListener('ended', function () {
      container.classList.remove('playing');
    });
  }

  document.querySelectorAll('[data-video]').forEach(initVideo);


  /* --- Fade-in för de nyss skapade korten --- */

  revealOnScroll(document.querySelectorAll('#showSections .reveal'));


  /* --- Lightbox: öppna förstorat vid klick på ett kort --- */

  const lightbox = document.getElementById('lightbox');
  const lightboxInner = document.getElementById('lbInner');
  const lightboxClose = document.getElementById('lbClose');

  // Koppla bara lightbox om alla dess element finns i HTML:en
  if (lightbox && lightboxInner && lightboxClose) {

    function openLightbox(card) {
      const media = card.querySelector('.carousel, .media-video, .media-single');

      lightboxInner.innerHTML = media.outerHTML;
      lightbox.classList.add('open');

      // Återinitiera interaktivitet i den kopierade kopian
      const carouselCopy = lightboxInner.querySelector('[data-carousel]');
      if (carouselCopy) {
        initCarousel(carouselCopy);
      }

      const videoCopy = lightboxInner.querySelector('[data-video]');
      if (videoCopy) {
        initVideo(videoCopy);
        
        // Auto-play video när lightbox öppnas
        const videoElement = videoCopy.querySelector('video');
        if (videoElement) {
          // Sätt autoplay och spela upp
          videoElement.autoplay = true;
          videoElement.play().catch(function(error) {
            console.log('Auto-play failed:', error);
          });
          videoCopy.classList.add('playing');
        }
      }
    }

    document.querySelectorAll('.mock').forEach(function (card) {
      card.addEventListener('click', function (event) {
        // Klick på pilar, prickar, play-knapp eller video ska inte öppna lightboxen
        const clickedControl =
          event.target.closest('.nav') ||
          event.target.closest('.cdots') ||
          event.target.closest('.play-btn') ||
          event.target.closest('video');

        if (clickedControl) {
          return;
        }

        openLightbox(card);
      });
    });

    lightboxClose.addEventListener('click', function () {
      lightbox.classList.remove('open');
    });

    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) {
        lightbox.classList.remove('open');
      }
    });
  }
}


/* ---------------------------------------------------------------------
   4. Grafisk profil – byggs bara om sidan har #pfTabs
   --------------------------------------------------------------------- */
const profileTabs = document.getElementById('pfTabs');

if (profileTabs && window.PROFILES) {
  const profilePanels = document.getElementById('pfPanels');

  function buildLogoHTML(profile) {
    let inner;

    if (profile.logo.type === 'img') {
      inner = `<img src="${profile.logo.src}" alt="${profile.name} logotyp">`;
    } else {
      const color = profile.logo.color || '#fff';
      inner = `<span class="txt" style="color:${color}">${profile.logo.text}</span>`;
    }

    const background = profile.bg || '#222';
    return `<div class="pf-logo" style="background:${background}">${inner}</div>`;
  }

  function buildColorsHTML(profile) {
    const swatches = profile.colors.map(function (color) {
      return `
        <div class="pf-sw">
          <div class="chip" style="background:${color.hex}"></div>
          <div class="hex">${color.hex}</div>
          <div class="nm">${color.name || ''}</div>
        </div>`;
    }).join('');

    return `
      <div class="pf-card">
        <div class="lbl">Färgpalett</div>
        <div class="pf-swatches">${swatches}</div>
      </div>`;
  }

  function buildFontsHTML(profile) {
    const fonts = profile.fonts.map(function (font, index) {
      const styles = [];

      if (font.css) {
        styles.push('font-family:' + font.css);
      }
      if (font.italic) {
        styles.push('font-style:italic');
      }
      if (font.weight) {
        styles.push('font-weight:' + font.weight);
      }

      const extraClass = index > 0 ? 'sans' : '';

      return `
        <div class="pf-font ${extraClass}">
          <div class="role">${font.name} · ${font.role}</div>
          <div class="sample" style="${styles.join(';')}">${font.sample}</div>
        </div>`;
    }).join('');

    return `
      <div class="pf-card">
        <div class="lbl">Typografi</div>
        ${fonts}
      </div>`;
  }

  function buildProfileTab(profile, index) {
    const tab = document.createElement('button');

    tab.className = 'pf-tab' + (index === 0 ? ' active' : '');
    tab.textContent = profile.name;

    tab.addEventListener('click', function () {
      document.querySelectorAll('.pf-tab').forEach(function (other) {
        other.classList.remove('active');
      });
      document.querySelectorAll('.pf-panel').forEach(function (panel) {
        panel.classList.remove('show');
      });

      tab.classList.add('active');
      document.getElementById('pf-' + index).classList.add('show');
    });

    return tab;
  }

  function buildProfilePanel(profile, index) {
    const panel = document.createElement('div');

    panel.className = 'pf-panel' + (index === 0 ? ' show' : '');
    panel.id = 'pf-' + index;

    panel.innerHTML = `
      <div class="pf-head">
        <h2>${profile.name}</h2>
        <p>${profile.tagline || ''}</p>
      </div>
      <div class="pf-grid">
        ${buildLogoHTML(profile)}
        ${buildColorsHTML(profile)}
        ${buildFontsHTML(profile)}
      </div>`;

    return panel;
  }

  window.PROFILES.forEach(function (profile, index) {
    const tab = buildProfileTab(profile, index);
    profileTabs.appendChild(tab);

    const panel = buildProfilePanel(profile, index);
    profilePanels.appendChild(panel);
  });
}


/* ---------------------------------------------------------------------
   5. Verktyg – byggs bara om sidan har #toolsWrap
   --------------------------------------------------------------------- */
const toolsWrapper = document.getElementById('toolsWrap');

if (toolsWrapper && window.TOOLS) {

  // Plocka ut första bokstaven till bokstavscirkeln
  function getInitial(name) {
    const cleaned = name.replace(/[^A-Za-zÅÄÖåäö0-9]/g, '');
    return cleaned.charAt(0).toUpperCase();
  }

  // Bygg ett enskilt verktygs-chip (bokstavscirkel + ev. riktig logga)
  function buildToolChip(tool) {
    const chip = document.createElement('span');

    chip.className = 'chip';
    chip.dataset.name = tool.name;

    // Visa alltid en stabil bokstavscirkel som fallback.
    const initial = getInitial(tool.name);
    chip.innerHTML = `<span class="ini">${initial}</span>`;

    if (tool.icon) {
      const logo = document.createElement('img');
      logo.className = 'logo';
      logo.src = `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${tool.icon}.svg`;
      logo.alt = '';
      logo.loading = 'lazy';

      logo.onload = () => {
        chip.classList.add('has-logo');
      };

      logo.onerror = () => {
        logo.remove();
      };

      chip.appendChild(logo);
    }

    return chip;
  }

  // Bygg en hel verktygsgrupp (rubrik + chips)
  function buildToolGroup(group) {
    const wrapper = document.createElement('div');

    wrapper.className = 'tg reveal';
    wrapper.innerHTML = `<h3>${group.group}</h3><div class="chips"></div>`;

    const chipsWrapper = wrapper.querySelector('.chips');

    group.items.forEach(function (tool) {
      const chip = buildToolChip(tool);
      chipsWrapper.appendChild(chip);
    });

    return wrapper;
  }

  window.TOOLS.forEach(function (group) {
    const groupElement = buildToolGroup(group);
    toolsWrapper.appendChild(groupElement);
  });

  // Fade-in för de nya grupperna
  revealOnScroll(document.querySelectorAll('#toolsWrap .reveal'));
}