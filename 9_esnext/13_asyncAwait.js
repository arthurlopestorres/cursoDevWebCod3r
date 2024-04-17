//Async / Await é um novo recurso que surgiu no ES8
//Vamos ver nessa aula como transformar um codigo assincrono em algo que parece sincrono. O objetivo é simplificar o uso de codigo assincrono.

//vamos comecar utilizando a mesma estrutura de inicio da parte de estudo de promise e de callback hell
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

//recurso no ES8
//este é um recurso utilizado junto com promises e tem como objetivo simplificar o uso de promises

//a primeira coisa que precisamos fazer é criar uma função marcada com a palavra 'async'. O parametro 'await' apenas funciona em funções marcadas com a palavra 'async'. Não é regra utilizar o await junto com async, async apenas torna a função assincrona. 'await' vai implementar a funcionalidade de aguardar que determinado processo esteja concluído.
//quando utilizo 'await' dentro de uma função async, ela só executará quando o passo anterior estiver concluído (resolved or rejected)
let obterAlunos = async () => {
    const turmaA = await getTurma('a') //aqui, estou retornando para 'turmaA' o resultado da função getTurma('a')
    const turmaB = await getTurma('b') //aqui, estou retornando para 'turmaB' o resultado da função getTurma('b')
    const turmaC = await getTurma('c') //aqui, estou retornando para 'turmaC' o resultado da função getTurma('c')
    return [].concat(turmaA, turmaB, turmaC)
} //uma função async retorna um objeto chamado AsyncFunction, então eu preciso executar obterAlunos e utiliza '.then' para acessar / tratar os dados
obterAlunos().then(alunos => alunos.map(aluno => aluno.nome)).then(nomeDosAlunos => console.log(nomeDosAlunos))