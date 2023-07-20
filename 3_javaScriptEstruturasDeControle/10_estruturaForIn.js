const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
//o for in nao me devolverá o valor do elemento mapeado e sim o caminho para ele. No caso do array, por ser uma extrutura indexada, me devolverá o index do valor encontrado.
for(let index in notas){
    console.log(index, notas[index])
}

const pessoa = {
    nome: 'Arthur',
    Sobrenome: 'Silva',
    idade: 24,
    peso: 64
}
console.log(pessoa.nome)

for (let atributo in pessoa){
    console.log(atributo, pessoa[atributo]) //repare que a sintaxe de referencia a um atributo de OBJETO é a mesma de um array no caso do for in!!!
}