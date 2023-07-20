//vamos ver um pouco a respeito do Object.create()
const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}

const filha1 = Object.create(pai) //quando declaro um novo objeto dessa forma, estou falando para o JS que 'pai' já é prototipo de filha1 desde sua criação
filha1.nome = 'Ana'

console.log(filha1.corCabelo) //retorna preto (porque o pai tem essa caracteristica.)
console.log(Object.keys(filha1)) //[ 'nome' ]

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) //o nome de filha 2 não se alterou, pela caracteristica witable: false setada anteriormente.

console.log(Object.values(filha2)) //[ 'Bia' ]
console.log(Object.entries(filha2)) //[ [ 'nome', 'Bia' ] ]

for(let key in filha2){ //posso fazer uma validação para saber se filha 2 possui ou não uma propriedade propria:
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`)
}