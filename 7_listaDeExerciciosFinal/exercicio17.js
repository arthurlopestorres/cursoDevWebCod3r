// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. 
const arrayDeNumeros = [1, 2, 3]
const somaTudo = (array) => array.reduce((total, atual) => total + atual)
console.log(somaTudo(arrayDeNumeros))