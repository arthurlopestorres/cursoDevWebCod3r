// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a seguir:
let objetoInicial = {a: 1, b: 2, c: 3}
console.log(objetoInicial)

function invertObj(obj) {
    let keys = Object.keys(obj)    
    let values = Object.values(obj)
    let newObj = {}

    for(let i in values){
        newObj[values[i]] = keys[i]
    }

    console.log(newObj)
}
invertObj(objetoInicial)