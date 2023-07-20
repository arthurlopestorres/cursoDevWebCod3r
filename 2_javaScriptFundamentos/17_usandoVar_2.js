var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
} //os blocos (sem ser funções) não limitam um identificador VAR a seu escopo. Continua sendo escopo global
console.log('fora =', numero)