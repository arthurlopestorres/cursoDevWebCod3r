// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.
const arrayParesImpares = [2, 1, 3, 4, 5, 6, 7, 8, 9, 9, 9]

function filtersByEven(array){
    let evenIndexNumbers = (number, index) => index % 2 == 0
    let evenNumbers = number => number % 2 == 0

    let filteredArray = array.filter(evenIndexNumbers).filter(evenNumbers)
    console.log(filteredArray)

    return filteredArray
}
filtersByEven(arrayParesImpares)

//? Outra forma de fazer:

// const retornaPares = (array) => array.filter((valor, index) => typeof valor == 'number' && valor%2 == 0 && index%2 == 0)
// console.log(retornaPares(arrayParesImpares))