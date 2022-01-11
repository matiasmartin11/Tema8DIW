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