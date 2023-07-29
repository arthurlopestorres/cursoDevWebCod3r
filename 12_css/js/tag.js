const colorsObj = {
    body: 'red',
    div: 'green',
    span: 'blue',
    p: 'orange',
    ul: 'yellow',
    ol: 'pink',
    form: 'aquamarine'
}

const elements = Array.from(document.querySelectorAll('.tag'));

elements.forEach(element => {
    const tagName = element.tagName.toLocaleLowerCase();
    element.style.border = `3px solid ${colorsObj[tagName]}`

    if(!element.classList.contains('nolabel')){
        const tag = document.createElement('span')
        tag.textContent = tagName
        tag.classList.add('elementTag')
        tag.style.color = colorsObj[tagName]
        
        element.insertAdjacentElement('afterbegin', tag)
    }
})