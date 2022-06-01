
function imgDisplay(){
        document.getElementById("start").style.display = "none";
        document.getElementById("add").style.display = "none";
    }

function start(){
    imgDisplay();
    crearTablero();
}


    
    //hago la variable btn que es la de encrip
    var btnStart = document.getElementById("start");
    //al hacer click llama a getText
    btnStart.onclick = start;