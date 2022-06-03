
function imgDisplay(){
        document.getElementById("start").style.display = "none";
        document.getElementById("add").style.display = "none";
    }

function visualizarNewGameLeave(){
    btDesistir.classList.remove("invisible");
    btNuevoJuego.classList.remove("invisible");
    btDesistir2.classList.remove("invisible");
}

function start(){
    imgDisplay();
    visualizarNewGameLeave();
    crearTablero();

    //hago la variable btn para nuevo juego
    var btnNewGame = document.getElementById("new-game");
    //al hacer click llama a getText
    btnNewGame.onclick = crearTablero;

}

function cargarPosicionesErroneas(){
    var i = 1;
    posicionesErroneas[0] = (anchoTablero / 2) - (anchoTablero /4)
    while(i<7){
        posicionesErroneas[i] = posicionesErroneas[i - 1] + anchoTablero / 12;
        i++
    }
}

    var palabraActual;
    var palabras = ["SANTINO", "ORACLE", "SANTIAGO", "OTORRINOLARINGOLOGIA"];
    var posiciones = [];
    var posicionesErroneas = []
    var letrasUsadas = [];
    var nroErrores = 0;
    var anchoTablero;
    var altoTablero;
    var tamaño = 0;
    var gano;
    var fin;

    var btDesistir = document.querySelector(".leave")
    btDesistir.classList.add("invisible");
    var btNuevoJuego = document.querySelector(".new-game")
    btNuevoJuego.classList.add("invisible");
    var btDesistir2 = document.querySelector(".tablero");
    btDesistir2.classList.add("invisible");
    
    //hago la variable btn que es la de encrip
    var btnStart = document.getElementById("start");
    //al hacer click llama a getText
    btnStart.onclick = start;

