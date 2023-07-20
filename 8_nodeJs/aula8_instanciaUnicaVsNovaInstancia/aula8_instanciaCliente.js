const contadorA = require('./aula8_instanciaUnica') //com cache
const contadorB = require('./aula8_instanciaUnica')

//aqui, preciso invocar a função dentro do arquivo instanciaNova, que não deve possuir cache:
const contadorC = require('./aula8_instanciaNova')() 
const contadorD = require('./aula8_instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB) //{ valor: 3, inc: [Function: inc] } -> o valor mudou porque tem cache (estamos acessando o mesmo objeto)

contadorC.inc()
contadorC.inc()
console.log(contadorC) //{ valor: 3, inc: [Function: inc] } -> incrementei o objeto de C
console.log(contadorD) //{ valor: 1, inc: [Function: inc] } -> não incrementou, porque estamos gerando um novo objeto a partir de uma função factory, assim, o valor não alterou ao incrementar em contadorC