//vamos começar verificar formas diferentes de percorrer um array
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//na função que é passada para o forEach, posso passar três elementos: o primeiro é o proprio elemento dentro do array, o segundo é o index desse elemento, o terceiro seria o próprio array
//sintaxe: array.forEach(function([elemento], [index do elemento], [array completo]){/...})

aprovados.forEach((element, index, self) => {
    console.log(`${index + 1}: ${element}`)
})

//! NÃO SOU OBRIGADO A PASSAR TODOS OS PARAMETROS MOSTRADOS ACIMA, COM UM RESULTADO UM POUCO DIFERENTE, É CLARO
aprovados.forEach(element => console.log(element))