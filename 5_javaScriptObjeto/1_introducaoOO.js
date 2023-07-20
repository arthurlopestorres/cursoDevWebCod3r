//Objeto seria o vice presidente do JS.
//OS CÓDIGOS AQUI NÃO SÃO EXECUTÁVEIS

//Antes da Orientação ao Objeto (OO), tinhamos o paradigma PROCEDURAL, e antes dele ainda, havia a programção não estruturada (utilizava-se a palavra reservada "goTo" para chamar outras partes do código, sem uma estrtura fixa.)
//Depois de certo artigo que falava mal sobre o goTo, passou-se a adotar programação estruturada (paradigma procedural, e paradigma OO (orientado ao objeto))]

//No paradigma procedural, dá-se um nome para certo trecho de código (função) e reutiliza esse trecho de código em vários cenários diferentes no programa.
processamento(valor1, valor2, valor3) //este é um exemplo de procedural: procedimento recebe dados, para manipulá-los *função recebe dados

//No paradigma procedural, então, funções manipulavam dados e poderiam ser utilizadas em diferentes partes do código para manipular dados da mesma forma.
//Já no paradigma OO (orientado ao objeto), temos dados e, dentro dos dados (como parte deles), temos funções para trabalhar com esses dados.
//O exemplo acima, em OO, ficaria assim:
objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){

    }
}
objeto.processamento() //dentro do objeto eu tenho os valores que serão utilizados pela função que é parte do objeto (função orientada ao objeto).

//A ideia da orientação ao objeto é interpretar o código como se interpretaria o mundo real. Entende-se que o mundo é orientado ao objeto (cada objeto tem suas funções e suas possibilidades, assim como seus dados, e pode conter outros objetos)
//pode haver herança entre objetos (objeto pai tem objetos filhos e assim por diante)

// PRINCIPIOS IMPORTANTES DA ORIENTAÇÃO AO OBJETO

//1- ABSTRAÇÃO: seria como pegar um objeto na vida real e traduzi-lo para dentro do sistema com as informações que são importantes para o sistema sobre o objeto

//2- ENCAPSULAMENTO: os detalhes de implementação ficam escondidos e é exibido na interface apenas as informações necessárias para interagir com determinado objeto -- o ideal é que cada objeto seja o máximo independente de outros objetos o possível (cada um responsável por si proprio o maximo possivel). 'quanto mais informações compartilhadas entre objetos, maior a codependencia e tambem maior seria a necessidade de adaptação'. Sempre havera comunicação entre objetos no sistema, mas é melhor eu me preocupar com a forma com que eles se comunicam, do que com as caracteristicas internas de cada um deles.

//3- HERANÇA (PROTOTYPE): é baseado num principio é --> 1. Por exemplo: se tenho um carro, não preciso colocar a complexidade do motor dentro do carro. Posso ter um objeto carro separado de um objeto motor, e o objeto carro utilizar o objeto motor. Da mesma forma, o objeto motor pode ser formado por outras partes menores, que juntas, formam o motor.
//Entendemos então, que este principio indica a criação de objetos mais complexos a partir da composição de objetos menores.
//O comportamento de herança indica que um objeto herda (utiliza) atributos e funcionalidades de um objeto pai. Em outras linguagens, o objeto pode ter mais de um pai. No JS, entretanto, UM OBJETO PODE TER APENAS 1 PAI, E O PAI, PODE TER UM PAI E ASSIM POR DIANTE -- fazemos hernça a partir de prototype.
//no mundo real, temos objeto do tipo tem um: exemplo: o carro tem um motor
//no js OO, trabalhamos como objeto é um: exemplo: o carro é um objeto que tem um outro objeto que é um composto de outros objetos.
//SEMPRE PRECISAMOS PRIORIZAR COMPOSIÇÃO SOBRE HERANÇA


//4- POLIMORFISMO: posso criar um conceito e esse conceito ser aplicado em outros objetos. Exemplo: crio o conceito carro e digo quais são as características possíveis. Depois consigo manipular os dados a partir de outros objetos para que carro seja definido de forma mais especifico no contexto (ferrari, uno, etc.)