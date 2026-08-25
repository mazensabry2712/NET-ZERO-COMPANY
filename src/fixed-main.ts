import './styles.css';
import { renderHome } from './pages/Home';

const ensureHomeRoute = () => {
  if (!location.hash) {
    history.replaceState(null, '', `${location.pathname}${location.search}#/`);
    return true;
  }
  return false;
};

const normalizeRoute = () => {
  const path = location.hash.replace(/^#/, '') || '/';
  const parts = path.split('/').filter(Boolean);
  if (parts[0] === 'training' && parts[2] === 'register') {
    history.replaceState(null, '', `${location.pathname}${location.search}#/training/register/${parts[1]}`);
    return true;
  }
  if (parts[0] === 'admin' && parts[1] === 'dashboard') {
    history.replaceState(null, '', `${location.pathname}${location.search}#/admin`);
    return true;
  }
  return false;
};

const isHomeRoute = () => {
  const path = location.hash.replace(/^#/, '') || '/';
  return path === '/' || path === '';
};

const mountHomePage = () => {
  if (!isHomeRoute()) return;
  const currentHome = document.querySelector<HTMLElement>('#app > main#top');
  const replacement = document.createRange().createContextualFragment(renderHome()).firstElementChild;
  if (currentHome && replacement) currentHome.replaceWith(replacement);
};

const renderFrontendNav = () => {
  const links = [
    ['Home', '#/'],
    ['Products', '#/products'],
    ['Services', '#/services'],
    ['Company', '#/company'],
    ['Careers', '#/careers'],
    ['Training', '#/training'],
    ['Insights', '#/insights'],
    ['Contact', '#/contact'],
  ];

  const buildNav = (selector: string) => {
    const nav = document.querySelector<HTMLElement>(selector);
    if (!nav) return;

    nav.innerHTML = links
      .map(([label, href]) => `<a href="${href}" aria-label="${label}">${label}</a>`)
      .join('');

    const adminLink = document.createElement('a');
    adminLink.href = '#/admin';
    adminLink.textContent = 'Admin CMS';
    adminLink.setAttribute('aria-label', 'Admin CMS');
    adminLink.className = 'nav-admin-link';
    nav.append(adminLink);
  };

  buildNav('.desktop-nav');
  buildNav('#mobileNav');
};

const attachFixes = () => {
  renderFrontendNav();

  document.querySelectorAll<HTMLButtonElement>('.segmented button').forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.parentElement;
      group?.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
      button.classList.add('active');
      const filter = button.textContent?.trim().toLowerCase() || 'all';
      document.querySelectorAll<HTMLElement>('.catalog-card').forEach((card) => {
        const tag = card.querySelector('.tag')?.textContent?.trim().toLowerCase() || '';
        card.style.display = filter === 'all' || tag === filter ? '' : 'none';
      });
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.filter-light').forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.parentElement;
      group?.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
      button.classList.add('active');
      const filter = button.textContent?.trim().toLowerCase() || 'all';
      document.querySelectorAll<HTMLElement>('.article-card').forEach((card) => {
        const category = card.querySelector('.article-visual span')?.textContent?.trim().toLowerCase() || '';
        card.style.display = filter === 'all' || category === filter ? '' : 'none';
      });
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.detail-actions .btn-outline').forEach((button) => {
    button.addEventListener('click', () => {
      alert('Datasheet download will be connected to the CMS/API file in the production version.');
    });
  });
};

const refreshHome = () => {
  setTimeout(() => {
    mountHomePage();
    attachFixes();
  }, 0);
};

const boot = async () => {
  ensureHomeRoute();
  const changed = normalizeRoute();
  await import('./main');
  if (changed) window.dispatchEvent(new HashChangeEvent('hashchange'));
  mountHomePage();
  attachFixes();
  window.addEventListener('hashchange', () => {
    const changedAgain = normalizeRoute();
    if (changedAgain) window.dispatchEvent(new HashChangeEvent('hashchange'));
    refreshHome();
  });
};

void boot();
