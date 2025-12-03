// Main JavaScript
import './style.css';

console.log('Abanic Website Loaded');

// Mobile Menu Toggle (to be import './style.css';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderForm } from './components/Form.js';
import { initCarousel } from './components/Carousel.js';
import { renderWhatsAppButton } from './components/WhatsAppButton.js';

document.addEventListener('DOMContentLoaded', () => {
  // Render Global Components
  renderHeader();
  renderFooter();
  renderWhatsAppButton();

  // Render Hero Form if container exists
  renderForm('hero-form-container');

  // Initialize Carousel
  initCarousel('services-carousel');
  initCarousel('testimonials-carousel');

  console.log('DOM Loaded');

  // Inject reCAPTCHA Script
  const recaptchaScript = document.createElement('script');
  recaptchaScript.src = 'https://www.google.com/recaptcha/api.js?render=TU_CLAVE_DE_SITIO_AQUI'; // Reemplazar con la clave de sitio
  document.head.appendChild(recaptchaScript);

  // Handle all forms
  document.body.addEventListener('submit', async (e) => {
    if (e.target.tagName === 'FORM') {
      e.preventDefault();
      const form = e.target;
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerText;

      submitBtn.disabled = true;
      submitBtn.innerText = 'Enviando...';

      try {
        // 1. Get reCAPTCHA Token
        const token = await new Promise((resolve) => {
          grecaptcha.ready(() => {
            grecaptcha.execute('TU_CLAVE_DE_SITIO_AQUI', { action: 'submit' }).then(resolve);
          });
        });

        // 2. Prepare Data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.token = token; // Add token to data

        // 3. Send to Backend
        const response = await fetch('/contact.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
          // Redirección a página de gracias para conversión
          window.location.href = '/gracias.html';
        } else {
          throw new Error(result.message || 'Error al enviar');
        }

      } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente o contáctanos por WhatsApp.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
      }
    }
  });
  // Scroll Animation Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Observe all elements with .animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
