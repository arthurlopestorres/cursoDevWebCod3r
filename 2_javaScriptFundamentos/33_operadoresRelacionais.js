//operadores relacionais também são binários, mas se liga na pegadinha!!
//sempre que faço uma operação com operador relacional, o resultado será true or false

//VERIFICANDO IGUALDADE
console.log('01)', '1' == 1) //resultado é true, porque não esta avaliando o tipo. '==' compara a igualdade entre dois valores em valor
console.log('02)', '1' === 1) //resultado é false, porque o primeiro numero 1 é string e o segundo é number. '===' comapra dois valore em valor e tipo.

//VERIFICANDO DIFERENÇA
console.log('03)', '3' != 3) //resultado é true, porque 3 é o mesmo numero. "!=" verifica se o valor é diferentem, apenas.
console.log('04)', '3' !== 3) //resultado é false, porque o primeiro 3 é string e o segundo é numero. "!==" compara valor e tipo do valor (se é string ou number, por exemplo)

//VERIFICANDO SE É MAIOR OU MENOR
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 >= 2)
console.log('08)', 3 <= 2)

//VERIFICANDO QUANTO A ALOCAÇÃO DE ESPAÇO NA MEMÓRIA
const d1 = new Date(0) //0 nesse caso aponta para 1 de Janeiro de 1970
const d2 = new Date(0)
console.log('09)', d1 === d2) //não são iguais, pois estão alocando espaço de memória distintos
console.log('10)', d1 == d2) //não são iguais, pois estão alocando espaço de memória distintos
console.log('11)', d1.getTime() === d2.getTime()) //true, porque os dois vão retornar o mesmo valor.

//VERIFICANDO UNDEFINED E NULL
console.log('12)', undefined == null) //true
console.log('13', undefined === null) //false