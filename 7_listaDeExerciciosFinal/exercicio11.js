//Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array
const array = ['arthur', 'izabelle', 'henrique']

function firstLast(anyArray){
    const lastElement = anyArray.length - 1
    let newArray = anyArray.filter((element, index) => index == 0 || index == lastElement)
    console.log(newArray)
}   
firstLast(array)