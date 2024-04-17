//para poder ler um arquivo txt eu posso utilizar o file system do node:
// const fs = require('fs')
// fs.readFile('D:\CursoDesenvolvimentoWebUdemy\javaScript\9_esnext\dados.txt', callback)

//nesse desafio, preciso fazer a leitura do arquivo, de forma que, o retorno da promise seja o conteudo do arquivo.
const fs = require('fs')

function leArquivoTxt(caminho){
    return new Promise((resolve, reject) => {
        function retornaString(erro, conteudo){ 
                let content = conteudo.toString()
                resolve(content)
        }
        fs.readFile(caminho, retornaString)
    })
}
leArquivoTxt(`./dados.txt`)
    .then(console.log)