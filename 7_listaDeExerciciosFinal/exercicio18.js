// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas. 
let produtos = [
    {
        nome: 'macarrao',
        categoria: 'massa',
        preco: 20
    },
    {
        nome: 'atum',
        categoria: 'carnes',
        preco: 30
    },
    {
        nome: 'bife',
        categoria: 'carnes',
        preco: 80
    }
]

function totalCost(products){
    let productPrices = products.map((product) => product.preco)
    let totalCost = parseFloat(productPrices.reduce((total, current) => total + current)).toFixed(2).replace('.',',')
    console.log(`R$${totalCost}`)
}
totalCost(produtos) //R$130,00