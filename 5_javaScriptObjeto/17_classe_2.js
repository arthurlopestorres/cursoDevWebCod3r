class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //é dessa forma que indico o __proto__ de Pai, quando estamos falando de classe.
    constructor(sobrenome, profissao = 'Engenheiro'){
        super(sobrenome) //chamando o construtor do __proto__ utilizando "super()"
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva', 'Medico')
    }
}

const filho = new Filho
console.log(filho)