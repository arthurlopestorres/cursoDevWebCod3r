//vamos obter os dados de 3 arquivos JSON, que podem ser acessados partir das seguintes URL:
// turma A -> http://files.cod3r.com.br/curso-js/turmaA.json
// turma B -> http://files.cod3r.com.br/curso-js/turmaB.json
// turma C -> http://files.cod3r.com.br/curso-js/turmaC.json
//queremos extrair apenas o nome
//primeiro (nesta aula), faremos utilizando callback
//depois, na proxima aula, faremos esse processo utilizando promise

//obtendo sem promise:
//o nome da estrategia abaixo é callback hell (hell, porque é uma callback dentro da outra que começa a ficar muito dificil de entender)

const http = require('http') //estamos utilizando, nesse caso, o proprio modulo interno do note (http)

const getTurma = (letraDaTurma, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letraDaTurma.toUpperCase()}.json`

    http.get(url, resposta => {
        let resultado = ''

        resposta.on('data', dados =>{ //on('data') -> evento que aguarda recebimento de dados
            resultado += dados
        })
        resposta.on('end', () => { //on('end') -> evento executado quando a função para de receber dados
            callback(JSON.parse(resultado))
        }) 
    })
}


let nomes = []

getTurma('A', alunos => { //alunos = JSON.parse(resultado)
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`))
            console.log(nomes)
        })
    })
})