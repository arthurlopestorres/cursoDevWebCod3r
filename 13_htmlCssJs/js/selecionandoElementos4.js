//! vamos verificar mais algumas formas de selecionar pais e filhos, sem utilização de classe específica necessariamente.

//* vamos primeiro criar uma função para facilitar o console.log
function log(){
    console.log(this)
}

//? vamos inserir o método log no prototype dos elementos que estaremos selecionando nesta aula 
HTMLCollection.prototype.log = log
HTMLElement.prototype.log = log
NodeList.prototype.log = log
Node.prototype.log = log

//? selecionando o pai de um elemento
const lista = document.querySelector('div ul') //elemento selecionado: UL que está dentro de uma div
lista.parentNode.log() //elemento selecionado: pai da ul que havia sido selecionada (parentNode)
lista.childNodes.log() //quando uso o parametro childNodes, ele tem o efeito colateral de trazer elementos do tipo texto dentro do array (o que pode atrapalhar bastante). Para solucionar isso, precisaríamos removar o espaçamento de linhas inserido no arquivo html, deixando tudo na mesma linha, assim: <ul><li>Pedro</li><li>Ana</li><li>Bia</li></ul>

//? selecionando o primeiro elemento da lista:
const primeiro = lista.firstChild //parametro fisrtChild
primeiro.log() //o elemento retornado será "text"

//? selecionadno o próximo elemento em relação a um elemento indicado:
primeiro.nextSibling.log() //retorna, de fato, a primeira li

//? selecionando ultimo elemento:
const ultimo = lista.lastChild
ultimo.log()

//? para selecionan o elemento imediatamente anterior (irmão)
ultimo.previousSibling.log()


//! Selecionando apenas elementos html (sem retornar texto)
//? selecionando os filhas da lista de forma que os textos não venham, apenas os lis:
lista.children.log()

//? para selecionar o primeiro elemento filho que não seja texto e sim elemento:
lista.firstElementChild.log()

//? para selecionar o ultimo elemento filho que não seja texto e sim elemento:
lista.lastElementChild.log()

//? selecionando o elemento irmão anterior, nesse caso, estou pegando o tio anterior.
lista.parentNode.previousElementSibling.log()

//? selecionando o elemento irmão posterior, nesse caso, estou pegando o tio posterior.
lista.parentNode.nextElementSibling.log()

//! Todos os paramentros estudados nessa aula:
//* parentNode
//* childNodes
//* firstChild
//* lastChild
//* nextSibling
//* previousSibling
// Sem text no retorno:
//? children
//? firstElementChild
//? lastElementChild
//? nextElementSibling
//? previousElementSibling