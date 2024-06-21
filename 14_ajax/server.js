const bodyParser = require('body-parser'); //responsável por interpretar dados da requisição e disponibilizar esses dados para uso no documento.

const express = require('express'); //responsável por criar o servidor
//vamos instanciar o express colocando-o numa variavel:
const appExpress = express()

//! Vamos criar agora um middleware, que é uma fução que vai ser executada quando uma requisição chegar.
//o middleware pode ser aplicado a um padrao especifico de URL ou a qualquer requisição que for recebida.

appExpress.use(express.static('.')) //Todos os arquivos dentro das pastas são arquivos estáticos. Com esse paramentro, estamos disponibilizando todos eles para requisições dentro da pasta atual ('.').

//? no caso do bodyParser, posso aplicar o middle condicionado a uma URL. Nesse caso, eu precisaria apenas inserir a URL como primerio argumento no app.use, dessa forma: app.use('/caminho-da-url', bodyParser.urlencoded({extended:true}))
appExpress.use(bodyParser.urlencoded({extended:true})) //esse será o bodyParser para tratar submits de formularios
appExpress.use(bodyParser.json()) //esse será o bodyParser para tratar JSON

//? Quando uma requisição to tipo get for feita para a URL "/teste", quero responder "ok":
appExpress.get("/teste", (req, res) => {
    res.send("ok")
})

//? vamos iniciar o servidor na porta 8080
appExpress.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
})