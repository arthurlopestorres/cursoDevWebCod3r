// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.
let stringAleatoria = "Izabelle"

function removesVogals(string){
    let vogals = 'aeiou'

    let arrayFromString = string.split('')
    let arrayWithoutVolgas = arrayFromString.filter(letter => !vogals.includes(letter))

    let stringWithoutVolgas = arrayWithoutVolgas.join('')
    console.log(stringWithoutVolgas)
}

removesVogals(stringAleatoria)