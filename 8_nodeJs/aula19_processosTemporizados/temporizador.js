//criar um temporizador poder ser bastante util para fazer uma leitura do banco de dados de x em x tempo, fazendo com que o banco de dado seja atualizado nesse periodo.
//para a gente poder utilizar esta funcionalidade no node, a gente precisa instalar uma dependencia chamada "schedule" (npm i node-schedule)

//vamos começar importando a funcionalidade:
const schedule = require('node-schedule')

//vamos criar a primeira tarefa temporizada.:
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function(){
    //posso colocar qq coisa dentro da função, mas vou apenas colocar um console.log:
    console.log('executando tarefa 1')
}) //esta string obedece este formato: (segundo, minuto, hora, diaDoMes, mes, diaDaSemana)
                                                       // nesta string, colocar * significa que aquele paramentro de data deve ser ignorado.
                                                       //colocar */ no inicio, significa que a execução será a cada x segundos. Se for removido esta parâmetro, a tarefa será executada no segundo exato.

//posso cancelar a execução da tarefa 1 acima utilizando um setTimeOut do js:
setTimeout(function(){
    console.log('cancelando tarefa 1')
    tarefa1.cancel()
}, 20000)

//posso criar um sistema de recorrencia utilizando o objeto schedule.RecurrenceRule:
const recorrencia = new schedule.RecurrenceRule()
recorrencia.second = 30
recorrencia.hour = 20
//para adicionar range, seria da seguinte forma: [new schedule.Range(valorInicial, valorFinal)]
recorrencia.dayOfWeek = [new schedule.Range(1, 5)]

//depois de criada a regra de recorrencia, precisamos vincula-la a uma nova tarefa
const tarefa2 = schedule.scheduleJob(recorrencia, function(){
    console.log('executando tarefa 2', new Date().getSeconds())
})