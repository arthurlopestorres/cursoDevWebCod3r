//como criar varias promises diferentes e ir chamando-as sequencialmente.
function geraNumeroAleatorio(min, max, tempo){
    if(min > max){
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

//esta forma faz com que os numeros sejam gerados e depois exibidos, quando todos estiverem prontos
//exemplo 1
const geraValores = async () => {
    const arrayResultado = []
    for(let i = 0; i < 10; i++){
        let valor = await geraNumeroAleatorio(10, 20, 2000)
        arrayResultado.push(valor)
    }
    console.log(arrayResultado)
}
geraValores()

//exemplo 2
function geraAleatorios(){
    return Promise.all([
        geraNumeroAleatorio(1, 20, 2000),
        geraNumeroAleatorio(2, 40, 2000),
        geraNumeroAleatorio(200, 400, 4000)
    ])
}
// geraAleatorios().then(console.log) comentado pelo exemplo de baixo

//exemplo 3
const gerarAleatorios = async () => {
    const primeiro = await geraNumeroAleatorio(1, 20, 2000)
    const segundo = await geraNumeroAleatorio(2, 40, 2000)
    const terceiro = await geraNumeroAleatorio(200, 400, 4000)

    const arrayResultado = [primeiro, segundo, terceiro]
    console.log(arrayResultado)
}
// gerarAleatorios() comentado pelo primeiro exemplo desta lista