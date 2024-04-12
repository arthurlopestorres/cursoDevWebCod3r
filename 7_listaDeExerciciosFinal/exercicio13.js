// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro

let array = ['Arthur', 1, 'Izabelle', 2]

function returnNumbersOnly(array){
    const newArray = array.filter(element => typeof element == 'number')
    console.log(newArray)
    
    return newArray
}
returnNumbersOnly(array)