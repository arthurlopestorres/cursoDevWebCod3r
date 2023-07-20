console.log(7 / 0) // na matemática, isto seria infinito. No JS também é infinito nesse caso

console.log('10' / 2) //aqui, o resultado será 5, apesar de 10 não ser um número. E o valor de resultado é numérico (Number), exemplo:
let calculo = '10' / 2
console.log(typeof calculo)

//o JS apresenta problemas quando somamos dois numeros com ponto flutuante para separar a parte inteira da parte decimal:
console.log(0.1 + 0.7) //normalmente daria 0.8, mas não é o que acontece. - obs.: esse comportamento só é percebido quando a parte inteira do valor é zero.

//não consigo tranformar um numero direto em String utilizando "toString". Nesse sentido, é preciso eu estar utilizando um identificador numérico.
const valorNumerico = 10
console.log(valorNumerico.toString()) // funciona
// console.log(10.soString()) não funciona.
// para poder funcionar corretamente, preciso colocar entre parenteses:
console.log((10).toString())