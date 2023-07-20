// Armazenando umna funcao em um identificador. Nesse caso, o identificador será o nome da função, visto que a função está sendo declarada sem nome (funcao anonima), para quando é abrigada dentro de um identificador.
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma funcao arrow em uma variavel. Funcao arrow é um novo conceito de funcao (JS 2015). Na prática, um aspecto mais simples seria entender que esta é uma forma reduzida de escrever uma função.
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 4))

//Função arrow com return implicito
const subtracao = (a, b) => a - b //nesse caso, temos um exemplo para funções que retornam apenas um resultado, fazendo apenas uma unica operação com os dados. Entende-se aqui, que o seguinte: 
//function subtracao (a, b){ return a - b } ou 
//const subtracao = funcion (a, b){ return a - b }
console.log(subtracao(4, 2))

//é possível diminuir ainda mais, caso a função faça apenas 1 ação, com um paramentro só:
const imprimirTexto = a => console.log(a)
imprimirTexto('Arthur Lopes Torres')