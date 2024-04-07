// tentando simular um array a partir de um objeto

const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia'
}
console.log(quaseArray[2]) // seria a mesma coisa que fazermos "quaseArray.2", mas isso nao poderia ser feito, porque a notação ponto somente pode ser utilizada para quando a chave é do tipo textual (nao necessariamente uma string)

//! agora, vou criar uma método dentro de "quaseArray" que retorna automaticamente todos os values do objeto em formato de array:
Object.defineProperty(quaseArray, 'retornaValues', {
    value(){ // "value, normalmente, receberia o valor para a chave "retornaValues". Nesse caso, como o valor é uma função, "value" precisa ser declarado como uma função, difernete do caso de ser um número ou string (exemplo abaixo)
        return Object.values(this)
    },
    enumerable: true //enumerable: false nesse caso tem como objetivo prevenir que a função "value", que está sendo passada para a chave "retornaValues", seja retornada como um elemento em Object.values(this) -> this, nesse caso, é o próprio objeto "quaseArray".
})

console.log(quaseArray)
console.log(quaseArray.retornaValues())

Object.defineProperty(quaseArray, 'valorEmString', {value: 'Arthur', enumerable: true, rewritable: false})
quaseArray.valorEmString = 'Ayrton' // nao mudou o valor adicionado acima, por conta do "rewritable: false"
console.log(quaseArray)