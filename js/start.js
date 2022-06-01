
function imgDisplay(){
        document.getElementById("start").style.display = "none";
        document.getElementById("add").style.display = "none";
    }

function visualizarNewGameLeave(){
    btDesistir.classList.remove("invisible");
    btNuevoJuego.classList.remove("invisible");
}

function start(){
    imgDisplay();
    visualizarNewGameLeave();
    //hago la variable btn para nuevo juego
    var btnNewGame = document.getElementById("new-game");
    //al hacer click llama a getText
    btnNewGame.onclick = crearTablero;
}

    var btDesistir = document.querySelector(".leave")
    btDesistir.classList.add("invisible");
    var btNuevoJuego = document.querySelector(".new-game")
    btNuevoJuego.classList.add("invisible");
    
    //hago la variable btn que es la de encrip
    var btnStart = document.getElementById("start");
    //al hacer click llama a getText
    btnStart.onclick = start;