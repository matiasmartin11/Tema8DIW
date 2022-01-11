let nodo = document.querySelector("character");

document.addEventListener("keydown", manejarEvento);

document.addEventListener("keyup", () => {
    nodo.removeAttribute("class");
    nodo.classList.add("character");
    console.log("keyup");
});

function manejarEvento(evento){
    console.log(evento);
    console.log("entra");

    if(evento.keyCode === 32){
        nodo.removeAttribute("class");
        setTimeout(function(){
            nodo.classList.add("agacharse");
        },2000);
        nodo.removeAttribute("class");
        nodo.classList.add("flexiones");
    }
}

function iniciar(){
    selectAvatar();

    var tablaAvatar=getNode("personajes");

    var celdasAvatar=tablaAvatar.getElementsByTagName("td");
    for (var i=0;i<celdasAvatar.length;i++){
		crearEvento(celdasAvatar[i],"click",detectarPersonajes);
	}
}
function selectAvatar(){
    getNode("zonaPersonaje").appendChild(nuevaTabla);
}
function detectarPersonajes(){
    for (var i=0; i<this.parentElement.children.length;i++){	
		if (navigator.appName.indexOf("Explorer") != -1){
			this.parentNode.childNodes[i].className = this.parentNode.childNodes[i].className.replace(/\bseleccionado\b/,'');
		}else{
			this.parentElement.children[i].classList.remove("seleccionado");
		}
	}

	if (navigator.appName.indexOf("Explorer") != -1){
		colorActivo=this.className;
		this.className+=" seleccionado";
	}else{
		colorActivo=this.classList[0];
		this.classList.add("seleccionado");
	}
}
crearEvento(window,"load", iniciar);





