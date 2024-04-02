//houve melhorias sobre notação literal de objetos no ES6
const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } //essa estrutura não é mais necessaria.
const obj2 = { a, b, c} //é a mesma coisa que a estrutura de cima, mas atributo e valor têm a mesma nomenclatura, então não é preciso duplicidade.
console.log(obj1,obj2)

/////////////////////////////////////////////////////////////////////////

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr //nesse caso, estou recebendo "nota" como um atributo (como se fosse obj3.nota) do objeto passando valorAttr a 'nota'.
console.log(obj3)

const obj4 = {
    [nomeAttr]: valorAttr // faz o mesmo que acima, mas com notação literal de objeto.
} 
console.log(obj4)

////////////////////////////////////////////////////////////////////////////
//? duas formas diferentes de anotar funções dentro de objetos:
const obj5 = {
    funcao1: function(){
        //...
    },
    // no ES6:
    funcao2(){
        //...
    }
}