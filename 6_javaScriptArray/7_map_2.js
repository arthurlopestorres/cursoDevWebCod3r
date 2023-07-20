const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//retornar um array apenas com os preços
const transformaEmObjeto = produto => JSON.parse(produto)
const retornarPrecos = produto => produto.preco

const precosDeProduto = carrinho.map(transformaEmObjeto).map(retornarPrecos)
console.log(precosDeProduto) //[ 3.45, 13.9, 41.22, 7.5 ]