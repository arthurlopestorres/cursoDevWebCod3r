//crie uma função que receba dois números e retorno se o primeiro é maior ou ou igual ao segundo

const verificarSeIgual = (num1, num2) => {
    num1 === num2 ? console.log(true) : console.log(false)
}
verificarSeIgual(1, 1) //true
verificarSeIgual(1, '1') //false
verificarSeIgual(5, 1) //false