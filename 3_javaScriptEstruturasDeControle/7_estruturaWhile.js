//while é utilizado quando tenha uma quantidade indeterminada de repetições. Vou utiliza-la quando algo deve acontecer ENQUANTO uma condição não for satisfeita ou estiver ocorrendo.
function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 // se eu utilizasse -1 aqui de inicio, ele nem entraria no while, porque o valor já torna negativa a condição do while, antes mesmo do loop ser iniciado.

while (opcao != -1){ //no caso do while, o retorno da condição tambem é true or false, assim como no if. Quando o retorno for false, o loop se encerra.
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
}
console.log('até a proxima!')