// tentando simular um array a partir de um objeto

const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia'
}
console.log(quaseArray[2])
//agora, vou criar uma método dentro de "quaseArray" que retorna automaticamente todos os values do objeto em formato de array:
Object.defineProperty(quaseArray, 'retornaValues', {
    value(){
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray.retornaValues())