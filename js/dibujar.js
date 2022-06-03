function dibujarLinea(pincel,x,y){
    pincel.lineWidth=4;
    pincel.strokeStyle="#0A3871";
    pincel.beginPath();
    pincel.moveTo(x,y);
    pincel.lineTo(x+50,y);
    pincel.stroke();
}

function dibujarLetra (pincel,letra,tipo,x,y){
    console.log(x);
    pincel.font = tipo;
    pincel.strokeStyle = "#0A3871";
    if(letra != "I"){
        pincel.strokeText(letra, x , y );
    } else {
        pincel.strokeText(letra, x + (anchoTablero * 0.01) , y );
    }
}

function dibujarLetraCorrecta(pincel,letra){
    var i = 0;
    while(i<tamaño){
        if(letra == palabraActual[i]){
            dibujarLetra(pincel, letra,"50px Arial", posiciones[i] + (anchoTablero * 0.005),
                (altoTablero-altoTablero/6) - (altoTablero * 0.01));
        }
        i++;
    };
}

function dibujarLetraincorrecta(pincel,letra){
    dibujarLetra(pincel, letra,"30px Arial",posicionesErroneas[nroErrores] ,
    (altoTablero-altoTablero/16) - (altoTablero * 0.01) );
    console.log(nroErrores);
    nroErrores++;
}



function generarLineas(tablero,pincel){
    var i = 0;
    tamaño = palabraActual.length;
    //Tomo el ancho del tablero actual
    anchoTablero = tablero.clientWidth;
    altoTablero = tablero.clientHeight;
    cargarPosicionesErroneas();

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