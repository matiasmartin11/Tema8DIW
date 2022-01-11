let nodo = document.querySelector(".seleccionado");
let psjSeleccionado;
document.addEventListener("keydown", manejarEvento);

/*document.addEventListener("keyup", () => {
    nodo.removeAttribute("class");
    nodo.classList.add("character");
    console.log("keyup");
});
*/
function seleccionarPsj(){

}

function manejarEvento(evento){
    //nombre del personaje + atacar
    ordenAtaque = nodo.classList[1] + "Ataca";
    
    console.log(nodo);
    console.log(nodo.classList[1]+ "Ataca");
    console.log(evento);
    console.log("entra");

    if(evento.keyCode === 32){
        nodo.classList.add(ordenAtaque);
        
        console.log(nodo.classList);
        setTimeout(function(){
            nodo.classList.remove(ordenAtaque);
        },1000);
        
    }
}

function iniciar(){
    //console.log("ey");
    var tablaAvatar=document.getElementById("personajes");

    var celdasAvatar=tablaAvatar.getElementsByTagName("td");
    for (var i=0;i<celdasAvatar.length;i++){
		celdasAvatar[i].addEventListener("click",detectarPersonajes);
	}
}

function detectarPersonajes(){
    //console.log("hola");
    for(let i=0; i<this.parentNode.children.length; i++){
		if(this.parentElement.children[i].classList.contains("seleccionado")){
			this.parentElement.children[i].classList.remove("seleccionado");
			break;
		}
	}

	// Tendremos que usar classList para actualizar el avatar activo
	avatarActivo = this.classList[0];
	console.log(avatarActivo);

	// Adicionalmente añadimos al elemento donde hemos hecho click la clase "seleccionado"
	this.classList.add("seleccionado");
}
var avatarActivo="";
window.onload = iniciar();





