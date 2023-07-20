//utilizando o comando process, nos conseguimos verificar dados da entrada padrão e da saída padrão do PC. A entrada padrão seria o teclado e a saída padrão seria a tela.

//primeiro, vamos acionar o processo a partir do parametro -a no terminal:
const anonimo = process.argv.indexOf('-a') !== -1

//vamos trabalhar com o dado recebido em anonimo, dando feedback no 'stdout'(monitor) e no 'stdin'(teclado):
if(anonimo){
    process.stdout.write('Fala Anônimo!\n') // \n aqui significar 'enter' no teclado.
    process.exit() //encerra o processo, o user seja anonimo.
}else{
    process.stdout.write('infome seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '') //o replace aqui foi necessario, por que o evento de on data também captura o enter do teclado, que não queremos que esteja presente no nome.

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}

//depois, basta rodar este arquivo no terminal.