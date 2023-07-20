// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
let alunos = {
    Arthur: [10, 10, 10, 10],
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8], 
    Carla: [7, 7, 8, 9],
}

function retornaArrayDeAlunosComMedia(objeto){
    let listaDeAlunos = Object.keys(objeto)
    let listaDeAlunosComMedia = {}

    for(let i in listaDeAlunos){ 
        listaDeAlunosComMedia[listaDeAlunos[i]] = ((objeto[listaDeAlunos[i]].reduce((total, atual) => total + atual) / objeto[listaDeAlunos[i]].length).toFixed(2))
    }

    return listaDeAlunosComMedia
}

function retornaAlunoComMaiorMedia(objeto) {
    let arrayDeAlunosComMedia = Object.entries(retornaArrayDeAlunosComMedia(objeto))
    let listaDeMedias = Object.values(retornaArrayDeAlunosComMedia(objeto)).map(media => Number(media))
    let maiorMedia = listaDeMedias[0]

    for(let i = 0; i < listaDeMedias.length; i++){
        if(listaDeMedias[i] > maiorMedia){
            maiorMedia = listaDeMedias[i]
        }
    }

    let alunoDeMaiorMedia = arrayDeAlunosComMedia.filter(aluno => aluno[1] == maiorMedia)
    let bestAluno = {}
    bestAluno[alunoDeMaiorMedia[0][0]] = alunoDeMaiorMedia[0][1]

    console.log('melhor aluno:', bestAluno)
}
retornaAlunoComMaiorMedia(alunos)