// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro' 
console.log(pessoa) //aqui, vemos que foi possivel alterar o valor de nome, porque "nome" permanece no mesmo endereço de antes na memoria.

//pessoa = {nome: 'Ana'} -> aqui não será possível, porque estou tentando declarar um novo objeto e atribui-lo a pessoa. Só que esta em um endereço difernete na memoria.

//posso impedir que os elementos de um objeto sejam alterados utilizando (tornando o objet 100% constante)
Object.freeze(pessoa)
pessoa.nome = 'Arthur'
console.log(pessoa) // o nome não foi alterado, porque objeto foi congelado. Também não seria possível adicionar elementos ou deletar elementos do objeto nesse caso.

////////////////////////////////////////////////////////////////

//Posso também criar um objeto constante desde o principio

const objetoConstante = Object.freeze({nome: 'Arthur'}) //não será possível alterar este objeto de forma alguma.