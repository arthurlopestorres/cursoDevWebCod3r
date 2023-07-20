//Json é um formato de dados (textual), assim, quando transformo um objeto em um JSON, não estará presente uma função, porque a ideia do json é ser um formato de dados. É o formato mais utilizado para interação entre sistemas diferentes.

//Para passar o objeto para JSON: JSON.stringify()
//Para passar o JSON para objeto: JSON.parse()


//Vamos criar um objeto e transformar ele em JSON
const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c }}
console.log(JSON.stringify(obj)) //{"a":1,"b":2,"c":3} -> a função foi excluída do JSON, por ser um formato textual e não lógico.

//vamos pegar um json e transformar em objeto:
console.log(JSON.parse('{"a":1,"b":2,"c":3}')) //json precisa dos elementos sempre com aspas duplas!

console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}')) //atributos e strings, apenas, precisam ser delimitados por aspas duplas.