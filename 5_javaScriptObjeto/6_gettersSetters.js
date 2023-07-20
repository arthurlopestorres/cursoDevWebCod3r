//get e set são tipos de funções que capturam ou atribuem valores

const sequencia = {
    _valor: 1, //quando uso _ na declaração de um atributo de objeto, estou dizendo, por convenção e não por regra da linguagem, que essa variavel somente deveria ser acessada no contexto deste objeto
    get valor(){ return this._valor }, //estou pegando o _valor apenas (get) e trablhando no dado
    set valor(valor){ 
        if(valor > this._valor){
            this._valor = valor 
        }
    } //estou recebendo um valor na função setando ele para _valor.
}

//para acessar o método get acima, faço assim:
console.log(sequencia.valor)
//depois que chamei, sabemos que ele retornou _valor++ então o valor deve estar incrementado aqui:
console.log(sequencia.valor)

//para ativar o set, preciso estar tentando setar um novo valor para "_valor":
sequencia.valor = 1000
console.log(sequencia.valor) //nesse caso ele vai retornar 1000 para _valor e vai fazer _valor++, pois é o return do método get.
sequencia.valor = 900 //aqui não vai funcionar, porque 900 < 1000 e exite um if no set que não permite isso.