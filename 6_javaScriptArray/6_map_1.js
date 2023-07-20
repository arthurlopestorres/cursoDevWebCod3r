//o map serve para transformar dados. A ideia do map é percorrer o array oficial, transformar os dados e devolve-los a um novo array, sem modificar o original.

const numeros = [1, 2, 3]
const numerosDobrados = numeros.map(numero => numero * 2)

console.log(numeros)
console.log(numerosDobrados) //[ 2, 4, 6 ]

const soma10 = numero => numero + 10
const triplo = numero => numero * 3
const paraDinheiro = numero => `R$ ${parseFloat(numero).toFixed(2).replace('.', ',')}`

let resultado = numeros.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado) // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00' ]