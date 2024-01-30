//IF /ELSE IF...
//Vamos criar uma função para verificar se um numero está entre dois numeros.

function entreNumeros([alvo, bottom, top]){
    if(alvo >= bottom && alvo <=top){
        console.log('alvo esta na media...', alvo)
    }else if(alvo < bottom || alvo > top) {
        console.log('eita bicho bruto', alvo)
    }
}
let valoresDoAlvo = [15, 5, 20]
entreNumeros(valoresDoAlvo)

//------------------------------------------------------------------------------------------------------------------
//Exemplo dado pelo professor utilizando prototype associado a função (vamos aprender no futuro como utilizar):
Number.prototype.entre = function (numeroInicio, numeroFim){
    return this >= numeroInicio && this <= numeroFim
}

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)) {
        console.log('quadro de honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('aprovado')
    } else if (nota.entre(6, 7.99)){
        console.log('muito bom!')
    }
}
imprimirResultado(9.5)