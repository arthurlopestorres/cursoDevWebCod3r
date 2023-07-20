//SET é uma estrutura não indexada, que não aceita repetição, e é uma estrutura de conjunto (diferente do array e do objeto)
const times = new Set()
times.add('Vasco')
times.add('Sao Paulo')
times.add('PSG').add('RealMadrid').add('Vasco') //estou adicionando o Vasco aqui, para mostrar que não pode ser repetido.
console.log(times) //{ 'Vasco', 'Sao Paulo', 'PSG', 'RealMadrid' }

//Set é um objeto não indexado, então ele não retorna os elementos como um objeto faz:
console.log(Object.entries(times)) //[]
console.log(Object.keys(times)) //[]
console.log(Object.values(times)) //[]
console.log('keys:', times.keys()) //{ 'Vasco', 'Sao Paulo', 'PSG', 'RealMadrid' }
console.log('values:', times.values()) //{ 'Vasco', 'Sao Paulo', 'PSG', 'RealMadrid' }

//podemos verificar o tamanho de times com .size:
console.log(times.size) //4

//posso verificar com o .has também (é case sensitive):
console.log(times.has('vasco')) //false
console.log(times.has('Vasco')) //true

//consigo deletar elementos do set:
times.delete('Vasco')
console.log(times.has('Vasco')) //false
console.log(times) //Set(3) { 'Sao Paulo', 'PSG', 'RealMadrid' }

//posso passar as repetições de um array para um set com finalidade de remover as duplicatas:
const lista = ['nome1', 'nome2', 'nome3', 'nome3']
const listaSet = new Set(lista)
// const arrayFinal = [] -> foi comentado por conta do terceiro metodo demonstrado abaixo

console.log(listaSet) //Set(3) { 'nome1', 'nome2', 'nome3' }

//o set, por não aceitar repetições, pode ser uma ideia para remover duplicatas de array, por exemplo:
//primeira forma de fazer:
//listaSet.forEach(valor => arrayFinal.push(valor))

//segunda forma de fazer:
//for(let element of listaSet){
    //     arrayFinal.push(element)
    // }
// console.log(arrayFinal) //[ 'nome1', 'nome2', 'nome3' ]

//terceira forma de fazer:
const arrayFinal = [...listaSet]
console.log('array final pronto:', arrayFinal) //array final pronto: [ 'nome1', 'nome2', 'nome3' ]