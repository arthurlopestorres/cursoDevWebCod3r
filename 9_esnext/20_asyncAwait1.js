const esperandoPor = (tempo = 2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('executando promise...')
            resolve()
        }, tempo * 1000);
    })
}

//o Deno (do mesmo criador do node), suporta colocarmos o await diretamente dentro do arquivo, dessa forma:
// await esperandoPor(2)

//exemplo de async e await para executar a cada dois segundos a funcao
async function executar(){
    await esperandoPor(3)
    await esperandoPor(3)
    await esperandoPor(3)
}
executar()

//se eu criar uma funcao assincrona utiliza 'async' eu so consigo acessar o retorno se eu utilizar o await ou utilizando o '.then', por tratar-se de uma promessa, exemplo:

async function retornaValorRapido(){
    return 20
}
retornaValorRapido()
    .then (console.log) //20

async function execute(){
    console.log(retornaValorRapido()) //Promise { 20 }
    console.log(await retornaValorRapido()) //20
}
execute()