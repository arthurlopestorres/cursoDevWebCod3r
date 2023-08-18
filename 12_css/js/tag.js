const colorsObj = {
    body: 'red',
    div: 'green',
    span: 'blue',
    p: 'orange',
    ul: 'yellow',
    ol: 'pink',
    form: 'aquamarine',
    main: 'blue',
    header: 'red',
    footer: 'green',
    nav: 'orange'
}

const elements = Array.from(document.querySelectorAll('.tag'));

elements.forEach(element => {
    const tagName = element.tagName.toLocaleLowerCase();
    element.style.border = `3px solid ${ colorsObj[tagName] }`

    if( !element.classList.contains('nolabel') ){
        const tag = document.createElement('span');
        tag.textContent = tagName
        tag.classList.add('elementTag')
        tag.style.backgroundColor = colorsObj[tagName]
        tag.style.color = '#fff'
        
        element.insertAdjacentElement('afterbegin', tag);
    }
})