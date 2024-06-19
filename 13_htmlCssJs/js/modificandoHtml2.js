const div = document.querySelector('div')
div.innerHTML = 'Texto alterado' //* quando fazemos isso, todo o innerHTML é substituído pelo está sendo passado na string, assim, o parágrafo que existia anteriormente também deixa de existir.

//div.outerHTML = 'Texto alterado' //* quando fazemos isso, todo o html é alterado, inclusive o do elemento selecionado.

//? insertAdjacentHtml: podemos utilizar um elemento como parametro de posicionamento para o elemento que está sendo inserido utilizando os seguintes parametros no primerio termo
//*beforbegin, afterbegin, beforeend, afterend

div.insertAdjacentHTML('beforebegin', '<p>antes inicio</p>') 
div.insertAdjacentHTML('afterbegin', '<p>depois inicio</p>')
div.insertAdjacentHTML('beforeend', '<p>antes fim</p>')
div.insertAdjacentHTML('afterend', '<p>depois fim</p>')

//! para pegar apenas o texto, sem tags:
console.log(div.innerHTML) //resultado com as tags
console.log(div.innerText) //apenas os textos, sem as tags