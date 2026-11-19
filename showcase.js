/* ============================================================
   Awanish Kumar / Jordan — Premium Demos showcase page
   ============================================================ */

'use strict';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const BASE = 'https://awanish98.github.io/premium-web-demos/';
const LINKS = {
  hub: BASE,
  threeD: BASE + '51-developer-showcase/',
  repo: 'https://github.com/Awanish98/premium-web-demos',
  portfolio: 'index.html'
};

/* All 50 demos — names and URLs exactly as supplied. */
const demos = [
  { n: 1,  name: 'Aurelia House',          sub: 'Luxury Hotel',              cat: 'Hospitality',        desc: 'Booking-first luxury stay experience with rich imagery and room details.', url: BASE + '01-hotel-resort/' },
  { n: 2,  name: 'The Ivory Court',        sub: 'Wedding Banquet',           cat: 'Hospitality',        desc: 'Elegant banquet and celebration showcase for a premium venue.', url: BASE + '02-wedding-banquet/' },
  { n: 3,  name: 'Ember & Thyme',           sub: 'Restaurant',                cat: 'Food & Fitness',     desc: 'Modern restaurant site with menu, dining details and reservations.', url: BASE + '03-restaurant/' },
  { n: 4,  name: 'Sidequest Cafe',         sub: 'Cafe & Quick Service',      cat: 'Food & Fitness',     desc: 'Bold, energetic cafe landing page built for quick service.', url: BASE + '04-cafe-fast-food/' },
  { n: 5,  name: 'Iron District',          sub: 'Strength Gym',              cat: 'Food & Fitness',     desc: 'High-energy gym website with classes and membership focus.', url: BASE + '05-gym/' },
  { n: 6,  name: 'Maison Muse',            sub: 'Salon & Beauty',            cat: 'Food & Fitness',     desc: 'Refined salon and beauty showcase with service highlights.', url: BASE + '06-salon-beauty/' },
  { n: 7,  name: 'Carewell Medical Centre',sub: 'Clinic Demo',               cat: 'Health',             desc: 'Clear, calm clinic information site with departments and care.', url: BASE + '07-hospital-clinic/' },
  { n: 8,  name: 'The Garden Estate',      sub: 'Wedding Lawn',              cat: 'Hospitality',        desc: 'Lawn and venue event showcase with a soft, romantic feel.', url: BASE + '08-wedding-lawn-events/' },
  { n: 9,  name: 'The Meridian Inn',       sub: 'Boutique Hotel',            cat: 'Hospitality',        desc: 'Boutique stay experience with rooms and atmosphere up front.', url: BASE + '09-boutique-hotel/' },
  { n: 10, name: 'Pulse Social Club',      sub: 'Fitness Club',              cat: 'Food & Fitness',     desc: 'Premium fitness club landing page with a strong visual identity.', url: BASE + '10-fitness-club/' },
  { n: 11, name: 'Northline Estates',      sub: 'Property Developer',        cat: 'Property & Trades',  desc: 'Property developer site showcasing projects and developments.', url: BASE + '11-real-estate-property-developer/' },
  { n: 12, name: 'Brightpath Academy',     sub: 'Coaching & EdTech',         cat: 'Education',          desc: 'Coaching and edtech platform with courses and learning paths.', url: BASE + '12-coaching-institute-edtech/' },
  { n: 13, name: 'Sunward Energy',         sub: 'Solar Solutions',           cat: 'Property & Trades',  desc: 'Solar solutions site focused on clean energy and installations.', url: BASE + '13-solar-energy-company/' },
  { n: 14, name: 'Voltara Motors',         sub: 'EV Showroom & Charging',    cat: 'Property & Trades',  desc: 'EV showroom and charging network landing experience.', url: BASE + '14-ev-showroom-charging-station/' },
  { n: 15, name: 'Paw & Care Clinic',      sub: 'Pet Care & Veterinary',     cat: 'Health',             desc: 'Friendly veterinary and pet care clinic website.', url: BASE + '15-pet-care-veterinary-services/' },
  { n: 16, name: 'Stillframe Studio',      sub: 'Photography Studio',        cat: 'Creative',           desc: 'Photography and videography studio portfolio-style showcase.', url: BASE + '16-photography-videography-studio/' },
  { n: 17, name: 'Atelier Stone',          sub: 'Interior Design',           cat: 'Creative',           desc: 'Interior design and architecture studio with a refined layout.', url: BASE + '17-interior-design-architecture-studio/' },
  { n: 18, name: 'Redline Detailing',      sub: 'Car Detailing',             cat: 'Property & Trades',  desc: 'Car detailing and automobile garage service website.', url: BASE + '18-car-detailing-automobile-garage/' },
  { n: 19, name: 'Maison Dore',            sub: 'Fashion & Jewellery',       cat: 'Creative',           desc: 'Fashion and jewellery D2C storefront with editorial styling.', url: BASE + '19-fashion-jewellery-d2c-e-commerce/' },
  { n: 20, name: 'Wandernorth',            sub: 'Travel & Tours',            cat: 'Creative',           desc: 'Travel agency and tour operator site built for discovery.', url: BASE + '20-travel-agency-tour-operator/' },
  { n: 21, name: 'Northgate Visa',         sub: 'Immigration Consultancy',   cat: 'Professional',       desc: 'Immigration and visa consultancy with a trustworthy layout.', url: BASE + '21-immigration-visa-consultancy/' },
  { n: 22, name: 'Ledger & Co.',           sub: 'CA & Tax',                  cat: 'Professional',       desc: 'Chartered accountant and tax consultancy website.', url: BASE + '22-ca-tax-consultancy/' },
  { n: 23, name: 'Harrison & Vale',        sub: 'Law Firm',                  cat: 'Professional',       desc: 'Law firm and legal consultancy with a formal, confident tone.', url: BASE + '23-law-firm-legal-consultancy/' },
  { n: 24, name: 'Signalrise',             sub: 'Digital Marketing',         cat: 'Professional',       desc: 'Digital marketing agency showcasing growth and campaigns.', url: BASE + '24-digital-marketing-agency/' },
  { n: 25, name: 'Codeforge Labs',         sub: 'Software Company',          cat: 'Tech',               desc: 'IT and software development company landing page.', url: BASE + '25-it-software-development-company/' },
  { n: 26, name: 'The Common Desk',        sub: 'Coworking Space',           cat: 'Property & Trades',  desc: 'Coworking space site with memberships and community focus.', url: BASE + '26-co-working-space/' },
  { n: 27, name: 'Ironwork Industries',    sub: 'Manufacturing',             cat: 'Property & Trades',  desc: 'Manufacturing and industrial company website.', url: BASE + '27-manufacturing-industrial-company/' },
  { n: 28, name: 'Haven & Grain',          sub: 'Furniture & Decor',         cat: 'Creative',           desc: 'Furniture and home decor store with warm product styling.', url: BASE + '28-furniture-home-decor-store/' },
  { n: 29, name: 'Fixright Home',          sub: 'Home Repair',               cat: 'Property & Trades',  desc: 'Home repair and maintenance service booking website.', url: BASE + '29-home-repair-maintenance/' },
  { n: 30, name: 'Freshloop',              sub: 'Laundry & Dry Cleaning',    cat: 'Property & Trades',  desc: 'Laundry and dry cleaning service with pickup and delivery.', url: BASE + '30-laundry-dry-cleaning/' },
  { n: 31, name: 'Strata Build',           sub: 'Construction',              cat: 'Property & Trades',  desc: 'Construction and infrastructure company showcase.', url: BASE + '31-construction-infrastructure-company/' },
  { n: 32, name: 'Smilewell Dental',       sub: 'Dental Clinic',             cat: 'Health',             desc: 'Dental clinic site with treatments and patient comfort.', url: BASE + '32-dental-clinic/' },
  { n: 33, name: 'Clearpath Labs',         sub: 'Diagnostics',               cat: 'Health',             desc: 'Diagnostic lab and pathology centre information site.', url: BASE + '33-diagnostic-lab-pathology-centre/' },
  { n: 34, name: 'Moment House',           sub: 'Event Management',          cat: 'Hospitality',        desc: 'Event management company showcasing experiences and moments.', url: BASE + '34-event-management-company/' },
  { n: 35, name: 'Relay Express',          sub: 'Courier & Logistics',       cat: 'Professional',       desc: 'Courier and logistics company with tracking-led messaging.', url: BASE + '35-courier-logistics-company/' },
  { n: 36, name: 'Fieldroot Agri',         sub: 'Agriculture & AgriTech',    cat: 'Professional',       desc: 'Agriculture and agritech company website.', url: BASE + '36-agriculture-agritech/' },
  { n: 37, name: 'Little Lantern',         sub: 'Preschool & Daycare',       cat: 'Education',          desc: 'Preschool and daycare site with a playful, caring feel.', url: BASE + '37-preschool-daycare/' },
  { n: 38, name: 'Soundroom Studio',       sub: 'Recording Studio',          cat: 'Creative',           desc: 'Music recording studio showcase with gear and credits.', url: BASE + '38-music-recording-studio/' },
  { n: 39, name: 'Sentinel Secure',        sub: 'Security Solutions',        cat: 'Tech',               desc: 'CCTV and security solutions website for homes and businesses.', url: BASE + '39-cctv-security-solutions/' },
  { n: 40, name: 'Pureflow Water',         sub: 'Water Treatment',           cat: 'Property & Trades',  desc: 'RO, water purifier and water treatment solutions site.', url: BASE + '40-ro-water-purifier-water-treatment/' },
  { n: 41, name: 'Alex Rivera',            sub: 'Developer Portfolio',       cat: 'Portfolios',         desc: 'Clean developer portfolio with projects and experience.', url: BASE + '41-web-developer-portfolio/' },
  { n: 42, name: 'Maya Sen',               sub: 'UI/UX Portfolio',           cat: 'Portfolios',         desc: 'UI/UX designer portfolio with case studies and visuals.', url: BASE + '42-ui-ux-designer-portfolio/' },
  { n: 43, name: 'Noah Reed',              sub: 'Photographer Portfolio',    cat: 'Portfolios',         desc: 'Photographer portfolio built around a strong gallery.', url: BASE + '43-photographer-portfolio/' },
  { n: 44, name: 'Elena Voss',             sub: 'Filmmaker Portfolio',       cat: 'Portfolios',         desc: 'Video editor and filmmaker portfolio with reel-first layout.', url: BASE + '44-video-editor-filmmaker-portfolio/' },
  { n: 45, name: 'Ria Kapoor',             sub: 'Graphic Design Portfolio',  cat: 'Portfolios',         desc: 'Graphic designer portfolio with bold typographic work.', url: BASE + '45-graphic-designer-portfolio/' },
  { n: 46, name: 'Daniel Crane',           sub: 'Architect Portfolio',       cat: 'Portfolios',         desc: 'Architect portfolio showcasing built work and concepts.', url: BASE + '46-architect-portfolio/' },
  { n: 47, name: 'Isla Moreno',            sub: 'Fashion Designer',          cat: 'Portfolios',         desc: 'Fashion designer portfolio with an editorial presentation.', url: BASE + '47-fashion-designer-portfolio/' },
  { n: 48, name: 'Sam Wright',             sub: 'Writer & Copywriter',       cat: 'Portfolios',         desc: 'Content writer and copywriter portfolio with writing samples.', url: BASE + '48-content-writer-copywriter-portfolio/' },
  { n: 49, name: 'Kai Nakamura',           sub: '3D Artist Portfolio',       cat: 'Portfolios',         desc: '3D and digital artist portfolio with a cinematic gallery.', url: BASE + '49-3d-artist-digital-artist-portfolio/' },
  { n: 50, name: 'Zoe Lane',               sub: 'Creator Portfolio',         cat: 'Portfolios',         desc: 'Influencer and content creator portfolio with a personal brand.', url: BASE + '50-influencer-content-creator-portfolio/' }
];

