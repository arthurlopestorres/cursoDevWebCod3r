//Uma função pode ser chamada por call and apply, que sao formas direntes de se executar um função no JS.
function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda}${this.preco * (1 - this.desconto) * (1 + imposto)}`
}
console.log(getPreco()) //resultado é NaN, porque preco e desconto não estão definidos no escopo da função pura (não há no escopo global esses identificadores)

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco
}
console.log(produto.getPreco()) //aqui, retorna normal, porque todos os identificadores necessarios no calculo existem no contexto do objeto produto


//UTILIZANDO A FUNCAO CALL e APPLY - repare que, neste caso, a funcao getPreco nao foi adicionada no contexto dos objetos (serve para executar funcoes com objetos que nao conseguimos manipular de forma escalavel os itens antes de executar a funcao usando dados do objeto.)
const carro = {
    nome: 'Carro',
    preco: 65165,
    desconto: 0.15,
}
console.log(getPreco.call(carro, 0.15, '$'))
console.log(getPreco.apply(carro, [0.20, 'BRL'])) //a diferença entre os metodos call e apply é apenas a forma de passar os parametros para a funcao getPreco.