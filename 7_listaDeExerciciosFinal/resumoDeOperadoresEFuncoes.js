//! NUMBER //////////////////////////////////////
//? toFixed(valor) = faz com que eu limite as casas após a virgula
//? toString() = faz com que eu transforme um número numa string no resultado final
//? toString(2) = transforma o valor do indicador em binário no resultado final.
//? Number.isInteger(indicador) = faz com que eu valide se o indicador é inteiro ou não, em formato boolean.
//? Math.pow(valor1, valor2) -> valor 1 elevado a valor 2.
//? valor1 ** valor2 -> valor1 elevado a valor2


//! STRING //////////////////////////////////////
//? string.charAt(index) -> retorna character no index indicado
//? string.charCodAt(index) -> retorna codigo unicode para o elemento do index indicado
//? string.indexOf(string) -> retorna o index da string passada para indexOf()
//? string.substring(index1, index2) -> se index1 apenas for declarado, serão impressas todas as letras da string a partir deste index. se o index2 também for declarado, serão impressas todas as letras de index1 até index2, desconsiderando o index2 no resultado.
//? string.concat(string) -> concatena a string passada no paramentro à string invocando concat
//? string.replace(string1, string2) -> na string invocando replace, é substituído o paramentro passado em string1, pelo parametro passado em string2
//? string.split(string) -> o código levará em consideração a string passada para split, para retornar um array com os demais elementos da string, separando os elementos na string passada. Obs.: uma string vazia (''), faz com que todas as letras se tornem elementos de um array
//? array.join() -> faz com que todos os elementos separados de um array se aglutinem, formando uma string.
//? string.toUpperCase() -> transforma tudo em letra maiuscula
//? string.toLowerCase() -> transforma tudo em letra minuscula


//! ESTRUTURAS DE CONTROLE ///////////////////////////////
//? if(condição que retorna true or false){retorno}
//? if(condição que retorna true or false){retorno}else{retorno} -> else é qualquer coisa menos a condição de if anteriormente
//? if(condição que retorna true or false){retorno}else if(condição que retorna true or false){retorno}
//? switch(identificador){case [retorno do identificador]: [retorno] break default: [retorno padrão caso nenhum 'case' anteriormente seja satisfeito]}
//? while(condição de true or false){retorno}
//? do{retrono}while(condição de true or false) -> executa o retorno antes de aplicar a condição.
//? for(identificador = valor; identificador < tamanhoDoArray; identificador++){retorno}
//? for(identificador in array){retorno}
//? for(identificador of array){retorno}


//! FUNÇÃO ////////////////////////////////////////
//? função.call(objeto de contexto, paramentros da função)
//? função.apply(objeto de contexto, [paramentros da função])
//? função.bind(objeto de contexto)(parametros da função)
//? function retornaParametros(...params){ -> operador rest/spread
//?     console.log(params)
//? }
//? retornaParametros('arthur', 'izabelle', 'Davi', 'Debora') // ['arthur', 'izabelle', 'Davi', 'Debora']


//! OBJETO ////////////////////////////////////////
// ************************* FORMAS DE CRIAR UM OBJETO: ******************************
//? notação literal: const obj = {}
//? utilizando função Object: const obj = new Object
//? funcao contrutora: function Objeto (parametros do objeto){retornos utilizando this.}
//? funcao factory: funcition objeto(paramentros do objeto){return{objeto em notação literal}}
//? funcao Object com operador create: const obj = Object.create([objeto pai], {chave: {value: valor da chave, enumerable: true or false, writable: true or false}})
//? a partir de JSON: const objDeJson = JSON.parse(JSON)

//************************** FORMAS DE INSERIR CHAVE/VALOR ***************************
//? notação literal: const obj = {chave: valor, chave2: valor2, chave3: valor3}
//? notação literal por chave: obj['chave'] = valor ou obj.chave = valor

