export function renderHeader() {
  const headerHTML = `
    <header class="glass-panel" style="position: fixed; top: 0; width: 100%; z-index: 1000; padding: 0.5rem 0; transition: all 0.3s ease;">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="logo">
          <a href="/">
            <img src="/abanic-Logo-Abanic.webp" alt="Abanic Limpieza Profesional" style="height: 60px; width: auto;">
          </a>
        </div>
        
        <!-- Desktop Nav -->
        <nav class="desktop-nav">
          <ul style="display: flex; gap: 2rem; align-items: center; margin: 0; padding: 0; list-style: none;">
            <li><a href="/" class="nav-link">Inicio</a></li>
            <li class="dropdown">
              <a href="/#servicios" class="nav-link dropdown-toggle">Servicios ▾</a>
              <ul class="dropdown-menu">
                <li><a href="/limpieza-oficinas.html">Limpieza de Oficinas</a></li>
                <li><a href="/limpieza-hogar.html">Limpieza de Hogares</a></li>
                <li><a href="/limpieza-edificios.html">Limpieza de Edificios</a></li>
                <li><a href="/pre-entrega.html">Pre Entrega a Constructoras</a></li>
                <li><a href="/sanitizacion.html">Sanitización</a></li>
                <li><a href="/reemplazo-personal.html">Reemplazo de Personal</a></li>
              </ul>
            </li>
            <li><a href="/#nosotros" class="nav-link">Nosotros</a></li>
            <li><a href="#contacto" class="btn btn-green">Cotizar Ahora</a></li>
          </ul>
        </nav>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile Nav -->
      <div class="mobile-nav">
        <ul style="list-style: none; padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">
          <li><a href="/" class="nav-link">Inicio</a></li>
          <li>
            <span class="nav-link" style="font-weight: 700;">Servicios</span>
            <ul style="padding-left: 1rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
                <li><a href="/limpieza-oficinas.html">Oficinas</a></li>
                <li><a href="/limpieza-hogar.html">Hogares</a></li>
                <li><a href="/limpieza-edificios.html">Edificios</a></li>
                <li><a href="/pre-entrega.html">Pre Entrega</a></li>
                <li><a href="/sanitizacion.html">Sanitización</a></li>
                <li><a href="/reemplazo-personal.html">Reemplazo</a></li>
            </ul>
          </li>
          <li><a href="/#nosotros" class="nav-link">Nosotros</a></li>
          <li><a href="#contacto" class="btn btn-green" style="width: 100%; text-align: center;">Cotizar Ahora</a></li>
        </ul>
      </div>
    </header>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // Mobile Menu Logic
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.mobile-nav');

  if (btn && nav) {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }

  // Sticky Header Logic
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.8)';
      header.style.boxShadow = 'none';
    }
  });
}
