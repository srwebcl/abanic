export function renderForm(containerId) {
    const formHTML = `
    <div class="glass-panel animate-fade-in" style="padding: 2rem; background: rgba(255, 255, 255, 0.95); border-top: 4px solid var(--accent-color); box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
      <h3 style="margin-bottom: 0.5rem; color: var(--primary-color); font-size: 1.5rem;">¡Cotiza en Segundos!</h3>
      <p style="margin-bottom: 1.5rem; font-size: 0.9rem; color: #666;">Respuesta rápida garantizada.</p>
      
      <form id="hero-form" style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="form-group">
          <input type="text" name="name" placeholder="Nombre / Empresa" required 
            style="width: 100%; padding: 1rem; border: 1px solid #ddd; border-radius: var(--radius-sm); font-family: inherit; transition: border 0.3s;">
        </div>
        
        <div class="form-group">
          <input type="tel" name="phone" placeholder="Teléfono (+569...)" required 
            style="width: 100%; padding: 1rem; border: 1px solid #ddd; border-radius: var(--radius-sm); font-family: inherit; transition: border 0.3s;">
        </div>
        
        <div class="form-group">
          <input type="email" name="email" placeholder="Correo Electrónico" required 
            style="width: 100%; padding: 1rem; border: 1px solid #ddd; border-radius: var(--radius-sm); font-family: inherit; transition: border 0.3s;">
        </div>
        
        <div class="form-group">
          <select name="service" required 
            style="width: 100%; padding: 1rem; border: 1px solid #ddd; border-radius: var(--radius-sm); font-family: inherit; background-color: white;">
            <option value="" disabled selected>Selecciona un Servicio</option>
            <option value="oficinas">Limpieza de Oficinas</option>
            <option value="hogar">Limpieza de Hogares</option>
            <option value="edificios">Limpieza de Edificios</option>
            <option value="pre-entrega">Pre Entrega</option>
            <option value="sanitizacion">Sanitización</option>
            <option value="reemplazo">Reemplazo de Personal</option>
          </select>
        </div>
        
        <button type="submit" class="btn btn-accent" style="width: 100%; padding: 1rem; font-weight: 700; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px; margin-top: 0.5rem;">
          Solicitar Cotización
        </button>
        
        <p style="font-size: 0.75rem; color: #999; text-align: center; margin-top: 0.5rem;">
          🔒 Tus datos están 100% seguros.
        </p>
      </form>
    </div>
  `;

    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = formHTML;
    }
}
