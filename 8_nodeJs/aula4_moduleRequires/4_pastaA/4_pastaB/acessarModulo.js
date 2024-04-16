//! ACESSAR MODULOS INTERNOS DO MEU PROGRAMA
const moduloA = require('../../../aula2_sistemaDeModulos/2.1_sistemaDeModulos_1') //é importante respeitar todas as letras maiusculas e minusculas no nome do arquivo, porque pode dar problemas no linux, caso não utilize corretamente. 
//O arquivo acima também poderia ter sido acessado a partir do caminho literal: D:\CursoDesenvolvimentoWebUdemy\javaScript\8_nodeJs\2.1_sistemaDeModulos_1.js
console.log(moduloA.ola)

//! ACESSAR MODULOS INSTALADOS A PARTIR DE NPM I
//Aqui, vamos criar uma pasta chamada 'saudacao' dentro de node_modules
//dentro dessa pasta, vamos criar um arquivo chamado index.js (que é o arquivo buscado por padrão ao importarmos um modulo de node_modules) (O NOME DO ARQUIVO PRECISA SER 'index.js')
const saudacao = require('saudacao') //-> não é preciso buscar o arquivo via caminho relativo quando a pasta está em node_modules
console.log(saudacao.ola) //Bom dia pessoal!

const c = require('./4_pastaC')
console.log(c)
console.log(c.ola2)

//! ACESSAR MODULOS QUE VEM PREVIAMENTE INSTALADOS COM O NODE, CHAMADOS 'MODULOS CORE'
//ao acessar o http, estamos acessando um servidor. Para criar um servidor, utilizamos a função 'createServer', passando como paramentro uma função de callback uma função que pode enviar uma resposta e fazer requisicoes:
// const server = require('http') -> http é um módulo nativo do node.
// server.createServer((requisicao, resposta) => { 
//     resposta.write('Bom Dia!')
//     resposta.end()
// }).listen(8080) //para verificar, preciso acessar o browser e acessar a URL localhost:8080