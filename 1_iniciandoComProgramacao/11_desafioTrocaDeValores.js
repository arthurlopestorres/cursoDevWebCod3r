let a = 7;
let b = 94;

console.log(a);
console.log(b);
//depois da troca, o valor da variavel a vai valer 94 e o valor da variavel b vai valer 7

let temporario = a;
a = b;
b = temporario;

console.log(a);
console.log(b);

// uma outra forma de mudar a e b seria:
a = 7;
b = 94;

[a, b] = [b, a]
console.log(a);
console.log(b);