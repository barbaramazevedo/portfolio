export function setupScrollArrowEffect() {
const scrollBtn = document.querySelector('.scroll-btn-arrow');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || window.pageYOffset;

        if (scrollY > 575) {
        scrollBtn.style.display = 'flex';
        } else {
        scrollBtn.style.display = 'none';
        }
    });
}    