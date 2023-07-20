function ocultaExibeCategoriasEdepartamentos(){
    const folders = document.querySelectorAll('.folder')
    folders.forEach(folder => {
        folder.addEventListener('mouseover', (e) => {
            e.preventDefault()
            folder.children[1].classList.remove('hidden')
        })
        folder.addEventListener('mouseout', (e) => {
            e.preventDefault()
            folder.children[1].classList.add('hidden')
        })
    })
}
ocultaExibeCategoriasEdepartamentos()