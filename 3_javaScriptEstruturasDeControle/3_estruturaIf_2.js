function teste1(num){
    if(num > 7)
    console.log(num) //nesse caso, apenas essa sentença fica atralada ao if. Quando nao utilizamos chaves, apenas a primeira sentença após o if fica atralada a ele.
console.log('final')
}
teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{ //o ponto e virgula, nesse caso, serapa a senteça, de forma que, o if está em uma sentença de código e o bloco com console.log, está em outra sentença. Nao devemos usar ; com as estruturas de controle.
        console.log(num)
    }
}
teste2(6)
teste2(8)