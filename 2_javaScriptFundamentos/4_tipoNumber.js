const peso1 = 1.0 //forma padrão de criação de um identificador numérico.
const peso2 = Number('2.0') //essa é outra forma de criar um identificador numérico. Nesse caso, Number() é uma função que transforma string dentro dele em número, desde que o valor dentro da string seja, de fato, um número. Caso contrário, o retorno é NaN (not a number)
console.log(typeof Number);

//posso perguntar para o sistema se o número é inteiro, ou não, utilizando uma outra função chamada "isInteger" associada à função Number. A resposta será booleana, exemplo:
console.log(Number.isInteger(peso1));

const avaliacao1 = 9.871
const avaliacao2 = 6.871


//calculo de media aritmetica utilizando os dados acima
const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total / (peso1 + peso2)

console.log(media);

//posso controlar a quantidade máxima de casas decimais a serem exibidas depois da virgula utilizando a função "toFixed(quantidade)". Exemplo:
console.log(media.toFixed(2));
//Obs.: toFixed não altera o dado recebido pelo indicador, apenas trata visualmente a apresentação final desse dado.


//posso fazer com que um valor numerico se torne uma string utilizando a função ".toString". Exemplo:
console.log(media.toString());
//Obs.: toString não altera o dado recebido pelo indicador, apenas trata visualmente a apresentação final desse dado.

//Se eu passar para a função "toString" o valor 2, eu farei com que o número passe a ser exibido como binário no resultado final:
console.log(media.toString(2));

/*
Resumo:
A função Number faz com que strings possam ser tornar números, desde que seja um número.
Quando um identificador é do tipo Number, algumas funções podem ser utilizadas nele:
*toFixed(valor) = faz com que eu limite as casas após a virgula
*toString() = faz com que eu transforme um número numa string no resultado final
*toString(2) = transforma o valor do indicador em binário no resultado final.
*Number.isInteger(indicador) = faz com que eu valide se o indicador é inteiro ou não, em formato boolean.
*/