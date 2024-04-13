// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array, conforme exemplo abaixo. 
// Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
let alunos = {
    Arthur: [10, 10, 10, 10],
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8], 
    Carla: [7, 7, 8, 9],
}

let calculaMedia = (alunoNotas) => {
    let mediaDasNotas = alunoNotas.reduce((notaAtual, proximaNota) => notaAtual + proximaNota) / alunoNotas.length
    return mediaDasNotas
}

function retornaMaiorMedia(alunos){
    let listaDeAlunos = Object.keys(alunos)
    let alunosEmedias = {}

    listaDeAlunos.forEach(aluno => {
        let media = calculaMedia(alunos[aluno]).toFixed(2)
        alunosEmedias[aluno] = media
    })

    let entriesAlunosEmedias = Object.entries(alunosEmedias)
    let alunoMaiorMedia = entriesAlunosEmedias.reduce((atual, proximo) => Number(atual[1]) > Number(proximo[1]) ? atual : proximo)
    
    let resultadoMaiorMedia = new Object
    resultadoMaiorMedia[alunoMaiorMedia[0]] = Number(alunoMaiorMedia[1])

    return resultadoMaiorMedia
}
console.log(retornaMaiorMedia(alunos))