function clickBottone() {
    for(let section of document.querySelector('section')){
        section.children[0].classList.add('collapse');
        section.children[0].classList.add('show');
        section.innerHTML = `<button> mostra e nascondi section </button>`
    }
}

window.onload = function() {
    footer()
    clickBottone()
}


function footer () {
let numeriAlbum = document.querySelectorAll ('img').length -1
let span = document.createElement('span')
span.classList.add('bg-white')
span.innerHTML = ' Questa pagina contiene ' + numeriAlbum + ' album '
document.querySelector('.totale-album').appendChild(span)
}



