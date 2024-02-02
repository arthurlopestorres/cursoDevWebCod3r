//Funções fábrica (factory)
//uma função factory é uma função que retorna um objeto! Ela resolveria o problema da necessidade de criação de varios objetos dessa forma:
/*
const prod1 = {
    nome: 'Camiseta',
    preco: 45
}

const prod2 = {
    nome: 'Tenis',
    preco: 100
}
*/

//Factory simples
function criarPessoa(nome, sobrenome){
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}
console.log(criarPessoa('Arthur', 'Lopes Torres'))