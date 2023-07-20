//desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e quanto ele recebe por hora.
//O retorno da função deve ser a string "Salário igual a R$x", em que x é o quando o funcionário ganhou no mês

const calculaSalário = (qtdHoras, salarioHora) => `Salário igual a R$${parseFloat(qtdHoras * salarioHora).toFixed(2).replace('.',',')}`
console.log(calculaSalário(20, 200))