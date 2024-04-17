function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}
const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)

//////////////////////////////////////////////////////////////

function real2(strings, ...valores){
    const resutladoFinal = []
    valores.forEach((valor, index) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2).replace('.', ',')}`
        resutladoFinal.push(strings[index], valor)
    })
    return resutladoFinal.join('')
}

const preco1 = 100.99
const preco2 = 200.45

console.log(real2 `caneta custa ${preco1} e lapis custa ${preco2}`)