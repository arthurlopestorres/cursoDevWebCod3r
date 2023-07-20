var numero = 1

{
    let numero = 2
    console.log('dentro ', numero)
} //para o let, o bloco é valido como espoco, assim, dentro do bloco, o identificador "numero" vale 2, mas não fora, porque o let vincula do identificador ao escopo onde ele foi criado, nesse caso, dentro do bloco

console.log('fora ', numero)

//apesar do let vincular o indicador ao escopo onde ele foi criado. Caso o let seja criado no escopo global, ele poderá ser acessado pelo escopos menores, se o escopo menor não tiver o mesmo identificado declarado dentro dele. Mas o let cadastrado dentro de um escopo menor, não poderá ser utilizado no escopo global. Exemplo:
let numero1 = 3
{
    let numero2 = 2
    console.log('dentro ', numero1)
}
//console.log('fora ', numero2) //o erro aqui acontece porque "numero2" não foi declarado em escopo global.