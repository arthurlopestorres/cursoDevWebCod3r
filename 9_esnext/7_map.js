//há uma estrutura chave: valor, que é o objeto, mas além dela, temos uma nova, chamada map
//nao estamos falando aqui a respeito do método map que é aplicado a arrays

const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})
console.log(tecnologias.react) //undefined
//a forma correta de obter "react", nesse caso, seria utilizando o método get:
console.log(tecnologias.get('react')) //{ framework: false }
console.log(tecnologias.get('react').framework) //false

//posso trabalhar com o map utilizando um formato de arrays, que vai me permitir escrever um objeto a partir de arrays:
const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((valor, chave) => console.log(valor, chave))
//Função [Function (anonymous)]
//Objeto {}
//Número 123

//'.has' ´é um metodo que podemos utilizar para verificar se um elemento está ou não contido dentro do map.
console.log(chavesVariadas.has(123)) //true

//posso deletar um elemento do map utilizando o método '.delete':
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) //false

//podemos verificar quantos elementos estão presentes dentro do map a partir do metodo .size:
console.log(chavesVariadas.size) //2

//quando estamos utilizando map, perecebe-se que estamos criando um objeto de arrow functions anonimas, em que estamos definindo o retorno de cada arrow function no segundo parametro, por isso a necessideade de usar 'get' para obter os valores e 'set' para criar novas funções (não é como um objeto convencional)
console.log(chavesVariadas) //Map(2) { [Function (anonymous)] => 'Função', {} => 'Objeto' }

//no map, a chave não pode ser repetida. Exemplo:
chavesVariadas.set(123, 'b')
chavesVariadas.set(123, 'a')
console.log(chavesVariadas.get(123)) //a -> 'a' sobrepôs 'b' nesse caso.


//////////////////////////////////////////////////////////////////////////////////////////

const pessoa = new Map([
    ['altura', 1.94],
    ['idade', 23],
    ['peso', 85]
])

console.log(pessoa.get('altura')) //1.94
console.log(pessoa) //Map(3) { 'altura' => 1.94, 'idade' => 23, 'peso' => 85 }
pessoa.set('sexo', 'masculino')
pessoa.set(['pais', 'Brasil'], ['cidade', 'Sao paulo']) //[ 'pais', 'Brasil' ] => [ 'cidade', 'Sao paulo' ]
console.log(pessoa) //'sexo' => 'masculino'
console.log("tamanho do objeto pessoa:", pessoa.size) //tamanho do objeto pessoa: 5 

// para obter todas as chaves de cada conjunto chave: valor, utilizamos o metodo keys() e para acessar os valores, utilizamos o metodo .values()
const mapKeys = new Map([
    ['Arthur', {casado: true}],
    ['Ayrton', {casado: false}]
])

console.log(mapKeys.keys()) //{ 'Arthur', 'Ayrton' }
console.log(mapKeys.values()) //{ { casado: true }, { casado: false } }
console.log(mapKeys.entries()) //{
//                                  [ 'Arthur', { casado: true } ],
//                                  [ 'Ayrton', { casado: false } ]
//                                }