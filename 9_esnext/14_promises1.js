//quando crio uma varivel, ela logo em seguida fica disponivel para uso no codigo, ex.:
let a = 1
console.log(a) //1

//quando crio uma promise, entretando, estou prometendo para o codigo algo que irá se cumprir no futuro, exemplo:
let p = new Promise((resolve, reject) => {
   try {
        resolve({
            nome: 'Arthur',
            idade: 24
    })
   } catch(e){
        reject(e)
   }
})
p.then(objeto => console.log(objeto)) //{ nome: 'Arthur', idade: 24 }

//posso usar promessa sem a necessidade de atribui-la a uma variavel, por ser um objeto, exemplo:
new Promise((resolve, reject) => {
    try{
        resolve('Arthur')
    } catch(e){
        reject(e)
    }
}).then(nome => nome.toUpperCase())
  .then(nome => nome += ' Lopes')
  .then(nome => nome += ' Torres')
  .then(console.log)