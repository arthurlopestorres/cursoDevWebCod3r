//mostrando como passar um parametro para um modulo.
module.exports = function(...nomes){
    return nomes.map(nome => `Boa semana, ${nome}!`)
}