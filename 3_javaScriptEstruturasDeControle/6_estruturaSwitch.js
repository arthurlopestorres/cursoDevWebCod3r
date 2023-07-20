const imprimirResultado = function(nota){
    switch (Math.floor(nota)){ //o switch nao trabalha com verdadeiro ou falso, ele trabalha com valores inteiro e com strings.
        case 10: 
        case 9:
            console.log('Quandro de honra') // nesse caso, o console.log está sendo declarado apenas uma vez, pq o JS ja entende que ele se refere a case 10 e case 9, ja que nao tem nenhuma sentença sendo passada para case 10.
            break //o break, nesse caso, é necessario para que o js saia da execução do switch ao satisfazer o case. Caso contrario, o JS continua executando todos os demais cases, idependentemente de qualquer fator.
        case 8: case 7: //posso colocar dois cases na mesma linha sem problemas
            console.log('aprovado')
            break
        default: //o default no switch é a mesma coisa que o "else" visto em if else.
        console.log('nota invalida')
    }
    console.log('fim')
}
imprimirResultado(8.9)