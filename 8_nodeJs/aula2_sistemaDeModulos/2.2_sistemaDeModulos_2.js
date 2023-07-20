//Outra maneira seria atribuindo um objeto a module.exports com notação literal:
module.exports = {
    bomDia: 'Bom dia!',
    boaNoite: 'Boa noite!',
    boaNoitef(){
        return this.boaNoite
    }
}
//é preciso utilizar o module.exports para poder exportar um objeto dessa forma. A utilização do 'exports' apenas é valida somente quando estou utilizando notação. Para adicionar elementos ao objeto 'module.exports'.

//Neste ponto da aula, criamos o próximo arquivo: 2.3_sistemaDeModulos_cliente.js para importar as informações deste arquivo.