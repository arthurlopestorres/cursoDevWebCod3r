//vamos importar uma lista de funcionarios para fazer um desafio.
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const filtraMulheres = funcionaria => funcionaria.genero == 'F'
const filtraChinesas = funcionaria => funcionaria.pais == 'China'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

//para obter dados a partir de uma requisição utilizando axios:
axios.get(url).then(response => {
    const funcionarios = response.data
    let chinesaDeMenorSalario = funcionarios.filter(filtraMulheres).filter(filtraChinesas).reduce(menorSalario)

    //OUTRA FORMA DE RESOLVER (QUE EU UTILIZEI PARA RESOLVER):
    // const filtraMulheres = funcionaria => funcionaria.genero == 'F'
    // const filtraChinesas = funcionaria => funcionaria.pais == 'China'
    // const funcionariosMulheresChinesas = funcionarios.filter(filtraMulheres).filter(filtraChinesas)

    // const retornaSalarios = funcionaria => funcionaria.salario
    // const salariosDeChinesas = funcionariosMulheresChinesas.map(retornaSalarios)
    
    // const menorSalrio = array => {
    //     let menorSalario = array[0]
    //     for (let i in array){
    //         if(array[i] < menorSalario){
    //             menorSalario = array[i]
    //         }
    //     }
    //     return menorSalario
    // }

    // const retornaChinesaMenosBemPaga = funcionaria => funcionaria.salario == menorSalrio(salariosDeChinesas)
    // let chinesaDeMenorSalario = funcionariosMulheresChinesas.filter(retornaChinesaMenosBemPaga)

    console.log(chinesaDeMenorSalario)
})

//para aula 7, devo obter a mulher chinesa de menor salario (feito acima)