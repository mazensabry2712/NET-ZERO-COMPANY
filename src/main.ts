const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const mobileNav = document.querySelector<HTMLDivElement>('#mobileNav');

menuToggle?.addEventListener('click', () => {
  if (!mobileNav) return;
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  mobileNav.hidden = isOpen;
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (!mobileNav || !menuToggle) return;
    mobileNav.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => observer.observe(el));

const filters = document.querySelectorAll<HTMLButtonElement>('.filter');
const productCards = document.querySelectorAll<HTMLElement>('.product-card');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.filter ?? 'all';
    filters.forEach((button) => button.classList.remove('active'));
    filter.classList.add('active');

    productCards.forEach((card) => {
      const matches = category === 'all' || card.dataset.category === category;
      card.classList.toggle('is-hidden', !matches);
    });
  });
});

const header = document.querySelector<HTMLElement>('.site-header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  header?.classList.toggle('scrolled', current > 16);
  if (header && window.innerWidth > 900) {
    header.style.transform = current > lastScroll && current > 120 ? 'translateY(-100%)' : 'translateY(0)';
  }
  lastScroll = current;
}, { passive: true });

const yearTargets = document.querySelectorAll<HTMLElement>('[data-year]');
yearTargets.forEach((el) => { el.textContent = String(new Date().getFullYear()); });
