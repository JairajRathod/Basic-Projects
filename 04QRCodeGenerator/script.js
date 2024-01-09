

function QRCodeGenerator(){
    let userInput = document.querySelector('.inputField').value;
    let alert = document.querySelector('.alertText');
    let image = document.querySelector('.QRimage');
    if (userInput){
        const strArr = userInput.split(' ').join('');
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${strArr}`;
        image.classList.remove('QRimageAlter');
        alert.classList.add('alertTextSwitch');
    }else{
        image.classList.add('QRimageAlter');
        image.src = '';
        alert.classList.remove('alertTextSwitch');
    }
}