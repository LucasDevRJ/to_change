let cliques = 0;

let coresDeFundo = ["SpringGreen", "Salmon", "Pink", "OrangeRed", "Purple",
	"Lime", "Aqua", "Cornsilk", "Chocolate", "Gainsboro", "DarkSlateGray", 
	"DarkBlue", "OliveDrab", "Indigo", "Lavender"];

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