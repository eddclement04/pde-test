document.addEventListener('DOMContentLoaded', function () {
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
});
