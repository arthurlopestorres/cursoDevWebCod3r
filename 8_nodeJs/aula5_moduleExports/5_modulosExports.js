console.log(module.exports === this) // true
console.log(module.exports === exports) // true
console.log(module.exports) // {}

//três formas, então, de exportar:
//usando this:
this.a = 1

//usando exports:
exports.b = 2

//usando module.exports:
module.exports.c = 3

exports = null //-> mesmo atribuindo null para "exports", module.exports não muda:
console.log(module.exports) //{ a: 1, b: 2, c: 3 }

exports = { //esta forma não pode ser utilizada, porque ela não altera o module.exports dessa forma.
    nome: 'teste'
}
console.log(module.exports) //{ a: 1, b: 2, c: 3 }