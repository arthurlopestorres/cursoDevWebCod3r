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

/////////////////////////////////////////////////////  Funcao construtora:  ///////////////////////////////////////////////////////////////////

function criarPessoa(nome){
    this.nome = nome
    this.falar = function(){
        console.log(`meu nome é ${this.nome}`)
    }
}
const novaPessoa = new criarPessoa('Arthur')
novaPessoa.falar()