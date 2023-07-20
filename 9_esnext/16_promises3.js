//vamos fazer uma função que gera um numero aleatorio entre dois numeros passados como paramentro
function geraNumeroAleatorio(min, max){
    if(min > max){
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

geraNumeroAleatorio(10, 30).then(console.log)