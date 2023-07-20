//operadores podem ser aritmeticos, de atribuição, relacionais ou lógicos
//ele tambem podem ser classificados de acordo com a quantidade de operandos

//Os operadores aritmeticos sao binarios (operam sobre dois operandos)
const [a, b, c, d] = [3, 5, 1, 15]
const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2
console.log(soma, subtracao, multiplicacao, divisao, modulo);
//eu poderia acrescentar a um operando depois dele, ou antes dele. Exemplo:
// ++a
// a++
//ambos os dois casos acima funcionariam. No primeiro, adiciona-se e depois verifica a, o segundo, verifica a, e adiciona-se depois.