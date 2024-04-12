//Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. 
//Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo.

const validaEntreMinMax = (numero, minimo, maximo, inclusivo = false) => {
    if(inclusivo == true){
        numero == minimo || numero == maximo ? console.log(true) : console.log(false)
    } else{
        numero > minimo && numero < maximo ? console.log(true) : console.log(false)
    }
}

validaEntreMinMax(10, 50, 10) //false
validaEntreMinMax(10, 50, 10, true) //true