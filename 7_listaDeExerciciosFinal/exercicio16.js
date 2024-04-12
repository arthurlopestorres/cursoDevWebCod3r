// A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
// Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4, não pode ser múltiplo de 100, exceto se for também múltiplo de 400.
// Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.

function bissexto(numero){
    let multiploDeQuatro = numero%4 == 0
    let multiploDeCem = numero%100 == 0
    let multiploDeQuatrocentos = numero%400 == 0

    if(multiploDeQuatro){
        multiploDeCem && !multiploDeQuatrocentos ? console.log('ano não bissexto') : console.log('ano bissexto')
    }else{
        console.log('ano não bissexto')
    }
}

bissexto(2) //false
bissexto(4) //true
bissexto(100) //false
bissexto(200) //false
bissexto(400) //true