const tabs = (tabSection, tabButtonSelector, tabContentSelector, activeClass) => {

    const section = document.querySelector(tabSection);
    const tabButtons = document.querySelectorAll(tabButtonSelector);
    const tabContents = document.querySelectorAll(tabContentSelector);

    function hideTabContent() {
        tabContents.forEach(content => {
            content.style.display = 'none';
        });

        tabButtons.forEach(btn => {
            btn.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabContents[i].style.display = 'block';
        tabButtons[i].classList.add(activeClass);
    }

    section.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains(tabButtonSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabButtonSelector.replace(/\./, ''))) {
            tabButtons.forEach((tab, i) => {
                if (target === tab || target.parentNode === tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });

    hideTabContent();
    showTabContent();

}

export default tabs;