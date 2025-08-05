let currentTranslations = {};

export function setupLanguageSwitcher(onTranslationsLoaded) {
  const mobileSelect = document.getElementById('language-select');
  const desktopSelect = document.getElementById('language-select-desktop');
  const resumeLink = document.getElementById('resume-link');

  function loadLanguage(lang) {
    fetch(`src/controller/i18n/${lang}.json`)
      .then(response => response.json())
      .then(data => {
        currentTranslations = data;

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
          const key = element.getAttribute('data-i18n');
          if (data[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
              element.placeholder = data[key];
            } else {
              element.innerHTML = data[key];
            }
          }
        });

        if (resumeLink) {
          resumeLink.setAttribute('href', 
            lang === 'pt' 
              ? './assets/pdfs/CV-Barbara_Azevedo.pdf' 
              : './assets/pdfs/Resume-Barbara_Azevedo.pdf'
          );
        }

        if (mobileSelect) mobileSelect.value = lang;
        if (desktopSelect) desktopSelect.value = lang;
        document.documentElement.setAttribute('lang', lang);

        if (typeof onTranslationsLoaded === 'function') {
          onTranslationsLoaded(currentTranslations);
        }
      })
      .catch(error => console.error('Error loading language:', error));
  }

  function handleLanguageChange(event) {
    const selectedLang = event.target.value;
    localStorage.setItem('selectedLanguage', selectedLang); 
    loadLanguage(selectedLang);
  }

  if (mobileSelect) mobileSelect.addEventListener('change', handleLanguageChange);
  if (desktopSelect) desktopSelect.addEventListener('change', handleLanguageChange);

  const savedLang = localStorage.getItem('selectedLanguage');
  const initialLang = savedLang || document.documentElement.lang || 'en';
  
  if (mobileSelect) mobileSelect.value = initialLang;
  if (desktopSelect) desktopSelect.value = initialLang;
  loadLanguage(initialLang);
}
