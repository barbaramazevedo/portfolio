import { setupLanguageSwitcher } from './i18n/i18n.js';
import { setupThemeToggle } from './themes/toggle-theme.js';
import { setupScrollEffect } from './components/scrollbar.js';
import { setupScrollArrowEffect } from './components/scroll-arrow-btn.js';
import { setupToggleMenu } from './components/toggle-menu.js';
import { setupModal } from './components/modal.js'; 
import { highlightNavOnScroll } from './components/highlight-nav.js'; 

setupLanguageSwitcher((translations) => {
  setupModal(translations);
});

setupThemeToggle();
setupScrollEffect();
setupToggleMenu();
setupModal();
setupScrollArrowEffect();
highlightNavOnScroll();

