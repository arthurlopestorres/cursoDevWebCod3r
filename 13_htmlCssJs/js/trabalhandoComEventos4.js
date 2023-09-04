//? vamos verificar nessa aula sobre como interceptar um evento de submit de um formulário
//* vamos utilizar a mesma técnica de "formData" no próximo capítulo, quando formos trabalhar com ajax (requisições API)

// vamos começar selecionando o botão:
const submitButton = document.querySelector('[wm-submit]')

// vamos escutar o click nesse botao
submitButton.addEventListener('click', e => {
    e.preventDefault() // preveninfo que o click faça o comportamento normal dele.

    // vamos captutar as informações do formulário:
    const form = e.target.parentNode //e.target = botão submit --> e.target.parentNode = formulario (pai do botão)
    const formData = new FormData(form) //agora, no formData, temos os dados do formulario à nossa disposição.

    formData.append('ajax', true) //adicionando ao formData a propriedade 'ajax = true'

     //pegando o query do formulario, que é um parametro nativo para buscas, quando o "q" está como value do atributo 'name' no formulario:
     console.log(formData.get('q'))

     //posso verificar se o formulario tem ou nao determinado campo:
     console.log(formData.has('hl')) //aqui, também estamos referenciando o valor do atributo 'name'

     //o formData também possui um iterator, por isso conseguimos utilizar for nele:
     //retorna lista de values dos elementos diretamente:
     formData.forEach(dado => console.log(dado)) 

     // retorna arrays com o valor do campo name na primeira posição e o value do elemento na segunda posição:
     for(let dado of formData){
        console.log(dado) 
     }
})