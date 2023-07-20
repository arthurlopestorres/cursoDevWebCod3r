/* 
//AVALIAÇÃO LÓGICA DO OPERADOR "E" (PRECISO QUE X E X SEJAM VERDADEIROS PARA QUE O RESULTADO SEJA VERDADEIRO)
verdadeiro e verdadeiro = verdadeiro
verdadeiro e falso = falso
falso e qualquer coisa = falso
para que a expressão "e" seja verdadeira, é preciso que todos os operando sejam verdadeiros, exemplo: condição1 verdadeira e condição2 verdadeira = resultado verdadeiro

//AVALIAÇÃO LÓGICA DO OPERADOR "OU"
verdadeiro ou qualquer coisa = verdadeiro
falso ou verdadeiro = verdadeiro
falso ou falso = falso

//AVALIAÇÃO DO OU EXCLUSIVO (XOR) (ambros precisam necessariamente ser diferentes)
v xor v = f
v xor f = v
f xor v = v
f xor f = f

//AVALIAÇÃO DE NEGAÇÃo LÓGICA
!v = f (não verdadeiro = falso)
!!v = v (não, não verdadeiro = verdadeiro)
!f = v
!!f = f
*/

//tenho 2 trabalhos para fazer. se ambos derem certo, comprarei uma tv de 50 polegads e tomo sorvete. Se um dos trabalhos de certo, compro uma tv de 32 e tomo sorvete. Se nenhum dos trabalhos derem certo, não compro nenhuma tv e nao tomo sorvete. //trabalho1 e trabalho2 receberao como dado "true" ou "false"
function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // "||"" significa "ou"
    const comprarTV50 = trabalho1 && trabalho2 // "&&" significa "e"
    const comprarTV32 = trabalho1 != trabalho2 // a diferença simula um 'ou' exclusivo
    const manterSaudavel = !comprarSorvete //operador unario

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel } //criando um objeto dessa forma, o codigo entende que o identificador deve ter o mesmo nome do valor recebido por ele. Exemplo: comprarSorvete: comprarSorvete(o valor que retornar nessa constante) -> comprarSorvete = true or false.
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))