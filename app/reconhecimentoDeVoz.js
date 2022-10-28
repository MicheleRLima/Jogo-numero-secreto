const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-br';

recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    let chute = event.results[0][0].transcript;
    console.log(chute);
    exibeChuteNaTela(chute);
    validaChute(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());