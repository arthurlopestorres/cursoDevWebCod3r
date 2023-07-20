// objeto é uma coleção dinamica de pares chave: valor,

//por estar utilizando "new" aqui, estou instanciando um objeto (criando um novo objeto)
const produto = new Object //produto agora é um objeto

//há duas formas dinamicas de inserir informações no objeto:
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
console.log(produto)

//posso excluir um atributo de um objeto a partir da palavra reservada "delete":
delete produto.nome
console.log(produto)

/////////////////////////////////////////////////////////////////////////////////
//Vamos trabalhar com um objeto um pouco mais complexo:
const carro = {
    modelo: 'a4',
    preco: 89000,
    proprietario: {
        nome: 'Arthur',
        idade: 24,
        endereco: {
            logradouro: 'Rua abc',
            numero: 123
        }
    },
    condutores:[{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
console.log(carro)
//caso eu não conheça os atributos do objeto, posso acessa-los dessa forma (ele auxiliar me mostrando as opcoes dentro de cada objeto)
carro['proprietario']['endereco']['numero'] = 2000
console.log(carro)

//posso, alem de deletar elemntos do objeto, deletar funcoes que existam nele. Exemplo:
delete carro.calcularValorSeguro
console.log(carro)