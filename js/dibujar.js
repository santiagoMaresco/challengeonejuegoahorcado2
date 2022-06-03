function dibujarLinea(pincel,x,y){
    pincel.lineWidth=4;
    pincel.strokeStyle="#0A3871";
    pincel.beginPath();
    pincel.moveTo(x,y);
    pincel.lineTo(x+50,y);
    pincel.stroke();
}

function escribirLetra(pincel,letra){
    pincel.font = "15px Arial";
    pincel.strokeStyle = "#0A3871";
    pincel.strokeText(letra, 10, 50);
}

function generarLineas(tablero,pincel){
    var i = 0;
    var tamaño = palabraActual.length;
    console.log(tamaño);
    //Tomo el ancho del tablero actual
    
    var anchoTablero = tablero.clientWidth;
    var altoTablero = tablero.clientHeight;
    
    if (tamaño < 15){
        posiciones[i] = ((anchoTablero * 0.9)/tamaño )- ((anchoTablero * 0.1) /tamaño) ; 
    } else{
        posiciones[i] = ((anchoTablero * 0.9)/tamaño )
    }

    while(i < tamaño){
        dibujarLinea(pincel,posiciones[i],(altoTablero-altoTablero/6));
        console.log(posiciones);
        console.log(i);
        posiciones[i+1] = posiciones[i] + posiciones[0];
        
        i++;
    }
}