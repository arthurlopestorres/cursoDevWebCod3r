// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.
let stringAleatoria = "Arthur ama andAr de bicicleta"

function verificaLetras(string, letra){
    let stringFiltro = Object.values(string).filter(element => element.includes(letra))
    let amountShown = stringFiltro.length
    console.log(amountShown)
}
verificaLetras(stringAleatoria, 'a')