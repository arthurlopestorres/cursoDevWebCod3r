//* a ideia desse exercício é criarmos um drag and drop

const itens = Array.from(document.querySelectorAll('[wm-dropzone] .item'))
itens.forEach((item, index) => {
    item.draggable = true //? .draggable faz com que o elemento se torne arrastável
    item.id = item.id || `draggable-item-${index}` // definindo um id, no caso do item não tenha ID

    item.addEventListener('dragstart', e => {
        e.dataTransfer.setData('item-id', e.target.id)
    })
})

const dropZones = document.querySelectorAll('[wm-dropzone]')
dropZones.forEach(dropzone => {
    dropzone.addEventListener('dragover', e => {
        e.preventDefault()     // foi necessário esse prevent default, para que consigamos manipularo evento de drop posteriormente.
    })
    dropzone.addEventListener('drop', e => {
        const item = document.getElementById(e.dataTransfer.getData('item-id')) //? pegando o item id que foi definido com setData anteriormente, ao iniciar o arrasto do elemento (dragStart)

        dropzone.appendChild(item) //? por conta de estar referenciando o elemento pelo ID (e cada elemento é único em seu id), fazer append faz com que o elemento seja movido.
    })
})