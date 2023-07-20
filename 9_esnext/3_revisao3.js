// ES8: Object.values e Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj)) //[1, 2, 3] -> retorna valores
console.log(Object.entries(obj)) //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ] -> retorna arrays de conjuntos chave/valor.

//Melhorias na notação literal de objetos
const nome = 'Carla'
const pessoa = {
    nome, //consigo acessar identificador sem precisar fazer nome: nome, por exemplo
    ola(){ //consigo criar uma funação sem precisar fazer ola: function(){} , por exemplo.
        return 'Olá gente! e ' + this.nome
    }
}
console.log(pessoa.nome, pessoa.ola()) //Carla Olá gente! e Carla

// Foi adicionada a Class ao JS
class Animal {}
class Cachorro extends Animal{ //extends faz herança por aqui com anima
    falar(){
        return 'au au!'
    }
}
console.log(new Cachorro().falar()) //au au!