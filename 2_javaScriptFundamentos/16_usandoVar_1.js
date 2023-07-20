//Em outras linguagens de programação, o será provavelmente não seria exibido, por estar fora do escopo do bloco criado.
//O escopo seria o local onde um determinado dado é visivel, de forma que, o "sera" ficaria visivel apenas se o console.log estivesse dentro do mesmo bloco.
{
    {
        {
            { 
                var sera = 'Será????' 
                console.log(sera)
            }
        }
    }
}        

//Como estamos lidando com um indentificador do tipo VAR, ele poderá ser acessado por elementos fora do escopo (bloco onde está inserido):
{
    {
        {
            { 
                var sera = 'Será????' 
            }
        }
    }
}        
console.log(sera)//nesse caso ele irá, sim, imprimir o será.

//------------------------------------------------------------------------------------------
//Vamos utilizar um exemplo de escopo utilizando uma função, que trabalha com bloco (escopo)
function teste(){
    var local = 123
    console.log(local)
}
teste();
//console.log(local) // nesse caso, local não poderá ser acessado fora da função, pois está preso ao escopo da função.

//se eu declarar o var fora do escopo da função, entretanto, poderei utilizá-lo dentro da função sem problemas, mas ele não ficará preso à função.
var nome = 'Arthur'
function imprimirNome(){
    console.log(nome)
}
imprimirNome();

//Conhecimento IMPORTANTE: no console do navegador, temos um objeto chamado window que vai exibir todas as variáveis que estiverem fora do escopo de funções e essas informações ficam acessíveis. Assim, variáveis não devem ser criadas no escopo Global (fora de funções).