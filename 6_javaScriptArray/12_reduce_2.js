const alunos = [
    {nome: 'Arthur', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 6.8, bolsista: false},
    {nome: 'Lucio', nota: 8.7, bolsista: false}
]

//desafio 1: retornar resposta para a pegunta: Todos os alunos são bolsistas?
const bolsaDeAlunos = alunos.map(aluno => aluno.bolsista)
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(bolsaDeAlunos.reduce(todosBolsistas)) //false

//desafio 2: algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(bolsaDeAlunos.reduce(algumBolsista)) //true