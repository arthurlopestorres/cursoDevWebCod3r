//Array é uma estrutura que consigo agrupar uma série de informações, de forma linear (um após o outro)

//Array é uma estrutura com index (indexada), ou seja, consigo acessar um valor do array a partir do index na sequência (semelhante ao que acontece na função "indexOf" ou "charAt" com strings)

//Arrays são heterogeneos = posso colocar qualquer tipo de dado em cada espaço do array: um numero, depois um texto, depois um booleano, depois ou numero e assim por diante.

//criando um Array:
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores)
console.log(typeof valores) // no JS, array é um indicador do tipo objeto

//buscando valores por index no array:
console.log(valores[0], valores[3])

//se eu tentar acessar um index não existente do array, o código me retornará "undefined":
console.log(valores[4])
//como o index 4 não existe no array, posso então inseri-lo, atribuindo como se fosse um indicador:
valores[4] = 10
console.log(valores[4])

//eu poderia até atribuir uma valor a um index do arrayt muito à frente, deixando várias posições vazias:
// valores[10] = 22
// console.log(valores) //resultado do console: [ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 22 ]

//para verificar a quantidade de elementos no array, posso utilizar a função .length
console.log(valores.length) // retorna 5

//posso adicionar elementos no array a partir da função .push(passo aqui os dados)
valores.push('Arthur', 24, 'cpf')
console.log(valores) //resultado no console: [ 7.7, 8.9, 6.3, 9.2, 10, 'Arthur', 24, 'cpf' ]

//posso também passar um objeto dentro de um array
valores.push({id: 3})
console.log(valores)

//posso remover o ultimo item do array, fazendo-o retornar no console:
console.log(valores.pop())
console.log(valores) //o objeto já não está mais no array
//outra forma de remover elementos do array é utilizando delete:
delete valores[0]
console.log(valores) //7.7, que era o index 0, já não está mais no array: [ <1 empty item>, 8.9, 6.3, 9.2, 10, 'Arthur', 24, 'cpf' ]