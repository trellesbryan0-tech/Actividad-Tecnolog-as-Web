document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('menu-button');
  const nav = document.getElementById('site-menu');

  if (!button || !nav) {
    return;
  }

  const mobileQuery = window.matchMedia('(max-width: 767px)');
  let expanded = false;

  const setMenuState = () => {
    const isMobile = mobileQuery.matches;

    if (!isMobile) {
      nav.classList.remove('hidden');
      nav.classList.add('flex');
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Cerrar menú de navegación');
      expanded = true;
      return;
    }

    if (expanded) {
      nav.classList.remove('hidden');
      nav.classList.add('flex');
      nav.classList.add('is-open');
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Cerrar menú de navegación');
    } else {
      nav.classList.add('hidden');
      nav.classList.remove('flex');
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir menú de navegación');
    }
  };

  button.addEventListener('click', () => {
    expanded = !expanded;
    setMenuState();
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileQuery.matches) {
        expanded = false;
        setMenuState();
      }
    });
  });

  window.addEventListener('resize', () => {
    setMenuState();
  });

  setMenuState();
});
