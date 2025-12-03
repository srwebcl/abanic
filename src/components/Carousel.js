export function initCarousel(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const track = container.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    const nextBtn = container.querySelector('.carousel-next');
    const prevBtn = container.querySelector('.carousel-prev');

    if (!track || !cards.length) return;

    // Scroll Logic
    const scrollAmount = cards[0].offsetWidth + 32; // Card width + gap

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    // Optional: Auto-scroll or other features can be added here
}
