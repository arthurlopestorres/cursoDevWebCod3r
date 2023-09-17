//function declaration - com esse método de declaração, eu posso usar a função antes dela ser declarada (hoisting)
console.log(soma(2, 4)) //6
function soma(x, y){
    return x + y
}

// function expression - não há hoisting nesse caso. não posso usar a função antes da declaração dela.
// console.log(sub(4, 6)) //cannot access 'sub' before initialization
const sub = function (x, y) {
    return x - y
}

// named function expression (muito pouco usada)
const mult = function mult(x, y){
    return x * y
}