export type HomeProduct = {
  id: string;
  name: string;
  category: string;
  description: string;
  models: string[];
};

export type HomeService = {
  id: string;
  name: string;
  description: string;
};

export type HomeJob = {
  id: string;
  title: string;
  department: string;
  location: string;
};

export type HomeArticle = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  read: string;
};

const products: HomeProduct[] = [
  {
    id: 'powercore-x',
    name: 'NZ PowerCore X',
    category: 'Power',
    description: 'Commercial conversion platform with modular architecture for demanding energy environments.',
    models: ['PCX-50', 'PCX-100', 'PCX-250'],
  },
  {
    id: 'store-m',
    name: 'NZ Store M',
    category: 'Storage',
    description: 'Flexible energy storage designed for commercial and industrial sites.',
    models: ['STM-100', 'STM-250', 'STM-500'],
  },
  {
    id: 'flow-hub',
    name: 'NZ Flow Hub',
    category: 'Control',
    description: 'Monitoring, control and energy orchestration layer for connected sites.',
    models: ['FH-Core', 'FH-Pro'],
  },
];

const services: HomeService[] = [
  { id: 'engineering', name: 'Engineering & Consulting', description: 'System design, sizing, feasibility and technical planning from concept to commissioning.' },
  { id: 'installation', name: 'Installation & Commissioning', description: 'Field-ready deployment with structured installation, testing and commissioning workflows.' },
  { id: 'maintenance', name: 'Maintenance & Support', description: 'Lifecycle care, diagnostics, preventive maintenance and technical support.' },
  { id: 'training-service', name: 'Training & Enablement', description: 'Practical programs for customers, partners and technical teams.' },
];

const jobs: HomeJob[] = [
  { id: 'design-engineer', title: 'Design Engineer', department: 'Engineering', location: 'Cairo, Egypt' },
  { id: 'field-specialist', title: 'Field Service Specialist', department: 'Service', location: 'Cairo / Field' },
  { id: 'content-specialist', title: 'Technical Content Specialist', department: 'Marketing', location: 'Hybrid' },
];

const articles: HomeArticle[] = [
  { id: 'resilient-energy', title: 'Designing resilient energy systems for growing operations', category: 'Energy', excerpt: 'How modern industrial sites can build flexibility, reliability and measurable performance into their energy layer.', date: '18 Aug 2026', read: '4 min read' },
  { id: 'product-to-field', title: 'From product model to measurable field performance', category: 'Engineering', excerpt: 'Why structured product and model data creates better handovers, faster support and clearer technical decisions.', date: '12 Aug 2026', read: '6 min read' },
  { id: 'training-platform', title: 'Why training belongs inside the energy platform', category: 'People', excerpt: 'Technical enablement is part of product adoption, safety and long-term performance.', date: '05 Aug 2026', read: '3 min read' },
];

const productCard = (product: HomeProduct) => `
  <article class="catalog-card">
    <div class="catalog-art art-${product.category.toLowerCase()}" aria-hidden="true">
      <span class="art-code">NZ / ${product.category.toUpperCase()}</span>
    </div>
    <div class="catalog-content">
      <span class="tag">${product.category}</span>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="chip-row">${product.models.map((model) => `<span class="chip">${model}</span>`).join('')}</div>
      <a class="inline-link" href="#/product/${product.id}">Explore product <span>↗</span></a>
    </div>
  </article>`;

const serviceCard = (service: HomeService, index: number) => `
  <article class="service-card">
    <span class="index">${String(index + 1).padStart(2, '0')}</span>
    <h3>${service.name}</h3>
    <p>${service.description}</p>
    <a class="inline-link" href="#/service/${service.id}">View service <span>↗</span></a>
  </article>`;

const articleCard = (article: HomeArticle) => `
  <article class="article-card">
    <div class="article-visual">
      <span>${article.category}</span>
      <b>NZ</b>
    </div>
    <div class="article-body">
      <div class="article-meta"><span>${article.date}</span><span>${article.read}</span></div>
      <h3>${article.title}</h3>
      <p>${article.excerpt}</p>
      <a class="inline-link" href="#/article/${article.id}">Read article <span>↗</span></a>
    </div>
  </article>`;

