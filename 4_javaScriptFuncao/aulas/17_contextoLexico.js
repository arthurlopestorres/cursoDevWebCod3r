const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()// retorna Global, porque ela sabe que foi declarada no contexto global.
}
exec()