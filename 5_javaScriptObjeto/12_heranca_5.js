//funcionalidades interessantes que podemos fazer com herança.

console.group(typeof String) //function
console.log(typeof Array) //function
console.log(typeof Object) //function
//os três elementos acima, por serem funções, possuem um atributo chamado .prototype

/////////////////////////////////////////PARA STRING//////////////////////////////////////////
String.prototype.reverse = function(){ //criando função reverse() sentro de string.prototype
    return this.split('').reverse().join('') //dou split nos paramentros, depois inverto os elementos, depois juntos eles novamente.
}
console.log('Escola Cod3r'.reverse()) //r3doC alocsE


/////////////// //////////////////////////PARA ARRAY///////////////////////////////////////////
Array.prototype.first = function(){
    return this[0]
}
console.log([1, 2, 3, 4, 5].first()) //1