//o forOf é um novo laço for que foi adicionado recentemente
//enquanto o forIn opera sobre indices, o forOf opera sobre valores -> ele tende a ser usado mais vezes
//posso usar esse for para poder interar em maps, sets, arrays, objetos, etc.
for (let letra of "Arthur"){
    console.log(letra) //'letra' representa cada posição (valor) em 'Arthur'
}

//percorrendo array
const assuntosEcma = ['map', 'set', 'promise']
for (elemento of assuntosEcma){
    console.log(elemento)
}

//percorrendo Map
const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])
for (let assunto of assuntosMap){
    console.log(assunto)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
}

//percorrendo as entradas utilizando destructuring:
for(let [chave, valor] of assuntosMap.entries()){
    console.log(chave, valor)
}
// Map { abordado: true }
// Set { abordado: true }
// Promise { abordado: false }


//percorrendo um set
const s = ['a', 'b', 'c']
for(let letra of s){
    console.log(letra)
} 
// a
// b
// c