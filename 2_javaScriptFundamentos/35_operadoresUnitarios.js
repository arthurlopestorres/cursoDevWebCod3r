let num1 = 1
let num2 = 2

//operador unario de forma posfixada
num1++
console.log(num1) // 2
--num1 //essa forma de escrever a operção tem uma prioridade maior em relação à forma de cima de escrever operação.
console.log(num1) // 1

console.log(++num1 === num2--) //esse resultado é true, porque entende-se que num1 já era 2 no momento em que incia-se a comparação com num2, que vai ser menor do que 2 somente após a analise, pelo ordem de leitura. Fazer isso não é bom!! Precisamos ter codigo simples. De facil interpretação.