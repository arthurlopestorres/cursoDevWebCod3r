//construindo o map:
Array.prototype.map2 = function(callback){
    let result = []
    for(let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this))
    } 
    return result
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//retornar um array apenas com os preços
const transformaEmObjeto = produto => JSON.parse(produto)
const retornarPrecos = produto => produto.preco

const precosDeProduto = carrinho.map2(transformaEmObjeto).map2(retornarPrecos)
console.log(precosDeProduto)