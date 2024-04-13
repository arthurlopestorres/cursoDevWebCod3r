// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a seguir:
let objetoInicial = {a: 1, b: 2, c: 3}

//* inverter sequencia do Objeto
function invetObject(object){
    let initialObjectEntries = Object.entries(object)
    let invertedObjectEntries =  []
    let finalObject = new Object

    initialObjectEntries.forEach(entry => invertedObjectEntries.unshift(entry))
    invertedObjectEntries.forEach(entry => finalObject[entry[0]] = entry[1])

    console.log(finalObject)
    return finalObject
}

invetObject(objetoInicial)

//* inverter chave: valor -> valor: chave
function invertObj(obj) {
    let keys = Object.keys(obj)    
    let values = Object.values(obj)
    let newObj = {}

    for(let i in values){
        newObj[values[i]] = keys[i]
    }

    console.log(newObj)
    return newObj
}
invertObj(objetoInicial)