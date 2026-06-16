document.addEventListener('DOMContentLoaded', function () {
  function svgMask(svg) {
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }

  const iconSvgs = {
    1: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><g fill='none' stroke='black' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'><circle cx='32' cy='12' r='8'/><path d='M27 20L12 56M37 20l15 36M20 38h24M14 56h10M40 56h10M32 20v20'/><path d='M23 38l9-18 9 18'/></g></svg>`,
    2: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><g fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'><path d='M12 13h35M12 13v43h42V21M12 13c-6 0-6 10 0 10M12 23h8M20 56V23'/><path d='M27 45V33l10-9 10 9v12H27zM34 45v-8h6v8'/><path d='M42 10l11 11M49 7l6 6-14 14-7 2 2-7 13-15z'/></g></svg>`,
    4: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><g fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'><circle cx='49' cy='12' r='5' fill='black'/><path d='M49 1v4M49 19v4M38 12h4M56 12h4M41 4l3 3M55 4l-3 3M41 20l3-3M55 20l-3-3'/><path d='M9 54h46M9 54l15-18h19l12 18M18 44h29M25 36v18M35 36v18M43 36v18'/><path d='M26 18h10v18H26zM36 25h10v11H36zM26 18l5-6h10l5 13'/></g></svg>`,
    5: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><g fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'><circle cx='22' cy='10' r='6'/><circle cx='47' cy='13' r='5'/><path d='M20 18l-6 13L6 48M20 18l10 15h8'/><path d='M46 22v18l8 11M46 22l-9 13'/><path d='M30 33l7 5 10-9'/><path d='M15 48v10H6v-6l8-4M35 58h17M7 58h23'/></g></svg>`,
    6: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><g fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'><path d='M15 56V40M49 56V40M17 40L30 28M47 40L34 28M17 56h12M35 56h12'/><path d='M25 41h20v15H25zM31 41V30h8v11M28 30h14M28 25h14'/><path d='M32 21V5M32 5l-6 6M32 5l6 6'/><path d='M16 25V12M16 12l-5 5M16 12l5 5'/><path d='M48 25V12M48 12l-5 5M48 12l5 5'/></g></svg>`
  };

  const siteStyle = document.createElement('style');
  let iconCss = `
    .service-grid .card:nth-child(1) .card-icon::before,
    .service-grid .card:nth-child(2) .card-icon::before,
    .service-grid .card:nth-child(4) .card-icon::before,
    .service-grid .card:nth-child(5) .card-icon::before,
    .service-grid .card:nth-child(6) .card-icon::before {
      content: "" !important;
      display: block;
      background: currentColor;
    }
  `;

  Object.entries(iconSvgs).forEach(function ([number, svg]) {
    const size = number === '4' ? '30px' : '32px';
    const mask = svgMask(svg);
    iconCss += `
      .service-grid .card:nth-child(${number}) .card-icon::before {
        width: ${size};
        height: ${size};
        -webkit-mask: ${mask} center / contain no-repeat;
        mask: ${mask} center / contain no-repeat;
      }
    `;
  });

  siteStyle.textContent = iconCss + `
    .theme-toggle {
      width: 42px;
      height: 42px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      color: #1a2238;
      border-radius: 999px;
      padding: 0;
      font-size: 1.12rem;
      font-weight: 900;
      line-height: 1;
      cursor: pointer;
      box-shadow: 0 8px 20px rgba(17, 24, 39, 0.08);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
    }

    .theme-toggle:hover { color: #0044ED; border-color: #0044ED; }

    @media (min-width: 1001px) {
      .site-header,
      header {
        gap: 8px !important;
      }

      .site-header .main-nav,
      header nav {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
      }

      .brand {
        position: relative;
        z-index: 3;
      }

      .nav-cta {
        margin-left: auto;
        position: relative;
        z-index: 3;
      }

      .nav-cta + .theme-toggle {
        margin-left: 0;
        position: relative;
        z-index: 3;
      }
    }

    html.dark-mode body { background: #0d1324; color: #d7deea; }
    html.dark-mode .site-header,
    html.dark-mode header,
    html.dark-mode .site-footer,
    html.dark-mode footer { background: #111a2f; border-color: #29364f; color: #d7deea; }
    html.dark-mode .logo,
    html.dark-mode .footer-logo { filter: invert(1) hue-rotate(180deg) saturate(1.15) brightness(1.08); }
    html.dark-mode .main-nav a,
    html.dark-mode nav a,
    html.dark-mode h1,
    html.dark-mode h2,
    html.dark-mode h3,
    html.dark-mode h4 { color: #eef3ff; }
    html.dark-mode .main-nav a:hover,
    html.dark-mode .main-nav a.active,
    html.dark-mode nav a:hover,
    html.dark-mode nav a.active { color: #7aa2ff; border-bottom-color: #7aa2ff; }
    html.dark-mode .hero-split,
    html.dark-mode .section.gray,
    html.dark-mode .capabilities,
    html.dark-mode .contact-form,
    html.dark-mode .service-feature-list div,
    html.dark-mode .service-mini-block,
    html.dark-mode .capability-meta div { background: #0f172a !important; }
    html.dark-mode .card,
    html.dark-mode .stat,
    html.dark-mode .project-card,
    html.dark-mode .testimonial,
    html.dark-mode .process-step,
    html.dark-mode .service-expanded-card,
    html.dark-mode .capability-summary-card,
    html.dark-mode .capability-card,
    html.dark-mode .capability-panel,
    html.dark-mode .deliverable-item,
    html.dark-mode input,
    html.dark-mode textarea,
    html.dark-mode select { background: #17223a !important; border-color: #2d3b57 !important; color: #eef3ff !important; }
    html.dark-mode p,
    html.dark-mode .two-col p,
    html.dark-mode .section-head p,
    html.dark-mode .card p,
    html.dark-mode .project-content p,
    html.dark-mode .testimonial span,
    html.dark-mode .info-card span,
    html.dark-mode .footer-grid p,
    html.dark-mode .footer-bottom,
    html.dark-mode .clean-list,
    html.dark-mode .capability-list,
    html.dark-mode .service-mini-block ul,
    html.dark-mode .deliverable-item span { color: #aebbd0 !important; }
    html.dark-mode .card-icon,
    html.dark-mode .capability-icon,
    html.dark-mode .stat-icon,
    html.dark-mode .tag,
    html.dark-mode .card-number { background: rgba(122, 162, 255, 0.16) !important; color: #7aa2ff !important; }
    html.dark-mode .page-hero { background: linear-gradient(rgba(8,13,25,0.9), rgba(8,13,25,0.9)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80') center/cover !important; }
    html.dark-mode .image-card,
    html.dark-mode .modal-content,
    html.dark-mode .project-modal-box { background: rgba(17, 26, 47, 0.96) !important; color: #eef3ff !important; }
    html.dark-mode .theme-toggle { background: #17223a; color: #eef3ff; border-color: #2d3b57; }
    html.dark-mode .back-to-top { background: #0044ED; }

    @media (max-width: 760px) {
      .theme-toggle { width: 40px; height: 40px; font-size: 1rem; }
      html.dark-mode .main-nav,
      html.dark-mode nav { background: #17223a; border-color: #2d3b57; }
      html.dark-mode .main-nav a,
      html.dark-mode nav a { background: #17223a; border-bottom-color: #2d3b57; }
    }
  `;
  document.head.appendChild(siteStyle);

  const savedTheme = localStorage.getItem('pde-theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }

  const header = document.querySelector('.site-header, header');
  if (header && !document.querySelector('.theme-toggle')) {
    const themeButton = document.createElement('button');
    themeButton.className = 'theme-toggle';
    themeButton.type = 'button';
    themeButton.setAttribute('aria-label', 'Toggle dark mode');

    function updateThemeButton() {
      const isDark = document.documentElement.classList.contains('dark-mode');
      themeButton.textContent = isDark ? '☀' : '🌙';
      themeButton.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      themeButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    themeButton.addEventListener('click', function () {
      document.documentElement.classList.toggle('dark-mode');
      const isDark = document.documentElement.classList.contains('dark-mode');
      localStorage.setItem('pde-theme', isDark ? 'dark' : 'light');
      updateThemeButton();
    });

    const cta = header.querySelector('.nav-cta');
    if (cta) {
      cta.insertAdjacentElement('afterend', themeButton);
    } else {
      header.appendChild(themeButton);
    }

    updateThemeButton();
  }

  const navs = document.querySelectorAll('.main-nav, header nav');

  navs.forEach(function (nav) {
    nav.setAttribute('tabindex', '0');
    nav.setAttribute('aria-label', 'Mobile menu');

    nav.addEventListener('click', function (event) {
      const isMobile = window.matchMedia('(max-width: 760px)').matches;
      if (!isMobile) return;

      if (event.target === nav) {
        event.preventDefault();
        nav.classList.toggle('menu-open');
        return;
      }

      if (event.target.tagName === 'A') {
        nav.classList.remove('menu-open');
      }
    });
  });

  document.addEventListener('click', function (event) {
    const isMobile = window.matchMedia('(max-width: 760px)').matches;
    if (!isMobile) return;

    navs.forEach(function (nav) {
      if (!nav.contains(event.target)) {
        nav.classList.remove('menu-open');
      }
    });
  });

  window.addEventListener('resize', function () {
    navs.forEach(function (nav) {
      nav.classList.remove('menu-open');
    });
  });

  if (!document.querySelector('.back-to-top')) {
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.type = 'button';
    backToTopButton.setAttribute('aria-label', 'Scroll back to top');
    backToTopButton.innerHTML = '↑';
    document.body.appendChild(backToTopButton);

    function toggleBackToTopButton() {
      if (window.scrollY > 450) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    }

    backToTopButton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    toggleBackToTopButton();
    window.addEventListener('scroll', toggleBackToTopButton);
  }
});
