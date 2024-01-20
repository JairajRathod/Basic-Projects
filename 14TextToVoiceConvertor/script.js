let speech = new SpeechSynthesisUtterance();
const listenButton = document.querySelector('.listenButton');
const textArea = document.querySelector('.textArea');

let voices = [];
let voiceSelect = document.querySelector('.selectItem');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, index) => {
        voiceSelect.options[index] = new Option(voice.name, index);
    })
}

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect]
})


listenButton.addEventListener('click', () => {
    window.speechSynthesis.cancel()
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
})