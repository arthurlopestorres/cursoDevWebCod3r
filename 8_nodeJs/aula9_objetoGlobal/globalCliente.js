//posso fazer require num arquivo sem a necessidade de passá-lo para dentro de uma variável:
require('./objetoGlobal')

console.log(MinhaApp.saudacao()) //Estou em todos os lugares!
MinhaApp.nome = 'Arthur' //aqui, conseguiria trocar esse elemento, caso o objeto MinhaApp não estivesse congelado.
console.log(MinhaApp.nome) //sistema legal