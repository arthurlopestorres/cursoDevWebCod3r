//funcao de callBack é uma funcao que chama outra. Isso pode acontecer so uma vez, ou mais de uma vez. Exemplo com a função forEach dando callBack na função imprimir.
const fabricantes = ['Mercedes', 'Audi', 'BMW']

const imprimir = (elemento, index, self) => console.log(`${index + 1}. ${elemento}, ${self}`)

fabricantes.forEach(imprimir)//o for each é uma função que, para cada elemento do array, vai primeiro capturar a informação mais profunda: nome no array, depois o indice e depois o array completo. 
fabricantes.forEach( (a) => { console.log(a) })