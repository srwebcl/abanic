// Main JavaScript
import './style.css';

console.log('Abanic Website Loaded');

// Mobile Menu Toggle (to be import './style.css';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderForm } from './components/Form.js';
import { initCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
  // Render Global Components
  renderHeader();
  renderFooter();

  // Render Hero Form if container exists
  renderForm('hero-form-container');

  // Initialize Carousel
  initCarousel('services-carousel');

  console.log('DOM Loaded');

  // Handle all forms (Event delegation for dynamically injected forms)
  document.body.addEventListener('submit', (e) => {
    if (e.target.tagName === 'FORM') {
      e.preventDefault();
      alert('¡Gracias por su mensaje! Un ejecutivo de Abanic se contactará con usted a la brevedad.');
      e.target.reset();
    }
  });
});
