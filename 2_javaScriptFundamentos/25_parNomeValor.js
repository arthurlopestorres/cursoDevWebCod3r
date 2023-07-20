//o tema dessa aula está votado ao formato de par nome: valor dentro dos objetos, que tenho tratado como identificador: valor. Exemplo:

//Contexto léxico é o local físico onde o identificador foi definido.Nos definimos o par identificador / valor dentro de um CONTEXTO LÉXICO;

const saudacao = 'Olá!' //contexto lexico 1 para 'saudacao'

function exec() {
    const saudacao = 'faaaaaaaala' //contexto lexico 2 para 'saudacao'
    return saudacao
}

console.log(saudacao)
console.log(exec())
//no exemplo acima, os dois termos 'saudacao' não interferem um no outro por se encontrarem em contextos lexicos diferentes.

//Objetos são grupos aninhados de pares identificador/valor. No exemplo abaixo, estamos usando anotação literal de objeto:
const cliente = {
    nome: 'Arthur',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'rua muito legal',
        numero: 123
    }
} //eu poderia ter o mesmo identificador sendo utilizando em objetos de camadas mais internas sem que eles interferissem nos dados do objeto que o abrange, porque estão em contextos léxicos diferentes.
console.log(cliente)