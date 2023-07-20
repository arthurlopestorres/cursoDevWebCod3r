// Criar uma função que receba um array de números e retorne o menor número desse array. 
const numeros = [23, 15, 16, 4, 42, 8]

function retornaMenor(array){
    let menorValor = array[0]
    for(let i in array){
        if(array[i] < menorValor){
            menorValor = array[i]
        }
    }
    console.log(menorValor)
}
retornaMenor(numeros)