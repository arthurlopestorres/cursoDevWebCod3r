let comparaComThis = function (parametro){
    console.log(this === parametro)
}
comparaComThis(global) // o resultado aqui é verdadeiro, porque this apontará para o contexto global quando de uma função comum é executada no contexto global.

const obj = {}
comparaComThis = comparaComThis.bind(obj) //bindando comparaComThis ao contexto léxico de obj.
comparaComThis(global) //false.
comparaComThis(obj) // true.

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //false

const obj2 = {}
comparaComThisArrow = comparaComThisArrow.bind(obj2)
comparaComThisArrow(global) //false
comparaComThisArrow(obj2) //false

//sera falso, nesse caso, em 3 invocações de comparaComThisArrow (marcados em vermelho), porque this === param apenas no contexto da função onde ele foi declarado.
comparaComThisArrow(module.exports) //true, porque está apontando para o local onde o this foi declarado, que foi o module.exports do node.