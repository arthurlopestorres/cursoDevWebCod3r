//this, por padrão, aponta para module.exports
console.log(this === global) //false
console.log(this === module) //false
console.log(this === module.exports) //true
console.log(this === exports) //true

function logThis(){
    console.log('dentro de uma função...')
    console.log('THIS DENTRO DE FUNCTION COMUM É O MODULE.EXPORTS?', this === module.exports) //false
    console.log('THIS DENTRO DE FUNCTION COMUM É O GLOBAL?', this === global) //true -> this será onde a função está sendo chamado, porque não estou utilizando uma arrow function.
}logThis()

//this em uma arrow function é o module.exports:
const arrowFunction = () => {
    console.log('THIS DENTRO DE ARROW FUNCTION É O GLOBAL?', this === global) //false
    console.log('THIS DENTRO DE ARROW FUNCTION É O MODULE.EXPORTS?', this === module.exports) //true
}
arrowFunction()