let cliques = 0;

function trocarCorDoBody() {
	let corpo = document.querySelector("body");

	let coresDeFundo = ["#FF0000", "#FFC0CB", "#FF7F50", "#FFA500", "#FFFF00",
		"#EE82EE", "#800080", "#008000", "#0000FF", "#A52A2A", "#000000"];
	
	corpo.style.backgroundColor = coresDeFundo[cliques];
	
	if (cliques > coresDeFundo.length) {
		cliques = 0;
	} else {
		cliques++;
	}
}

let botao = document.querySelector("button");
botao.addEventListener("click", trocarCorDoBody);