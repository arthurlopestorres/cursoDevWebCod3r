//NESTA AULA VAMOS FAZER A LEITURA DE ARQUIVOS UTILIZNADO NODE
//O modulo 'fs' (file system) é o modulo do node responsavel pela leitura de documentos (é um modulo nativo)
//criamos o 'arquivo.json' nesta pasta para poder fazer a leitura dele por aqui.

const fs = require('fs') //este é o modulo para leitura de arquivos do node.
const caminhoDoArquivo = __dirname + "/arquivo.json"

// console.log(__dirname) //d:\CursoDesenvolvimentoWebUdemy\javaScript\8_nodeJs\aula13_lendoArquivos -> termo reservado para pegar o diretório atual: __dirname

//leitura de forma SINCRONA (ou seja, todo o sistema para aguardando a finalização de leitura deste arquivo -> arquivos pesados podem gerar problemas)
const conteudo = JSON.parse(fs.readFileSync(caminhoDoArquivo, 'utf-8')) //passo o arquivo que vai ser lido e o metodo de enconding do arquivo. Como escrevemos em UTF-8, esse é o encoding do arquivo
console.log(conteudo.db)

//leitura de forma ASSINCRONA
fs.readFile(caminhoDoArquivo, 'utf-8', (err, conteudoDoArquivoLido) => {
    const config = JSON.parse(conteudoDoArquivoLido)
    console.log('leitura assincrona, que está no meio:', config.db.host) //localgost
})
//no caso acima, além de passar o caminho e o metodo de encoding, precisei passar uma função de callback. Essa função recebe dois paramentros: [erro na leitura] e [conteudo do arquivo sendo lido]. Utilizar o JSON.parse nesse caso é importante, porque o conteudo do arquivo "caminhoDoArquivo" é um JSON, e por isso trata-se de uma string

//vou colocar abaixo uma outra forma de fazer leitura sincrona, mas repare no console que o console.log da forma assincrona é exibido apenas depois deste próximo exemplo (por ser assincrono.)

const config = require(caminhoDoArquivo) //-> este método não exige JSON.parse, porque o require já transforma um JSON em objeto automaticamente. obs.: quando leio um arquivo json utilizando require, eu PRECISO INDICAR O FORMATO DE ARQUIVO EM REQUIRE, PORQUE SE NÃO ELE BUSCARÁ UM ARQUIVO .JS POR PADRÃO.
console.log('sincrono por ultimo:', config.db.host)

//consigo também fazer a leitura de todos os arquivos de uma pasta, retornando um array com todos os arquivos:
fs.readdir(__dirname, (err, arquivos) => {
    console.log('arquivos da pasta', arquivos)
})