const showHideButton = document.querySelector('#showHideButton');
    const inputField = document.querySelector('#newPassword');

    showHideButton.addEventListener('click', () => {
        if (showHideButton.innerHTML === 'Show'){
            showHideButton.innerHTML = 'Hide';
            inputField.setAttribute('type','text');
        }else{
            showHideButton.innerHTML = 'Show';
            inputField.setAttribute('type','password');
        }
        
    })