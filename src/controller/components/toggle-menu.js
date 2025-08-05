export function setupToggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuList = document.querySelector('.menu-list');
  const actionsContent = document.querySelector('.actions-content');

  menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
    actionsContent.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (
      menuList.classList.contains('active') &&
      !menuList.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      menuList.classList.remove('active');
      actionsContent.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      if (menuList.classList.contains('active')) {
        menuList.classList.remove('active');
        actionsContent.classList.remove('active');
      }
    }
  });
}