// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas. 
const arrayDeProduto = [
    {nome: 'celular', categoria: 'Eletronicos', preco: 1000},
    {nome: 'computador', categoria: 'Eletronicos', preco: 10000}
]   

function despesasTotais (array){
    const retornaPrecos = produto => produto.preco
    const somaPrecos = (precoTotal, precoAtual) => precoTotal + precoAtual
    let totalDeDespesas = array.map(retornaPrecos).reduce(somaPrecos)
    return totalDeDespesas
}

console.log(despesasTotais(arrayDeProduto))