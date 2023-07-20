//A função Object possui algumas funções, a exemplo do visto anteriormente Object.freeze()

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

////////////////////////////////////////////////////

//PRIMEIRA FUNÇÃO: Object.keys([objeto]) -> retorna todas as chaves dentro do objeto.
console.log(Object.keys(pessoa))

////////////////////////////////////////////////////

//SEGUNDA FUNÇÃO: Object.values([objeto]) -> retorna todos os valores dentro do objeto
console.log(Object.values(pessoa))

////////////////////////////////////////////////////

//TERCEIRA FUNÇÃO: Object.entries([objeto]) -> retorna todos os pares chave: valor dentro do objeto (EM FORMA DE ARRAY)
console.log(Object.entries(pessoa))
//eu poderia percorrer com um forEach por exemplo:
Object.entries(pessoa).forEach(entry => {
    console.log(`${entry[0]}: ${entry[1]}`)
})

//outra forma de fazer é usando destructuring de arrays:
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

////////////////////////////////////////////////////

//QUARTA FUNÇÃO: Object.defineProperty(objetoAlvo, 'nomeDaPropriedade', {objeto com caracteristicas da propriedade}) -> define uma nova propriedade de um objeto
Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true, //significa que pode retornar na listagem do objeto (utilizando Object.keys(), por exemplo
    writable: false, //nesse caso, significa que o valor atribuido a esta propriedade não pode ser alterado. -> mesmo que o Objetct.freeze
    value: '14/01/2019'
})

pessoa.dataDeNascimento = '01/01/2017'
console.log(pessoa.dataDeNascimento)
console.log(Object.keys(pessoa)) //vai listar a data de nascimento, porque está como enumerable: true. Se estivesse falso, eu poderia acessar, mas nao retorna-lo na listagem.

////////////////////////////////////////////////////

//QUINTA FUNÇÃO: Object.assign() -> faz com que outros objetos sejam concatenados no primeiro, sobrescrevendo valores, caso a mesma chave exista.
const destino = {a: 1}
const obj1 = {b: 4}
const obj2 = {c:1, a: 5}

const obj = Object.assign(destino, obj1, obj2)
console.log(obj) //{ a: 5, b: 4, c: 1 }

//////////////////////////////////////////////////////////////RESUMO/////////////////////////////////////////////////////////////////////////////
//Object.values([objeto]) -> retorna todos os valores dentro do objeto (formato de array): [valor, valor, valor]
//Object.keys([objeto]) -> retorna todas as chaves dentro do objeto (formato de array): [chave, chave, chave]
//Object.entries([objeto])-> retorna todas as chaves e valores do objeto em formato de array: [[chave, valor], [chave, valor], [chave, valor]]
//Object.defineProperty([objeto], [propriedade(string), {value: [valor], enumerable: [true or false], writable: [true or false]}])
//Object.assign([objeto], [objeto], ...) -> concatena varios objetos, devolvendo um objeto com todos os demais concatenados.