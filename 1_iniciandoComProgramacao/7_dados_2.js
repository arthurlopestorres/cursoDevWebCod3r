//na criação de uma variável, temos: [decaração][identificador] = [dado recebido]
//os identificadores precisam ter bons nomes para que possa fazer sentido a variável sendo criada
//falando sobre idade de pessoas, por exemplo, podemos ter a viarável chamada "idade"
var idade = 20;
//nesse caso, "idade" é o nome dado ao espaço de memória criado pela variável, chamado de identificador.

let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);

console.log(preco * (1 - desconto)); // calculo de preco com desconto 

console.log(`preco com desconto = ${preco - (preco * desconto)}`); // forma mais avançada do calculo

console.log(precoComDesconto);

let nome = 'papel' // essa variável é uma string, pois tem a natureza de texto.
let categoria = 'papelaria'
console.log(nome + categoria); //dessa forma, a concatenção vai ser feita de forma direta, ou seja, o texto que 'nome' receber e o texto que 'categoria' recebe, gerando um resultado ruim. Para corrigir isso, adicionamos um espaço:
console.log(nome + ' ' + categoria);

console
.log(
    'Produto: ' 
    + nome 
    + ', ' 
    + 'Categoria: ' 
    + categoria
    )