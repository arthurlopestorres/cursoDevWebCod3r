//o JS tem tres palavras reservadas para tratamento de erros: Try, Catch e Throw
//Esta aula é focada em como tratar erros em potencial.

//utilizando o try e catch, temos a seguinte logica para tratamento de erros:

function tratarErroELancar(erro){
    // throw new Error('Sistema indisponivel. Por gentileza, tente novamente mais tarde.')
    //se eu quiser, posso jogar de volta qualquer valor, desde que esteja com throw antes:
    throw 'Deu ruim!!'
}//funcao responsavel por jogar a mensagem de erro.

function imprimirNomeGritado(obj){
    try{ //aqui é feita a tentativa direto na frase abaixo
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch(e){ //o catch vai prever o que deve ser feito, caso o try falhe, ou seja, deu erro!
        tratarErroELancar(e)
    } finally{ //finally é executado mesmo que um erro aconteça.
        console.log('final')
    }
    
}
const obj = { name: 'Arthur' }
imprimirNomeGritado(obj)