// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array. 
let arrayDeNumeros = [4, 8, 15, 16, 23, 42]

function retornaSegundoMaior (array) {
    let arrayTemporario = array
    let maiorTemporario = array[0]

    for(let i in arrayTemporario){ //peguei o maior
        if(arrayTemporario[i] > maiorTemporario){
            maiorTemporario = arrayTemporario[i]
        }
    }
    const transformaEmString = valor => valor.toString()
    const removeMaior = valor => !valor.includes(maiorTemporario)
    const transformaEmNumber = valor => Number(valor)

    let arrayAtualizado = arrayTemporario.map(transformaEmString).filter(removeMaior).map(transformaEmNumber)
    let maiorAtualizado = arrayAtualizado[0]

    for(let i in arrayAtualizado){ //peguei o segundo maior
        if(arrayAtualizado[i] > maiorAtualizado){
            maiorAtualizado = arrayAtualizado[i]
        }
    }

    console.log('o segundo maior é:', maiorAtualizado)
}
retornaSegundoMaior (arrayDeNumeros)