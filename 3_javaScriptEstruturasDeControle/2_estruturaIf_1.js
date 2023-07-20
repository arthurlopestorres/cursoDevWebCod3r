function soBoaNoticia(nota){
    if(nota >= 7){ //se a condição colocada dentro de if retornar true então é executado o bloco, se não, não.
        console.log(nota)
    }
}
soBoaNoticia(8)
soBoaNoticia(6) //esse nao faz nada, porque não satisfaz o if.

function seForVerdadeEuFalo(valor){
    if(valor){ //o js, automanticamente, converte o valor dentro do parametro de if para verdadeiro ou falso, dispensando a necessidade de operadores lógicos ou relacionais, por exemplo. Se eu passar "zero", por exemplo, ele não retornará nada, porque zero é falso.
        console.log('é verdade...', valor)
    }
}
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(1)