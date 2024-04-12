//Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ..."

const inverteValor = (valor) => {
    switch(typeof valor){
        case "boolean": 
        console.log(!valor) 
        break
        case "number": 
        console.log(valor -= (2 * valor)) 
        break
        default: 
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`)
    }
}
inverteValor(2)