const htmlCodeLigne = `
	<div class="wrapper">\n
	    <div class="one">classement (ex: A, B, C)</div>
	    <div class="two">Image à placer</div>
	</div>`

let boutonPlus

function addLine() {
	boutonPlus = document.getElementById("boutonPlus")
    boutonPlus.insertAdjacentHTML('beforebegin', htmlCodeLigne)
}
