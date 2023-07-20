// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

let stringAleatoria = 'me divirto aprendendo a programar'

function contaPalabras(string){
    const validateWord = element => element != '' && typeof element == 'string' && element != ',' && element != '.' && element != '!' && element != '?'
    let arrayDePalavras = string.split(' ').filter(validateWord)
    let amountOfWords = arrayDePalavras.length
    console.log(amountOfWords)
}
contaPalabras(stringAleatoria)