//classe no JS é convertida para função no fim das contas, e por isso tambem teria .prototype. Vamos falar disso mais adiante.

function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2) //Aula { nome: 'Bem Vindo', videoID: 123 } Aula { nome: 'Até breve', videoID: 456 }

//SIMULANDO O NEW, usado em new Aula, por exemplo:
function novo(f, ...params){//recebe função e paramentros
    const obj = new Object
    obj.__proto__ = f.prototype

    f.bind(obj)(params)
    
    return obj
}

const aula3 = novo(Aula, "Maria", 123)
const aula4 = novo(Aula, "Arthur", 456)
console.log(aula3, aula4)