//************************** GETTER/SETTER ***************************
//? get vai fazer com uma função seja executa a respeito de uma chave qunado ela for invocada:
//? const sequencia = {
//?     _valor: 1, //quando uso _ na declaração de um atributo de objeto, estou dizendo, por convenção e não por regra da linguagem, que essa variavel somente deveria ser acessada no contexto deste objeto
//?     get valor(){ return this._valor }
//? }
//? console.log(sequencia.valor) //retorna o return de get valor(){}
//? set vai fazer com que uma função seja executada ao tentarmos atribuir um novo valor ao identificador:
//? const sequencia = {
//?     _valor: 1
//?     set valor(valor){ 
//?         if(valor > this._valor){
//?             this._valor = valor 
//?         }
//?     } //estou recebendo um valor na função setando ele para _valor caso a condição seja atendida.
//? }
//? sequencia.valor = 1000
//? console.log(sequencia.valor) //nesse caso ele vai retornar 1000 para _valor e vai fazer _valor++, pois é o return do método get.
//? sequencia.valor = 900 //aqui não vai funcionar, porque 900 < 1000 e exite um if no set que não permite isso.

//************************** FUNÇÕES DE OBJETOS ***************************
//? Object.values(objeto) -> retorna todos os valores dentro do objeto (formato de array): [valor, valor, valor]
//? Object.keys(objeto) -> retorna todas as chaves dentro do objeto (formato de array): [chave, chave, chave]
//? Object.entries(objeto)-> retorna todas as chaves e valores do objeto em formato de array: [[chave, valor], [chave, valor], [chave, valor]]
//? Object.defineProperty('objeto destino', 'chave', {value: 'valor', enumerable: true or false, writable: true or false})
//? Object.assign(objeto, objeto, ...) -> concatena varios objetos, devolvendo um objeto com todos os demais concatenados.
//? Object.preventExtensions(objeto) -> objeto não pode ter novas chaves, mas pode ter chaves excluidas ou modificadas
//? Object.seal(objeto) -> chaves não pode ser removidas nem adicionadas, mas podem ser modificadas
//? Object.freeze(objeto) -> chaves e valores não podem ser excluídos nem modificados.
//? JSON.parse(JSON) -> transforma JSON em objeto
//? JSON.stringify(objeto) -> transforma objeto em JSON

//************************** CLASS ***************************
//?  class NomeDaClasse{
//?      constructor(paramentros){retorno}
//?      posso adicionar muitos métodos aqui
//?  }
//? obs.: não se pode esquecer de usar this para tornar método ou parametro publico.
//?  class NomeDaClasse extends NomeDaClassePai{
//?      constructor(parametros da classe pai podem ser inseridos aqui, alem de paramentros novos){
//?          retorno
//?      }
//?      posso adicionar aqui novos métodos
//?  }

//! ARRAY ////////////////////////////////////////
//************************** FORMAS DE CRIAR UM ARRAY ***************************
//const primeiraForma = new Array([elementos])
//const segundaForma = [ [elementos] ]

//************************** FUNÇÕES DE ARRAY ***************************
//? array.push([elementos]) -> adiciona elementos na ultima posição
//? array.sort() -> altera o array atual para uma nova sequencia aleatoria
//? delete array[index] -> deleta o index do array
//? array.splice([index], [quantidade de indexes a serem excluídos a partir do index indicado], [elementos a serem inseridos a partir do index])
//? array.pop() -> exclui o ultimo index
//? array.push([elementos]) -> adiciona na ultima posição
//? array.shift() -> exclui o primeiro index
//? array.unshift([elementos]) -> adiciona na primeira posição
//? array.slice([index inicial], [index final, desconsiderando-o (opcional)]) -> infomando apenas inicial, imprime tudo a partir dele. Informando tambem o final, imprime tudo do inicial ao final, desconsiderando o ultimo
//? array.forEach(function('elementoDoArray', 'indexDoElementoDoArray', 'oArrayInteiro'){retorno})
//? array.map(function('elementoDoArray', 'indexDoElementoDoArray', 'oArrayInteiro'){retorno}) -> retorna array de igual tamanho (normalmente para retornar array de chaves, valores, ou caracteristica especifica dentro do array.)
//? array.filter(function('elementoDoArray', 'indexDoElementoDoArray', 'oArrayInteiro'){retorno}) -> retorna array menor, filtrando por informações encontradas dentro do array
//? array.reduce(function('elementoAglutinador', 'elementoAtual'){trabalha-se com a relação entre aglutinador e elemento atual, pode ser somando, comparando, etc.}) -> serve para aglutinar elementos de um array em um só resultado final
//? array.concat('outroArray', 'novosElementosSeparadosPorVirgula')
 
//?  Array.prototype.flatMap = function(callback){
//?      return Array.prototype.concat.apply([], this.map(callback))
//?  }