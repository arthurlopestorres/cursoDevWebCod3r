//funcionamento do filter:
Array.prototype.filter2 = function(callback){
    let result = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            result.push(this[i])
        }
    }
    return result
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

const produtoCaro = produto => produto.preco >= 500
const produtoFragil = produto => produto.fragil == true //nao preciso colocar validação de que precisa ser true, porque ele já é boolean. Se for false, ele autoamticamente não será considerado pelo filter. Entaõ poderia ser apenas "produto.fragil"

let resutladoDeCarosEFrageis = produtos.filter2(produtoCaro).filter2(produtoFragil)
console.log(resutladoDeCarosEFrageis)