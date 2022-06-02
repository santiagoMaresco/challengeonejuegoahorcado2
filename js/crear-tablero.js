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
    pincel.lineTo(x+30,y);
    pincel.stroke();
}

function escribirPalabra(ctx,palabra){
    ctx.font = "15px Arial";
ctx.strokeStyle = "#0A3871";
ctx.strokeText(palabra, 10, 50);
}

function generarLineas(palabra){
    var i = 0;
    var tamaño = palabra.length;
    //Tomo el ancho del tablero actual
    var tablero = document.querySelector(".tablero");
    var anchoTablero = tablero.clientWidth;
    var altoTablero = tablero.clientHeight;
    var pincel = tablero.getContext("2d");    
    
    while(i < tamaño){
        
        dibujarLinea(pincel,anchoTablero/2,(altoTablero-altoTablero/6));
        //escribirPalabra(pincel,tablero,palabra);
        i++;
    }
}

function crearTablero(){
    palabraActual = sortearPalabra(palabras);
                                        console.log(palabraActual);
    generarLineas(palabraActual);
}