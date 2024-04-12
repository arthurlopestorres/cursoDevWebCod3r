//Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.

function multiplicaValores(valor1, valor2){
    let param1 = valor1 >= 0 && typeof valor1 == 'number' && Number.isInteger(valor1) ? valor1 : 0
    let param2 = valor2 >= 0 && typeof valor2 == 'number' && Number.isInteger(valor2) ? valor2 : 0
    let resultado = 0

    for(let i = 0; i < param2; i++){
        resultado += param1
    }

    console.log(`${param1}x${param2}=${resultado}`)
}
multiplicaValores(3, 2)