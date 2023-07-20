//outro exemplo de callback hell:

// setTimeout(() => {
//     console.log ('executando callback...')

//     setTimeout(() => {
//         console.log ('executando callback...')

//         setTimeout(() => {
//             console.log ('executando callback...')
//         }, 2000)
//     }, 2000)
// }, 2000)

//criando uma funcao com promise para nao precisar fazer um callback hell
const esperandoPor = (tempo = 2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('executando promise...')
            resolve()
        }, tempo * 1000);
    })
}
//isso faz o mesmo que o bolo de setTimesOut acima
esperandoPor()
    .then(esperandoPor)
    .then(esperandoPor)