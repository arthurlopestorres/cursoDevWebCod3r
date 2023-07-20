//vamos falar nessa aula de função arrow
const soma = (a, b) => a + b
console.log(soma(1, 2)) //3 

//quando tenha apenas um parametro, nao preciso de parenteses:
const retornaNome = nome => 'olá ' + nome
console.log(retornaNome('Arthur'))

//Arrow function (this)
const lexico1 = () => {
    console.log(this === exports) //true
    console.log(this) //{} -> module.exports == exports == this == {}
}
lexico1() 
//this, na arrow function vai sempre apontar para o contexto onde a função foi declarada.
const lexico2 = lexico1.bind({})
lexico2() //true

//parametro default dentro de uma função
function log (texto = 'Node'){
    console.log(texto) //Node
}
log() //Node
log('SOu mais forte') //Sou mais forte

//operador rest -> este operador tem dois nomes: rest (agrupar) e spread (espalhar). No contexto de funções, quando você agrupa inmformações para trabalhar com elas, ele é tratado como rest. No contexto de objetos, quando é preciso espalhar informações para trabalhar com elas, ele será tratado como spread.
//o rest é o três pontinhos antes da palavra na declaração da função.
function total (...numeros){
    let total = numeros.reduce((resultado, atual) => resultado + atual)
    console.log(total)
}
total(1, 2, 3, 4) //10

function somaTudo (...valores){
    let total = 0
    valores.forEach(valor => total += valor)
    console.log(total)
}
somaTudo(2, 2, 4) //8