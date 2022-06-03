function dibujarLinea(pincel,x,y){
    pincel.lineWidth=4;
    pincel.strokeStyle="#0A3871";
    pincel.beginPath();
    pincel.moveTo(x,y);
    pincel.lineTo(x+50,y);
    pincel.stroke();
}

function dibujarLetra (pincel,x,y){
    pincel.font = "15px Arial";
    pincel.strokeStyle = "#0A3871";
    pincel.strokeText(letra, x, y);
}

function dibujarLetraCorrecta(pincel,tablero,letra){
    console.log("La letra esta");
 
}

function dibujarLetraincorrecta(pincel,tablero,letra){
    
    console.log("La letra NO esta");
}

function generarLineas(tablero,pincel){
    var i = 0;
    tamaño = palabraActual.length;
    //Tomo el ancho del tablero actual
    var anchoTablero = tablero.clientWidth;
    altoTablero = tablero.clientHeight;

    //Un if para palabras chicas y grandes
    if (tamaño < 15){
        //Pongo en posiciones[0] donde va a comenzar mi primer letra
        posiciones[i] = ((anchoTablero * 0.9)/tamaño )- ((anchoTablero * 0.1) /tamaño) ; 
    } else{
        posiciones[i] = ((anchoTablero * 0.9)/tamaño )
    }

    while(i < tamaño){
        dibujarLinea(pincel,posiciones[i],(altoTablero-altoTablero/6));
        //Voy agregando las posiciones de todos los guiones
        posiciones[i+1] = posiciones[i] + posiciones[0]; 
        i++;
    }
}