//Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.

const multiplicaNumsInteirosPos = (num1, num2) => {
    typeof num1 != "number" ? num1 = 0 : num1
    typeof num2 != "number" ? num2 = 1 : num2
    num2 < 1 ? num1 = 0 : num2

    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        console.log('Apenas numeros positivos e inteiros são aceitos')
    } else{
        for(i = 1; i < num2; i++){
            num1 += num1
        }
        console.log(num1)
    }
}
multiplicaNumsInteirosPos(2, 2)