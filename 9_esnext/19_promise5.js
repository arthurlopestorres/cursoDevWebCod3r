//tratamento de erros dentro do contexto das promises, vamos falar sobre o reject
function funcionarOuNao(fraseDeSucesso, chanceErro){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro){
            reject('ocorreu um erro')
        }else {
            resolve(fraseDeSucesso)
        }
    })
}

funcionarOuNao('testando', 0.5)
    .then(resultado => resultado.toUpperCase()) //testando
//posso passar duas funcos para um then. a primeira vai tratar o resolve e a segunda vai retornar o reject, caso tenha um problema nesse then:
    .then(console.log, erro => { console.log(`erro: ${erro}`) }) //'TESTANDO' ou 'erro: ocorreu um erro'
    .catch(console.log) //ocorreu um erro -> o catch não é chamado quando o erro é tratado dentro do then
//depois do catch, eu nao tenho mais dados, mas mesmo assim posso usar um then
    .then(() => {
        console.log(`fim`) //fim -> este vai ser exibido independentemente do resultado de resolve ou reject
    })
