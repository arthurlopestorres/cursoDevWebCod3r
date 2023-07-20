const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('aprovado')
    }else{ //resultado retorando, caso retorne false no if.
        console.log('reprovado')
    }
}
imprimirResultado(10)
imprimirResultado(4)