const escola = 'coder'
//posso solicitar que o sistema me devolva a letra que está no indice 4, ou seja, na quinta posição da esqueda para a direita (considerando que o código sempre conta o primeiro elemento - ou posição, nesse caso - a partir do zero) -> o nome disso é Zero Based Program.
console.log(escola.charAt(4))

console.log(escola.charAt(5)) //JS não gera erro aqui, apenas não retorna nada. Retorna Vazio.

//para que eu pegue uma letra ou numero na tabela unicode, posso usar a função charCodeAt(indice)
console.log(escola.charCodeAt(3)) //aqui, estou buscando pela letra 'e' na tablela unicode.

//posso vericar qual é o indice de um valor dentro de uma string utilizando a função indexOf.
console.log(escola.indexOf('d')) //o index aqui é 2.

//posso utilizar a função subString para imprimir a partir de um certo simbolo em diante dentro de uma string. - o número passado é o index
console.log(escola.substring(1)) //oder

//posso fazer com que imprima do indice inicial indicado, até o ultimo indice, desconsiderando o ultimo:
console.log(escola.substring(0, 3)) //cod

//posso usar a função .concat('') para concatenar strings
console.log('escola '.concat(escola).concat(' !'))
console.log('escola '+ escola + ' !') //esse é um jeito mais fácil de fazer o mesmo

//posso substituir um simbolo dentro da string por outro utilizando a função replace
console.log(escola.replace('e', '3'))

//posso converter uma string em um array, que é um tipo de bloco (estrutura de dados)
console.log('Ana,Maria,Pedro'.split(',')) //nesse caso, quando indico a vírgula dentro de split, estou dizendo para o sistema qual é o simbolo que considerará a separação de dois itens dentro do array.

console.log(escola[0])