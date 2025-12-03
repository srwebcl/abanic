export function initCarousel(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const track = container.querySelector('.carousel-track');
    const nextBtn = container.querySelector('.carousel-next');
    const prevBtn = container.querySelector('.carousel-prev');

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
