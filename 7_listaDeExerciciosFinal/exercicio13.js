// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro
const retornaNumeros = (array) => {
    let novoArray = array.filter(element => typeof element == 'number')
    !!novoArray ? novoArray = novoArray : novoArray = []
    return novoArray
}
const arrayAntigo = ['Arthur', '1', '3', true, '40']

console.log(retornaNumeros(arrayAntigo))