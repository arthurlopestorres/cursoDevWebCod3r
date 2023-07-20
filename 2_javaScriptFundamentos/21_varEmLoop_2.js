const funcs = []

for (var i = 0; i <= 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}
funcs[0]()
funcs[8]() //nesse caso, i vai resultar em 11 para todos os indices dentro do array, porque i está como variável e, por isso, sempre que o loop é repetido, o valor da variavel é alterado para todos os indices do array. POR ISSO PRECISAMOS UTILIZAR LET NESSE CASO.