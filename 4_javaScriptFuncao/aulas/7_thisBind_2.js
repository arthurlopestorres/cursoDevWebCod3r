function Pessoa(){
    this.idade = 0

    //a função set interval dispara uma outra função após um tempo passado para setInterval em milissegundos (em loop, ou seja, essa função vai ficar sendo disparada infinitamente a cada x milissegundos que forem indicados a ela.)
    function aumentaAidade() {
        this.idade++
        console.log(`Pessoa 1 = ${this.idade}`)
    }
    setInterval(aumentaAidade, 1000)
}
new Pessoa //nesse caso, this.idade irá retornar NaN, que quem está acionando esta função é o temporizador que setInterval acima, e não a função Pessoa, que é um objeto também nesse caso.

function Pessoa2(){
    this.idade = 0
    
    function aumentaAidade() {
        this.idade++
        console.log(`Pessoa 1 = ${this.idade}`)
    }
    setInterval(aumentaAidade.bind(this), 1000)
}
new Pessoa2 //nesse caso, retornará a contagem corretamente, pois foi adicionado .bind(this) em setInterval, que está no contexto de Pesso2, então this vai apontar para o objeto pessoa, que por sua vez, possui 'idade' como um indicador.

//uma outra forma de solucionar o problema visto em pessoa 1, seria armazenar a referencia ao objeto pessoa dentro de um indicador, dentro de pessoa mesmo. Exemplo:
function Pessoa3(){
    const apontadorParaPessoa3 = this //this, aqui, é Pessoa3. Normalmente, chama-se esse identificador de "self", ficando assim: const self = this
    apontadorParaPessoa3.idade = 0 //self.idade = 0 -> essa referencia vem de outras linguagens de programação que utilizam "self" ao inves de "this" para fazer referencia ao objeto ou instancia em que se encontra.
    
    setInterval(function(){
        apontadorParaPessoa3.idade++
        console.log(`Pessoa 3 = ${apontadorParaPessoa3.idade}`)
    }, 1000)
}
new Pessoa3