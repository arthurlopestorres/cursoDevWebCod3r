const lista = document.querySelector('#compras')

//? vamos verificar valores, sem poder alterá-los:
console.log(lista.attributes) // traz todos os atributos
console.log(lista.attributes[1]) //destino=escritorio
console.log(lista.attributes.destino) //destino=escritorio
console.log(lista.attributes['data-urgencia']) //data-urgencia=5
//* console.log(lista.attributes.data-urgencia) // dá erro!

//! exemplo que nao funciona alterar
lista.attributes.destino = 'casa' //não fez a alteração no HTML
console.log(lista.attributes.destino)//escritorio