const divToggleVis = document.getElementById('spoiler_text')
const button = document.getElementById('spoiler_button')

button.onclick = function click() {
    if (divToggleVis.className === 'fadeout') {
        divToggleVis.className = 'fadein'
    } else {
        divToggleVis.className = 'fadeout'
    }

    if (button.innerHTML === '- PRODUCT DESCRIPTION') {
        button.innerHTML = '+ PRODUCT DESCRIPTION'
    } else {
        button.innerHTML = '- PRODUCT DESCRIPTION'
    }
}