/* ---------------- RENDER ---------------- */

function renderDemos() {
  $('#demoGrid').innerHTML = demos.map(d => `
    <article class="demo-card reveal" data-cat="${d.cat}" data-name="${d.name.toLowerCase()} ${d.sub.toLowerCase()}">
      <div class="demo-preview" data-preview="${d.url}" role="button" tabindex="0" aria-label="Preview ${d.name}">
        <iframe src="${d.url}" loading="lazy" referrerpolicy="no-referrer" title="${d.name} preview" tabindex="-1"></iframe>
        <span class="demo-cat">${d.cat}</span>
        <span class="demo-zoom">CLICK TO EXPAND ↗</span>
      </div>
      <div class="demo-body">
        <div class="demo-top"><span class="demo-num">${String(d.n).padStart(2, '0')} / 50</span><span class="demo-mark"></span></div>
        <h3>${d.name}<small>${d.sub}</small></h3>
        <p>${d.desc}</p>
        <div class="demo-links">
          <a class="visit-link" href="${d.url}" target="_blank" rel="noopener">Visit ↗</a>
          <button type="button" class="demo-expand" data-preview="${d.url}">Expand preview</button>
        </div>
      </div>
    </article>`).join('');
  scalePreviews();
}

function renderFilters() {
  const cats = ['All', ...new Set(demos.map(d => d.cat))];
  $('#demoFilters').innerHTML = cats.map((c, i) =>
    `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-cat="${c}">${c}<span>${c === 'All' ? demos.length : demos.filter(d => d.cat === c).length}</span></button>`
  ).join('');
}

