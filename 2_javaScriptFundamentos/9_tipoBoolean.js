//O javascript aceita numeros, true or false, entre outros simbolos como booleanos.
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

console.log('Olhando para o numero 1 como verdadeiro ou falso')
//para transformar um valor em booleano, utilizamos o ponto de exclamação. Um ponto de exclamação sozinho signigica "não". Se eu coloco dois pontos de exclamação seguidos "!!", estou dizendo "não, não tal coisa", o que faz com que considere o ponto de partida e não o contrário dele:
isAtivo = 1
console.log(!isAtivo) //resultado aqui é false (não isAtivo = false)
console.log(!!isAtivo) //resultado aqui é true (não, não isAtivo = true)
//esse comportamento acontece, porque o número 1 é considerado true por padrão. Podemos ver isso fazendo um paralelo com a própria máxima "true"

console.log('olhando para o true como verdadeiro ou falso, comparando com o número 1')
console.log(!true)
console.log(!!true)

console.log('os verdadeiros...') //nem sempre as exclamações vão ser necessárias. Os valores exibidos nessa parte poderão se comportar como verdadeiros a depender do contexto, sem a necessidade de dizer "não, não" para o sistema.
//todos os valores numéricos inteiros, exceto o zero, são verdadeiros por padrão.
console.log(!!3) 
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 1)) //se o valor que é recebido pelo indicador nesse caso for um valor verdadeiro, então o resultado será verdadeiro.

console.log('os falsos...')
console.log(!!0)
console.log(!!'') //para a srting ser verdadeira, é necessário pelo menos um espaço em branco.
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = 0))

console.log('para finalizar...') //para verificar se um dos valores é verdadeiro numa lista, utiliza-se "ou", que é representado por "||"
console.log(!!('' || ' ' || 0 || 1)) //verdadeiro, porque ' ' e 1 são verdadeiros
console.log(!!('' || 0 || false || NaN)) //false, porque não tem valores verdadeiros aqui.

//Se eu remover a lógica de verdadeiro ou falso, que é iniciada por "!" para indicar o oposto do que é inserido ou "!!" para indicar exatamente o que é inserido, o sistema me retornará apenas o primeiro valor verdadeiro encontrado:
console.log('' || 1 || 0 || 2)

//uma forma de trabalhar com pratica utilizando boolean é utilizar para verificar se um nome foi preenchido ou não; O "ou", representado por || cria uma comparação entre os termos inseridos no contexto, para exibir apenas o que for verdadeiro por padrão
let nome = ''
console.log(nome || 'nome desconhecido')

nome = 'Arthur'
console.log(nome || 'nome desconhecido')

//posso inverter a lógica, para dizer que "nome" será falso, por isso deve retornar "nome desconhecido":
console.log(!nome || 'nome desconhecido')