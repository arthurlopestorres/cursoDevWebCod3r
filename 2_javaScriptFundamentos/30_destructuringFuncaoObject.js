//na parte de parametros recebidos da função, já estamos utilizando desestruturação, para passar indentificador e valor, afim de utilizar essas informações num objeto que existirá dentro da função:
function random({ min = 0, max = 1000 }){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(random({max: 50, min: 20}))
//esse console.log é o mesmo que eu criar um objeto para ser passado como dado na função:
const objeto = { max: 40, min: 10 }
console.log(random(objeto))