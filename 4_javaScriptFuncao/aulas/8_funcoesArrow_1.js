//é uma boa ideia eu ter funções que fazem muito pouca coisa. Cada função fazendo uma coisa é a melhor ideia.
//uma das grandes vantagens da arrow function é a sintaxe menor e também o vinculo que ela cria do this com contexto léxico em que a função foi criada (declarada)
let dobro = function(a){
    return 2 * a
}

//reescrevendo acima como uma função arrow:
dobro = (a) => { return 2 * a }
//sempre que chamo uma função arrow, eu preciso armazena-la em uma variavel ou constante.

//quando temos apenas 1 parametro a ser recebido pela função, podemos torna-la ainda menor em sintaxe, com 'return' implicito:
dobro = a => 2 * a
console.log(dobro(Math.floor(Math.PI))) //6.28 -> Math.floor faz ficar: 6

//função padrão:
let ola = function () {
    return 'olá'
}
//uma forma de escrever arrow function sem os parenteses seria:
ola = () => 'Olá'

//essa sintaxe é ainda menor, porém '_' é um parâmentro, mas que pode ser ignorado nesse caso.
ola = _ => 'Olá'
console.log(ola())