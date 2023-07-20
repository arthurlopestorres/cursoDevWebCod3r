function MeuObjeto () {

}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

//pelos testes acima, conseguimos compreender que, quando criamos um objeto a partir de uma função contrutora, o prototipo do obj será o mesmo que funcaoConstrutura.prototype, que é igual a object.prototype, caso esteja declarada no contexto global.

MeuObjeto.prototype.nome = 'Arthur' //nome, nesse caso, vai se aplicar a qualquer objeto que for criado a partir dessa função construtora. Eu poderia passar uma nova função, outro objeto e assim por diante.
MeuObjeto.prototype.falar = function(){
    console.log("olá! Meu nome é", this.nome)
}
console.log(MeuObjeto.prototype.nome) //é assim que manipulo o objeto de uma função contratutora com notação não literal (por atribuição.)
console.log(obj1.nome)
console.log(obj2.nome)

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const objt3 = {}
objt3.__proto__ = MeuObjeto.prototype
objt3.nome = "Maria"
objt3.falar()

//resumindo a loucura...
console.log((new MeuObjeto).__proto__) //{ nome: 'Arthur', falar: [Function (anonymous)] }
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) //true
console.log(MeuObjeto.__proto__ === Function.prototype) //true -> vale notar que toda função também tem um prototype.
console.log(MeuObjeto.prototype === Function.prototype) //false
console.log(MeuObjeto.prototype.__proto__ === Object.prototype) //true

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Praticando

function FuncaoConstrutora () {

}
console.log(FuncaoConstrutora.prototype)

const object1 = new FuncaoConstrutora
object1.__proto__.nome = "Arthur" //aqui, estou acessando FuncaoConstrutora.prototype
console.log(FuncaoConstrutora.prototype.nome) //Arthur
console.log(object1.nome) //Arthur

FuncaoConstrutora.prototype.__proto__.nome = "Arthur piu"
console.log(Function.prototype.nome) //Arthur Piu

Function.prototype.__proto__.nome = "Maria piu"
console.log(Object.prototype.nome) //Maria piu

object1.nome = 'Maria'
console.log(object1.nome) //Maria