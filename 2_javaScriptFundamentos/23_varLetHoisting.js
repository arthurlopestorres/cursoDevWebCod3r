//hoisting tem a ver com var e let. Hoisting significa 'jogar para cima' (como içar uma bandeira)
console.log('a =', a) //nesse caso, a variavel 'a' é considerada como existente, porém sem valor definido (erro undefined). Então, a variavel 'a' declarada abaixo foi içada para cima.
var a = 2
console.log('a =', a)

function teste(){
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}
teste(); //o efeito dentro da função é o mesmo (de içamento)

// console.log('b =', b) //com let, o seguinte erro é exibido: Cannot access 'b' before initialization -> não há hoisting quanto a let. É gerado um erro.
let b = 3
console.log('b =', b)