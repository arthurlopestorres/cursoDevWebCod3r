//primeiro, queremos interceptar o clique no link de exercicios/teste.html, para que nós possamos fazer a requisiçao (ajax) e nao o browser
//abaixo, estou pegando todas as tags a

document.querySelectorAll('[webModerno-nav]').forEach(element => {
    element.addEventListener('click', (e) => { //o "e" recebido aqui é o evento padrão da tag, nesse caso o evento de acessar a URL que a tag 'a' carrega.
        e.preventDefault() //aqui, estamos prevenindo que o evento padrão aconteça, ou seja acessar o link

        const conteudo = document.getElementById('conteudo')

        //fazendo a requisicao ajax utilizando fetch
        //abaixo, getAttribute foi utilizado por estarmos pegando o valor escrito dentro do atributo personalizado criado.
        
        fetch(element.getAttribute('webModerno-nav'))
            .then(resp => resp.text()) //a funcao .text(), vista aqui, serve para pegarmos o conteudo html da página de onde está vindo a requisição.
            .then(html => conteudo.innerHTML = html)
    })
})