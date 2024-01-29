// area da circunferencia é PI * raio², que nesse caso, é raio * raio no JS.
// PI = 3.141592 -> as boas práticas indicam que constantes podem ser utilizadas com letra maiúscula.
//raio é 10, nesse caso
//calcule o raio da variável e colocar no console. O objtivo é colocar no console com a frase: o raio da circunferencia é [valor]

const PI = 3.14;
let raio = 10;
let areaDaCircunferencia = PI * raio * raio;

console.log('a área da circunferência é ' + areaDaCircunferencia);

//uma outra forma de conseguir o valor de PI diretamente é:
console.log(Math.PI.toFixed(2));
//um indicador por receber Math.PI sem problemas, tanto como parte de uma operação, quando como um valor fixo, por exemplo.
//!o "toFixed(2)" faz com que o valor de Math.PI seja considerado apenas até a segunda casa após a vírgula.