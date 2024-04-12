// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. 
function retornaSomaArray(array){
    let resultado = array.reduce((acumulador, proximo) => acumulador + proximo)
    console.log(resultado)
}

let numeros = [1, 2, 3, 4]
retornaSomaArray(numeros) //10