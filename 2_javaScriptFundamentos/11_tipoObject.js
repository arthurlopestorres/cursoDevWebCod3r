// object não é a mesma coisa que Json. Json é textual, object é JS
// todo objeto é declarado com um par de chaves {}, enquanto todo array é declarado com um par de colchetes: []
//Object é uma função em JS!!
console.log(typeof Object)

//declarando o objeto
const prod1 = {}

//a ideia de um objeto é que ele possa ter características (não sendo um objeto físico necessariamente). Nesse exemplo, vou trabalhar com a ideia de um objeto físico, então vamos passar as características para o objeto:
prod1.nome = 'Celular Ultra Mega'
prod1.codRef = '15324862'
prod1.preco = 20000
prod1['Desconto Legal'] = 0.4 //evitar atributos com espaço dessa forma
prod1.categoria = 'Eletronicos'
prod1.categoriaId = 22

console.log(prod1)

//posso criar identificador e valor diretamente dentro de um objeto, utilizando anotação direta:
const prod2 = {
    nome: 'Celular Menos Mega',
    codRef: '654646',
    preco: 15000,
    categoria: 'Eletronicos',
    categoriaID: 22,
    obj1: {
        nome: 'objeto dentro do outro',
        obj2: {
            nome: 'outro objeto dentro do outro'
        }
    }
}

console.log(prod2)

//posso encontrar elementos dentro do objeto a partir da busca pelo identificador diretamente:
console.log(prod2.codRef) //retorno do console: 654646

//posso misturar array com objeto, e buscar primeiro na posição do array, para selecionar o objeto desejado, depois buscar o identificador do objeto. Exemplo
const arrayDeteste = [
    prod3 = {
        nome: 'Celular bombastico'
    }
]
console.log(arrayDeteste[0].nome)
//IMPORTANTE: indetificadores normais são definidor nessa sintaxe: identificador = valor
//no caso dos objetos, o identificador é definido com : , assim: identificador: valor