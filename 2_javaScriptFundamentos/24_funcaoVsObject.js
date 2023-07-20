 console.log(typeof Object)
 console.log(typeof new Object()) //ele chama isso de instanciar função

 const Cliente = function() {}
 console.log(typeof Cliente)
 console.log(typeof new Cliente())

 class Produto {} //padrão que veio no ES 2015(ES6)
 console.log(typeof Produto) //isso é função
 console.log(typeof new Produto()) //isso é objeto

 //vamos ver mais detalhes no capitulo de funções.