function criaProduto(nome, preco){
    return {
        nomeDoProduto: nome,
        precoDoProduto: preco
    }
}
const listaDeProdutos = []
listaDeProdutos.push(criaProduto('Tenis NIke', 2000))
console.log(listaDeProdutos)