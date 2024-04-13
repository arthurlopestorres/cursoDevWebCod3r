// Criar uma função que receba um array de números e retorne o menor número desse array. 

let arrayA = [2, 3, 1]

function retornaMenor (array) {return array.reduce((atual, proximo) => atual < proximo ? atual : proximo)}
console.log(retornaMenor(arrayA))