export function renderHome(): string {
  return `
    <main id="home" class="home-page">
      <section class="hero section">
        <div class="energy-grid" aria-hidden="true"></div>
        <div class="container hero-grid">
          <div class="hero-copy reveal">
            <div class="eyebrow"><span class="dot"></span>Industrial energy systems · Net Zero</div>
            <h1>Energy,<br><span>Engineered.</span></h1>
            <p class="hero-lead">A connected corporate platform for factory products, field services, technical training, careers and industrial insight.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#/products">Explore products ↗</a>
              <a class="text-link" href="#/company">Discover Net Zero →</a>
            </div>
            <div class="hero-meta"><span>Manufacturing</span><span>Engineering</span><span>Service</span></div>
          </div>

          <div class="hero-visual reveal reveal-delay" aria-hidden="true">
            <div class="orbit orbit-a"></div>
            <div class="orbit orbit-b"></div>
            <div class="core-card">
              <div class="core-topline"><span>NET ZERO / CORE</span><span>01 — 04</span></div>
              <div class="core-mark">NZ<span>+</span></div>
              <div class="core-title">Powering a measurable future.</div>
              <div class="core-bottom"><span>Energy flow</span><i class="pulse"></i><strong>98.7%</strong></div>
            </div>
            <div class="floating-chip chip-1">PV Systems ↗</div>
            <div class="floating-chip chip-2">Industrial Automation</div>
          </div>
        </div>
      </section>

      <section class="proof-strip">
        <div class="container proof-grid">
          <div><strong>04</strong><span>Business pillars</span></div>
          <div><strong>24/7</strong><span>Operational mindset</span></div>
          <div><strong>01</strong><span>Unified platform</span></div>
          <div><strong>∞</strong><span>Built to scale</span></div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head">
            <div>
              <div class="eyebrow"><span class="dot"></span>Factory & Products</div>
              <h2>Products with <span>models built in.</span></h2>
            </div>
            <a class="text-link" href="#/products">View catalog →</a>
          </div>
          <div class="catalog-grid">${products.map(productCard).join('')}</div>
        </div>
      </section>

      <section class="section section-soft">
        <div class="container">
          <div class="section-head">
            <div>
              <div class="eyebrow"><span class="dot"></span>Company & Services</div>
              <h2>One partner.<br><span>Every stage.</span></h2>
            </div>
            <a class="text-link" href="#/services">View services →</a>
          </div>
          <div class="service-grid">${services.map(serviceCard).join('')}</div>
        </div>
      </section>

      <section class="section">
        <div class="container feature-band">
          <div>
            <div class="eyebrow"><span class="dot"></span>Careers & Training</div>
            <h2>Build the systems<br>that power <span>tomorrow.</span></h2>
            <p>Explore open roles and practical training programs for engineers, technicians, partners and future leaders.</p>
            <a class="btn btn-dark" href="#/careers">Explore careers ↗</a>
          </div>
          <div class="feature-list">
            ${jobs.map((job) => `<a href="#/job/${job.id}"><span>${job.title}</span><small>${job.department} · ${job.location}</small><b>→</b></a>`).join('')}
          </div>
        </div>
      </section>

      <section class="section section-dark">
        <div class="container">
          <div class="section-head">
            <div>
              <div class="eyebrow"><span class="dot"></span>Articles & Insights</div>
              <h2>Ideas that move <span>industry.</span></h2>
            </div>
            <a class="text-link" href="#/insights">View all →</a>
          </div>
          <div class="article-grid">${articles.map(articleCard).join('')}</div>
        </div>
      </section>

      <section class="section contact-section">
        <div class="container contact-card">
          <div>
            <div class="eyebrow"><span class="dot"></span>Start a conversation</div>
            <h2>Let’s build the next<br><span>energy layer.</span></h2>
          </div>
          <div>
            <p>Products, services, partnerships or careers — tell us what you are building.</p>
            <a class="btn btn-primary" href="#/contact">Talk to Net Zero ↗</a>
          </div>
        </div>
      </section>
    </main>`;
}
