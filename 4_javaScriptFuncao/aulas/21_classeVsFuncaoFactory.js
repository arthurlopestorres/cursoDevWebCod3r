//Classe é uma forma diferente de construir funcao em JS. Tem uma ideia mais relacionada a orientação ao objeto.

//PRIMEIRO, VAMOS CRIAR UMA CLASSE CHAMADA PESSOA:
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('João')
pessoa1.falar()
console.log('pessoa 1', pessoa1)



///////EXEMPLO VIA FUNÇÃO FACTORY:
const criarPessoa = nome => {
    return {
        nome,
        falar: () => console.log(`meu nome é ${ nome }`)
    }
}

const pessoa2 = criarPessoa('Arthur')
pessoa2.falar()
console.log('pessoa 2', pessoa2)