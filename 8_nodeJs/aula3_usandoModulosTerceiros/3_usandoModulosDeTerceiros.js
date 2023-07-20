//para importar pacotes de terceiro, preciso utilizar o terminal.
//no terminal, precisarei utilizar o comando "npm" (npm é o gerenciador de pacotes do Node)

//para importar, o passo a passo é o seguinte:
// 1- digitar 'npm i [nome da biblioteca]' (npm (gerenciador de pacotes) + i (instalador) + [nome da biblioteca]). Exemplo:
// npm i lodash

// depois de rodar o comando, ele instalou a biblioteca e uma nova pasta chamada "node_modules" foi instalada na pasta indicada, além de um arquivo chamado "package-lock.json"

// quando envio o projeto para o github por exemplo, não faz sentido eu disponibilizar a pasta node_modules por conta da quantidade de arquivos dentro dela, e todas poderão ser instaladas pelo  dev que baixar o projeto, rodando npm i (veremos mais para frente)
// para dizer que o git deve ignorar, preciso criar um arquivo chamado ".gitignore" e dentro desse arquivo, digito apenas o nome da pasta que deve ser ignorada. Nesse caso, node_modules

// para utilizar o código de bibliotecas terceiras:
const _ = require('lodash')
//normalmente, utiliza-se '_' (underline) para referencia a bibliotecas terceiras quando importamos.
//'lodash' foi buscado sem ser necessário passar o caminho exatado da pasta, porque o proprio sistema estará procurando, dentro de lodash, um arquivo chamado index.js (que terá o module.exports do lodash)

// setInterval(() => console.log(_.random(1, 10)), 2000) //.random do lodash traz um numero no intervalo passado (sem a necessidade de criarmos o código responsável por calcular entre 1 e 1000)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//para instalar um modulo de terceiro de forma global:
// 1- utilizo o comando npm i -g [nome da biblioteca]
//exemplo: npm i -g nodemon
//obs.: no windows, precisei autorizar a instalação do nodemon da seguinte forma:
//1 - acessar o site https://learn.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.3 para copiar o parametro 'Set-ExecutionPolicy' .
//2- acessar o powershell como administrador, executar o comando do passo 1, e passar como paramentro "bypass"
//3- confimar enviar 'A'
//4- instalar o nodemon rodando o comando 'npm i -g nodemon'
//5- verificar se o nodemon foi instalado enviando o comando 'nodemon'

//o nodemon me ajuda a executar um codigo JS a partir do terminal (poweshell). e corrige a execução automaticamente quando salvo o arquivo.
//para isso preciso rodar o comando 'nodemon [nome do arquivo.js]' ou, tendo a pasta package.json, alterar o arquivo em "main" para o arquivo que o nodemon deve atualizar automaticamente.