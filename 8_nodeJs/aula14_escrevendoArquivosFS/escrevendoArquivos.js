const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1249.99,
    desconto: 0.15
}

//quero transformar esse objeto em texto (JSON) e fazer com que ele persista no disco. Sintaxe;
//fs.writeFile(caminho da pasta + '/nome do arquivo', informação a ser salva, callBack de erro)
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo!')
})