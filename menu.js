document.addEventListener('DOMContentLoaded', function () {
  const serviceIconStyle = document.createElement('style');
  serviceIconStyle.textContent = `
    .service-grid .card:nth-child(4) .card-icon::before {
      content: "" !important;
      width: 30px;
      height: 30px;
      display: block;
      background: currentColor;
      -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cg fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='49' cy='12' r='5' fill='black'/%3E%3Cpath d='M49 1v4M49 19v4M38 12h4M56 12h4M41 4l3 3M55 4l-3 3M41 20l3-3M55 20l-3-3'/%3E%3Cpath d='M9 54h46M9 54l15-18h19l12 18M18 44h29M25 36v18M35 36v18M43 36v18'/%3E%3Cpath d='M26 18h10v18H26zM36 25h10v11H36zM26 18l5-6h10l5 13'/%3E%3C/g%3E%3C/svg%3E") center / contain no-repeat;
      mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cg fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='49' cy='12' r='5' fill='black'/%3E%3Cpath d='M49 1v4M49 19v4M38 12h4M56 12h4M41 4l3 3M55 4l-3 3M41 20l3-3M55 20l-3-3'/%3E%3Cpath d='M9 54h46M9 54l15-18h19l12 18M18 44h29M25 36v18M35 36v18M43 36v18'/%3E%3Cpath d='M26 18h10v18H26zM36 25h10v11H36zM26 18l5-6h10l5 13'/%3E%3C/g%3E%3C/svg%3E") center / contain no-repeat;
    }
  `;
  document.head.appendChild(serviceIconStyle);

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
});
