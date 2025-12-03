// Main JavaScript
import './style.css';

console.log('Abanic Website Loaded');

// Mobile Menu Toggle (to be implemented)
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Loaded');

  // Handle all forms
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Gracias por su mensaje! Un ejecutivo de Abanic se contactará con usted a la brevedad.');
      form.reset();
    });
  });
});
