//vamos importar uma lista de funcionarios para fazer um desafio.
const axios = require('axios')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'


const filtraMulheres = funcionaria => funcionaria.genero == 'F'
const filtraChinesas = funcionaria => funcionaria.pais == 'China'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

//para obter dados a partir de uma requisição utilizando axios:
axios.get(url).then(response => {
    const funcionarios = response.data
    let chinesaDeMenorSalario = funcionarios.filter(filtraMulheres).filter(filtraChinesas).reduce(menorSalario)

    console.log(chinesaDeMenorSalario)
})

//para aula 7, devo obter a mulher chinesa de menor salario (feito acima)