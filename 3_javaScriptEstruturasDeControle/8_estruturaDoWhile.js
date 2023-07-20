function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao =-1
// a estrutura dowhile é utilizada para que o -1 não impeça a excução do while nesse caso, por exemplo. Primeiro será executado o bloco e depois o while será verificado, para compreensão se o bloco deve continuar sendo executado, ou não. Também não seria necessário passar um valor para o identificado opcao nesse caso, porque o do faria isso por si só.
do { 
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
} while (opcao != -1) //Do While é a unica estrutura de controle em que a EXPRESSÃO da estrutura está depois do bloco de execução.

console.log('até a proxima!')