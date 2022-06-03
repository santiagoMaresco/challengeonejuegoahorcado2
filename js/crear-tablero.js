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
    console.log(letra + palabraActual);
    return palabraActual.includes(letra); 
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
        
        if (verificarLetra(letra)) {
            if(verificarLetraDentroDePalabra(letra,palabraActual)){
                console.log("La letra esta");
                //dibujarLetraCorrecta(pincel,tablero,letra);
            } else {
                console.log("La letra NO esta");
                //dibujarLetraincorrecta(pincel,tablero,letra);
            }
        } 
        
    }, false);
}