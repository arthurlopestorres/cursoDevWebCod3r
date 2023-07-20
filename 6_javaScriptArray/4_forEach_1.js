//vamos começar verificar formas diferentes de percorrer um array
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//na função que é passada para o forEach, posso passar três elementos: o primeiro é o proprio elemento dentro do array, o segundo é o index desse elemento, o terceiro seria o próprio array
//sintaxe: array.forEach(function([elemento], [index do elemento], [array completo]){/...})

aprovados.forEach(function(nome, indexDoNome){
    console.log(`${indexDoNome + 1}: ${nome}`)
})

//NÃO SOU OBRIGADO A PASSAR PARAMETROS
aprovados.forEach(nome => console.log(nome))