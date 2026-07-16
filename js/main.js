/* =========================================================
   Vermeille Pontoire — Portfolio
   Interactions: loader, scroll reveal, parallax, timeline,
   masonry filter, project modal, nav
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- Loader ---------------- */
  const loader = document.getElementById('loader');
  const hideLoader = () => {
    setTimeout(() => loader.classList.add('is-hidden'), 900);
  };
  if (document.readyState === 'complete') hideLoader();
  else window.addEventListener('load', hideLoader);
  // safety fallback in case 'load' is delayed
  setTimeout(hideLoader, 3200);

  /* ---------------- Nav: scroll state + mobile menu ---------------- */
  const nav = document.getElementById('nav');
  const onScrollNav = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 30);
  };
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive: true });

  const burger = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------------- Custom cursor dot (desktop) ---------------- */
  const cursorDot = document.getElementById('cursorDot');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
      cursorDot.classList.add('is-active');
    });
    document.querySelectorAll('a, button, .card').forEach(el => {
      el.addEventListener('mouseenter', () => cursorDot.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cursorDot.classList.remove('is-hover'));
    });
  }

  /* ---------------- Scroll reveal (IntersectionObserver) ---------------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  const observeReveals = (root = document) => {
    root.querySelectorAll('.reveal, .timeline-item, .card').forEach(el => revealObserver.observe(el));
  };
  observeReveals();

  /* ---------------- Parallax blobs ---------------- */
  const parallaxEls = Array.from(document.querySelectorAll('[data-speed]'));
  let ticking = false;
  const updateParallax = () => {
    const y = window.scrollY;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.dataset.speed) || 0.1;
      el.style.transform = `translate3d(0, ${y * speed * -0.4}px, 0)`;
    });
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
  updateParallax();

  /* ---------------- Timeline ---------------- */
  const timelineEl = document.getElementById('timeline');
  const tabs = document.querySelectorAll('.timeline-tab');

  const renderTimeline = (track) => {
    const items = TIMELINE[track] || [];
    timelineEl.innerHTML = items.map(item => `
      <div class="timeline-item">
        <span class="timeline-item__dot"></span>
        <p class="timeline-item__date">${item.date}</p>
        <div class="timeline-item__card">
          <h3 class="timeline-item__title">${item.title}</h3>
          <p class="timeline-item__place">${item.place}</p>
          <p class="timeline-item__desc">${item.desc}</p>
        </div>
      </div>
    `).join('');
    observeReveals(timelineEl);
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      renderTimeline(tab.dataset.track);
    });
  });

  renderTimeline('formation');

  /* ---------------- Portfolio masonry ---------------- */
  const masonryEl = document.getElementById('masonry');
  const filterBtns = document.querySelectorAll('.filter-btn');

  const categoryTagColor = {
    visuelles: 'Identités visuelles',
    print: 'Print et Édition',
    illustrations: 'Illustrations',
    photographie: 'Photographie'
  };

  const renderMasonry = () => {
    masonryEl.innerHTML = PROJECTS.map(p => `
      <article class="card" data-category="${p.category}" data-id="${p.id}">
        <div class="card__media">
          <span class="card__tag">${p.categoryLabel}</span>
          <img src="${p.cover}" alt="${p.title}" loading="lazy">
          <div class="card__overlay">
            <span class="card__overlay-text">Voir le projet →</span>
          </div>
        </div>
        <div class="card__body">
          <h3 class="card__title">${p.title}</h3>
          <p class="card__subtitle">${p.subtitle}</p>
        </div>
      </article>
    `).join('');
    observeReveals(masonryEl);

    masonryEl.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.id));
      card.addEventListener('mouseenter', () => cursorDot && cursorDot.classList.add('is-hover'));
      card.addEventListener('mouseleave', () => cursorDot && cursorDot.classList.remove('is-hover'));
    });
  };

  renderMasonry();

  let currentFilter = 'all';
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentFilter = btn.dataset.filter;
      applyFilter();
    });
  });

  const applyFilter = () => {
    document.querySelectorAll('.card').forEach(card => {
      const match = currentFilter === 'all' || card.dataset.category === currentFilter;
      card.classList.toggle('is-hidden', !match);
    });
  };

  /* ---------------- Project modal ---------------- */
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');
  let lastFocused = null;

  function openModal(id) {
    const project = PROJECTS.find(p => p.id === id);
    if (!project) return;

    const galleryClass = project.gallery.length <= 1 ? 'modal__gallery modal__gallery--single' : 'modal__gallery';

    modalBody.innerHTML = `
      <div class="${galleryClass}">
        ${project.gallery.map(src => `<img src="${src}" alt="${project.title}" loading="lazy">`).join('')}
      </div>
      <span class="modal__tag">${project.categoryLabel}</span>
      <h2 class="modal__title" id="modalTitle">${project.title}</h2>
      <p class="modal__subtitle">${project.subtitle}</p>
      <p class="modal__desc">${project.description}</p>
      <div class="modal__chips">
        ${project.tags.map(t => `<span class="modal__chip">${t}</span>`).join('')}
      </div>
    `;

    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

});
