const a = 7 //o simbolo de '=' aqui, está atribuindo 7 a 'a'
let b = 3 // mesmo caso do de cima

b += a //aqui, estou acrescentando o valor de 'a' a 'b'. Mesmo que: b = b + a
console.log(b) //10

b -= 4 //aqui, estou fazendo uma subtração do valor de b, que é 10, menos 4. Mesmo que: b = b - 4
console.log(b) //6

b *= 2 //mesmo que b = b * 2
console.log(b) //12

b /= 2 //mesmo que b = b / 2
console.log(b) //6

b %= 2 //mesmo que b = b % 2 -> se b for par, o resultado é 0, se b for impar, o resultado é 1.
console.log(b) //6 é par entao o resultado é 0