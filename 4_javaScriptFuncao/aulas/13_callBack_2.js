//nessa aula, vamo ver a diferença entre um codigo em que usei call back sobre uma função do JS, e sem uso do call back (tudo na mao)

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//o objetivo é gerar um novo array com todas as notas menores do que 7, a partir do array "notas"

//Sem callback
let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Com callback -- Filter é uma função callback que retoran true or false para cada elemento do array, aplicando sobre ele a função que for definida na sintaxe de Filter. Nesse caso, se for verdadeiro, o elemento entra no array notasBaixas, e se for false, não faz nada. O array inicia notas não é alterado pela função Filter.
let notasBaixas2 = []
notasBaixas2 = notas.filter((nota) => {
    return nota < 7
})
console.log(notasBaixas2)


//posso fazer com arrow function e fazer o filter já declarando o array:
let notasAltas = notas.filter((nota) => nota > 7)
console.log(notasAltas)

//posso tambem guardar a função arrow de nota > 7 em outro lugar do sistema, para facilitar o reuso:
const verificaSeNotaMaiorQue7 = nota => nota > 7
let notasMuitoAltas = notas.filter(verificaSeNotaMaiorQue7)
console.log(notasMuitoAltas)