//A função é como um verbo. Uma ação que comanda uma receita de bolo, por exemplo. Em resumo, a função é um bloco de código nomeado, que pode ser reutilizado posteriormente para automatizar processos ou o uso de dados.
//Imaginando uma receita de bolo completa. Se dou o nome de receitaDeBolo(), alguns dos dados que preciso passar são o sabor, o peso do bolo, tempo no forno e assim, por diante. Da mesma forma, uma função precisará receber valores com os quais possa trabalhar.
//A função pode não receber valores, pode não retornar dados, mas ela é livre para trabalhar com dados, conforme necessário.

//A palavra reservada em JS para definir uma função é "function". Sintaxe:
//function [nome da função]([indicadores separados por virgula, se houver mais de 1])

//------------------------------------------------------------------------------------------
//FUNCAO SEM RETORNO
//Primeiro exemplo de função: Função que recebe dados, mas não retorna dados.
function imprimirSOma(parametroA, parametroB){
    console.log(parametroA + parametroB)
}

imprimirSOma(2, 3) //nesse caso, o JS vai interpretar o primeiro sendo o parametroA e o segundo sendo o parametroB, e vai tratar esses dois parametros em sua area de código, que é definida por {}, de acordo com o definido, nesse caso, exibir no console a soma dos parametros.

imprimirSOma(2) //se eu não passar o segundo valor, ele será considerado undefined (porque foi declarado, mas não recebeu valor), então a soma ficaria 2 + undefined, que resulta em NaN (not a number).

imprimirSOma(2, 3, 4, 5, 6) //se eu passar mais parametros do que deveria aqui, ele considerará apenas os dois primeiros, como sendo o A e o B, e o restante será ignorado.

imprimirSOma() //seu eu não passar parametros, seria o mesmo que undefined + undefined = NaN
//------------------------------------------------------------------------------------------
//FUNCAO COM RETORNO
//no exemplo abaixo, digo b é sempre 0
function soma (a, b = 0){
    return a + b
}
console.log(soma(1, 2)) //aqui, estou atribuindo o valor 2 ao indicador b, assim 1 + 2 = 3
console.log(soma(1)) //como o b é 0 por padrão, e não estou atribuindo um novo valor para o indicador, a soma seria 1 + 0 = 1
console.log(soma()) //aqui, não estou passando um valor para o indicador a, e b já é 0 por padrão, então ficaria undefined + 0 = NaN