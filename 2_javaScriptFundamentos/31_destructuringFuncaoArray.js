function random([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min] //aqui, estou utilizando as informações do array inicial para verificar se minimo é maior que máximo e, caso seja, passando para o sistema o array atual [min, max], convertendo-o em um novo array, para inverter os valores [max, min], ficando: 
    //array atual -> [min, max] = [max, min] <- novo array
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(random([50, 40]))
//para eu passar somente o segundo valor:
console.log(random([, 10]))