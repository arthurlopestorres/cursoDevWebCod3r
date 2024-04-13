// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.

function calculaMediaSimples(array){
    let somaDosNumeros = array.reduce((acumulador, proximo) => acumulador + proximo)
    let mediaSimples = somaDosNumeros / array.length

    console.log(mediaSimples)
}

calculaMediaSimples([1, 2, 3, 4]) // 2.5