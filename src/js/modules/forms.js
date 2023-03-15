const forms = () => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const phoneInputs = document.querySelectorAll('[name="user_phone"]');

    const message = {
        loading: 'Загрузка',
        success: 'Успешно',
        failure: 'Ошибка'
    };
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/, '');
        });
    });
    
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        
        return await res.text();
    };
    
    const clearInputs = () => {
        inputs.forEach(input => {
           input.value = '';
        });
    };

    forms.forEach(form => {
       form.addEventListener('submit', (e) => {
           e.preventDefault();
           
           let statusMessage = document.createElement('div');
           statusMessage.classList.add('status');
           form.appendChild(statusMessage);
           
           const formData = new FormData(form);
           
           postData('../files/server.php', formData)
               .then(res => {
                   console.log(res);
                   statusMessage.textContent = message.success;
               })
               .catch(() => {
                   statusMessage.textContent = message.failure;
               })
               .finally(() => {
                   clearInputs();
                   setTimeout(() => {
                       statusMessage.remove();
                   }, 5000);
               });
       });
    });

}

export default forms;