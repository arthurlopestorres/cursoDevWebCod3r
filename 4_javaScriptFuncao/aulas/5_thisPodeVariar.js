//CONTEUDO EXTRA NA AULA: para que eu possa me referir a um elemento html (capturando-o para o JS), utilizo a experssão: documente.getElementsByTagName, por exemplo:

document.getElementsByTagName('body')[0].onclick = function(){}
//nesse caso, quando me refiro a pegar elemento pelo tag name "body", estou dizendo que estou me referindo a todo o body da página. Por esta expressão sempre retornar um array, preciso indicar que estou referindo-me ao index 0, e o '.onclick', significa que algo acontecerá quando houver um click no body. Nesse caso, é a execução da função anônima sendo passada logo em seguida. Posso, entretando, dividir as informações um pouco mais dessa forma:
const bodyDaPagina = document.getElementsByTagName('body')[0]
const funcaoQueFazLog = function(){
    console.log('foi clicado no body', 'this refere-se a window? =', this === window )
    bodyDaPagina.style = 'background-color: blue!important' //aqui, estou mudando a cor de fundo do body
}

bodyDaPagina.onclick = funcaoQueFazLog //nesse caso, a gente nao chama () para invocar a função, porque quem fará isso é o .onclick no body da página.

//----------------------//----------------------//----------------------//----------------------//----------------------//----------------------

//this, seria uma forma de referir-se ao objeto atual atrelado a uma função
//em JS, o this pode variar a depender de como uma função é chamada

//no browser, por exemplo, caso eu esteja no contexto global, this === window (que é o objeto global no browser)
//caso o this seja chamado ao clicarmos na pagina, como no exemplo acima (console.log), this já não será equivalente a window.
//quando clicamos na página, por exemplo, pode-se dizer que o this === ao elemento em se está clicando, exemplo:
const bodyDaPagina = document.getElementsByTagName('body')[0]
const funcaoQueFazLog2 = function(){
    console.log(this === bodyDaPagina ) 
}
bodyDaPagina.onclick = funcaoQueFazLog2 // o retorno é true para this === bodyDaPagina

//----------------------//----------------------//----------------------//----------------------//----------------------//----------------------
//houve dois grandes motivos para se criar arrow function:
//1- diminuição da sintaxe (coisas escritas mesmo), exemplo:
const funcao3 = () => console.log(this === window)
funcao3() //executa-se dessa forma, como uma função normal.

//2- na arrow function, o this não varia.
bodyDaPagina.onclick = funcao3 //o retorno aqui é true, porque this, na arrow function está atrelado ao contexto léxico onde a função está inserida função, que é o global.

//----------------------//----------------------//----------------------//----------------------//----------------------//----------------------
//quado temos uma função tradicional no JS, o this vai sempre referir-se a quem chama a função, assim, se a função é chamada pelo contexto global (com invocação padrão), this === window. Já, ainda quanto à função tradicional, ela é invocada a partir de um elemento HTML, por exemplo, então this === elementoHTML

//quanto usamos uma função arrow, o this não varia nunca, ou seja, ele estará sendo definido na criação da função (ele sempre vai referir-se ao objeto onde a função está sendo criada, e não a partir do qual ela está sendo invocada.)