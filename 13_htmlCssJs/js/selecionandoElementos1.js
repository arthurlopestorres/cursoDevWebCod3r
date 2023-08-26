//! Nessa série de exercicios (selencionando elementos), vamos verificar formas diferentes de selencionar elementos no DOM.

//? Vamos trabalhar agora com algumas funções clássicas:

//? 1 - Pegando elemento por id -> getElementByID('id')
//* além de pegar o elemento, vamos adicionar uma classe nele utilizando o parametro classList.add('classe')
document.getElementById('primeiro').classList.add('destaque')
/////////////////////////////////////////////////////////////

//? 2- Pegando elementos por tag -> getElementsByTagName('tag')

const divs = document.getElementsByTagName('div')

//* posso retornar o que está dentro de 'divs' utilizando o camando dir(divs) no console.
//* podemos perceber que, por padrão, a lista é um HTMLCollection. Com esse tipo de lista, há comandos de JS que não funcionarão adequadamente, por isso, é importante utilizarmos a função Array.from(lista)
//* Isso faz com que a lista se torne um array como conhecemos, podendo ser utilizadas todas as funções compatíveis com um array também.

Array.from(divs).forEach(element => element.classList.remove('destaque')) //removemos aqui destaque das classes de todos os elementos que são divs

//* Outra forma de transformar um HTMLCollection num array seria utilizando o operador spread
const arrayDeDivs = [...divs]
arrayDeDivs.forEach(element => element.classList.add('destaque'))
/////////////////////////////////////////////////////////////

//? 3- selecionando elementos a partir da classe -> document.getElementsByClassName('classe')
const ultimosElementos = document.getElementsByClassName('ultimo') //se houver apenas 1 elemento, será retornada uma lista com apenas 1 elemento.

//* O HTMLCollection recebe comandos de iterators sem problemas, por isso conseguimos utilizar a função for:
for(let elemento of ultimosElementos){
    elemento.classList.remove('destaque')
}