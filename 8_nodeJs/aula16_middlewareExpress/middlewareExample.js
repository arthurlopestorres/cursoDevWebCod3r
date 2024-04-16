//Exemplo de framework middleware, também conhecido como chain of responsability. 
//Observa-se, nesse formato, que os passos manipulam um objeto a receber, no fim, uma função sintetiza esses passos, manipulando um objeto real de contexto.


const passo1 = (ctx, next) => {
    ctx.valor1 = 'Arthur'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'Izabelle'
    next()
}

const passo3 = (ctx) => {
    ctx.valor3 = 'Henrique'
}

let contexto = {}

const injetaValoresNoObjeto = (ctx, ...passos) => {
    function injetaValoresEmCotexto(index){
       if(passos[index] && index < passos.length){
            passos[index](ctx, () => injetaValoresEmCotexto(index + 1))
       }
    }
    injetaValoresEmCotexto(0)
}
injetaValoresNoObjeto(contexto, passo1, passo2, passo3)

console.log(contexto)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//UMA FORMA MAIS SIMPLES DE ESCREVER A MESMA COISA (mas sem utilizar a função next que faz parte do framework chain of resposability):
const passo11 = (ctx) => {
    ctx.valor1 = 'Arthur'
}

const passo22 = (ctx) => {
    ctx.valor2 = 'Izabelle'
}

const passo33 = (ctx) => {
    ctx.valor3 = 'Henrique'
}

let contexto2 = {}
const injetaValoresNoObjeto2 = (ctx, ...passos) => {
    for(let passo of passos){
        passo(ctx)
    }
}
injetaValoresNoObjeto2(contexto2, passo11, passo22, passo33)
console.log(contexto2)