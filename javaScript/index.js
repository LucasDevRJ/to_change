let cliques = 0;

function trocarCorDoBody() {
	let corpo = document.querySelector("body");

	let coresDeFundo = ["#FF0000", "#FFC0CB"];
	
	corpo.style.backgroundColor = coresDeFundo[cliques];
	
	if (cliques > coresDeFundo.length) {
		cliques = 0;
	} else {
		cliques++;
	}
}

let botao = document.querySelector("button");
botao.addEventListener("click", trocarCorDoBody);