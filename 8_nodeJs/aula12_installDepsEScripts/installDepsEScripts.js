//vamos falar de 2 coisas que tem a ver com o package.json:
//1- podemos criar scripts dentro do package.json
//2- posso, a partir do package.json, consigo recriar a pasta node.modules

//a aula está baseada no exemplo da aula 6 e 7, vistas anteriormente.

//1- exclui a pasta "node.modules" da pasta da aula 6
//2- troquei o arquivo de leitura principal do package.json para 2_funcionarios.js
//3- criei 2 scripts dentro do objeto scripts: "start" e "dev", ambos que instalam o nodemon.
//conforme visto anteriormente, o nodemon serve para executar novamente um arquivo sempre que uma mudança é feita automaticamente, assim, quando o arquivo 2_funcionarios.js for atualizado, ele será relido automaticamente pelo nodemon (porque ele é o arquivo que está apontado em "main")

//////////////////////////////////////////////////////////////////
//4- para recriar a pasta node.modules e:
//a- abri o terminal e acessei a mesma pasta que estava utiliza, no caso a aula6 -> funcionarios 
//b- rodei o comando 'npm i'. E foi suficiente para ser reinstalada a pasta node.modules, com as dependencias corretas.
//c- depois apenas rodei o comando 'npm start' para que ele já passasse a atualizar o arquivo 2_funcionarios.js automaticamente mediante alterações.

////////////////////////////////////////////////////////////////
// anteriormente, foi executado no terminal o comando npm start e ele funcionou certinho, porque "npm start" é um comando padrão do Node.
// já para rodar o script chamado 'dev', eu precisaria utilizar o comando "npm run dev" (run, nesse caso, aponta para um comando não padrão do node, na parte de scripts)