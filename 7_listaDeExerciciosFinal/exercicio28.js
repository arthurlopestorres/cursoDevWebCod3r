// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro.
let arrayDeNumeros = [38, 2, 365, 10, 125, 11]


function filtraPorQuantidadeDeDigitos(array, qtdDigitos){
    const transformaString = element => element.toString()
    const filtraResultado = element => element.length == qtdDigitos
    const transformaNumber = element => Number(element)

    let resultArray = array.map(transformaString).filter(filtraResultado).map(transformaNumber)
    console.log(resultArray)
}
filtraPorQuantidadeDeDigitos(arrayDeNumeros, 3)