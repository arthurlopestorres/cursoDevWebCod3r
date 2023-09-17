//exemplo de callback no browser
const body = document.getElementsByTagName('body')[0].onclick = function(e){ //"e", nessa função, recebe dados do evento de click, que poderiamos trabalhar com eles mais para frente, se necessário, como capturar local do click e assim por diante.
    console.log('O evento ocorreu!')
}