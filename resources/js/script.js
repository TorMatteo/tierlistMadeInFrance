const htmlCodeLigne = `
	<div class="one">classement (ex: A, B, C)</div>
	<div class="two">Image à placer</div>`

let boutonPlus
let conteneurLignes

window.onload = () => {
    boutonPlus = document.getElementById("boutonPlus")
    conteneurLignes = document.getElementById("wrapper")

    boutonPlus.addEventListener('click', addLine)

    addLine()
    addLine()
    addLine()
}

function addLine() {
    conteneurLignes.insertAdjacentHTML('afterbegin', htmlCodeLigne)
}
