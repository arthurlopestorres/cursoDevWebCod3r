// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.
let stringAleatoria = "Izabelle"

function retornaConsoantes(string) {
    const removeVogals = element => element != 'a' && element != 'e' && element != 'i' && element != 'o' && element != 'u'

    return string.toLowerCase().split('').filter(removeVogals).join('')
}
console.log(retornaConsoantes(stringAleatoria))