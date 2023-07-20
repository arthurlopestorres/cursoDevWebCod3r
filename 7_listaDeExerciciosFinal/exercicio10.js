// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.
const aumentaMais = (repeticao) => {
    let texto = ''
    for(i = 0; i < repeticao; i++){
        texto += '+'
    }
    console.log(texto)
}
aumentaMais(3)