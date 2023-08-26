//! vamos acessar, nesse serie, os atributos dos elementos e não apenas os elementos como fizemos nas aulas anteriores.

//! Atributos explícitos na TAG:
console.log('Elemento img propriedade explícitas....................')
const img = document.querySelector('img')
console.log(img)
//?posso acessar atributos de uma tag a partir do paramentro "getAttribute" (acostumar-se com este método é o ideal, porque te dá mais flexibilidade de código. Dá para passar o atributo dinamicamente, por exemplo)
console.log(`img.getAttribute('src') ->`, img.getAttribute('src'))

//? posso acessar o src da imagem a partir da notação ponto:
console.log(`img.src ->`, img.src)

//? posso usar notação de []
console.log(`img['src'] ->`, img['src'])

//! Atributos implícitos na TAG:
console.log('Elemento img propriedade implícitas....................')
console.log('NodeType ->', img.nodeType) // 1, que significa elemento. Enquanto nodetype 2 é atributo (acessar w3 schools buscando por 'html nodetype')

console.log('NodeName ->', img.nodeName) //IMG

const src = img.getAttributeNode('src')
console.log(`img.getAttributeNode('src') ->`, src) //ele retorna o nó do atributo: src='...'
console.log(`img.getAttributeNode('src').nodeType ->`, src.nodeType)
console.log(`img.getAttributeNode('src').nodeName ->`, src.nodeName)
console.log(`img.getAttributeNode('src').nodeValue ->`, src.nodeValue)


console.log('Elemento a............................')
const link = document.querySelector('a')
console.log(link)
console.log(`link.textContent ->`, link.textContent)

console.log(`link.href ->`, link.href)

console.log(`link.firstChild.nodeType ->`, link.firstChild.nodeType) //3 -> texto (Cod3r)

console.log('alterando o link.firstChild.nodeValue...')
link.firstChild.nodeValue = 'Novo Texto'
console.log(`link.firstChild.nodeValue ->`, link.firstChild.nodeValue)