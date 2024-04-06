//JS é uma linguagem muito dinamica e flexivel, por ser fracamente tipada.
//Eventualmente, é preciso restringirmos um pouco mais os resultados, de forma que a linguagem fique menos imprevisivel

//PRIMEIRO: Object.preventExtensions -> ele previne que o objeto seja extendido (não consigo aumentar o numero de atributos no objeto). Posso até excluir elementos, mas não aumentar:
const produto = Object.preventExtensions({
    nome: 'arthur', preco: 1.99, tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto)) // False -> o objeto "produto" não é extensível

produto.nome = 'borracha'
produto.descricao = 'borracha branca'
delete produto.tag

console.log(produto) //o nome foi alterado, a descrição não foi adicionada (porque ele não é extensivel) e tag foi deletada. { nome: 'borracha', preco: 1.99 }

//SEGUNDO: Object.seal -> quando eu selo um objeto eu não consigo adicinar nem excluir atributos, mas consigo modificar os valores do objeto.
const pessoa = {nome: 'Maria', idade: 24}
Object.seal(pessoa)
console.log(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) //Selado: true

delete pessoa.nome
pessoa.idade = 34

console.log(pessoa)

//TERCEIRO: Object.freeze = faz com que o objeto não possa ser modificado de forma alguma.
const cachorro = {nome: 'bobi', idade: 16, currentStatus: 'deceased'}
Object.freeze(cachorro)
cachorro.nome = 'marroni'
delete cachorro.idade
console.log(cachorro) //o nome não foi alterado e a idade não foi deletada, por conta do freeze.