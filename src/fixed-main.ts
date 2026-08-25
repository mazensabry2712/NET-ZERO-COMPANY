import './styles.css';

const normalizeRoute = () => {
  const path = location.hash.replace(/^#/, '') || '/';
  const parts = path.split('/').filter(Boolean);
  if (parts[0] === 'training' && parts[2] === 'register') {
    location.hash = `#/training/register/${parts[1]}`;
    return true;
  }
  if (parts[0] === 'admin' && parts[1] === 'dashboard') {
    location.hash = '#/admin';
    return true;
  }
  return false;
};

const attachFixes = () => {
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

const installFixes = () => {
  attachFixes();
  window.addEventListener('hashchange', () => {
    setTimeout(() => {
      normalizeRoute();
      attachFixes();
    }, 0);
  }, { once: false });
};

if (!normalizeRoute()) {
  import('./main').then(() => {
    installFixes();
  });
}
