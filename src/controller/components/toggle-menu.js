export function setupToggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuList = document.querySelector('.menu-list');
  const actionsContent = document.querySelector('.actions-content');

  menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
    actionsContent.classList.toggle('active');
  });
}