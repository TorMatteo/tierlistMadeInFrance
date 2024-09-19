const htmlCodeLigne = `
    <div class="ligne">
    	<div class="one"><img class="boutonMoins" src="resources/img/boutonMoins.png" alt="retirer ligne" onclick="removeLine(this)"></div>
        <div class="two">classement (ex: A, B, C)</div>
        <div class="three">Image à placer</div>
    </div>`

let conteneurLignes
let boutonPlus

window.onload = () => {
    conteneurLignes = document.getElementById("wrapper")
    boutonPlus = document.getElementById("boutonPlus")
    
    boutonPlus.addEventListener('click', addLine)
    
    addLine()
    addLine()
    addLine()
}

function addLine() {
    conteneurLignes.insertAdjacentHTML('afterbegin', htmlCodeLigne)
}

function removeLine(bouton) {
    bouton.parentNode.parentNode.remove()
}
