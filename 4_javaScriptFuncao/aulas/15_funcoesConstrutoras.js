//Posso usar função no JS da mesma forma que classes em Java.

function Carro(velocidadeMaxima = 200, delta = 5){
    //posso ter um atributo privado(que pertence somente ao escopo dessa função)
    let velocidadeAtual = 0

    //metodos publicos -> o this é o que torna esse método publico, ou seja, essa função pode ser acessada a partir de carro em outro contexto.
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 100)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())