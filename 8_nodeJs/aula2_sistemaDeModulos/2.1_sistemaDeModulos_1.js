// Dentro do node, cada arquivo representa um modulo diferente. As aplicações normalmente são divididas em arquivos diferentes (cada um com sua responsabilidade), depois esses arquivos são compactados em um unico arquivo (que normalmente é minificado) para ser enviado ao browser.

// No caso do Node.JS, normalmente as informações são compartilhadas com o front-end via JSON. Veremos mais a frente neste capítulo mais detalhes a respeito.
// EM Node, UM ARQUIVO REPRESENTA UM MODULO (Tudo o que se escreve dentro de um modulo fica visivel apenas dentro do modulo.) (cada arquivo de JS que já criamos no curso até agora representa um módulo por si. e podemos executa-lo no terminal sem problemas)
// Sabendo que um arquivo no Node(modulo) tem seus códigos visíveis apenas dentro dele, para que eu possa acessar este código por outro meio, preciso exportar essas informações (posso importar de outros arquivos também).

//vamos ver agora como exportar informações de um arquivo (módulo do node) para que possa ser utilizado em outros arquivos:

//PRIMERIA FORMA SERIA UTILIZANDO O OBJETO 'THIS':
this.ola = 'Fala Pessoal'

//'SEGUNDA FORMA SERIA UTILILIZANDO O OBJETO 'EXPORTS':
exports.bemVindo = 'Bem Vindo ao Node!!'

//TERCEIRA FORMA (MAIS CLÁSSICA) SERIA UTILIZANDO O OBJETO 'MODULE.EXPORTS':
module.exports.ateLogo = 'Ate o próximo exemplo!'

//Neste ponto da aula, criamos o próximo arquivo: 2.2_sistemaDeModulos_2.js para exportar a partir de module.exports com notação literal