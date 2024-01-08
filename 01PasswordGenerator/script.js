
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
        const character = containLetters[Math.round(Math.random() * 12)];
        password += character;
    }

    document.querySelector('#generatedPasswordField').setAttribute('value',`${password}`)


}

