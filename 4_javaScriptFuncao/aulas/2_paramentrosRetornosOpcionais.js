//PARAMETROS E RETORNOS SAO OPCIONAIS
function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`valor acima do permitido: ${area}m2.`)
    }else {
        return area
    }
}
console.log(area(2, 2))
console.log(area(2))//NaN 2 * undefined 
console.log(area())//NaN undefined * undefined
console.log(area(2, 3, 4, 5, 6, 7))// 2 * 3 = 6 (o outros valores serão ignorados.)
console.log(area(5, 5))//mensagem da condição if + undefined, porque o console.log avalia o retorno da função que, nesse caso, é nenhum retorno (undefined)