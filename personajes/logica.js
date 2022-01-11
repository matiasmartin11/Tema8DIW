var psj = document.querySelector(".psj");

document.addEventListener("keydown", logKey);
document.addEventListener("keyup", event => {
    psj.removeAttribute("class");
    psj.classList.add("psj");
});



function logKey(event){    
    switch (event.keyCode) {
        case 39:
            psj.removeAttribute("class");
            psj.classList.add("psjWalk");
            break;
        case 37:
            break;
        case 32:
            psj.removeAttribute("class");
            psj.classList.add("psjAttack");
            break;
    }
}