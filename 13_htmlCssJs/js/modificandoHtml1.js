//* primeiro, vamos selecionar o body:
const body = document.querySelector('.conteudo.exercicio')

const div = document.createElement('div')
div.classList.add('destaque')
div.innerHTML = 'primeiro'

const div2 = document.createElement('div')
div2.setAttribute('wm-atributo', 'valor')
div2.innerHTML = 'segundo'

const p = document.createElement('p')
p.innerHTML = 'terceiro'
const div3 = document.createElement('div')
div3.appendChild(p) //*adciona o elemento por ultimo dentro do pai (se tivessem outros elementos, esse seria adicionado por ultimo)

//? inserindo os elementos criados no body pelo método appendChild(elemento) -> para adicionar por ultimo
body.appendChild(div)
body.appendChild(div2)
body.appendChild(div3)

//? existe um metodo chamado insertBefore(elemento, onde) -> para inserir elementos no body, então vamos ver ume exemplo:
const texto = document.createTextNode('Antes..')
div3.insertBefore(texto, div3.childNodes[0])

//! podemos criar um clone de outro elemento via JS:
const div4 = div3.cloneNode(true) //* div4 = div3 -> true or false nesse é sobre copiar filhos ou não. como está true, ele está copiando os elementos filhos.
body.appendChild(div4)

//! podemos excluir um elemento do body sem problemas:
body.removeChild(div3)