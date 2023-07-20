//O reduce serve para transformar um array em um outro elemento (como transformar um array em uma string por exemplo). De uma forma geral, o reduce vai percorrendo o array e atrelando o indice anterior ao proximo. Por exemplo: 
// [1, 2, 3, 4, 5].reduce((this[0], this[1]) => {restultado = ((this[0] + this[1]) + this[2]) + this[3]}, [VALOR INICIAL])

const alunos = [
    {nome: 'Arthur', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 6.8, bolsista: false},
    {nome: 'Lucio', nota: 8.7, bolsista: true}
]
const mapDeAlunos = alunos.map(aluno => aluno.nota)

const resultado = mapDeAlunos.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 10)
console.log(resultado) //42