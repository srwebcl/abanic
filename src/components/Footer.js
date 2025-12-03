export function renderFooter() {
    const footerHTML = `
    <footer style="background-color: #1a1a1a; color: #888; padding: 4rem 0 2rem; margin-top: auto;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; margin-bottom: 3rem;">
          
          <!-- Brand -->
          <div>
            <div style="margin-bottom: 1.5rem;">
              <img src="/abanic-Logo-Abanic.webp" alt="Abanic" style="height: 50px; width: auto; filter: brightness(0) invert(1);">
            </div>
            <p style="margin-bottom: 1.5rem;">
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
            <h4 style="color: var(--text-white); margin-bottom: 1.5rem; font-size: 1.1rem;">Contacto</h4>
            <ul style="display: flex; flex-direction: column; gap: 1rem; list-style: none; padding: 0;">
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--primary-color);">✉</span> 
                <a href="mailto:contacto@abanic.cl" style="color: #888; text-decoration: none;">contacto@abanic.cl</a>
              </li>
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--primary-color);">📞</span> 
                <a href="tel:+56985496838" style="color: inherit; text-decoration: none;">+56 9 8549 6838</a>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 0.5rem;">
                <span style="color: var(--primary-color);">📍</span> 
                <span>Santiago, Chile<br><span style="font-size: 0.85rem;">(Cobertura en Regiones)</span></span>
              </li>
            </ul>
          </div>
        </div>

        <div style="border-top: 1px solid #333; padding-top: 2rem; text-align: center; font-size: 0.9rem; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <span>&copy; 2025 Abanic. Todos los derechos reservados.</span>
          <span>Desarrollado con estándares 2025.</span>
        </div>
      </div>
    </footer>
  `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
