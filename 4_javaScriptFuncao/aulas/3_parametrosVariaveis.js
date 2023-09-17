function soma(){ //por mais que essa função não receba parametros, isso nao significa que eu não possa passar parametros para ela. Posso recuperar parametros passados posteriormente a partir de uma propriedade chamada arguments, que é um array vazio que recebe parametros passados para a função.
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) //retorna 0
console.log(soma(1)) //retorna 1 (0 + 1)
console.log(soma(1.1, 2.2, 3.3)) //retorna 6.6 (0 + 1.1 + 2.2 + 3.3)
console.log(soma('a', 'b', 'c')) //retorna 0abc (0 + 'a' + 'b' + 'c') --> concatenação