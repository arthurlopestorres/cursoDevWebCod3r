const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, res, next) => {
    // console.log(req.body)
    res.send('<h1>Parabens</h1>')
})

app.post('/usuarios/:id', (req, res, next) => {
    // console.log(req.params.id)
    // console.log(req.body)
    res.send('<h1>Parabens user updated</h1>')
})

app.get('/usuarios', (req, res, next) => {
    // console.log(req.query)
    // console.log(req.body)
    res.send('<h1>Get feito com sucesso</h1>')
})

// quando utilizo o get no form, todos os dados aparecem na URL, o que pode não ser seguro


app.listen(3003)