/* ---------------- INTERACTIONS ---------------- */

function applyFilters() {
  const cat = ($('.filter-btn.active') || {}).dataset?.cat || 'All';
  const q = ($('#demoSearch')?.value || '').trim().toLowerCase();
  let shown = 0;
  $$('.demo-card').forEach(card => {
    const match = (cat === 'All' || card.dataset.cat === cat) && (!q || card.dataset.name.includes(q));
    card.hidden = !match;
    if (match) { shown++; card.classList.add('in'); }
  });
  $('#demoCount').textContent = shown;
  const empty = $('#demoEmpty');
  if (empty) empty.hidden = shown !== 0;
}

function initFilters() {
  $('#demoFilters').addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    $$('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
    applyFilters();
  });
  $('#demoSearch').addEventListener('input', applyFilters);
  applyFilters();
}

function initModal() {
  const modal = $('#previewModal'), frame = $('#modalFrame'), urlEl = $('#modalUrl'), openEl = $('#modalOpen');
  const open = url => {
    urlEl.textContent = url.replace(/^https?:\/\//, '');
    openEl.href = url;
    frame.src = url;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => modal.classList.add('show'));
  };
  const close = () => {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
    setTimeout(() => { modal.hidden = true; frame.src = 'about:blank'; }, 320);
  };
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-preview]');
    if (trigger) { e.preventDefault(); open(trigger.dataset.preview); return; }
    if (e.target.closest('[data-close]')) close();
  });
  $$('.demo-preview').forEach(p => p.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(p.dataset.preview); }
  }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) close(); });
}

