// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro. 
let arrayDePalavras = ['Ssalinhos', 'lagartos', 'aguias', 'grilos']

const filtro = (word, array) => {
    let newArray = array.map(element => element.toLowerCase())
    let filterArray = newArray.filter(element => element.includes(word.toLowerCase()))
    console.log(filterArray)
}
filtro('ag', arrayDePalavras)