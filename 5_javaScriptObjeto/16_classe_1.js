//No ES6, surgiu o conceito de classe no JS. Ela é apenas um detalhes de sintaxe, porque no fim das contas ela é convertida em função. 

//Na classe, constructor seria como se fosse a proriedade contrutora da classe. Assim como acontece em uma função construtora, por exemplo. Assim, posso passar paramentros para constructor e trabalhar com esses dados assim como numa função construtora.
class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(lancamento => this.lancamentos.push(lancamento))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(lancamento => {
            valorConsolidado += lancamento.valor
        })
        return valorConsolidado
    }
}
const salario = new Lancamento ('Salario', 45000)
const contaDeLuz = new Lancamento('Conta de luz', -220)

const contas = new CicloFinanceiro(6, 2018)
      contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
console.log(contas)