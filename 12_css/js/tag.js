//! queremos fazer com que, em cada elemento, seja exibido o nome da tag
const allTags = Array.from(document.querySelectorAll('.tag')) 
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

allTags.forEach(tag => {
    const tagName = tag.tagName.toLowerCase()

    let span = document.createElement("span")
    span.textContent = `${tagName}`
    span.classList.add('elementTag')
    span.style.color = colorDictionary[tagName]

    tag.insertAdjacentElement('afterbegin', span)
})