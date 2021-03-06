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

function verificarGanador(){
    //Separo la palabra en un array de sus letras
    var array = palabraActual.split('')
    //Metodo para eliminar duplicados
    var array2 = array.filter((valor, indice) => {
          return array.indexOf(valor) === indice;
        })
      
    return (letrasCorrectas.length == array2.length);
}

function resetearVariables(){
    letrasUsadas = [];
    letrasIncorrectas = [];
    letrasCorrectas = [];
    nroErrores = 0;
    tamaño = 0;
    gano = false;
    fin = false;
}

function crearTablero(){
    resetearVariables();
    var pincel = tablero.getContext("2d"); 
    pincel.clearRect(0, 0, tablero.width, tablero.height);
    palabraActual = sortearPalabra(palabras);
                                        console.log(palabraActual);
    generarLineas(tablero,pincel);
    generarBase(pincel);
    document.addEventListener('keypress', (event) => {
        var letra = event.key;
        console.log(letrasIncorrectas);
        if((!fin)&&(!gano)){
        if (verificarLetra(letra)) {
            if(!fueUsada(letra)){
                letrasUsadas.push(letra);
                if(verificarLetraDentroDePalabra(letra,palabraActual)){
                    dibujarLetraCorrecta(pincel,letra);
                    letrasCorrectas.push(letra)
                    if(verificarGanador()){
                        gano = true;
                        dibujarFinDeJuego(pincel,"Ganaste, felicidades", "green");
                    }
                } else {
                    dibujarLetraincorrecta(pincel,letra);
                    letrasIncorrectas.push(letra)
                    dibujarAhorcado(pincel);
                    if(letrasIncorrectas.length == 7){
                        fin = true;
                        dibujarFinDeJuego(pincel,"Fin del juego!", "red");
                    }
                }
            }
        } 
    } else {
    }
        
    }, false);
}


function desistir(){
    fin = true;
    var pincel = tablero.getContext("2d"); 
    dibujarFinDeJuego(pincel,"Fin del juego!", "red");
    dibujarCompleto (pincel);
    var i = 0;
    //Separo la palabra en un array de sus letras
    var array = palabraActual.split('')
    while(i<palabraActual.length){
        dibujarLetraCorrecta(pincel,array[i]);
        i++;
    }
}