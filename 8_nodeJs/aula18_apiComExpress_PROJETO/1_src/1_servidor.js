////vamos fazer uma pequena API por aqui, para ver algumas coisas de JS no backend.
//a pasta src (source) é a pasta que vai conter todos os arquivos de sistema.


//a primeira coisa que coisa que preciso fazer quando estou construindo um aplicativo que tem comunicação com rede, preciso declarar uma porta.
//uma porta é um processo dentro do PC. Quando dois pcs estao se comunicando em rede num jogo, por exemplo, além do endereço de ip, é necessário que seja indicada uma porta, que é um local na memoria do pc que estará responsavel pelo processamento dos dados.
//na prática, a porta é local de processamento dos dados, assim, há uma porta padrão, que seria a porta 80 (não informando portas, a porta 80 será a selecionada pelo sistema automaticamente.)
const porta = 3003

//vamos agora carregar o express, que é o arquivo que está node_modules
const express = require('express')
const app = express() //-> preciso passar o express para dentro de uma variavel para ter acesso ao retorno.

// outra forma de fazer seria: const express = require('express')() -> nesse caso, express estaria recebendo o retorno de express diretamente.

                                // //teste feito no fim da aula:
                                // app.get('/produtos', (req, res, next) => {
                                //     console.log('middleware 1...')
                                //     next()
                                // }) //nesse caso, quando fiz solicitação via postman, ele conseguiu obter a resposta enviada na no get abaixo, mas não conseguiu ver o 'console.log' dessa função, pois não estão sendo enviada como resposta. Se eu removesse o next() aqui, o método de baixo não seria executado, e a API não receberia retorno algum.

//para começar o serviço, vamos fazer uma requisição get. O get terá como parametro requisição, resposta, next(que é a função seguinte):
// app.get('/produtos', (req, res, next) => {
//     res.send({nome: 'notebook', preco: 123.45}) //esse objeto vai ser convertido para JSON automaticamente.
// })

                            //outro exemplo de final da aula. Se eu utilizar o método .use do express, eu não preciso passar um caminho e a resposta poderá ser acessada a partir de qualquer método e caminho com '/produto', '/produto2', etc., mesmo que que não tenha sido definido no documento:
                            // app.use((req, res, next) => {
                            //     res.send({nome: 'notebook', preco: 123.45}) //esse objeto vai ser convertido para JSON automaticamente.
                            // })

//vamos utilizar .listen para indicar em qual porta a resposta de app poderá ser escutada (resposta definida no get anteriormente.)
// app.listen(porta, () => {
//     console.log(`servidor está executando na porta ${porta}`) //servidor executando na porta 3003
// })

//depois, fomos no terminal e rodamos o comando 'node 1_src/1_servidor.js' --> quando paramos o console deste arquivo (1_servidor.js), este comando não retornou erro. Mas quando executamos o código deste arquivo e tentamos rodar o comando node 1_src/1_servidor.js no terminal, há um erro de que esta porta já está em uso. Assim, compreendemos que cada porta pode ser utilizada para apenas um processo por vez, por padrão, mas é possível utilizar uma mesma porta para vários processos diferentes. Veremos isso mais para frente.

//por ultimo nesta aula, editei o arquivo package.json para receber este arquivo atual como o principal. Também instalei o nodemon como dependencia de desenvolvimento no comando 'start'. 
//Estou utilizando o nodemon para refletir no terminal automaticamente quando fizermos qualquer alteração neste arquivo (salvamento mesmo.)
//também criei o script 'start' que roda nodemon automaticamente. Nodemon, por sua vez, busca o arquivo principal, que, conforme mencionado anteriormente, foi apontado como este mesmo.

//Agora, vamos utilizar o postman para realizar uma requisição do arquivo /produtos que está na porta 3003, conforme definido anteriormente. O retorno foi um json do objeto definido em app.get('/nomeDoArquivo', (req, res, next) => {res.send(conteudo a ser retornado)})
//depois de definida a resposta acima, é preciso coloca-la para ser ouvida na porta, que se faz utilizando o metodo listen de express: app.listen(porta) --> obs.: a função anonima inserida dentro de .listen serve apenas para sabermos que está funcionando tudo certo no terminal, quando o nodemon executa o arquivo.

