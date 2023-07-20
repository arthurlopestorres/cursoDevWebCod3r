let a = 3;
a = 10;
console.log(a);

a = a + 10; //quando a gente usa o mesmo identificador da variável declarada anteriormente e atribui um novo dados a ela, o dado inicial é substituído:
console.log(a);

a = 'arthur'
console.log(a);

//para que eu possa criar um identificador constante, ou seja, que não pode ser alterado posteriormente, preciso utilizar 'const':
const b = 4
console.log(b);

//console.log(b);  esse console.log gerará um erro pela tentativa de alterar um indicador constante.