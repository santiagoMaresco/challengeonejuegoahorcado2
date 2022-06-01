
function imgDisplay(){
        document.getElementById("start").style.display = "none";
        document.getElementById("add").style.display = "none";
    }

function start(){
    imgDisplay();
    crearTablero();
}

    var btDesistir = document.querySelector(".leave")
    btDesistir.classList.add("invisible");
    var btNuevoJuego = document.querySelector(".new-game")
    btNuevoJuego.classList.add("invisible");
    
    //hago la variable btn que es la de encrip
    var btnStart = document.getElementById("start");
    //al hacer click llama a getText
    btnStart.onclick = start;