function validaChute(chute) {
    const numero = +chute; //para converter a string em numero

    if(seValorInvalido(numero)) {
        elementoChute.innerHTML+= `
        <div>Valor inválido!</div>
        ` 
        return
    }

    if(numeroForaDoRange(numero)) {
        elementoChute.innerHTML+= `
        <div>Este número está fora do intervalo válido</div>
        ` 
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns, você acertou!</h2>
        <h3>O número secreto é ${numeroSecreto}.</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML+= `
        <div class="dica">O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    } else {
        elementoChute.innerHTML+= `
        <div class="dica">O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    }

}

function seValorInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForaDoRange(numero) { 
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})
