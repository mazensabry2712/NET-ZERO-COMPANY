import './styles.css';
import { renderHome } from './pages/Home';

const ensureHomeRoute = () => {
  if (!location.hash) {
    history.replaceState(null, '', `${location.pathname}${location.search}#/`);
    return true;
  }
  return false;
};

const routeParts = () => (location.hash.replace(/^#/, '') || '/').split('/').filter(Boolean);

const normalizeRoute = () => {
  const parts = routeParts();
  if (parts[0] === 'training' && parts[1] && parts[2] === 'register') {
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
  const currentHome = document.querySelector<HTMLElement>('#app > main#top, #app > main#home');
  const replacement = document.createRange().createContextualFragment(renderHome()).firstElementChild;
  if (replacement) {
    if (currentHome) currentHome.replaceWith(replacement);
    else document.querySelector('#app')?.appendChild(replacement);
  }
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
    ['Admin CMS', '#/admin'],
  ];

  const buildNav = (selector: string) => {
    const nav = document.querySelector<HTMLElement>(selector);
    if (!nav) return;

    nav.innerHTML = links
      .map(([label, href]) => `<a href="${href}" aria-label="${label}" class="${label === 'Admin CMS' ? 'nav-admin-link' : ''}">${label}</a>`)
      .join('');
  };

  buildNav('.desktop-nav');
  buildNav('#mobileNav');
};

const renderAdminEditor = (resource: string) => {
  const adminContent = document.querySelector<HTMLElement>('.admin-content');
  if (!adminContent) return;

  const label = resource.charAt(0).toUpperCase() + resource.slice(1).replace(/-/g, ' ');
  const fields: Record<string, string[]> = {
    products: ['Name', 'Category', 'Short description', 'Full description'],
    models: ['Model code', 'Product', 'Capacity', 'Availability'],
    services: ['Service name', 'Description', 'Process steps', 'Related products'],
    jobs: ['Job title', 'Department', 'Location', 'Employment type', 'Requirements'],
    training: ['Program title', 'Description', 'Schedule', 'Eligibility'],
    articles: ['Title', 'Category', 'Excerpt', 'Article body'],
    leads: ['Name', 'Email', 'Phone', 'Subject', 'Message'],
  };

  const controls = (fields[resource] ?? ['Name', 'Description', 'Status'])
    .map((field) => `<label>${field}<input placeholder="Enter ${field.toLowerCase()}"></label>`)
    .join('');

  adminContent.innerHTML = `
    <header class="admin-top">
      <div><span class="eyebrow"><span class="dot"></span>Admin UI</span><h1>Create ${label}</h1></div>
      <div class="admin-user"><span>MS</span><div><strong>Admin User</strong><small>Administrator</small></div></div>
    </header>
    <div class="form-layout">
      <form class="admin-card form-card" data-demo-form>
        <div class="form-grid">${controls}</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">
          <button class="btn btn-primary" type="submit">Save ${label} ↗</button>
          <a class="btn btn-outline" href="#/admin/${resource}">Cancel</a>
        </div>
        <p class="form-note">UI prototype — persistence will be connected to the CMS/API.</p>
      </form>
    </div>`;

  document.querySelectorAll<HTMLFormElement>('[data-demo-form]').forEach((form) => form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.innerHTML = `<div class="success-state"><span>✓</span><h3>${label} saved.</h3><p>The UI flow is ready for API integration.</p><a class="btn btn-dark" href="#/admin/${resource}">Back to ${label}</a></div>`;
  }));
};

const renderAdminLeads = () => {
  const adminContent = document.querySelector<HTMLElement>('.admin-content');
  if (!adminContent) return;

  const leads = [
    ['Ahmed Hassan', 'ahmed@example.com', '+20 100 123 4567', 'Product inquiry', 'New'],
    ['Mariam Ali', 'mariam@example.com', '+20 100 222 8877', 'Service request', 'New'],
    ['Omar Khaled', 'omar@example.com', '+20 100 555 3311', 'Partnership', 'Contacted'],
    ['Sara Nabil', 'sara@example.com', '+20 100 744 1902', 'General inquiry', 'Closed'],
  ];

  adminContent.innerHTML = `
    <header class="admin-top">
      <div><span class="eyebrow"><span class="dot"></span>Admin UI</span><h1>Leads</h1></div>
      <div class="admin-user"><span>MS</span><div><strong>Admin User</strong><small>Administrator</small></div></div>
    </header>
    <div class="admin-toolbar">
      <div class="search-box"><span>⌕</span><input placeholder="Search leads..."></div>
      <a class="btn btn-dark" href="#/admin/leads/new">+ Add lead</a>
    </div>
    <div class="admin-card table-wrap">
      <table><thead><tr><th>Lead</th><th>Phone</th><th>Topic</th><th>Status</th><th></th></tr></thead>
      <tbody>${leads.map((lead) => `<tr><td><strong>${lead[0]}</strong><small>${lead[1]}</small></td><td>${lead[2]}</td><td>${lead[3]}</td><td><span class="status-pill ${lead[4] === 'New' ? 'new' : ''}">${lead[4]}</span></td><td><button class="table-action" type="button">Review</button></td></tr>`).join('')}</tbody></table>
    </div>`;
};

const bindForms = () => {
  document.querySelectorAll<HTMLFormElement>('[data-demo-form]').forEach((form) => {
    if (form.dataset.bound === 'true') return;
    form.dataset.bound = 'true';
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.innerHTML = '<div class="success-state"><span>✓</span><h3>Thank you.</h3><p>Your information has been captured in this UI prototype.</p><a class="btn btn-dark" href="#/">Back to home</a></div>';
    });
  });
};

const attachFixes = () => {
  renderFrontendNav();

  document.querySelectorAll<HTMLButtonElement>('.segmented button').forEach((button) => {
    if (button.dataset.bound === 'true') return;
    button.dataset.bound = 'true';
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
    if (button.dataset.bound === 'true') return;
    button.dataset.bound = 'true';
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
    if (button.dataset.bound === 'true') return;
    button.dataset.bound = 'true';
    button.addEventListener('click', () => {
      alert('Datasheet download will be connected to the CMS/API file in the production version.');
    });
  });

  bindForms();
};

const refreshRouteFixes = () => {
  setTimeout(() => {
    const parts = routeParts();
    if (parts[0] === 'admin' && parts[1] === 'leads' && !parts[2]) renderAdminLeads();
    if (parts[0] === 'admin' && parts[2] === 'new') renderAdminEditor(parts[1]);
    mountHomePage();
    attachFixes();
  }, 0);
};

const boot = async () => {
  ensureHomeRoute();
  const changed = normalizeRoute();
  await import('./main');
  if (changed) window.dispatchEvent(new HashChangeEvent('hashchange'));
  refreshRouteFixes();
  window.addEventListener('hashchange', () => {
    const changedAgain = normalizeRoute();
    if (changedAgain) window.dispatchEvent(new HashChangeEvent('hashchange'));
    refreshRouteFixes();
  });
};

void boot();
