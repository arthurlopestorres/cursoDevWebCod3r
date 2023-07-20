const alunos = [
    {nome: 'Joao', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

//abordagem imperativa:
total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

//abordagem declarativa (recomendável)
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
console.log((alunos.map(getNota).reduce(soma)) / alunos.length)

//retornar email e nome de funcionarios ativos:
const funcionarios = [
    {nome: 'Joao', email: 'joao@joao.com', ativo: true},
    {nome: 'Maria', email: 'maria@maria.com', ativo: false},
    {nome: 'Arthur', email: 'arthur@arthur.com', ativo: true}
]
const validaSeAtivo = funcionario => funcionario.ativo
const retornaNomeEmail = funcionario => {return{nome: funcionario.nome, email: funcionario.email}}
console.log(funcionarios.filter(validaSeAtivo).map(retornaNomeEmail))