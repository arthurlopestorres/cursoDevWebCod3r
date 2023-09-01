//* a ideia nesse exercicio é a gente conseguir arrastar a div com o mouse, fazendo a leitura de eventos.

const item = document.querySelector('div')
item.style.position = 'absolute'
item.style.cursor = 'move' //? cursor: move; -> parametro css para fazer com que o cursor fique num formato específico que indica que um elemento pode ser movimentado.

item.addEventListener('mousemove', (e) => {
    if(e.buttons){ //? o evento tem a propriedade "buttons", que, quando o mouse está clicado, fica diferente de zero, resutando em 'true' 
        e.target.style.top = `${e.clientY - (item.clientHeight / 2)}px` //?seleciona-se o (eixo y - altura do elemento) /2 -> a divisão por 2 é porque queremos que o cursor fique bem no meio do elemento.
        e.target.style.left = `${e.clientX - (item.clientWidth / 2)}px`
    }
})