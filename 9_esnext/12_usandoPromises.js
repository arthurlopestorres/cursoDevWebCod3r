//! continuando o tema da aula passada, vamos utilizar promises para evitar o callback hell.
//primeiro, entretanto, vamos utilizar promises, mas numa estrutura parecida com o callback hell.
//obtendo sem promise:
//o nome da estrategia abaixo é callback hell (hell, porque é uma callback dentro da outra que começa a ficar muito dificil de entender)

//Passo a passo [estrutura caoticao de callback para estrutura caotica de promises]:
//1- coloquei todo o metodo http dentro da promise
//2- getTurma agora recebe apenas a letra da turma como parametro
//3- na resposta.on('end'), removi a callback, que ja nao existe mais, e implementei um sistema try/catch, para passar o resolve com o conteudo de resultado e tambem tratar a mensagem de erro
//4- alterar a execução da função para then, que chama o resolve de get turma.

const http = require('http')

const getTurma = letraDaTurma => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letraDaTurma.toUpperCase()}.json`
    return new Promise((resolve, reject) => {
        http.get(url, resposta => {
            let resultado = ''
            resposta.on('data', dados =>{
                resultado += dados
            })
            resposta.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            }) 
        })
    })
}


// let nomes = []
// getTurma('A').then(alunos => { //alunos = JSON.parse(resultado)
//     nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`))
//             // console.log(nomes)
//         })
//     })
// })

//para resolver de forma menos caótica, devemos fazer da seguinte forma:
//para Promise.all eu consigo passar varias funções que somente são executadas quando os dados ja estão recebidos (on('end'))
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])

.then(turmas => [].concat(...turmas)) //retorna todas as turmos no mesmo array
.then(alunos => alunos.map(aluno => aluno.nome)) //percorre alunos e extrai nomes
.then(nomes => console.log(nomes)) //log nomes
.catch(e => console.log(e.message)) //Unexpected token < in JSON at position 0 (quando coloquei o getTurma('D') no Promise.all)