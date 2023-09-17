//estrategia 1 para gerar valor padrão: caso o identificador receba uma valor falso (que resolva para falso), ela será substituida por 1, por padrao.
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1()) //resultado é 3, assumindo o valor padrão.
console.log(soma1(3)) //resultado é 5, 3 + 1 + 1
console.log(soma1(1, 2, 3)) //resultado é 6, 1 + 2 + 3
console.log(soma1(0, 0, 0)) //resultado é 3, porque 0 resolve para falso, e então 1 + 1 + 1

//estrategia 2, 3 e 4 ara gerar valor padrão
function soma2(a, b, c){
    a = a != undefined ? a : 1 //assemelha-se ao if: if(a !== undefined){ a = a }else{ a = 1 }
    b = 1 in arguments ? b : 1 //se houver b em arguments[1], pegue o valor e atribua a b, se não, b = 1 (é importante atentar-se que b seria o indice 1 no array. Se esse teste fosse feito em "a", entao o indice seria 0, e se fosse feito em c, o indice seria 2)
    c = isNaN(c) ? 1 : c //se a o valor c não for um numero, retorne 1, se não, c = c (esta é a estrategia mais segura)

    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do es2015 //esse método é o mais facil para valor padrão, porem pode ter problemas se receber valor de string, por exemplo. Para garantir a ideia de nao receber string e, se receber, substituir por um numero, é a hipotese c acima: c = isNaN(c) ? 1 : c
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))