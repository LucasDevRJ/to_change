let cliques = 0;

let coresDeFundo = ["#98FB98", "#FF0000", "#FFC0CB", "#FF7F50", "#FFA500", "#FFFF00",
	"#EE82EE", "#800080", "#008000", "#0000FF", "#A52A2A", "#000000", "#F08080",
	"#FF1493"];

let corpo = document.querySelector("body");

corpo.style.backgroundColor = coresDeFundo[cliques];

function trocarCorDoBody() {
	if (cliques >= coresDeFundo.length) {
		cliques = 0;
	} else if (cliques < coresDeFundo.length) {
		cliques++;
	}

	corpo.style.backgroundColor = coresDeFundo[cliques];
}

let botao = document.querySelector("button");
botao.addEventListener("click", trocarCorDoBody);