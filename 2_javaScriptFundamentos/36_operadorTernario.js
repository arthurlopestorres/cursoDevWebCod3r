//um operador ternario é aquele que lida com tres elementos: condição, resultado se positivo e resultado se negativo
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
//se nota maior ou igual a 7 for verdadeiro "Aprovado", se falso, "Reprovado". O ponto de interrogação nesse caso significa "se true" e o dois pontos significa "se falso"

console.log(resultado(3))