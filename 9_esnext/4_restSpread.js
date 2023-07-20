//vamos falar aqui sobre o operador rest e spread.

//exemplo de operador 'rest' (...), que é utilizado para juntar os parâmetros passados:
function recebendoComRest(...restArray){
    restArray.forEach(element => console.log(element))
}
recebendoComRest('Arthur', 'Izabelle')

/////////////////////////////////////////////////////////operador Spread/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////usando spread com OBJETO
const funcionario = {nome: 'Maria', salario: 12345.99}
//criando outro objeto usando spread:
const clone = {ativo: true, ...funcionario} //quando eu utilizo ...funcionario, estou pegando todos os elementos do objeto funcionario e inserindo-os como parâmetros, também, do objeto 'clone':
console.log(clone) //{ ativo: true, nome: 'Maria', salario: 12345.99 }
//Se eu alterar um paramentro em clone, eu não vou estar gerando nenhuma alteração no objeto base 'funcionario':
clone.nome = 'Arthur'
console.log('este é o objeto base:', funcionario) //este é o objeto base: { nome: 'Maria', salario: 12345.99 }
console.log('este é o objeto clone:', clone) //este é o objeto clone: { ativo: true, nome: 'Arthur', salario: 12345.99 }

/////////////////////////////////////////////////////////usando spread com ARRAY
const grupoA = ['João', 'Pedro', 'Glória']
const grupoB = ['Arthur', 'Henrique', 'Izabelle']
const grupoFinal = [...grupoA, ...grupoB] 
console.log(grupoFinal) //[ 'João', 'Pedro', 'Glória', 'Arthur', 'Henrique', 'Izabelle' ]