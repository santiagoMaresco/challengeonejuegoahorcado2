function sortearPalabra(palabras){
    var pos = Math.floor(Math.random()*(palabras.length));
    return palabras[pos];
}

function dibujarLinea(pincel,x,y){
    //pincel.fillStyle = "blue";
    //pincel.fillRect(x,y,10,1);
    pincel.lineWidth=4;
    pincel.strokeStyle="#0A3871";
    pincel.beginPath();
    pincel.moveTo(x,y);
    pincel.lineTo(x+50,y);
    pincel.stroke();
}

function escribirPalabra(ctx,palabra){
    ctx.font = "15px Arial";
    ctx.strokeStyle = "#0A3871";
    ctx.strokeText(palabra, 10, 50);
}

function generarLineas(palabra,tablero,pincel){
    var i = 0;
    var tamaño = palabra.length;
    console.log(tamaño);
    //Tomo el ancho del tablero actual
    
    var anchoTablero = tablero.clientWidth;
    var altoTablero = tablero.clientHeight;
      
    var posicionInicial = anchoTablero/tamaño; 
    var posicion = posicionInicial;

    while(i < tamaño){
        dibujarLinea(pincel,posicion,(altoTablero-altoTablero/6));
        //escribirPalabra(pincel,tablero,palabra);
        console.log(posicion);
        posicion = posicion + posicionInicial;
        i++;
    }
}


function esEspecial(tecla) {
    var soloMayusculas = /^[A-Z]+$/;
    if (tecla.match(soloMayusculas) == null){
        return true;
    }else{
        return false;
    }
}

function accionarTecla (letra){
    if (esEspecial(letra)){
        alert("Ingrese solo letras y en mayusculas");
    } else {
        console.log(letra);
    }
}

function crearTablero(){
    var tablero = document.querySelector(".tablero");
    var pincel = tablero.getContext("2d"); 
    pincel.clearRect(0, 0, tablero.width, tablero.height);
    palabraActual = sortearPalabra(palabras);
                                        console.log(palabraActual);
    generarLineas(palabraActual,tablero,pincel);
    document.addEventListener('keypress', (event) => {
        var letra = event.key;
        accionarTecla(letra);
    }, false);
      
}