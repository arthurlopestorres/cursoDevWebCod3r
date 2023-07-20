//esse é um operador que tira de uma estrutura algo. Por exemplo, tirar elementos de um objeto ou de um array, por exemplo. É um recurdo do ES6
//quando estamos removendo de um objeto, utilizaremos "{}" na sintaxe do operador
//quando estamos removendo de um array, utilizremos "[]" na sintaxe do operador

const formulario = {
    nome: 'Arthur',
    idade: 24,
    endereco: {
        logradouro: 'Rua Joao Ventura Batista',
        numero: 622,
        complemento: 'apartamento 33, torre 2'
    }
}

//quero TER ACESSO aos identificadores 'nome' e 'idade' dentro do meu programa utilizando destructuring.
const { nome, idade } = formulario //console: Arthur 24
console.log(nome, idade) //nome e idade se tornaram identificadores foram o contexto léxico do objeto "formulario", o que me permite usa-los de forma dinamica em uma função, por exemplo.
console.log(formulario.nome) //console: Arthur

//posso criar novos identificadores para cada identificador do objeto, renomeando a informação, por exemplo. Segue:
const { nome: n, idade: i } = formulario
console.log(n, i) //console: Arthur 24

//posso tentar extrair informações do formulario que não existem, mas com a penalidade de undefined ou outra atribuição. Exemplo:
const { sobrenome, humor = true } = formulario
console.log(sobrenome, humor) // console: undefined true

//para extrair os dados de dentro de endereco, a sintaxe é um pouco diferente:
const { endereco: {logradouro, numero, complemento} } = formulario
console.log(logradouro, numero, complemento) //console: Rua Joao Ventura Batista 622 apartamento 33, torre 2