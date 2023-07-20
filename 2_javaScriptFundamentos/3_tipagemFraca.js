let qualquer = 'legal'
console.log(qualquer)
console.log(typeof qualquer)
//tipagem fraca, nesse sentido, quer dizer que um mesmo indicador pode ser do tipo texto ou numero por exemplo, nao ficando sempre claro no resultado final qual o tipo o identificador, exemplo:

let numero = '3'
console.log(numero) //aqui, o resultado é 3 no console
console.log(typeof numero) //aqui, o resultado é string
numero = 3
console.log(numero) //aqui, o resultado é 3 no console
console.log(typeof numero) //aqui, o resultado é number

//por esse motivo, o nome os indicadores precisam ter nomes precisos. Que possam, inclusive, refletir seu tipo.