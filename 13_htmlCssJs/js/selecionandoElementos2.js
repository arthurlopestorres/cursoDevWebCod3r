//! Nessa aula, vamos trabalhar muito querySelector e querySelectorAll
//* ambas essas funções lembram muito a forma de selecionar elementos quando utiliza-se a bilbioteca JQUERY.

//? O querySelector espera um seletor CSS, então da mesma forma que a gente selecionaria um elemento em CSS, podemos selecionar os elementos utilizando querySelector
//? diferente de outros seletores, o querSelectorAll não retorna um HTMLCollection, mas sim retorna um nodeList. O nodeList possui, por exemplo, a função forEach, mas para garantir que estamos trabalhando com uma lista em forma de array, recomenda-se utilizar o Array.from()
const destaque = (seletor, status) => {
    let elements = Array.from(document.querySelectorAll(seletor))
    status === 'true' ? elements.forEach(element => element.classList.add('destaque')) : elements.forEach(element => element.classList.remove('destaque'))
}

destaque('#primeiro', 'true')
destaque('#primeiro')

destaque('.terceiro.ultimo', 'true')
destaque('*')

destaque(':not(#primeiro)', 'true') // selecionar todos os elementos, exceto o de id #primeiro
destaque('*')

destaque(':nth-child(1)', 'true') // aqui, estou selecionando o primeiro elemento de qualquer pai
destaque('*')

destaque('div:nth-of-type(1)', 'true') // aqui, estamos selecionando o primeiro elemento do tipo 'div'
destaque('*')

destaque('[wb-attrib]', 'true') // aqui, estamos o elemento que tenha esse atributo