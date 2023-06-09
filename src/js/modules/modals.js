const modals = () => {

    const bindModal = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = modal.querySelector(closeSelector);
        const modalArray = document.querySelectorAll('[data-modal]');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                closeAllModals(modalArray);
                openModal(modal);
            });
        });

        close.addEventListener('click', () => {
            closeAllModals(modalArray);
            closeModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                closeAllModals(modalArray);
                closeModal(modal);
            }
        });
    }
    
    function closeAllModals(modalArray) {
        modalArray.forEach(modal => {
            closeModal(modal);
        });
    }

    function openModal(modal) {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
        document.body.style.marginRight = `${calcScrollbar()}px`;
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        document.body.style.marginRight = '0';
    }

    function showModalByTime(modalSelector, time) {
        setTimeout(() => {
            document.querySelector(modalSelector).style.display = 'block';
        }, time);
    }
    
    function calcScrollbar() {
        let div = document.createElement('div');
        
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        
        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.phone_link', '.popup', '.popup_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 60000);
}

export default modals;