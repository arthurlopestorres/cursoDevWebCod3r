var a = 3 //declaro o tipo de identificador, depois coloco qual é o identificador e depois o que ele recebe. Nesse caso: tipo de identificador = var, identificador = a e valor recebido é o número 3.
let b = 4 //na regra geral, utiliza-se let para criar identificador. Essa é a forma mais moderna.

//demonstrando o funcionamento diferente de var e let:
var a = 5 //esse identificador foi criado anteriormente como "var", mas posso usar var de novo sem problemas

//let b = 10 esse identificador tambem foi criado anteriormente como "let", mas não posso declara-lo novamente, assim, eu precisaria apenas aletar o valor de 'b' recebe, assim: b = 10. Let não deixa um mesmo identificador ser criado novamente (com nenhum tipo de declaração - var, let, const).
b = 10
console.log(a, b);

//const não nos permite alterar o valor que um identificador recebe de forma nenhum. Ele sempre irá receber um mesmo valor, que é o definido quando ele foi criado
const nomeArthur = 'Arthur Lopes Torres'
console.log(nomeArthur);