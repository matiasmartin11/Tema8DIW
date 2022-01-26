let nodo = document.querySelector(".mostrar");
let psjSeleccionado;
document.addEventListener("keydown", manejarEvento);


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
    const musicaFondo = new Audio("./sound/batalla.wav");
    musicaFondo.play();
    var tablaAvatar=document.getElementById("personajes");
    var celdasAvatar=tablaAvatar.getElementsByTagName("td");
    for (var i=0;i<celdasAvatar.length;i++){
		celdasAvatar[i].addEventListener("click",detectarPersonajes);
        celdasAvatar[i].addEventListener("click", reproducirSonido);
	}
    

}

function detectarPersonajes(){
   
    for(let i=0; i<this.parentNode.children.length; i++){
		if(this.parentElement.children[i].classList.contains("seleccionado")){
			this.parentElement.children[i].classList.remove("seleccionado");
			break;
		}
	}

	// Tendremos que usar classList para actualizar el avatar activo
	avatarActivo = this.classList[0];
	

	// Adicionalmente añadimos al elemento donde hemos hecho click la clase "seleccionado"
	this.classList.add("seleccionado");
    var personaje = document.querySelector(".mostrar");

    if(personaje.classList.contains("berni")){
        personaje.classList.remove("berni");
    }
    if(personaje.classList.contains("lobo")){
        personaje.classList.remove("lobo");
    }
    if(personaje.classList.contains("mati")){
        personaje.classList.remove("mati");
    }
    if(personaje.classList.contains("miriam")){
        personaje.classList.remove("miriam");
    }

    
    personaje.classList.add(this.id);
}

function reproducirSonido(evt){
    const music = new Audio("./sound/select.wav");
    music.play();
}
var avatarActivo="";
var selectorActivo=false;
window.onload = iniciar();



