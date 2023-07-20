//tagged template é utilizada para a gente processar uma template string dentro de uma função
const tag = (partes, ...valores) => {
    console.log('partes:', partes)
    console.log('valores:', valores)
    return 'outra string'
}
const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)
//[ '', ' está ', '' ] -------> vem de partes
//[ 'Gui', 'Aprovado' ] -------> vem de ...valores
//outra string -------> vem da função 'tag'

