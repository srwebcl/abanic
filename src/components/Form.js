export function renderForm(containerId) {
  const formHTML = `
    <div class="glass-panel animate-fade-in" style="padding: 1.5rem; background: rgba(255, 255, 255, 0.95); border-top: 4px solid var(--accent-color); box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
      <h3 style="margin-bottom: 0.5rem; color: var(--primary-color); font-size: 1.3rem;">¡Cotiza en Segundos!</h3>
      <p style="margin-bottom: 1rem; font-size: 0.85rem; color: #666;">Respuesta rápida garantizada.</p>
      
      <form id="hero-form" style="display: flex; flex-direction: column; gap: 0.8rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem;">
            <div class="form-group">
            <input type="text" name="name" placeholder="Nombre" required 
                style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: var(--radius-sm); font-family: inherit; transition: border 0.3s; font-size: 0.9rem;">
            </div>
            
            <div class="form-group">
            <input type="tel" name="phone" placeholder="Teléfono" required 
                style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: var(--radius-sm); font-family: inherit; transition: border 0.3s; font-size: 0.9rem;">
            </div>
        </div>
        
        <div class="form-group">
          <input type="email" name="email" placeholder="Correo Electrónico" required 
            style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: var(--radius-sm); font-family: inherit; transition: border 0.3s; font-size: 0.9rem;">
        </div>
        
        <div class="form-group">
          <select name="service" required 
            style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: var(--radius-sm); font-family: inherit; background-color: white; font-size: 0.9rem;">
            <option value="" disabled selected>Selecciona un Servicio</option>
            <option value="oficinas">Limpieza de Oficinas</option>
            <option value="hogar">Limpieza de Hogares</option>
            <option value="edificios">Limpieza de Edificios</option>
            <option value="pre-entrega">Pre Entrega</option>
            <option value="sanitizacion">Sanitización</option>
            <option value="reemplazo">Reemplazo de Personal</option>
          </select>
        </div>

        <div class="form-group">
            <textarea name="message" placeholder="Mensaje (Opcional)" rows="1"
            style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: var(--radius-sm); font-family: inherit; resize: none; font-size: 0.9rem;"></textarea>
        </div>
        
        <button type="submit" class="btn btn-accent" style="width: 100%; padding: 0.8rem; font-weight: 700; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; margin-top: 0.2rem;">
          Solicitar Cotización
        </button>
        
        <p style="font-size: 0.7rem; color: #999; text-align: center; margin-top: 0.5rem; line-height: 1.2;">
          Este sitio está protegido por reCAPTCHA y se aplican la 
          <a href="https://policies.google.com/privacy" target="_blank" style="color: #999; text-decoration: underline;">Política de Privacidad</a> y los 
          <a href="https://policies.google.com/terms" target="_blank" style="color: #999; text-decoration: underline;">Términos de Servicio</a> de Google.
        </p>
      </form>
    </div>
  `;

  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = formHTML;
  }
}
