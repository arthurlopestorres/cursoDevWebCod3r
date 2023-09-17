//precisamos estar muito familiarizados com funções anonimas.
//funcoes anonimas sao simplesmente funcoes sem um nome definido:
const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){ //aqui, operacao esta recebendo a funcao soma, caso nenhuma outra funcao seja passada para ela.
    console.log(operacao(a, b)) 
}
imprimirResultado(3, 4)
imprimirResultado(3, 4, soma) //posso chamar soma, como terceiro parametro, sem probemas, que o resultado se mantem o mesmo, assim, estou atribindo soma a "operacao", entao se eu criar uma outra função anonima no terceiro parametro, estarei passando ela para "operacao", alterando o calculo:
imprimirResultado(3, 4, function(a, b){
    return a - b
})
//posso tambem atribuir a "operacao" uma arrow function:
imprimirResultado(3, 4, (a, b) => a * b)

const pessoa = {// 2 forma de declarar função dentro do objeto. A primeira é anonima e a segunda, nao.
    falar: function(){
        console.log('opa!')
    },
    falar2(){
        console.log('opa!2')
    }
}
pessoa.falar()
pessoa.falar2()