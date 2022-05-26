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

const newArrival = document.getElementById('newArrivals-el')
let dataReload = document.querySelectorAll(["data-reload"])

let language = {
    en: {
        newArrivals: "New arrivals"
    },
    ro: {
        newArrivals: "Cele mai noi"
    }
}

if (window.location.hash) {
    if (window.location.hash === "#ro") {
        newArrival.textContent = language.ro.newArrivals
    } else {
        newArrival.textContent = language.en.newArrivals
    }
}

for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function() {
        location.reload(true)
    }
}
