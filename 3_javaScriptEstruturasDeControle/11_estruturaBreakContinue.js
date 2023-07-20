//na estrutura de switch, por exemplo, o break causava um desvio de fluxo, ou seja, quando o codigo encontrava um "break", ele saia do fluxo padrão (do bloco) -- break influencia no switch, laço for e laço while
//a palavra "continue" também causa um desvio de fluxo, mas funciona apenas num laço for e while.
//de certa forma, o break e o continue podem trazer confusão. Por isso o uso precisa ser mínimo e cuidadoso.

const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (index in numbs){
    if (index == 5){
        break //aqui, o break nao esta influenciando o if. Ele esta sendo aplicado no for. Ele so pode ser aplicado ao for, while ou switch.
    }
    console.log('elemento', numbs[index])
}

for (y in numbs){
    if (y == 5){
        continue //ele fara com que a validação de if pare e aplica a continuação no for. Dessa forma, o index 5 será pulado! Continue apenas se alica em For e while
    }
    console.log(`index [${y}] = ${numbs[y]}`)
}

//posso criar um rótulo externo para poder indicar ao "break" ou ao "continue" onde eles deve ser aplicados (no caso de ter um for dentro do outro, por exemplo): NÃO USE ESSE TIPO DE ESTRUTURA!! DE USAR UM FOR DENTRO DO OUTRO POR EXEMPLO.
externo: for (a in numbs){
    for (b in numbs){
        if (a == 2 && b == 3){
            break externo
        }
        console.log(`Par = ${a}, ${b}`)
    }
}