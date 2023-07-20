//nesse capitulo vamos falar sobre os novos recursos do echma script 2016 e 2017. (ES7 e ES8)
//vamos ver promise, async, await, etc.
//---------------------------------------------------------------------------------
// REVISAO 01

//Duas mais novas formas de declarar identificadores é utilizando o let e o const
//o let tem escopo de bloco, por isso ele fica mais seguro dentro de um objeto, por exemplo.
{
    var a = 2
    let b = 3
}
console.log(a) //2 -> var não tem escopo de bloco
//console.log(b) //retorna erro, porque o let somente pode acessado dentro do bloco (contexto) onde ele foi declarado

// Template String
const produto = 'ipad'
console.log(`${produto} é caro`) //interpolando produto para trazer o valor escrevendo string.

// Destructuring (tirar de dentro de uma estrutura determinada informação)
// O destructuring facilita o acesso a determinadas informações dentro de arrays, objetos, strings, etc.
const [l, e, ...tras] = 'Cod3r'
console.log(l) //c
console.log(e) //o
console.log(tras) //[ 'd', '3', 'r' ]

const [x, y] = [1, 2]
console.log(x, y) //1 2
//é possível tambem ignorar um elemento usando destructuring:
const [w, ,z] = [1, 2, 3]
console.log(w, z) //1 3

//desestruturando objeto:
const {idade, nome} = {nome: 'Ana', idade: 9}
console.log(idade, nome) //9 Ana
//posso tambem renomear o elemento do objeto:
const {pais: country, cidade: city} = {pais: 'Brasil', cidade: 'Sao Paulo'}
console.log(country, city) //Brasil Sao Paulo