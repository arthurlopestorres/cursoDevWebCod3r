// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.
let arrayDeNumerosIndeterminados = [4, 8, 15, 16, 23, 42]

const retornaMediaSimples = (array) => (array.reduce((total, atual) => total + atual)) / array.length
console.log(retornaMediaSimples(arrayDeNumerosIndeterminados))