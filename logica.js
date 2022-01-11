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