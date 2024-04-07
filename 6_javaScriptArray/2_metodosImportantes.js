//Verificaremos metodo importantes mais simples nesse aula
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] //pilotos nesse caso será sempre um array, mas posso mudar os dados dentro do array

//* array.pop() -> exclui último elemento do array
pilotos.pop()
console.log(pilotos) //[ 'Vettel', 'Alonso', 'Raikkonen' ]

//* array.shift() -> tira elemento da primeira posição
pilotos.shift()
console.log(pilotos) //[ 'Alonso', 'Raikkonen', 'Verstappen' ]


//* array.push([elementos]) -> adiciona elementos na última posição do array
pilotos.push('Verstappen')
console.log(pilotos) //[ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]


//* array.unshift([elementos]) -> adiciona elementos na primeira posição do array
pilotos.unshift('Hamilton')
console.log(pilotos) //[ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]


//* array.splice([index], [quantidade de elementos a serem removidos a partir do index], [elementos a serem adicionados a partir do index])
//para adicionar elementos com splice:
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos) //[ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]
//para remover elementos com splice:
pilotos.splice(3, 1)
console.log(pilotos) //[ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]


//* array.slice([index a partir do qual o novo array será formado]) -> esse método retorna um novo array a partir do index indicado.
const novoArray = pilotos.slice(2)
console.log(novoArray) //[ 'Bottas', 'Raikkonen', 'Verstappen' ]
//assim como no metodo substring para strings, posso tambem pegar de um index até outro index, descondiderando o ultimo:
const bolo = ['acucar', 'farinha', 'fermento', 'chocolate', 'temperatura']
const fatia = bolo.slice(0, 4)//retornará o item do index 0 até o index 3, desconsiderando o index 4 -> [ 'acucar', 'farinha', 'fermento', 'chocolate' ]
console.log(fatia)

///////////////////////////////////////////////////////////////////////RESUMO//////////////////////////////////////////////////////////////////////
//array.pop() -> exclui o ultimo index
//array.push([elementos]) -> adiciona na ultima posição
//array.shift() -> exclui o primeiro index
//array.unshift([elementos]) -> adiciona na primeira posição
//array.splice([index], [quantidade de indexes a serem excluídos a partir do index indicado], [elementos a serem inseridos a partir do index])
//array.slice([index inicial], [index final, desconsiderando-o (opcional)]) -> infomando apenas inicial, imprime tudo a partir dele. Informando tambem o final, imprime tudo do inicial ao final, desconsiderando o ultimo