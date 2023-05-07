function trocarCorDoBody() {
	let corpo = document.querySelector("body");

	corpo.style.backgroundColor = "black";
}

let botao = document.querySelector("button");
botao.addEventListener("click", trocarCorDoBody);