//Foi feita a tentativa, pelo postman, de realizar a requisição no metodo 'post'. Mas para que funcione, preciso pasar para express() o método post, ao inves do que, que está sendo utilizado na linha 16.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//COMANDOS UTILIZADOS NA AULA:
/*
        const porta = 3003 //crio a porta 3003

        const express = require('express') //chamo o express para o arquivo (que está em node_modules)
        const app = express() //express é uma função factory, então passo o objeto de retorno para app

//utilizando metodo get para tratar a resposta desta api, que está acessível a partir de '/produtos' (conforme definido abaixo) no localhost atual.
        app.get('/produtos', (req, res, next) => {
            res.send({nome: 'notebook', preco: 123.45}) //esse objeto vai ser convertido para JSON automaticamente.
        })

        app.listen(porta) //aqui passamos a porta a que precisará ser escutada no localhost para acessar a resposta definida no passo anterior.

//acesso ao retorno desta API no postman: http://localhost:3003/produtos
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// EXPRESS #02 - TRABALHANDO COM BANCO DE DADOS/////////////////////////////
//primeiro, criamos o arquivo 2_bancoDeDados.js (para persistir os dados)
//Depois configuramos criando um objeto com função get para incrementar o id de produtos (gerando um id novo para cada produto)
//Depois, configuramos uma função que é resposável por receber o produto sendo cadastrado, atribuir a ele um ID (caso ele não tenha) e injetar o produto no objeto 'produtos' para persisti-lo
//Depois, configuramos uma função getProduto(id) que tem como objetivo retornar o produto a partir do id
//Depois, congiguramos uma função getProdutos() que tem como objetivo retornar todos os produtos da listagem (todos os produtos cadastrados)
//Depois, configuramos o module.exports = {} que exporta as 3 funções mencinadas acima

//Agora, vamos trabalhar cadastrando produtos e consumindo os dados ainda utilizando o caminho de api utilizado anteriormente:
const bancoDeDados = require('./2_bancoDeDados')
const bodyParser = require('body-parser')

app.use( bodyParser.urlencoded({extended: true}) ) //a funcao urlencoded é uma funcao middleware que fará um parse no body das requisições (para trabalhar da forma correta com objeto e JSON e vice versa)

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) //aqui, estou parametrizando para receber uma requisição com o id do produto, para responder utilizando a função bancoDeDados.getProduto(id). Quanddo coloco 'req', para chamar a requisição e 'params', estou acessando tudo o que vem depois do '/:', assim quando colocaco req.params.id, estarei retornando o id. Se eu quisesse colocar outros parametros possiveis na requisição, eu faria assim: /produtos/:id/:nome/:etc
})

//para persistir os dados, vamos utilizar .post:
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, //o req.body é a forma com que a gente captura o dado inserido na requisição post (muito usada em formularios, por exemplo)
        preco: req.body.preco,
    })
    res.send(produto) //retorna o produto cadastrado nesta função.
}) // para simular o envio de um form via postman: preenchi da seguinte forma: https://prnt.sc/jystgDdcvVJe -> não deu certo, porque faltou uma dependencia, que vamos ver na proxima aula.

//para alterar dados de um produto já salvo no servidor, por exemplo, vou utilizar put:
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send({
        retorno: 'o seguinte produto foi excluído:', 
        produtoExcluido: produto
    })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////EXPRESS #03 - CORRIGINDO ERRO COM BODY-PARSER///////////////////////////////////////////////////////////////
//No terminal, eu enviei o comando 'npm i --save body-parser@1.18.2 -E' para salvar esta dependencia (body-parser).
//Importei aqui para o documento o body parser com o require(body-parser)
//Depois passei para o express utilizando o metodo usei o bodyParser.urlencoded({extended: true}) que faz com que o recebimento de informações seja feita da forma correta (aplicando JSON.parse no recebimentos dados no server). O parametro "extended: true" significa que ele vai obrigatoriamente tratar o dado de todas as requisições feitas com body (do tipo post, por exemplo)
//Depois criei neste documento um metodo .put do express, para substituir dados de produtos salvos anteriormente.
//Depois, acese o banco de dados e criei uma função de exclusão de produtos.

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////// TODOS OS COMANDOS DE EXPRESS VISTOSS:
/*
const porta = 3003
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.urlencoded({extended: true}))

const bancoDeDados = require('./2_bancoDeDados')

app.get('/produtos', (req, res, next) => {
    const produtos = bancoDeDados.getProdutos()
    res.send(produtos)
})

app.get('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.getProduto(req.params.id)
    res.send(produto)
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
    })
    res.send(produto)
}) 

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send({retorno: 'o seguinte produto foi excluído:', produtoExcluido: produto})
})

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))

*/