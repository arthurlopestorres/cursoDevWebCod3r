const lista = document.querySelector('div ul[destino="escritório"]')
console.log('Elemento "ul"........................')
console.log('childNodes', lista.childNodes)
console.log('id', lista.id) //funciona!
console.log('destino dot note', lista.destino) //undefined, porque o browser nao conhece 'destino' por padrao
console.log('destino getAttribute', lista.getAttribute('destino')) //funciona! Esta é uma forma customizada de buscar o atributo

//? verificar se um atributo está presente
console.log('hasAttribute', lista.hasAttribute('destino')) //true
console.log('hasAttribute', lista.hasAttribute('feira')) //false

//? posso criar um atribut ou alterar um atributo passando a função setAttribute('atributo', 'valor')
//* trocando o atributo destino (já existente):
lista.setAttribute('destino', 'empresa')
console.log(`getAttributeNode('destino'):`, lista.getAttributeNode('destino')) //destino = 'empresa'

//* inserindo o atributo status=aberto
lista.setAttribute('status', 'aberto')
console.log(`lista.getAttributeNode('status')`, lista.getAttributeNode('status')) //status = 'aberto'

//? removendo atributo
lista.removeAttribute('destino')
console.log('removemos atributo "destino":', lista)

//? atibutos com prefixo 'data-'
//* Atributos que començam com esse prefixo consegue ser acessados a partir da notação '.dataset':
console.log(lista.dataset) //DOMStringMap {urgencia: '5'}

//! CUIDADOS
//? Nem sempre um atributo disponível no HTML está acessível diretamente no JS
const label = document.querySelector('label')
console.log(label.for) //undefined
console.log(label.htmlFor) //Funciona!
console.log(label.getAttribute('for')) //Funciona igual!
console.log(label.getAttributeNode('for')) //retornar o nó do atibuto for