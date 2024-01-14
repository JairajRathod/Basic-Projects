function generatePassword(){
    let containLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numberChecked = document.querySelector('#includeNumberBox').checked;
    let specialCharacterChacked = document.querySelector('#includeSpecialCharactersBox').checked;

    if (numberChecked){
        containLetters += '0123456789';
    }

    if (specialCharacterChacked){
        containLetters += '~!@#$%^&*()_=><?*-+/';
    }

    let password = '';

    for (let index=0 ; index<12 ; index++){
        const character = containLetters[Math.floor(Math.random() * containLetters.length)];
        password += character;
    }

    document.querySelector('#generatedPasswordField').setAttribute('value',`${password}`)
    }


    // document.querySelector('#generatedPasswordField').addEventListener("click",copyPassword);

    function copyPassword(){
        let copyData = document.querySelector('#generatedPasswordField');
        // copyData.select();

        if(!copyData.value){
            let copyAlert = document.querySelector('#copyAlertMessage');
            copyAlert.classList.remove('copyAlertSwitch');
            setTimeout(() => {
                copyAlert.classList.add('copyAlertSwitch');
            }, 3000);
        }else{
            navigator.clipboard.writeText(copyData.value);
            let confirmText = document.querySelector('#copyMessage');
            confirmText.classList.remove('copyMessageSwitch');
            setTimeout(() => {
                confirmText.classList.add('copyMessageSwitch');
            }, 3000);
        }

    }