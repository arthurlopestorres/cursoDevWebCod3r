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
// appExpress.get("/teste", (req, res) => {
//     res.send("ok")
// })

const multer = require('multer');

const storage = multer.diskStorage({
     destination: function (req, file, callback) {
        callback(null, './upload') // aqui, a gente indica para o sistema a pasta onde a gente quer que o arquivo seja salvo
     },
     filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) //aqui, a gente indica o nome do arquivo que a gente quer que o sistema salve por padrão.
     }
})

const upload = multer({storage}).single('arquivo') //aqui, estamos definindo que o upload será feito utilizando os parametros do objeto "storage" e o nome do arquivo na requisição.

appExpress.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('ocorreu um erro.')
        }
        res.end('Upload concluído com sucesso!')
    })
})

//!Aula Fetch 2
appExpress.post('/formulario', (req, res) => { //como estou recebendo informações (método post, o body-parser é necessário para que seja feita a interpretação correta dos dados recebidos)
    res.send({
        ...req.body, //tudo que eu receber de resposta eu retorno criando esse novo objeto (bem simples)
        id: 1
    })
})

//!Aula Axios 2
appExpress.get('/parOuImpar', (req, res) => {
    // há algumas formas de receber dados a partir do front end no express:
    // 1. req.body -> utilizando na aula Fetch 2
    // 2. req.query -> é colocado dentro da consulta a query, exemplo: /caminho?query -> ficaria assim: /caminho?numero=1
    // 3. req.params -> cada param estaria representado com o incio /: na requisição, exemplo: /caminho/:param1/:param2, que na pratica ficaria assim: /caminho/1/2
    const par = parseInt(req.query.numero) % 2 == 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

appExpress.post('/axiosPost', (req, res) => {
    const nome = req.body.nome
    const sobrenome = req.body.sobrenome
    res.send({
        nome,
        sobrenome
    })
})

//? vamos iniciar o servidor na porta 8080
appExpress.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
})