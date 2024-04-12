//!SEMPRE QUE PRECISAR TRANSFORMAR UM ARRAY EM OUTRO DE MESMO TAMANHO: MAP
//!SEMPRE QUE PRECISAR FILTRAR UM ARRAY: FILTER

//filter é justamente para filtrar um array
//No filter, assim como no forEach e no Map, eu posso passar (element, index, self) na parte de parâmetros. O filter fará uma VALIDAÇÃO DE VERDADEIRO OU FALSO para cada expressão escrita dentro da função, e retornará um novo array, sem modificar o array inicial

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

const produtoCaro = produto => produto.preco >= 500
const produtoFragil = produto => produto.fragil //nao preciso colocar validação de que precisa ser true, porque ele já é boolean. Se for false, ele autoamticamente não será considerado pelo filter. Entaõ poderia ser apenas "produto.fragil"

let resutladoDeCarosEFrageis = produtos.filter(produtoCaro).filter(produtoFragil)
console.log(resutladoDeCarosEFrageis) 
// [
//   { nome: 'Notebook', preco: 2499, fragil: true },
//   { nome: 'iPad Pro', preco: 4199, fragil: true }
// ]