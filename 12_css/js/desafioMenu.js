const menuLinks = Array.from(document.querySelectorAll('.menu a')) 
const backgroundColor = 'rgb(13, 131, 249)'
const textColor = 'black'

window.addEventListener('hashchange', () => {
    //! o hashchange tem como evento oldURL e newURL (para verificarmos uma URL antiga e uma nova, quando mudarem)
    const urlHash = window.location.hash

    menuLinks.forEach(link => {
        link.parentElement.style.backgroundColor = 'transparent'
        link.style.color = '#ededed'
        if(link.hash === urlHash){
            link.parentElement.style.backgroundColor = backgroundColor
            link.style.color = textColor
        }
    });
})