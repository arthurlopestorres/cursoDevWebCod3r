/* 
É importante termos conciencia do run time em que estamos executando o JS. Se estivermos executando no front end, estaresmo executando no browser, se estivermos executando no backend, estaremos executando no node.

Se eu utilizar var, vou ter uma variavel disponivel no contexto global e que pode ser acessada a partir do objeto window no browser.
Se eu utilizar let, vou ter uma variavel disponivel no contexto global, mas que não pode ser acessada a partir do objeto window.
const tem o mesmo comportamento que o let, nesse caso.

caso eu crie uma função, ela ficara disponivel no contexto global, mas não estará disponivel no objeto window.

quando eu estiver dentro de um objeto, o this apontara para o mesmo objeto, exemplo:
*/
let pessoa = {
    nome: 'Izabelle', 
    falar: function (){ 
        return `Eu sou ${this.nome}`
    } 
}
console.log(pessoa.falar())

/*
dentro do node, 'global' equivale ao objeto "window" no navegador
em node, diferente do navegador, tudo que que é criado no global fica separado em modulos, e podemos acesse esse modulo global do codigo em node via "module.exports", via "this." e também via "global.".
*/
module.exports = { nome: 'Arthur', sobrenome: 'Lopes Torres'}
console.log(module.exports.nome)

console.log(module.exports === this) //false
console.log(module.exports === global) //false

global.idade = 24;
console.log(global.idade)