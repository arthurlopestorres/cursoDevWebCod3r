//há dois blocos de condição: If e Else
//há dois blocos de repetição: for e while

//----------------------------------------------------------
//Nesse exemplo de loop abaixo, estaremos utilizando o for

//Aqui, a sintaxe de for é 
//for ([declaração do indicador e valor inicial]; [condição]; [o que fazer com o valor do indicador, caso a condição seja atendida])
for (var numero = 0; numero <= 10; numero++){
    console.log(numero)
} //aqui, o console irá exibia a contagem de 0 a 10, pois o resultado e o bloco são executados em repetição até que se saia da condição definida no segundo trecho da sintaxe
console.log(numero) //aqui o valor retornado é 11, porque pulou para fora do loop, não atendendo mais a condição, o que faz com que o número também pare de crescer.