//no node, o objeto global é chamado 'global' // no navegador chamar-se 'window'
// console.log(global) //-> precisamos ter muito cuidado ao mexer no objeto global, uma alteração aqui pode ser desastrosa

//exemplo de inserção de elementos no objeto global
global.MinhaApp = Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares!'
    },
    nome: 'sistema legal'
}) 