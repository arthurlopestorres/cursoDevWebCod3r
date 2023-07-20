const funcs = []

for (let i = 0; i <= 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}
funcs[0]()
funcs[8]() //POR ISSO PRECISAMOS UTILIZAR LET NESSE CASO. -- o resultado ficou correto, diferente aula 21 (varEmLoop_2)