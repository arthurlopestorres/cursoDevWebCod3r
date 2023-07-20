//cadeia de prototipos (prototype chain)

Object.prototype.atributo0 = 'Z' //não faça isso em casa.

const avo = { //o prototipo de avo é Object.prototype, porque não foi atribuido um __proto__ para ele.
    atributo1: 'A'
}
const pai = {
    __proto__: avo, //estou definindo 'avo' como o pai de 'pai'
    atributo2: 'B',
    atributo3: 'L'
}
const filho = {
    __proto__: pai, //estou definindo 'pai' como pai de 'filho'
    atributo3: 'C'
}
console.log(filho.atributo0) //filho não tem atributo0, mas o object.prototype, que é o pai do avo dele tem, entao o codigo vai olhando para os antecessores para ver se têm e retorna.
console.log(filho.atributo1) //filho não tem atributo1, mas o avo dele tem, entao o codigo vai olhando para os antecessores para ver se têm e retorna.
console.log(filho.atributo2) //filho não tem atributo2, mas o pai dele tem, entao o codigo vai olhando para os antecessores para ver se têm e retorna.
console.log(filho.atributo3) //filho tem o atributo3, então o atributo3 do pai será ignorado, porque o sistema encontrou esse atributo mais proximo no objeto indicado.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const carro = {
    modelo: 'veículo qualquer',
    velAtual: 0,
    velMax: 200,
    aceleraCarro(acelerador){
        if(this.velAtual + acelerador <= this.velMax ){
            this.velAtual += acelerador
        } else {
            this.velAtual = this.velMax
        }
    },
    verificaVelocidadeAtual(){
        return `${this.modelo}: a velocidade atual é ${this.velAtual}Km/h e a velocidade máxima é ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 320
}

const volvo = {
    modelo: 'v40',
    verificaVelocidadeAtual(){
        return `o modelo do carro é ${super.verificaVelocidadeAtual()}` //nesse caso, o 'super.' faz com que seja verificado o retorno a partir dos pais dele e não a partir da função dentro do proprotio objeto, que retornaria ele mesmo. -> nesse caso, 'super.' vai referir-se a quem eu definir como prototype para volvo.
    }
}

//posso atribuir outro objeto como pai para um objeto especifico utilizando Object.setPrototypeOf(nomeDoFilho, NomeDoPai):
Object.setPrototypeOf(ferrari, carro)
ferrari.aceleraCarro(380)
console.log(ferrari.verificaVelocidadeAtual())

Object.setPrototypeOf(volvo, carro)
volvo.aceleraCarro(230)
console.log(volvo.verificaVelocidadeAtual())