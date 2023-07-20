//Heranca é quando um objeto recebe de seu pai atributos, de forma que não seja necessário ficar reutilizando codigos.
//entre herança e composição, preciso priorizar composição, ou seja, colocar o maximo de caracteristicas possiveis dentro do objeto diretamente, sem criar objetos filhos.

//o atributo .prototype somente está disponível dentro de uma FUNÇÃO. Exemplo: Object.prototype (ele não está disponível para objetos em geral)
//nos objetos em geral, é chamado de [[Protoype]] o pai desse objeto (como um conceito), mas [[Prototype]] != .prototype

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //a partir de __proto__ eu consigo acessar quem é o prototipo, ou seja, o pai desse objeto, nesse caso: [Object: null prototype] {} -> o prototipo desse objeto existe mas está vazio
console.log(ferrari.__proto__ === Object.prototype) //sim!! nesse caso, o __proto__ de ferrari é sim === a Object.prototype


//TODAS AS FUNÇÕES POSSUEM PROTOTIPOS:
function MeuObjeto(){}
console.log(Object.prototype, MeuObjeto.prototype) // {} {}