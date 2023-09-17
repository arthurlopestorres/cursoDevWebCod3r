//podemos usar o bind para tornar o this mais deterministico
const pessoa = {
    saudacao: 'bom dia!',
    falar(){ //posso criar uma função no objeto diretamente, sem a necessidade de atribui-la a um identificador -- esse é um novo recurso do ES6
        console.log(this.saudacao) //this, nesse caso, vai acessar o objeto onde a função está sendo criada, que é pessoa.
    }
}
pessoa.falar()
//agora, vou armazenar a função falar dentro de uma variável:
const falar = pessoa.falar //undefined
falar() //conflito entre paradigmas: funcional e OO. Nesse caso caso, falar está tentando encontrar 'this.saudacao', mas a função não está mais armazenada dentro do contexto do objeto pessoa, e sim, fora, na const falar.

//para solucionar esse problema, precisamos utiliar o bind --> com o bind, passamos um objeto onde queremos que seja resolvido o "this"
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() //retorno: Bom dia!