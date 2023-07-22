//! queremos fazer com que, em cada elemento, seja exibido o nome da tag e caracteristicas proprias
const colorDictionary = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#5e35b1',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
}

const allTags = document.querySelectorAll('.tag')
allTags.forEach(tag => {
    const tagName = tag.tagName.toLowerCase()
    tag.style.borderColor = colorDictionary[tagName]

    if(!tag.classList.contains('nolabel')){ 
        const label = document.createElement("span")
        label.classList.add('elementTag')
        label.textContent = `${tagName}`
        label.style.color = colorDictionary[tagName]
        tag.insertAdjacentElement('afterbegin', label)
    }   
})