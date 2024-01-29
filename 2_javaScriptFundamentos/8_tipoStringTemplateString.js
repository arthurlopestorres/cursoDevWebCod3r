const nome = 'Arthur'
const concatenacao = 'ola, ' + nome + '!'

console.log(concatenacao)

//no template string, posso quebrar linhas, posso dar espaço sem problemas e assim por diante.
//o template string transforma o indicador dentro do proprio texto.
const templateString = `Olá, ${nome}!`
console.log(templateString)

//posso colocar expressões dentro do template string
console.log(`1 + 1 é ${1 + 1}`)

//vamos a um exemplo de função. Esse tema será abordado mais para frente no curso.
const up = (texto) => {return texto.toUpperCase()}
console.log(`Ei... ${up('cuidado')} !`)