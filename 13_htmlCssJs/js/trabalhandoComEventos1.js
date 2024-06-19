//Um dos padrões de projeto mais utilizados na WEB é o padrão Observer. Há outros padrões de projeto no mercado que podem ser estudados em livros, por exemplo, mas o padrão observer é o mais utilizado na WEB.
//O padrão observer está fortemente presente no JS, de forma que, o JS aguarda que determinada ação assíncrona aconteça e, quando ela acontece, há um observer que desencadeia ações condicionadas por aquele evento que aconteceu.

//! primeiro, vamos interceptar um evento de click, de forma que, quando houver um click sobre um elemento, algo acontecer.
function navegarEm5s(e){
    e.preventDefault() //prevenimos aqui que o evento padrão que seria gerado pelo clique aconteça.
    console.log('saindo em 5s')
    setTimeout(() => {
        window.location.href = e.target.href //dentro do evento (e), temos uma propriedade chamada "target", que é o elemento HTML que disparou o evento. Estamos pegando o href do elemento 'a' que disparou o evento.
    }, 5000)
}

//? este é um método de capturar o click no elemento:
// const link = document.querySelector('a')
// link.addEventListener('click', e => {
//     navegarEm5s(e)
// })

//? Outra forma de capturar o click no evento pode ser verificado no HTML deste exercício.

//? uma outra forma ainda seria:
// const link = document.querySelector('a')
// link.onclick = navegarEm5s