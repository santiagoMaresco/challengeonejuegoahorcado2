function sortearPalabra(palabras){
    var pos = Math.floor(Math.random()*(palabras.length));
    return palabras[pos];
}


function esEspecial(tecla) {
    var soloMayusculas = /^[A-Z]+$/;
    if (tecla.match(soloMayusculas) == null){
        return true;
    }else{
        return false;
    }
}

function verificarLetra (letra){
    if (esEspecial(letra)){
        alert("Ingrese solo letras y en mayusculas");
        return false;
    } else {
        return true;
    }
}

function verificarLetraDentroDePalabra(letra,palabraActual){
    console.log(palabraActual);
    return palabraActual.includes(letra); 
}

function fueUsada(letra){
    return letrasUsadas.includes(letra);
}

function crearTablero(){
    var tablero = document.querySelector(".tablero");
    var pincel = tablero.getContext("2d"); 
    pincel.clearRect(0, 0, tablero.width, tablero.height);
    palabraActual = sortearPalabra(palabras);
                                        console.log(palabraActual);
    generarLineas(tablero,pincel);
    document.addEventListener('keypress', (event) => {
        var letra = event.key;
        if(!fin){
        if (verificarLetra(letra)) {
            if(!fueUsada(letra)){
                letrasUsadas.push(letra);
                if(verificarLetraDentroDePalabra(letra,palabraActual)){
                    dibujarLetraCorrecta(pincel,letra);
                } else {
                    dibujarLetraincorrecta(pincel,letra);
                    letrasIncorrectas.push(letra)
                    if(letrasIncorrectas.length == 7){
                        fin = true;
                        dibujarFinDeJuego(pincel);
                    }
                }
            }
        } 
    } else {
        alert("Fin del juego");
    }
        
    }, false);
}