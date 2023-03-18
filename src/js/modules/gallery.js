const gallery = () => {
    const imgPopup = document.createElement('div');
    const section = document.querySelector('.works');
    const bigImage = document.createElement('img');
    
    imgPopup.classList.add('popup');
    section.appendChild(imgPopup);
    imgPopup.appendChild(bigImage);
    
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    
    section.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            const path = target.closest('a').getAttribute('href');
            bigImage.setAttribute('src', path);
        }
        
        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

export default gallery;