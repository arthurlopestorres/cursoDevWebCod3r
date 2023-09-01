//? Para pegar a lista de classes de um elemento, utilizamos o parametro classList, exemplo:
const listaDeClasses = document.querySelector('body').classList
console.log(listaDeClasses)

//? Posso fazer algumas operação com a classList de um elemento, exemplo:
//.add , .remove , .toggle , .contains , .length

//! adicionar
listaDeClasses.add('teste')
console.log(listaDeClasses)

//! remover
listaDeClasses.remove('teste')
console.log(listaDeClasses)

//! se ja existir, remove, se não existir, adiciona:
listaDeClasses.toggle('exercicio1')
console.log(listaDeClasses)

listaDeClasses.toggle('exercicio1')
console.log(listaDeClasses)

//! verifica se há uma classe na listagem
console.log(listaDeClasses.contains('conteudo')) //true
console.log(listaDeClasses.contains('exercicio1')) //false

//! verifica a quantidade de classes num elemento (tamanho da lista)
console.log(listaDeClasses.length) //2