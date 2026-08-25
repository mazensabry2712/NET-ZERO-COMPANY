import './styles.css';
import './navbar-fixes.css';

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const mobileNav = document.querySelector<HTMLDivElement>('#mobileNav');

const setMenu = (open: boolean) => {
  if (!menuToggle || !mobileNav) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
};

menuToggle?.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});

mobileNav?.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

let observer: IntersectionObserver | null = null;
if ('IntersectionObserver' in window) {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer?.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
}

document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
  if (observer) observer.observe(el);
  else el.classList.add('is-visible');
});

const filters = document.querySelectorAll<HTMLButtonElement>('.filter');
const productCards = document.querySelectorAll<HTMLElement>('.product-card');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.filter ?? 'all';
    filters.forEach((button) => {
      const active = button === filter;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    productCards.forEach((card) => {
      const matches = category === 'all' || card.dataset.category === category;
      card.classList.toggle('is-hidden', !matches);
    });
  });
  filter.setAttribute('aria-pressed', String(filter.classList.contains('active')));
});

const header = document.querySelector<HTMLElement>('.site-header');
let lastScroll = window.scrollY;
let ticking = false;

const updateHeader = () => {
  const current = window.scrollY;
  header?.classList.toggle('scrolled', current > 16);
  if (header && window.matchMedia('(min-width: 981px)').matches) {
    header.style.transform = current > lastScroll && current > 120 ? 'translateY(-100%)' : 'translateY(0)';
  } else if (header) {
    header.style.transform = 'translateY(0)';
  }
  lastScroll = current;
  ticking = false;
};

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateHeader);
    ticking = true;
  }
}, { passive: true });

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 981px)').matches) setMenu(false);
}, { passive: true });

const yearTargets = document.querySelectorAll<HTMLElement>('[data-year]');
yearTargets.forEach((el) => { el.textContent = String(new Date().getFullYear()); });
