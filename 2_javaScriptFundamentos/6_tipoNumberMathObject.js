//Math é um objeto dentro do JS
console.log(typeof Math)

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2) //por Math ser um objeto com funções e dados matemáticos, podemos utilizar Math.PI para passar o valor de PI sem precisar sabe-lo e utilizar a função Math.pow(identificar, potencia), assim temos:
// const area = valor de PI x identificador 'raio' elevado à segunda potencia.
console.log(area.toFixed(2))