//vamos falar sobre como o node faz cache de modulos quando utilizamos require (por padrão, modulos são cacheados)
//vamos utilizar funcao factory para driblar isso.

//aqui, o node faz cache:
module.exports = {
    valor: 1,
    inc(){
        this.valor++
    }
}