// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

const retornaArray = (valor, repeticao) => {
    let array = []
    for(i = 0; i < repeticao; i++){
        array.push(valor)
    }
    console.log(array)
}
retornaArray('arthur', 4)