function scalePreviews() {
  $$('.demo-preview').forEach(p => {
    const frame = $('iframe', p);
    if (frame) p.style.setProperty('--scale', (p.clientWidth / 1200).toFixed(4));
  });
  const stage = $('.sh-window-stage');
  if (stage) {
    const frame = $('iframe', stage);
    if (frame) stage.style.setProperty('--wscale', (stage.clientWidth / 1400).toFixed(4));
  }
}
window.addEventListener('resize', () => { clearTimeout(window.__scaleT); window.__scaleT = setTimeout(scalePreviews, 120); });

function initCommon() {
  // loader
  const loader = $('#loader');
  const hide = () => setTimeout(() => loader.classList.add('done'), reduceMotion ? 0 : 350);
  if (document.readyState === 'complete') hide();
  else window.addEventListener('load', hide, { once: true });
  setTimeout(hide, 1400);

  // reveal
  const items = $$('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) items.forEach(el => el.classList.add('in'));
  else {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: .06, rootMargin: '0px 0px -30px 0px' });
    items.forEach(el => io.observe(el));
  }

  // nav
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  const toggle = $('#navToggle'), links = $('#navLinks');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  $$('.nav-link', links).forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open'); toggle.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
  }));
  if ('IntersectionObserver' in window) {
    const navIo = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      $$('.nav-link').forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
    }), { rootMargin: '-45% 0px -50% 0px' });
    ['spotlight', 'all'].forEach(id => { const el = document.getElementById(id); if (el) navIo.observe(el); });
  }

  // scroll progress + back to top
  const bar = $('#progressBar'), btn = $('#toTop'), fill = $('#toTopFill');
  const C = 2 * Math.PI * 20;
  fill.style.strokeDasharray = String(C);
  const update = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = h > 0 ? window.scrollY / h : 0;
    bar.style.width = `${p * 100}%`;
    btn.classList.toggle('show', window.scrollY > 500);
    fill.style.strokeDashoffset = String(C * (1 - p));
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

  // cursor
  if (!reduceMotion && !window.matchMedia('(pointer: coarse)').matches) {
    const dot = $('.cursor-dot'), ring = $('.cursor-ring');
    let mx = -100, my = -100, rx = -100, ry = -100, active = false;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      if (!active) { active = true; document.body.classList.add('cursor-active'); }
    });
    document.addEventListener('mouseover', e => {
      document.body.classList.toggle('cursor-hover', !!e.target.closest('a, button, [role="button"], .demo-card, .spot'));
    });
    document.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
    const loop = () => {
      rx += (mx - rx) * .16; ry += (my - ry) * .16;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  // 3D tilt on demo cards + spotlight cards
  if (!reduceMotion && !window.matchMedia('(pointer: coarse)').matches) {
    $$('.demo-card, .spot').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`);
        card.style.setProperty('--ry', `${(x * 5).toFixed(2)}deg`);
      });
      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      });
    });
  }

  $('#year').textContent = new Date().getFullYear();
  window.addEventListener('load', scalePreviews);
}

/* ---------------- BOOT ---------------- */

renderFilters();
renderDemos();
initFilters();
initModal();
initCommon();
