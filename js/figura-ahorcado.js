function dibujarAhorcado (pincel){
    if (letrasIncorrectas.length == 1){
        generarHorca(pincel);
    } if (letrasIncorrectas.length == 2){
        generarCabeza(pincel);
    } if (letrasIncorrectas.length == 3){
        generarCuerpo(pincel);
    } if (letrasIncorrectas.length == 4){
        generarBrazoIzq(pincel);
    } if (letrasIncorrectas.length == 5){
        generarBrazoDer(pincel);
    } if (letrasIncorrectas.length == 6){
        generarPieIzq(pincel);
    } if (letrasIncorrectas.length == 7){
        generarPieDer(pincel);
    }
}

function generarBase(pincel){
    var base = new Image();
    base.src = "Imagenes/base.png";

    base.onload = function (){
        pincel.drawImage(base,428,410);
    }
    
}

function generarHorca(pincel){
    var horca = new Image();
    horca.src = "Imagenes/horca.png";

    horca.onload = function (){
    pincel.drawImage(horca,428,50);} 
}

function generarCabeza(pincel){
    var horca = new Image();
    horca.src = "Imagenes/cabeza.png";

    horca.onload = function (){
    pincel.drawImage(horca,650.5,95);} 
}

function generarCuerpo(pincel){
    var horca = new Image();
    horca.src = "Imagenes/cuerpo.png";

    horca.onload = function (){
    pincel.drawImage(horca,680,158);} 
}

function generarBrazoIzq(pincel){
    var horca = new Image();
    horca.src = "Imagenes/brazoIzq.png";

    horca.onload = function (){
    pincel.drawImage(horca,646,158);} 
}

function generarBrazoDer(pincel){
    var horca = new Image();
    horca.src = "Imagenes/brazoDer.png";

    horca.onload = function (){
    pincel.drawImage(horca,681,158);} 
}

function generarPieIzq(pincel){
    var horca = new Image();
    horca.src = "Imagenes/pieIzq.png";

    horca.onload = function (){
    pincel.drawImage(horca,646,291);} 
}

function generarPieDer(pincel){
    var horca = new Image();
    horca.src = "Imagenes/pieDer.png";

    horca.onload = function (){
    pincel.drawImage(horca,681,291);} 
}