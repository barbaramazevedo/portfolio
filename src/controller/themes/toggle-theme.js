const root = document.documentElement;
const themeToggles = document.querySelectorAll('#theme-toggle, #theme-toggle-desktop');
const moonIcons = document.querySelectorAll('.icon-moon');

const moonImages = [
  './assets/icons/moon.svg',
  './assets/icons/moon-1star.svg',
  './assets/icons/moon-2star.svg'
];
let moonIndex = 0;

export function setupThemeToggle() {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else {
    root.setAttribute('data-theme', 'light');
  }

  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', newTheme);

      localStorage.setItem('selectedTheme', newTheme);
    });
  });

  setInterval(() => {
    const currentTheme = root.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      moonIndex = (moonIndex + 1) % moonImages.length;
      moonIcons.forEach(icon => {
        icon.src = moonImages[moonIndex];
      });
    }
  }, 1500);
}