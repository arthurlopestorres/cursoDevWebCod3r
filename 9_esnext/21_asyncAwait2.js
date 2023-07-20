function geraNumeroAleatorio(min, max, numerosProibidos){
    if(min > max){
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}
//geraNumeroAleatorio(1, 5, [1, 2, 4])
//  .then(console.log)
//  .catch(console.log) COMENTADO POR CONTA DA FUNCAO ABAIXO

async function gerarMegaSena(quantidadeDeNums){
    try{
        const numeros = []
    for(let _ of Array(quantidadeDeNums).fill()){ //Array(numero).fill() faz com que um array seja preenchido com a quantidade passada para ele em 'numero'
        numeros.push(await geraNumeroAleatorio(1, 60, numeros))
    }
    return numeros
    } catch(e){ //se eu nao criasse esse catch, o catch da execução pegaria o reject da funcao geraNumeroAleatorio
        throw('Que chato!!!')
    }
}
gerarMegaSena(8) //IMPORTANTE: APENAS DE DENTRO DA FUNCAO NAO HAVER UMA NOVA PROMESSA, É PRECISO AGUARDARMOS UMA PROMESSE PARA QUE POSSAMOS TER O RESULTADO, POR ISSO É PRECISO USTILZIARMOS '.THEN'
    .then(console.log)
    .catch(console.log)


//APENAS PARA TREINO, A MELHOR FORMA QUE ENCONTREI DE CRIAR OS NUMEROS DA MEGA SENA FOI:
function generateMegaSenaNumbers(){
    const megaSenaNumbers = []

    function pushRandomNumber(){
        const rdmNumber = parseInt(Math.random() * (60 - 1 + 1)) + 1
        if(megaSenaNumbers.includes(rdmNumber)){
        }else{
            megaSenaNumbers.push(rdmNumber)
        }
    }
    while(megaSenaNumbers.length < 6){
        pushRandomNumber()
    }
    return megaSenaNumbers
}
console.log(generateMegaSenaNumbers())