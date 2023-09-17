//this, numa funcao arrow, esta atrelado ao contexto em que a função foi criada, e não ao contexto onde ela é invocada.
function Pessoa(){
    this.idade = 0

    setInterval(() => {  
        this.idade++
        console.log(this.idade)
    }, 1000) //a arrow function aqui dentro de setInterval foi escrita no contexto lexico da função Pessoa. Assim, this está sempre relacionado a Pessoa.
}
new Pessoa