//O array, em JS, é um objeto que organiza os dados a partir de um indice [0], [1], [2],...
console.log(typeof Array, typeof new Array, typeof []) //function object object

//o mais interessante no array, é que ele carregue apenas um tipo de dado (de preferencia categorizado), para que seja possível trabalhar de uma forma mais assertiva.

let aprovados = new Array('Bia', 'Carlos', 'Ana') //essa é uma forma de criar um array
console.log(aprovados) //[ 'Bia', 'Carlos', 'Ana' ]

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0]) //bia -> o primeiro elemento é sempre o zero.
console.log(aprovados[1]) //carlos
console.log(aprovados[2]) //ana
console.log(aprovados[3]) //undefined

aprovados[3] = 'Paulo' //essa é a forma mais comum para substituir um elemento (identificando pelo indice)
aprovados.push('Arthur') //essa é a forma mais comum de inserir elementos num array na ultima posição.
console.log(aprovados) //[ 'bia', 'carlos', 'ana', 'Paulo', 'Arthur' ]

//* posso verificar o tamanho de um array utilizando "length":
console.log(aprovados.length) //5

//* posso inserir um elemento num array numa posição especifica. Os demais elementos entre eles, apesar disso, serão considerados "undefined"
aprovados[9] = "Maria"
console.log(aprovados, aprovados.length) //[ 'bia', 'carlos', 'ana', 'Paulo', 'Arthur', <4 empty items>, 'Maria' ] 10


//! VAMOS VERIFICAR AGORA ALGUMAS FUNÇÕES PARA ARRAYS

//? .sort() -> troca a ordenação dos itens do array de forma randomica. Esse método altera o array original, mas há outros métodos que apenas retornam um novo array utilizando dos dados do array original.
console.log(aprovados.sort())

//? deletando um item do array:
delete aprovados[1] //estou excluindo o nome na segunda posição, substituindo por undefined.
console.log(aprovados)

//reorganizado apenas por aqui:
aprovados = ['arthur', 'maria', 'henrique']

//? .splice() -> essa função pode servir para adicionar elementos, excluir elementos, ou remover e adicionar ao mesmo tempo (nesse caso, a exclusão é definitiva, não é substituído por undefined). 
//* Sintaxe: [array].splice([index], [quantidade de elementos a serem excluídos], [elementos a serem adicicionados na altura do index indicado como primerio elemento do splice.])

aprovados.splice(1, 1, 'Elemento 1', 'Elemento 2') //exclui "maria" e insere "Elemento 1" e "Elemento 2" na altura do indice indicado:
console.log(aprovados) //[ 'arthur', 'Elemento 1', 'Elemento 2', 'henrique' ]

//* se que quisesse apenas deletar "henrique" do array, por exemplo, eu poderia fazer da seguinte forma:

aprovados.splice(3, 1)
console.log('deletando henrique: ', aprovados) //deletando henrique:  [ 'arthur', 'Elemento 1', 'Elemento 2' ]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//              *formas de declarar array:              //
//const primeiraForma = new Array([elementos])
//const segundaForma = [ [elementos] ]

//              *funções aprendidas nessa aula:         //
//array.push([elementos]) -> adiciona elementos na ultima posição
//array.sort() -> altera o array atual para uma nova sequencia aleatoria
//delete array[index] -> deleta o index do array
//array.splice([index], [quantidade de elementos a serem excluído a partir do index], [elementos a serem adicionados a partir do index])