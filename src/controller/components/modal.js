export function setupModal(translations) {
    const modal = document.getElementById('portfolio-modal');
    const closeBtn = modal.querySelector('.modal-close');

    const modalImg = modal.querySelector('.modal-left img');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDate = modal.querySelector('.modal-date');
    const modalDesc = modal.querySelector('.modal-description');
    const siteBtn = modal.querySelector('.site-link');
    const repoBtn = modal.querySelector('.repo-link');
    const modalButtons = modal.querySelector('.modal-buttons');

    function openModalFromCard(card) {
        const title = card.dataset.title;
        const img = card.dataset.img;

        const descKey = card.dataset.descriptionI18n;
        const dateKey = card.dataset.dateI18n;

        const desc = descKey && translations[descKey]
            ? translations[descKey]
            : card.dataset.description;

        const date = dateKey && translations[dateKey]
            ? translations[dateKey]
            : card.dataset.date;

        const site = card.dataset.site;
        const repo = card.dataset.repo;

        const siteVisible = !!site;
        const repoVisible = !!repo;

        siteBtn.href = site || '#';
        siteBtn.style.display = siteVisible ? 'inline-flex' : 'none';

        repoBtn.href = repo || '#';
        repoBtn.style.display = repoVisible ? 'inline-flex' : 'none';

        if ((siteVisible && !repoVisible) || (!siteVisible && repoVisible)) {
            modalButtons.classList.add('align-right');
        } else {
            modalButtons.classList.remove('align-right');
        }

        modalTitle.textContent = title;
        modalImg.src = img;
        modalDate.textContent = date;
        modalDesc.textContent = desc;

        modal.classList.remove('hidden');
        document.body.classList.add('modal-open');
    }

    const cards = document.querySelectorAll('.portfolio-card');

    cards.forEach(card => {
        const img = card.querySelector('.portfolio-img');
        const btn = card.querySelector('.view-more-btn');

        [img, btn].forEach(el => {
            if (el) {
                el.addEventListener('click', () => openModalFromCard(card));
            }
        });
    });

    function closeModal() {
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', e => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}
