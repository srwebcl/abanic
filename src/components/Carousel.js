export function initCarousel(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const track = container.querySelector('.carousel-track');
    // Buttons are outside the container in the layout
    // We need to find the specific buttons for THIS carousel instance if possible, or assume global classes if unique
    // Since we have two carousels now, we should look for buttons relative to the container's parent or specific classes

    let nextBtn, prevBtn;

    if (containerId === 'services-carousel') {
        nextBtn = document.querySelector('.carousel-next');
        prevBtn = document.querySelector('.carousel-prev');
    } else if (containerId === 'testimonials-carousel') {
        nextBtn = document.querySelector('.testimonial-next');
        prevBtn = document.querySelector('.testimonial-prev');
    }

    if (!track) return;

    // Scroll Logic
    const getScrollAmount = () => {
        const card = track.firstElementChild;
        return card ? card.offsetWidth + 32 : 300; // Card width + gap
    };

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });
    }
}
