(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const b="modulepreload",w=function(e){return"/"+e},u={},S=function(a,n,o){let t=Promise.resolve();if(n&&n.length>0){let r=function(c){return Promise.all(c.map(l=>Promise.resolve(l).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),m=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));t=r(n.map(c=>{if(c=w(c),c in u)return;u[c]=!0;const l=c.endsWith(".css"),p=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":b,l||(d.as="script"),d.crossOrigin="",d.href=c,m&&d.setAttribute("nonce",m),document.head.appendChild(d),l)return new Promise((f,y)=>{d.addEventListener("load",f),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return t.then(r=>{for(const i of r||[])i.status==="rejected"&&s(i.reason);return a().catch(s)})},E=[{id:"powercore-x",name:"NZ PowerCore X",category:"Power",description:"Commercial conversion platform with modular architecture for demanding energy environments.",models:["PCX-50","PCX-100","PCX-250"]},{id:"store-m",name:"NZ Store M",category:"Storage",description:"Flexible energy storage designed for commercial and industrial sites.",models:["STM-100","STM-250","STM-500"]},{id:"flow-hub",name:"NZ Flow Hub",category:"Control",description:"Monitoring, control and energy orchestration layer for connected sites.",models:["FH-Core","FH-Pro"]}],$=[{id:"engineering",name:"Engineering & Consulting",description:"System design, sizing, feasibility and technical planning from concept to commissioning."},{id:"installation",name:"Installation & Commissioning",description:"Field-ready deployment with structured installation, testing and commissioning workflows."},{id:"maintenance",name:"Maintenance & Support",description:"Lifecycle care, diagnostics, preventive maintenance and technical support."},{id:"training-service",name:"Training & Enablement",description:"Practical programs for customers, partners and technical teams."}],C=[{id:"design-engineer",title:"Design Engineer",department:"Engineering",location:"Cairo, Egypt"},{id:"field-specialist",title:"Field Service Specialist",department:"Service",location:"Cairo / Field"},{id:"content-specialist",title:"Technical Content Specialist",department:"Marketing",location:"Hybrid"}],A=[{id:"resilient-energy",title:"Designing resilient energy systems for growing operations",category:"Energy",excerpt:"How modern industrial sites can build flexibility, reliability and measurable performance into their energy layer.",date:"18 Aug 2026",read:"4 min read"},{id:"product-to-field",title:"From product model to measurable field performance",category:"Engineering",excerpt:"Why structured product and model data creates better handovers, faster support and clearer technical decisions.",date:"12 Aug 2026",read:"6 min read"},{id:"training-platform",title:"Why training belongs inside the energy platform",category:"People",excerpt:"Technical enablement is part of product adoption, safety and long-term performance.",date:"05 Aug 2026",read:"3 min read"}],P=e=>`
  <article class="catalog-card">
    <div class="catalog-art art-${e.category.toLowerCase()}" aria-hidden="true">
      <span class="art-code">NZ / ${e.category.toUpperCase()}</span>
    </div>
    <div class="catalog-content">
      <span class="tag">${e.category}</span>
      <h3>${e.name}</h3>
      <p>${e.description}</p>
      <div class="chip-row">${e.models.map(a=>`<span class="chip">${a}</span>`).join("")}</div>
      <a class="inline-link" href="#/product/${e.id}">Explore product <span>↗</span></a>
    </div>
  </article>`,L=(e,a)=>`
  <article class="service-card">
    <span class="index">${String(a+1).padStart(2,"0")}</span>
    <h3>${e.name}</h3>
    <p>${e.description}</p>
    <a class="inline-link" href="#/service/${e.id}">View service <span>↗</span></a>
  </article>`,x=e=>`
  <article class="article-card">
    <div class="article-visual">
      <span>${e.category}</span>
      <b>NZ</b>
    </div>
    <div class="article-body">
      <div class="article-meta"><span>${e.date}</span><span>${e.read}</span></div>
      <h3>${e.title}</h3>
      <p>${e.excerpt}</p>
      <a class="inline-link" href="#/article/${e.id}">Read article <span>↗</span></a>
    </div>
  </article>`;function k(){return`
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
          <div class="catalog-grid">${E.map(P).join("")}</div>
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
          <div class="service-grid">${$.map(L).join("")}</div>
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
            ${C.map(e=>`<a href="#/job/${e.id}"><span>${e.title}</span><small>${e.department} · ${e.location}</small><b>→</b></a>`).join("")}
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
          <div class="article-grid">${A.map(x).join("")}</div>
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
    </main>`}const q=()=>location.hash?!1:(history.replaceState(null,"",`${location.pathname}${location.search}#/`),!0),g=()=>(location.hash.replace(/^#/,"")||"/").split("/").filter(Boolean),h=()=>{const e=g();return e[0]==="training"&&e[1]&&e[2]==="register"?(history.replaceState(null,"",`${location.pathname}${location.search}#/training/register/${e[1]}`),!0):e[0]==="admin"&&e[1]==="dashboard"?(history.replaceState(null,"",`${location.pathname}${location.search}#/admin`),!0):!1},N=()=>{const e=location.hash.replace(/^#/,"")||"/";return e==="/"||e===""},T=()=>{var n;if(!N())return;const e=document.querySelector("#app > main#top, #app > main#home"),a=document.createRange().createContextualFragment(k()).firstElementChild;a&&(e?e.replaceWith(a):(n=document.querySelector("#app"))==null||n.appendChild(a))},M=()=>{const e=[["Home","#/"],["Products","#/products"],["Services","#/services"],["Company","#/company"],["Careers","#/careers"],["Training","#/training"],["Insights","#/insights"],["Contact","#/contact"],["Admin CMS","#/admin"]],a=n=>{const o=document.querySelector(n);o&&(o.innerHTML=e.map(([t,s])=>`<a href="${s}" aria-label="${t}" class="${t==="Admin CMS"?"nav-admin-link":""}">${t}</a>`).join(""))};a(".desktop-nav"),a("#mobileNav")},H=e=>{const a=document.querySelector(".admin-content");if(!a)return;const n=e.charAt(0).toUpperCase()+e.slice(1).replace(/-/g," "),t=({products:["Name","Category","Short description","Full description"],models:["Model code","Product","Capacity","Availability"],services:["Service name","Description","Process steps","Related products"],jobs:["Job title","Department","Location","Employment type","Requirements"],training:["Program title","Description","Schedule","Eligibility"],articles:["Title","Category","Excerpt","Article body"],leads:["Name","Email","Phone","Subject","Message"]}[e]??["Name","Description","Status"]).map(s=>`<label>${s}<input placeholder="Enter ${s.toLowerCase()}"></label>`).join("");a.innerHTML=`
    <header class="admin-top">
      <div><span class="eyebrow"><span class="dot"></span>Admin UI</span><h1>Create ${n}</h1></div>
      <div class="admin-user"><span>MS</span><div><strong>Admin User</strong><small>Administrator</small></div></div>
    </header>
    <div class="form-layout">
      <form class="admin-card form-card" data-demo-form>
        <div class="form-grid">${t}</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">
          <button class="btn btn-primary" type="submit">Save ${n} ↗</button>
          <a class="btn btn-outline" href="#/admin/${e}">Cancel</a>
        </div>
        <p class="form-note">UI prototype — persistence will be connected to the CMS/API.</p>
      </form>
    </div>`,document.querySelectorAll("[data-demo-form]").forEach(s=>s.addEventListener("submit",r=>{r.preventDefault(),s.innerHTML=`<div class="success-state"><span>✓</span><h3>${n} saved.</h3><p>The UI flow is ready for API integration.</p><a class="btn btn-dark" href="#/admin/${e}">Back to ${n}</a></div>`}))},F=()=>{const e=document.querySelector(".admin-content");if(!e)return;const a=[["Ahmed Hassan","ahmed@example.com","+20 100 123 4567","Product inquiry","New"],["Mariam Ali","mariam@example.com","+20 100 222 8877","Service request","New"],["Omar Khaled","omar@example.com","+20 100 555 3311","Partnership","Contacted"],["Sara Nabil","sara@example.com","+20 100 744 1902","General inquiry","Closed"]];e.innerHTML=`
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
      <tbody>${a.map(n=>`<tr><td><strong>${n[0]}</strong><small>${n[1]}</small></td><td>${n[2]}</td><td>${n[3]}</td><td><span class="status-pill ${n[4]==="New"?"new":""}">${n[4]}</span></td><td><button class="table-action" type="button">Review</button></td></tr>`).join("")}</tbody></table>
    </div>`},I=()=>{document.querySelectorAll("[data-demo-form]").forEach(e=>{e.dataset.bound!=="true"&&(e.dataset.bound="true",e.addEventListener("submit",a=>{a.preventDefault(),e.innerHTML='<div class="success-state"><span>✓</span><h3>Thank you.</h3><p>Your information has been captured in this UI prototype.</p><a class="btn btn-dark" href="#/">Back to home</a></div>'}))})},R=()=>{M(),document.querySelectorAll(".segmented button").forEach(e=>{e.dataset.bound!=="true"&&(e.dataset.bound="true",e.addEventListener("click",()=>{var o;const a=e.parentElement;a==null||a.querySelectorAll("button").forEach(t=>t.classList.remove("active")),e.classList.add("active");const n=((o=e.textContent)==null?void 0:o.trim().toLowerCase())||"all";document.querySelectorAll(".catalog-card").forEach(t=>{var r,i;const s=((i=(r=t.querySelector(".tag"))==null?void 0:r.textContent)==null?void 0:i.trim().toLowerCase())||"";t.style.display=n==="all"||s===n?"":"none"})}))}),document.querySelectorAll(".filter-light").forEach(e=>{e.dataset.bound!=="true"&&(e.dataset.bound="true",e.addEventListener("click",()=>{var o;const a=e.parentElement;a==null||a.querySelectorAll("button").forEach(t=>t.classList.remove("active")),e.classList.add("active");const n=((o=e.textContent)==null?void 0:o.trim().toLowerCase())||"all";document.querySelectorAll(".article-card").forEach(t=>{var r,i;const s=((i=(r=t.querySelector(".article-visual span"))==null?void 0:r.textContent)==null?void 0:i.trim().toLowerCase())||"";t.style.display=n==="all"||s===n?"":"none"})}))}),document.querySelectorAll(".detail-actions .btn-outline").forEach(e=>{e.dataset.bound!=="true"&&(e.dataset.bound="true",e.addEventListener("click",()=>{alert("Datasheet download will be connected to the CMS/API file in the production version.")}))}),I()},v=()=>{setTimeout(()=>{const e=g();e[0]==="admin"&&e[1]==="leads"&&!e[2]&&F(),e[0]==="admin"&&e[2]==="new"&&H(e[1]),T(),R()},0)},O=async()=>{q();const e=h();await S(()=>import("./main-CwOA9VxL.js"),[]),e&&window.dispatchEvent(new HashChangeEvent("hashchange")),v(),window.addEventListener("hashchange",()=>{h()&&window.dispatchEvent(new HashChangeEvent("hashchange")),v()})};O();
