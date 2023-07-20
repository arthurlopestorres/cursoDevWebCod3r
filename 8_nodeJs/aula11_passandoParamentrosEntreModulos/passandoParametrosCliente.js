const saudacoes = require('./passandoParamentros')('Arthur', 'Izabelle')
//há duas formas de passar parametros para 'saudacoes'. O metodo clássico que seria passar os paramentros para saudações:
// console.log(saudacoes('Arthur', 'Izabelle'))

//e também o método exibido na linha 1
console.log(saudacoes) //[ 'Boa semana, Arthur!', 'Boa semana, Izabelle!' ]