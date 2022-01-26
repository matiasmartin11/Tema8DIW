//variables seleccion de personaje
let nodo = document.querySelector(".mostrar");
let psjSeleccionado;
document.addEventListener("keydown", manejarEvento);


//variables musica
let musica = document.querySelector(".musica");
musica.addEventListener("click", reproducirMusica);
const musicaFondo = new Audio("./sound/batalla.wav");
let musicaOn = false;

//variable mostrar personajes
var avatarActivo="";
var selectorActivo=false;

function iniciar(){
    //crear tabla de seleccion de personaje
    var tablaAvatar=document.getElementById("personajes");
    var celdasAvatar=tablaAvatar.getElementsByTagName("td");
    
    for (var i=0;i<celdasAvatar.length;i++){
		celdasAvatar[i].addEventListener("click",detectarPersonajes);
        celdasAvatar[i].addEventListener("click", reproducirSonido);
	}
}

//manejar KEYDOWN SPACE
function manejarEvento(evento){
    //nombre del personaje + atacar
    let nombre = nodo.classList[1];
    
    if(-1 == nombre.indexOf("Ataca")&& evento.keyCode === 32){
        ordenAtaque = nombre + "Ataca";
        nodo.classList.remove(nodo.classList[1]);
        nodo.classList.add(ordenAtaque);
        

        setTimeout(function(){
            nodo.classList.remove(nodo.classList[1]);
            nodo.classList.add(nombre);
        },1000); 
    }
}

function reproducirMusica(evt){
    if(musicaOn == false){
        musicaFondo.play();
        console.log("musica");
        musica.style.backgroundImage = "url('./img/header/musicon.png')";
        musicaOn = true;
    }
    else{
        musicaFondo.pause();
        musica.style.backgroundImage = "url('./img/header/musicof.png')";
        musicaOn = false;
    }
    
}
    //funcion asociada a TD 
function reproducirSonido(evt){
    const music = new Audio("./sound/select.wav");
    music.play();
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

    personaje.classList.remove(personaje.classList[1]);
    personaje.classList.add(this.id)
}


window.onload = iniciar();



