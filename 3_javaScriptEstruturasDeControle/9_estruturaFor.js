let contador = 1
while(contador <= 10){
    console.log(contador)
    contador++ 
}

//  identificador; condição para loop; encremento
for(contador = 0; contador <= 10; contador++){
    console.log(contador)
}

//ambos acima fazem a mesma coisa, só que um - o while - é mais verboso do que o outro.

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let index = 0; index < notas.length; index++){
    console.log(notas[index])
}