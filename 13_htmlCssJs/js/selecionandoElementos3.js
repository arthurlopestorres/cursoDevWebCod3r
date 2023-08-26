//? uma das formas de selecionar formulários no JS é utilizando a propriedade forms do document:
console.log(document.forms) // retorna um HTMLCollection com todos os formulários encontrados
console.log(document.forms[0]) // aqui, selecionamos o primeiro encontrado

//? vamos utilizar o campo de name do formulário para obter tanto ele, quanto todos os elementos que fazem parte do formulario em questão
console.log(document.getElementsByName('pesquisa')) // retorna um nodeList, nesse caso
console.log(document.pesquisa) // se eu fizer isso, ele já vai procurar automaticamente o elemento cujo nome é 'pesquisa'
console.log(document.pesquisa.q) // ele vai me retornar o elemento de name 'q' dentro do elemento de name 'pesquisa'

//? vamos alterar o valor de elementos do form:
document.pesquisa.q.value = 'São Paulo' //mudamos o value do input de texto
document.pesquisa.hl.value = 'en-us' // mudamos o value do select, porém ele só refletirá corretamente no layout, caso exista uma option equivalente.

// podemos verificar qual o index selecionado num formulario:
console.log(document.pesquisa.hl.selectedIndex) // ele retorna qual o index do elemento selecionado no select do HTML