//! promises são promessas para processamentos assincronos no JS.
//* tratando-se de promises, estaremos lidando com requisiçoes que podem ou não ser atendidas. E precisamos prever o que fazer quando ela não for atendida, assim como, o que fazer quando ela for, de fato, atendida

function falarDepoisDe(segundos, frase, erro){
    //? resolve, nesse caso, é um parametro que será chamado quando a promeça for atendida e reject é o parametro que sera chamado quando a promeça não for atendida:
    return new Promise ((resolve, reject) => { 
        setTimeout(() => {
            resolve(frase) //a frase que esta sendo passada nesta promise será utilizada posteriormente no paramentro 'then' e uma promeça aceita apenas um paramentro no resolve e um no reject, não mais do que isso. Se eu quiser passar bastante coisa aqui dentro, precisarei passar um objeto
            reject(erro)
        }, segundos * 1000)
    })
}

//* para que eu possa acessar o conteudo de uma promessa, eu preciso utilizar '.then'. O interessante aqui é que posso passar varios processos a partir da promise, utilizando then varias vezes:
falarDepoisDe(2, 'Que legal', 'deu merda')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase)) //Que legal?!? --> isso nos mostra que o resultado de um then sempre vai sendo passado para o próximo e assim por diante.
//para tratar do erro, precisamos utilizar o metodo .catch:
.catch(mensagemErro => console.log(mensagemErro))

//? Posso também acessar o retorno utilizando await no contexto de uma função assíncrona:
let usandoAwait = async () => {
    let awaitNisso = await falarDepoisDe(1, 'Usei await', 'deu merda no await')
    console.log(awaitNisso)
}
usandoAwait()

//* RESUMO
//para utilizar uma promise, preciso invoca-la com new Promise(). O new Promise() espera receber uma função de callback, que recebe como paramentro (resolve) e (reject), exemplo: 
//new Promise ((resolve, reject) => {})
//no 'resolve' a gente deve passar o retorno de quando a promise for cumprida
//no 'reject' a gente deve passar o retorno de quando a primise não for cumprida
//? para passar um conteudo para 'resolve' a gente deve passar como o parametro de uma função, assim como, para o reject (pois são funções de callback). Exemplo:
//new Promise((resolve, reject) => { resolve('mensagem de sucesso') reject('mensagem de erro')})
//? para poder acessar o retorno de uma promise, precisamos utilizar .then, quando queremos o retorno de resolve e .catch, quando queremos o retorno de reject.
//? é possível também acessar o retorno de uma promise utilizando o parâmetro await na chamado, dentro do contexto de uma função assíncrona (que é declarada utilizando o parâmetro async)

//treinando:

function retornaMensagemAcada(mensagem, aCada){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mensagem)
            reject('deu ruim mesmo!')
        }, aCada * 1000)
    })
}
retornaMensagemAcada('frase de teste...', 3).then(mensagem => console.log(mensagem.toUpperCase())).catch(mensagem => console.log(mensagem))