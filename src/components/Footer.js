export function renderFooter() {
  const footerHTML = `
    <footer style="background-color: var(--secondary-color); color: white; padding: 4rem 0 2rem; margin-top: auto;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; margin-bottom: 3rem;">
          
          <!-- Brand -->
          <div>
            <div style="margin-bottom: 1.5rem;">
              <img src="/abanic-Logo-Abanic.webp" alt="Abanic" style="height: 50px; width: auto; filter: brightness(0) invert(1);">
            </div>
            <p style="margin-bottom: 1.5rem; color: white;">
              Servicio Integral de Aseo y Limpieza en Santiago y Regiones. Más de 33 años de experiencia entregando confianza y calidad.
            </p>
            <div class="social-links" style="display: flex; gap: 1rem;">
              <!-- Add social icons if available -->
            </div>
          </div>

          <!-- Services Links -->
          <div>
            <h4 style="color: var(--text-white); margin-bottom: 1.5rem; font-size: 1.1rem;">Nuestros Servicios</h4>
            <ul style="display: flex; flex-direction: column; gap: 0.8rem; list-style: none; padding: 0;">
              <li><a href="/limpieza-oficinas.html" style="color: #888; text-decoration: none; transition: color 0.3s;">Limpieza de Oficinas</a></li>
              <li><a href="/limpieza-hogar.html" style="color: #888; text-decoration: none; transition: color 0.3s;">Limpieza de Hogares</a></li>
              <li><a href="/limpieza-edificios.html" style="color: #888; text-decoration: none; transition: color 0.3s;">Limpieza de Edificios</a></li>
              <li><a href="/pre-entrega.html" style="color: #888; text-decoration: none; transition: color 0.3s;">Pre Entrega a Constructoras</a></li>
              <li><a href="/sanitizacion.html" style="color: #888; text-decoration: none; transition: color 0.3s;">Sanitización</a></li>
              <li><a href="/reemplazo-personal.html" style="color: #888; text-decoration: none; transition: color 0.3s;">Reemplazo de Personal</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 style="color: white; margin-bottom: 1.5rem; font-size: 1.1rem;">Contacto</h4>
            <ul style="display: flex; flex-direction: column; gap: 1rem; list-style: none; padding: 0;">
              <li style="display: flex; align-items: center; gap: 0.75rem;">
                <span style="display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: rgba(255,255,255,0.1); border-radius: 50%; padding: 4px;">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 100%; height: 100%; color: white;">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:contacto@abanic.cl" style="color: rgba(255,255,255,0.9); text-decoration: none;">contacto@abanic.cl</a>
              </li>
              <li style="display: flex; align-items: center; gap: 0.75rem;">
                <span style="display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: rgba(255,255,255,0.1); border-radius: 50%; padding: 4px;">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 100%; height: 100%; color: white;">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:+56985496838" style="color: rgba(255,255,255,0.9); text-decoration: none;">+56 9 8549 6838</a>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
                <span style="display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: rgba(255,255,255,0.1); border-radius: 50%; padding: 4px; margin-top: 2px;">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 100%; height: 100%; color: white;">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span style="color: rgba(255,255,255,0.9);">Santiago, Chile<br><span style="font-size: 0.85rem; opacity: 0.8;">(Cobertura en Regiones)</span></span>
              </li>
            </ul>
          </div>
        </div>

        <div style="border-top: 1px solid #333; padding-top: 2rem; text-align: center; font-size: 0.9rem; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <span>&copy; 2025 Abanic. Todos los derechos reservados.</span>
          <span>Desarrollado por <a href="https://www.srweb.cl" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; font-weight: bold;">SRweb</a></span>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
}
