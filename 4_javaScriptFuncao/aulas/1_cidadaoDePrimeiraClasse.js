//Função em JS é First-Class Object (Citizen)
//Higher-order function
//isso tudo significa que uma função pode receber parametros, retornar parametros ou ser o proprio parametro.

// * todas as funções, caso não retornem um valor, retornam undefined por padrão.

// Criando um função de forma literal: //trabalhando com esta forma literal de função, a declaração e uso do bloco {} é obrigatoria.
function fun1() {}
//invocando essa função:
fun1()



// Armazenando uma função em um identificador:
const fun2 = function() {} //quando crio uma função para ser passada como valor para um identificador, ela precisa ser anônima (sem um nome vinculado a ela diretamente.)
//invocando essa função:
fun2()



// Armazenando uma funação em um array //vemos aqui que outras funções, apesar de não declaradas no array, podem ser armazenadas do array.
const array = [function(a, b){return a + b}, fun1, fun2] 
//para exevutar essa função, passamos o nomeDoArray[indice](parametros):
console.log( array[0](1, 2) )



// Armazenando função em um atributo de objeto:
const obj = {
    falar: function(){ return 'opa'}
}
console.log( obj.falar() )



// Como passar função como parâmetro para outra função
function run(fun){ 
    fun() //aqui, o fun() refere-se ao paramentro que a função run() espera receber
}
//para executar, chamamos a função principal, e passamos como parametro uma função anonima que será executada a partir de fun()
run(function(){ console.log('executando...') }) //seria o mesmo que run(function fun() { console.log('executando...') })



// Uma função pode retornar ou conter uma outra função
function soma(a, b){
    return function(c) {
        console.log(a + b + c)
    }
}
//para invocar esta função precisamos compreender que soma(a, b) está retornando uma outra função, então precisamos executar a função de dentro com mais um parênteses:
soma(2, 3)(4)
//uma outra forma de fazer, é armazena o resultado da primeira função numa variável e depois invocar a função interna a partir da variavel:
const resultadoSoma = soma(2, 3)
resultadoSoma(4)



//houve dois grandes motivos para se criar arrow function:
//1- diminuição da sintaxe (coisas escritas mesmo), exemplo:
const funcao3 = () => console.log(this === window)
funcao3() //executa-se dessa forma, como uma função normal.
//2- na arrow function, o this não varia.
bodyDaPagina.onclick = funcao3 //o retorno aqui é true, porque this, na arrow function está atrelado ao contexto léxico onde a função está inserida função, que é o global.