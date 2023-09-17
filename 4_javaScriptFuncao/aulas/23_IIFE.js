//AULA SOBRE FUNÇÃO AUTOINVOCADA
//IIFE = Immediately Invoked Funtion Expression
//um dos objetos dessa função, é fugir do escopo global.

//Nesse caso, basta envolver toda a função em parenteses () e depois invocar colocando parenteses no final: (fucntion(){})()

(function(){
    console.log('será executado na hora!')
    console.log('foge do escopo mais abrangente!')
})()