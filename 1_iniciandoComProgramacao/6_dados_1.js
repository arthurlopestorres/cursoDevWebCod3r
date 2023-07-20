console.log('caneta')
console.log(10) //quando o numero é cheio assim, estamos inserindo um NUMERO LITERAL
console.log(6.4) // o padrão aqui no JS é norte americano, então 6,4 precisa ser 6.4
console.log(1.5)
console.log(7.9)

// posso colocar os valores numericos e texto dentro de variáveis. As variáveis podem ser criadas de algumas formas diferentes, mas a mais simples e comum é 'var', exemplo:

var produto = 'caneta';// a primeira parte da variável que está como "produto", é o título que estou dando para as informações que essa variável recebe, como se ela fosse uma caixa que receberá informações de texto ou número, por exemplo. A variável define o nome no computador para um espaço de memória (como uma caixa mesmo).
var quantidade = 10;
var preco = 6.4; // não é boa prática utilizar acentuação em variáveis. Por isso não utiliza-se ç
var imposto = 1.5;
var precoFinal = preco + imposto; // JS é case sensitive. Cuidado.

//Posso, no console, exibir a iformação que existe dentro de uma variável, exemplo:
console.log('produto = ' + produto);
console.log('quantidade = ' + quantidade);
console.log('preço = ' + preco);
console.log('imposto = ' + imposto);
console.log('preço final = ' + precoFinal);

//posso modificar uma variavel a qualquer momento, desde que esteja dentro de um bloco fechado por função, exemplo de mudança do produto:
produto = 'caderno';

console.log('aqui o produto é diferente: ' + produto);

//Uma forma mais moderna de criação de uma variável é utilizando "let", exemplo:
let impostoLet = 1.9;
//há diferença entre let e var, mas essas diferenças vão ser discutidas em casos mais complexos, mais para frente.