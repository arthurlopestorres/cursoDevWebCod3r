//importando informações de outros modulos (arquivo js): para chamar outros arquivos, vamos utilizar a função 'require(caminho da pasta, que normalmente começa com './' --> nesse caso, cada ponto antes do barra faz com que a gente se afaste um nivel nas pastas de arquivos). Quando os outros modulos são meus e estão em meu sistema, preciso utilizar o 'CAMINHO RELATIVO' -> ./
const moduloA = require('./2.1_sistemaDeModulos_1')
const moduloB = require('./2.2_sistemaDeModulos_2') //importando um arquivo js, não preciso colocar a extensão '.js'

//para acessar aquivos de outros modulos, preciso referencia-los como objetos (porque são):
console.log('moduloA inteiro ->', moduloA)
console.log(moduloA.ola)
console.log(moduloA.ateLogo)
console.log(moduloA.bemVindo)

console.log('----------------------------------------------------')

console.log('moduloB inteiro ->', moduloB)
console.log(moduloB.bomDia)
console.log(moduloB.boaNoitef())