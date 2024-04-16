const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1249.99,
    desconto: 0.15
}

//quero transformar esse objeto em texto (JSON) e fazer com que ele persista no disco. Sintaxe;
//fs.writeFile('caminho do arquivo', JSON.stringify('informação a ser salva em formato de JSON'), callBack que recebe erros e trata eles)
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo!')
})