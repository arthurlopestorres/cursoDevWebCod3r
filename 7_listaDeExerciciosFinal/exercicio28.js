// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro.
let arrayDeNumeros = [38, 2, 365, 10, 125, 11]

function filterArrayByDigNumber (array, digNumber){
    let resultArray = array.filter(element => element.toString().length == digNumber)
    
    if(resultArray.length > 0){
        console.log(resultArray)
        return resultArray 
    } else { 
        console.log('error: no elements with this amount of digits were found') 
    }
}
filterArrayByDigNumber (arrayDeNumeros, 4)