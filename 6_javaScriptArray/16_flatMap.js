const escola = [
    {
        nome: 'Tuma M1',
        alunos: [
        {nome: 'Gustavo', nota: 8.1},
        {nome: 'Ana', nota: 9.3},
        ]
    },
    {
        nome: 'Tuma M2',
        alunos: [
        {nome: 'Arthur', nota: 10},
        {nome: 'Maria', nota: 10},
        ]
    }
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1) //[ [ 8.1, 9.3 ], [ 10, 10 ] ]

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2) //[ 8.1, 9.3, 10, 10 ]