//PRIMEIRA FORMA: usando a notação literal (não é JSON)
const obj1 = {
    //...
}
console.log(obj1)

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//SEGUNDA FORMA: do objeto Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//TERCEIRA FORMA: funções construtoras
function Produto(nome, preco, desconto){
    //essa variavel está visivel para fora da função (pode ser manipulado -- publico)
    this.nome = nome 
    //esse método é publico (pode ser utilizado fora desta função)
    this.getPrecoComDesconto = () => {
        return `${nome}: ${preco * (1 - desconto)}`
        //preco e desconto aqui, por nao estarem declarados como "this", não podem ser manipulados de forma publica. (estão encapsulados)
    }
}

const p1 = new Produto('Caneta', 12, 0.15)
const p2 = new Produto('notebook', 3000, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//QUARTA FORMA: função Factory -> função que fabrica algo, nesse caso, um objeto
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Arthur', 20000, 1)

console.log(f1.getSalario(), f2.getSalario().toFixed(2))

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//QUINTA FORMA: Object.create -> não vamos nos aprofundar muito nela aqui
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha) //ana

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//SEXTA FORMA = A partir de um JSON utilizando JSON.parse
const fromJSON = JSON.parse('{"info": "Sou um JSON"}') //o JSON.parse transforma um JSON em objeto para ser manipulado como objeto e não como texto.
console.log(fromJSON.info)