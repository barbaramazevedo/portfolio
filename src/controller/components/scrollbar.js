const nav = document.querySelector('.nav');

export function setupScrollEffect() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}
