import checkNumInputs from "./checkNumInputs.js";

const forms = (state) => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    const message = {
        loading: 'Загрузка',
        success: 'Успешно',
        failure: 'Ошибка'
    };
    
    checkNumInputs('[name="user_phone"]');
    
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
           
           if (form.getAttribute('data-calc') === 'end') {
               for (let key in state) {
                   formData.append(key, state[key]);
               }
           }
           
           postData('../files/server.php', formData)
               .then(() => {
                   statusMessage.textContent = message.success;
               })
               .catch(() => {
                   statusMessage.textContent = message.failure;
               })
               .finally(() => {
                   clearInputs();
                   setTimeout(() => {
                       statusMessage.remove();
                       for (let key in state) {
                           delete state[key];
                       }
                       
                   }, 5000);
               });
       });
    });

}

export default forms;