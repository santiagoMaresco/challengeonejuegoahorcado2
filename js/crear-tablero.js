function sortearPalabra(palabras){
    var pos = Math.floor(Math.random()*(palabras.length));
    return palabras[pos];
}

function crearTablero(){
    palabraActual = sortearPalabra(palabras);
}