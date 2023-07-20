//notação ponto esta relaciona ao uso de um '.' para acessar uma determinada função, por exemplo.
console.log(typeof console) //nesse caso, a notação '.' então sendo utilizanda para acessar a fução log a partir de console.
console.log(Math.ceil(6.1)) //math, nesse caso, é o objeto e ceil é uma função dentro desse objeto. Estamos utilizando o ponto para acessar a função. Ceil -> arredonda para cima.

const objeto1 = {}
objeto1.nome = 'Bola' //aqui, a notação '.' está sendo utilizada para criar um identificador dentro do objeto de forma dinamica.
// objeto1['nome'] = 'Bola2' //esse faz a mesma coisa que o de cima, mas sem a notação '.'
console.log(objeto1)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log(nome, 'é real')
    }
}

const obj2 = new Obj('Arthur')
const obj3 = new Obj('Maria')
console.log(obj2.nome)
console.log(obj3.nome)

const obj4 = new Obj('Arthur')
obj4.exec()
console.log(obj4)