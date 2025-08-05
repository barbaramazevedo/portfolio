export function highlightNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const menuLinks = document.querySelectorAll('.menu-item a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.menu-item a[href="#${id}"]`);

        if (entry.isIntersecting) {
          menuLinks.forEach(link => link.classList.remove('active'));
          if (link) link.classList.add('active');
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    }
  );

  sections.forEach(section => {
    observer.observe(section);
  });
}