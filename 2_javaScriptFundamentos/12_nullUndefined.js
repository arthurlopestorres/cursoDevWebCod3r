//------------------------------------INTRODUÇÃO----------------------------------------
//O conceito de nulo e indefinido são conceitos que se estendem entre as linguagens. A interpretação, nesse caso, é padrão
//precisamos ter em mente a diferença entre atribuição por valor e atribuição por referencia.


//ATRIBUIÇÃO POR REFERENCIA - refere-se a um endereço na memória.
const a = {nome: 'Arthur'} 
console.log(a) //nesse caso, estou passando para o identificador "a" o endereço do objeto no sistema, que possui nome como caracteristica dentro dele. Mas como o objeto não fica necessariamente atrelado a "a", eu posso usar o mesmo endereço desse objeto em outro indicador, desde que eu passe o mesmo endereço para ele, a partir do endereço gravado em a:
const b = a
b.nome = "Arthur Lopes"
console.log(a) //o nome vai ter mudado, porque "b" aponta para o mesmo endereço


//ATRIBUIÇÃO POR VALOR - atribui-se um valor isolado ao identificador.
//Nesse caso, por mais que eu atribua a "d" o valor de "c", eles não estão apontando para um lugar na memória, porque não estão lidando com um objeto e sim com um dado. Assim, se eu alterar o valor de D, o valor de C não muda, mas se eu mudar o valor de C, o valor de D muda, porque ele está recebendo de início o valor de c, mas ele é indepente, então posso mudar o valor de D livremente, sem impactar C.
let c = 3
let d = c
d++ //quando coloco ++ após o identificador, ele adiciona uma unidade ao valor recebido.
console.log(c) //console: 3
console.log(d) //console: 4

//-------------------------------------------------------------------------------------------
//----------------------------------------Null e Undefined-----------------------------------
let valor //identificador não inicializado (variável não inicializada) - MAS FOI DECLARADO
console.log(valor) //por padrão, o resultado é undefined quando é declarado mas não incializado

//console.log(valor2) //este identificador nem foi declarado, então o erro é "is not defined"

valor = null //null significar que este identificador não está recebendo nenhum valor simples, como um texto ou número, por exemplo, e também não está apontando para nenhum local de memória, como no caso dos identificadores que recebem arrays ou objetos. Apesar disso, está recebendo um dado que informa não apontar para nenhum informação, gerando o resultado null:
console.log(valor)

//nesse sentido, se quisermos matar um identificador, podemos atribuir a ele "null", que faz com que ele aponte para um lugar inexistente (nulo).

const produto = {}
console.log(produto.preco) //aqui, o resultado é undefined, porque o identificador foi declarado como um objeto, mas não está recebendo o valor indicado "preco".

produto.preco = 3.5
console.log(produto.preco) //3.5

produto.preco = undefined //evite atribuir undefined dessa forma.
console.log(!!produto.preco) //resultado é false, porque estamos colocando a condição !! para true or false e undefined é false.
console.log(produto)

//caso eu queira que o produto fique com preco nulo, posso fazer:
produto.preco = null
console.log(produto)
console.log(!!produto.preco) //resultado é false, porque null é falso.