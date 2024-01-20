

const selector = document.querySelectorAll(".drum")

for (let index=0 ; index < selector.length ; index++ ){
    
    selector[index].addEventListener('click', () => {
        
        let text = selector[index].innerHTML;
        characterSelected(text);
        buttonAnimation(text);

    }),

    selector[index].addEventListener('keypress', (event) => {

        let text = event.key;
        characterSelected(text);
        buttonAnimation(text);

    })

}

function characterSelected(text){

    switch (text) {
        case 'w': let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();    
            break;
        case 'a': let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();    
            break;
        case 's': let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'd': let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'j': let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'k': let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'l': let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            break;
    }
}


function buttonAnimation(text){

    const selectedElement = document.querySelector(`.${text}`);
    selectedElement.classList.add('pressed');
    setTimeout(() => {
        selectedElement.classList.remove('pressed');
    }, 100);

}

